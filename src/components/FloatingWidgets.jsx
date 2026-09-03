import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingWidgets({ showContent }) {
  const whatsappUrl = "https://wa.me/919994157721?text=Hi%20Mahotsav%20Farms,%20I%20would%20like%20to%20inquire%20about%20booking%20your%20venue%20for%20an%20upcoming%20event.";
  const callUrl = "tel:+919994157721";

  return (
    <AnimatePresence>
      {showContent && (
        <motion.div 
          className="floating-widgets-container"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 30, scale: 0.8 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        >
          {/* WhatsApp Button */}
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="floating-btn whatsapp-btn"
            title="Chat on WhatsApp"
            aria-label="WhatsApp Inquiry"
          >
            <MessageCircle size={22} fill="currentColor" />
            <span className="floating-label">WhatsApp Us</span>
          </a>

          {/* Call Button */}
          <a 
            href={callUrl}
            className="floating-btn call-btn"
            title="Call Event Manager"
            aria-label="Call Event Manager"
          >
            <Phone size={20} />
            <span className="floating-label">+91 99941 57721</span>
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
