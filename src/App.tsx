import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { SelectedWorks } from './sections/SelectedWorks'
import { FilmsShowcase } from './sections/FilmsShowcase'
import { Services } from './sections/Services'
import { About } from './sections/About'
import { Contact } from './sections/Contact'
import { WhatsAppPopup } from './components/WhatsAppPopup'
import { Container } from './components/Container'
import { siteConfig } from './data/siteConfig'
import brandLogo from './assets/Prism-Pluse.png'

const CURRENT_YEAR = new Date().getFullYear()

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f3f3f6] flex flex-col selection:bg-amber-400/20 selection:text-amber-200">
      {/* Accessible Skip Link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amber-400 focus:text-neutral-950 focus:font-semibold focus:rounded focus:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
      >
        Skip to main content
      </a>

      {/* Fixed Accessible Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">

        {/* Step 2: Cinematic Hero */}
        <Hero />

        {/* Step 3: Selected Works Gallery & Lightbox */}
        <SelectedWorks />

        {/* Step 4: Films, Cinematography & Drone Showcase */}
        <FilmsShowcase />

        {/* Step 5: Disciplines & Services */}
        <Services />

        {/* Step 5: About the Creator & Vision */}
        <About />

        {/* Step 6: Contact & Social Channels */}
        <Contact />
      </main>

      {/* Step 6: Delayed WhatsApp Action Popup (7s delay, safe storage) */}
      <WhatsAppPopup />

      {/* Global Minimal Footer */}
      <footer className="border-t border-[#222533] py-10 text-center text-xs text-[#676b7e] bg-[#090a0f]">
        <Container className="flex flex-col items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/95 p-1 flex items-center justify-center shadow-sm border border-white/20 shrink-0 overflow-hidden">
            <img
              src={brandLogo}
              alt={`${siteConfig.brand.name} Logo`}
              width={32}
              height={32}
              className="w-full h-full object-contain"
            />
          </div>
          <p>© {CURRENT_YEAR} {siteConfig.brand.name}. {siteConfig.brand.location}.</p>
        </Container>
      </footer>
    </div>
  )
}

