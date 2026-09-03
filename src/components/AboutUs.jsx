import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Leaf, 
  PhoneCall, 
  Users, 
  Calendar, 
  CheckCircle2, 
  ArrowRight,
  ShieldCheck,
  Compass
} from 'lucide-react';

const processSteps = [
  {
    step: '01',
    title: 'Consultation',
    desc: 'Discuss your event vision, dates, guest counts, and specific requirements with our event managers.'
  },
  {
    step: '02',
    title: 'Custom Planning',
    desc: 'Tailor venue spaces (Hall, Lawn, or Full Venue) and customize catering & decoration options.'
  },
  {
    step: '03',
    title: 'Seamless Execution',
    desc: 'Our dedicated Sabari Hospitality team handles on-site setup, catering timing, and event logistics.'
  },
  {
    step: '04',
    title: 'Unforgettable Event',
    desc: 'Enjoy a stress-free celebration creating cherished memories with your loved ones.'
  }
];

export default function AboutUs() {
  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="about-section" id="about">
      <div className="section-container">
        
        {/* Top Section Header */}
        <div className="section-header-center">
          <span className="section-tag">ABOUT US</span>
          <h2 className="section-title">
            TOP EVENT VENUE & PARTY HALL IN<br />
            <span className="highlight-serif">VEERAKERALAM, COIMBATORE</span>
          </h2>
          <div className="header-divider-center">
            <Compass className="divider-icon-center" size={14} />
          </div>
          <p className="section-desc-center">
            Managed by Sabari Hospitality, Mahotsav Venue offers an exquisite blend of a spacious air-conditioned banquet hall and a lush open lawn—designed for perfection across traditional weddings, receptions, and special family gatherings.
          </p>
        </div>

        {/* 2-Column Overview & Features */}
        <div className="about-overview-grid">
          
          {/* Left Column: Glass Card with Features */}
          <div className="about-feature-box">
            <div className="about-badge">
              <ShieldCheck size={18} className="badge-icon" />
              <span>SABARI HOSPITALITY MANAGEMENT</span>
            </div>

            <h3 className="about-subheading">
              Creating Timeless Celebrations with Modern Elegance & Warmth
            </h3>

            <p className="about-text">
              Nestled near Ragavendra Garden in Veerakeralam, Coimbatore, Mahotsav Farms provides an serene ambiance surrounded by nature. Whether you are hosting a traditional Kalyana Mandapam wedding or an open-air evening reception, our flexible spaces accommodate your every desire.
            </p>

            {/* Two Key Feature Blurbs */}
            <div className="feature-cards-row">
              <div className="mini-feature-card">
                <div className="mini-icon-wrapper">
                  <Sparkles size={20} />
                </div>
                <div className="mini-feature-text">
                  <h4>A to Z Event Services</h4>
                  <p>Complete end-to-end event logistics including staging, AV sound, lighting, and dining management.</p>
                </div>
              </div>

              <div className="mini-feature-card">
                <div className="mini-icon-wrapper eco-wrapper">
                  <Leaf size={20} />
                </div>
                <div className="mini-feature-text">
                  <h4>Eco-Friendly Venue</h4>
                  <p>Lush green manicured lawns and naturally ventilated open-air spaces for serene celebrations.</p>
                </div>
              </div>
            </div>

            {/* Direct Phone Callout */}
            <div className="about-callout-bar">
              <div className="callout-icon-box">
                <PhoneCall size={20} />
              </div>
              <div className="callout-text">
                <span className="callout-label">Have questions? Speak to our Event Manager</span>
                <a href="tel:+919994157721" className="callout-phone">+91 99941 57721</a>
              </div>
            </div>
          </div>

          {/* Right Column: Capacity Highlights & Quick Stats */}
          <div className="about-stats-box">
            <div className="capacity-card hall-cap">
              <div className="cap-header">
                <Users className="cap-icon" size={24} />
                <div>
                  <span className="cap-tag">AC BANQUET HALL</span>
                  <h4 className="cap-title">3,000 SQ FT INDOOR HALL</h4>
                </div>
              </div>
              <div className="cap-nums">
                <div className="cap-stat">
                  <span className="stat-value">250</span>
                  <span className="stat-label">Seated Guests</span>
                </div>
                <div className="cap-divider"></div>
                <div className="cap-stat">
                  <span className="stat-value">500</span>
                  <span className="stat-label">Floating Guests</span>
                </div>
              </div>
            </div>

            <div className="capacity-card lawn-cap">
              <div className="cap-header">
                <Leaf className="cap-icon" size={24} />
                <div>
                  <span className="cap-tag">OPEN AIR LAWN</span>
                  <h4 className="cap-title">8,000 SQ FT LUSH LAWN</h4>
                </div>
              </div>
              <div className="cap-nums">
                <div className="cap-stat">
                  <span className="stat-value">500</span>
                  <span className="stat-label">Seated Guests</span>
                </div>
                <div className="cap-divider"></div>
                <div className="cap-stat">
                  <span className="stat-value">1,000</span>
                  <span className="stat-label">Floating Guests</span>
                </div>
              </div>
            </div>

            <div className="about-action-row">
              <button className="btn-primary" onClick={() => handleScrollTo('contact')}>
                Book Event Now
                <ArrowRight size={14} className="btn-primary-arrow" />
              </button>
              <button className="btn-secondary" onClick={() => handleScrollTo('what-we-offer')}>
                View Venue Pricing
              </button>
            </div>
          </div>

        </div>

        {/* 4-Step How We Work Process */}
        <div className="process-wrapper">
          <div className="process-header">
            <span className="section-tag">OUR PROCESS</span>
            <h3 className="process-title">How We Plan Your Perfect Celebration</h3>
          </div>

          <div className="process-steps-grid">
            {processSteps.map((item, idx) => (
              <div className="process-step-card" key={idx}>
                <span className="step-number">{item.step}</span>
                <h4 className="step-title">{item.title}</h4>
                <p className="step-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
