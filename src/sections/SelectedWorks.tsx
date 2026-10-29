import { useState, useMemo } from 'react'
import { Container } from '../components/Container'
import { ImageLightbox } from '../components/ImageLightbox'
import { VideoModal } from '../components/VideoModal'
import { PROJECTS, CATEGORIES, type Project, type ProjectCategory } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { Play, Maximize2, Layers, MessageCircle } from 'lucide-react'

export function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null)

  // Filter projects based on active category
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

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

  const handleOpenProject = (project: Project) => {
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
              Capturing light. <span className="font-semibold text-amber-300">Framing memory.</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9fa2b4] mt-3 font-light leading-relaxed">
              A curated selection of narrative motion, fine-art stills, and aerial perspectives captured across commercial and editorial assignments.
            </p>
          </div>

          <div className="text-xs text-[#676b7e] font-mono">
            Showing {filteredProjects.length} of {PROJECTS.length} productions
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
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-4 py-2.5 min-h-[44px] rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isActive
                    ? 'bg-amber-400 text-neutral-950 font-semibold shadow-md shadow-amber-400/20'
                    : 'bg-[#12131a] text-[#9fa2b4] hover:text-[#f3f3f6] hover:bg-[#181a24] border border-[#222533]'
                }`}
              >
                <span>{category as ProjectCategory}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full ${
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

        {/* Projects Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              className="group relative bg-[#12131a] border border-[#222533] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-400/5 cursor-pointer flex flex-col"
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
              {/* Image Frame with stable 4:3 Aspect Ratio */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#0d0e14]">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.03] transition-transform duration-500 ease-out group-hover:scale-105"
                />


                {/* Dark Vignette Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-black/30 opacity-70 group-hover:opacity-85 transition-opacity duration-300"
                  aria-hidden="true"
                />

                {/* Category & Year Top Badges */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="text-[11px] font-medium uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#090a0f]/85 text-amber-300 border border-[#222533] backdrop-blur-sm">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-[#9fa2b4] px-2 py-0.5 rounded bg-[#090a0f]/80 backdrop-blur-sm">
                    {project.year}
                  </span>
                </div>

                {/* Hover Action Badge */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  <div className="flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#090a0f]/90 text-amber-300 border border-amber-400/50 backdrop-blur-md shadow-xl text-xs font-medium">
                    {project.videoUrl ? (
                      <>
                        <Play className="w-3.5 h-3.5 fill-current" />
                        <span>Watch Film</span>
                      </>
                    ) : (
                      <>
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View Photo</span>
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Bottom Meta */}
              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#12131a]">
                <div>
                  <h3 className="text-base sm:text-lg font-medium text-[#f3f3f6] group-hover:text-amber-300 transition-colors duration-200">
                    {project.title}
                  </h3>
                  {project.clientOrContext && (
                    <p className="text-xs text-amber-400/80 font-mono mt-0.5 tracking-wide">
                      {project.clientOrContext}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-[#9fa2b4] mt-2 line-clamp-2 leading-relaxed font-light">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-[#222533]/80 flex items-center justify-between text-[11px] text-[#676b7e]">
                  <span>Click to expand</span>
                  <span className="text-amber-400/70 group-hover:text-amber-400 transition-colors">
                    Explore →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom WhatsApp Inquiry Callout */}
        <div className="mt-16 p-6 sm:p-8 rounded-xl bg-gradient-to-r from-[#12131a] via-[#161822] to-[#12131a] border border-[#2e3346] flex flex-col sm:flex-row items-center justify-between gap-6">
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
            className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#181a24] hover:bg-amber-400 hover:text-neutral-950 text-[#f3f3f6] border border-[#2e3346] hover:border-amber-400 text-xs sm:text-sm font-medium tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
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

      {/* Video Modal if triggered from Lightbox */}
      <VideoModal
        isOpen={activeVideoProject !== null}
        onClose={() => setActiveVideoProject(null)}
        videoUrl={activeVideoProject?.videoUrl}
        title={activeVideoProject?.title || ''}
      />
    </section>
  )
}
