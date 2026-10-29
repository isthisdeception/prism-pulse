import { useState, useEffect } from 'react'
import { Container } from './Container'
import { Button } from './Button'
import { siteConfig } from '../data/siteConfig'
import { Menu, X, MessageCircle } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position for subtle styling enhancements
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on Esc key
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#090a0f]/95 backdrop-blur-md border-b border-[#222533] shadow-lg shadow-black/40 py-3.5'
          : 'bg-[#090a0f]/75 backdrop-blur-sm border-b border-[#222533]/50 py-5'
      }`}
    >
      <Container className="flex items-center justify-between">
        {/* Brand Wordmark */}
        <a
          href="#"
          className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded-sm"
          aria-label={`${siteConfig.brand.name} Home`}
        >
          <div className="w-8 h-8 rounded bg-[#181a24] border border-amber-400/40 flex items-center justify-center font-bold text-amber-400 text-xs tracking-wider transition-colors duration-200 group-hover:border-amber-400 group-hover:bg-amber-400/10">
            PP
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
          className="md:hidden p-2 rounded-md text-[#9fa2b4] hover:text-[#f3f3f6] hover:bg-[#181a24] border border-transparent hover:border-[#222533] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 transition-colors duration-200"
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-controls="mobile-menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </Container>

      {/* Mobile Drawer Menu */}
      <div
        id="mobile-menu"
        className={`fixed inset-x-0 top-[65px] bottom-0 bg-[#090a0f]/98 backdrop-blur-xl border-t border-[#222533] transition-all duration-300 flex flex-col md:hidden z-40 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        <Container className="py-6 flex flex-col justify-between flex-1 overflow-y-auto">
          {/* Navigation Links List */}
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium tracking-wide text-[#9fa2b4] hover:text-amber-400 hover:bg-[#12131a] px-4 py-3.5 rounded-lg border border-transparent hover:border-[#222533] transition-all duration-200 flex items-center justify-between"
              >
                <span>{item.label}</span>
                <span className="text-xs uppercase tracking-widest text-[#676b7e]">Explore</span>
              </a>
            ))}
          </nav>

          {/* Mobile Bottom Actions */}
          <div className="pt-8 border-t border-[#222533] flex flex-col gap-4 mt-6">
            <Button
              as="a"
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="lg"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </Button>

            <div className="text-center text-xs text-[#676b7e] pt-2">
              <p>{siteConfig.brand.location}</p>
            </div>
          </div>
        </Container>
      </div>
    </header>
  )
}
