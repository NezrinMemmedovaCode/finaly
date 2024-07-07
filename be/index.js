import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const app = express();
const port = 3000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET; 

app.use(express.json());
app.use(cors());

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'user'], default: 'user' }
});

const UserModel = mongoose.model('user', userSchema);

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String
});

const ProductModel = mongoose.model('product', productSchema);

mongoose.connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB'));

app.use(session({
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: MONGO_URI }),
}));

const authenticate = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

const authorizeRole = (role) => (req, res, next) => {
  if (req.session.user?.role === role) {
    next();
  } else {
    res.sendStatus(403);
  }
};

app.post('/register', async (req, res) => {
  const { username, password, role } = req.body;
  const user = new UserModel({ username, password, role });
  await user.save();
  res.sendStatus(201);
});

app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await UserModel.findOne({ username, password });
    if (user) {
      const token = jwt.sign({ username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '1h' });
      res.json({ message: 'Login successful', token });  
    } else {
      res.sendStatus(401);
    }
  } catch (error) {
    console.error('Error logging in user:', error);
    res.sendStatus(500);
  }
});

app.post('/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json({ message: 'Logout successful' });
    }
  });
});

app.get('/products', async (req, res) => {
  const products = await ProductModel.find();
  res.send(products);
});

app.get('/products/:id', async (req, res) => {
  let { id } = req.params;
  const product = await ProductModel.findById(id);
  res.send(product);
});

app.get('/categories', async (req, res) => {
  const products = await ProductModel.find();
  const categories = [...new Set(products.map(p => p.category))];
  res.send(categories);
});

app.get('/categories/:category', async (req, res) => {
  let category = req.params.category;
  const products = await ProductModel.find({ category });
  res.send(products);
});

app.post('/products', authenticate, authorizeRole('admin'), async (req, res) => {
  const body = req.body;
  const product = new ProductModel(body);
  await product.save();
  res.send(product);
});

app.put('/products/:id', authenticate, authorizeRole('admin'), async (req, res) => {
  const body = req.body;
  const { id } = req.params;
  const updatedProduct = await ProductModel.findByIdAndUpdate(id, body, { new: true });
  res.send(updatedProduct);
});

app.delete('/products/:id', authenticate, authorizeRole('admin'), async (req, res) => {
  const { id } = req.params;
  const deletedProduct = await ProductModel.findByIdAndDelete(id);
  res.send(deletedProduct);
});

const verifyToken = (req, res, next) => {
  const token = req.headers['authorization']?.split(' ')[1];  
  if (!token) {
    return res.sendStatus(403); 
  }
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.sendStatus(403);
    }
    req.user = decoded;  
    next();
  });
};

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
