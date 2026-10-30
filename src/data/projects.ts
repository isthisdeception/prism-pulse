/**
 * PRISM PULSE — Central Projects & Media Repository
 * 
 * All portfolio entries, image sources, posters, and video links are kept here.
 * When the owner is ready to connect real assets (e.g. Cloudinary, YouTube, Vimeo),
 * they only need to update the URLs in this file.
 * 
 * NOTE: Media URLs below are curated placeholder demonstrations and do not claim to be
 * the photographer's personal copyrighted work.
 */

export type ProjectCategory = 'Photography' | 'Films' | 'Drone' | 'Commercial'
import showreelThumb from '../assets/hero-thum.jpg'

export interface Project {
  id: string
  title: string
  category: ProjectCategory
  year: string
  clientOrContext?: string
  description: string
  // Primary visual asset (high quality photo or film poster)
  image: string
  alt: string
  // Optional video properties for film / showreel entries
  videoUrl?: string // YouTube, Vimeo embed URL, or direct mp4
  poster?: string // Video poster before play is triggered
  featured?: boolean
  aspectRatio?: 'landscape' | 'portrait' | 'square'
  duration?: string // e.g. "02:15"
  resolution?: string // e.g. "4K DCI / 2.39:1"
  role?: string // e.g. "Director of Photography"
}

export const CATEGORIES: ProjectCategory[] = [
  'Photography',
  'Films',
  'Drone',
  'Commercial'
]

