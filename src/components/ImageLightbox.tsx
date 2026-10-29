import { useEffect, useRef } from 'react'
import type { Project } from '../data/projects'
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react'

interface ImageLightboxProps {
  project: Project | null
  allProjects: Project[]
  isOpen: boolean
  onClose: () => void
  onNavigate: (nextProject: Project) => void
  onPlayVideo?: (project: Project) => void
}

export function ImageLightbox({
  project,
  allProjects,
  isOpen,
  onClose,
  onNavigate,
  onPlayVideo
}: ImageLightboxProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const previousActiveElement = useRef<HTMLElement | null>(null)

  // Track active index
  const currentIndex = project
    ? allProjects.findIndex((p) => p.id === project.id)
    : -1

  const hasPrevious = currentIndex > 0
  const hasNext = currentIndex < allProjects.length - 1

  const handlePrev = () => {
    if (hasPrevious) {
      onNavigate(allProjects[currentIndex - 1])
    }
  }

  const handleNext = () => {
    if (hasNext) {
      onNavigate(allProjects[currentIndex + 1])
    }
  }

  // Handle keyboard events (Escape, Left, Right)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      if (e.key === 'Escape') {
        e.preventDefault()
        onClose()
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault()
        if (hasPrevious) onNavigate(allProjects[currentIndex - 1])
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        if (hasNext) onNavigate(allProjects[currentIndex + 1])
      }
    }

    if (isOpen) {
      previousActiveElement.current = document.activeElement as HTMLElement
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      document.body.style.overflow = ''
      previousActiveElement.current?.focus()
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, currentIndex, hasPrevious, hasNext, allProjects, onClose, onNavigate])

  if (!isOpen || !project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Project detail: ${project.title}`}
    >
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-[#090a0f]/95 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Lightbox Frame */}
      <div className="relative w-full max-w-5xl bg-[#12131a] border border-[#2e3346] rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col max-h-[92vh]">
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-[#222533] bg-[#090a0f]/80">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-wider px-2 py-0.5 rounded bg-amber-400/10 text-amber-300 border border-amber-400/30">
              {project.category}
            </span>
            <span className="text-xs text-[#676b7e]">
              {currentIndex + 1} of {allProjects.length}
            </span>
          </div>

          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg text-[#9fa2b4] hover:text-white hover:bg-[#181a24] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close project preview"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Central Visual Stage */}
        <div className="relative flex-1 bg-black/60 flex items-center justify-center overflow-hidden min-h-[260px] sm:min-h-[400px] max-h-[60vh]">
          <img
            src={project.image}
            alt={project.alt}
            width={1600}
            height={1200}
            className="max-h-[60vh] w-auto max-w-full object-contain select-none"
          />

          {/* Previous Arrow Button */}
          {hasPrevious && (
            <button
              type="button"
              onClick={handlePrev}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#090a0f]/80 hover:bg-[#181a24] text-[#f3f3f6] border border-[#2e3346] backdrop-blur-sm transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Next Arrow Button */}
          {hasNext && (
            <button
              type="button"
              onClick={handleNext}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-[#090a0f]/80 hover:bg-[#181a24] text-[#f3f3f6] border border-[#2e3346] backdrop-blur-sm transition-transform hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}

        </div>

        {/* Bottom Details Footer */}
        <div className="px-5 sm:px-8 py-5 border-t border-[#222533] bg-[#0d0e14] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3">
              <h3 className="text-lg sm:text-xl font-medium text-[#f3f3f6]">
                {project.title}
              </h3>
              <span className="text-xs text-[#676b7e] font-mono">
                {project.year}
              </span>
            </div>
            {project.clientOrContext && (
              <p className="text-xs uppercase tracking-wider text-amber-400/90 mt-0.5">
                {project.clientOrContext}
              </p>
            )}
            <p className="text-xs sm:text-sm text-[#9fa2b4] mt-2 max-w-2xl leading-relaxed">
              {project.description}
            </p>
          </div>

          {project.videoUrl && onPlayVideo && (
            <button
              type="button"
              onClick={() => onPlayVideo(project)}
              className="shrink-0 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-400 text-neutral-950 font-semibold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>Watch Video</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
