import { useState, useEffect, useRef } from 'react'
import { siteConfig } from '../data/siteConfig'
import { MessageCircle, X, Sparkles } from 'lucide-react'

// Configuration constants for timing and storage
const POPUP_DELAY_MS = 7000 // 7 seconds after page load
const STORAGE_KEY_DISMISSED = 'prism_pulse_wa_popup_dismissed_until'
const STORAGE_KEY_CONVERTED = 'prism_pulse_wa_popup_converted'
const SESSION_KEY_SHOWN = 'prism_pulse_wa_popup_session_shown'
const DISMISSAL_DURATION_MS = 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds

interface WhatsAppPopupProps {
  isModalOpen?: boolean
}

export function WhatsAppPopup({ isModalOpen = false }: WhatsAppPopupProps) {
  const [isVisible, setIsVisible] = useState(false)
  const popupRef = useRef<HTMLDivElement>(null)

  // Safe storage helper functions that never throw
  const isEligibleToShow = (): boolean => {
    try {
      // 1. Check if user already clicked WhatsApp CTA
      if (localStorage.getItem(STORAGE_KEY_CONVERTED) === 'true') {
        return false
      }

      // 2. Check if dismissed within the last 7 days
      const dismissedUntil = localStorage.getItem(STORAGE_KEY_DISMISSED)
      if (dismissedUntil) {
        const expiry = parseInt(dismissedUntil, 10)
        if (!isNaN(expiry) && Date.now() < expiry) {
          return false
        }
      }

      // 3. Check if already shown in this browser session
      if (sessionStorage.getItem(SESSION_KEY_SHOWN) === 'true') {
        return false
      }

      return true
    } catch {
      // If storage is blocked/restricted by browser privacy settings, fallback gracefully
      return false
    }
  }

  const markDismissed = () => {
    try {
      const expiry = Date.now() + DISMISSAL_DURATION_MS
      localStorage.setItem(STORAGE_KEY_DISMISSED, expiry.toString())
      sessionStorage.setItem(SESSION_KEY_SHOWN, 'true')
    } catch {
      // Ignore storage errors
    }
    setIsVisible(false)
  }

  const handleConverted = () => {
    try {
      localStorage.setItem(STORAGE_KEY_CONVERTED, 'true')
      sessionStorage.setItem(SESSION_KEY_SHOWN, 'true')
    } catch {
      // Ignore storage errors
    }
    setIsVisible(false)
  }

  // Timer logic for 7-second delayed appearance
  useEffect(() => {
    if (!isEligibleToShow()) return

    const timer = setTimeout(() => {
      // Do not interrupt if another lightbox or modal is currently active on screen
      const otherModalActive =
        isModalOpen ||
        document.body.style.overflow === 'hidden' ||
        document.querySelector('[role="dialog"]:not([aria-label*="WhatsApp"])') !== null

      if (otherModalActive) return

      if (isEligibleToShow()) {
        setIsVisible(true)
        try {
          sessionStorage.setItem(SESSION_KEY_SHOWN, 'true')
        } catch {
          // Ignore
        }
      }
    }, POPUP_DELAY_MS)


    return () => clearTimeout(timer)
  }, [isModalOpen])

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isVisible) {
        markDismissed()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isVisible])

  // Derive final display state: suppress if external modal is currently active
  const shouldDisplay = isVisible && !isModalOpen

  if (!shouldDisplay) return null


  return (
    <aside
      ref={popupRef}
      role="dialog"
      aria-label="Direct project consultation on WhatsApp"
      aria-live="polite"
      className="fixed bottom-0 inset-x-0 p-4 sm:bottom-6 sm:right-6 sm:inset-x-auto sm:max-w-sm w-full z-40 transition-all duration-300 transform translate-y-0 opacity-100"
    >
      <div className="bg-[#12131a]/95 border border-[#2e3346] rounded-2xl p-5 shadow-2xl backdrop-blur-xl flex flex-col gap-4 relative overflow-hidden">
        {/* Subtle ambient gold accent bar on top */}
        <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent" />

        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center shrink-0 shadow-md shadow-amber-400/20">
              <MessageCircle className="w-5 h-5 fill-current" />
            </div>
            <div>
              <span className="text-xs uppercase tracking-wider text-amber-300 font-mono flex items-center gap-1 font-semibold">
                <Sparkles className="w-3 h-3" />
                Direct Inquiry
              </span>
              <h3 className="text-sm font-semibold text-[#f3f3f6]">
                Let's talk about your project
              </h3>
            </div>
          </div>

          {/* Close X Button */}
          <button
            type="button"
            onClick={markDismissed}
            className="p-1 rounded-md text-[#9fa2b4] hover:text-[#f3f3f6] hover:bg-[#181a24] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            aria-label="Dismiss consultation popup"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Body Text */}
        <p className="text-xs text-[#9fa2b4] leading-relaxed font-light">
          Planning a commercial campaign, wedding film, or drone aerial sequence? Connect directly on WhatsApp for rates and scheduling.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-2 pt-1">
          <a
            href={siteConfig.contact.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleConverted}
            className="w-full sm:flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-neutral-950 text-xs font-semibold tracking-wide transition-all duration-200 shadow-md shadow-amber-400/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <button
            type="button"
            onClick={markDismissed}
            className="w-full sm:w-auto px-3 py-2 text-xs text-[#676b7e] hover:text-[#f3f3f6] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 rounded"
          >
            Not now
          </button>
        </div>
      </div>
    </aside>
  )
}
