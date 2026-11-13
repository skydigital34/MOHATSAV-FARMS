import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: "What types of events can be hosted in your event hall?",
    a: "Mahotsav Farms hosts a wide spectrum of events including Marriage Functions, Wedding Receptions, Ear Boring Ceremonies (Khadha Kuthu), Birthday Parties, Baby Showers (Valaikappu), Puberty Functions, Family Reunions, BNI Networking Meets, Rotary Club Events, and Corporate Events."
  },
  {
    q: "How many people can your event hall accommodate?",
    a: "Our indoor AC Banquet Hall comfortably seats 200 guests with a floating capacity of 350. Our outdoor Open Lawn seats 400 guests with a floating capacity of 800. Combined together as a Full Venue, Mahotsav Farms accommodates up to 1,200 total floating guests."
  },
  {
    q: "What amenities are included with the hall rental?",
    a: "The rental includes access to 4 AC rooms (2 guest & 2 bridal), on-site parking for up to 100 cars, 2 entrance gates for smooth valet flow, small kitchen area, 3,000 sq.ft dining hall, 100% power generator backup for the venue, and dedicated venue maintenance staff."
  },
  {
    q: "Can I decorate the hall for my event?",
    a: "Yes! We offer open decorator flexibilities. You are welcome to engage your preferred floral and stage decorators or choose from our panel of trusted event decor specialists to design customized themes for your stage, lawn lighting, and entrance arches."
  },
  {
    q: "What is the booking process and rental fee?",
    a: "Booking is confirmed upon receiving a 50% deposit. Rental fees are transparent and flexible: Indoor Hall is ₹20,000 (Half Day) / ₹40,000 (Full Day), Outdoor Lawn is ₹40,000 (Half Day) / ₹70,000 (Full Day), and Full Venue Combo is ₹45,000 (Half Day) / ₹90,000 (Full Day). Individual AC rooms are priced at ₹2,500 + tax per day."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section className="faq-section" id="faq">
      <div className="section-container">
        
        {/* Header Block */}
        <div className="section-header-center">
          <span className="section-tag">FAQ</span>
          <h2 className="section-title">
            EVERYTHING YOU NEED TO KNOW ABOUT<br />
            <span className="highlight-serif">VENUE BOOKING IN COIMBATORE</span>
          </h2>
          <div className="header-divider-center">
            <span className="divider-dot"></span>
          </div>
          <p className="section-desc-center">
            Got questions about capacities, pricing, or operational rules? Here are clear answers to help you plan your celebration at Mahotsav Farms.
          </p>
        </div>

        {/* Accordion list */}
        <div className="faq-accordion-container">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item-card ${isOpen ? 'active' : ''}`}
              >
                <button 
                  className="faq-question-btn" 
                  onClick={() => toggleFAQ(idx)}
                  aria-expanded={isOpen}
                >
                  <div className="faq-question-content">
                    <HelpCircle size={16} className="faq-icon-q" />
                    <span>{faq.q}</span>
                  </div>
                  <span className="faq-toggle-icon">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer-text">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
