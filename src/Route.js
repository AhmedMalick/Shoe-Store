import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import ProductItems from './components/ProductItems/ProductItems';
import AboutUs from './components/AboutUs/AboutUs';
import ContactUs from './components/ContactUs/ContactUs';

function RouteConfig() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="product" element={<Product />} />
                    <Route path="productitems/:id" element={<ProductItems />} />
                    <Route path="aboutus" element={<AboutUs />} />
                    <Route path="contactus" element={<ContactUs />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig;