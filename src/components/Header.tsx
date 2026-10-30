import { useState, useEffect } from 'react'
import { Container } from './Container'
import { siteConfig } from '../data/siteConfig'
import { Menu, X, ArrowUpRight } from 'lucide-react'
import brandLogo from '../assets/Prism-Pluse.png'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header className="fixed top-4 sm:top-5 left-0 right-0 z-40 pointer-events-none">
        <Container className="flex items-center justify-between">
          <div
            className={`pointer-events-auto w-full flex items-center justify-between px-4 sm:px-6 py-2.5 sm:py-3 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-[#090a0f]/85 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/60'
                : 'bg-[#090a0f]/55 backdrop-blur-md border border-white/5'
            }`}
          >
            {/* Brand Wordmark */}
            <a
              href="#"
              className="group flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-full"
              aria-label={`${siteConfig.brand.name} Home`}
            >
              <div className="w-8 h-8 rounded-full bg-white/95 p-1 flex items-center justify-center shadow-sm shrink-0 overflow-hidden transition-transform duration-300 group-hover:scale-105">
                <img
                  src={brandLogo}
                  alt={`${siteConfig.brand.name} Logo`}
                  width={32}
                  height={32}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-medium tracking-[0.2em] text-xs sm:text-sm uppercase text-[#f3f3f6] transition-colors duration-200 group-hover:text-amber-300">
                {siteConfig.brand.name}
              </span>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-xs uppercase tracking-[0.15em] text-[#9fa2b4] hover:text-[#f3f3f6] transition-colors duration-200 py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Desktop Minimal Inquire Button */}
            <div className="hidden md:flex items-center">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/5 hover:bg-amber-400 text-xs font-medium tracking-wider uppercase text-[#f3f3f6] hover:text-neutral-950 border border-white/10 hover:border-amber-400 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <span>Inquire</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-full text-[#f3f3f6] hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-amber-400" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </Container>
      </header>

      {/* Fullscreen Minimal Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-[#090a0f]/98 backdrop-blur-2xl md:hidden animate-fade-up"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-medium tracking-[0.2em] text-xs uppercase text-[#9fa2b4]">
              {siteConfig.brand.name}
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 text-[#f3f3f6] hover:text-amber-300"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex flex-col justify-center px-8">
            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation Links">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-3xl font-serif italic text-[#f3f3f6] hover:text-amber-300 transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="p-8 border-t border-white/10 flex items-center justify-between">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-400 text-neutral-950 text-xs font-semibold uppercase tracking-widest"
            >
              <span>WhatsApp Inquiry</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </>
  )
}
