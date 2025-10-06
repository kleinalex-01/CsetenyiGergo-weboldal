import { useState, useEffect } from 'react';
import { FiArrowUp } from 'react-icons/fi';
import '../styles/components/_back-to-top.scss';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className={`back-to-top ${isVisible ? 'back-to-top--visible' : ''}`}
      onClick={scrollToTop}
      aria-label="Vissza a tetejére"
      title="Vissza a tetejére"
    >
      <FiArrowUp />
    </button>
  );
};

export default BackToTop;
