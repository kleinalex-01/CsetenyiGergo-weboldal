import React, { useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import { FiChevronsDown, FiArrowRight } from 'react-icons/fi';
import SEO from './SEO';
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
      <SEO 
        title="Szolgáltatások"
        description="Professzionális gépészeti szolgáltatások: klímatelepítés és karbantartás, fűtésszerelés, padlófűtés, radiátoros fűtési rendszerek telepítése és vegyszeres tisztítása. Megbízható, minőségi munka garanciával."
        keywords="klímatelepítés, klímaszerelés, klíma karbantartás, fűtésszerelés, padlófűtés, radiátoros fűtés, hőszivattyú, vegyszeres tisztítás, Kan-Therm, PE-RT, Fernox"
        ogImage="https://csetenyigergo.hu/images/climate/climate-1.jpg"
      />
      
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
              <div 
                className="services__hero-arrow"
                onClick={() => {
                  const climateSection = document.getElementById('climate-title');
                  climateSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                role="button"
                aria-label="Scroll to climate section"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    const climateSection = document.getElementById('climate-title');
                    climateSection?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
              >
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
                  Professzionális klímatelepítési és klímaszerelési szolgáltatások. Kizárólag megbízható, energiatakarékos klímaberendezéseket 
                  telepítünk, különös tekintettel a Midea márkára, amely a legmodernebb technológiát és 
                  kiváló minőséget képviseli. Tapasztalatunk garantálja a szakszerű telepítést, 
                  beüzemelést és hosszú távú megbízhatóságot, hogy otthona mindig a kívánt hőmérsékleten legyen.
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
              <h2 id="heating-title" className="services__heating-title">Fűtés és Padlófűtés</h2>
              
              <div className="services__heating-intro" data-aos="fade-up" data-aos-delay="100">
                <p>
                  „Szakszerű padlófűtés kivitelezés a legmodernebb rendszerekkel – legyen szó 
                  klasszikus megoldásról vagy alacsony építési magasságú Tricox Octa rendszerről. 
                  Megbízható technológia, precíz szerelés és tartós kényelem az otthonodban."
                </p>
              </div>
              
              <h3 className="services__heating-subtitle" data-aos="fade-up" data-aos-delay="200">
                Modern megoldások
              </h3>
              
              <div className="services__heating-description" data-aos="fade-up" data-aos-delay="300">
                <p>
                  Padlófűtés renszerek szakszerű kivitelezése az ön igényeinek megfelelően. 
                  Az átadás előtt gondoskodunk minden szükséges beállításról, hogy a lehető 
                  legtökéletesebb legyen a végeredmény.
                </p>
              </div>
              
              <h3 className="services__heating-systems-title" data-aos="fade-up" data-aos-delay="400">
                Rendszerek
              </h3>
              
              <div className="services__heating-systems" data-aos="fade-up" data-aos-delay="500">
                <button className="services__heating-system-btn services__heating-system-btn--kan-therm">
                  Kan-Therm
                </button>
                <button className="services__heating-system-btn services__heating-system-btn--pert">
                  PE-RT
                </button>
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
              <h2 id="building-title" className="services__building-title">Radiátoros fűtési rendszerek</h2>
              
              <h3 className="services__building-subtitle" data-aos="fade-up" data-aos-delay="200">
                Radiátoros fűtési rendszerek kivitelezése
              </h3>
              
              <div className="services__building-description" data-aos="fade-up" data-aos-delay="300">
                <p>
                  Radiátoros fűtési rendszerek teljes körű kivitelezése. Szerelés az igényekhez igazodva 
                  padlóban rejtve vagy falon kívül. Gyors, hatékony hőleadás, könnyen illeszthető meglévő 
                  vagy új épületekhez. Hosszú távú működés és energiatakarékos fűtés.
                </p>
              </div>
              
              <h3 className="services__building-subtitle services__building-subtitle--cleaning" data-aos="fade-up" data-aos-delay="400">
                Fűtési rendszerek vegyszeres tisztítása
              </h3>
              
              <div className="services__building-description" data-aos="fade-up" data-aos-delay="500">
                <p>
                  Idővel lerakódások halmozódnak fel a rendszerben, rontva a hatásfokot. Vegyszeres tisztítást 
                  végzünk <strong>Kammak PROF-03/35</strong> berendezéssel és <strong>Fernox</strong> szerekkel. 
                  Csökken az energiafelhasználás, optimális működés, hosszabb élettartam.
                </p>
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