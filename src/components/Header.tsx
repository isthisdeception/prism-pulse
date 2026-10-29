import { useState, useEffect } from 'react'
import { Container } from './Container'
import { Button } from './Button'
import { siteConfig } from '../data/siteConfig'
import { Menu, X, MessageCircle } from 'lucide-react'
import brandLogo from '../assets/Prism-Pluse.png'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position for subtle header background transition
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [mobileMenuOpen])

  // Prevent background scroll when mobile menu is open
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
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-[#222533] shadow-lg shadow-black/40 py-3.5'
            : 'bg-[#090a0f]/80 backdrop-blur-sm border-b border-[#222533]/50 py-5'
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Brand Wordmark */}
          <a
            href="#"
            className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
            aria-label={`${siteConfig.brand.name} Home`}
          >
            <div className="w-9 h-9 rounded-lg bg-white/95 p-1 flex items-center justify-center shadow-md shadow-amber-400/10 border border-white/20 transition-transform duration-200 group-hover:scale-105 shrink-0 overflow-hidden">
              <img
                src={brandLogo}
                alt={`${siteConfig.brand.name} Logo`}
                width={36}
                height={36}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-semibold tracking-[0.22em] text-sm sm:text-base uppercase text-[#f3f3f6] transition-colors duration-200 group-hover:text-amber-300">
                {siteConfig.brand.name}
              </span>
              <span className="text-[10px] tracking-widest uppercase text-[#676b7e] hidden sm:block">
                Visual Direction
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium tracking-wide text-[#9fa2b4] hover:text-[#f3f3f6] transition-colors duration-200 py-1 relative group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-amber-400 transition-all duration-200 group-hover:w-full opacity-80" />
              </a>
            ))}
          </nav>

          {/* Desktop WhatsApp Action Button */}
          <div className="hidden md:flex items-center gap-4">
            <Button
              as="a"
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
              className="shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>Chat on WhatsApp</span>
            </Button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-md text-[#9fa2b4] hover:text-[#f3f3f6] hover:bg-[#181a24] border border-[#2e3346] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors duration-200"
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-amber-400" /> : <Menu className="w-6 h-6" />}
          </button>
        </Container>
      </header>

      {/* Mobile Drawer (Sibling to header to avoid containing block traps from backdrop-filter) */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-0 z-50 flex flex-col bg-[#090a0f] md:hidden animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          {/* Top Bar inside Drawer */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 border-b border-[#222533] bg-[#090a0f]">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
              aria-label={`${siteConfig.brand.name} Home`}
            >
              <div className="w-9 h-9 rounded-lg bg-white/95 p-1 flex items-center justify-center shadow-md shadow-amber-400/10 border border-white/20 shrink-0 overflow-hidden">
                <img
                  src={brandLogo}
                  alt={`${siteConfig.brand.name} Logo`}
                  width={36}
                  height={36}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="font-semibold tracking-[0.22em] text-sm uppercase text-[#f3f3f6]">
                {siteConfig.brand.name}
              </span>
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="min-w-[44px] min-h-[44px] flex items-center justify-center p-2 rounded-md text-[#9fa2b4] hover:text-[#f3f3f6] hover:bg-[#181a24] border border-[#2e3346] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              aria-label="Close navigation menu"
            >
              <X className="w-6 h-6 text-amber-400" />
            </button>
          </div>

          {/* Navigation Links List */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-6 flex flex-col justify-between">
            <nav className="flex flex-col gap-2.5" aria-label="Mobile Navigation Links">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg font-medium tracking-wide text-[#f3f3f6] hover:text-amber-300 hover:bg-[#12131a] active:bg-[#181a24] px-4 py-3.5 rounded-xl border border-[#222533] flex items-center justify-between transition-colors duration-150"
                >
                  <span>{item.label}</span>
                  <span className="text-xs uppercase tracking-widest text-[#676b7e]">
                    Explore →
                  </span>
                </a>
              ))}
            </nav>

            {/* Mobile Bottom Actions */}
            <div className="pt-6 border-t border-[#222533] flex flex-col gap-4 mt-6">
              <Button
                as="a"
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                size="lg"
                className="w-full justify-center shadow-lg shadow-amber-400/15"
                onClick={() => setMobileMenuOpen(false)}
              >
                <MessageCircle className="w-5 h-5" />
                <span>Chat on WhatsApp</span>
              </Button>

              <div className="text-center text-xs text-[#676b7e] pb-2 font-mono">
                <p>{siteConfig.brand.location}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
