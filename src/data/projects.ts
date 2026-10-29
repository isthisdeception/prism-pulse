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
}

export const CATEGORIES: ProjectCategory[] = [
  'Photography',
  'Films',
  'Drone',
  'Commercial'
]

export const PROJECTS: Project[] = [
  {
    id: 'nordic-solitude',
    title: 'Nordic Solitude',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Fine Art / Landscape Series',
    description: 'An exploration of dawn light across volcanic highlands and mist-shrouded glacial rivers.',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80',
    alt: 'Misty glacial river winding through dramatic volcanic mountains at dawn',
    featured: true,
    aspectRatio: 'landscape'
  },
  {
    id: 'echoes-of-dusk',
    title: 'Echoes of Dusk',
    category: 'Films',
    year: '2025',
    clientOrContext: 'Short Narrative & Visual Poem',
    description: 'A study of quiet twilight moments captured entirely on anamorphic lenses during the golden hour.',
    image: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1600&q=80',
    poster: 'https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Moody silhouette against a vibrant dusk horizon and glowing sky',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // TODO_REPLACE
    featured: true,
    aspectRatio: 'landscape'
  },
  {
    id: 'coastal-ridge-flight',
    title: 'Coastal Ridge Flight',
    category: 'Drone',
    year: '2024',
    clientOrContext: 'Aerial Cinematography Exploration',
    description: 'High-altitude dynamic tracking along dramatic ocean bluffs where sea spray meets sheer granite cliffs.',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    poster: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80',
    alt: 'Aerial bird-eye view of turquoise waves crashing against rocky shoreline',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // TODO_REPLACE
    featured: true,
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
    id: 'kinetic-velocity',
    title: 'Kinetic Velocity',
    category: 'Commercial',
    year: '2024',
    clientOrContext: 'Automotive Performance Campaign',
    description: 'Fast-paced tracking shots capturing aerodynamics, wet tarmac reflections, and neon streaks.',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    poster: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1600&q=80',
    alt: 'Sleek sports car cutting through rain-soaked city asphalt under neon lights',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // TODO_REPLACE
    featured: true,
    aspectRatio: 'landscape'
  },
  {
    id: 'solstice-rhythm',
    title: 'Solstice Rhythm',
    category: 'Films',
    year: '2024',
    clientOrContext: 'Choreography & Motion Piece',
    description: 'Kinetic handheld choreography captured in abandoned brutalist architecture under natural shafts of sun.',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80',
    poster: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=1600&q=80',
    alt: 'Silhouette of performer illuminated by vibrant stage beams and ambient haze',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // TODO_REPLACE
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'terra-incognita',
    title: 'Terra Incognita',
    category: 'Drone',
    year: '2024',
    clientOrContext: 'Environmental Heritage Doc',
    description: 'Geometric topography of geothermal geysers and mineral deposits photographed from 400 feet.',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1600&q=80',
    alt: 'Expansive aerial drone vista of winding desert canyon road',
    featured: false,
    aspectRatio: 'landscape'
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
  },
  {
    id: 'aura-chronograph',
    title: 'Aura Chronograph',
    category: 'Commercial',
    year: '2025',
    clientOrContext: 'Luxury Timepiece Commercial',
    description: 'Precision macro lighting showcasing hand-finished bevels, sapphire crystal reflections, and escapement movements.',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    poster: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80',
    alt: 'Macro luxury timepiece mechanical movement with golden reflections',
    videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // TODO_REPLACE
    featured: false,
    aspectRatio: 'landscape'
  }
]

/**
 * Featured showreel project used in Hero & Films section
 */
export const SHOWREEL_PROJECT: Project = {
  id: 'prism-pulse-showreel',
  title: 'Prism Pulse Showreel 2025',
  category: 'Films',
  year: '2025',
  clientOrContext: 'Cinematography & Visual Direction Reel',
  description: 'A curated two-minute reel encapsulating narrative cinematography, commercial work, and aerial perspectives.',
  image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=85',
  poster: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1920&q=85',
  alt: 'Cinematographer holding camera rig framed against golden hour mountain horizon',
  videoUrl: 'https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ', // TODO_REPLACE
  featured: true,
  aspectRatio: 'landscape'
}
