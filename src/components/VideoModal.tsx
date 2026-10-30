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
  title
}: VideoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)

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

  const isPlayableUrl =
    Boolean(videoUrl) &&
    typeof videoUrl === 'string' &&
    videoUrl.trim() !== '' &&
    !videoUrl.includes('TODO_REPLACE') &&
    (videoUrl.startsWith('http://') || videoUrl.startsWith('https://'))

  const formattedEmbedUrl = isPlayableUrl && videoUrl
    ? videoUrl.includes('?')
      ? `${videoUrl}&autoplay=1`
      : `${videoUrl}?autoplay=1`
    : undefined

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`Video player: ${title}`}
    >
      {/* Pure Dark Cinema Backdrop */}
      <div
        className="fixed inset-0 bg-black/95 backdrop-blur-2xl transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Frameless Cinema Container */}
      <div className="relative w-full max-w-5xl z-10 flex flex-col gap-3 animate-fade-up">
        {/* Minimal Floating Header */}
        <div className="flex items-center justify-between px-1">
          <h3 className="text-sm sm:text-base font-medium text-white/90 truncate">
            {title}
          </h3>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 16:9 Cinema Stage */}
        <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl flex items-center justify-center">
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
              <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-400 mb-4">
                <Film className="w-6 h-6" />
              </div>
              <h4 className="text-base font-medium text-[#f3f3f6] mb-1">
                Private Screener in Production
              </h4>
              <p className="text-xs text-[#9fa2b4] leading-relaxed mb-5">
                The high-bitrate master for this film is available upon direct inquiry.
              </p>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-400 text-neutral-950 font-semibold text-xs uppercase tracking-wider hover:bg-amber-300 transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Request via WhatsApp</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
