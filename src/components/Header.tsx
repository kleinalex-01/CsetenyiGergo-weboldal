import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

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
      {isMobileMenuOpen && (
        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}
          onClick={closeMobileMenu}
        >
          <div className="mobile-menu-content">
            {/* Navigation Links */}
            <nav className="mobile-menu__nav">
              {navItems.map((item, index) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`mobile-menu__link ${isActiveLink(item.path) ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="mobile-menu__icon">{item.icon}</span>
                  <span className="mobile-menu__text">{item.label}</span>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;