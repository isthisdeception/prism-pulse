import { useState, useMemo } from 'react'
import { Container } from '../components/Container'
import { ImageLightbox } from '../components/ImageLightbox'
import { VideoModal } from '../components/VideoModal'
import { PROJECTS, CATEGORIES, type Project, type ProjectCategory } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { Play, Maximize2, Layers, MessageCircle, ChevronDown, ChevronUp } from 'lucide-react'

const INITIAL_VISIBLE_COUNT = 9

export function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null)

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const visibleProjects = useMemo(() => {
    if (showAll) return filteredProjects
    return filteredProjects.slice(0, INITIAL_VISIBLE_COUNT)
  }, [filteredProjects, showAll])

  // Compute count for each category dynamically
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      All: PROJECTS.length
    }
    for (const cat of CATEGORIES) {
      counts[cat] = PROJECTS.filter((p) => p.category === cat).length
    }
    return counts
  }, [])

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category)
    setShowAll(false)
  }

  const handleOpenProject = (project: Project) => {
    if (project.videoUrl) {
      setActiveVideoProject(project)
      return
    }
    setSelectedProject(project)
    setIsLightboxOpen(true)
  }

  const handlePlayVideoFromLightbox = (project: Project) => {
    setIsLightboxOpen(false)
    setActiveVideoProject(project)
  }

  return (
    <section
      id="work"
      className="scroll-mt-24 py-20 sm:py-28 border-b border-[#222533]/80 relative"
      aria-labelledby="selected-works-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a24] border border-[#2e3346] text-xs font-medium text-amber-400 mb-4">
              <Layers className="w-3.5 h-3.5" />
              <span className="tracking-wide uppercase text-[11px]">Selected Works</span>
            </div>
            <h2
              id="selected-works-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#f3f3f6]"
            >
              Capturing light.{' '}
              <span className="font-serif italic font-normal text-amber-300">
                Framing memory.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#9fa2b4] mt-3 font-light leading-relaxed">
              A curated selection of fine-art photography, narrative motion, and aerial perspectives captured across Bangladesh.
            </p>
          </div>

          <div className="text-xs text-[#676b7e] font-mono">
            Showing {visibleProjects.length} of {filteredProjects.length} works
          </div>
        </div>

        {/* Filter Pill Tabs */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-12 scrollbar-none"
          role="tablist"
          aria-label="Filter portfolio projects by category"
        >
          {['All', ...CATEGORIES].map((category) => {
            const count = categoryCounts[category] || 0
            const isActive = activeCategory === category

            return (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => handleCategoryChange(category)}
                className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isActive
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-md shadow-amber-400/20'
                    : 'bg-[#12131a] text-[#9fa2b4] hover:text-[#f3f3f6] hover:bg-[#181a24] border border-[#222533]'
                }`}
              >
                <span>{category as ProjectCategory}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.5 rounded-full ${
                    isActive
                      ? 'bg-neutral-950/20 text-neutral-950'
                      : 'bg-[#1e202c] text-[#676b7e]'
                  }`}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        {/* Frameless Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group relative aspect-[4/3] w-full rounded-2xl overflow-hidden bg-[#12131a] border border-[#222533]/80 hover:border-amber-400/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/10 cursor-pointer animate-fade-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              onClick={() => handleOpenProject(project)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleOpenProject(project)
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${project.title} (${project.category})`}
            >
              {/* Crisp Full-Brightness Photograph */}
              <img
                src={project.image}
                alt={project.alt}
                width={800}
                height={600}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Subtle Bottom Gradient Only for Title Legibility */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/90 via-[#090a0f]/15 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"
                aria-hidden="true"
              />

              {/* Top Category Pill */}
              <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#090a0f]/75 text-amber-300/95 border border-white/10 backdrop-blur-md">
                  {project.category}
                </span>
                {project.duration && (
                  <span className="text-[10px] font-mono text-[#f3f3f6] px-2 py-0.5 rounded-full bg-[#090a0f]/75 border border-white/10 backdrop-blur-md">
                    {project.duration}
                  </span>
                )}
              </div>

              {/* Center Hover Action Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-[#090a0f]/80 text-amber-300 border border-amber-400/50 backdrop-blur-md flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 transition-transform duration-300">
                  {project.videoUrl ? (
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  ) : (
                    <Maximize2 className="w-4 h-4" />
                  )}
                </div>
              </div>

              {/* Clean Overlaid Title at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 flex items-end justify-between gap-3 pointer-events-none">
                <div>
                  {project.clientOrContext && (
                    <span className="block text-[10px] uppercase tracking-wider text-amber-300/80 font-mono mb-0.5">
                      {project.clientOrContext}
                    </span>
                  )}
                  <h3 className="text-base sm:text-lg font-medium text-[#f3f3f6] group-hover:text-amber-200 transition-colors duration-200 leading-snug">
                    {project.title}
                  </h3>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* View All / Show Less Toggle Button */}
        {filteredProjects.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#12131a] hover:bg-[#181a24] text-[#f3f3f6] hover:text-amber-300 border border-[#2e3346] hover:border-amber-400/50 text-xs sm:text-sm font-medium tracking-wider uppercase transition-all duration-300 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4 text-amber-400" />
                </>
              ) : (
                <>
                  <span>
                    Explore All {filteredProjects.length}{' '}
                    {activeCategory === 'All' ? 'Works' : activeCategory}
                  </span>
                  <ChevronDown className="w-4 h-4 text-amber-400" />
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom WhatsApp Inquiry Callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#12131a] via-[#161822] to-[#12131a] border border-[#2e3346] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-base sm:text-lg font-medium text-[#f3f3f6]">
              Have a bespoke production or shoot in mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#9fa2b4] mt-1 font-light">
              Available for commercial assignments, destination weddings, and editorial campaigns all over Bangladesh.
            </p>
          </div>

          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#181a24] hover:bg-amber-400 hover:text-neutral-950 text-[#f3f3f6] border border-[#2e3346] hover:border-amber-400 text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </Container>

      {/* Lightbox Component */}
      <ImageLightbox
        project={selectedProject}
        allProjects={filteredProjects}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNavigate={(nextProject) => setSelectedProject(nextProject)}
        onPlayVideo={handlePlayVideoFromLightbox}
      />

      {/* Video Modal if triggered from card or Lightbox */}
      <VideoModal
        isOpen={activeVideoProject !== null}
        onClose={() => setActiveVideoProject(null)}
        videoUrl={activeVideoProject?.videoUrl}
        title={activeVideoProject?.title || ''}
        resolution={activeVideoProject?.resolution}
        duration={activeVideoProject?.duration}
      />
    </section>
  )
}
