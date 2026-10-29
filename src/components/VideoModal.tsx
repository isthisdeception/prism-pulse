import { useEffect, useRef } from 'react'
import { X } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
  title: string
}

export function VideoModal({ isOpen, onClose, videoUrl, title }: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
      closeButtonRef.current?.focus()
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  // Format embed URL for autoplay safely if YouTube/Vimeo
  const formattedEmbedUrl = videoUrl
    ? videoUrl.includes('?')
      ? `${videoUrl}&autoplay=1`
      : `${videoUrl}?autoplay=1`
    : undefined

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Video player: ${title}`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl bg-[#12131a] border border-[#2e3346] rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#222533] bg-[#090a0f]/90">
          <div className="flex items-center gap-2 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <h3 className="text-sm font-medium text-[#f3f3f6] truncate tracking-wide">
              {title}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Container with 16:9 Aspect Ratio */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center">
          {formattedEmbedUrl ? (
            <iframe
              src={formattedEmbedUrl}
              title={title}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="p-8 text-center text-neutral-400">
              <p className="text-sm">Video URL is currently being configured.</p>
              <p className="text-xs text-neutral-500 mt-2">
                Replace videoUrl in <code>src/data/projects.ts</code> with your production link.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
