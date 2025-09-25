import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';

// Sample images for each category (replace with actual image paths)
const climateImages = [
  { id: 1, src: '/images/climate/climate-1.jpg', alt: '', title: '' },
  { id: 2, src: '/images/climate/climate-2.jpg', alt: '', title: '' },
  { id: 3, src: '/images/climate/climate-3.jpg', alt: '', title: '' },
  { id: 4, src: '/images/climate/climate-4.jpg', alt: '', title: '' },
  { id: 5, src: '/images/climate/climate-5.jpg', alt: '', title: '' },
  { id: 6, src: '/images/climate/climate-6.jpg', alt: '', title: '' },
];

const heatingImages = [
  { id: 7, src: '/images/heating/heating-1.jpg', alt: 'Padlófűtés telepítés', title: 'Padlófés telepítés' },
  { id: 8, src: '/images/heating/heating-2.jpg', alt: 'Padlófűtés telepítés', title: 'Padlófűtés telepítés' },
  { id: 9, src: '/images/heating/heating-3.jpg', alt: '', title: '' },
  { id: 10, src: '/images/heating/heating-4.jpg', alt: '', title: '' },
  { id: 11, src: '/images/heating/heating-5.jpg', alt: '', title: '' },
  { id: 12, src: '/images/heating/heating-6.jpg', alt: '', title: '' },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'climate' | 'heating'>('climate');

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const slideFromRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 }
  };

  const slideFromLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <ParallaxProvider>
      <section id="gallery" className="gallery">
        {/* Parallax Background Elements */}
        <Parallax speed={-15} className="gallery__hero-parallax-bg">
          <div className="gallery__hero-background"></div>
        </Parallax>
        <Parallax speed={-25} className="gallery__parallax-bg gallery__parallax-bg--1"></Parallax>
        <Parallax speed={-10} className="gallery__parallax-bg gallery__parallax-bg--2"></Parallax>
        
        <div className="container">
        {/* Header */}
        <motion.div 
          className="gallery__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          transition={{ duration: 0.8 }}
        >
          <h1 className="gallery__title">Galéria</h1>
          <p className="gallery__subtitle">
            Tekintse meg munkáinkat és projektjeinket képekben
          </p>
        </motion.div>

        {/* Category Selector */}
        <motion.div 
          className="gallery__category-selector"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariants}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <button
            className={`gallery__category-btn ${activeCategory === 'climate' ? 'gallery__category-btn--active' : ''}`}
            onClick={() => setActiveCategory('climate')}
          >
            <span className="gallery__category-icon">❄️</span>
            Klíma telepítés és szerviz
          </button>
          <button
            className={`gallery__category-btn ${activeCategory === 'heating' ? 'gallery__category-btn--active' : ''}`}
            onClick={() => setActiveCategory('heating')}
          >
            <span className="gallery__category-icon">🔥</span>
            Fűtésrendszerek, Épületgépészet
          </button>
        </motion.div>

        {/* Image Gallery */}
        <div className="gallery__content">
          {activeCategory === 'climate' && (
            <motion.div 
              className="gallery__category-section"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.6 }}
            >
              <div className="gallery__images">
                {climateImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="gallery__image-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={index % 2 === 0 ? slideFromRight : slideFromLeft}
                    transition={{ 
                      duration: 0.8, 
                      delay: (index % 4) * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="gallery__image-wrapper">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="gallery__image"
                        onError={(e) => {
                          // Fallback for missing images
                          e.currentTarget.src = `https://via.placeholder.com/400x300/22c55e/ffffff?text=${encodeURIComponent(image.title)}`;
                        }}
                      />
                      <div className="gallery__image-overlay">
                        <h3 className="gallery__image-title">{image.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {activeCategory === 'heating' && (
            <motion.div 
              className="gallery__category-section"
              initial="hidden"
              animate="visible"
              variants={fadeInVariants}
              transition={{ duration: 0.6 }}
            >
              <div className="gallery__images">
                {heatingImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    className="gallery__image-container"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    variants={index % 2 === 0 ? slideFromRight : slideFromLeft}
                    transition={{ 
                      duration: 0.8, 
                      delay: (index % 4) * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="gallery__image-wrapper">
                      <img 
                        src={image.src} 
                        alt={image.alt}
                        className="gallery__image"
                        onError={(e) => {
                          // Fallback for missing images
                          e.currentTarget.src = `https://via.placeholder.com/400x300/16a34a/ffffff?text=${encodeURIComponent(image.title)}`;
                        }}
                      />
                      <div className="gallery__image-overlay">
                        <h3 className="gallery__image-title">{image.title}</h3>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
    </ParallaxProvider>
  );
};

export default Gallery;