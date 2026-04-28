import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, 
  FaYoutube, FaPinterestP, FaMapMarkerAlt, FaPhone, 
  FaEnvelope, FaClock, FaArrowRight, FaPaperPlane 
} from 'react-icons/fa';
import './footer_section_module.css';

const FooterSection = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  // Animation variants
  const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // Simulate subscription
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  const socialLinks = [
    { icon: <FaFacebookF />, name: 'Facebook', color: '#1877F2', link: '#' },
    { icon: <FaTwitter />, name: 'Twitter', color: '#1DA1F2', link: '#' },
    { icon: <FaInstagram />, name: 'Instagram', color: '#E4405F', link: '#' },
    { icon: <FaLinkedinIn />, name: 'LinkedIn', color: '#0A66C2', link: '#' },
    { icon: <FaYoutube />, name: 'YouTube', color: '#FF0000', link: '#' },
    { icon: <FaPinterestP />, name: 'Pinterest', color: '#E60023', link: '#' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Properties', path: '/products' },
    { name: 'Our Clients', path: '/clients' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const services = [
    { name: 'Property Buying', path: '/services#buying' },
    { name: 'Property Selling', path: '/services#selling' },
    { name: 'Property Management', path: '/services#management' },
    { name: 'Investment Consulting', path: '/services#investment' },
    { name: 'Legal Assistance', path: '/services#legal' },
    { name: 'Home Staging', path: '/services#staging' },
  ];

  const contactInfo = [
    { icon: <FaMapMarkerAlt />, text: '123 Business Avenue, New York, NY 10001', details: 'Main Headquarters' },
    { icon: <FaPhone />, text: '+1 (555) 123-4567', details: 'Mon-Fri, 9AM-6PM EST' },
    { icon: <FaEnvelope />, text: 'info@estatepro.com', details: 'Response within 24 hours' },
    { icon: <FaClock />, text: '24/7 Emergency', details: '+1 (555) 987-6543' },
  ];

  return (
    <motion.footer 
      className="footer-section"
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Main Footer Content */}
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            
            {/* Company Info */}
            <motion.div className="footer-column company-info" variants={itemVariants}>
              <div className="footer-logo">
                <motion.div 
                  className="logo-wrapper"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="logo-main">Estate</span>
                  <span className="logo-accent">Pro</span>
                </motion.div>
              </div>
              
              <p className="company-description">
                Your trusted partner in real estate. We connect dreams with properties, 
                delivering exceptional service and results for over 15 years.
              </p>
              
              {/* Social Media */}
              <div className="social-media">
                <h4 className="social-title">Follow Us</h4>
                <div className="social-icons">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.link}
                      className="social-icon"
                      style={{ '--social-color': social.color }}
                      whileHover={{ 
                        scale: 1.2, 
                        backgroundColor: social.color,
                        rotate: 360 
                      }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      aria-label={social.name}
                    >
                      {social.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div className="footer-column quick-links" variants={itemVariants}>
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-menu">
                {quickLinks.map((link, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to={link.path} className="footer-link">
                      <FaArrowRight className="link-arrow" />
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Services */}
            <motion.div className="footer-column services-links" variants={itemVariants}>
              <h3 className="footer-title">Our Services</h3>
              <ul className="footer-menu">
                {services.map((service, index) => (
                  <motion.li 
                    key={index}
                    whileHover={{ x: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link to={service.path} className="footer-link">
                      <FaArrowRight className="link-arrow" />
                      {service.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div className="footer-column contact-info" variants={itemVariants}>
              <h3 className="footer-title">Contact Info</h3>
              <div className="contact-details">
                {contactInfo.map((contact, index) => (
                  <motion.div 
                    key={index}
                    className="contact-item"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <div className="contact-icon">{contact.icon}</div>
                    <div className="contact-text">
                      <p className="contact-main">{contact.text}</p>
                      <p className="contact-detail">{contact.details}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Newsletter */}
            <motion.div className="footer-column newsletter" variants={itemVariants}>
              <h3 className="footer-title">Stay Updated</h3>
              <p className="newsletter-description">
                Subscribe to our newsletter for the latest property listings and real estate tips.
              </p>
              
              <form className="newsletter-form" onSubmit={handleSubscribe}>
                <div className="input-group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="newsletter-input"
                  />
                  <motion.button
                    type="submit"
                    className="newsletter-btn"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    disabled={isSubscribed}
                  >
                    {isSubscribed ? (
                      <span className="success-text">Subscribed!</span>
                    ) : (
                      <>
                        <FaPaperPlane className="send-icon" />
                        Subscribe
                      </>
                    )}
                  </motion.button>
                </div>
                
                {isSubscribed && (
                  <motion.div 
                    className="subscription-success"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.3 }}
                  >
                    Thank you for subscribing! Check your email for confirmation.
                  </motion.div>
                )}
              </form>

              {/* Download App */}
              <div className="app-download">
                <h4 className="app-title">Download Our App</h4>
                <div className="app-buttons">
                  <motion.a 
                    href="#"
                    className="app-btn app-store"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="app-label">Download on the</span>
                    <span className="app-name">App Store</span>
                  </motion.a>
                  
                  <motion.a 
                    href="#"
                    className="app-btn play-store"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="app-label">Get it on</span>
                    <span className="app-name">Google Play</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <motion.div 
        className="footer-bottom"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div className="container">
          <div className="bottom-content">
            {/* Copyright */}
            <div className="copyright">
              © {currentYear} EstatePro. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="legal-links">
              <Link to="/privacy-policy" className="legal-link">Privacy Policy</Link>
              <span className="separator">|</span>
              <Link to="/terms-of-service" className="legal-link">Terms of Service</Link>
              <span className="separator">|</span>
              <Link to="/cookie-policy" className="legal-link">Cookie Policy</Link>
              <span className="separator">|</span>
              <Link to="/sitemap" className="legal-link">Sitemap</Link>
            </div>

            {/* Back to Top */}
            <motion.button
              className="back-to-top"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              ↑
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Floating Contact Button */}
      <motion.div 
        className="floating-contact"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        <motion.button
          className="floating-btn"
          whileHover={{ scale: 1.1, rotate: 360 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.location.href = '/contact'}
        >
          <FaPhone className="floating-icon" />
          <span className="floating-text">Contact Us</span>
        </motion.button>
      </motion.div>
    </motion.footer>
  );
};

export default FooterSection;