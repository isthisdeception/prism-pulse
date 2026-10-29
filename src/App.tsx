import { Header } from './components/Header'
import { Hero } from './sections/Hero'
import { SelectedWorks } from './sections/SelectedWorks'
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


        <section
          id="films"
          className="scroll-mt-24 py-16 border-b border-[#222533]/50 text-center"
        >
          <Container size="narrow">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
              Motion
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#f3f3f6] mt-2 mb-3">
              Films & Cinematography
            </h2>
            <p className="text-sm text-[#9fa2b4] max-w-md mx-auto">
              Ready for Step 4: Video showreels with on-demand playback.
            </p>
          </Container>
        </section>

        <section
          id="services"
          className="scroll-mt-24 py-16 border-b border-[#222533]/50 text-center"
        >
          <Container size="narrow">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
              Offerings
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#f3f3f6] mt-2 mb-3">
              Services & Production
            </h2>
            <p className="text-sm text-[#9fa2b4] max-w-md mx-auto">
              Ready for Step 5: Service cards, deliverables, and capabilities.
            </p>
          </Container>
        </section>

        <section
          id="about"
          className="scroll-mt-24 py-16 border-b border-[#222533]/50 text-center"
        >
          <Container size="narrow">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-medium">
              Vision
            </span>
            <h2 className="text-2xl sm:text-3xl font-light text-[#f3f3f6] mt-2 mb-3">
              About the Creator
            </h2>
            <p className="text-sm text-[#9fa2b4] max-w-md mx-auto">
              Ready for Step 6: Creative statement and artistic background.
            </p>
          </Container>
        </section>

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
