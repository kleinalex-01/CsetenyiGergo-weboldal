import React, { useState, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import AOS from 'aos';
import 'aos/dist/aos.css';

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

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      offset: 50,
      easing: 'ease-out'
    });
  }, []);

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
        <div 
          className="gallery__header"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h1 className="gallery__title">Galéria</h1>
          <p className="gallery__subtitle">
            Tekintse meg munkáinkat és projektjeinket képekben
          </p>
        </div>

        {/* Category Selector */}
        <div 
          className="gallery__category-selector"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="200"
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
        </div>

        {/* Image Gallery */}
        <div className="gallery__content">
          {activeCategory === 'climate' && (
            <div className="gallery__category-section">
              <div className="gallery__images">
                {climateImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="gallery__image-container"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={`${(index % 4) * 100}`}
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
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeCategory === 'heating' && (
            <div className="gallery__category-section">
              <div className="gallery__images">
                {heatingImages.map((image, index) => (
                  <div
                    key={image.id}
                    className="gallery__image-container"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay={`${(index % 4) * 100}`}
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
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
    </ParallaxProvider>
  );
};

export default Gallery;