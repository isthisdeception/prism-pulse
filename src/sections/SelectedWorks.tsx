import { useState, useMemo } from 'react'
import { Container } from '../components/Container'
import { ImageLightbox } from '../components/ImageLightbox'
import { VideoModal } from '../components/VideoModal'
import { PROJECTS, CATEGORIES, type Project, type ProjectCategory } from '../data/projects'
import { Play, Maximize2, ChevronDown, ChevronUp } from 'lucide-react'

const INITIAL_VISIBLE_COUNT = 9

// Pexels-style staggered aspect ratios for organic masonry rhythm
function getCardAspectClass(project: Project, index: number): string {
  if (project.aspectRatio === 'portrait') return 'aspect-[4/5]'
  if (project.aspectRatio === 'square') return 'aspect-square'
  if (index % 5 === 0) return 'aspect-[4/4.2]'
  if (index % 3 === 1) return 'aspect-[16/10]'
  return 'aspect-[4/3]'
}

export function SelectedWorks() {
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [showAll, setShowAll] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [activeVideoProject, setActiveVideoProject] = useState<Project | null>(null)

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  const visibleProjects = useMemo(() => {
    if (showAll) return filteredProjects
    return filteredProjects.slice(0, INITIAL_VISIBLE_COUNT)
  }, [filteredProjects, showAll])

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
      className="scroll-mt-24 py-16 sm:py-24 relative"
      aria-labelledby="selected-works-heading"
    >
      <Container>
        {/* Minimalist Header + Inline Filter Tabs */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <h2
            id="selected-works-heading"
            className="text-3xl sm:text-5xl font-light tracking-tight text-[#f3f3f6]"
          >
            Selected <span className="font-serif italic font-normal text-amber-300">Works.</span>
          </h2>

          {/* Clean Minimal Filter Tabs */}
          <div
            className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none"
            role="tablist"
            aria-label="Filter portfolio projects by category"
          >
            {['All', ...CATEGORIES].map((category) => {
              const isActive = activeCategory === category

              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full text-xs font-medium tracking-wider uppercase transition-all duration-200 shrink-0 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${isActive
                      ? 'bg-amber-400 text-neutral-950 font-semibold'
                      : 'text-[#9fa2b4] hover:text-[#f3f3f6] hover:bg-white/5'
                    }`}
                >
                  {category as ProjectCategory}
                </button>
              )
            })}
          </div>
        </div>

        {/* Pexels-Style Masonry Grid — Pure Images by Default, Details on Hover Only */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 sm:gap-5 space-y-4 sm:space-y-5">
          {visibleProjects.map((project, index) => {
            const aspectClass = getCardAspectClass(project, index)

            return (
              <article
                key={project.id}
                className={`group relative ${aspectClass} w-full break-inside-avoid rounded-xl overflow-hidden bg-[#12131a] cursor-pointer animate-fade-up focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400`}
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
                <img
                  src={project.image}
                  alt={project.alt}
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                />

                {/* Hover-Only Vignette Gradient */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Hover-Only Center Action Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 group-focus-visible:opacity-100 group-focus-visible:scale-100 transition-all duration-300 pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-black/65 text-amber-300 border border-amber-400/50 backdrop-blur-md flex items-center justify-center shadow-2xl">
                    {project.videoUrl ? (
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    ) : (
                      <Maximize2 className="w-4 h-4" />
                    )}
                  </div>
                </div>

                {/* Hover-Only Bottom Title */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300 pointer-events-none flex items-end justify-between gap-2">
                  <h3 className="text-sm sm:text-base font-medium text-white leading-snug">
                    {project.title}
                  </h3>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-amber-300/90 shrink-0">
                    {project.category}
                  </span>
                </div>
              </article>
            )
          })}
        </div>

        {/* View All / Show Less Toggle Button */}
        {filteredProjects.length > INITIAL_VISIBLE_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll((prev) => !prev)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-[#f3f3f6] hover:text-amber-300 border border-white/10 text-xs font-medium tracking-widest uppercase transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              {showAll ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-3.5 h-3.5 text-amber-400" />
                </>
              ) : (
                <>
                  <span>View All ({filteredProjects.length})</span>
                  <ChevronDown className="w-3.5 h-3.5 text-amber-400" />
                </>
              )}
            </button>
          </div>
        )}
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

      {/* Video Modal */}
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
