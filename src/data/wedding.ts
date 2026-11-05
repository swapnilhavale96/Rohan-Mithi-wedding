/**
 * ============================================
 * WEDDING INVITATION CONFIGURATION
 * ============================================
 *
 * Edit this file to personalize the wedding invitation.
 * All wedding details, event information, and theme
 * settings are centralized here for easy customization.
 *
 * A non-technical user should be able to update names,
 * dates, venues, and images by modifying values below.
 * ============================================
 */

// ---- Types ----

export interface WeddingEvent {
  id: string;
  name: string;
  date: string; // Display date string, e.g. "Friday, 15th November 2026"
  time: string;
  venue: string;
  address: string;
  description: string;
  dressCode?: string;
  icon: string; // Emoji or icon name
}

export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface WeddingConfig {
  // Couple Information
  bride: {
    firstName: string;
    lastName: string;
    parentNames: string;
  };
  groom: {
    firstName: string;
    lastName: string;
    parentNames: string;
  };

  // Invitation Text
  invitationHeading: string;
  invitationSubheading: string;
  invitationMessage: string;
  familyInvitationText: string;

  // Wedding Date & Time (ISO 8601 format for countdown)
  weddingDate: string;
  weddingDateDisplay: string;
  weddingTimezone: string;

  // Venue Information
  venue: {
    name: string;
    address: string;
    city: string;
    googleMapsUrl: string;
    googleMapsEmbedQuery: string;
  };

  // Events
  events: WeddingEvent[];

  // Photo Gallery (optional)
  gallery?: GalleryImage[];

  // RSVP & Sharing
  whatsappNumber: string; // Include country code, e.g. "919876543210"
  rsvpMessage: string;
  websiteUrl: string; // Your deployed website URL

  // Music (optional)
  backgroundMusicPath?: string; // Path to audio file in public/ directory

  // Theme Colors (CSS custom properties)
  theme: {
    primary: string;       // Champagne gold
    secondary: string;     // Blush pink
    accent: string;        // Muted rose
    background: string;    // Cream/ivory
    backgroundAlt: string; // Slightly darker cream
    text: string;          // Dark brown
    textLight: string;     // Medium brown
    textMuted: string;     // Light brown
    gold: string;          // Rich gold
    goldLight: string;     // Light gold
    border: string;        // Subtle border
  };

  // Footer
  footerMessage: string;
  hashtag?: string;
}

// ---- Configuration ----

