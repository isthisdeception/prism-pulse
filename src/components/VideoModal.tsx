import { useEffect, useRef } from 'react'
import { siteConfig } from '../data/siteConfig'
import { X, Film, MessageCircle } from 'lucide-react'

interface VideoModalProps {
  isOpen: boolean
  onClose: () => void
  videoUrl?: string
  title: string
  resolution?: string
  duration?: string
}

export function VideoModal({
  isOpen,
  onClose,
  videoUrl,
  title,
  resolution,
  duration
}: VideoModalProps) {
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

  // Validate if URL is a valid playable link or a placeholder
  const isPlayableUrl =
    Boolean(videoUrl) &&
    typeof videoUrl === 'string' &&
    videoUrl.trim() !== '' &&
    !videoUrl.includes('TODO_REPLACE') &&
    (videoUrl.startsWith('http://') || videoUrl.startsWith('https://'))

  // Format embed URL for autoplay safely if YouTube/Vimeo
  const formattedEmbedUrl = isPlayableUrl && videoUrl
    ? videoUrl.includes('?')
      ? `${videoUrl}&autoplay=1`
      : `${videoUrl}?autoplay=1`
    : undefined

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Video player: ${title}`}
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/90 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog Content */}
      <div className="relative w-full max-w-4xl bg-[#12131a] border border-[#2e3346] rounded-xl overflow-hidden shadow-2xl z-10 flex flex-col">
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#222533] bg-[#090a0f]/95">
          <div className="flex items-center gap-3 overflow-hidden">
            <span className="w-2 h-2 rounded-full bg-amber-400" />
            <h3 className="text-sm font-medium text-[#f3f3f6] truncate tracking-wide">
              {title}
            </h3>
            {resolution && (
              <span className="hidden sm:inline-block text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-[#181a24] text-amber-300 border border-[#222533]">
                {resolution}
              </span>
            )}
            {duration && (
              <span className="hidden sm:inline-block text-[10px] font-mono text-[#676b7e]">
                {duration}
              </span>
            )}
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
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
            <div className="p-8 max-w-md text-center flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-[#181a24] border border-[#2e3346] flex items-center justify-center text-amber-400 mb-4">
                <Film className="w-6 h-6" />
              </div>
              <h4 className="text-base font-medium text-[#f3f3f6] mb-1">
                Private Screener in Production
              </h4>
              <p className="text-xs text-[#9fa2b4] leading-relaxed mb-5">
                The high-bitrate master or private password-protected screener for this film is available upon direct inquiry.
              </p>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-amber-400 text-neutral-950 font-semibold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Request Screener via WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
