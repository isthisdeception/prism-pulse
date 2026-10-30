import { useState } from 'react'
import { Container } from '../components/Container'
import { VideoModal } from '../components/VideoModal'
import { SHOWREEL_PROJECT } from '../data/projects'
import { Play } from 'lucide-react'

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden"
      aria-label="Hero Introduction"
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] sm:w-[700px] h-[300px] sm:h-[400px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* Minimalist Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#f3f3f6] leading-[1.05]">
            Light in <span className="font-serif italic font-normal text-amber-300">motion.</span>
            <br />
            Stories in <span className="font-serif italic font-normal text-[#f3f3f6]">focus.</span>
          </h1>

          <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-[#9fa2b4] md:pb-2">
            Cinematography · Photography · Aerial
          </p>
        </div>

        {/* Centerpiece Cinema Frame */}
        <div className="relative group">
          <div
            onClick={() => setIsVideoModalOpen(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setIsVideoModalOpen(true)
              }
            }}
            role="button"
            tabIndex={0}
            aria-label="Play Showreel Video"
            className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-white/10 hover:border-amber-400/50 bg-[#12131a] shadow-2xl cursor-pointer transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <img
              src={SHOWREEL_PROJECT.image}
              alt={SHOWREEL_PROJECT.alt}
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-1000 ease-out group-hover:scale-[1.03]"
            />

            {/* Subtle bottom vignette */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/50 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Minimal Circular Glass & Gold Play Trigger */}
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
              <div className="relative flex items-center justify-center">
                <span
                  className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-400/20 animate-ping [animation-duration:2.5s]"
                  aria-hidden="true"
                />
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#090a0f]/65 group-hover:bg-amber-400 text-amber-300 group-hover:text-neutral-950 border border-amber-400/50 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-amber-400/30">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>

      {/* Embedded Accessible Video Modal */}
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl={SHOWREEL_PROJECT.videoUrl}
        title={SHOWREEL_PROJECT.title}
      />
    </section>
  )
}
