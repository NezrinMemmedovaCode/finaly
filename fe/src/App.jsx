
import './App.css'
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './Layout/MainLayout';
import Home from './pages/home/Home';
import Basket from './pages/basket/Basket';
import Wish from './pages/wish/Wish';
import Add from './pages/add/Add';
import Admin from './pages/admin/Admin';
import Contact from './pages/contact/Contact';
import MainProvider from './context/MainProvider';
import CoreProvider from './context/CoreProvider';

function App() {

  return (
    <>
    <CoreProvider>
     <HelmetProvider>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="Basket" element={<Basket />} />
          <Route path="Wish" element={<Wish />} />
          <Route path="Add" element={<Add />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Contact" element={<Contact />} />
           </Route>
      </Routes>
    </BrowserRouter>
     </HelmetProvider>
     </CoreProvider>
      
    </>
  )
}

export default App
