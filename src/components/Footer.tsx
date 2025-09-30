import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import Breadcrumb from './Breadcrumb';

const Footer: React.FC = () => {
  const location = useLocation();
  
  // Generate breadcrumb items based on current route
  const getBreadcrumbItems = () => {
    const pathToName: { [key: string]: string } = {
      '/': 'Főoldal',
      '/szolgaltatasok': 'Szolgáltatások',
      '/galeria': 'Galéria',
      '/kapcsolat': 'Kapcsolat'
    };

    const items = [{ label: 'Főoldal', href: '/' }];
    
    if (location.pathname !== '/') {
      items.push({ 
        label: pathToName[location.pathname] || 'Oldal' 
      });
    }
    
    return items;
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Main footer content */}
        <div className="footer__content">
          {/* Google Maps Section */}
          <div className="footer__section footer__section--map">
            {/* Address Section - Moved above map */}
            <div className="footer__address">
              <h4>Címünk</h4>
              <address>
                8225 Szentkirályszabadja<br />
                Petőfi Sándor utca 29
              </address>
            </div>

            <div className="footer__map-container">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2690.123456789012!2d19.040234315623456!3d47.498345679012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc6b12345678%3A0xabcdef1234567890!2s8225%20Szentkir%C3%A1lyszabadja%2C%20Pet%C5%91fi%20S%C3%A1ndor%20utca%2029!5e0!3m2!1shu!2shu!4v1698765432109!5m2!1shu!2shu"
                width="100%"
                height="200"
                style={{ border: 0, borderRadius: '8px' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Csetényi Gépészet Kft. térképe - 8225 Szentkirályszabadja, Petőfi Sándor utca 29"
              ></iframe>
            </div>

            {/* Action Buttons - Now with icons only */}
            <div className="footer__action-buttons">
              <a
                href="tel:+36309378695"
                className="footer__action-button footer__action-button--phone"
                aria-label="Hívjon fel minket"
              >
                <FaPhone />
              </a>
              <a
                href="mailto:csetkagepeszet@gmail.com"
                className="footer__action-button footer__action-button--email"
                aria-label="Küldjön emailt nekünk"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61578744117948"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__action-button footer__action-button--facebook"
                aria-label="Keresse fel Facebook oldalunkat"
              >
                <FaFacebookF />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer__bottom">
          <Breadcrumb 
            items={getBreadcrumbItems()} 
            className="footer__breadcrumb" 
          />
          <p className="footer__copyright">
            © 2025 - Klein Alex
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;