import express from 'express'
import mongoose from 'mongoose';
import cors from "cors";
const app = express()
const port = 3000



app.use(express.json());
app.use(cors())

const prroductSchema = new mongoose.Schema({
    name: String,
    price:Number,
    category:String

  });

  const ProductModel = mongoose.model('product', prroductSchema);

app.get('/products',async (req, res) => {

    const products= await ProductModel.find()
    res.send(products)
  })
  app.get('/products/:id',async (req, res) => {
 let {id}=req.params
    const products= await ProductModel.findById(id)
    res.send(products)
  })
  app.get('/categories',async (req, res) => {

    const products= await ProductModel.find()
    res.send(products)
  })
  app.get('/categories/:category',async (req, res) => {
 let catgor=req.params.category
    const products= await ProductModel.find({category:catgor})
    res.send(products)
  })
  app.post('/products',async (req, res) => {
    const body=req.body
    const product=new ProductModel(body)
    await product.save()
    res.send(product)
  })
  
  app.put('/products/:id',async (req, res) => {
    const body=req.body
    const {id}=req.params
    const updateproducts=await ProductModel.findByIdAndUpdate(id,body)
    res.send(updateproducts)
  })
  
  app.delete('/products/:id',async (req, res) => {
    const {id}=req.params
    const deleteproducts=await ProductModel.findByIdAndDelete(id)
    res.send(deleteproducts)
  })

  mongoose.connect('mongodb+srv://nezrin:nezrin@nezrin.dtlskcs.mongodb.net/')
  .then(() => console.log('Connected!'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})