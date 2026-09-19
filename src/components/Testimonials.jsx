import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TESTIMONIALS = [
  {
    quote: "Mahotsav Farms made our daughter's wedding reception truly magical! The open lawn with evening lighting and spacious AC hall gave our 800 guests complete comfort.",
    author: "Priya Sharma",
    role: "Happy Client",
    location: "Coimbatore",
    eventType: "Wedding Reception"
  },
  {
    quote: "Hosting our corporate BNI reunion here was a breeze. 100 cars parking space with 2 entrance gates meant zero traffic jams for our delegates. Highly recommend Pinnacle's Events!",
    author: "Arvind Kumar",
    role: "Happy Client",
    location: "Veerakeralam",
    eventType: "Corporate Reunion"
  },
  {
    quote: "The AC bridal suites were clean, comfortable, and perfect for pre-ceremony makeup styling. The spacious lawn and elegant indoor hall added a divine start to our traditional muhurtham.",
    author: "Neha",
    role: "Happy Client",
    location: "Coimbatore",
    eventType: "Marriage Ceremony"
  },
  {
    quote: "Best value banquet hall in Veerakeralam, Coimbatore! Transparent pricing for lawn and hall combos, excellent generator power backup, and super helpful event coordinators.",
    author: "Radhika Patel",
    role: "Happy Client",
    location: "Coimbatore",
    eventType: "Ear Boring & Family Feast"
  }
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: 'easeInOut' }
    },
    exit: (dir) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut' }
    })
  };

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-container">
        
        {/* Rating summary banner */}
        <div className="rating-summary-banner">
          <div className="justdial-logo-row">
            <span className="platform-tag">Pinnacle's Events</span>
            <div className="stars-row">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={15} fill="#f5a623" color="#f5a623" />
              ))}
            </div>
          </div>
          <div className="rating-value-row">
            <span className="rating-num">4.9</span>
            <span className="rating-max">/ 5</span>
            <span className="reviews-count">based on verified event client reviews</span>
          </div>
        </div>

        <div className="testimonials-grid-layout">
          {/* Left panel: Info */}
          <div className="testimonials-info-panel">
            <span className="section-tag">TESTIMONIALS</span>
            <h2 className="section-title">
              CLIENT TESTIMONIALS ABOUT OUR<br />
              <span className="highlight-serif">EVENT VENUES & WEDDING HALL</span>
            </h2>
            <div className="header-divider">
              <Quote className="divider-icon" size={14} />
            </div>
            <p className="section-desc">
              Discover why families, couples, and corporate organizations across Coimbatore trust Mahotsav Farms to celebrate their most cherished occasions.
            </p>

            <div className="slider-controls-row">
              <button className="slider-nav-btn" onClick={handlePrev} aria-label="Previous review">
                <ChevronLeft size={18} />
              </button>
              <button className="slider-nav-btn" onClick={handleNext} aria-label="Next review">
                <ChevronRight size={18} />
              </button>
              <span className="slider-fraction">
                {String(activeIndex + 1).padStart(2, '0')} / {String(TESTIMONIALS.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right panel: Sliding Card */}
          <div className="testimonials-slide-panel">
            <div className="testimonial-card-container">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={activeIndex}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="testimonial-card"
                >
                  <Quote className="card-quote-icon" size={40} />
                  <p className="card-quote-text">"{TESTIMONIALS[activeIndex].quote}"</p>
                  
                  <div className="card-author-footer">
                    <div className="author-details">
                      <h4 className="author-name">{TESTIMONIALS[activeIndex].author}</h4>
                      <span className="author-meta">
                        {TESTIMONIALS[activeIndex].role} • {TESTIMONIALS[activeIndex].eventType}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
