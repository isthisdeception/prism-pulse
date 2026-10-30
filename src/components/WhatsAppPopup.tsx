import { siteConfig } from '../data/siteConfig'
import { MessageCircle } from 'lucide-react'

export function WhatsAppPopup() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40">
      <a
        href={siteConfig.contact.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        className="group flex items-center justify-center w-12 h-12 rounded-full bg-[#12131a]/85 hover:bg-amber-400 text-amber-300 hover:text-neutral-950 border border-white/15 hover:border-amber-400 backdrop-blur-xl shadow-2xl transition-all duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
      >
        <MessageCircle className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
      </a>
    </div>
  )
}
