import { useState } from 'react'
import { Container } from '../components/Container'
import { VideoModal } from '../components/VideoModal'
import { FILM_SHOWCASE, SHOWREEL_PROJECT, type Project } from '../data/projects'
import { Play } from 'lucide-react'

export function FilmsShowcase() {
  const [selectedFilm, setSelectedFilm] = useState<Project | null>(null)

  const secondaryFilms = FILM_SHOWCASE.filter(
    (film) => film.id !== SHOWREEL_PROJECT.id
  )

  return (
    <section
      id="films"
      className="scroll-mt-24 py-16 sm:py-24 relative overflow-hidden"
      aria-labelledby="films-heading"
    >
      <Container>
        {/* Minimalist Section Header */}
        <div className="flex items-end justify-between gap-6 mb-10 sm:mb-12">
          <h2
            id="films-heading"
            className="text-3xl sm:text-5xl font-light tracking-tight text-[#f3f3f6]"
          >
            Motion &{' '}
            <span className="font-serif italic font-normal text-amber-300">
              Films.
            </span>
          </h2>
        </div>

        {/* Clean 16:9 Cinema Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
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
              className="group relative aspect-video w-full rounded-xl overflow-hidden bg-[#12131a] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <img
                src={film.poster || film.image}
                alt={film.alt}
                width={1280}
                height={720}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Hover-Only Gradient Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300 pointer-events-none"
                aria-hidden="true"
              />

              {/* Subtle Center Glass Play Button */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-11 h-11 rounded-full bg-black/55 text-white/90 border border-white/20 backdrop-blur-md flex items-center justify-center shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-neutral-950 group-hover:border-amber-400">
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                </div>
              </div>

              {/* Hover-Only Film Title & Duration at Bottom */}
              <div className="absolute bottom-0 inset-x-0 p-4 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0 transition-all duration-300 pointer-events-none flex items-end justify-between gap-2">
                <h3 className="text-sm sm:text-base font-medium text-white leading-snug">
                  {film.title}
                </h3>
                {film.duration && (
                  <span className="text-[11px] font-mono text-amber-300 shrink-0">
                    {film.duration}
                  </span>
                )}
              </div>
            </article>
          ))}
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
