import React from 'react';
import { 
  Instagram, 
  Facebook,
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink 
} from 'lucide-react';

export default function Footer({ onNavigate }) {
  const currentYear = 2026;

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-top-glow"></div>
      <div className="section-container">
        
        <div className="footer-grid">
          {/* Brand Info */}
          <div className="footer-brand-column">
            <h3 className="footer-brand-logo">MAHOTSAV FARMS</h3>
            <p className="footer-brand-tagline">Mahotsav Venue to Celebrate • Pinnacle's Events</p>
            <p className="footer-about-text">
              Top event venue and party hall in Veerakeralam, Coimbatore featuring a 3,000 sq ft AC Banquet Hall and 8,000 sq ft Open Lawn for traditional weddings, receptions, and family milestones.
            </p>
            
            {/* Social Icons */}
            <div className="footer-social-row">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href="#" className="footer-social-link" aria-label="Facebook">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-links-column">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => handleScrollTo(e, 'home')}>Home</a></li>
              <li><a href="#about" onClick={(e) => handleScrollTo(e, 'about')}>About Us</a></li>
              <li><a href="#what-we-offer" onClick={(e) => handleScrollTo(e, 'what-we-offer')}>What We Offer?</a></li>
              <li><a href="#perfect-venues" onClick={(e) => handleScrollTo(e, 'perfect-venues')}>Perfect Venues</a></li>
              <li><a href="#amenities" onClick={(e) => handleScrollTo(e, 'amenities')}>Facilities</a></li>
              <li><a href="#ground-rules" onClick={(e) => handleScrollTo(e, 'ground-rules')}>Ground Rules</a></li>
              <li><a href="#blogs" onClick={(e) => handleScrollTo(e, 'blogs')}>Blogs & Guides</a></li>
              <li><a href="#faq" onClick={(e) => handleScrollTo(e, 'faq')}>FAQ</a></li>
              <li><a href="#contact" onClick={(e) => handleScrollTo(e, 'contact')}>Contact Us</a></li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="footer-links-column">
            <h4 className="footer-heading">Our Services</h4>
            <ul className="footer-links-list">
              <li><a href="#perfect-venues" onClick={(e) => handleScrollTo(e, 'perfect-venues')}>Marriage Functions</a></li>
              <li><a href="#perfect-venues" onClick={(e) => handleScrollTo(e, 'perfect-venues')}>Wedding Receptions</a></li>
              <li><a href="#perfect-venues" onClick={(e) => handleScrollTo(e, 'perfect-venues')}>Ear Boring Ceremonies</a></li>
              <li><a href="#perfect-venues" onClick={(e) => handleScrollTo(e, 'perfect-venues')}>Birthday Parties</a></li>
              <li><a href="#perfect-venues" onClick={(e) => handleScrollTo(e, 'perfect-venues')}>Baby Shower / Valaikappu</a></li>
              <li><a href="#perfect-venues" onClick={(e) => handleScrollTo(e, 'perfect-venues')}>Social Activities</a></li>
              <li><a href="#perfect-venues" onClick={(e) => handleScrollTo(e, 'perfect-venues')}>Puberty Function</a></li>
              <li><a href="#perfect-venues" onClick={(e) => handleScrollTo(e, 'perfect-venues')}>Retirement & Any Functions</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="footer-contact-column">
            <h4 className="footer-heading">Get In Touch</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin className="contact-icon" size={16} />
                <address className="footer-address">
                  2W45+8M5, Ragavendra Garden,<br />
                  Veerakeralam, Coimbatore - 641007,<br />
                  Tamil Nadu, India
                </address>
              </li>
              <li>
                <Phone className="contact-icon" size={16} />
                <div className="footer-phones">
                  <a href="tel:+919994157721">+91 99941 57721</a>
                </div>
              </li>
              <li>
                <Mail className="contact-icon" size={16} />
                <a href="mailto:info@mahotsavfarms.com" className="footer-email">info@mahotsavfarms.com</a>
              </li>
              <li>
                <Clock className="contact-icon" size={16} />
                <span className="footer-hours">Daily Hours: 8:00 AM – 8:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copyright">
            © Copyright - {currentYear} Mahotsav Farms. All rights reserved.
          </div>
          <div className="footer-credit">
            Website Design & SEO By Xcodefix
          </div>
        </div>

      </div>
    </footer>
  );
}
