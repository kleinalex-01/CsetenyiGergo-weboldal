import React, { useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiChevronLeft, FiChevronRight, FiZoomIn, FiZoomOut } from 'react-icons/fi';

interface LightboxProps {
  images: { id: number; src: string; alt: string; title: string }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}) => {
  const [isZoomed, setIsZoomed] = React.useState(false);

  // Keyboard navigation
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!isOpen) return;
    
    switch (e.key) {
      case 'Escape':
        onClose();
        break;
      case 'ArrowLeft':
        onPrevious();
        break;
      case 'ArrowRight':
        onNext();
        break;
      default:
        break;
    }
  }, [isOpen, onClose, onNext, onPrevious]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyPress);
    } else {
      document.body.style.overflow = 'unset';
      setIsZoomed(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [isOpen, handleKeyPress]);

  if (!isOpen || !images[currentIndex]) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="lightbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Backdrop */}
          <div className="lightbox__backdrop" onClick={onClose} />

          {/* Close Button */}
          <motion.button
            className="lightbox__close"
            onClick={onClose}
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Close lightbox"
          >
            <FiX />
          </motion.button>

          {/* Zoom Controls */}
          <div className="lightbox__zoom-controls">
            <motion.button
              className="lightbox__zoom-btn"
              onClick={() => setIsZoomed(!isZoomed)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isZoomed ? 'Zoom out' : 'Zoom in'}
            >
              {isZoomed ? <FiZoomOut /> : <FiZoomIn />}
            </motion.button>
          </div>

          {/* Previous Button */}
          {images.length > 1 && (
            <motion.button
              className="lightbox__nav lightbox__nav--prev"
              onClick={onPrevious}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous image"
            >
              <FiChevronLeft />
            </motion.button>
          )}

          {/* Next Button */}
          {images.length > 1 && (
            <motion.button
              className="lightbox__nav lightbox__nav--next"
              onClick={onNext}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next image"
            >
              <FiChevronRight />
            </motion.button>
          )}

          {/* Image Container */}
          <motion.div
            className={`lightbox__content ${isZoomed ? 'lightbox__content--zoomed' : ''}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="lightbox__image"
              onClick={() => setIsZoomed(!isZoomed)}
            />
            <div className="lightbox__info">
              <h3 className="lightbox__title">{currentImage.title}</h3>
              <p className="lightbox__counter">
                {currentIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>

          {/* Thumbnail Strip (Optional) */}
          {images.length > 1 && (
            <div className="lightbox__thumbnails">
              {images.map((image, index) => (
                <motion.button
                  key={image.id}
                  className={`lightbox__thumbnail ${index === currentIndex ? 'lightbox__thumbnail--active' : ''}`}
                  onClick={() => {
                    const diff = index - currentIndex;
                    if (diff > 0) {
                      for (let i = 0; i < diff; i++) onNext();
                    } else if (diff < 0) {
                      for (let i = 0; i < Math.abs(diff); i++) onPrevious();
                    }
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <img src={image.src} alt={image.alt} />
                </motion.button>
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Lightbox;
