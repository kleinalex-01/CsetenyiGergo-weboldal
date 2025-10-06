import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import BackToTop from './components/BackToTop';
import ErrorBoundary from './components/ErrorBoundary';
import { DarkModeProvider } from './contexts/DarkModeContext';
import './styles/main.scss';

// Lazy load route components
const Home = lazy(() => import('./components/Home'));
const Services = lazy(() => import('./components/Services'));
const Gallery = lazy(() => import('./components/Gallery'));
const Contact = lazy(() => import('./components/Contact'));

// Loading component
const PageLoader = () => (
  <div style={{
    minHeight: '60vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.5rem',
    color: '#22c55e'
  }}>
    <div className="loader">Betöltés...</div>
  </div>
);

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <DarkModeProvider>
        <Router>
          <ScrollToTop />
          <div className="app">
            <Header />
            <main style={{ paddingTop: '80px', minHeight: 'calc(100vh - 160px)' }}>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/szolgaltatasok" element={<Services />} />
                  <Route path="/galeria" element={<Gallery />} />
                  <Route path="/kapcsolat" element={<Contact />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <BackToTop />
          </div>
        </Router>
      </DarkModeProvider>
    </ErrorBoundary>
  );
};

export default App;