import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
}

const SEO = ({ title, description, keywords, ogImage }: SEOProps) => {
  const location = useLocation();
  const fullTitle = `${title} | Csetényi Gergő - Gépészeti Szolgáltatások`;
  const url = `https://csetenyigergo.hu${location.pathname}`;
  const defaultImage = ogImage || 'https://csetenyigergo.hu/images/logo.jpg';

  useEffect(() => {
    // Set page title
    document.title = fullTitle;

    // Set meta tags
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Standard meta tags
    setMetaTag('description', description);
    if (keywords) {
      setMetaTag('keywords', keywords);
    }

    // Open Graph tags
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:url', url, true);
    setMetaTag('og:type', 'website', true);
    setMetaTag('og:image', defaultImage, true);

    // Twitter Card tags
    setMetaTag('twitter:card', 'summary_large_image');
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', defaultImage);

    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', url);
  }, [fullTitle, description, keywords, url, defaultImage]);

  return null;
};

export default SEO;
