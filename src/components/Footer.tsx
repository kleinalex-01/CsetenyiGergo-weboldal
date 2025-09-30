import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaFacebookF } from 'react-icons/fa';
import Breadcrumb from './Breadcrumb';
import LeafletMap from './LeafletMap';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

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

    const items: BreadcrumbItem[] = [{ label: 'Főoldal', href: '/' }];
    
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
              <LeafletMap 
                width="100%" 
                height="200px" 
                className="footer__leaflet-map"
              />
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