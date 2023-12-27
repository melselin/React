import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';
import Products from './pages/Product/Products';
import AddProduct from './pages/Product/AddProduct';
import ProductDetails from './pages/Product/ProductDetails';


function App() {  
  return (
  <>
  <Navbar />
  <BrowserRouter>
  <Routes>
        <Route path="/" Component={Homepage}></Route>
        <Route path="/products" Component={Products}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/products/add" Component={AddProduct}></Route>
        <Route path="/products/:id" Component={ProductDetails}></Route>
        <Route path="*" Component={<div>404 Not found</div>}></Route>
      </Routes>
  </BrowserRouter>
  </>
);
}

export default App;
