import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Star, 
  StarHalf, 
  ChevronLeft, 
  ChevronRight, 
  Quote, 
  ExternalLink, 
  CheckCircle,
  Heart
} from 'lucide-react';

const TOPICS = [
  { id: 'All', label: 'All', count: 69 },
  { id: 'lawn', label: 'lawn', count: 15 },
  { id: 'friendly management', label: 'friendly management', count: 7 },
  { id: 'spacious venue', label: 'spacious venue', count: 3 },
  { id: 'open lawn', label: 'open lawn', count: 3 }
];

const TESTIMONIALS = [
  {
    author: "Dharani Navaneethan",
    role: "2 reviews",
    timeAgo: "2 months ago",
    rating: 5,
    likes: 1,
    quote: "A perfect venue for creating beautiful memories! The elegant banquet hall and the beautifully maintained open lawn make it an ideal choice for both indoor and outdoor celebrations. The team is very customer friendly, the pricing is very reasonable.",
    googleUrl: "https://www.google.com/maps/contrib/116635071456945765762/reviews?hl=en-IN",
    topics: ["lawn", "friendly management"]
  },
  {
    author: "Bharath Raja",
    role: "Local Guide · 90 reviews · 12 photos",
    timeAgo: "2 months ago",
    rating: 5,
    quote: "A very good and silent place for get togethers. The place has an outdoor lawn and an indoor hall. The outdoor space has got a huge stage. Whether its an intimate wedding or a small gathering or a reception of floating guests, it's very suitable.",
    googleUrl: "https://www.google.com/maps/contrib/107037561691527793497/reviews?hl=en-IN",
    topics: ["lawn", "open lawn", "spacious venue"]
  },
  {
    author: "Ektha Menda",
    role: "Local Guide · 20 reviews · 30 photos",
    timeAgo: "a month ago",
    rating: 5,
    quote: "Had a wonderful experience at Mahotsav Farms. The venue is beautiful, with both elegant indoor spaces and a lovely outdoor setup that suits all kinds of events. What I really appreciated was their experienced event management team—they took care of everything seamlessly.",
    googleUrl: "https://www.google.com/maps/contrib/100222583201073122682/reviews?hl=en-IN",
    topics: ["friendly management", "spacious venue"]
  },
  {
    author: "Vishal R",
    role: "6 reviews",
    timeAgo: "3 months ago",
    rating: 5,
    quote: "Mahotsav Farms is one of the best wedding halls in Coimbatore. The banquet hall is spacious, the open lawn is beautifully maintained, and the ambience is perfect for weddings and receptions. The staff were professional and ensured smooth coordination.",
    googleUrl: "https://www.google.com/maps/contrib/116947953796257244810/reviews?hl=en-IN",
    topics: ["lawn", "open lawn", "spacious venue"]
  },
  {
    author: "Balaji N",
    role: "Local Guide · 7 reviews",
    timeAgo: "a month ago",
    rating: 5,
    quote: "A beautiful wedding venue with a spacious and well-maintained setup. The ambience is pleasant, the surroundings are clean, and the staff are friendly and accommodating.",
    googleUrl: "https://www.google.com/maps/contrib/104783359287872397922/reviews?hl=en-IN",
    topics: ["friendly management", "spacious venue"]
  },
  {
    author: "Nageshwari S",
    role: "3 reviews · 1 photo",
    timeAgo: "3 months ago",
    rating: 5,
    quote: "One of the best wedding venues in Veerakeralam, Coimbatore. The location is very convenient for guests coming from Vadavalli, and the venue has a premium feel with excellent facilities. Highly recommended for weddings and receptions.",
    googleUrl: "https://www.google.com/maps/contrib/101700634283693503343/reviews?hl=en-IN",
    topics: ["spacious venue"]
  },
  {
    author: "amani kuntilla",
    role: "Local Guide · 18 reviews · 20 photos",
    timeAgo: "9 months ago",
    rating: 5,
    likes: 3,
    quote: "Got married under the sky surrounded by greens, loved the venue and the vibe. It is just a very beautiful place. 5/5 for the aesthetic aspect of this place.",
    googleUrl: "https://www.google.com/maps/contrib/109586664794401711758/reviews?hl=en-IN",
    topics: ["lawn", "open lawn"]
  },
  {
    author: "Maheshwari Kb",
    role: "8 reviews · 1 photo",
    timeAgo: "3 months ago",
    rating: 5,
    quote: "Mahotsav Farms is one of the best wedding halls in Veerakeralam, Coimbatore. The venue is spacious, beautifully maintained, and conveniently located near Vadavalli. Our wedding was organized perfectly, and our guests loved the ambience.",
    googleUrl: "https://www.google.com/maps/contrib/117907146355995164730/reviews?hl=en-IN",
    topics: ["spacious venue", "lawn"]
  },
  {
    author: "DHANUSH H.RAO",
    role: "9 reviews · 14 photos",
    timeAgo: "a month ago",
    rating: 5,
    quote: "Such a cozy place for wedding, surprise events etc..., ! The management is too good and friendly ! Rooms are very well maintained and is beyond the expectation! Overall it was a good experience!",
    googleUrl: "https://www.google.com/maps/contrib/114949294115324549985/reviews?hl=en-IN",
    topics: ["friendly management"]
  },
  {
    author: "thiruvel murugan",
    role: "9 reviews · 2 photos",
    timeAgo: "a month ago",
    rating: 5,
    quote: "Recently I had a event in mahotsav farms and we had a great experience at the venue , everything was good and well maintained.. the lawn was excellent and very cost effective. The management was very friendly.",
    googleUrl: "https://www.google.com/maps/contrib/102352612393368279068/reviews?hl=en-IN",
    topics: ["lawn", "friendly management"]
  },
  {
    author: "Prem Latha",
    role: "4 reviews",
    timeAgo: "a month ago",
    rating: 5,
    quote: "At mahotsav farms we had our product launch event ,the open lawn was very good and well maintained,the venue had good ac hall and good parking ..my event was very successful.. thanku mahotsav farms.",
    googleUrl: "https://www.google.com/maps/contrib/118321927682181642814/reviews?hl=en-IN",
    topics: ["open lawn", "lawn"]
  },
  {
    author: "Umai Hardwares",
    role: "2 reviews",
    timeAgo: "a month ago",
    rating: 5,
    quote: "Had good experience at mahotsav farms for my family event . everything was good and the place was beautiful in the evening.",
    googleUrl: "https://www.google.com/maps/contrib/106688445931358212286/reviews?hl=en-IN",
    topics: ["lawn"]
  },
  {
    author: "Vaishnavi",
    role: "Local Guide · 13 reviews",
    timeAgo: "a month ago",
    rating: 5,
    quote: "Beautiful venue with lush green surroundings and very supportive staff. The hall and lawn combination makes it ideal for traditional ceremonies and grand celebrations.",
    googleUrl: "https://www.google.com/maps/contrib/103819879975678272399/reviews?hl=en-IN",
    topics: ["lawn", "friendly management"]
  }
];

