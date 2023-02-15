import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from './components/Product/product.js';
import About from './components/About/about.js';
import Navbar from './components/NavBar/navbar.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Product></Product>
  <About></About>
  //<Navbar></Navbar>
);