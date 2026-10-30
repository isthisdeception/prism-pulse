import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'

export function About() {
  const { brand } = siteConfig

  return (
    <section
      id="about"
      className="scroll-mt-24 py-16 sm:py-24 relative"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Clean Portrait Frame */}
          <div className="lg:col-span-5">
            <div className="relative w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] rounded-2xl overflow-hidden bg-[#12131a] shadow-2xl">
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

          {/* Right Column: Minimalist Editorial Statement */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/90 mb-4">
              Behind the Lens
            </span>

            <h2
              id="about-heading"
              className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-[#f3f3f6] mb-6 leading-[1.1]"
            >
              Every frame carries{' '}
              <span className="font-serif italic font-normal text-amber-300">
                emotional weight.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9fa2b4] font-light leading-relaxed max-w-xl mb-8">
              {brand.bioFull[0]}
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-white/10 text-xs font-mono uppercase tracking-widest text-[#9fa2b4]">
              <span>Dhaka, Bangladesh</span>
              <span className="text-amber-400">·</span>
              <span>Available Nationwide</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
