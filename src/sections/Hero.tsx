import { useState } from 'react'
import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { VideoModal } from '../components/VideoModal'
import { siteConfig } from '../data/siteConfig'
import { SHOWREEL_PROJECT } from '../data/projects'
import { Play, ArrowDown, Aperture, Camera, Film, Compass } from 'lucide-react'

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
            <Aperture className="w-3.5 h-3.5 shrink-0" />
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
            aria-label="Play video"
            className="relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full rounded-xl sm:rounded-2xl overflow-hidden border border-[#2e3346] hover:border-amber-400/50 bg-[#12131a] shadow-2xl cursor-pointer transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {/* Stable Aspect ratio background image with natural brightness */}
            <img
              src={SHOWREEL_PROJECT.image}
              alt={SHOWREEL_PROJECT.alt}
              width={1920}
              height={1080}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Subtle bottom vignette only to blend frame edge */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/55 via-transparent to-transparent pointer-events-none"
              aria-hidden="true"
            />

            {/* Minimal Circular Glass & Gold Play Trigger */}
            <div className="absolute inset-0 flex items-center justify-center p-4 pointer-events-none">
              <div className="relative flex items-center justify-center">
                {/* Ambient pulsing ring */}
                <span
                  className="absolute w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-amber-400/20 animate-ping [animation-duration:2.5s]"
                  aria-hidden="true"
                />
                {/* Frosted glass circle that turns solid gold on hover */}
                <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#090a0f]/65 group-hover:bg-amber-400 text-amber-300 group-hover:text-neutral-950 border border-amber-400/50 backdrop-blur-md flex items-center justify-center shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-amber-400/30">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 fill-current ml-0.5" />
                </div>
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