export default function Testimonials() {
  const [selectedTopic, setSelectedTopic] = useState('All');
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const filteredReviews = useMemo(() => {
    if (selectedTopic === 'All') return TESTIMONIALS;
    return TESTIMONIALS.filter(item => item.topics && item.topics.includes(selectedTopic));
  }, [selectedTopic]);

  // Reset activeIndex when filter changes
  useEffect(() => {
    setActiveIndex(0);
  }, [selectedTopic]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [activeIndex, filteredReviews.length]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex((prev) => (prev === 0 ? filteredReviews.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev === filteredReviews.length - 1 ? 0 : prev + 1));
  };

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? 80 : -80,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    },
    exit: (dir) => ({
      x: dir < 0 ? 80 : -80,
      opacity: 0,
      transition: { duration: 0.35, ease: 'easeIn' }
    })
  };

  const currentReview = filteredReviews[activeIndex] || TESTIMONIALS[0];

  return (
    <section className="testimonials-section" id="testimonials">
      <div className="section-container">
        
        {/* Rating summary banner with Google badge & Topic filters */}
        <div className="rating-summary-banner">
          <div className="rating-main-col">
            <div className="justdial-logo-row">
              {/* Google colored G logo */}
              <svg className="google-icon" viewBox="0 0 24 24" width="22" height="22">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.8-2.4 3.66v3.04h3.88c2.28-2.09 3.66-5.17 3.66-9.14z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.04c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.27v3.13C3.31 21.43 7.37 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.28c-.24-.72-.38-1.49-.38-2.28s.14-1.56.38-2.28V6.59H1.27C.46 8.21 0 10.05 0 12s.46 3.79 1.27 5.41l4.01-3.13z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.37 0 3.31 2.57 1.27 6.59l4.01 3.13c.95-2.83 3.6-4.97 6.72-4.97z"/>
              </svg>
              <span className="platform-tag">Mahotsav Farms</span>
              <div className="stars-row">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={15} fill="#f5a623" color="#f5a623" />
                ))}
                <StarHalf size={15} fill="#f5a623" color="#f5a623" />
              </div>
            </div>
            <div className="rating-value-row">
              <span className="rating-num">4.5</span>
              <span className="rating-max">/ 5</span>
              <span className="reviews-count">69 reviews • Google Maps Verified</span>
            </div>
          </div>

          {/* Topic Pills: lawn, friendly management, spacious venue, open lawn */}
          <div className="rating-topics-wrapper">
            <span className="topics-label">Filter by topic:</span>
            <div className="rating-topics-row">
              {TOPICS.map((topic) => {
                const isActive = selectedTopic === topic.id;
                return (
                  <button
                    key={topic.id}
                    type="button"
                    className={`topic-pill ${isActive ? 'active' : ''}`}
                    onClick={() => setSelectedTopic(topic.id)}
                  >
                    <span>{topic.label}</span>
                    <span className="topic-count">{topic.count}</span>
                  </button>
                );
              })}
            </div>
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
                {String(activeIndex + 1).padStart(2, '0')} / {String(filteredReviews.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Right panel: Sliding Card */}
          <div className="testimonials-slide-panel">
            <div className="testimonial-card-container">
              <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                  key={`${selectedTopic}-${activeIndex}`}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="testimonial-card"
                >
                  {/* Top card metadata: 5 stars + verified badge + timeAgo */}
                  <div className="card-top-meta">
                    <div className="card-stars-row">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="#f5a623" color="#f5a623" />
                      ))}
                      <span className="card-time-ago">{currentReview.timeAgo}</span>
                    </div>

                    <div className="card-verified-badge">
                      <CheckCircle size={13} className="check-icon" />
                      <span>Google Review</span>
                    </div>
                  </div>

                  <p className="card-quote-text">"{currentReview.quote}"</p>
                  
                  {/* Author & Google Maps link footer */}
                  <div className="card-author-footer">
                    <div className="author-details">
                      <div className="author-name-row">
                        <h4 className="author-name">{currentReview.author}</h4>
                        {currentReview.likes && (
                          <span className="author-heart-badge" title={`${currentReview.likes} like on Google`}>
                            <Heart size={12} fill="#ff4757" color="#ff4757" />
                            <span>{currentReview.likes}</span>
                          </span>
                        )}
                      </div>
                      <span className="author-meta">{currentReview.role}</span>
                    </div>

                    <a 
                      href={currentReview.googleUrl} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="author-google-link"
                      title="View original review on Google Maps"
                    >
                      <span>Google Maps</span>
                      <ExternalLink size={13} />
                    </a>
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
