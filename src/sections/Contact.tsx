import { Container } from '../components/Container'
import { Button } from '../components/Button'
import { siteConfig } from '../data/siteConfig'
import { InstagramIcon, FacebookIcon, YouTubeIcon } from '../components/SocialIcons'
import { MessageCircle, ArrowUpRight } from 'lucide-react'

export function Contact() {
  const { contact } = siteConfig

  return (
    <section
      id="contact"
      className="scroll-mt-24 py-24 sm:py-32 relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Subtle ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[550px] h-[300px] bg-amber-500/5 rounded-full blur-[140px] pointer-events-none"
        aria-hidden="true"
      />

      <Container>
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-amber-400/90 block mb-4">
            Commissions & Inquiries
          </span>

          <h2
            id="contact-heading"
            className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-[#f3f3f6] leading-[1.08] mb-8"
          >
            Let's create something{' '}
            <span className="font-serif italic font-normal text-amber-300">
              enduring.
            </span>
          </h2>

          {/* Primary WhatsApp & Email Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              as="a"
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full sm:w-auto rounded-full px-8 shadow-xl shadow-amber-400/15"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp — {contact.phoneDisplay}</span>
            </Button>

            <a
              href={`mailto:${contact.email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-sm text-[#f3f3f6] hover:text-amber-300 transition-all duration-200"
            >
              <span>{contact.email}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

          {/* Minimal Social Links */}
          <div className="flex items-center justify-center gap-6 text-xs font-mono uppercase tracking-widest text-[#9fa2b4]">
            <a
              href={contact.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
            >
              <InstagramIcon className="w-4 h-4" />
              <span>Instagram</span>
            </a>

            <a
              href={contact.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
            >
              <FacebookIcon className="w-4 h-4" />
              <span>Facebook</span>
            </a>

            {contact.socials.youtube && (
              <a
                href={contact.socials.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-amber-300 transition-colors"
              >
                <YouTubeIcon className="w-4 h-4" />
                <span>YouTube</span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  )
}