export const PROJECTS: Project[] = [
  {
    id: 'shironamhin',
    title: 'Shironamhin',
    category: 'Films',
    year: '2025',
    clientOrContext: 'Concert & Live Music Visual',
    description: 'Cinematic live stage framing capturing the energy, lighting, and atmosphere of Shironamhin in performance.',
    image: 'https://i.ytimg.com/vi/1dwPPgTTQic/maxresdefault.jpg',
    poster: 'https://i.ytimg.com/vi/1dwPPgTTQic/maxresdefault.jpg',
    alt: 'Shironamhin live performance captured with dramatic concert lighting',
    videoUrl: 'https://www.youtube-nocookie.com/embed/1dwPPgTTQic',
    featured: true,
    aspectRatio: 'landscape',
    duration: '01:47',
    resolution: '4K Cinema · Live',
    role: 'Cinematographer & Editor'
  },
  {
    id: 'gram-bangla',
    title: 'Gram Bangla',
    category: 'Films',
    year: '2025',
    clientOrContext: 'Visual Poem & Heritage Story',
    description: 'An intimate visual journey through the serene landscapes, rivers, and timeless rural rhythm of Bengal.',
    image: 'https://i.ytimg.com/vi/-YyDm7b8nuc/maxresdefault.jpg',
    poster: 'https://i.ytimg.com/vi/-YyDm7b8nuc/maxresdefault.jpg',
    alt: 'Cinematic frame of rural Bengal landscape and heritage',
    videoUrl: 'https://www.youtube-nocookie.com/embed/-YyDm7b8nuc',
    featured: true,
    aspectRatio: 'landscape',
    duration: '00:45',
    resolution: '4K Color Graded',
    role: 'Director of Photography'
  },
  {
    id: 'mohonpur-rabar-dam',
    title: 'Mohonpur Rabar Dam',
    category: 'Drone',
    year: '2025',
    clientOrContext: 'Aerial & Landscape Cinematography',
    description: 'Sweeping perspectives and flowing water textures captured across Mohonpur Rubber Dam.',
    image: 'https://i.ytimg.com/vi/c7xmXEACaqA/maxresdefault.jpg',
    poster: 'https://i.ytimg.com/vi/c7xmXEACaqA/maxresdefault.jpg',
    alt: 'Aerial and cinematic view of Mohonpur Rabar Dam',
    videoUrl: 'https://www.youtube-nocookie.com/embed/c7xmXEACaqA',
    featured: true,
    aspectRatio: 'landscape',
    duration: '01:04',
    resolution: '4K Aerial · 60fps',
    role: 'Drone Pilot & DP'
  },
  {
    id: 'coxs-bazar-aerial',
    title: "Cox's Bazar — Coastal Horizon",
    category: 'Drone',
    year: '2025',
    clientOrContext: 'Coastal Aerial Exploration',
    description: 'Dynamic coastal motion along the world’s longest natural sea beach under golden light.',
    image: 'https://i.ytimg.com/vi/xLc4RRcspDg/maxresdefault.jpg',
    poster: 'https://i.ytimg.com/vi/xLc4RRcspDg/maxresdefault.jpg',
    alt: "Cox's Bazar shoreline and ocean waves from above",
    videoUrl: 'https://www.youtube-nocookie.com/embed/xLc4RRcspDg',
    featured: true,
    aspectRatio: 'landscape',
    duration: '00:29',
    resolution: '4K D-Log · Aerial',
    role: 'Aerial Cinematographer'
  },
  {
    id: 'coxs-bazar-waves',
    title: "Cox's Bazar",
    category: 'Films',
    year: '2025',
    clientOrContext: 'Coastal Visual Short',
    description: 'Atmospheric seaside study of rolling tides, horizon lines, and coastal mood at Cox’s Bazar.',
    image: 'https://i.ytimg.com/vi/tZLBFM67Ihk/maxresdefault.jpg',
    poster: 'https://i.ytimg.com/vi/tZLBFM67Ihk/maxresdefault.jpg',
    alt: "Cinematic coastal frame at Cox's Bazar",
    videoUrl: 'https://www.youtube-nocookie.com/embed/tZLBFM67Ihk',
    featured: false,
    aspectRatio: 'landscape',
    duration: '00:19',
    resolution: '4K Cinema',
    role: 'Director of Photography'
  },
  {
    id: 'sreemangal',
    title: 'Sreemangal',
    category: 'Drone',
    year: '2025',
    clientOrContext: 'Highland Tea Gardens & Mist',
    description: 'Lush emerald tea estates and misty hills of Sreemangal framed from elevated aerial perspectives.',
    image: 'https://i.ytimg.com/vi/y4oNNpmuwT8/maxresdefault.jpg',
    poster: 'https://i.ytimg.com/vi/y4oNNpmuwT8/maxresdefault.jpg',
    alt: 'Green tea gardens of Sreemangal from aerial perspective',
    videoUrl: 'https://www.youtube-nocookie.com/embed/y4oNNpmuwT8',
    featured: true,
    aspectRatio: 'landscape',
    duration: '00:15',
    resolution: '4K Aerial',
    role: 'Drone Pilot & Colorist'
  },
  {
    id: 'ratargul',
    title: 'Ratargul',
    category: 'Films',
    year: '2025',
    clientOrContext: 'Swamp Forest Expedition',
    description: 'Gliding through the submerged canopy and tranquil reflections of Ratargul Freshwater Swamp Forest.',
    image: 'https://i.ytimg.com/vi/VM_-_ctn1Fg/maxresdefault.jpg',
    poster: 'https://i.ytimg.com/vi/VM_-_ctn1Fg/maxresdefault.jpg',
    alt: 'Submerged trees and reflections in Ratergul Swamp Forest',
    videoUrl: 'https://www.youtube-nocookie.com/embed/VM_-_ctn1Fg',
    featured: true,
    aspectRatio: 'landscape',
    duration: '00:48',
    resolution: '4K Natural Light',
    role: 'Director of Photography'
  },
  {
    id: 'beautiful-creature',
    title: 'Beautiful Creature',
    category: 'Films',
    year: '2025',
    clientOrContext: 'Nature & Close-Up Study',
    description: 'Intimate natural framing highlighting delicate motion, texture, and organic detail.',
    image: 'https://i.ytimg.com/vi/aDxX5Ge37U8/maxresdefault.jpg',
    poster: 'https://i.ytimg.com/vi/aDxX5Ge37U8/maxresdefault.jpg',
    alt: 'Close-up cinematic nature study of a beautiful creature',
    videoUrl: 'https://www.youtube-nocookie.com/embed/aDxX5Ge37U8',
    featured: false,
    aspectRatio: 'landscape',
    duration: '00:07',
    resolution: '4K Macro · 60fps',
    role: 'Cinematographer'
  },
  {
    id: 'ramp-show-smuct',
    title: 'Ramp Show — Shanto-Mariam University',
    category: 'Commercial',
    year: '2025',
    clientOrContext: 'Fashion & Event Coverage',
    description: 'High-energy runway coverage capturing choreography, stage lighting, and couture movement.',
    image: 'https://i.ytimg.com/vi/ddBGjf5wP-Y/maxresdefault.jpg',
    poster: 'https://i.ytimg.com/vi/ddBGjf5wP-Y/maxresdefault.jpg',
    alt: 'Runway fashion ramp show at Shanto-Mariam University',
    videoUrl: 'https://www.youtube-nocookie.com/embed/ddBGjf5wP-Y',
    featured: true,
    aspectRatio: 'landscape',
    duration: '01:08',
    resolution: '4K Event Master',
    role: 'Lead Videographer & Editor'
  },
  {
    id: 'nordic-solitude',
    title: 'Nordic Solitude',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Fine Art / Landscape Series',
    description: 'An exploration of dawn light across volcanic highlands and mist-shrouded glacial rivers.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    alt: 'Misty glacial river winding through dramatic volcanic mountains at dawn',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'lumina-editorial',
    title: 'Lumina Editorial',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Haute Horlogerie / Studio Study',
    description: 'Micro-composition balancing harsh beam lighting with velvet-textured deep shadows.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    alt: 'High-fashion editorial portrait with dramatic side lighting and rich contrasts',
    featured: false,
    aspectRatio: 'portrait'
  },
  {
    id: 'monochrome-silence',
    title: 'Monochrome Silence',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Architectural Monograph',
    description: 'High-contrast black and white architecture emphasizing geometry, negative space, and deep shadows.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=80',
    alt: 'Minimalist modern interior with deep geometric shadows and warm sunlight beam',
    featured: false,
    aspectRatio: 'square'
  }
]

/**
 * Featured showreel project used in Hero & Films section
 */
export const SHOWREEL_PROJECT: Project = {
  id: 'prism-pulse-showreel',
  title: 'Prism Pulse',
  category: 'Films',
  year: '2025',
  clientOrContext: 'Cinematography & Visual Direction Reel',
  description: 'A curated reel encapsulating narrative cinematography, commercial work, and aerial perspectives.',
  image: showreelThumb,
  poster: showreelThumb,
  alt: 'Cinematographer with drone framed against dramatic sky',
  videoUrl: 'https://www.youtube-nocookie.com/embed/wi3-iiwBn1c',
  featured: true,
  aspectRatio: 'landscape',
  duration: '00:40',
  resolution: '4K DCI · 2.39:1 Anamorphic',
  role: 'Director of Photography & Colorist'
}

/**
 * Filtered list of films and motion items for the Films Showcase section
 */
export const FILM_SHOWCASE: Project[] = [
  SHOWREEL_PROJECT,
  ...PROJECTS.filter((p) => p.category === 'Films' || p.category === 'Drone' || (p.videoUrl !== undefined && p.videoUrl !== ''))
]
