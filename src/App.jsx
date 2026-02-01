import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ProductCatalog from './pages/ProductCatalog';
import Contact from './pages/Contact';
import StainRemovalPage from './pages/StainRemovalPage';
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
        <Route path="/contact" element={<Contact />} />
        <Route path="/stain-removal/:stainId" element={<StainRemovalPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router >
  );
}

export default App;
