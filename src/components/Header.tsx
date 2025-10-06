import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (path: string) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', label: 'Főoldal', icon: '🏠' },
    { path: '/szolgaltatasok', label: 'Szolgáltatások', icon: '🔧' },
    { path: '/galeria', label: 'Galéria', icon: '📸' },
    { path: '/kapcsolat', label: 'Kapcsolat', icon: '📞' },
  ];

  return (
    <>
      <header className="header">
        <nav className="nav">
          <div className="nav__brand">
            <Link to="/" className="nav__brand-link">
              <img src="/images/logo.jpg" alt="Csetényi Gépészet Logo" className="nav__logo" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav__list">
            {navItems.map((item) => (
              <li key={item.path} className="nav__item">
                <Link
                  to={item.path}
                  className={`nav__link ${isActiveLink(item.path) ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Dark Mode Toggle */}
          <div className="nav__actions">
            <DarkModeToggle />
          </div>

          {/* Mobile menu toggle button */}
          <button
            className={`nav__mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            aria-expanded={isMobileMenuOpen}
          >
            <div className="nav__hamburger-icon">
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Sliding Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeMobileMenu}
            style={{ 
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
              zIndex: 998
            }}
          >
            <motion.div
              className="mobile-menu-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={{ zIndex: 999 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation Links */}
              <nav className="mobile-menu__nav">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`mobile-menu__link ${isActiveLink(item.path) ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                    >
                      <span className="mobile-menu__icon">{item.icon}</span>
                      <span className="mobile-menu__text">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
                
                {/* Dark Mode Toggle in Mobile Menu */}
                <motion.div
                  className="mobile-menu__dark-mode"
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 30 }}
                  transition={{ duration: 0.3, delay: navItems.length * 0.1 }}
                >
                  <DarkModeToggle />
                </motion.div>
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;