const weddingConfig: WeddingConfig = {
  // =====================
  // COUPLE INFORMATION
  // =====================
  bride: {
    firstName: "Mithi",
    lastName: "Tiwari",
    parentNames: "Daughter of Mr. Vimal & Mrs. Nitu Tiwari",
  },
  groom: {
    firstName: "Rohan",
    lastName: "Dubey",
    parentNames: "Son of Mr. Sunil & Mrs. Ranjana Dubey",
  },

  // =====================
  // INVITATION TEXT
  // =====================
  invitationHeading: "Together with their families",
  invitationSubheading: "Request the pleasure of your company",
  invitationMessage:
    "With the blessings of our parents and the grace of God, we joyfully invite you to celebrate the union of our hearts as we begin our forever together.",
  familyInvitationText:
    "Mr. Sunil & Mrs. Ranjana Dubey and Mr. Vimal & Mrs. Nitu Tiwari cordially invite you to the wedding celebration of their beloved children.",

  // =====================
  // WEDDING DATE
  // =====================
  // Set the wedding date in ISO 8601 format
  weddingDate: "2026-12-08T18:00:00+05:30",
  weddingDateDisplay: "Wednesday, 08 December 2026",
  weddingTimezone: "Asia/Kolkata",

  // =====================
  // VENUE
  // =====================
  venue: {
    name: "Dak Bangla Zila Parishad, Dumka",
    address: "765X+VQH, Bypass Rd",
    city: "Dumka, Jharkhand 814101",
    googleMapsUrl: "https://maps.app.goo.gl/QCmy7n1kCD5o9gz88",
    googleMapsEmbedQuery: "Dak Bangla Zila Parishad, Dumka",
  },

  // =====================
  // WEDDING EVENTS
  // =====================
  events: [
    {
      id: "haldi",
      name: "Haldi Ceremony",
      date: "Thursday, 07 December 2026",
      time: "10:00 AM – 1:00 PM",
      venue: "Dak Bangla Zila Parishad, Dumka",
      address: "Dumka, Jharkhand ",
      description:
        "Join us for the traditional Haldi ceremony as we bless the couple with turmeric for a radiant glow and auspicious beginning.",
      dressCode: "Yellow & Traditional",
      icon: "🌼",
    },
    {
      id: "mehendi",
      name: "Mehendi Ceremony",
      date: "Thursday,  07 December 2026",
      time: "4:00 PM – 8:00 PM",
      venue: "Dak Bangla Zila Parishad, Dumka",
      address: "Dumka, Jharkhand ",
      description:
        "An afternoon of beautiful henna artistry, music, and celebration. Watch as intricate patterns tell stories of love.",
      dressCode: "Green & Festive Attire",
      icon: "🌿",
    },
    {
      id: "sangeet",
      name: "Sangeet Night",
      date: "Thursday, 07 December 2026",
      time: "7:00 PM Onwards",
      venue: "Dak Bangla Zila Parishad, Dumka",
      address: "Dumka, Jharkhand ",
      description:
        "A sparkling evening of dance, music, and unforgettable performances. Get ready to dance the night away!",
      dressCode: "Glamorous & Glittering",
      icon: "🎶",
    },
    {
      id: "wedding",
      name: "Wedding Ceremony",
      date: "Wednesday, 08 December 2026",
      time: "6:00 PM – 9:00 PM",
      venue: "Dak Bangla Zila Parishad, Dumka",
      address: "Dumka, Jharkhand ",
      description:
        "Witness the sacred union as Aarav and Meera take their vows and begin their beautiful journey together around the holy fire.",
      dressCode: "Traditional Indian Formal",
      icon: "💍",
    },
    {
      id: "reception",
      name: "Grand Reception",
      date: "Wednesday, 08 December 2026",
      time: "9:00 PM Onwards",
      venue: "Dak Bangla Zila Parishad, Dumka",
      address: "Dumka, Jharkhand",
      description:
        "Join us for a grand celebration with dinner, music, and joyous festivities as we welcome the newlyweds.",
      dressCode: "Elegant & Formal",
      icon: "🥂",
    },
  ],

  // =====================
  // PHOTO GALLERY
  // =====================
  // Replace these with your actual photos.
  // Place images in public/images/ and update the paths below.
  /*gallery: [
    {
      src: "/images/gallery-1.jpg",
      alt: "Aarav and Meera - Engagement",
      width: 800,
      height: 1000,
    },
    {
      src: "/images/gallery-2.jpg",
      alt: "Pre-wedding photoshoot",
      width: 800,
      height: 600,
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Our beautiful journey",
      width: 800,
      height: 1000,
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Together forever",
      width: 800,
      height: 600,
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Love in bloom",
      width: 800,
      height: 1000,
    },
    {
      src: "/images/gallery-6.jpg",
      alt: "Our engagement day",
      width: 800,
      height: 600,
    },
  ]*/

  // =====================
  // RSVP & SHARING
  // =====================
  whatsappNumber: "918003594151", // Replace with actual WhatsApp number
  rsvpMessage:
    "Dear Aarav & Meera, I am delighted to confirm my attendance at your wedding celebration! 🎊",
  websiteUrl: "https://rohan-mithi-wedding.vercel.app", // Update after deploying

  // =====================
  // MUSIC (Optional)
  // =====================
  // Place an audio file (MP3) in public/music/ and set the path below.
  // Set to undefined if no music is desired.
  backgroundMusicPath: undefined,

  // =====================
  // THEME COLORS
  // =====================
  theme: {
    primary: "#C9A96E",       // Champagne gold
    secondary: "#F2D5D5",     // Blush pink
    accent: "#B76E79",        // Muted rose
    background: "#FDF8F0",    // Cream/ivory
    backgroundAlt: "#F5EDE0", // Warm cream
    text: "#3D2B1F",          // Dark brown
    textLight: "#6B5344",     // Medium brown
    textMuted: "#9B8579",     // Light brown/taupe
    gold: "#B8860B",          // Rich gold
    goldLight: "#DAA520",     // Goldenrod
    border: "#E8DDD0",        // Subtle warm border
  },

  // =====================
  // FOOTER
  // =====================
  footerMessage:
    "We are blessed to have you in our lives and would be honored by your presence on our special day.",
  hashtag: "#AaravWedsМeera",
};

export default weddingConfig;
