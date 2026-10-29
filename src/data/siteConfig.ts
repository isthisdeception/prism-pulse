/**
 * PRISM PULSE — Central Site Configuration
 * All contact details, brand copy, navigation, service descriptions, and about info are centralized here.
 * Placeholders are marked with `TODO_REPLACE` so the owner can easily update them.
 */

export interface NavItem {
  label: string
  href: string
}

export interface ServiceItem {
  id: string
  title: string
  tagline: string
  description: string
  deliverables: string[]
  image: string
  alt: string
}

export interface ApproachPoint {
  number: string
  title: string
  description: string
}

export interface SiteConfig {
  brand: {
    name: string
    shortName: string
    tagline: string
    subTagline: string
    bioShort: string
    bioFull: string[]
    location: string
    portraitImage: string
    portraitAlt: string
    approachTitle: string
    approachPoints: ApproachPoint[]
  }
  contact: {
    whatsappNumber: string // TODO_REPLACE: format with country code, e.g. +1234567890
    whatsappUrl: string // TODO_REPLACE: https://wa.me/XXXXXXXXXXX
    email: string // TODO_REPLACE: contact@prismpulse.com
    phoneDisplay: string // TODO_REPLACE: +1 (555) 000-0000
    locationDisplay: string
    socials: {
      whatsapp: string // TODO_REPLACE
      instagram: string // TODO_REPLACE
      facebook: string // TODO_REPLACE
      youtube?: string // TODO_REPLACE
      vimeo?: string // TODO_REPLACE
    }
  }
  navigation: NavItem[]
  services: ServiceItem[]
}

export const siteConfig: SiteConfig = {
  brand: {
    name: 'PRISM PULSE',
    shortName: 'Prism Pulse',
    tagline: 'Light in motion. Stories in focus.',
    subTagline: 'Cinematic photography, videography, and drone visuals tailored for visionary brands and authentic narratives.',
    bioShort: 'Visual creator specializing in high-contrast cinematic framing, kinetic storytelling, and aerial perspective.',
    bioFull: [
      'Prism Pulse is an independent visual atelier founded on a single conviction: every frame carries emotional weight. Combining disciplined cinematic lighting with instinctive handheld and drone camera work, projects transcend standard documentation into enduring visual experiences.',
      'From editorial portraits and high-energy commercial campaigns to sweeping aerial landscape captures, every production is executed with refined color grading, meticulous sound design, and an unwavering focus on pacing and feeling.'
    ],
    location: 'Available All Over Bangladesh & On Location',
    // Dummy behind-the-scenes portrait photo - replaceable by the photographer
    portraitImage: 'https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&w=1200&q=80',
    portraitAlt: 'Cinematographer holding camera on location at golden hour',
    approachTitle: 'Guiding Principles',
    approachPoints: [
      {
        number: '01',
        title: 'Intentional Framing',
        description: 'Every composition is deliberate. We prioritize negative space, authentic natural texture, and geometric balance over fleeting trends.'
      },
      {
        number: '02',
        title: 'Cinematic Color Grading',
        description: 'Color science engineered per project, balancing film-stock warmth with modern dynamic range and accurate skin tones.'
      },
      {
        number: '03',
        title: 'Agile & Drone-Certified',
        description: 'Certified for safe, legal, and rapid aerial deployment from scenic remote spots to urban production sets.'
      }
    ]
  },
  contact: {
    // === REPLACE THESE VALUES WITH YOUR REAL CONTACT DETAILS ===
    whatsappNumber: 'TODO_REPLACE_PHONE_NUMBER', // Example: '+8801XXXXXXXXX'
    whatsappUrl: 'https://wa.me/TODO_REPLACE_WITH_NUMBER?text=Hello%20Prism%20Pulse,%20I%20would%20like%20to%20discuss%20a%20project',
    email: 'contact@TODO_REPLACE_DOMAIN.com',
    phoneDisplay: '+880 1XXX-XXXXXX (TODO_REPLACE)',
    locationDisplay: 'Available All Over Bangladesh · Based in Dhaka (TODO_REPLACE)',

    socials: {
      whatsapp: 'https://wa.me/TODO_REPLACE_WITH_NUMBER',
      instagram: 'https://instagram.com/TODO_REPLACE_HANDLE',
      facebook: 'https://facebook.com/TODO_REPLACE_PAGE',
      youtube: 'https://youtube.com/@TODO_REPLACE_CHANNEL',
      vimeo: 'https://vimeo.com/TODO_REPLACE_USER'
    }
  },
  navigation: [
    { label: 'Work', href: '#work' },
    { label: 'Films', href: '#films' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ],
  services: [
    {
      id: 'cinematography',
      title: 'Cinematography & Films',
      tagline: 'Motion pictures with depth and deliberate rhythm.',
      description: 'Direction, camera operation, and color grading for brand films, mini-docs, music visualizers, and narrative commercials.',
      deliverables: ['4K Masters & Social Cuts', 'Director Color Grade', 'Original Sound Design & Mix'],
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cinematographer operating cinema camera rig during golden hour'
    },
    {
      id: 'photography',
      title: 'Editorial & Portrait Photography',
      tagline: 'Sculpted with natural light and distinct atmosphere.',
      description: 'Striking visual campaigns, commercial lookbooks, environmental portraits, and architectural compositions.',
      deliverables: ['High-Resolution Retouched Plates', 'Print & Commercial Web Licensing', 'Custom Color Tones'],
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
      alt: 'High-fashion editorial portrait with dramatic side lighting'
    },
    {
      id: 'drone',
      title: 'Aerial & Drone Visuals',
      tagline: 'Expansive perspectives from vantage points previously unreachable.',
      description: 'Licensed aerial footage and high-resolution overhead photography for luxury real estate, tourism, and cinematic sequences.',
      deliverables: ['ProRes / D-Log Drone Capture', 'Dynamic FPV & Smooth Orbit Tracks', 'Geographical Clearance Compliance'],
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Aerial bird-eye view of turquoise ocean shoreline'
    },
    {
      id: 'commercial',
      title: 'Brand Stories & Commercial',
      tagline: 'Visual identities brought alive through kinetic framing.',
      description: 'End-to-end production for brands seeking to captivate discerning audiences through bespoke visual storytelling.',
      deliverables: ['Campaign Strategy & Moodboard', 'Full Production Delivery', 'Multi-Platform Aspect Deliverables'],
      image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cinematic commercial shoot with rain and dynamic lighting'
    }
  ]
}
