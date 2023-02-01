import About from './components/About/about.js';
import Cart from './components/Cart/cart.js';
import Home from './components/Home/home.js';
import NavBar from './components/NavBar/navbar.js';

import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

export default function App(props) {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="Home" element={<Home/>} />
                    <Route path="About" element={<About/>} />
                    <Route path="Cart" element={<Cart/>} />
                </Routes>
            </Router>
        </div>
    )
}