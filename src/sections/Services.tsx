import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'
import { Check, Sparkles, MessageCircle } from 'lucide-react'

export function Services() {
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
            <Sparkles className="w-3.5 h-3.5" />
            <span className="tracking-wide uppercase text-[11px]">Production Offerings</span>
          </div>
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-[#f3f3f6]"
          >
            Disciplines & <span className="font-semibold text-amber-300">Capabilities</span>
          </h2>
          <p className="text-sm sm:text-base text-[#9fa2b4] mt-3 font-light leading-relaxed">
            Tailored production solutions spanning narrative cinema, editorial stills, and aerial perspective. Every package is engineered for precision and authentic emotional tone.
          </p>
        </div>

        {/* Services Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {siteConfig.services.map((service, index) => {
            const whatsappMessage = encodeURIComponent(
              `Hello Prism Pulse, I'm interested in discussing a project for ${service.title}.`
            )
            const serviceWhatsappUrl = `${siteConfig.contact.whatsappUrl}?text=${whatsappMessage}`

            return (
              <article
                key={service.id}
                className="group bg-[#12131a] border border-[#222533] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:border-amber-400/40 hover:shadow-2xl hover:shadow-amber-400/5 flex flex-col"
              >
                {/* Thumbnail Header Image */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-black">
                  <img
                    src={service.image}
                    alt={service.alt}
                    width={1200}
                    height={675}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center filter brightness-[0.85] contrast-[1.05] transition-transform duration-500 group-hover:scale-105"
                  />

                  <div
                    className="absolute inset-0 bg-gradient-to-t from-[#12131a] via-[#12131a]/40 to-transparent"
                    aria-hidden="true"
                  />

                  {/* Step Number Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="font-mono text-xs text-amber-300 font-semibold px-2.5 py-1 rounded bg-[#090a0f]/85 border border-[#222533] backdrop-blur-sm">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Bottom Image Overlay Title */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <h3 className="text-lg sm:text-xl font-medium text-[#f3f3f6] group-hover:text-amber-200 transition-colors">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-xs uppercase tracking-wider text-amber-400/90 font-mono mb-2">
                      {service.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-[#9fa2b4] leading-relaxed font-light mb-6">
                      {service.description}
                    </p>

                    {/* Deliverables List */}
                    <div className="mb-6">
                      <span className="text-[11px] font-semibold uppercase tracking-wider text-[#676b7e] block mb-2.5">
                        Key Deliverables
                      </span>
                      <ul className="space-y-2">
                        {service.deliverables.map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2 text-xs text-[#d1d5db]"
                          >
                            <span className="w-4 h-4 rounded-full bg-amber-400/10 text-amber-400 flex items-center justify-center shrink-0">
                              <Check className="w-2.5 h-2.5" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="pt-4 border-t border-[#222533]/80 flex items-center justify-between">
                    <span className="text-xs text-[#676b7e]">
                      Custom scope & timeline
                    </span>
                    <a
                      href={serviceWhatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400 hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      <span>Inquire via WhatsApp →</span>
                    </a>
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
