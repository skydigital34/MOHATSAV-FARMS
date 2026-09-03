import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Trees, Bed, Sparkles, ArrowRight, Check } from 'lucide-react';

const offers = [
  {
    id: 'hall',
    title: 'AC Banquet Hall',
    subTitle: '3,000 SQ. FT. INDOOR SPACE',
    icon: Building2,
    bgImg: '/villa_arched.png',
    desc: 'Spacious air-conditioned indoor hall featuring elegant lighting, raised stage area, and premium acoustics for wedding ceremonies, stage programs, and receptions.',
    capacity: '250 Seated / 500 Floating',
    pricing: [
      { label: 'Full Day (24 Hours)', price: '₹50,000' },
      { label: 'Morning Session', price: '₹20,000' },
      { label: 'Evening Session', price: '₹30,000' }
    ]
  },
  {
    id: 'lawn',
    title: 'Open Party Lawn',
    subTitle: '8,000 SQ. FT. LUSH OUTDOOR LAWN',
    icon: Trees,
    bgImg: '/ocean_card.png',
    desc: 'Extensive manicured green lawn surrounded by palms—ideal for grand evening receptions, open-sky buffet dining, live music, and festive gatherings.',
    capacity: '500 Seated / 1,000 Floating',
    pricing: [
      { label: 'Full Day (24 Hours)', price: '₹50,000' },
      { label: 'Morning Session', price: '₹20,000' },
      { label: 'Evening Session', price: '₹40,000' }
    ]
  },
  {
    id: 'rooms',
    title: 'AC Guest Rooms',
    subTitle: '5 LUXURY PREMISES ROOMS',
    icon: Bed,
    bgImg: '/suites_card.png',
    desc: 'Comfortable air-conditioned rooms designed with full-length vanity mirrors, private attached bathrooms, and relaxation lounges for the bride, groom, and family.',
    capacity: '5 Air-Conditioned Rooms Available',
    pricing: [
      { label: 'Daily Room Rate', price: '₹2,500 + tax / room' }
    ]
  },
  {
    id: 'full-venue',
    title: 'Full Venue Combo',
    subTitle: 'HALL + LAWN + 5 AC ROOMS',
    icon: Sparkles,
    bgImg: '/pool_preview.png',
    desc: 'The ultimate celebration package! Exclusive access to the entire 3,000 sq ft hall, 8,000 sq ft lawn, dining area, and 5 AC rooms for a seamless grand event.',
    capacity: 'Up to 1,500 Total Guests',
    pricing: [
      { label: 'Full 24-Hour Venue Package', price: '₹60,000' },
      { label: 'Morning Session Combo', price: '₹35,000' },
      { label: 'Evening Session Combo', price: '₹50,000' }
    ],
    isPopular: true
  }
];

export default function WhatWeOffer() {
  const handleBookOffer = (offerTitle) => {
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="offer-section" id="what-we-offer">
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header-center">
          <span className="section-tag">WHAT WE OFFER FOR YOU</span>
          <h2 className="section-title">
            MAKE YOUR EVENT MEMORABLE WITH<br />
            <span className="highlight-serif">OPEN HALL & LAWN IN COIMBATORE</span>
          </h2>
          <div className="header-divider-center">
            <span className="divider-dot"></span>
          </div>
          <p className="section-desc-center">
            Choose from our versatile venue spaces tailored to suit your event size and budget. Book individual spaces or reserve the complete full venue.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="offers-grid">
          {offers.map((offer) => {
            const Icon = offer.icon;
            return (
              <div 
                key={offer.id} 
                className={`offer-card ${offer.isPopular ? 'popular-card' : ''}`}
              >
                {offer.isPopular && (
                  <div className="popular-badge">
                    <span>MOST PREFERRED PACKAGE</span>
                  </div>
                )}

                <div 
                  className="offer-card-image" 
                  style={{ backgroundImage: `url('${offer.bgImg}')` }}
                >
                  <div className="offer-image-overlay"></div>
                  <div className="offer-icon-wrapper">
                    <Icon size={22} />
                  </div>
                  <div className="offer-card-title-box">
                    <span className="offer-subtitle">{offer.subTitle}</span>
                    <h3 className="offer-title">{offer.title}</h3>
                  </div>
                </div>

                <div className="offer-card-body">
                  <p className="offer-desc">{offer.desc}</p>

                  <div className="offer-capacity-pill">
                    <Check size={14} className="pill-check" />
                    <span>{offer.capacity}</span>
                  </div>

                  {/* Pricing Breakdown */}
                  <div className="offer-pricing-box">
                    <span className="pricing-box-label">Rental Rates</span>
                    <div className="pricing-rows">
                      {offer.pricing.map((p, idx) => (
                        <div className="pricing-row" key={idx}>
                          <span className="p-label">{p.label}</span>
                          <span className="p-val">{p.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <button 
                    className={`btn-offer-book ${offer.isPopular ? 'btn-popular' : ''}`}
                    onClick={() => handleBookOffer(offer.title)}
                  >
                    Book {offer.title}
                    <ArrowRight size={14} className="btn-arrow" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
