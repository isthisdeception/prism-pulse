import { useState } from 'react'
import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'
import { ArrowUpRight } from 'lucide-react'

export function Services() {
  const [activeId, setActiveId] = useState<string>(siteConfig.services[0].id)

  return (
    <section
      id="services"
      className="scroll-mt-24 py-16 sm:py-24 relative"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Minimalist Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-12">
          <h2
            id="services-heading"
            className="text-3xl sm:text-5xl font-light tracking-tight text-[#f3f3f6]"
          >
            Disciplines &{' '}
            <span className="font-serif italic font-normal text-amber-300">
              Capabilities.
            </span>
          </h2>
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#676b7e]">
            01 — 04
          </span>
        </div>

        {/* Interactive Expanding Cinema Panels */}
        <div className="flex flex-col lg:flex-row gap-3.5 sm:gap-4 lg:h-[520px]">
          {siteConfig.services.map((service, index) => {
            const isActive = service.id === activeId
            const whatsappMessage = encodeURIComponent(
              `Hello Prism Pulse, I would like to discuss a project for ${service.title}.`
            )
            const serviceWhatsappUrl = `${siteConfig.contact.socials.whatsapp}?text=${whatsappMessage}`

            return (
              <article
                key={service.id}
                onMouseEnter={() => setActiveId(service.id)}
                onClick={() => setActiveId(service.id)}
                onFocus={() => setActiveId(service.id)}
                tabIndex={0}
                className={`group relative rounded-2xl overflow-hidden bg-[#12131a] cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 ${
                  isActive
                    ? 'h-[340px] sm:h-[400px] lg:h-full lg:flex-[2.6]'
                    : 'h-[120px] sm:h-[140px] lg:h-full lg:flex-1 opacity-75 hover:opacity-100'
                }`}
              >
                {/* Full-Bleed Background Photograph */}
                <img
                  src={service.image}
                  alt={service.alt}
                  width={1200}
                  height={900}
                  loading="lazy"
                  decoding="async"
                  className={`w-full h-full object-cover object-center transition-transform duration-1000 ease-out ${
                    isActive ? 'scale-100' : 'scale-110 group-hover:scale-105'
                  }`}
                />

                {/* Smooth Cinematic Gradient Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isActive
                      ? 'bg-gradient-to-t from-black/90 via-black/25 to-black/20'
                      : 'bg-gradient-to-t from-black/85 via-black/45 to-black/30'
                  }`}
                  aria-hidden="true"
                />

                {/* Top Index & Inquiry Action */}
                <div className="absolute top-4 sm:top-5 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between">
                  <span
                    className={`font-mono text-xs tracking-widest px-2.5 py-1 rounded-full backdrop-blur-md border transition-colors duration-300 ${
                      isActive
                        ? 'bg-amber-400 text-neutral-950 border-amber-400 font-semibold'
                        : 'bg-black/50 text-white/80 border-white/15'
                    }`}
                  >
                    0{index + 1}
                  </span>

                  <a
                    href={serviceWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className={`w-9 h-9 rounded-full flex items-center justify-center backdrop-blur-md border transition-all duration-300 ${
                      isActive
                        ? 'bg-white/15 hover:bg-amber-400 text-white hover:text-neutral-950 border-white/25 hover:border-amber-400 opacity-100 scale-100'
                        : 'bg-black/40 text-white/70 border-white/10 lg:opacity-0 lg:scale-90 group-hover:opacity-100 group-hover:scale-100'
                    }`}
                    aria-label={`Inquire about ${service.title} on WhatsApp`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                {/* Bottom Content Overlay */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-7 flex flex-col justify-end">
                  <h3
                    className={`font-light tracking-tight text-white transition-all duration-500 leading-snug ${
                      isActive
                        ? 'text-2xl sm:text-3xl lg:text-4xl'
                        : 'text-lg sm:text-xl lg:text-xl'
                    }`}
                  >
                    {service.title}
                  </h3>

                  {/* Expandable Description & Deliverable Pills when Active */}
                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      isActive
                        ? 'max-h-40 opacity-100 mt-2.5'
                        : 'max-h-0 opacity-0 mt-0'
                    }`}
                  >
                    <p className="text-xs sm:text-sm text-white/80 font-light max-w-lg leading-relaxed mb-4">
                      {service.tagline}
                    </p>

                    <div className="flex flex-wrap items-center gap-2">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-black/60 text-amber-300/95 border border-white/15 backdrop-blur-md"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
