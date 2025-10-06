import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import SEO from './SEO';

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'A név megadása kötelező';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Az email cím megadása kötelező';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Érvénytelen email cím';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'A telefonszám megadása kötelező';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'A tárgy megadása kötelező';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Az üzenet megadása kötelező';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Create mailto link as fallback
      const mailtoLink = `mailto:csetkagepeszet@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Név: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}\n\nÜzenet:\n${formData.message}`
      )}`;
      
      window.location.href = mailtoLink;
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      
      // Close modal after success
      setTimeout(() => {
        setIsFormOpen(false);
        setSubmitStatus('idle');
      }, 2000);
      
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <ParallaxProvider>
      <SEO 
        title="Kapcsolat"
        description="Vegye fel velünk a kapcsolatot! Klíma és fűtésszerelés szolgáltatásainkkal kapcsolatban érdeklődjön telefonon, e-mailben vagy személyesen."
        keywords="kapcsolat, klímaszerelés elérhetőség, fűtésszerelés kapcsolat, cím, telefonszám, e-mail, térkép, ajánlatkérés"
        ogImage="contact-hero.jpg"
      />
      <section className="contact-hub">
        {/* Parallax Dot Grid Background */}
        <Parallax speed={-20} className="contact-hub__hero-parallax-bg">
          <div className="contact-hub__hero-background"></div>
        </Parallax>
        <Parallax speed={-15}>
          <div className="contact-hub__parallax-bg contact-hub__parallax-bg--1" />
        </Parallax>
        <Parallax speed={-10}>
          <div className="contact-hub__parallax-bg contact-hub__parallax-bg--2" />
        </Parallax>

      {/* Hero Section with Floating Contact Cards */}
      <div className="contact-hub__hero">
        <div className="container">
          <motion.div 
            className="contact-hub__hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="contact-hub__title">
              Lépjen <span className="contact-hub__title-highlight">kapcsolatba</span> velünk
            </h1>
            <p className="contact-hub__subtitle">
              Bármilyen kérdés esetén állunk rendelkezésére!
            </p>
          </motion.div>

          {/* Floating Contact Cards */}
          <div className="contact-hub__cards">
            <motion.div 
              className="contact-hub__card contact-hub__card--phone"
              initial={{ opacity: 0, x: -100, rotate: -5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 2,
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
              }}
              onClick={() => window.open('tel:+36309378695')}
            >
              <div className="contact-hub__card-icon">📞</div>
              <h3 className="contact-hub__card-title">Hívjon minket</h3>
              <p className="contact-hub__card-value">06 30 937 8695</p>
              <p className="contact-hub__card-subtitle">Azonnali válasz</p>
            </motion.div>

            <motion.div 
              className="contact-hub__card contact-hub__card--email"
              initial={{ opacity: 0, y: 100, rotate: 5 }}
              animate={{ opacity: 1, y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: -2,
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
              }}
              onClick={() => window.open('mailto:csetkagepeszet@gmail.com')}
            >
              <div className="contact-hub__card-icon">✉️</div>
              <h3 className="contact-hub__card-title">Írjon nekünk</h3>
              <p className="contact-hub__card-value">csetkagepeszet@gmail.com</p>
              <p className="contact-hub__card-subtitle">24 órán belül válaszolunk</p>
            </motion.div>

            <motion.div 
              className="contact-hub__card contact-hub__card--location"
              initial={{ opacity: 0, x: 100, rotate: -3 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 1,
                boxShadow: "0 25px 50px rgba(34, 197, 94, 0.3)"
              }}
            >
              <div className="contact-hub__card-icon">📍</div>
              <h3 className="contact-hub__card-title">Találjon meg minket</h3>
              <p className="contact-hub__card-value">8225 Szentkirályszabadja</p>
              <p className="contact-hub__card-subtitle">Petőfi Sándor utca 29.</p>
            </motion.div>

            <motion.div 
              className="contact-hub__card contact-hub__card--cta"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 30px 60px rgba(34, 197, 94, 0.4)"
              }}
              onClick={() => setIsFormOpen(true)}
            >
              <div className="contact-hub__card-icon">💰</div>
              <h3 className="contact-hub__card-title">Árajánlat kérés</h3>
              <p className="contact-hub__card-subtitle">Ingyenes kalkuláció</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Floating Action Button */}
      <motion.button
        className="contact-hub__fab"
        onClick={() => setIsFormOpen(true)}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1.2, type: "spring", stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        <span className="contact-hub__fab-icon">📝</span>
        <span className="contact-hub__fab-text">Üzenet</span>
      </motion.button>

      {/* Modal Contact Form */}
      <AnimatePresence>
        {isFormOpen && (
          <motion.div
            className="contact-hub__modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsFormOpen(false)}
          >
            <motion.div
              className="contact-hub__modal"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="contact-hub__modal-header">
                <h2 className="contact-hub__modal-title">Küldjön üzenetet</h2>
                <button 
                  className="contact-hub__modal-close"
                  onClick={() => setIsFormOpen(false)}
                >
                  ×
                </button>
              </div>

              <form className="contact-hub__form" onSubmit={handleSubmit}>
                <div className="contact-hub__form-grid">
                  <motion.div 
                    className="form__group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="name" className="form__label">Név *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`form__control ${errors.name ? 'form__control--error' : ''}`}
                      placeholder="Az Ön neve"
                    />
                    {errors.name && <span className="form__error">{errors.name}</span>}
                  </motion.div>

                  <motion.div 
                    className="form__group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="email" className="form__label">Email cím *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`form__control ${errors.email ? 'form__control--error' : ''}`}
                      placeholder="pelda@email.com"
                    />
                    {errors.email && <span className="form__error">{errors.email}</span>}
                  </motion.div>
                </div>

                <div className="contact-hub__form-grid">
                  <motion.div 
                    className="form__group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="phone" className="form__label">Telefonszám *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`form__control ${errors.phone ? 'form__control--error' : ''}`}
                      placeholder="06 30 937 8695"
                    />
                    {errors.phone && <span className="form__error">{errors.phone}</span>}
                  </motion.div>

                  <motion.div 
                    className="form__group"
                    whileFocus={{ scale: 1.02 }}
                  >
                    <label htmlFor="subject" className="form__label">Tárgy *</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className={`form__control ${errors.subject ? 'form__control--error' : ''}`}
                      placeholder="Miben segíthetünk?"
                    />
                    {errors.subject && <span className="form__error">{errors.subject}</span>}
                  </motion.div>
                </div>

                <motion.div 
                  className="form__group"
                  whileFocus={{ scale: 1.01 }}
                >
                  <label htmlFor="message" className="form__label">Üzenet *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`form__control form__textarea ${errors.message ? 'form__control--error' : ''}`}
                    placeholder="Írja le részletesen, miben segíthetünk Önnek..."
                    rows={4}
                  />
                  {errors.message && <span className="form__error">{errors.message}</span>}
                </motion.div>

                <motion.button
                  type="submit"
                  className={`btn btn--primary contact-hub__submit-btn ${isSubmitting ? 'btn--loading' : ''}`}
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="btn-spinner"></span>
                      Küldés...
                    </>
                  ) : (
                    <>
                      <span className="btn-icon">✉️</span>
                      Üzenet küldése
                    </>
                  )}
                </motion.button>

                {submitStatus === 'success' && (
                  <motion.div
                    className="contact-hub__success-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Köszönjük üzenetét! Hamarosan felvesszük Önnel a kapcsolatot.
                  </motion.div>
                )}

                {submitStatus === 'error' && (
                  <motion.div
                    className="contact-hub__error-message"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Hiba történt az üzenet küldése során. Kérjük, próbálja újra később.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
    </ParallaxProvider>
  );
};

export default Contact;