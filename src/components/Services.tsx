import React, { useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FiChevronsDown, FiArrowRight } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services: React.FC = () => {
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
      <Helmet>
        <title>Szolgáltatások - Csetényi Gépészet | Klíma, Fűtés, Épületgépészet</title>
        <meta 
          name="description" 
          content="Professzionális gépészeti szolgáltatások: klímatelepítés, fűtésszerelés, padlófűtés és épületgépészeti munkák. Megbízható, minőségi szolgáltatás garanciával." 
        />
        <meta 
          name="keywords" 
          content="klímatelepítés, fűtésszerelés, padlófűtés, épületgépészet, gépész, klímaszerelés, fűtés javítás, légkondicionáló, radiátor" 
        />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Szolgáltatások - Csetényi Gépészet" />
        <meta property="og:description" content="Professzionális gépészeti szolgáltatások: klímatelepítés, fűtésszerelés, padlófűtés és épületgépészeti munkák." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://csetenyigergo.hu/szolgaltatasok" />
        <meta property="og:image" content="https://csetenyigergo.hu/images/services-og-image.jpg" />
        <meta property="og:locale" content="hu_HU" />
        <meta property="og:site_name" content="Csetényi Gépészet" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Szolgáltatások - Csetényi Gépészet" />
        <meta name="twitter:description" content="Professzionális gépészeti szolgáltatások: klímatelepítés, fűtésszerelés, padlófűtés és épületgépészeti munkák." />
        <meta name="twitter:image" content="https://csetenyigergo.hu/images/services-twitter-image.jpg" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Csetényi Gépészet" />
        <meta name="language" content="hu" />
        <link rel="canonical" href="https://csetenyigergo.hu/szolgaltatasok" />
        
        {/* Structured Data (Schema.org) */}
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Csetényi Gépészet",
              "description": "Professzionális gépészeti szolgáltatások: klímatelepítés, fűtésszerelés, padlófűtés és épületgépészeti munkák",
              "url": "https://csetenyigergo.hu/szolgaltatasok",
              "serviceType": ["Klímatelepítés", "Fűtésszerelés", "Padlófűtés", "Épületgépészet"],
              "areaServed": "Hungary",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Gépészeti Szolgáltatások",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Klímatelepítés és szerelés",
                      "description": "Professzionális klímaberendezések telepítése és karbantartása"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Fűtés és padlófűtés szerelés",
                      "description": "Korszerű fűtési rendszerek telepítése és karbantartása"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service", 
                      "name": "Épületgépészeti munkák",
                      "description": "Komplex épületgépészeti rendszerek tervezése és kivitelezése"
                    }
                  }
                ]
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+36-30-937-8695",
                "contactType": "customer service",
                "availableLanguage": "Hungarian"
              }
            }
          `}
        </script>
      </Helmet>
      
      <section id="services" className="services">
        {/* Hero Section with animated background */}
        <header className="services__hero" role="banner">
          {/* Parallax Background Elements */}
          <Parallax speed={-20} className="services__hero-parallax-bg">
            <div className="services__hero-background"></div>
          </Parallax>
          
          <div className="services__hero-container">
            <div 
              className="services__hero-content"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h1 className="services__hero-title">
                Professzionális Gépészeti Szolgáltatások
              </h1>
              <p className="services__hero-subtitle">
                Itt ismerkedhet meg részletesebben a munkafolyamatokkal
              </p>
              <div className="services__hero-arrow">
                <FiChevronsDown />
              </div>
            </div>
          </div>
        </header>

        {/* Climate Installation Section */}
        <section className="services__climate" aria-labelledby="climate-title">
          <Parallax speed={-15} className="services__climate-parallax">
            <div className="services__climate-bg"></div>
          </Parallax>
          
          <div className="container">
            <div 
              className="services__climate-content"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 id="climate-title" className="services__climate-title">Klímatelepítés és Klímaszerelés</h2>
              <div className="services__climate-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
              </div>
              
              <div className="services__climate-benefits">
                <div className="services__climate-benefit" data-aos="fade-up" data-aos-delay="200">
                  <div className="services__climate-check">✓</div>
                  <span>Gyors és precíz munkavégzés</span>
                </div>
                <div className="services__climate-benefit" data-aos="fade-up" data-aos-delay="300">
                  <div className="services__climate-check">✓</div>
                  <span>Megbízható márkák</span>
                </div>
                <div className="services__climate-benefit" data-aos="fade-up" data-aos-delay="400">
                  <div className="services__climate-check">✓</div>
                  <span>Szakszerű beüzemelés</span>
                </div>
                <div className="services__climate-benefit" data-aos="fade-up" data-aos-delay="500">
                  <div className="services__climate-check">✓</div>
                  <span>Garanciális munkavégzés</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heating/Floor Heating Installation Section */}
        <section className="services__heating" aria-labelledby="heating-title">
          <Parallax speed={-10} className="services__heating-parallax">
            <div className="services__heating-parallax-bg"></div>
          </Parallax>
          
          <div className="container">
            <div 
              className="services__heating-content"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 id="heating-title" className="services__heating-title">Fűtés és Padlófűtés Szerelés</h2>
              <div className="services__heating-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
              </div>
              
              <div className="services__heating-benefits">
                <div className="services__heating-benefit" data-aos="fade-up" data-aos-delay="200">
                  <div className="services__heating-check">✓</div>
                  <span></span>
                </div>
                <div className="services__heating-benefit" data-aos="fade-up" data-aos-delay="300">
                  <div className="services__heating-check">✓</div>
                  <span></span>
                </div>
                <div className="services__heating-benefit" data-aos="fade-up" data-aos-delay="400">
                  <div className="services__heating-check">✓</div>
                  <span></span>
                </div>
                <div className="services__heating-benefit" data-aos="fade-up" data-aos-delay="500">
                  <div className="services__heating-check">✓</div>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Building Engineering Section */}
        <section className="services__building" aria-labelledby="building-title">
          <Parallax speed={-15} className="services__building-parallax">
            <div className="services__building-bg"></div>
          </Parallax>
          
          <div className="container">
            <div 
              className="services__building-content"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h2 id="building-title" className="services__building-title">Épületgépészeti Rendszerek</h2>
              <div className="services__building-description">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis 
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                  Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                </p>
              </div>
              
              <div className="services__building-benefits">
                <div className="services__building-benefit" data-aos="fade-up" data-aos-delay="200">
                  <div className="services__building-check">✓</div>
                  <span></span>
                </div>
                <div className="services__building-benefit" data-aos="fade-up" data-aos-delay="300">
                  <div className="services__building-check">✓</div>
                  <span></span>
                </div>
                <div className="services__building-benefit" data-aos="fade-up" data-aos-delay="400">
                  <div className="services__building-check">✓</div>
                  <span></span>
                </div>
                <div className="services__building-benefit" data-aos="fade-up" data-aos-delay="500">
                  <div className="services__building-check">✓</div>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="services__cta" role="complementary" aria-labelledby="cta-title">
          <Parallax speed={-10} className="services__cta-parallax">
            <div className="services__cta-parallax-bg"></div>
          </Parallax>
          
          <div className="container">
            <div className="services__cta-content">
            <h2 
              id="cta-title"
              className="services__cta-title"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Kérdés esetén keressen bizalommal, közösen mindent megoldunk.
            </h2>
            <a 
              href="/kapcsolat"
              className="services__cta-icon"
              aria-label="Kapcsolatfelvétel - Ugrás a kapcsolat oldalra"
              title="Lépjen velünk kapcsolatba"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <FiArrowRight />
            </a>
            </div>
          </div>
        </section>

      </section>
    </ParallaxProvider>
  );
};

export default Services;