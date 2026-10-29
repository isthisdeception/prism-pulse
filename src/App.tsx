import { Container } from './components/Container'
import { Button } from './components/Button'
import { siteConfig } from './data/siteConfig'
import { PROJECTS } from './data/projects'
import { Sparkles, Layers, ShieldCheck, ArrowRight } from 'lucide-react'

const CURRENT_YEAR = new Date().getFullYear()

export default function App() {
  return (
    <div className="min-h-screen bg-[#090a0f] text-[#f3f3f6] flex flex-col justify-between selection:bg-amber-400/20 selection:text-amber-200">
      {/* Top minimal bar */}
      <header className="border-b border-[#222533]/80 bg-[#090a0f]/80 backdrop-blur-md sticky top-0 z-50">
        <Container className="py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded bg-gradient-to-br from-amber-400/20 to-neutral-800 border border-amber-400/30 flex items-center justify-center font-bold text-amber-400 text-sm tracking-wider">
              PP
            </div>
            <span className="font-semibold tracking-[0.2em] text-sm uppercase text-[#f3f3f6]">
              {siteConfig.brand.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              Step 1: Foundation Ready
            </span>
          </div>
        </Container>
      </header>

      {/* Main minimal shell verifying foundation & tokens */}
      <main className="flex-1 py-16 sm:py-24">
        <Container size="narrow" className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#181a24] border border-[#2e3346] text-xs text-amber-400/90 mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Cinematic Portfolio Atelier</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-light tracking-tight text-[#f3f3f6] mb-4">
            PRISM <span className="font-semibold text-amber-400">PULSE</span>
          </h1>

          <p className="text-lg sm:text-xl text-[#9fa2b4] font-light max-w-xl mx-auto mb-8">
            {siteConfig.brand.tagline}
          </p>

          <p className="text-sm text-[#676b7e] max-w-lg mx-auto mb-10 leading-relaxed">
            {siteConfig.brand.subTagline}
          </p>

          {/* Foundation checklist card */}
          <div className="text-left bg-[#12131a] border border-[#222533] rounded-lg p-6 mb-10 shadow-2xl">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-neutral-400 mb-4 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              Step 1 Foundation Verification
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#9fa2b4]">
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#181a24] border border-[#222533]/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>React 19 + Vite + TypeScript initialized</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#181a24] border border-[#222533]/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Tailwind CSS v4 & theme tokens active</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#181a24] border border-[#222533]/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>siteConfig.ts with TODO_REPLACE hooks</span>
              </div>
              <div className="flex items-center gap-2 p-2.5 rounded bg-[#181a24] border border-[#222533]/80">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>projects.ts configured with {PROJECTS.length} entries</span>
              </div>
            </div>
          </div>

          {/* Interactive button token verification */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button
              as="a"
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
            >
              Primary WhatsApp CTA
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="secondary">
              Secondary Button Token
            </Button>
            <Button variant="outline">
              Outline Button Token
            </Button>
          </div>
        </Container>
      </main>

      {/* Minimal footer */}
      <footer className="border-t border-[#222533]/80 py-6 text-center text-xs text-[#676b7e]">
        <Container>
          <p>© {CURRENT_YEAR} {siteConfig.brand.name}. {siteConfig.brand.location}.</p>
        </Container>

      </footer>
    </div>
  )
}
