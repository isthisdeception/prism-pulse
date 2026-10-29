/**
 * PRISM PULSE — Central Site Configuration
 * All contact details, brand copy, navigation, and service descriptions are centralized here.
 * Placeholders are marked with `TODO_REPLACE` so the owner can easily update them.
 */

export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  name: string
  url: string
  label: string
}

export interface ServiceItem {
  id: string
  title: string
  tagline: string
  description: string
  deliverables: string[]
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
    location: 'Available Worldwide & On Location'
  },
  contact: {
    // === REPLACE THESE VALUES WITH YOUR REAL CONTACT DETAILS ===
    whatsappNumber: 'TODO_REPLACE_PHONE_NUMBER', // Example: '+15551234567'
    whatsappUrl: 'https://wa.me/TODO_REPLACE_WITH_NUMBER?text=Hello%20Prism%20Pulse,%20I%20would%20like%20to%20discuss%20a%20project',
    email: 'contact@TODO_REPLACE_DOMAIN.com',
    phoneDisplay: '+1 (555) 019-2834 (TODO_REPLACE)',
    locationDisplay: 'New York / Worldwide (TODO_REPLACE)',
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
      deliverables: ['4K Masters & Social Cuts', 'Director Color Grade', 'Original Sound Design & Mix']
    },
    {
      id: 'photography',
      title: 'Editorial & Portrait Photography',
      tagline: 'Sculpted with natural light and distinct atmosphere.',
      description: 'Striking visual campaigns, commercial lookbooks, environmental portraits, and architectural compositions.',
      deliverables: ['High-Resolution Retouched Plates', 'Print & Commercial Web Licensing', 'Custom Color Tones']
    },
    {
      id: 'drone',
      title: 'Aerial & Drone Visuals',
      tagline: 'Expansive perspectives from vantage points previously unreachable.',
      description: 'Licensed aerial footage and high-resolution overhead photography for luxury real estate, tourism, and cinematic sequences.',
      deliverables: ['ProRes / D-Log Drone Capture', 'Dynamic FPV & Smooth Orbit Tracks', 'Geographical Clearance Compliance']
    },
    {
      id: 'commercial',
      title: 'Brand Stories & Product',
      tagline: 'Visual identities brought alive through kinetic framing.',
      description: 'End-to-end production for brands seeking to captivate discerning audiences through bespoke visual storytelling.',
      deliverables: ['Campaign Strategy & Moodboard', 'Full Production Delivery', 'Multi-Platform Aspect Deliverables']
    }
  ]
}
