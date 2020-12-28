import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Product from './components/Product';
import ProductItems from './components/ProductItems';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function RouteConfig() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" component={<Home />} />
                    <Route path="product" component={<Product />} />
                    <Route path="productitems" component={<ProductItems />} />
                    <Route path="aboutus" component={<AboutUs />} />
                    <Route path="contactus" component={<ContactUs />} />
                </Routes>
            </Router>
        </div>
    )
}

export default RouteConfig;