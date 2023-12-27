import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import Homepage from './pages/Homepage/Homepage';
import About from './pages/About/About';
import Navbar from './components/Navbar/Navbar';


// Javascript Xml
// JSX => js + html
//export function App() { <- normal export işleminde başına export geliyor
function App() {  // <- default export işleminde
  return (
  <>
  <Navbar />
  <BrowserRouter>
  <Routes><Route path='/' element={<Homepage />} ></Route>
  <Route path='/' element={<About />} ></Route>
  <Route path='*' element={<p>404 Not Found</p>} ></Route>
  </Routes>
  </BrowserRouter>
  </>
);
}

export default App;
//export const variable = 1;
//export const variable2= 2;
