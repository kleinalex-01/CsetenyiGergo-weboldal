import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { useDarkMode } from '../contexts/DarkModeContext';

const DarkModeToggle: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <motion.button
      className="dark-mode-toggle"
      onClick={toggleDarkMode}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      aria-label={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        className="dark-mode-toggle__icon-wrapper"
        initial={false}
        animate={{ rotate: isDarkMode ? 180 : 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        {isDarkMode ? (
          <FiMoon className="dark-mode-toggle__icon dark-mode-toggle__icon--moon" />
        ) : (
          <FiSun className="dark-mode-toggle__icon dark-mode-toggle__icon--sun" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default DarkModeToggle;
