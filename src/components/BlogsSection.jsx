import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  BookOpen, 
  Search, 
  X, 
  Clock, 
  Calendar, 
  Heart, 
  Share2, 
  ArrowRight, 
  ArrowUpRight, 
  ArrowLeft,
  Sparkles, 
  Check, 
  Send, 
  Tag, 
  Compass,
  MessageCircle,
  Quote
} from 'lucide-react';
import { BLOG_CATEGORIES, BLOG_POSTS } from '../data/blogsData';

export default function BlogsSection({ onBackToHome, onBookVenue, isDynamicView = false }) {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeArticle, setActiveArticle] = useState(null);
  const [visibleCount, setVisibleCount] = useState(BLOG_POSTS.length);
  const [copiedLink, setCopiedLink] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  // Dynamic likes state persisted in localStorage
  const [likesState, setLikesState] = useState(() => {
    try {
      const saved = localStorage.getItem('mahotsav_blog_likes');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    const initial = {};
    BLOG_POSTS.forEach(post => {
      initial[post.id] = { count: post.likes, hasLiked: false };
    });
    return initial;
  });

  const toggleLike = (e, postId) => {
    e.stopPropagation();
    setLikesState(prev => {
      const current = prev[postId] || { count: 0, hasLiked: false };
      const updated = {
        ...prev,
        [postId]: {
          count: current.hasLiked ? current.count - 1 : current.count + 1,
          hasLiked: !current.hasLiked
        }
      };
      try {
        localStorage.setItem('mahotsav_blog_likes', JSON.stringify(updated));
      } catch (err) {
        console.error(err);
      }
      return updated;
    });
  };

  // Close modal on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveArticle(null);
      }
    };
    if (activeArticle) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [activeArticle]);

  // Filtered posts calculation
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter(post => {
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch = !q || 
        post.title.toLowerCase().includes(q) || 
        post.excerpt.toLowerCase().includes(q) ||
        post.tags.some(tag => tag.toLowerCase().includes(q)) ||
        post.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: BLOG_POSTS.length };
    BLOG_POSTS.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const handleShare = (post) => {
    const shareUrl = `${window.location.origin}/#blogs-${post.slug}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        setCopiedLink(true);
        setTimeout(() => setCopiedLink(false), 2500);
      });
    }
  };

  const handleWhatsAppShare = (post) => {
    const text = encodeURIComponent(`Check out this insightful wedding guide: "${post.title}" at Mahotsav Farms!\n${window.location.origin}/#blogs`);
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (newsletterEmail && newsletterEmail.includes('@')) {
      setNewsletterSubscribed(true);
      setTimeout(() => {
        setNewsletterEmail('');
      }, 3000);
    }
  };

  const handleBookVenueFromBlog = () => {
    setActiveArticle(null);
    if (onBookVenue) {
      onBookVenue();
    } else {
      setTimeout(() => {
        const el = document.getElementById('contact');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 200);
    }
  };

  return (
    <section className={`blogs-section ${isDynamicView ? 'dynamic-blogs-page' : ''}`} id="blogs">
      <div className="section-container">
        
        {/* Dynamic Section Navigation Breadcrumb */}
        {onBackToHome && (
          <div className="blogs-dynamic-breadcrumb-bar">
            <button 
              type="button" 
              className="blogs-back-btn"
              onClick={onBackToHome}
            >
              <ArrowLeft size={15} />
              <span>Back to Main Site</span>
            </button>
            <div className="blogs-breadcrumb-trail">
              <span className="trail-item link" onClick={onBackToHome}>Home</span>
              <span className="trail-sep">/</span>
              <span className="trail-item active">Dynamic Blogs & Guides</span>
            </div>
          </div>
        )}

        {/* Section Header */}
        <div className="section-header-center">
          <span className="section-tag">
            <BookOpen size={13} style={{ marginRight: '6px' }} />
            STORIES, GUIDES & JOURNAL
          </span>
          <h2 className="section-title">
            INSPIRATION & PLANNING INSIGHTS FOR<br />
            <span className="highlight-serif">YOUR CELEBRATION IN COIMBATORE</span>
          </h2>
          <div className="header-divider-center">
            <Compass className="divider-icon-center" size={14} />
          </div>
          <p className="section-desc-center">
            Explore expert wedding advice, decor ideas, traditional rituals, catering tips, and venue planning guides curated by the hospitality team at Mahotsav Farms.
          </p>
        </div>

        {/* Content: Cards & Controls if posts exist, or Curation Notice when empty */}
        {BLOG_POSTS.length > 0 ? (
          <>
            {/* Dynamic Controls: Search & Category Filter */}
            <div className="blogs-controls-bar">
              {/* Real-time Search Input */}
              <div className="blogs-search-wrapper">
                <Search className="blogs-search-icon" size={16} />
                <input 
                  type="text" 
                  className="blogs-search-input"
                  placeholder="Search articles, decor tips, rituals..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setVisibleCount(BLOG_POSTS.length);
                  }}
                />
                {searchQuery && (
                  <button 
                    type="button" 
                    className="blogs-search-clear" 
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Category Filter Pills */}
              <div className="blogs-category-pills">
                {BLOG_CATEGORIES.map(cat => {
                  const isActive = selectedCategory === cat;
                  const count = categoryCounts[cat] || 0;
                  return (
                    <button
                      key={cat}
                      type="button"
                      className={`blog-filter-btn ${isActive ? 'active' : ''}`}
                      onClick={() => {
                        setSelectedCategory(cat);
                        setVisibleCount(BLOG_POSTS.length);
                      }}
                    >
                      <span>{cat}</span>
                      <span className="filter-count-badge">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Search & Filter status summary */}
            {(searchQuery || selectedCategory !== 'All') && (
              <div className="blogs-filter-status">
                <span>
                  Showing <strong>{filteredPosts.length}</strong> {filteredPosts.length === 1 ? 'article' : 'articles'} 
                  {selectedCategory !== 'All' && <> in <em>"{selectedCategory}"</em></>}
                  {searchQuery && <> matching <em>"{searchQuery}"</em></>}
                </span>
                <button 
                  type="button"
                  className="blogs-reset-filter-btn"
                  onClick={() => {
                    setSelectedCategory('All');
                    setSearchQuery('');
                  }}
                >
                  Reset Filters
                </button>
              </div>
            )}

            {/* Blog Posts Grid */}
            {filteredPosts.length > 0 ? (
              <div className="blogs-grid">
                {filteredPosts.slice(0, visibleCount).map((post, idx) => {
                  const isLiked = likesState[post.id]?.hasLiked;
                  const likeCount = likesState[post.id]?.count ?? post.likes;

                  return (
                    <motion.article 
                      key={post.id}
                      className={`blog-card ${post.featured && idx === 0 && !searchQuery && selectedCategory === 'All' ? 'featured-card' : ''}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-50px' }}
                      transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
                      onClick={() => setActiveArticle(post)}
                    >
                      {/* Card Image Area */}
                      <div className="blog-card-media">
                        <img 
                          src={post.coverImage} 
                          alt={post.title} 
                          className="blog-card-img" 
                          loading="lazy" 
                        />
                        <div className="blog-card-overlay"></div>

                        {/* Category Tag Badge */}
                        <div className="blog-card-badge-row">
                          <span className="blog-category-tag">{post.category}</span>
                          {post.featured && idx === 0 && (
                            <span className="blog-featured-tag">
                              <Sparkles size={11} /> Featured
                            </span>
                          )}
                        </div>

                        {/* Like Button on Image */}
                        <button 
                          type="button" 
                          className={`blog-like-btn ${isLiked ? 'liked' : ''}`}
                          onClick={(e) => toggleLike(e, post.id)}
                          aria-label="Like article"
                        >
                          <Heart size={15} fill={isLiked ? '#e2c2a4' : 'none'} />
                          <span className="blog-like-count">{likeCount}</span>
                        </button>
                      </div>

                      {/* Card Content Area */}
                      <div className="blog-card-body">
                        {/* Meta info (Date & Read time) */}
                        <div className="blog-card-meta">
                          <span className="blog-meta-item">
                            <Calendar size={13} /> {post.publishedAt}
                          </span>
                          <span className="blog-meta-dot">•</span>
                          <span className="blog-meta-item">
                            <Clock size={13} /> {post.readTime}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="blog-card-title">{post.title}</h3>

                        {/* Excerpt */}
                        <p className="blog-card-excerpt">{post.excerpt}</p>

                        {/* Tags */}
                        <div className="blog-card-tags">
                          {post.tags.slice(0, 3).map((tag, tIdx) => (
                            <span key={tIdx} className="blog-tag-pill">
                              #{tag}
                            </span>
                          ))}
                        </div>

                        {/* Footer: Author & Read CTA */}
                        <div className="blog-card-footer">
                          <div className="blog-author-info">
                            <img 
                              src={post.author.avatar} 
                              alt={post.author.name} 
                              className="blog-author-avatar"
                              onError={(e) => {
                                e.target.style.display = 'none';
                              }}
                            />
                            <div className="blog-author-text">
                              <span className="blog-author-name">{post.author.name}</span>
                              <span className="blog-author-role">{post.author.role}</span>
                            </div>
                          </div>

                          <div className="blog-read-action">
                            <span className="read-more-text">Read Article</span>
                            <div className="read-more-icon-wrap">
                              <ArrowRight size={14} />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  );
                })}
              </div>
            ) : (
              <div className="blogs-empty-state">
                <BookOpen size={48} className="empty-icon" />
                <h3 className="empty-title">No matching guides found</h3>
                <p className="empty-desc">
                  We couldn't find any articles matching "{searchQuery}".
                </p>
                <button 
                  type="button" 
                  className="btn-primary empty-reset-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                  }}
                >
                  Clear Search & Filters
                </button>
              </div>
            )}

            {/* Load More / Show Less Dynamic Pagination */}
            {filteredPosts.length > visibleCount && (
              <div className="blogs-pagination-row">
                <button 
                  type="button" 
                  className="btn-secondary blogs-load-more-btn"
                  onClick={() => setVisibleCount(prev => Math.min(prev + 6, filteredPosts.length))}
                >
                  <span>Load More Articles</span>
                  <span className="count-indicator">({filteredPosts.length - visibleCount} remaining)</span>
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="blogs-curation-notice">
            <div className="curation-notice-card">
              <div className="curation-badge">
                <Sparkles size={14} />
                <span>IN CURATION</span>
              </div>
              <h3 className="curation-title">Event Guides & Articles Coming Soon</h3>
              <p className="curation-desc">
                Our hospitality and event curation team is crafting new wedding guides, mandap decor trends, and catering insights for Coimbatore celebrations.
              </p>
              <p className="curation-subtext">
                In the meantime, you can request our complimentary 2026 wedding checklist below or get in touch with our team for venue walkthroughs.
              </p>
            </div>
          </div>
        )}

        {/* Dynamic Newsletter & Wedding Guide Download Bar */}
        <div className="blogs-newsletter-box">
          <div className="newsletter-glow"></div>
          <div className="newsletter-content-grid">
            <div className="newsletter-text-col">
              <span className="newsletter-badge">
                <Sparkles size={12} /> COMPLIMENTARY GUIDE
              </span>
              <h3 className="newsletter-title">
                Receive Our 2026 Coimbatore Wedding & Muhurtham Planning Checklist
              </h3>
              <p className="newsletter-desc">
                Curated calendar of auspicious dates, budget breakdown sheet, catering portion calculators, and vendor evaluation questionnaires delivered straight to your email.
              </p>
            </div>

            <div className="newsletter-form-col">
              {newsletterSubscribed ? (
                <motion.div 
                  className="newsletter-success-alert"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <div className="success-icon-wrap">
                    <Check size={20} />
                  </div>
                  <div>
                    <h4>Checklist Dispatched!</h4>
                    <p>Thank you for subscribing. We've sent the complete celebration guide to your inbox.</p>
                  </div>
                </motion.div>
              ) : (
                <form className="newsletter-form" onSubmit={handleNewsletterSubmit}>
                  <input 
                    type="email" 
                    required 
                    placeholder="Enter your email address..."
                    className="newsletter-input"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button type="submit" className="btn-primary newsletter-submit-btn">
                    <span>Get Free Guide</span>
                    <Send size={14} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Dynamic Section Bottom Return / Booking Bar */}
        {onBackToHome && (
          <div className="blogs-dynamic-bottom-bar">
            <button 
              type="button" 
              className="btn-secondary blogs-return-btn"
              onClick={onBackToHome}
            >
              <ArrowLeft size={15} />
              <span>Return to Main Site</span>
            </button>
            <button 
              type="button" 
              className="btn-primary blogs-reserve-btn"
              onClick={onBookVenue || onBackToHome}
            >
              <span>Book Celebration at Mahotsav</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        )}

      </div>

      {/* FULL ARTICLE DYNAMIC READING MODAL */}
      <AnimatePresence>
        {activeArticle && (
          <div className="blog-modal-backdrop" onClick={() => setActiveArticle(null)}>
            <motion.div 
              className="blog-modal-container"
              initial={{ opacity: 0, y: 40, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Close Button */}
              <button 
                type="button" 
                className="blog-modal-close"
                onClick={() => setActiveArticle(null)}
                aria-label="Close modal"
              >
                <X size={20} />
              </button>

              {/* Modal Cover Image */}
              <div className="blog-modal-header-media">
                <img 
                  src={activeArticle.coverImage} 
                  alt={activeArticle.title} 
                  className="blog-modal-cover-img" 
                />
                <div className="blog-modal-media-overlay"></div>
                
                <div className="blog-modal-header-meta">
                  <div className="blog-modal-tags-row">
                    <span className="blog-category-tag">{activeArticle.category}</span>
                    <span className="blog-modal-read-time">
                      <Clock size={13} /> {activeArticle.readTime}
                    </span>
                  </div>
                  <h1 className="blog-modal-title">{activeArticle.title}</h1>
                </div>
              </div>

              {/* Modal Body */}
              <div className="blog-modal-content-area">
                
                {/* Author and Social Engagement Bar */}
                <div className="blog-modal-author-bar">
                  <div className="modal-author-profile">
                    <img 
                      src={activeArticle.author.avatar} 
                      alt={activeArticle.author.name} 
                      className="modal-author-avatar"
                      onError={(e) => { e.target.style.display = 'none'; }}
                    />
                    <div>
                      <h4 className="modal-author-name">{activeArticle.author.name}</h4>
                      <p className="modal-author-role">{activeArticle.author.role} • {activeArticle.publishedAt}</p>
                    </div>
                  </div>

                  <div className="blog-modal-actions">
                    <button 
                      type="button" 
                      className={`modal-action-btn like-btn ${likesState[activeArticle.id]?.hasLiked ? 'liked' : ''}`}
                      onClick={(e) => toggleLike(e, activeArticle.id)}
                      title="Like this article"
                    >
                      <Heart size={16} fill={likesState[activeArticle.id]?.hasLiked ? '#e2c2a4' : 'none'} />
                      <span>{likesState[activeArticle.id]?.count ?? activeArticle.likes}</span>
                    </button>

                    <button 
                      type="button" 
                      className="modal-action-btn share-btn"
                      onClick={() => handleWhatsAppShare(activeArticle)}
                      title="Share to WhatsApp"
                    >
                      <MessageCircle size={16} />
                      <span className="hide-on-mobile">WhatsApp</span>
                    </button>

                    <button 
                      type="button" 
                      className="modal-action-btn share-btn"
                      onClick={() => handleShare(activeArticle)}
                      title="Copy article link"
                    >
                      {copiedLink ? <Check size={16} color="#7bed9f" /> : <Share2 size={16} />}
                      <span>{copiedLink ? 'Copied!' : 'Share'}</span>
                    </button>
                  </div>
                </div>

                {/* Excerpt intro highlight */}
                <div className="blog-modal-lead-intro">
                  <p>{activeArticle.excerpt}</p>
                </div>

                {/* Article Content Render */}
                <div className="blog-modal-rich-text">
                  {activeArticle.content.map((block, bIdx) => {
                    if (block.type === 'paragraph') {
                      return <p key={bIdx} className="blog-rich-paragraph">{block.text}</p>;
                    }
                    if (block.type === 'heading') {
                      return <h3 key={bIdx} className="blog-rich-heading">{block.text}</h3>;
                    }
                    if (block.type === 'quote') {
                      return (
                        <blockquote key={bIdx} className="blog-rich-quote">
                          <Quote className="quote-icon" size={24} />
                          <p>{block.text}</p>
                        </blockquote>
                      );
                    }
                    if (block.type === 'takeaways') {
                      return (
                        <div key={bIdx} className="blog-rich-takeaways">
                          <h4 className="takeaways-title">
                            <Sparkles size={16} /> {block.title}
                          </h4>
                          <ul className="takeaways-list">
                            {block.points.map((pt, pIdx) => (
                              <li key={pIdx}>
                                <Check size={14} className="takeaway-check" />
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>

                {/* Tags in modal */}
                <div className="blog-modal-footer-tags">
                  <Tag size={14} className="tag-label-icon" />
                  <span className="tag-label">Related Topics:</span>
                  <div className="modal-tags-list">
                    {activeArticle.tags.map((tg, idx) => (
                      <span key={idx} className="modal-tag-badge">#{tg}</span>
                    ))}
                  </div>
                </div>

                {/* Booking Prompt Banner inside Modal */}
                <div className="blog-modal-cta-card">
                  <div className="modal-cta-text">
                    <h3>Planning your celebration at Mahotsav Farms?</h3>
                    <p>Schedule a personal venue walkthrough or reserve your preferred Muhurtham date with our event team.</p>
                  </div>
                  <button 
                    type="button" 
                    className="btn-primary modal-cta-btn"
                    onClick={handleBookVenueFromBlog}
                  >
                    <span>Check Venue Availability</span>
                    <ArrowUpRight size={14} />
                  </button>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
