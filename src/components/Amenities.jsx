import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Car, 
  DoorOpen, 
  ChefHat, 
  UtensilsCrossed, 
  Bed, 
  Zap, 
  Sparkles 
} from 'lucide-react';

const amenityItems = [
  {
    icon: Building2,
    title: 'AC Reception Hall',
    desc: '3,000 sq ft spacious air-conditioned indoor hall featuring high ceilings, stage lighting, and acoustic comfort.',
  },
  {
    icon: Bed,
    title: '2 Guest & 2 Bridal Rooms',
    desc: '4 fully equipped AC rooms (2 guest rooms and 2 bridal rooms) available on premises for bridal preparation and family relaxation.',
  },
  {
    icon: Car,
    title: 'Up to 100 Cars Parking',
    desc: 'Extensive private parking area on venue premises supporting up to 100 cars with security supervision.',
  },
  {
    icon: DoorOpen,
    title: '2 Entrance Gates',
    desc: 'Dual gate access facilitating separate guest entry and valet vehicle movement to prevent traffic congestion.',
  },
  {
    icon: ChefHat,
    title: 'Modern Cooking & Catering Area',
    desc: 'Spacious, hygienic kitchen space equipped for large-scale traditional cooking and live food counters.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Spacious Dining Hall',
    desc: 'Dedicated dining hall accommodating traditional South Indian leaf service and modern buffet counters.',
  },
  {
    icon: Zap,
    title: '100% Power Generator Backup',
    desc: 'Heavy-duty power generator setup guaranteeing uninterrupted electricity for stage lighting, sound, and AC.',
  },
  {
    icon: Sparkles,
    title: 'Eco-Friendly Open Lawn',
    desc: '8,000 sq ft manicured green lawn surrounded by peaceful nature, perfect for evening lighting and receptions.',
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: 'spring', stiffness: 80, damping: 15 }
  }
};

export default function Amenities() {
  return (
    <section className="amenities-section" id="amenities">
      <div className="section-container">
        {/* Header Block */}
        <div className="section-header-center">
          <span className="section-tag">FACILITIES & AMENITIES</span>
          <h2 className="section-title">
            FACILITIES FOR AN<br />
            <span className="highlight-serif">UNFORGETTABLE EVENT IN COIMBATORE</span>
          </h2>
          <div className="header-divider-center">
            <span className="divider-dot"></span>
          </div>
          <p className="section-desc-center">
            Mahotsav Farms is engineered with world-class facilities to support grand weddings, receptions, and traditional family milestones without operational stress.
          </p>
        </div>

        {/* Grid layout */}
        <motion.div 
          className="amenities-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {amenityItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx} 
                className="amenity-card"
                variants={cardVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
              >
                <div className="amenity-glow"></div>
                <div className="amenity-icon-wrapper">
                  <Icon className="amenity-icon" size={24} />
                </div>
                <h3 className="amenity-title">{item.title}</h3>
                <p className="amenity-desc">{item.desc}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
