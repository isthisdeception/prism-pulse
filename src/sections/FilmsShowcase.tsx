import { useState } from 'react'
import { Container } from '../components/Container'
import { VideoModal } from '../components/VideoModal'
import { FILM_SHOWCASE, SHOWREEL_PROJECT, type Project } from '../data/projects'
import { siteConfig } from '../data/siteConfig'
import { Play, Clapperboard, Clock, Award, Shield, MessageCircle } from 'lucide-react'

export function FilmsShowcase() {
  const [selectedFilm, setSelectedFilm] = useState<Project | null>(null)

  // Secondary films (excluding master showreel to avoid duplicate top card)
  const secondaryFilms = FILM_SHOWCASE.filter(
    (film) => film.id !== SHOWREEL_PROJECT.id
  )

  return (
    <section
      id="films"
      className="scroll-mt-24 py-20 sm:py-28 border-b border-[#222533]/80 bg-[#07080c] relative overflow-hidden"
      aria-labelledby="films-heading"
    >
      {/* Cinematic subtle backlight */}
      <div
        className="absolute top-1/3 right-1/4 w-[450px] h-[350px] bg-amber-600/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a24] border border-[#2e3346] text-xs font-medium text-amber-400 mb-4">
              <Clapperboard className="w-3.5 h-3.5" />
              <span className="tracking-wide uppercase text-[11px]">
                Motion Direction & Drone
              </span>
            </div>
            <h2
              id="films-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#f3f3f6]"
            >
              Films & <span className="font-semibold text-amber-300">Cinematography</span>
            </h2>
            <p className="text-sm sm:text-base text-[#9fa2b4] mt-3 font-light leading-relaxed">
              Brand showreels, narrative motion, and dynamic drone sequences produced with deliberate tempo, custom film color emulation, and immersive pacing.
            </p>
          </div>

          <div className="text-xs text-[#676b7e] font-mono">
            ProRes · D-Log · Anamorphic 2.39:1
          </div>
        </div>

        {/* Master Cinema Screening Banner (Featured Showreel) */}
        <div className="mb-14 sm:mb-20">
          <div className="text-xs uppercase tracking-widest text-amber-400/90 font-mono mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
            <span>Master Reel 2025</span>
          </div>

          <div
            onClick={() => setSelectedFilm(SHOWREEL_PROJECT)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault()
                setSelectedFilm(SHOWREEL_PROJECT)
              }
            }}
            tabIndex={0}
            role="button"
            aria-label={`Play Master Showreel: ${SHOWREEL_PROJECT.title}`}
            className="group relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-[#2e3346] bg-[#12131a] shadow-2xl cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {/* Poster image with stable dimensions */}
            <img
              src={SHOWREEL_PROJECT.poster || SHOWREEL_PROJECT.image}
              alt={SHOWREEL_PROJECT.alt}
              width={1920}
              height={1080}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />


            {/* Gradient Overlays for High Contrast Text */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/40 to-transparent"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#090a0f]/80 via-transparent to-transparent"
              aria-hidden="true"
            />

            {/* Center Play Button Affordance */}
            <div className="absolute inset-0 flex items-center justify-center p-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shadow-2xl transition-transform duration-300 group-hover:scale-110 group-hover:shadow-amber-400/25">
                <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-current ml-1" />
              </div>
            </div>

            {/* Top Right Technical Badges */}
            <div className="absolute top-4 sm:top-6 right-4 sm:right-6 flex items-center gap-2">
              <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#090a0f]/85 text-amber-300 border border-[#222533] backdrop-blur-sm">
                {SHOWREEL_PROJECT.resolution}
              </span>
              <span className="text-[11px] font-mono px-2 py-1 rounded bg-[#090a0f]/85 text-[#9fa2b4] border border-[#222533] backdrop-blur-sm">
                {SHOWREEL_PROJECT.duration}
              </span>
            </div>

            {/* Bottom Content Metadata */}
            <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8 right-5 sm:right-8 max-w-2xl">
              <span className="text-xs uppercase tracking-wider text-amber-300 font-medium">
                {SHOWREEL_PROJECT.role}
              </span>
              <h3 className="text-xl sm:text-3xl font-medium text-[#f3f3f6] mt-1 group-hover:text-amber-200 transition-colors">
                {SHOWREEL_PROJECT.title}
              </h3>
              <p className="text-xs sm:text-sm text-[#9fa2b4] mt-2 line-clamp-2 leading-relaxed font-light hidden sm:block">
                {SHOWREEL_PROJECT.description}
              </p>
            </div>
          </div>
        </div>

        {/* Selected Films & Drone Sequence Grid */}
        <div className="mb-14">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-[#9fa2b4] mb-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            Selected Commercial & Narrative Sequences
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {secondaryFilms.map((film) => (
              <article
                key={film.id}
                onClick={() => setSelectedFilm(film)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    setSelectedFilm(film)
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Play film: ${film.title}`}
                className="group relative bg-[#12131a] border border-[#222533] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-400/5 cursor-pointer flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {/* 16:9 Widescreen Film Poster Frame */}
                <div className="relative aspect-video w-full overflow-hidden bg-black">
                  <img
                    src={film.poster || film.image}
                    alt={film.alt}
                    width={1280}
                    height={720}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.03] transition-transform duration-500 ease-out group-hover:scale-105"
                  />


                  {/* Dark Vignette Overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-black/40 opacity-70 group-hover:opacity-85 transition-opacity duration-300"
                    aria-hidden="true"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="text-[10px] font-medium uppercase tracking-wider px-2 py-0.5 rounded bg-[#090a0f]/85 text-amber-300 border border-[#222533] backdrop-blur-sm">
                      {film.category}
                    </span>
                    {film.duration && (
                      <span className="text-[10px] font-mono text-[#f3f3f6] px-2 py-0.5 rounded bg-black/70 backdrop-blur-sm flex items-center gap-1">
                        <Clock className="w-2.5 h-2.5" />
                        {film.duration}
                      </span>
                    )}
                  </div>

                  {/* Center Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#090a0f]/90 text-amber-300 border border-amber-400/40 backdrop-blur-md flex items-center justify-center transition-transform duration-200 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-neutral-950">
                      <Play className="w-4 h-4 fill-current ml-0.5" />
                    </div>
                  </div>

                  {/* Resolution Tag */}
                  {film.resolution && (
                    <div className="absolute bottom-2.5 left-3">
                      <span className="text-[10px] font-mono text-[#9fa2b4] bg-[#090a0f]/80 px-2 py-0.5 rounded backdrop-blur-sm">
                        {film.resolution}
                      </span>
                    </div>
                  )}
                </div>

                {/* Card Meta Content */}
                <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between bg-[#12131a]">
                  <div>
                    {film.role && (
                      <span className="text-[11px] uppercase tracking-wider text-amber-400/90 font-mono block mb-1">
                        {film.role}
                      </span>
                    )}
                    <h4 className="text-base font-medium text-[#f3f3f6] group-hover:text-amber-300 transition-colors duration-200">
                      {film.title}
                    </h4>
                    {film.clientOrContext && (
                      <p className="text-xs text-[#9fa2b4] mt-0.5">
                        {film.clientOrContext}
                      </p>
                    )}
                    <p className="text-xs text-[#676b7e] mt-2 line-clamp-2 leading-relaxed font-light">
                      {film.description}
                    </p>
                  </div>

                  <div className="pt-3 mt-3 border-t border-[#222533]/80 flex items-center justify-between text-[11px] text-[#676b7e]">
                    <span>User-initiated 4K stream</span>
                    <span className="text-amber-400/80 group-hover:text-amber-400 transition-colors">
                      Watch Film →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Production Standards & Credentials Strip */}
        <div className="p-6 sm:p-8 rounded-xl bg-[#12131a] border border-[#222533] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#9fa2b4]">
          <div className="flex items-start gap-3">
            <Shield className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#f3f3f6] block">Licensed Aerial Operations</span>
              <span className="text-[#676b7e] mt-0.5 block">Certified commercial drone operations all over Bangladesh.</span>

            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clapperboard className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#f3f3f6] block">Cinema Color Science</span>
              <span className="text-[#676b7e] mt-0.5 block">Custom Kodak & Fuji film emulations mastered for DCI-P3 & Rec.709.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#f3f3f6] block">Rapid Delivery Turnaround</span>
              <span className="text-[#676b7e] mt-0.5 block">Rush 48-hour social cuts and ProRes master archival packages.</span>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <MessageCircle className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
            <div>
              <span className="font-semibold text-[#f3f3f6] block">Direct WhatsApp Inquiries</span>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:text-amber-300 underline mt-0.5 block"
              >
                Inquire for film commissions →
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Video Modal on Demand */}
      <VideoModal
        isOpen={selectedFilm !== null}
        onClose={() => setSelectedFilm(null)}
        videoUrl={selectedFilm?.videoUrl}
        title={selectedFilm?.title || ''}
        resolution={selectedFilm?.resolution}
        duration={selectedFilm?.duration}
      />
    </section>
  )
}
