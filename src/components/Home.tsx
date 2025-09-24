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
      <div id="home" className="home">
        {/* Hero Section */}
        <section className="home__hero" role="banner" aria-labelledby="hero-heading">
          <Parallax speed={-20} className="home__hero-parallax-bg" role="presentation">
            <div className="home__hero-background"></div>
          </Parallax>
          <div className="home__hero-container">
          {/* Left Side - Content */}
          <motion.div 
            className="home__hero-content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
          >
            <motion.h1 
              id="hero-heading"
              className="home__hero-title"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Klíma, Hőszivattyú, Épületgépészet
            </motion.h1>
            <motion.p 
              className="home__hero-subtitle"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Professzionális megoldások önnek és otthonának.
            </motion.p>
            <motion.div 
              className="home__hero-cta"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              role="group"
              aria-label="Kapcsolatfelvételi lehetőségek"
            >
              <a 
                href="tel:+36301234567" 
                className="btn btn--primary btn--lg"
                aria-label="Hívjon fel minket most a +36 30 123 4567 telefonszámon"
              >
                <span className="btn-icon" aria-hidden="true">📞</span> Hívjon most!
              </a>
              <a 
                href="#contact" 
                className="btn btn--white btn--lg"
                aria-label="Ugrás a kapcsolat szekcióhoz"
              >
                <span className="btn-icon" aria-hidden="true">✉️</span> Írjon nekünk!
              </a>
            </motion.div>
          </motion.div>

          {/* Vertical Separator */}
          <motion.div 
            className="home__hero-separator"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            {toolIcons.map((icon, index) => (
              <motion.div 
                key={index} 
                className="home__hero-separator-icon"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              >
                {icon}
              </motion.div>
            ))}
          </motion.div>

          {/* Right Side - Image Carousel */}
          <motion.div 
            className="home__hero-carousel"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            role="region"
            aria-label="Képgaléria a gépészeti szolgáltatásokról"
          >
            <div className="home__hero-carousel-container">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`home__hero-slide ${index === currentSlide ? 'active' : ''}`}
                  role="img"
                  aria-hidden={index !== currentSlide}
                >
                  <LazyLoadImage
                    src={image}
                    alt={`Gépészeti munkálatok képe ${index + 1} - klíma, fűtés és hőszivattyú szolgáltatások`}
                    className="home__hero-image"
                    effect="blur"
                    placeholderSrc="data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f0fdf4'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial,sans-serif' font-size='18' fill='%2322c55e' text-anchor='middle' dy='.3em'%3EBetöltés...%3C/text%3E%3C/svg%3E"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.src = "data:image/svg+xml,%3Csvg width='600' height='400' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%2322c55e'/%3E%3Ctext x='50%25' y='40%25' font-family='Arial,sans-serif' font-size='20' fill='white' text-anchor='middle' dy='.3em'%3EGépészeti Szolgáltatás%3C/text%3E%3Ctext x='50%25' y='60%25' font-family='Arial,sans-serif' font-size='16' fill='white' text-anchor='middle' dy='.3em'%3EKép " + (index + 1) + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>
              ))}
            </div>


          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="home__why-choose" aria-labelledby="why-choose-heading">
        <div className="container">
          <motion.h2
            id="why-choose-heading"
            className="home__why-choose-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Miért válassz minket?
          </motion.h2>
          <motion.ul
            className="home__why-choose-grid"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            role="list"
            aria-label="Előnyeink listája"
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
          </motion.ul>
        </div>
      </section>

      {/* Services Section */}
      <section className="home__services" aria-labelledby="services-heading">
        <Parallax speed={-15} className="home__services-parallax-bg" role="presentation">
          <div className="home__services-background"></div>
        </Parallax>
        <div className="container">
          <motion.h2 
            id="services-heading"
            className="home__services-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Vállalkozásunk főbb szolgáltatásai
          </motion.h2>
          <motion.p 
            className="home__services-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Itt találod munkásságunk dióhéjban. További információkért, nézd meg a <a href="#services" className="home__services-link">Szolgáltatások</a> oldalt.
          </motion.p>
          <motion.div
            className="home__services-grid"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, staggerChildren: 0.2 }}
            viewport={{ once: true }}
            role="list"
            aria-label="Szolgáltatásaink listája"
          >
            {services.map((service, serviceIndex) => (
              <motion.article
                key={serviceIndex}
                className="home__service-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.6, delay: serviceIndex * 0.2 }}
                viewport={{ once: true }}
                role="listitem"
                aria-labelledby={`service-title-${serviceIndex}`}
              >
                <div 
                  className="home__service-carousel"
                  role="region"
                  aria-label={`${service.title} képgaléria`}
                >
                  <div className="home__service-carousel-container">
                    {service.images.map((image, imageIndex) => (
                      <div
                        key={imageIndex}
                        className={`home__service-slide ${imageIndex === serviceSlides[serviceIndex] ? 'active' : ''}`}
                        role="img"
                        aria-hidden={imageIndex !== serviceSlides[serviceIndex]}
                      >
                        <LazyLoadImage
                          src={image}
                          alt={`${service.title} szolgáltatás képe ${imageIndex + 1}`}
                          className="home__service-image"
                          effect="blur"
                          placeholderSrc="data:image/svg+xml,%3Csvg width='400' height='300' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='100%25' height='100%25' fill='%23f0fdf4'/%3E%3Ctext x='50%25' y='50%25' font-family='Arial,sans-serif' font-size='16' fill='%2322c55e' text-anchor='middle' dy='.3em'%3EBetöltés...%3C/text%3E%3C/svg%3E"
                        />
                      </div>
                    ))}
                  </div>

                </div>
                <div className="home__service-content">
                  <h3 id={`service-title-${serviceIndex}`} className="home__service-title">{service.title}</h3>
                  <p className="home__service-description">{service.description}</p>
                  <a 
                    href="#contact" 
                    className="home__service-cta btn btn--primary btn--sm"
                    aria-label={`Bővebb információ a ${service.title} szolgáltatásról`}
                  >
                    Bővebben
                  </a>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
    </ParallaxProvider>
  );
};

export default Home;