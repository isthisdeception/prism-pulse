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
      className="fixed inset-0 z-50 flex flex-col justify-between p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Project detail: ${project.title}`}
    >
      {/* Pure Dark Museum Backdrop */}
      <div
        className="fixed inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Top Floating Bar */}
      <div className="relative z-10 flex items-center justify-between pointer-events-none">
        <span className="text-xs font-mono uppercase tracking-widest text-white/50">
          {currentIndex + 1} / {allProjects.length}
        </span>

        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          className="pointer-events-auto w-11 h-11 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          aria-label="Close project preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Frameless Floating Artwork Stage */}
      <div className="relative z-10 flex-1 flex items-center justify-center my-4 pointer-events-none">
        <img
          key={project.id}
          src={project.image}
          alt={project.alt}
          width={1600}
          height={1200}
          className="max-h-[78vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl select-none pointer-events-auto animate-fade-up"
        />

        {hasPrevious && (
          <button
            type="button"
            onClick={handlePrev}
            className="pointer-events-auto w-11 h-11 flex items-center justify-center absolute left-0 sm:left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Previous project"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
        )}

        {hasNext && (
          <button
            type="button"
            onClick={handleNext}
            className="pointer-events-auto w-11 h-11 flex items-center justify-center absolute right-0 sm:right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Next project"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        )}
      </div>

      {/* Minimal Floating Caption at Bottom */}
      <div className="relative z-10 flex items-center justify-between gap-4 max-w-4xl w-full mx-auto pointer-events-none">
        <div>
          <h3 className="text-base sm:text-lg font-medium text-white">
            {project.title}
          </h3>
          {project.clientOrContext && (
            <span className="text-xs font-mono text-amber-300/80">
              {project.clientOrContext}
            </span>
          )}
        </div>

        {project.videoUrl && onPlayVideo && (
          <button
            type="button"
            onClick={() => onPlayVideo(project)}
            className="pointer-events-auto shrink-0 inline-flex items-center gap-2 px-5 py-2 rounded-full bg-amber-400 text-neutral-950 font-semibold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Play Film</span>
          </button>
        )}
      </div>
    </div>
  )
}
