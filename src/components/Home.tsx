import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
      benefits: ['Megbízható márkák', 'Gyors telepítés', 'Garancia minden munkára', 'Esztétikus megjelenés'],
      images: ['/images/klima1.jpeg', '/images/klima2.jpeg', '/images/klima3.jpeg'],
    },
    {
      title: 'Fűtés/Padlófűtés szerelés',
      description: 'Minőségi fűtési rendszerek és padlófűtés telepítése.',
      icon: '🔥',
      benefits: ['Korszerű technológiák', 'Egyedi tervezés', 'Hosszú távú megoldás', 'Otthona kényelme'],
      images: ['/images/padlofutes1.jpeg', '/images/padlofutes2.jpeg', '/images/padlofutes3.jpeg'],
    },
    {
      title: 'Hőszivattyúk telepítése',
      description: 'Energiatakarékos hőszivattyú rendszerek szakértői telepítése.',
      icon: '⚡',
      benefits: ['Átlátható megoldások', 'Energiahatékonyság', 'Stabil hőérzet', 'Hosszú élettartam'],
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
    <ParallaxProvider>
      <section id="home" className="home">
        {/* Hero Section */}
        <section className="home__hero">
          <Parallax speed={-20} className="home__hero-parallax-bg">
            <div className="home__hero-background"></div>
          </Parallax>
          <div className="home__hero-container">
          {/* Left Side - Content */}
          <div className="home__hero-content">
            <h1 className="home__hero-title">
              Klíma, Hőszivattyú, Épületgépészet
            </h1>
            <p className="home__hero-subtitle">
              Professzionális megoldások önnek és otthonának.
            </p>
            <div className="home__hero-cta">
              <a href="tel:+36301234567" className="btn btn--primary btn--lg">
                <span className="btn-icon">📞</span> Hívjon most!
              </a>
              <a href="#contact" className="btn btn--white btn--lg">
                <span className="btn-icon">✉️</span> Írjon nekünk!
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
                  <LazyLoadImage
                    src={image}
                    alt={`Hero image ${index + 1}`}
                    className="home__hero-image"
                    effect="blur"
                    placeholderSrc={`https://via.placeholder.com/600x400/f0fdf4/22c55e?text=Loading...`}
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

      {/* Why Choose Us Section */}
      <section className="home__why-choose">
        <div className="container">
          <motion.h2
            className="home__why-choose-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Miért válassz minket?
          </motion.h2>
          <motion.div
            className="home__why-choose-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {[
              {
                icon: "🏆",
                title: "Több éves tapasztalat",
                description: "Családi vállalkozásként több éves tapasztalattal rendelkezünk"
              },
              {
                icon: "🌟",
                title: "Nemzetközi elismerés",
                description: "Nemzetközi Klíma Hatóság által elismert vállalkozás vagyunk"
              },
              {
                icon: "🛡️",
                title: "Garancia minden munkára",
                description: "Teljes körű garanciát vállalunk minden általunk végzett munkára"
              },
              {
                icon: "🤝",
                title: "Rugalmas megoldások",
                description: "Nyitottak vagyunk minden lehetőségre, közösen bármit megoldunk"
              }
            ].map((item, index) => (
              <motion.li
                key={index}
                className="home__why-choose-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="home__why-choose-card-icon">
                  {item.icon}
                </div>
                <h3 className="home__why-choose-card-title">
                  {item.title}
                </h3>
                <p className="home__why-choose-card-description">
                  {item.description}
                </p>
              </motion.li>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="home__services">
        <Parallax speed={-15} className="home__services-parallax-bg">
          <div className="home__services-background"></div>
        </Parallax>
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
                whileHover={{ y: -8, scale: 1.02 }}
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
                        <LazyLoadImage
                          src={image}
                          alt={`${service.title} ${imageIndex + 1}`}
                          className="home__service-image"
                          effect="blur"
                          placeholderSrc={`https://via.placeholder.com/400x300/f0fdf4/22c55e?text=Loading...`}
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
                  <h3 className="home__service-title">{service.title}</h3>
                  <p className="home__service-description">{service.description}</p>
                  <a href="#contact" className="home__service-cta btn btn--primary btn--sm">
                    Bővebben
                  </a>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </section>
    </ParallaxProvider>
  );
};

export default Home;