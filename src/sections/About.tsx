import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  const { brand, contact } = siteConfig

  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 sm:py-24 relative"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="max-w-4xl mx-auto rounded-3xl bg-[#12131a]/70 border border-white/10 p-5 sm:p-8 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            {/* Clean Portrait Image — Zero Overlays */}
            <div className="md:col-span-5">
              <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#090a0f]">
                <img
                  src={brand.portraitImage}
                  alt={brand.portraitAlt}
                  width={800}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Ultra-Minimal Identity — No Long Paragraphs */}
            <div className="md:col-span-7 flex flex-col items-start justify-center">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-amber-400 mb-3">
                Behind Prism Pulse
              </span>

              <h2
                id="about-heading"
                className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#f3f3f6] leading-none mb-3"
              >
                Mubarak.
              </h2>

              <p className="text-lg sm:text-2xl font-serif italic text-[#9fa2b4] mb-8">
                Cinematographer, Photographer & Aerial Drone Pilot — Dhaka, Bangladesh.
              </p>

              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-widest transition-all duration-300"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
