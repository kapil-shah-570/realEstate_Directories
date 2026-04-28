import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPaperPlane, FaPaperclip } from 'react-icons/fa';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', subject: '', message: '', preferredTime: '', file: null
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    if (errors[name]) setErrors({ ...errors, [name]: '' });
  };

  const validate = () => {
    const err = {};
    if (!formData.name.trim()) err.name = 'Name is required';
    if (!formData.email.trim()) err.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) err.email = 'Email is invalid';
    if (!formData.phone.trim()) err.phone = 'Phone is required';
    if (!formData.message.trim()) err.message = 'Message is required';
    return err;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitted(true);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', preferredTime: '', file: null });
        setTimeout(() => setSubmitted(false), 5000);
      }, 1500);
    }
  };

  return (
    <div className="contact-form-container">
      <h2 className="section-title">Send us a message</h2>
      <p className="section-subtitle">Select your reason and fill the form</p>

      <AnimatePresence>
        {submitted && (
          <motion.div
            className="success-message"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <FaPaperPlane /> Thank you! We'll get back to you soon.
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-row">
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? 'error' : ''}
              placeholder="John Doe"
              disabled={isSubmitting}
            />
            {errors.name && <span className="error-text">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? 'error' : ''}
              placeholder="john@example.com"
              disabled={isSubmitting}
            />
            {errors.email && <span className="error-text">{errors.email}</span>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={errors.phone ? 'error' : ''}
              placeholder="+1 555 123 4567"
              disabled={isSubmitting}
            />
            {errors.phone && <span className="error-text">{errors.phone}</span>}
          </div>
          <div className="form-group">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="e.g., Schedule a viewing"
              disabled={isSubmitting}
            />
          </div>
        </div>

        <div className="form-group">
          <label>Message *</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
            placeholder="Tell us about your needs..."
            disabled={isSubmitting}
          />
          {errors.message && <span className="error-text">{errors.message}</span>}
        </div>

        <div className="form-row">
          <div className="form-group file-upload">
            <label>Attachments (optional)</label>
            <div className="file-input">
              <input type="file" name="file" id="file" onChange={handleChange} disabled={isSubmitting} />
              <label htmlFor="file" className="file-label">
                <FaPaperclip /> {formData.file ? formData.file.name : 'Choose file'}
              </label>
            </div>
          </div>
          <div className="form-group">
            <label>Preferred contact time</label>
            <select name="preferredTime" value={formData.preferredTime} onChange={handleChange} disabled={isSubmitting}>
              <option value="">Any time</option>
              <option value="morning">Morning (9am‑12pm)</option>
              <option value="afternoon">Afternoon (12pm‑5pm)</option>
              <option value="evening">Evening (5pm‑8pm)</option>
            </select>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? <span className="spinner"></span> : <><FaPaperPlane /> Send Message</>}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;