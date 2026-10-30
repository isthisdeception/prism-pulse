import { useState } from 'react'
import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'
import { ArrowUpRight } from 'lucide-react'

export function Services() {
  const [activeId, setActiveId] = useState<string>(siteConfig.services[0].id)

  const activeService =
    siteConfig.services.find((s) => s.id === activeId) || siteConfig.services[0]

  return (
    <section
      id="services"
      className="scroll-mt-24 py-16 sm:py-24 relative"
      aria-labelledby="services-heading"
    >
      <Container>
        {/* Minimalist Section Header */}
        <div className="mb-10 sm:mb-14">
          <h2
            id="services-heading"
            className="text-3xl sm:text-5xl font-light tracking-tight text-[#f3f3f6]"
          >
            Disciplines &{' '}
            <span className="font-serif italic font-normal text-amber-300">
              Capabilities.
            </span>
          </h2>
        </div>

        {/* Clean Split Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          {/* Left Column: Minimalist Numbered Index */}
          <div className="lg:col-span-7 flex flex-col border-t border-white/10">
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
                  className="group py-6 sm:py-7 border-b border-white/10 transition-colors duration-300 cursor-pointer focus-visible:outline-none"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-baseline gap-4 sm:gap-6">
                      <span
                        className={`font-mono text-xs transition-colors duration-200 ${
                          isActive ? 'text-amber-400' : 'text-[#676b7e]'
                        }`}
                      >
                        0{index + 1}
                      </span>
                      <div>
                        <h3
                          className={`text-xl sm:text-3xl font-light tracking-tight transition-colors duration-200 ${
                            isActive
                              ? 'text-amber-300'
                              : 'text-[#f3f3f6] group-hover:text-amber-200'
                          }`}
                        >
                          {service.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#9fa2b4] font-light mt-1">
                          {service.tagline}
                        </p>
                      </div>
                    </div>

                    <a
                      href={serviceWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-200 ${
                        isActive
                          ? 'bg-amber-400 text-neutral-950 border-amber-400'
                          : 'border-white/10 text-[#9fa2b4] group-hover:border-amber-400/50 group-hover:text-amber-300'
                      }`}
                      aria-label={`Inquire about ${service.title} on WhatsApp`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Right Column: Pure Visual Preview Frame */}
          <aside
            aria-label="Discipline Visual Preview"
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-[#12131a] shadow-2xl">
              <img
                key={activeService.id}
                src={activeService.image}
                alt={activeService.alt}
                width={1200}
                height={900}
                className="w-full h-full object-cover object-center transition-all duration-500 animate-fade-up"
              />
            </div>
          </aside>
        </div>
      </Container>
    </section>
  )
}
