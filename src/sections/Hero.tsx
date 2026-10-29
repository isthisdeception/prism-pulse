import { useState } from 'react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { VideoModal } from '../components/VideoModal'
import { siteConfig } from '../data/siteConfig'
import { SHOWREEL_PROJECT } from '../data/projects'
import { Play, ArrowDown, Sparkles, Camera, Film, Compass } from 'lucide-react'

export function Hero() {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden border-b border-[#222533]/60"
      aria-label="Hero Introduction"
    >
      {/* Background ambient lighting glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] sm:h-[450px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* Editorial Eyebrow */}
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181a24] border border-[#2e3346] text-xs font-medium text-amber-400 mb-6 sm:mb-8 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span className="tracking-wide uppercase text-[11px]">
              Cinematic Atelier · Aerial · Photography
            </span>
          </div>

          {/* Main Editorial Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-[#f3f3f6] max-w-4xl mx-auto leading-[1.1] mb-6">
            Light in <span className="font-serif italic font-normal text-amber-300">motion.</span>
            <br />
            Stories in <span className="font-semibold text-[#f3f3f6]">focus.</span>
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#9fa2b4] font-light max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10">
            {siteConfig.brand.subTagline}
          </p>

          {/* Call-To-Action Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto mb-12 sm:mb-16">
            <Button
              as="a"
              href="#work"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto min-w-[180px] shadow-lg shadow-amber-400/10"
            >
              <span>Explore Work</span>
              <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="lg"
              onClick={() => setIsVideoModalOpen(true)}
              className="w-full sm:w-auto min-w-[180px] group"
              aria-label="Watch Showreel video"
            >
              <div className="w-5 h-5 rounded-full bg-amber-400/20 text-amber-300 flex items-center justify-center transition-transform group-hover:scale-110">
                <Play className="w-2.5 h-2.5 fill-current ml-0.5" />
              </div>
              <span>Watch Showreel</span>
            </Button>
          </div>
        </div>

        {/* Stable Cinematic Hero Image Frame */}
        <div className="relative group max-w-6xl mx-auto">
          {/* Outer glow & subtle border container */}
          <div className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#2e3346] bg-[#12131a] shadow-2xl">
            {/* Stable Aspect ratio background image with preload hints */}
            <img
              src={SHOWREEL_PROJECT.image}
              alt={SHOWREEL_PROJECT.alt}
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Cinematic Gradient Overlays */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/30 to-transparent opacity-90"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#090a0f]/70 via-transparent to-[#090a0f]/40"
              aria-hidden="true"
            />

            {/* Click-to-play Showreel Floating Trigger in center */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="group/btn relative flex items-center gap-3 px-5 py-3 rounded-full bg-[#090a0f]/80 hover:bg-[#12131a] border border-[#2e3346] hover:border-amber-400/60 backdrop-blur-md text-[#f3f3f6] shadow-xl transition-all duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                aria-label="Play 2025 Showreel"
              >
                <div className="w-8 h-8 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center font-bold shadow-md">
                  <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-semibold tracking-wider uppercase text-amber-300">
                    Play Showreel
                  </span>
                  <span className="block text-[11px] text-[#9fa2b4]">
                    2025 Director's Cut · 4K
                  </span>
                </div>
              </button>
            </div>

            {/* Bottom metadata tags inside frame */}
            <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-wrap items-center justify-between gap-3 text-xs text-[#9fa2b4] pointer-events-none">
              <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#090a0f]/80 backdrop-blur-sm border border-[#222533]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Q2/Q3 Commissions</span>
              </div>
              <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-[#090a0f]/80 backdrop-blur-sm border border-[#222533] text-[11px]">
                <span>Color Grade: Custom Film Emulation</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Discipline Badges */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto pt-8 border-t border-[#222533]/80">
          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#12131a]/60 border border-[#222533]/60">
            <div className="w-9 h-9 rounded-md bg-[#181a24] border border-[#2e3346] flex items-center justify-center text-amber-400 shrink-0">
              <Film className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f3f3f6]">
                Cinematography
              </h3>
              <p className="text-[11px] text-[#9fa2b4]">
                Brand films, showreels & music narratives
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#12131a]/60 border border-[#222533]/60">
            <div className="w-9 h-9 rounded-md bg-[#181a24] border border-[#2e3346] flex items-center justify-center text-amber-400 shrink-0">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f3f3f6]">
                Photography
              </h3>
              <p className="text-[11px] text-[#9fa2b4]">
                Editorial, portraiture & lookbooks
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3.5 p-3 rounded-lg bg-[#12131a]/60 border border-[#222533]/60">
            <div className="w-9 h-9 rounded-md bg-[#181a24] border border-[#2e3346] flex items-center justify-center text-amber-400 shrink-0">
              <Compass className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-wider text-[#f3f3f6]">
                Aerial Drone
              </h3>
              <p className="text-[11px] text-[#9fa2b4]">
                Dynamic licensed 4K aerial sequences
              </p>
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
