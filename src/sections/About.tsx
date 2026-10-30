import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'
const actionImg = 'https://res.cloudinary.com/npp4zjhc/image/upload/f_auto,q_auto/v1793378458/prism-pulse/hero-thum.jpg'
import { InstagramIcon, FacebookIcon, YouTubeIcon } from '../components/SocialIcons'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  const { brand, contact } = siteConfig

  return (
    <section
      id="about"
      className="scroll-mt-24 py-20 sm:py-28 relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <Container>
        <div className="relative max-w-5xl mx-auto rounded-3xl bg-gradient-to-br from-[#13151f]/90 via-[#0e1017]/90 to-[#090a0f] border border-white/10 p-6 sm:p-10 md:p-14 overflow-hidden shadow-2xl">
          {/* Giant Subtle Background Watermark */}
          <span
            className="pointer-events-none select-none absolute -bottom-8 -right-4 text-[90px] sm:text-[150px] lg:text-[190px] font-serif italic font-normal leading-none text-white/[0.03] tracking-tight"
            aria-hidden="true"
          >
            Mubarak
          </span>

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-center">
            {/* Left: Creative Stacked Film-Frame & Camera Viewfinder Portrait */}
            <div className="md:col-span-5 flex justify-center">
              <div className="group relative w-full max-w-[300px] sm:max-w-[320px]">
                {/* Secondary Tilted Drone Card Fanning Out Behind on Hover */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/15 bg-[#12131a] shadow-xl transform rotate-3 translate-x-3 translate-y-2 group-hover:rotate-6 group-hover:translate-x-6 group-hover:translate-y-3 transition-all duration-500 ease-out opacity-60 group-hover:opacity-90">
                  <img
                    src={actionImg}
                    alt="Mubarak operating drone"
                    width={600}
                    height={750}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                {/* Primary Portrait with Cinema Viewfinder Brackets */}
                <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden bg-[#090a0f] border border-white/15 shadow-2xl transform group-hover:-rotate-1 transition-transform duration-500 ease-out">
                  <img
                    src={brand.portraitImage}
                    alt={brand.portraitAlt}
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle Viewfinder Corner Brackets */}
                  <div className="pointer-events-none absolute inset-3.5">
                    <span className="absolute top-0 left-0 w-3.5 h-3.5 border-t border-l border-amber-400/70" />
                    <span className="absolute top-0 right-0 w-3.5 h-3.5 border-t border-r border-amber-400/70" />
                    <span className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b border-l border-amber-400/70" />
                    <span className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b border-r border-amber-400/70" />

                    {/* Minimal REC Indicator */}
                    <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-black/55 backdrop-blur-md">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                      <span className="text-[9px] font-mono tracking-widest text-white/90">
                        REC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Ultra-Minimal Editorial Identity */}
            <div className="md:col-span-7 flex flex-col items-start justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono uppercase tracking-[0.22em] text-amber-300 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Founder & Visual Director</span>
              </div>

              <h2
                id="about-heading"
                className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#f3f3f6] leading-none mb-4"
              >
                Mubarak<span className="text-amber-400">.</span>
              </h2>

              <p className="text-xl sm:text-2xl font-serif italic text-[#9fa2b4] leading-relaxed mb-8 max-w-md">
                Cinematography, Fine-Art Photography & Licensed Aerial Visuals — Dhaka, Bangladesh.
              </p>

              {/* CTA + Minimal Social Icon Circles */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold uppercase tracking-widest transition-all duration-300 shadow-lg shadow-amber-400/15"
                >
                  <span>Get in Touch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>

                <div className="flex items-center gap-2 pl-1">
                  <a
                    href={contact.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#9fa2b4] hover:text-white transition-colors"
                  >
                    <InstagramIcon className="w-4 h-4" />
                  </a>
                  <a
                    href={contact.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#9fa2b4] hover:text-white transition-colors"
                  >
                    <FacebookIcon className="w-4 h-4" />
                  </a>
                  {contact.socials.youtube && (
                    <a
                      href={contact.socials.youtube}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="YouTube"
                      className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center text-[#9fa2b4] hover:text-white transition-colors"
                    >
                      <YouTubeIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
