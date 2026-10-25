import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  ArrowDown, 
  ArrowLeft,
  Instagram, 
  Youtube, 
  ChevronDown 
} from 'lucide-react';
import './App.css';

const heroVideo = '/5nal.mp4';

import AboutUs from './components/AboutUs';
import WhatWeOffer from './components/WhatWeOffer';
import PerfectVenues from './components/PerfectVenues';
import GroundRules from './components/GroundRules';
import Amenities from './components/Amenities';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BlogsSection from './components/BlogsSection';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import FloatingWidgets from './components/FloatingWidgets';
import BottomNavBar from './components/BottomNavBar';
import MobileMenu from './components/MobileMenu';

// Framer Motion Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.2,
      ease: 'easeOut',
    },
  },
};

const sidebarVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

function App() {
  const [showContent, setShowContent] = useState(false);
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  const [currentView, setCurrentView] = useState(() => {
    if (typeof window !== 'undefined' && window.location.hash === '#blogs') {
      return 'blogs';
    }
    return 'landing';
  });

  // Listen to hash changes for browser forward/back buttons
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#blogs') {
        setCurrentView('blogs');
        window.scrollTo({ top: 0, behavior: 'instant' });
      } else {
        setCurrentView('landing');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -40% 0px',
      threshold: 0
    };

    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setActiveSection(id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    const sections = [
      document.getElementById('home'),
      document.getElementById('about'),
      document.getElementById('what-we-offer'),
      document.getElementById('perfect-venues'),
      document.getElementById('amenities'),
      document.getElementById('ground-rules'),
      document.getElementById('contact')
    ].filter(Boolean);

    sections.forEach(s => observer.observe(s));

    return () => {
      clearTimeout(timer);
      sections.forEach(s => observer.unobserve(s));
    };
  }, [currentView]);

  const handleNavigate = (targetId) => {
    if (targetId === 'blogs') {
      setCurrentView('blogs');
      window.history.pushState(null, '', '#blogs');
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (currentView !== 'landing') {
      setCurrentView('landing');
      window.history.pushState(null, '', `#${targetId}`);
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="app-wrapper">
      {currentView === 'blogs' ? (
        <div className="dynamic-blogs-view-page">
          {/* Dynamic Top Bar for Blogs Section */}
          <header className="dynamic-blogs-topbar">
            <div className="dynamic-blogs-topbar-inner">
              <button 
                type="button"
                className="btn-dynamic-back"
                onClick={() => handleNavigate('home')}
              >
                <ArrowLeft size={16} />
                <span>Back to Main Site</span>
              </button>

              <div 
                className="logo-container" 
                onClick={() => handleNavigate('home')}
                style={{ cursor: 'pointer' }}
              >
                <span>MAHOTSAV FARMS</span>
              </div>

              <div className="dynamic-topbar-actions">
                <button 
                  className="btn-nav-reserve"
                  onClick={() => handleNavigate('contact')}
                >
                  Book Now
                  <span className="arrow-circle">
                    <ArrowUpRight size={12} />
                  </span>
                </button>
                
                <div 
                  className="bento-menu-btn" 
                  title="Menu"
                  onClick={() => setIsMobileMenuOpen(true)}
                >
                  <div className="bento-dot"></div>
                  <div className="bento-dot"></div>
                  <div className="bento-dot"></div>
                  <div className="bento-dot"></div>
                  <div className="bento-dot"></div>
                  <div className="bento-dot"></div>
                  <div className="bento-dot"></div>
                  <div className="bento-dot"></div>
                  <div className="bento-dot"></div>
                </div>
              </div>
            </div>
          </header>

          <main className="dynamic-blogs-main-wrapper">
            <BlogsSection 
              onBackToHome={() => handleNavigate('home')}
              onBookVenue={() => handleNavigate('contact')}
              isDynamicView={true}
            />
          </main>

          <Footer onNavigate={handleNavigate} />
          <FloatingWidgets showContent={true} />
          <MobileMenu 
            isOpen={isMobileMenuOpen} 
            onClose={() => setIsMobileMenuOpen(false)} 
            onNavigate={handleNavigate}
          />
        </div>
      ) : (
        <>
          {/* 1. HERO SECTION (KEPT INTACT AS REQUESTED) */}
          <div className="hero-container" id="home">
        {/* Background Hover Image */}
        <img 
          src="/night2.png" 
          alt="Mahotsav Farms Night" 
          className={`hero-background-night ${isButtonHovered ? 'visible' : ''}`}
        />

        {/* Background Autoplay Video */}
        <video 
          ref={videoRef}
          className="hero-video"
          src={heroVideo} 
          preload="auto"
          autoPlay 
          loop
          muted 
          playsInline
          onPlaying={() => {
            setTimeout(() => {
              setShowContent(true);
            }, 3000);
          }}
        />
        
        {/* Dark overlay */}
        <div className="video-overlay"></div>

        {/* Left fading glass panel */}
        <div className={`left-glass-panel ${showContent ? 'visible' : ''}`}></div>

        {/* Background ambient glow */}
        <div className="hero-ambient-glow"></div>

        {/* NAVIGATION BAR */}
        <motion.header 
          className="navbar"
          initial={{ opacity: 0, y: -20 }}
          animate={showContent ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ pointerEvents: showContent ? 'auto' : 'none' }}
        >
          <div className="logo-container" onClick={() => handleNavigate('home')}>
            <span>MAHOTSAV FARMS</span>
          </div>

          <nav className="nav-links">
            <a href="#home" className="nav-link" onClick={() => handleNavigate('home')}>Home</a>
            <a href="#about" className="nav-link" onClick={() => handleNavigate('about')}>About Us</a>
            
            {/* What We Offer Dropdown */}
            <div className="nav-item-dropdown">
              <a href="#what-we-offer" className="nav-link dropdown-trigger" onClick={() => handleNavigate('what-we-offer')}>
                What We Offer? <ChevronDown size={12} className="nav-chevron" />
              </a>
              <div className="dropdown-menu">
                <a href="#what-we-offer" onClick={() => handleNavigate('what-we-offer')}>Hall (3,000 sq ft)</a>
                <a href="#what-we-offer" onClick={() => handleNavigate('what-we-offer')}>Lawn (8,000 sq ft)</a>
                <a href="#what-we-offer" onClick={() => handleNavigate('what-we-offer')}>AC Rooms</a>
                <a href="#what-we-offer" onClick={() => handleNavigate('what-we-offer')}>Full Venue Combo</a>
              </div>
            </div>

            {/* Perfect Venues Dropdown */}
            <div className="nav-item-dropdown">
              <a href="#perfect-venues" className="nav-link dropdown-trigger" onClick={() => handleNavigate('perfect-venues')}>
                Perfect Venues <ChevronDown size={12} className="nav-chevron" />
              </a>
              <div className="dropdown-menu">
                <a href="#perfect-venues" onClick={() => handleNavigate('perfect-venues')}>Marriage Functions</a>
                <a href="#perfect-venues" onClick={() => handleNavigate('perfect-venues')}>Wedding Receptions</a>
                <a href="#perfect-venues" onClick={() => handleNavigate('perfect-venues')}>Ear Boring Ceremonies</a>
                <a href="#perfect-venues" onClick={() => handleNavigate('perfect-venues')}>Birthday Parties</a>
                <a href="#perfect-venues" onClick={() => handleNavigate('perfect-venues')}>Baby Shower</a>
                <a href="#perfect-venues" onClick={() => handleNavigate('perfect-venues')}>Social Activities</a>
                <a href="#perfect-venues" onClick={() => handleNavigate('perfect-venues')}>Puberty Function</a>
                <a href="#perfect-venues" onClick={() => handleNavigate('perfect-venues')}>Retirement & Any Functions</a>
              </div>
            </div>

            <a href="#amenities" className="nav-link" onClick={() => handleNavigate('amenities')}>Facilities</a>
            <a href="#ground-rules" className="nav-link" onClick={() => handleNavigate('ground-rules')}>Ground Rules</a>
            <a href="#blogs" className="nav-link" onClick={(e) => { e.preventDefault(); handleNavigate('blogs'); }}>Blogs & Guides</a>
            <a href="#contact" className="nav-link" onClick={() => handleNavigate('contact')}>Contact Us</a>
          </nav>

          <div className="nav-actions">
            <button 
              className="btn-nav-reserve"
              onClick={() => handleNavigate('contact')}
              onMouseEnter={() => setIsButtonHovered(true)}
              onMouseLeave={() => setIsButtonHovered(false)}
            >
              Book Now
              <span className="arrow-circle">
                <ArrowUpRight size={12} />
              </span>
            </button>
            
            <div 
              className="bento-menu-btn" 
              title="Menu"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <div className="bento-dot"></div>
              <div className="bento-dot"></div>
              <div className="bento-dot"></div>
              <div className="bento-dot"></div>
              <div className="bento-dot"></div>
              <div className="bento-dot"></div>
              <div className="bento-dot"></div>
              <div className="bento-dot"></div>
              <div className="bento-dot"></div>
            </div>
          </div>
        </motion.header>

        {/* MAIN HERO CONTENT (INTACT) */}
        <motion.main 
          className="hero-main-content"
          variants={containerVariants}
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
        >
          {/* Left text and action block */}
          <div className="hero-text-block">
            <motion.h1 className="hero-heading" variants={fadeInUp}>
              Crafting<br />
              <span className="highlight">the art</span><br />
              of celebration
            </motion.h1>

            <motion.p className="hero-description" variants={fadeInUp}>
              Luxury, serenity, and unforgettable moments for your premium weddings and event celebrations in Coimbatore.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeInUp}>
              <button 
                className="btn-primary"
                onClick={() => handleNavigate('contact')}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                Book Celebration
                <span className="btn-primary-arrow">
                  <ArrowUpRight size={14} />
                </span>
              </button>
              <button 
                className="btn-secondary"
                onClick={() => handleNavigate('what-we-offer')}
                onMouseEnter={() => setIsButtonHovered(true)}
                onMouseLeave={() => setIsButtonHovered(false)}
              >
                Explore Offerings
              </button>
            </motion.div>
          </div>

          {/* Right Glassmorphic Preview Card */}
          <motion.div className="experience-card-wrapper" variants={fadeInUp}>
            <div className="experience-card">
              <div className="card-text">
                <h3 className="card-label">Experience<br />Unparalleled</h3>
                <p className="card-description">
                  An extraordinary retreat crafted for the world's most discerning travelers.
                </p>
              </div>
              <div className="card-preview-img-container">
                <img 
                  src="/pool_preview.png" 
                  alt="Pool Preview" 
                  className="card-preview-img" 
                />
              </div>
            </div>
          </motion.div>
        </motion.main>

        {/* HERO FOOTER (INTACT) */}
        <motion.footer 
          className="hero-footer"
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div 
            className="scroll-badge-container" 
            onClick={() => handleNavigate('about')}
          >
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3">
              <div className="orbit-satellite"></div>
            </div>
            <svg viewBox="0 0 100 100" className="rotating-text-svg">
              <defs>
                <path
                  id="scrollCircle"
                  d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                  fill="none"
                />
              </defs>
              <text>
                <textPath href="#scrollCircle" className="rotating-text-path" startOffset="0%">
                  SCROLL DOWN • ART OF ESCAPE • SCROLL DOWN • ART OF ESCAPE •
                </textPath>
              </text>
            </svg>
            <ArrowDown className="scroll-arrow-icon" size={16} />
          </div>

          <div className="carousel-counter">
            <span className="counter-current">01</span>
            <div className="counter-line"></div>
            <span className="counter-total">04</span>
          </div>
        </motion.footer>

        {/* FLOATING SOCIAL SIDEBAR */}
        <motion.div 
          className="social-sidebar"
          variants={sidebarVariants}
          initial="hidden"
          animate={showContent ? "visible" : "hidden"}
          style={{ pointerEvents: showContent ? 'auto' : 'none' }}
        >
          <motion.a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-link" variants={fadeIn}>
            <Instagram className="social-icon" />
          </motion.a>
          <motion.a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="social-link" variants={fadeIn}>
            <Youtube className="social-icon" />
          </motion.a>
        </motion.div>
      </div>

      {/* 2. ABOUT US SECTION */}
      <AboutUs />

      {/* 3. WHAT WE OFFER SECTION */}
      <WhatWeOffer />

      {/* 4. PERFECT VENUES (EVENT TYPES) SECTION */}
      <PerfectVenues />

      {/* 5. FACILITIES & AMENITIES SECTION */}
      <Amenities />

      {/* 6. GROUND RULES SECTION */}
      <GroundRules />

      {/* 7. TESTIMONIALS */}
      <Testimonials />

      {/* NOTE: BlogsSection is hidden from landing section and present only in dynamic section */}

      {/* 8. FAQ ACCORDION */}
      <FAQ />

      {/* 9. BOOKING INQUIRY FORM */}
      <ContactForm />

      {/* 10. FOOTER */}
      <Footer onNavigate={handleNavigate} />

      {/* 11. FLOATING WIDGETS (WHATSAPP + CALL) */}
      <FloatingWidgets showContent={showContent} />

      {/* Mobile Navigation Elements */}
      <BottomNavBar activeSection={activeSection} onNavigate={(targetId) => handleNavigate(targetId)} />
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} onNavigate={handleNavigate} />
    </>
  )}
</div>
  );
}

export default App;
