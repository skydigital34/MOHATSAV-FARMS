import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  PartyPopper, 
  Baby, 
  Cake, 
  Users2, 
  Sparkles, 
  X, 
  CheckCircle2, 
  FileText, 
  ArrowRight,
  ShieldAlert,
  Award
} from 'lucide-react';

const eventTypes = [
  {
    id: 'marriage',
    title: 'Marriage Functions',
    tagline: 'Kalyana Mandapam & Muhurthams',
    icon: Heart,
    bgImg: '/villa_arched.png',
    shortDesc: 'Traditional wedding ceremonies with spacious stage arrangements, AC bridal preparation suites, and banana leaf dining.',
    highlights: [
      '3,000 sq ft AC Banquet Hall seating 200+ guests',
      '2 AC Bridal Suites & 3 Guest Rooms on premises',
      'Dedicated commercial kitchen for traditional feast preparation',
      'Full 100% generator power backup for uninterrupted muhurtham'
    ],
    guidelines: [
      '50% deposit required at booking time to confirm muhurtham dates',
      'Licensed bar permit required if serving alcohol',
      'Cleanliness & kitchen sanitation protocols must be adhered to',
      'Decorators must complete teardown within 3 hours post-event'
    ]
  },
  {
    id: 'reception',
    title: 'Wedding Receptions',
    tagline: 'Grand Open-Air & AC Receptions',
    icon: Sparkles,
    bgImg: '/pool_card.png',
    shortDesc: 'Stunning evening celebrations combining our illuminated 8,000 sq ft lawn and indoor hall for floating crowds up to 800.',
    highlights: [
      'Illuminated lawn setup for open-sky buffet dining',
      'Professional sound & DJ staging capabilities',
      'Spacious parking accommodating up to 100 cars',
      'Multiple entrance gates for easy guest flow'
    ],
    guidelines: [
      'Music & DJ sound volume compliance with 10:00 PM curfew',
      'Rentable decor items must be accounted for before venue departure',
      'Third-party vendors must submit safety compliance checklists'
    ]
  },
  {
    id: 'ear-boring',
    title: 'Ear Boring Ceremonies',
    tagline: 'Khadha Kuthu Rituals',
    icon: Baby,
    bgImg: '/suites_card.png',
    shortDesc: 'Auspicious family gatherings celebrating child milestones with comfortable seating, child-friendly spaces, and traditional meals.',
    highlights: [
      'Child-safe manicured lawns and spacious indoor hall',
      'Dedicated AC room for toddler rest and family changing',
      'Hygienic vegetarian dining hall setup'
    ],
    guidelines: [
      'Custom catering arrival and kitchen preparation timelines',
      'Sanitized seating and prompt waste management provided'
    ]
  },
  {
    id: 'birthday',
    title: 'Birthday Parties',
    tagline: 'Kids & Milestone Celebrations',
    icon: Cake,
    bgImg: '/spa_card.png',
    shortDesc: 'Vibrant party venue for kids birthdays, 50th milestone celebrations, and evening family get-togethers with custom decor.',
    highlights: [
      'Open lawn space for fun games & bouncy castle setups',
      'High-fidelity sound system for party music',
      'Flexible mocktail and food counter options'
    ],
    guidelines: [
      '50% non-refundable deposit required upon booking confirmation',
      'Smoking strictly restricted to designated outdoor smoking zones',
      'No hazardous fireworks allowed on lawn premises'
    ]
  },
  {
    id: 'baby-shower',
    title: 'Baby Shower / Valaikappu',
    tagline: 'Seemantham Ceremonies',
    icon: Heart,
    bgImg: '/dining_card.png',
    shortDesc: 'Warm, cozy, and blessed environment for traditional seemantham ceremonies surrounded by family and close friends.',
    highlights: [
      'Peaceful green surroundings with soothing acoustics',
      'Wheelchair accessible ramps and comfortable seating',
      'Spacious family seating and comfortable event ambiance'
    ],
    guidelines: [
      'Flexible booking duration options for morning/afternoon functions',
      'Sanitized guest rooms available for maternal comfort'
    ]
  },
  {
    id: 'social',
    title: 'Social & Corporate Meets',
    tagline: 'Reunions, BNI & Club Events',
    icon: Users2,
    bgImg: '/ocean_card.png',
    shortDesc: 'Ideal location for alumni reunions, corporate annual meets, BNI networking, and cultural organization get-togethers.',
    highlights: [
      'Podium, microphone, and presentation screen connectivity',
      'Flexible seating configurations (theater, cluster, or banquet)',
      'High capacity parking for 100 cars with security management'
    ],
    guidelines: [
      'Pre-booking options available for recurring corporate reservations',
      'Site visits can be scheduled Monday to Sunday 8 AM - 8 PM'
    ]
  },
  {
    id: 'puberty',
    title: 'Puberty Function',
    tagline: 'Rithu Shudhi Celebrations',
    icon: PartyPopper,
    bgImg: '/villa_sunset.png',
    shortDesc: 'Traditional puberty rites honoring family heritage with elegant floral stage decor and authentic vegetarian dining.',
    highlights: [
      'Spacious AC stage area for traditional seating & floral backdrops',
      'AC rooms for family grooming and dress changes',
      'Dedicated dining hall for leaf service feast'
    ],
    guidelines: [
      'Fire-pit ritual safety guidelines must be followed on stage',
      'Decoration setup time window starting 4 hours prior to event'
    ]
  },
  {
    id: 'retirement',
    title: 'Retirement Party & Any Functions',
    tagline: 'Milestone Felicitations & Bespoke Gatherings',
    icon: Award,
    bgImg: '/lounge_facility.png',
    shortDesc: 'Celebrate remarkable career milestones, retirement felicitations, family jubilees, or any custom celebration in total comfort and grandeur.',
    highlights: [
      'Elevated stage with audio-visual connectivity & mic for tributes & speeches',
      'Flexible seating setup: banquet, round table, or theater layout for 50 to 500+ guests',
      'Exclusive AC banquet hall and serene outdoor lawn for celebration lunches & dinners',
      'Dedicated AC dressing/rest suites for the honoree and close family members'
    ],
    guidelines: [
      'Flexible half-day (morning/evening) or full-day session reservations available',
      'Stage podium, projector screen & sound system coordination provided upon request',
      'Outside professional caterers and specialized event decorators welcomed'
    ]
  }
];

