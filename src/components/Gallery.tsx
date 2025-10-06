import React, { useState, useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import SEO from './SEO';
import LoadingSkeleton from './LoadingSkeleton';
import Lightbox from './Lightbox';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample images for each category (replace with actual image paths)
const climateImages = [
  { id: 1, src: '/images/climate/climate-1.jpg', alt: 'Klímatelepesítési munka - belső egység szakszerű felszerelése', title: 'Klímatelepesítés' },
  { id: 2, src: '/images/climate/climate-2.jpg', alt: 'Modern split klíma rendszer telepítése lakotérben', title: 'Split klíma rendszer' },
  { id: 3, src: '/images/climate/climate-3.jpg', alt: 'Klíma külcső egység telepítése és csővezeték kifejtettése', title: 'Külcső egység telepítés' },
  { id: 4, src: '/images/climate/climate-4.jpg', alt: 'Professzionális klímakarbantartás és szerviz munka', title: 'Klímakarbantartás' },
  { id: 5, src: '/images/climate/climate-5.jpg', alt: 'Több helyiséges klímarendszer telepítés irodahelyiségben', title: 'Több helyiséges rendszer' },
  { id: 6, src: '/images/climate/climate-6.jpg', alt: 'Klíma belső egység esztétikus elhelyezése falon', title: 'Belső egység telepítés' },
];

const heatingImages = [
  { id: 7, src: '/images/heating/heating-1.jpg', alt: 'Padlófűtés telepítése - vezetékek lefektetése és rögzítése', title: 'Padlófűtés telepítés' },
  { id: 8, src: '/images/heating/heating-2.jpg', alt: 'Padlófűtés csatornarendszer telepítése nagy területen', title: 'Padlófűtés rendszer' },
  { id: 9, src: '/images/heating/heating-3.jpg', alt: 'Fűtési rendszer osztó-gyűjtő telepítése és beállítása', title: 'Osztó-gyűjtő rendszer' },
  { id: 10, src: '/images/heating/heating-4.jpg', alt: 'Radiátoros fűtés csővezeték és radiátor felszerelése', title: 'Radiátoros fűtés' },
  { id: 11, src: '/images/heating/heating-5.jpg', alt: 'Hőszivattyú rendszer telepítése és beüzemezetése', title: 'Hőszivattyú telepítés' },
  { id: 12, src: '/images/heating/heating-6.jpg', alt: 'Fűtési rendszer vegyszeres tisztítása és karbantartása', title: 'Rendszertisztítás' },
];

const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'climate' | 'heating'>('climate');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const currentImages = activeCategory === 'climate' ? climateImages : heatingImages;

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % currentImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + currentImages.length) % currentImages.length);
  };

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
      <SEO 
        title="Galéria"
        description="Tekintse meg elvégzett gépészeti munkáinkat képekben: klímatelepítések, fűtésszerelések, padlófűtés rendszerek, hőszivattyúk. Professzionális kivitelezés és minőségi munka."
        keywords="galéria, referenciák, klíma képek, fűtés képek, padlófűtés galéria, hőszivattyú telepítés, gépészeti munkák"
        ogImage="https://csetenyigergo.hu/images/climate/climate-1.jpg"
      />
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
                    onClick={() => openLightbox(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="gallery__image-wrapper">
                      <LazyLoadImage
                        src={image.src} 
                        alt={image.alt}
                        className="gallery__image"
                        effect="blur"
                        placeholder={<LoadingSkeleton variant="image" />}
                        onError={(e) => {
                          // Fallback for missing images
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/400x300/22c55e/ffffff?text=${encodeURIComponent(image.title)}`;
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
                    onClick={() => openLightbox(index)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="gallery__image-wrapper">
                      <LazyLoadImage
                        src={image.src} 
                        alt={image.alt}
                        className="gallery__image"
                        effect="blur"
                        placeholder={<LoadingSkeleton variant="image" />}
                        onError={(e) => {
                          // Fallback for missing images
                          const target = e.target as HTMLImageElement;
                          target.src = `https://via.placeholder.com/400x300/16a34a/ffffff?text=${encodeURIComponent(image.title)}`;
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

      {/* Lightbox */}
      <Lightbox
        images={currentImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onNext={nextImage}
        onPrevious={previousImage}
      />
    </section>
    </ParallaxProvider>
  );
};

export default Gallery;