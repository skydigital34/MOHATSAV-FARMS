import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, User, Phone, Mail, Calendar, Users, Briefcase, FileText, MapPin, Clock } from 'lucide-react';

export default function ContactForm({ selectedEstimate }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    eventType: 'Marriage Functions',
    offerChoice: 'Full Venue',
    guestCount: 250,
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    if (selectedEstimate) {
      setFormData(prev => ({
        ...prev,
        eventType: selectedEstimate.eventType || 'Marriage Functions',
        guestCount: selectedEstimate.guestCount || 250,
        message: `Estimated cost summary:\n• Guest Count: ${selectedEstimate.guestCount}\n• Selected Package: ${selectedEstimate.packageName}\n• Total Estimate: ₹${selectedEstimate.totalEstimate?.toLocaleString('en-IN')}\n\nHi Mahotsav Farms, I would like to check availability and reserve this date.`
      }));
    }
  }, [selectedEstimate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    
    const phoneRegex = /^[0-9]{10}$/;
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone.replace(/[\s-]/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }

    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address';
      }
    }

    if (!formData.date) {
      newErrors.date = 'Event date is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      eventType: 'Marriage Functions',
      offerChoice: 'Full Venue',
      guestCount: 250,
      message: ''
    });
    setSubmitSuccess(false);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        
        {/* Header Block */}
        <div className="section-header-center">
          <span className="section-tag">BOOK YOUR EVENT AT OUR OPEN HALL</span>
          <h2 className="section-title">
            RESERVE YOUR <span className="highlight-serif">ECO-FRIENDLY EVENT SPACE</span>
          </h2>
          <div className="header-divider-center">
            <span className="divider-dot"></span>
          </div>
          <p className="section-desc-center">
            Check date availability, get exact package quotes, or schedule a physical site visit of Mahotsav Venue in Veerakeralam, Coimbatore.
          </p>
        </div>

        <div className="contact-grid-layout">
          {/* Details Column */}
          <div className="contact-info-column">
            <h3 className="contact-subtitle">Get In Touch Directly</h3>
            <p className="contact-para">
              Need immediate assistance or hall availability check? Call our event management team directly.
            </p>

            <div className="contact-detail-items">
              <div className="detail-item">
                <span className="detail-label"><Phone size={14} className="inline-icon" /> Call / WhatsApp</span>
                <a href="tel:+919994157721" className="detail-link">+91 99941 57721</a>
              </div>

              <div className="detail-item">
                <span className="detail-label"><Mail size={14} className="inline-icon" /> Email Inquiry</span>
                <a href="mailto:info@mahotsavfarms.com" className="detail-link">info@mahotsavfarms.com</a>
              </div>

              <div className="detail-item">
                <span className="detail-label"><Clock size={14} className="inline-icon" /> Office & Site Visit Hours</span>
                <span className="detail-text">Monday – Sunday: 8:00 AM – 8:00 PM</span>
              </div>

              <div className="detail-item">
                <span className="detail-label"><MapPin size={14} className="inline-icon" /> Venue Address</span>
                <address className="detail-address">
                  2W45+8M5, Ragavendra Garden,<br />
                  Veerakeralam, Coimbatore - 641007,<br />
                  Tamil Nadu, India
                </address>
              </div>
            </div>

            <div className="map-preview-box">
              <a 
                href="https://maps.google.com/?q=2W45+8M5,+Ragavendra+Garden,+Veerakeralam,+Coimbatore,+Tamil+Nadu+641007" 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-glass-card"
              >
                <span className="map-view-label">Open in Google Maps (Veerakeralam)</span>
                <div className="map-static-bg">
                  <div className="map-pin"></div>
                </div>
              </a>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-column">
            <div className="form-glass-container">
              <AnimatePresence mode="wait">
                {!submitSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleSubmit}
                    className="booking-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <div className="form-row-two">
                      {/* Name */}
                      <div className="form-input-group">
                        <label htmlFor="name"><User size={13} className="input-icon" /> Full Name*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={errors.name ? 'error' : ''}
                        />
                        {errors.name && <span className="error-text">{errors.name}</span>}
                      </div>

                      {/* Phone */}
                      <div className="form-input-group">
                        <label htmlFor="phone"><Phone size={13} className="input-icon" /> Mobile Number*</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="10-digit mobile number"
                          className={errors.phone ? 'error' : ''}
                        />
                        {errors.phone && <span className="error-text">{errors.phone}</span>}
                      </div>
                    </div>

                    <div className="form-row-two">
                      {/* Email */}
                      <div className="form-input-group">
                        <label htmlFor="email"><Mail size={13} className="input-icon" /> Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="info@example.com"
                          className={errors.email ? 'error' : ''}
                        />
                        {errors.email && <span className="error-text">{errors.email}</span>}
                      </div>

                      {/* Date */}
                      <div className="form-input-group">
                        <label htmlFor="date"><Calendar size={13} className="input-icon" /> Event Date*</label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className={errors.date ? 'error' : ''}
                        />
                        {errors.date && <span className="error-text">{errors.date}</span>}
                      </div>
                    </div>

                    <div className="form-row-three">
                      {/* Dropdown 1: Perfect Venues */}
                      <div className="form-input-group">
                        <label htmlFor="eventType"><Briefcase size={13} className="input-icon" /> Perfect Venues (Event Type)</label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formData.eventType}
                          onChange={handleChange}
                        >
                          <option value="Marriage Functions">Marriage Functions</option>
                          <option value="Wedding Receptions">Wedding Receptions</option>
                          <option value="Ear Boring Ceremonies">Ear Boring Ceremonies</option>
                          <option value="Birthday Parties">Birthday Parties</option>
                          <option value="Baby Shower">Baby Shower / Valaikappu</option>
                          <option value="Reunion Celebration">Reunion / Social Activities</option>
                          <option value="Puberty Function">Puberty Function</option>
                          <option value="Retirement Party & Any Functions">Retirement Party & Any Functions</option>
                          <option value="Other">Other Events</option>
                        </select>
                      </div>

                      {/* Dropdown 2: What We Offer */}
                      <div className="form-input-group">
                        <label htmlFor="offerChoice"><FileText size={13} className="input-icon" /> What We Offer (Venue Choice)</label>
                        <select
                          id="offerChoice"
                          name="offerChoice"
                          value={formData.offerChoice}
                          onChange={handleChange}
                        >
                          <option value="Hall">Hall (3,000 sq. ft)</option>
                          <option value="Lawn">Lawn (8,000 sq. ft)</option>
                          <option value="Room">Rooms (AC)</option>
                          <option value="Full Venue">Full Venue (Hall + Lawn + Rooms)</option>
                        </select>
                      </div>

                      {/* Guest Count */}
                      <div className="form-input-group">
                        <label htmlFor="guestCount"><Users size={13} className="input-icon" /> Expected Guests</label>
                        <input
                          type="number"
                          id="guestCount"
                          name="guestCount"
                          min="50"
                          max="1500"
                          value={formData.guestCount}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div className="form-input-group">
                      <label htmlFor="message"><FileText size={13} className="input-icon" /> Message / Specific Requirements</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="4"
                        placeholder="Mention any custom catering, decoration, or stage requirements..."
                      ></textarea>
                    </div>

                    <motion.button 
                      type="submit" 
                      className="btn-form-submit" 
                      disabled={isSubmitting}
                      whileTap={{ scale: 0.97 }}
                      whileHover={{ scale: 1.01 }}
                    >
                      {isSubmitting ? (
                        <span className="submit-spinner">Submitting...</span>
                      ) : (
                        <>
                          Book Your Event Now <Send size={14} className="submit-btn-icon" />
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="form-success-state"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <CheckCircle2 className="success-icon" size={60} />
                    <h3 className="success-title">Booking Inquiry Received!</h3>
                    <p className="success-message">
                      Thank you <strong>{formData.name}</strong>. We have registered your reservation inquiry for <strong>{formData.eventType}</strong> on <strong>{formData.date}</strong>.
                    </p>
                    <p className="success-details">
                      Our event coordinator will call you at <strong>{formData.phone}</strong> shortly.
                    </p>
                    <motion.button 
                      type="button" 
                      className="btn-success-reset"
                      onClick={resetForm}
                      whileTap={{ scale: 0.95 }}
                      whileHover={{ scale: 1.03 }}
                    >
                      Submit Another Inquiry
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
