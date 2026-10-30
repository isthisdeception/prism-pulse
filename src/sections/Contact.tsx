import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'
import { InstagramIcon, FacebookIcon, YouTubeIcon } from '../components/SocialIcons'
import backdropImg from '../assets/gallery/photo-09.jpg'
import brandLogo from '../assets/Prism-Pluse.png'
import { MessageCircle, Mail, ArrowUpRight, ArrowUp } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export function Contact() {
  const { contact, brand } = siteConfig

  return (
    <section
      id="contact"
      className="scroll-mt-24 pt-16 sm:pt-24 pb-10 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <Container>
        {/* Creative Widescreen Finale Showcase Card */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#12131a] p-7 sm:p-12 lg:p-16 shadow-2xl">
          {/* Moody Cinematic Aerial Backdrop */}
          <img
            src={backdropImg}
            alt=""
            aria-hidden="true"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-center opacity-25 scale-105 filter contrast-125"
          />

          {/* Layered Dark & Warm Gold Vignette */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090a0f] via-[#090a0f]/80 to-[#090a0f]/60"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-400/15 rounded-full blur-[120px]"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-10 lg:gap-12">
            {/* Left: Status Pill & Editorial Headline */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.22em] text-amber-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available All Over Bangladesh</span>
              </div>

              <h2
                id="contact-heading"
                className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#f3f3f6] leading-[1.04]"
              >
                Let's create
                <br />
                something{' '}
                <span className="font-serif italic font-normal text-amber-300">
                  enduring.
                </span>
              </h2>
            </div>

            {/* Right: Interactive Glass Contact Tiles */}
            <div className="w-full lg:max-w-md flex flex-col gap-3.5">
              {/* WhatsApp Interactive Tile */}
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-amber-400 hover:bg-amber-300 text-neutral-950 transition-all duration-300 shadow-xl shadow-amber-400/15"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-neutral-950/10 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-neutral-950/70 font-semibold">
                      Direct WhatsApp
                    </span>
                    <span className="block text-base sm:text-lg font-semibold tracking-tight">
                      {contact.phoneDisplay}
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full bg-neutral-950/10 group-hover:bg-neutral-950 group-hover:text-amber-300 flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>

              {/* Email Interactive Glass Tile */}
              <a
                href={`mailto:${contact.email}`}
                className="group flex items-center justify-between gap-4 p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 backdrop-blur-xl text-[#f3f3f6] transition-all duration-300"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-amber-300 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono uppercase tracking-widest text-[#9fa2b4]">
                      Email Inquiry
                    </span>
                    <span className="block text-sm sm:text-base font-medium truncate group-hover:text-amber-200 transition-colors">
                      {contact.email}
                    </span>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full border border-white/10 group-hover:border-amber-400 group-hover:bg-amber-400 group-hover:text-neutral-950 flex items-center justify-center shrink-0 transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Minimalist Architectural Footer Bar */}
        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-[#676b7e]">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-full bg-white/95 p-1 flex items-center justify-center shrink-0 overflow-hidden">
              <img
                src={brandLogo}
                alt={`${brand.name} Logo`}
                width={28}
                height={28}
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-mono uppercase tracking-widest text-[#9fa2b4]">
              © {CURRENT_YEAR} {brand.name}
            </span>
          </div>

          <div className="flex items-center gap-6 font-mono uppercase tracking-widest text-[11px] text-[#9fa2b4]">
            <a
              href={contact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <InstagramIcon className="w-3.5 h-3.5" />
              <span>Instagram</span>
            </a>
            <a
              href={contact.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
              <span>Facebook</span>
            </a>
            {contact.socials.youtube && (
              <a
                href={contact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 hover:text-amber-300 transition-colors"
              >
                <YouTubeIcon className="w-3.5 h-3.5" />
                <span>YouTube</span>
              </a>
            )}
            <a
              href="#"
              aria-label="Back to top"
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-amber-400 text-[#f3f3f6] hover:text-neutral-950 border border-white/10 hover:border-amber-400 flex items-center justify-center transition-all duration-300"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}
