import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { siteConfig } from '../data/siteConfig'
import { InstagramIcon, FacebookIcon, YouTubeIcon } from '../components/SocialIcons'
import {
  MessageCircle,
  Mail,
  MapPin,
  Video,
  ArrowRight,
  Send,
  Globe,
  Clock
} from 'lucide-react'


export function Contact() {
  const { contact, brand } = siteConfig

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-20 sm:py-28 border-b border-[#222533]/80 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Background ambient lighting glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[350px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181a24] border border-[#2e3346] text-xs font-medium text-amber-400 mb-4">
            <Send className="w-3.5 h-3.5" />
            <span className="tracking-wide uppercase text-[11px]">Direct Connection</span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-5xl font-light tracking-tight text-[#f3f3f6] mb-4"
          >
            Let's create something <span className="font-semibold text-amber-300">enduring.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#9fa2b4] font-light leading-relaxed max-w-xl mx-auto">
            Available for commercial campaigns, narrative films, fine-art portraits, and licensed drone cinematography all over Bangladesh.
          </p>

        </div>

        {/* Primary Conversion Card */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative bg-gradient-to-b from-[#161822] to-[#101117] border border-amber-400/30 rounded-2xl p-6 sm:p-10 shadow-2xl overflow-hidden">
            {/* Top gold ambient line */}
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

            <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-medium mb-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Fastest Response Time</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-medium text-[#f3f3f6] mb-2">
                  Direct WhatsApp Production Line
                </h3>

                <p className="text-xs sm:text-sm text-[#9fa2b4] font-light leading-relaxed">
                  Have a shoot date, treatment draft, or location inquiry? Chat directly with the creator on WhatsApp for rapid availability checks and custom rates.
                </p>

                <div className="flex items-center justify-center md:justify-start gap-4 mt-4 text-xs text-[#676b7e]">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-amber-400" />
                    <span>Typically responds within 2-4 hours</span>
                  </span>
                  <span>·</span>
                  <span>{brand.location}</span>
                </div>
              </div>

              {/* Primary WhatsApp Action */}
              <div className="shrink-0 w-full sm:w-auto">
                <Button
                  as="a"
                  href={contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="primary"
                  size="lg"
                  className="w-full sm:w-auto shadow-xl shadow-amber-400/15"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Channels & Social Links Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {/* Email Card */}
          <div className="bg-[#12131a] border border-[#222533] rounded-xl p-5 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#181a24] border border-[#2e3346] flex items-center justify-center text-amber-400">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#676b7e] font-mono block">
                  Email Inquiries
                </span>
                <span className="text-sm font-medium text-[#f3f3f6]">
                  Written Proposals
                </span>
              </div>
            </div>
            <a
              href={`mailto:${contact.email}`}
              className="text-xs text-amber-400 hover:text-amber-300 transition-colors break-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400"
            >
              {contact.email}
            </a>
          </div>

          {/* Location & Travel Card */}
          <div className="bg-[#12131a] border border-[#222533] rounded-xl p-5 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#181a24] border border-[#2e3346] flex items-center justify-center text-amber-400">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#676b7e] font-mono block">
                  Home Base
                </span>
                <span className="text-sm font-medium text-[#f3f3f6]">
                  Global Mobility
                </span>
              </div>
            </div>
            <span className="text-xs text-[#9fa2b4]">
              {contact.locationDisplay}
            </span>
          </div>

          {/* Social Profiles Hub Card */}
          <div className="bg-[#12131a] border border-[#222533] rounded-xl p-5 flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-9 h-9 rounded-lg bg-[#181a24] border border-[#2e3346] flex items-center justify-center text-amber-400">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[11px] uppercase tracking-wider text-[#676b7e] font-mono block">
                  Online Atelier
                </span>
                <span className="text-sm font-medium text-[#f3f3f6]">
                  Social Channels
                </span>
              </div>
            </div>
            <span className="text-xs text-[#9fa2b4]">
              Instagram · Facebook · YouTube
            </span>
          </div>
        </div>

        {/* Secondary Social Connection Buttons */}
        <div className="max-w-4xl mx-auto pt-8 border-t border-[#222533]">
          <h4 className="text-xs uppercase tracking-widest text-[#676b7e] font-mono text-center mb-6">
            Explore Social Portfolios & Updates
          </h4>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {/* Instagram */}
            <a
              href={contact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#12131a] hover:bg-[#181a24] border border-[#222533] hover:border-amber-400/40 text-xs font-medium text-[#9fa2b4] hover:text-[#f3f3f6] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <InstagramIcon className="w-4 h-4 text-pink-400" />
              <span>Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href={contact.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#12131a] hover:bg-[#181a24] border border-[#222533] hover:border-amber-400/40 text-xs font-medium text-[#9fa2b4] hover:text-[#f3f3f6] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            >
              <FacebookIcon className="w-4 h-4 text-blue-400" />
              <span>Facebook</span>
            </a>

            {/* YouTube */}
            {contact.socials.youtube && (
              <a
                href={contact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#12131a] hover:bg-[#181a24] border border-[#222533] hover:border-amber-400/40 text-xs font-medium text-[#9fa2b4] hover:text-[#f3f3f6] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <YouTubeIcon className="w-4 h-4 text-red-400" />
                <span>YouTube</span>
              </a>
            )}


            {/* Vimeo */}
            {contact.socials.vimeo && (
              <a
                href={contact.socials.vimeo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#12131a] hover:bg-[#181a24] border border-[#222533] hover:border-amber-400/40 text-xs font-medium text-[#9fa2b4] hover:text-[#f3f3f6] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <Video className="w-4 h-4 text-sky-400" />
                <span>Vimeo</span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