export default function PerfectVenues() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleBookNow = () => {
    setSelectedEvent(null);
    const contactSec = document.getElementById('contact');
    if (contactSec) {
      contactSec.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="perfect-section" id="perfect-venues">
      <div className="section-container">
        
        {/* Header */}
        <div className="section-header-center">
          <span className="section-tag">PERFECT VENUE FOR EVERY OCCASION</span>
          <h2 className="section-title">
            LUXURY AC BANQUET HALLS & OPEN LAWNS<br />
            <span className="highlight-serif">FOR EVENTS IN COIMBATORE</span>
          </h2>
          <div className="header-divider-center">
            <span className="divider-dot"></span>
          </div>
          <p className="section-desc-center">
            From grand wedding muhurthams to intimate family milestones and corporate reunions, Mahotsav Farms provides the ideal setting with tailored guidelines for every event.
          </p>
        </div>

        {/* 8 Cards Grid (4 per row) */}
        <div className="perfect-grid">
          {eventTypes.map((event) => {
            const Icon = event.icon;
            return (
              <div key={event.id} className="perfect-card">
                <div 
                  className="perfect-card-bg" 
                  style={{ backgroundImage: `url('${event.bgImg}')` }}
                >
                  <div className="perfect-card-overlay"></div>
                  <div className="perfect-icon-badge">
                    <Icon size={20} />
                  </div>
                </div>

                <div className="perfect-card-content">
                  <span className="perfect-tagline">{event.tagline}</span>
                  <h3 className="perfect-title">{event.title}</h3>
                  <p className="perfect-desc">{event.shortDesc}</p>

                  <div className="perfect-card-actions">
                    <button 
                      className="btn-guidelines"
                      onClick={() => setSelectedEvent(event)}
                    >
                      <FileText size={14} /> View Guidelines & Specs
                    </button>
                    <button 
                      className="btn-perfect-book"
                      onClick={handleBookNow}
                    >
                      Book Event <ArrowRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Modal Drawer for Guidelines & Highlights */}
      <AnimatePresence>
        {selectedEvent && (
          <motion.div 
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedEvent(null)}
          >
            <motion.div 
              className="modal-drawer"
              initial={{ scale: 0.9, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 30, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 260, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="modal-header">
                <div>
                  <span className="modal-tag">{selectedEvent.tagline}</span>
                  <h3 className="modal-title">{selectedEvent.title}</h3>
                </div>
                <button 
                  className="btn-modal-close"
                  onClick={() => setSelectedEvent(null)}
                >
                  <X size={20} />
                </button>
              </div>

              <div className="modal-body">
                {/* Highlights */}
                <div className="modal-block">
                  <h4 className="modal-block-title">
                    <CheckCircle2 size={16} className="modal-icon-green" /> Key Venue Highlights
                  </h4>
                  <ul className="modal-list">
                    {selectedEvent.highlights.map((h, i) => (
                      <li key={i}>{h}</li>
                    ))}
                  </ul>
                </div>

                {/* Event Specific Guidelines */}
                <div className="modal-block">
                  <h4 className="modal-block-title">
                    <ShieldAlert size={16} className="modal-icon-amber" /> Event Guidelines & Terms
                  </h4>
                  <ul className="modal-list alert-list">
                    {selectedEvent.guidelines.map((g, i) => (
                      <li key={i}>{g}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="modal-footer">
                <button className="btn-modal-action" onClick={handleBookNow}>
                  Reserve Date for {selectedEvent.title} <ArrowRight size={14} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
