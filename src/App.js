import Home from './Pages/Home/Home'
import Products from './Pages/Products/Products'
import ProductItem from './Pages/ProductItem/ProductItem'
import AboutUs from './Pages/AboutUs/AboutUs'
import ContactUs from './Pages/ContactUs/ContactUs'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='products' element={<Products />} />
          <Route path='productitem/:id' element={<ProductItem />} />
          <Route path='aboutus' element={<AboutUs />} />
          <Route path='contactus' element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
