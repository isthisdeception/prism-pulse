import { useState, useRef } from 'react'
import { Container } from '../components/Container'
import { siteConfig } from '../data/siteConfig'
import { InstagramIcon, FacebookIcon, YouTubeIcon } from '../components/SocialIcons'
import backdropImg from '../assets/gallery/photo-08.jpg'
import { MessageCircle, Mail, ArrowUpRight, ArrowUp, Check, Copy } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export function Contact() {
  const { contact, brand } = siteConfig
  const [copied, setCopied] = useState(false)
  const [spot, setSpot] = useState({ x: 70, y: 30 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    setSpot({
      x: Math.round(((e.clientX - rect.left) / rect.width) * 100),
      y: Math.round(((e.clientY - rect.top) / rect.height) * 100)
    })
  }

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    navigator.clipboard?.writeText(contact.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 pt-16 sm:pt-24 pb-6 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      <Container>
        {/* Interactive Architectural Finale Showcase Card */}
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          className="group/card relative rounded-[32px] overflow-hidden border border-white/15 bg-[#0d0f17] p-7 sm:p-12 lg:p-14 shadow-2xl"
        >
          {/* Subtle Full-Bleed Aerial Background Image */}
          <img
            src={backdropImg}
            alt=""
            aria-hidden="true"
            width={1600}
            height={900}
            loading="lazy"
            decoding="async"
            className="pointer-events-none select-none absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover/card:opacity-50 group-hover/card:scale-[1.03] transition-all duration-1000 ease-out"
          />

          {/* Deeper Cinematic Shadow Overlays for Strong Foreground Text Focus */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#090a0f]/95 via-[#090a0f]/75 to-[#090a0f]/60"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#090a0f]/90 via-[#090a0f]/35 to-[#090a0f]/65"
            aria-hidden="true"
          />

          {/* Interactive Cursor-Tracking Warm Gold Spotlight */}
          <div
            style={{
              background: `radial-gradient(650px circle at ${spot.x}% ${spot.y}%, rgba(229, 169, 93, 0.16), transparent 60%)`
            }}
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            aria-hidden="true"
          />

          {/* Main Split Content */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-end">
            {/* Left: Status Pill & Editorial Statement */}
            <div className="lg:col-span-6">
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-black/55 border border-white/15 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.22em] text-amber-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available All Over Bangladesh</span>
              </div>

              <h2
                id="contact-heading"
                className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-white leading-[1.03] drop-shadow-lg"
              >
                Let's create
                <br />
                something{' '}
                <span className="font-serif italic font-normal text-amber-300">
                  enduring.
                </span>
              </h2>
            </div>

            {/* Right: Sleek Frosted-Glass Action Cards with Circular Gold Orbs */}
            <div className="lg:col-span-6 flex flex-col gap-3.5">
              {/* 01 / WhatsApp Glass Portal */}
              <a
                href={contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl bg-black/60 hover:bg-black/75 border border-amber-400/45 hover:border-amber-400 backdrop-blur-xl transition-all duration-300 shadow-2xl"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-full bg-amber-400/20 border border-amber-400/40 text-amber-300 flex items-center justify-center shrink-0">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-amber-300">
                      01 · Instant WhatsApp
                    </span>
                    <span className="block text-base sm:text-lg font-medium text-white tracking-tight mt-0.5">
                      {contact.phoneDisplay}
                    </span>
                  </div>
                </div>

                <div className="w-10 h-10 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shrink-0 shadow-lg shadow-amber-400/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                </div>
              </a>

              {/* 02 / Direct Email Glass Portal + 1-Click Copy */}
              <div className="group relative flex items-center justify-between gap-3 p-4 sm:p-5 rounded-2xl bg-black/60 hover:bg-black/75 border border-white/15 hover:border-white/30 backdrop-blur-xl transition-all duration-300 shadow-2xl">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3.5 min-w-0 flex-1"
                >
                  <div className="w-10 h-10 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white/80 group-hover:text-amber-300 shrink-0 transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <span className="block text-[10px] font-mono uppercase tracking-[0.2em] text-white/60">
                      02 · Direct Email
                    </span>
                    <span className="block text-xs sm:text-[13.5px] font-medium text-white group-hover:text-amber-200 transition-colors mt-0.5 break-all">
                      {contact.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-2 shrink-0">
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    title="Copy email address"
                    className="h-9 px-2.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-[10px] font-mono uppercase tracking-wider text-white/80 hover:text-white flex items-center gap-1 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span className="hidden sm:inline">Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`mailto:${contact.email}`}
                    aria-label="Send email"
                    className="w-9 h-9 rounded-full bg-white/5 border border-white/15 group-hover:border-amber-400/50 text-white/80 group-hover:text-amber-300 flex items-center justify-center transition-all duration-300"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Minimalist Footer Bar */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono uppercase tracking-widest text-[#676b7e]">
          <span>© {CURRENT_YEAR} {brand.name} · Dhaka, BD</span>

          <div className="flex items-center gap-6 text-[#9fa2b4]">
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

        {/* Giant Architectural Brand Monument Wordmark */}
        <div
          className="pointer-events-none select-none mt-8 sm:mt-10 overflow-hidden text-center"
          aria-hidden="true"
        >
          <span className="block text-[18vw] sm:text-[13.5vw] font-semibold uppercase tracking-[0.08em] leading-[0.82] bg-gradient-to-b from-white/[0.08] to-transparent bg-clip-text text-transparent">
            PRISM
            <br />
            PULSE
          </span>
        </div>
      </Container>
    </section>
  )
}
