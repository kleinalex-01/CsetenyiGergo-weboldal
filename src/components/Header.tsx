import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

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

  // Handle scroll behavior - hide/show header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px - hide header
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up - show header
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: Event) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className={`header ${isHeaderVisible ? '' : 'header--hidden'}`}>
      <nav className="nav" ref={menuRef}>
        <div className="nav__brand">
          <Link to="/" className="nav__brand-link" onClick={closeMobileMenu}>
            <img src="/images/logo.jpg" alt="Csetényi Gépészet Logo" className="nav__logo" />
          </Link>
        </div>

        {/* Mobile menu toggle button */}
        <button
          className={`nav__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? 'Menü bezárása' : 'Menü megnyitása'}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </button>

        <ul
          className={`nav__list ${isMobileMenuOpen ? 'nav__list--open' : ''}`}
          id="mobile-menu"
          role="menu"
          aria-hidden={!isMobileMenuOpen}
        >
          <li className="nav__item" role="none">
            <Link
              to="/"
              className={`nav__link ${isActiveLink('/') ? 'active' : ''}`}
              onClick={closeMobileMenu}
              role="menuitem"
              aria-current={isActiveLink('/') ? 'page' : undefined}
            >
              Főoldal
            </Link>
          </li>
          <li className="nav__item" role="none">
            <Link
              to="/szolgaltatasok"
              className={`nav__link ${isActiveLink('/szolgaltatasok') ? 'active' : ''}`}
              onClick={closeMobileMenu}
              role="menuitem"
              aria-current={isActiveLink('/szolgaltatasok') ? 'page' : undefined}
            >
              Szolgáltatások
            </Link>
          </li>
          <li className="nav__item" role="none">
            <Link
              to="/galeria"
              className={`nav__link ${isActiveLink('/galeria') ? 'active' : ''}`}
              onClick={closeMobileMenu}
              role="menuitem"
              aria-current={isActiveLink('/galeria') ? 'page' : undefined}
            >
              Galéria
            </Link>
          </li>
          <li className="nav__item" role="none">
            <Link
              to="/kapcsolat"
              className={`nav__link ${isActiveLink('/kapcsolat') ? 'active' : ''}`}
              onClick={closeMobileMenu}
              role="menuitem"
              aria-current={isActiveLink('/kapcsolat') ? 'page' : undefined}
            >
              Kapcsolat
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;