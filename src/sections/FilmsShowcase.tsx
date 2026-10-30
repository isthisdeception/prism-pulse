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
              Films &{' '}
              <span className="font-serif italic font-normal text-amber-300">
                Cinematography.
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#9fa2b4] mt-3 font-light leading-relaxed">
              Brand showreels, narrative motion, and dynamic drone sequences produced with deliberate tempo, custom film color emulation, and immersive pacing.
            </p>
          </div>

          <div className="text-xs text-[#676b7e] font-mono">
            4K Cinema · Aerial · Color Graded
          </div>
        </div>

        {/* Clean Master Cinema Screening Banner */}
        <div className="mb-14 sm:mb-20">
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
            className="group relative aspect-[16/10] sm:aspect-[16/9] lg:aspect-[21/9] w-full rounded-2xl overflow-hidden border border-[#2e3346] hover:border-amber-400/50 bg-[#12131a] shadow-2xl cursor-pointer transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            {/* Poster image with natural brightness */}
            <img
              src={SHOWREEL_PROJECT.poster || SHOWREEL_PROJECT.image}
              alt={SHOWREEL_PROJECT.alt}
              width={1920}
              height={1080}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.03] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />

            {/* Subtle Bottom Vignette Only */}
            <div
              className="absolute inset-0 bg-gradient-to-t from-[#090a0f]/55 via-transparent to-transparent pointer-events-none"
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

        {/* Selected Films & Drone Sequence Grid */}
        <div className="mb-14">
          <h3 className="text-xs font-mono uppercase tracking-widest text-[#9fa2b4] mb-6 flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-400" />
            <span>Selected Motion & Aerial Productions</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
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
                className="group relative aspect-video w-full rounded-2xl overflow-hidden bg-[#12131a] border border-[#222533]/80 hover:border-amber-400/50 shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-amber-400/10 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                {/* Crisp 16:9 Widescreen Film Poster */}
                <img
                  src={film.poster || film.image}
                  alt={film.alt}
                  width={1280}
                  height={720}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                {/* Hover-Only Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 pointer-events-none"
                  aria-hidden="true"
                />

                {/* Hover-Only Top Category & Duration Pills */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300 pointer-events-none">
                  <span className="text-[10px] font-medium uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-black/70 text-amber-300 border border-white/15 backdrop-blur-md">
                    {film.category}
                  </span>
                  {film.duration && (
                    <span className="text-[10px] font-mono text-[#f3f3f6] px-2 py-0.5 rounded-full bg-black/70 border border-white/15 backdrop-blur-md flex items-center gap-1">
                      <Clock className="w-2.5 h-2.5 text-amber-400" />
                      {film.duration}
                    </span>
                  )}
                </div>

                {/* Center Glass Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-11 h-11 rounded-full bg-black/60 text-amber-300 border border-amber-400/40 backdrop-blur-md flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-neutral-950">
                    <Play className="w-4 h-4 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Hover-Only Film Title at Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300 pointer-events-none">
                  {film.clientOrContext && (
                    <span className="block text-[10px] font-mono uppercase tracking-wider text-amber-300/90 mb-0.5">
                      {film.clientOrContext}
                    </span>
                  )}
                  <h4 className="text-base sm:text-lg font-medium text-white leading-snug">
                    {film.title}
                  </h4>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Production Standards & Credentials Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#12131a] border border-[#222533] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-xs text-[#9fa2b4]">
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
