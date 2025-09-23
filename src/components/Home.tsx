import React, { useState, useEffect } from 'react';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample images for the carousel - replace with actual images
  const carouselImages = [
    '/images/hero-image1.jpeg',
    '/images/hero-image2.jpeg',
    '/images/hero-image3.jpeg',
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  const toolIcons = ['🔧', '⚙️', '🔨', '🛠️', '📏', '🔩', '⚡', '🚀'];

  return (
    <section id="home" className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-container">
          {/* Left Side - Content */}
          <div className="home__hero-content">
            <h1 className="home__hero-title">
              Víz, gáz, klíma, hőszivattyú szerelés
            </h1>
            <p className="home__hero-subtitle">
              Professzionális megoldások önnek és otthonának.
            </p>
            <div className="home__hero-cta">
              <a href="tel:+36301234567" className="btn btn--primary btn--lg">
                📞 Hívjon most!
              </a>
              <a href="#contact" className="btn btn--white btn--lg">
                ✉️ Írjon nekünk!
              </a>
            </div>
          </div>

          {/* Vertical Separator */}
          <div className="home__hero-separator">
            {toolIcons.map((icon, index) => (
              <div key={index} className="home__hero-separator-icon">
                {icon}
              </div>
            ))}
          </div>

          {/* Right Side - Image Carousel */}
          <div className="home__hero-carousel">
            <div className="home__hero-carousel-container">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`home__hero-slide ${index === currentSlide ? 'active' : ''}`}
                >
                  <img
                    src={image}
                    alt={`Hero image ${index + 1}`}
                    className="home__hero-image"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = `https://via.placeholder.com/600x400/22c55e/ffffff?text=Gépészeti+Szolgáltatás+${index + 1}`;
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Carousel Indicators */}
            <div className="home__hero-indicators">
              {carouselImages.map((_, index) => (
                <button
                  key={index}
                  className={`home__hero-indicator ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the home page content can go here */}
      <div className="container">
        <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: '#f9fafb', borderRadius: '8px' }}>
          <h2>Tudjon meg többet rólunk</h2>
          <p>A Csetényi Gépészet csapata elkötelezett a minőségi szolgáltatások nyújtása mellett.</p>
        </div>
      </div>
    </section>
  );
};

export default Home;