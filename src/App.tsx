import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import './styles/main.scss';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <a href="#main-content" className="skip-link">
          Ugrás a főtartalomhoz
        </a>
        <Header />
        <main 
          id="main-content" 
          role="main"
          style={{ paddingTop: '80px', minHeight: 'calc(100vh - 160px)' }}
          aria-label="Főtartalom"
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/szolgaltatasok" element={<Services />} />
            <Route path="/galeria" element={<Gallery />} />
            <Route path="/kapcsolat" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;