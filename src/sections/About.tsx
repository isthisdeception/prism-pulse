import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'
import { User, MapPin } from 'lucide-react'

export function About() {
  const { brand } = siteConfig


  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 sm:py-28 border-b border-[#222533]/80 bg-[#07080c] relative"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Behind-The-Scenes Portrait Image */}
          <div className="lg:col-span-5 flex flex-col items-center sm:items-start">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden border border-[#2e3346] bg-[#12131a] shadow-2xl">
              <img
                src={brand.portraitImage}
                alt={brand.portraitAlt}
                width={800}
                height={1000}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-center filter brightness-[0.88] contrast-[1.05]"
              />

              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-transparent opacity-80"
                aria-hidden="true"
              />

              {/* Location Badge on Photo */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#f3f3f6]">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#090a0f]/90 backdrop-blur-md border border-[#222533]">
                  <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span className="font-mono text-[11px]">{brand.location}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio & Guiding Principles */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a24] border border-[#2e3346] text-xs font-medium text-amber-400 mb-4 w-fit">
              <User className="w-3.5 h-3.5" />
              <span className="tracking-wide uppercase text-[11px]">Creative Vision</span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#f3f3f6] mb-6 leading-tight"
            >
              Stories told through <span className="font-semibold text-amber-300">deliberate light.</span>
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-[#9fa2b4] font-light leading-relaxed mb-10">
              {brand.bioFull.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Guiding Principles */}
            <div className="mb-10">
              <h3 className="text-xs uppercase tracking-widest text-[#676b7e] font-mono mb-4">
                {brand.approachTitle}
              </h3>

              <div className="space-y-4">
                {brand.approachPoints.map((point) => (
                  <div
                    key={point.number}
                    className="p-4 rounded-xl bg-[#12131a] border border-[#222533] flex items-start gap-4"
                  >
                    <span className="font-mono text-xs font-bold text-amber-400 shrink-0 mt-0.5">
                      {point.number}
                    </span>
                    <div>
                      <h4 className="text-sm font-medium text-[#f3f3f6] mb-1">
                        {point.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-[#9fa2b4] font-light leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </Container>

    </section>
  )
}
