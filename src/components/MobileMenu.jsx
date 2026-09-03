import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Instagram, Facebook } from 'lucide-react';

const MENU_LINKS = [
  { label: 'Home', targetId: 'home' },
  { label: 'About Us', targetId: 'about' },
  { label: 'What We Offer?', targetId: 'what-we-offer' },
  { label: 'Perfect Venues', targetId: 'perfect-venues' },
  { label: 'Facilities', targetId: 'amenities' },
  { label: 'Ground Rules', targetId: 'ground-rules' },
  { label: 'Cost Estimator', targetId: 'pricing' },
  { label: 'Testimonials', targetId: 'testimonials' },
  { label: 'FAQ', targetId: 'faq' },
  { label: 'Contact Us', targetId: 'contact' }
];

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  exit: { 
    opacity: 0,
    transition: { duration: 0.35, ease: 'easeIn', delay: 0.15 }
  }
};

const drawerVariants = {
  hidden: { x: '100%' },
  visible: { 
    x: 0,
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 32,
      staggerChildren: 0.08,
      delayChildren: 0.1
    }
  },
  exit: { 
    x: '100%',
    transition: { 
      type: 'spring', 
      stiffness: 300, 
      damping: 32
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { type: 'spring', stiffness: 100, damping: 15 }
  }
};

export default function MobileMenu({ isOpen, onClose }) {
  const handleLinkClick = (targetId) => {
    onClose();
    setTimeout(() => {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="mobile-menu-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div 
            className="mobile-menu-drawer"
            variants={drawerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Drawer Header */}
            <div className="drawer-header">
              <span className="drawer-brand">MAHOTSAV FARMS</span>
              <motion.button 
                className="btn-drawer-close"
                onClick={onClose}
                whileTap={{ scale: 0.9 }}
                aria-label="Close menu"
              >
                <X size={20} />
              </motion.button>
            </div>

            {/* Nav links list */}
            <nav className="drawer-nav">
              {MENU_LINKS.map((link, idx) => (
                <motion.button
                  key={idx}
                  className="drawer-nav-link"
                  variants={itemVariants}
                  onClick={() => handleLinkClick(link.targetId)}
                  whileTap={{ x: 10, color: '#e2c2a4' }}
                >
                  {link.label}
                </motion.button>
              ))}
            </nav>

            {/* Footer details in Drawer */}
            <div className="drawer-footer">
              <span className="drawer-footer-tag">Veerakeralam, Coimbatore</span>
              <div className="drawer-social-row">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="drawer-social-link">
                  <Instagram size={16} />
                </a>
                <a href="#" className="drawer-social-link">
                  <Facebook size={16} />
                </a>
              </div>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
