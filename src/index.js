import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product from './components/Product/product.js';
import About from './components/About/about.js';
import Navbar from './components/NavBar/navbar.js';
import Cart from './components/Cart/cart.js';
import Confirmation from './components/Confirmation/confirmation.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //<Product></Product>
  //<About></About>
  //<Navbar></Navbar>
  //<Cart></Cart>
  <Confirmation></Confirmation>
);