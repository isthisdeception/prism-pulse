/**
 * PRISM PULSE — Central Projects & Media Repository
 *
 * All portfolio entries, image sources, posters, and video links are kept here.
 */

import showreelThumb from '../assets/hero-thum.jpg'
import photo01 from '../assets/gallery/photo-01.jpg'
import photo02 from '../assets/gallery/photo-02.jpg'
import photo03 from '../assets/gallery/photo-03.jpg'
import photo04 from '../assets/gallery/photo-04.jpg'
import photo05 from '../assets/gallery/photo-05.jpg'
import photo06 from '../assets/gallery/photo-06.jpg'
import photo07 from '../assets/gallery/photo-07.jpg'
import photo08 from '../assets/gallery/photo-08.jpg'
import photo09 from '../assets/gallery/photo-09.jpg'
import photo10 from '../assets/gallery/photo-10.jpg'
import photo11 from '../assets/gallery/photo-11.jpg'
import photo12 from '../assets/gallery/photo-12.jpg'
import photo13 from '../assets/gallery/photo-13.jpg'
import photo14 from '../assets/gallery/photo-14.jpg'
import photo15 from '../assets/gallery/photo-15.jpg'
import photo16 from '../assets/gallery/photo-16.jpg'
import photo17 from '../assets/gallery/photo-17.jpg'
import photo18 from '../assets/gallery/photo-18.jpg'
import photo19 from '../assets/gallery/photo-19.jpg'
import photo20 from '../assets/gallery/photo-20.jpg'
import photo21 from '../assets/gallery/photo-21.jpg'
import photo22 from '../assets/gallery/photo-22.jpg'

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
  // === PHOTOGRAPHY & AERIAL STILLS (22 Real Captures) ===
  {
    id: 'wooden-boats-in-bloom',
    title: 'Wooden Boats in Bloom',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Aerial Fine Art Photography',
    description: 'Top-down aerial composition of traditional wooden river boats moored in a radial floral formation on tranquil waters.',
    image: photo08,
    alt: 'Top-down drone view of wooden boats arranged in a circle on calm water',
    featured: true,
    aspectRatio: 'landscape'
  },
  {
    id: 'coxs-bazar-fishing-fleet',
    title: "Cox's Bazar Fishing Fleet",
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Coastal Aerial Photography',
    description: 'Overhead perspective of traditional Sampan fishing boats resting along the shoreline where turquoise waves meet the sand.',
    image: photo04,
    alt: "Aerial top-down view of colorful fishing boats on Cox's Bazar beach",
    featured: true,
    aspectRatio: 'landscape'
  },
  {
    id: 'golden-harvest-portrait',
    title: 'The Golden Harvest',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Humanitarian & Rural Portraiture',
    description: 'Environmental portrait of a smiling farmer carrying freshly harvested golden paddy bundles across the fields of Bengal.',
    image: photo14,
    alt: 'Bangladeshi farmer smiling while carrying bundles of golden rice harvest',
    featured: true,
    aspectRatio: 'landscape'
  },
  {
    id: 'scaling-the-orange-hull',
    title: 'Scaling the Orange Hull',
    category: 'Photography',
    year: '2024',
    clientOrContext: 'Industrial & Street Documentary',
    description: 'Striking color-contrast documentary frame of dockyard workers ascending a wooden ladder against a towering orange ship hull.',
    image: photo20,
    alt: 'Shipyard workers climbing a ladder against a vibrant orange ship hull',
    featured: true,
    aspectRatio: 'landscape'
  },
  {
    id: 'night-market-tapestry',
    title: 'Night Market Tapestry',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Night Aerial Study',
    description: 'High-contrast nocturnal drone capture revealing glowing market stalls like a vibrant stained-glass mosaic from above.',
    image: photo07,
    alt: 'Top-down night aerial view of colorful illuminated market stalls',
    featured: true,
    aspectRatio: 'landscape'
  },
  {
    id: 'tiger-moths-macro',
    title: 'Symmetry in Emerald',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Macro Wildlife Study',
    description: 'Intimate macro capture of two black-and-yellow spotted moths balanced on a slender stem against a rich green bokeh.',
    image: photo15,
    alt: 'Two black and yellow moths perched on a green stem in macro detail',
    featured: true,
    aspectRatio: 'portrait'
  },
  {
    id: 'meandering-bengal-river',
    title: 'Emerald River Bend',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Landscape Aerial Series',
    description: 'Sweeping aerial vista of a winding river carving through geometric patchwork agricultural fields.',
    image: photo09,
    alt: 'Aerial view of a winding river through green patchwork fields',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'sadarghat-launch-terminal',
    title: 'River Launch Terminal',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Urban Waterway Aerial',
    description: 'Elevated perspective of passenger river launches aligned along the bustling waterfront terminal.',
    image: photo05,
    alt: 'Aerial view of passenger river launches docked at the terminal',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'mohonpur-dam-cascade',
    title: 'Mohonpur Dam Cascade',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Aerial Landscape Capture',
    description: 'Symmetrical aerial framing of white water cascading across the Mohonpur Rubber Dam.',
    image: photo06,
    alt: 'Aerial view of water flowing over Mohonpur Rubber Dam',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'stadium-city-horizon',
    title: 'Green Canopy & Arena',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Cityscape Aerial Perspective',
    description: 'Expansive high-altitude view of the stadium surrounded by lush greenery and the sprawling urban horizon.',
    image: photo10,
    alt: 'Aerial view of cricket stadium surrounded by trees and cityscape',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'shipyard-artisan',
    title: 'Shipyard Artisan',
    category: 'Photography',
    year: '2024',
    clientOrContext: 'Documentary Portraiture',
    description: 'A dockyard worker suspended on a wooden plank amidst bold red, black, and weathered steel textures.',
    image: photo19,
    alt: 'Worker on suspended plank painting a large ship hull',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'river-childhood-monochrome',
    title: 'River Childhood in Monochrome',
    category: 'Photography',
    year: '2024',
    clientOrContext: 'Black & White Documentary',
    description: 'Timeless monochrome study of children swimming and playing in the river beside a massive cargo vessel.',
    image: photo18,
    alt: 'Black and white photo of children playing in river next to a large ship',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'carrying-harvest-home',
    title: 'Rhythm of Rural Life',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Rural Bengal Series',
    description: 'Village women walking in unison along a verdant riverside trail carrying bundles on their heads.',
    image: photo22,
    alt: 'Four village women walking along a green riverbank carrying loads on their heads',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'rhythm-of-celebration',
    title: 'Rhythm of the Dhak',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Cultural Festival Coverage',
    description: 'Low-angle kinetic capture of traditional Dhak drummers immersed in the joyous energy of festival celebration.',
    image: photo21,
    alt: 'Traditional Dhak drummers playing drums energetically outdoors',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'festival-dhak-drummers',
    title: 'Beats of Tradition',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Cultural Heritage Documentary',
    description: 'Vibrant street composition capturing the movement and devotion of traditional percussionists.',
    image: photo11,
    alt: 'Group of traditional drummers performing during a cultural procession',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'crimson-munia-in-reeds',
    title: 'Crimson Munia in Reeds',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Avian & Wildlife Series',
    description: 'Vibrant red Strawberry Finch perched delicately amidst deep emerald foliage.',
    image: photo16,
    alt: 'Red Avadavat bird perched among green leaves',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'scaly-breasted-munia',
    title: 'Spotted Munia in Meadow',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Avian & Wildlife Series',
    description: 'Close-up wildlife portrait of a Scaly-breasted Munia framed in soft natural grass.',
    image: photo17,
    alt: 'Scaly-breasted Munia bird in green grass',
    featured: false,
    aspectRatio: 'square'
  },
  {
    id: 'eurasian-hoopoe-perched',
    title: 'Crested Hoopoe Silhouette',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Avian & Wildlife Series',
    description: 'Minimalist high-key framing of a Eurasian Hoopoe perched calmly on an interlocking branch.',
    image: photo12,
    alt: 'Eurasian Hoopoe bird perched on a tree branch',
    featured: false,
    aspectRatio: 'square'
  },
  {
    id: 'crested-hoopoe-foraging',
    title: 'Eurasian Hoopoe on Earth',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Avian & Wildlife Series',
    description: 'Eye-level wildlife capture highlighting the intricate plumage and crown of the Eurasian Hoopoe.',
    image: photo13,
    alt: 'Eurasian Hoopoe standing on textured ground',
    featured: false,
    aspectRatio: 'square'
  },
  {
    id: 'two-worlds-convocation',
    title: 'Contrast of Lives',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Street & Social Commentary',
    description: 'Candid street observation juxtaposing quiet resilience beneath a banyan tree with passing convocation graduates.',
    image: photo02,
    alt: 'Elderly woman sitting by a tree trunk with graduating students in the background',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'urban-construction-crew',
    title: 'Builders of the City',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Urban Street Documentary',
    description: 'Gritty urban frame capturing construction workers in bright safety vests against textured city walls.',
    image: photo03,
    alt: 'Construction workers in orange vests near a graffiti wall',
    featured: false,
    aspectRatio: 'landscape'
  },
  {
    id: 'quiet-river-boats',
    title: 'Stillness on the Water',
    category: 'Photography',
    year: '2025',
    clientOrContext: 'Pastoral Landscape',
    description: 'Peaceful afternoon light over moored country boats and grazing pastures along the rural waterway.',
    image: photo01,
    alt: 'Wooden country boats floating near a calm grassy riverbank',
    featured: false,
    aspectRatio: 'landscape'
  },

  // === FILMS, DRONE & COMMERCIAL VIDEOS (9 Real Productions) ===
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
    id: 'ratergul',
    title: 'Ratergul',
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
  ...PROJECTS.filter((p) => Boolean(p.videoUrl))
]
