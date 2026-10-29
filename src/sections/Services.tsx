import { useState } from 'react'
import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'
import { Sliders, MessageCircle, ArrowUpRight } from 'lucide-react'

export function Services() {
  const [activeId, setActiveId] = useState<string>(siteConfig.services[0].id)

  const activeService =
    siteConfig.services.find((s) => s.id === activeId) || siteConfig.services[0]

  return (
    <section
      id="services"
      className="scroll-mt-24 py-20 sm:py-28 border-b border-[#222533]/80 relative"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a24] border border-[#2e3346] text-xs font-medium text-amber-400 mb-4">
            <Sliders className="w-3.5 h-3.5" />
            <span className="tracking-wide uppercase text-[11px]">Production Offerings</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#f3f3f6]"
          >
            Disciplines & <span className="font-semibold text-amber-300">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9fa2b4] mt-3 font-light leading-relaxed">
            Tailored visual production across cinema, editorial portraiture, and licensed aerial perspective. Every commission is engineered for precision, pacing, and authentic atmosphere.
          </p>
        </div>

        {/* Editorial Split Showcase (Desktop: List + Sticky Preview; Mobile: Scannable Editorial Strips) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column: Numbered Editorial Rows */}
          <div className="lg:col-span-7 flex flex-col border-t border-[#222533]">
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
                  className={`group py-6 sm:py-8 border-b border-[#222533] transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 px-3 sm:px-4 rounded-xl ${
                    isActive
                      ? 'bg-[#12131a]/80 shadow-md'
                      : 'hover:bg-[#12131a]/40'
                  }`}
                >
                  <div className="flex flex-col gap-3">
                    {/* Index & Title Row */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex items-baseline gap-3 sm:gap-5">
                        <span className="font-mono text-xs sm:text-sm font-semibold text-amber-400/90 tracking-wider">
                          0{index + 1}
                        </span>
                        <h3
                          className={`text-lg sm:text-2xl font-light tracking-tight transition-colors duration-200 ${
                            isActive
                              ? 'text-amber-300 font-normal'
                              : 'text-[#f3f3f6] group-hover:text-amber-300'
                          }`}
                        >
                          {service.title}
                        </h3>
                      </div>

                      <a
                        href={serviceWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="shrink-0 p-2 rounded-lg bg-[#181a24] group-hover:bg-amber-400 text-[#9fa2b4] group-hover:text-neutral-950 border border-[#2e3346] group-hover:border-amber-400 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                        aria-label={`Inquire about ${service.title} on WhatsApp`}
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>

                    {/* Tagline */}
                    <p className="text-xs sm:text-sm text-[#9fa2b4] font-light pl-6 sm:pl-9 leading-relaxed">
                      {service.tagline}
                    </p>

                    {/* Clean Deliverable Capsule Tags (No Bulky Checkmarks) */}
                    <div className="flex flex-wrap gap-2 pt-2 pl-6 sm:pl-9">
                      {service.deliverables.map((item) => (
                        <span
                          key={item}
                          className="px-2.5 py-1 rounded-md bg-[#181a24] text-[11px] font-mono text-[#9fa2b4] border border-[#222533]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Mobile Only: Inline Image Frame */}
                    <div className="mt-4 lg:hidden rounded-lg overflow-hidden border border-[#222533] aspect-[21/9] bg-black">
                      <img
                        src={service.image}
                        alt={service.alt}
                        width={1200}
                        height={500}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05]"
                      />
                    </div>

                    {/* Mobile WhatsApp Action Button */}
                    <div className="pt-3 pl-6 sm:pl-9 lg:hidden">
                      <a
                        href={serviceWhatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 py-1"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span>Inquire on WhatsApp →</span>
                      </a>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Right Column: Sticky Cinema Preview Window (Desktop only) */}
          <aside
            aria-label="Discipline Visual Preview"
            className="hidden lg:block lg:col-span-5 sticky top-28"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#2e3346] bg-[#12131a] shadow-2xl group">
              {/* Active Service Image with Smooth Fade */}
              <img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.alt}
                width={1200}
                height={900}
                className="w-full h-full object-cover object-center filter brightness-[0.82] contrast-[1.05] transition-all duration-500 animate-in fade-in zoom-in-95"
              />

              {/* Cinematic Vignette Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#090a0f] via-transparent to-black/30 opacity-80"
                aria-hidden="true"
              />

              {/* Top Index Pill */}
              <div className="absolute top-4 left-4">
                <span className="font-mono text-xs uppercase px-2.5 py-1 rounded bg-[#090a0f]/90 text-amber-300 border border-[#222533] backdrop-blur-md">
                  Active Discipline
                </span>
              </div>

              {/* Bottom Meta Overlay */}
              <div className="absolute bottom-5 left-5 right-5 flex flex-col gap-3">
                <div>
                  <h4 className="text-xl font-medium text-[#f3f3f6]">
                    {activeService.title}
                  </h4>
                  <p className="text-xs text-[#9fa2b4] mt-1 line-clamp-2 font-light">
                    {activeService.tagline}
                  </p>
                </div>

                <a
                  href={`${siteConfig.contact.socials.whatsapp}?text=${encodeURIComponent(
                    `Hello Prism Pulse, I'm interested in discussing a project for ${activeService.title}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 font-semibold text-xs uppercase tracking-wider transition-all duration-200 shadow-md shadow-amber-400/20"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Discuss This Discipline</span>
                </a>
              </div>
            </div>

            {/* Note below preview */}
            <div className="mt-4 p-3.5 rounded-xl bg-[#12131a] border border-[#222533] text-xs text-[#676b7e] flex items-center justify-between">
              <span>Production scope tailored per brief</span>
              <span className="text-amber-400/80 font-mono">Prism Pulse Atelier</span>
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
