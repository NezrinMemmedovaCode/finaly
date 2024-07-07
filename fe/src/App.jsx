import './App.css';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './pages/home/Home';
import Basket from './pages/basket/Basket';
import Wish from './pages/wish/Wish';
import Add from './pages/add/Add';
import Admin from './pages/admin/Admin';
import Contact from './pages/contact/Contact';
import Register from './pages/auth/register/Register';
import Login from './pages/auth/login/Login';
import CoreProvider from './context/CoreProvider';
import PrivateRoute from './components/PrivateRoute'; 

function App() {
  return (
    <>
      <CoreProvider>
        <HelmetProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="Basket" element={<PrivateRoute element={<Basket />} />} />
                <Route path="Wish" element={<PrivateRoute element={<Wish />} />} />
                <Route path="Add" element={<PrivateRoute element={<Add />} />} />
                <Route path="Admin" element={<PrivateRoute element={<Admin />} />} />
                <Route path="Contact" element={<PrivateRoute element={<Contact />} />} />
                <Route path="Register" element={<Register />} />
                <Route path="Login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </HelmetProvider>
      </CoreProvider>
    </>
  );
}

export default App;
