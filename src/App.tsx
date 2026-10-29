import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { SelectedWorks } from './sections/SelectedWorks'
import { FilmsShowcase } from './sections/FilmsShowcase'
import { Services } from './sections/Services'
import { About } from './sections/About'
import { Container } from './components/Container'
import { siteConfig } from './data/siteConfig'

const CURRENT_YEAR = new Date().getFullYear()

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f3f3f6] flex flex-col selection:bg-amber-400/20 selection:text-amber-200">
      {/* Fixed Accessible Navigation Header */}
      <Header />

      {/* Main Content Area */}
      <main className="flex-1">
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


        <section
          id="contact"
          className="scroll-mt-24 py-16 border-b border-[#222533]/50 text-center"
        >
          <Container size="narrow">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
              Get in Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#f3f3f6] mt-2 mb-3">
              Start a Conversation
            </h2>
            <p className="text-sm text-[#9fa2b4] max-w-md mx-auto">
              Ready for Step 7: Direct WhatsApp and social conversion channels.
            </p>
          </Container>
        </section>
      </main>

      {/* Global Minimal Footer */}
      <footer className="border-t border-[#222533] py-8 text-center text-xs text-[#676b7e] bg-[#090a0f]">
        <Container>
          <p>© {CURRENT_YEAR} {siteConfig.brand.name}. {siteConfig.brand.location}.</p>
        </Container>
      </footer>
    </div>
  )
}
