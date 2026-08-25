import React, { lazy, Suspense, Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';
import './App.css';

// Code-split every page — only the current page's JS is downloaded
const Home             = lazy(() => import('./pages/Home'));
const AboutUs          = lazy(() => import('./pages/AboutUs'));
const ProductCatalog   = lazy(() => import('./pages/ProductCatalog'));
const Contact          = lazy(() => import('./pages/Contact'));
const StainRemovalPage = lazy(() => import('./pages/StainRemovalPage'));
const GuideArticlePage = lazy(() => import('./pages/GuideArticlePage'));

// Minimal loading fallback
const PageLoader = () => (
  <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff' }}>
    <div style={{ width: 40, height: 40, border: '3px solid #e5e7eb', borderTopColor: '#2563eb', borderRadius: '50%', animation: 'spin 0.7s linear infinite' }} />
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

// Error boundary to catch render errors in lazy pages (prevents silent wildcard redirect to /)
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: '#fff', fontFamily: 'Inter, sans-serif', gap: 16 }}>
          <h2 style={{ color: '#1e3a8a', fontSize: 24, fontWeight: 800 }}>Something went wrong</h2>
          <p style={{ color: '#6b7280', fontSize: 14, maxWidth: 400, textAlign: 'center' }}>{this.state.error?.message}</p>
          <button onClick={() => { this.setState({ hasError: false, error: null }); window.location.href = '/'; }}
            style={{ marginTop: 8, padding: '10px 24px', background: '#0047AB', color: '#fff', border: 'none', borderRadius: 999, fontWeight: 700, cursor: 'pointer' }}>
            Go Home
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/"                      element={<Home />} />
            <Route path="/catalog"               element={<ProductCatalog />} />
            <Route path="/about"                 element={<AboutUs />} />
            <Route path="/contact"               element={<Contact />} />
            <Route path="/stain-removal/:stainId" element={<StainRemovalPage />} />
            <Route path="/guides/:guideId"       element={<GuideArticlePage />} />
            {/* Redirect legacy aliases */}
            <Route path="/products"              element={<Navigate to="/catalog" replace />} />
            <Route path="/about-us"              element={<Navigate to="/about"   replace />} />
            <Route path="*"                      element={<Navigate to="/"        replace />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

