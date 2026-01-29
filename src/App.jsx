import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ProductCatalog from './pages/ProductCatalog';
import Contact from './pages/Contact';
import ScrollToTop from './components/ui/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<ProductCatalog />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/certifications" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router >
  );
}

export default App;
