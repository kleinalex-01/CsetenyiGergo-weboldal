import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isMobileMenuOpen) {
      closeMobileMenu();
    }
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
      <header className="header" role="banner">
        <nav className="nav" role="navigation" aria-label="Főnavigáció">
          <div className="nav__brand">
            <Link 
              to="/" 
              className="nav__brand-link"
              aria-label="Csetényi Gépészet főoldal"
            >
              <img 
                src="/images/logo.jpg" 
                alt="Csetényi Gépészet Logo - Klíma, Hőszivattyú, Épületgépészet" 
                className="nav__logo" 
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="nav__list" role="menubar">
            {navItems.map((item) => (
              <li key={item.path} className="nav__item" role="none">
                <Link
                  to={item.path}
                  className={`nav__link ${isActiveLink(item.path) ? 'active' : ''}`}
                  role="menuitem"
                  aria-current={isActiveLink(item.path) ? 'page' : undefined}
                  aria-label={`${item.label} oldal`}
                >
                  <span aria-hidden="true">{item.icon}</span>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile menu toggle button */}
          <button
            className={`nav__mobile-toggle ${isMobileMenuOpen ? 'open' : ''}`}
            onClick={toggleMobileMenu}
            aria-label={isMobileMenuOpen ? 'Navigációs menü bezárása' : 'Navigációs menü megnyitása'}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-navigation-menu"
            aria-haspopup="true"
            type="button"
          >
            <div className="nav__hamburger-icon" aria-hidden="true">
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
              <span className="nav__hamburger-line"></span>
            </div>
            <span className="sr-only">
              {isMobileMenuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
            </span>
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
            role="presentation"
            aria-hidden="false"
          >
            <motion.div
              className="mobile-menu-content"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              onKeyDown={handleKeyDown}
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-title"
            >
              {/* Navigation Links */}
              <nav 
                className="mobile-menu__nav" 
                id="mobile-navigation-menu"
                role="navigation"
                aria-label="Mobil navigáció"
              >
                <h2 id="mobile-menu-title" className="sr-only">Navigációs menü</h2>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 30 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    role="none"
                  >
                    <Link
                      to={item.path}
                      className={`mobile-menu__link ${isActiveLink(item.path) ? 'active' : ''}`}
                      onClick={closeMobileMenu}
                      aria-current={isActiveLink(item.path) ? 'page' : undefined}
                      aria-label={`${item.label} oldalra navigálás és menü bezárása`}
                      role="menuitem"
                      tabIndex={isMobileMenuOpen ? 0 : -1}
                    >
                      <span className="mobile-menu__icon" aria-hidden="true">{item.icon}</span>
                      <span className="mobile-menu__text">{item.label}</span>
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;