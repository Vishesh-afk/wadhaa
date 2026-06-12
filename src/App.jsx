import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';
import './App.css';

// Code-split every page — only the current page's JS is downloaded
const Home             = lazy(() => import('./pages/Home'));
const AboutUs          = lazy(() => import('./pages/AboutUs'));
const ProductCatalog   = lazy(() => import('./pages/ProductCatalog'));
const Contact          = lazy(() => import('./pages/Contact'));
const StainRemovalPage = lazy(() => import('./pages/StainRemovalPage'));

// Minimal loading fallback
const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
    <div style={{ width: 40, height: 40, border: '3px solid #e5e7eb', borderTopColor: '#2563eb', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"                      element={<Home />} />
          <Route path="/catalog"               element={<ProductCatalog />} />
          <Route path="/about"                 element={<AboutUs />} />
          <Route path="/contact"               element={<Contact />} />
          <Route path="/stain-removal/:stainId" element={<StainRemovalPage />} />
          {/* Redirect legacy aliases */}
          <Route path="/products"              element={<Navigate to="/catalog" replace />} />
          <Route path="/about-us"              element={<Navigate to="/about"   replace />} />
          <Route path="*"                      element={<Navigate to="/"        replace />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;

