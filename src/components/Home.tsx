import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [serviceSlides, setServiceSlides] = useState([0, 0, 0]);

  // Sample images for the carousel - replace with actual images
  const carouselImages = [
    '/images/hero-image1.jpeg',
    '/images/hero-image2.jpeg',
    '/images/hero-image3.jpeg',
  ];

  // Services data
  const services = useMemo(() => [
    {
      title: 'Klímatelepítés/karbantartás',
      description: 'Professzionális klíma telepítés és karbantartás szolgáltatás.',
      icon: '❄️',
      benefits: ['Energiatakarékos megoldások', 'Gyors telepítés', 'Garancia minden munkára', '24/7 ügyelet'],
      images: ['/images/klima1.jpeg', '/images/klima2.jpeg', '/images/klima3.jpeg'],
    },
    {
      title: 'Fűtés/Padlófűtés szerelés',
      description: 'Minőségi fűtési rendszerek és padlófűtés telepítése.',
      icon: '🔥',
      benefits: ['Egyedi tervezés', 'Korszerű technológiák', 'Hosszú távú garancia', 'Kényelmes fűtés'],
      images: ['/images/padlofutes1.jpeg', '/images/padlofutes2.jpeg', '/images/padlofutes3.jpeg'],
    },
    {
      title: 'Hőszivattyúk telepítése',
      description: 'Energiatakarékos hőszivattyú rendszerek szakértői telepítése.',
      icon: '⚡',
      benefits: ['Környezetbarát megoldás', 'Alacsony energia költség', 'Intelligens vezérlés', 'Hosszú élettartam'],
      images: ['/images/hoszivattyu1.jpeg', '/images/hoszivattyu2.jpeg', '/images/hoszivattyu3.jpeg'],
    },
  ], []);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [carouselImages.length]);

  // Service carousels
  useEffect(() => {
    const intervals = services.map((_, index) =>
      setInterval(() => {
        setServiceSlides(prev => {
          const newSlides = [...prev];
          newSlides[index] = (newSlides[index] + 1) % services[index].images.length;
          return newSlides;
        });
      }, 5000)
    );

    return () => intervals.forEach(clearInterval);
  }, [services]);

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

      {/* Services Section */}
      <section className="home__services">
        <div className="container">
          <h2 className="home__services-title">Vállalkozásunk főbb szolgáltatásai</h2>
          <p className="home__services-subtitle">
            Itt találod munkásságunk dióhéjban. További információkért, nézd meg a <a href="#services" className="home__services-link">Szolgáltatások</a> oldalt.
          </p>
          <motion.div
            className="home__services-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
          >
            {services.map((service, serviceIndex) => (
              <motion.div
                key={serviceIndex}
                className="home__service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="home__service-carousel">
                  <div className="home__service-carousel-container">
                    {service.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className={`home__service-slide ${imageIndex === serviceSlides[serviceIndex] ? 'active' : ''}`}
                      >
                        <img
                          src={image}
                          alt={`${service.title} ${imageIndex + 1}`}
                          className="home__service-image"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="home__service-indicators">
                    {service.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        className={`home__service-indicator ${imageIndex === serviceSlides[serviceIndex] ? 'active' : ''}`}
                        onClick={() => {
                          const newSlides = [...serviceSlides];
                          newSlides[serviceIndex] = imageIndex;
                          setServiceSlides(newSlides);
                        }}
                        aria-label={`View image ${imageIndex + 1} for ${service.title}`}
                      />
                    ))}
                  </div>
                </div>
                <div className="home__service-content">
                  <div className="home__service-icon">{service.icon}</div>
                  <h3 className="home__service-title">{service.title}</h3>
                  <ul className="home__service-benefits">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
  );
};

export default Home;