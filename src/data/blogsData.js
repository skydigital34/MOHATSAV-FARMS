export const BLOG_CATEGORIES = [
  'All',
  'Wedding Planning',
  'Decor & Themes',
  'Venue Guides',
  'Traditions & Muhurtham',
  'Catering & Feast'
];

export const BLOG_POSTS = [
  {
    id: 'post-1',
    title: 'How to Choose Between an AC Banquet Hall and an Open Lawn for Your Coimbatore Wedding',
    slug: 'banquet-hall-vs-open-lawn-coimbatore-wedding',
    category: 'Venue Guides',
    featured: true,
    coverImage: '/villa_sunset.png',
    readTime: '6 min read',
    publishedAt: 'October 15, 2026',
    author: {
      name: 'Priyanka Sundaram',
      role: 'Head of Event Curations',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    tags: ['Venue Selection', 'Banquet Hall', 'Lawn Wedding', 'Coimbatore'],
    likes: 142,
    excerpt: 'Comparing indoor comfort against open-air magic: explore temperature considerations, guest capacities, monsoon contingency, and hybrid setup ideas at Mahotsav Farms.',
    content: [
      {
        type: 'paragraph',
        text: 'Choosing the ideal setting for your wedding in Coimbatore is often a tug-of-war between two tempting aesthetics: the effortless climate control and acoustic precision of an indoor air-conditioned banquet hall, and the enchanting, starlit grandeur of an open lawn.'
      },
      {
        type: 'heading',
        text: '1. Climate & Seasonality in Western Tamil Nadu'
      },
      {
        type: 'paragraph',
        text: 'Coimbatore enjoys a relatively pleasant breeze from the Western Ghats, but daytime temperatures during pre-monsoon and summer months can test guest comfort. For morning Muhurthams featuring sacred homams and heavy silks, a climate-controlled hall is non-negotiable. However, from late afternoon onwards, the evening breeze across Veerakeralam makes our 8,000 sq ft manicured lawn the ultimate choice for romantic open-sky receptions.'
      },
      {
        type: 'heading',
        text: '2. Guest Count & Flow Dynamics'
      },
      {
        type: 'paragraph',
        text: 'If your guest list exceeds 500 attendees, open lawns offer unmatched circulation flexibility. Guests can freely mingle, move between live chaat counters and dining gazebos without bottle-necking. Conversely, an indoor hall creates an intimate, theatrical spotlight for sacred vows and podium presentations where everyone can hear and see clearly.'
      },
      {
        type: 'quote',
        text: 'The ideal solution chosen by 85% of Mahotsav couples is the Hybrid Venue Package: sacred Muhurtham ceremonies in our AC hall followed by dining and celebrations under the lawn canopy.'
      },
      {
        type: 'heading',
        text: '3. Acoustic & Entertainment Policies'
      },
      {
        type: 'paragraph',
        text: 'While open lawns accommodate live saxophone players and acoustic ensembles gracefully, high-decibel DJ systems are subject to local sound ordinances after 10:00 PM. Indoor banquet halls allow sound systems to maintain optimal clarity without environmental noise disturbance.'
      },
      {
        type: 'takeaways',
        title: 'Key Takeaways for Couples',
        points: [
          'Morning rituals with agni homam are best hosted in spacious AC halls with high ventilation ceilings.',
          'Evening receptions, sangeets, and cocktail dinners shine brightest on open lawns with fairy lights.',
          'Consider a venue offering both spaces seamlessly on one contiguous property to avoid moving between locations.'
        ]
      }
    ]
  },
  {
    id: 'post-2',
    title: 'Top 7 Traditional Mandap Decor Trends Blending Heritage with Modern Minimalism',
    slug: 'traditional-mandap-decor-trends-modern-minimalism',
    category: 'Decor & Themes',
    featured: false,
    coverImage: '/villa_arched.png',
    readTime: '5 min read',
    publishedAt: 'October 08, 2026',
    author: {
      name: 'Karthik Narayanan',
      role: 'Senior Floral Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    tags: ['Mandap Decor', 'South Indian Wedding', 'Mogra & Marigold', 'Eco-friendly'],
    likes: 98,
    excerpt: 'Discover how contemporary South Indian weddings are pairing fragrant tuberose and temple bells with organic brass pillars and floating pastel accents.',
    content: [
      {
        type: 'paragraph',
        text: 'The traditional South Indian Mandap has transcended heavy velvet backdrops. Today’s couples are embracing architectural silhouettes that let natural botanical textures and ancestral brass artifacts take center stage.'
      },
      {
        type: 'heading',
        text: '1. Cascading Mogra & Lotus Suspensions'
      },
      {
        type: 'paragraph',
        text: 'Instead of dense floral walls, floral stylists are designing inverted aerial gardens using single strands of Madurai Malli (jasmine) and blushing lotus buds. This creates an ethereal, floating ceiling that fills the banquet hall with natural fragrance without overwhelming sightlines.'
      },
      {
        type: 'heading',
        text: '2. Antique Brass Urulis and Deepam Clusters'
      },
      {
        type: 'paragraph',
        text: 'Nothing rivals the warm golden flicker of oil lamps on raw stone or terracotta walkways. Modern mandaps integrate heirloom brass kuthu vilakku lamps paired with water-filled urulis containing scented rose petals and floating wick lights.'
      },
      {
        type: 'quote',
        text: 'Heritage styling is not about clutter; it is about honoring timeless craftsmanship with deliberate, spacious elegance.'
      },
      {
        type: 'takeaways',
        title: 'Mandap Planning Checklist',
        points: [
          'Choose local seasonal flowers like sevvanthi, marigold, and tuberose to ensure maximum freshness during long rituals.',
          'Coordinate stage lighting with your photographer to avoid harsh hot spots on traditional silk zari sarees.',
          'Opt for eco-friendly banana fiber ropes and reusable brass frameworks instead of non-recyclable thermocol.'
        ]
      }
    ]
  },
  {
    id: 'post-3',
    title: 'The Ultimate Guide to South Indian Wedding Catering: From Elai Sappadu to Live Food Stations',
    slug: 'ultimate-guide-south-indian-wedding-catering',
    category: 'Catering & Feast',
    featured: false,
    coverImage: '/dining_facility.png',
    readTime: '7 min read',
    publishedAt: 'September 29, 2026',
    author: {
      name: 'Chef M. Ramanathan',
      role: 'Culinary Consultant',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80'
    },
    tags: ['Elai Sappadu', 'Wedding Catering', 'Feast Menu', 'Live Counters'],
    likes: 185,
    excerpt: 'How to curate an unforgettable 24-dish traditional banana leaf lunch while keeping modern dinner reception live counters crisp and thrilling.',
    content: [
      {
        type: 'paragraph',
        text: 'In South Indian weddings, food is not merely an accompaniment—it is the heart of hospitality and family honor. Balancing ancient Vedic culinary traditions with the expectations of cosmopolitan guests requires strategic planning and a dedicated commercial kitchen.'
      },
      {
        type: 'heading',
        text: 'The Art of the 24-Item Kalyana Virundhu'
      },
      {
        type: 'paragraph',
        text: 'The traditional banana leaf feast (Elai Sappadu) follows a rigorous placement geometry: salt and pickles on the top left, sweets on the bottom right, followed by crisp medu vada, payasam, poriyals, kootu, and freshly poured sambar, rasam, and moru. Timing between seating batches is crucial—our venue dining area accommodates 150+ seats per serving cycle with streamlined service walkways.'
      },
      {
        type: 'heading',
        text: 'Evening Reception: Modern Interactive Counters'
      },
      {
        type: 'paragraph',
        text: 'When night falls on the Mahotsav lawn, guests gravitate toward interactive live stations: wood-fired kulchas, filter coffee froth bars, steamed idiyappam with rich stew, and artisanal tender coconut dessert cups.'
      },
      {
        type: 'takeaways',
        title: 'Catering Coordination Pro-Tips',
        points: [
          'Ensure continuous high-pressure running water and clean disposal trenches in the kitchen prep area.',
          'Schedule morning breakfast serving between 7:30 AM and 9:30 AM before Muhurtham peak.',
          'Design separate lanes for vegetarian banana-leaf dining and evening live buffet stations.'
        ]
      }
    ]
  },
  {
    id: 'post-4',
    title: 'A Step-by-Step 12-Month Wedding Planning Timeline for Couples in Tamil Nadu',
    slug: '12-month-wedding-planning-timeline-tamil-nadu',
    category: 'Wedding Planning',
    featured: false,
    coverImage: '/ocean_card.png',
    readTime: '8 min read',
    publishedAt: 'September 20, 2026',
    author: {
      name: 'Ananya & Arvind',
      role: 'Event Coordinators',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
    tags: ['Wedding Timeline', 'Checklist', 'Muhurtham Dates', 'Budgeting'],
    likes: 119,
    excerpt: 'Your complete month-by-month roadmap: securing prime Muhurtham dates, booking bridal suites, selecting photographers, and locking venue packages early.',
    content: [
      {
        type: 'paragraph',
        text: 'Planning a grand wedding in Tamil Nadu involves harmonizing astrologer-approved auspicious timings (Muhurtham) with vendor availability, family travel schedules, and venue reservations.'
      },
      {
        type: 'heading',
        text: 'Months 12 to 9: Auspicious Dates & Venue Securing'
      },
      {
        type: 'paragraph',
        text: 'Popular Muhurtham dates sell out 9 to 12 months in advance across Coimbatore. As soon as horoscopes are matched and families agree, prioritize venue walkthroughs. Securing both an AC hall and lawn combo gives you total peace of mind regardless of weather.'
      },
      {
        type: 'heading',
        text: 'Months 8 to 5: Creative Team & Attire Sourcing'
      },
      {
        type: 'paragraph',
        text: 'Lock in candid wedding cinematographers and makeup artists early. Plan your Kanchipuram silk saree trials and groom styling sessions to avoid last-minute alterations during rush wedding seasons.'
      },
      {
        type: 'takeaways',
        title: 'Critical Milestones',
        points: [
          'Confirm venue booking with 50% deposit to freeze your date.',
          'Finalize guest room allocations for close family staying overnight.',
          'Review generator power backup and sound curfew policies 30 days prior.'
        ]
      }
    ]
  },
  {
    id: 'post-5',
    title: 'Understanding South Indian Rituals: Muhurtham, Oonjal, and Kasi Yatra Explained',
    slug: 'understanding-south-indian-rituals-oonjal-kasi-yatra',
    category: 'Traditions & Muhurtham',
    featured: false,
    coverImage: '/suites_card.png',
    readTime: '6 min read',
    publishedAt: 'September 12, 2026',
    author: {
      name: 'V. Sundaramurthy',
      role: 'Traditional Rites Advisor',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80'
    },
    tags: ['Oonjal', 'Kasi Yatra', 'Tamil Wedding', 'Rituals'],
    likes: 167,
    excerpt: 'Unveiling the profound symbolism behind the swing ritual (Oonjal), holy Mangalsutra tying, and playful Kasi Yatra traditions that enrich your big day.',
    content: [
      {
        type: 'paragraph',
        text: 'Every gesture in a Vedic Tamil wedding ceremony carries philosophical weight—from grounding the couple in earthly virtues to invoking ancestral blessings.'
      },
      {
        type: 'heading',
        text: 'The Playful Wisdom of Kasi Yatra'
      },
      {
        type: 'paragraph',
        text: 'Before entering the Grihastha (family life) ashram, the groom humorously resolves to depart for Kasi with an umbrella, walking stick, and Geeta. The bride’s father persuades him that living a dutiful householder life with his daughter holds equal spiritual honor.'
      },
      {
        type: 'heading',
        text: 'The Oonjal (Swing Ceremony) Symbolism'
      },
      {
        type: 'paragraph',
        text: 'The swaying wooden swing represents the unpredictable crests and troughs of marital life. As the couple remains steady together while elders sing classical Oonjal songs and wave colored rice balls (Pidi), it symbolizes weathering life’s waves as an unbreakable unit.'
      },
      {
        type: 'takeaways',
        title: 'Ritual Stage Considerations',
        points: [
          'Ensure strong overhead anchor hooks or freestanding carved Oonjal frames with floral garlands.',
          'Provide ample floor seating for the nadaswaram troupe nearby without obstructing guest views.',
          'Position homam fire pits beneath high-clearance exhaust zones or open courtyards.'
        ]
      }
    ]
  },
  {
    id: 'post-6',
    title: 'Eco-Friendly & Sustainable Weddings: Zero-Waste Decor and Plastic-Free Celebrations',
    slug: 'eco-friendly-sustainable-weddings-zero-waste-decor',
    category: 'Decor & Themes',
    featured: false,
    coverImage: '/facility_atrium.png',
    readTime: '5 min read',
    publishedAt: 'September 04, 2026',
    author: {
      name: 'Priyanka Sundaram',
      role: 'Head of Event Curations',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80'
    },
    tags: ['Sustainable Wedding', 'Eco Friendly', 'Zero Waste', 'Green Venue'],
    likes: 112,
    excerpt: 'Practical ideas for hosting an opulent yet environmentally conscious wedding: terracotta favors, compostable dining, and potted plant centerpieces.',
    content: [
      {
        type: 'paragraph',
        text: 'Modern celebrations are joyously returning to natural simplicity. Hosting an eco-friendly wedding does not mean compromising on luxury—it elevates your celebration with wholesome, organic charm.'
      },
      {
        type: 'heading',
        text: 'Ditching Single-Use Plastics for Clay & Steel'
      },
      {
        type: 'paragraph',
        text: 'Replace disposable plastic bottles with brass copper dispensers and monogrammed glass bottles. Guests relish the earthy flavor of water cooled in traditional red mud pots.'
      },
      {
        type: 'heading',
        text: 'Living Botanical Favors'
      },
      {
        type: 'paragraph',
        text: 'Instead of plastic knick-knacks that end up discarded, gift guests miniature flowering jasmine or sacred Tulsi saplings in hand-painted earthen pots wrapped with natural jute ribbon.'
      },
      {
        type: 'takeaways',
        title: 'Green Celebration Steps',
        points: [
          'Compost organic banana leaf remnants with local farm compost partners.',
          'Donate surplus freshly prepared banquet food to local community nourishment programs.',
          'Use reusable copper water goblets and cloth napkins across all dining tables.'
        ]
      }
    ]
  }
];
