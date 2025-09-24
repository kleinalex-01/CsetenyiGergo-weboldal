import React from 'react';
import { FaPhone, FaEnvelope, FaFacebookF } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Main footer content */}
        <div className="footer__content">
          {/* Google Maps Section */}
          <div className="footer__section footer__section--map">
            {/* Address Section - Moved above map */}
            <div className="footer__address">
              <h4 id="address-heading">Címünk</h4>
              <address aria-labelledby="address-heading">
                <span className="address-line">8225 Szentkirályszabadja</span><br />
                <span className="address-line">Petőfi Sándor utca 29</span>
              </address>
            </div>

            <div className="footer__map-container" role="region" aria-labelledby="map-heading">
              <h5 id="map-heading" className="sr-only">Térképes helymeghatározás</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.123456789012!2d19.040234315623456!3d47.498345679012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc6b12345678%3A0xabcdef1234567890!2s8225%20Szentkir%C3%A1lyszabadja%2C%20Pet%C5%91fi%20S%C3%A1ndor%20utca%2029!5e0!3m2!1shu!2shu!4v1698765432109!5m2!1shu!2shu"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Csetényi Gépészet Kft. térképe - 8225 Szentkirályszabadja, Petőfi Sándor utca 29"
                aria-describedby="map-description"
              ></iframe>
              <p id="map-description" className="sr-only">
                Interaktív térkép, amely megmutatja a Csetényi Gépészet Kft. pontos helyét Szentkirályszabadján, a Petőfi Sándor utca 29. szám alatt.
              </p>
            </div>

            {/* Action Buttons - Now with icons only */}
            <nav className="footer__action-buttons" role="navigation" aria-label="Kapcsolatfelvételi lehetőségek">
              <a
                href="tel:+36309378695"
                className="footer__action-button footer__action-button--phone"
                aria-label="Hívjon fel minket a +36 30 937 8695 telefonszámon"
                title="Telefonos kapcsolatfelvétel"
              >
                <FaPhone aria-hidden="true" />
                <span className="sr-only">Telefón: +36 30 937 8695</span>
              </a>
              <a
                href="mailto:csetkagepeszet@gmail.com"
                className="footer__action-button footer__action-button--email"
                aria-label="Küldjön emailt nekünk a csetkagepeszet@gmail.com címre"
                title="Email küldése"
              >
                <FaEnvelope aria-hidden="true" />
                <span className="sr-only">Email: csetkagepeszet@gmail.com</span>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578744117948"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__action-button footer__action-button--facebook"
                aria-label="Keresse fel Facebook oldalunkat új ablakban"
                title="Facebook oldal megtekintése"
              >
                <FaFacebookF aria-hidden="true" />
                <span className="sr-only">Facebook oldal (új ablakban nyílik meg)</span>
              </a>
            </nav>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer__bottom" role="contentinfo">
          <p className="footer__copyright" role="text">
            <span aria-label="Szerzői jog 2025, Klein Alex">© 2025 - Klein Alex</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;