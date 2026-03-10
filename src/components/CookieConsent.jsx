import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const CONSENT_KEY = 'classeapets_cookie_consent'

function getConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

function setConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // silently fail
  }
}

function grantMetaConsent() {
  if (typeof window.fbq === 'function') {
    window.fbq('consent', 'grant')
  }
}

function CookieConsent() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = getConsent()
    if (!consent) {
      setVisible(true)
    } else if (consent === 'accepted') {
      grantMetaConsent()
    }
  }, [])

  const handleAccept = () => {
    setConsent('accepted')
    grantMetaConsent()
    setVisible(false)
  }

  const handleReject = () => {
    setConsent('rejected')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-slate-700 bg-slate-900 px-4 py-4 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] sm:px-6 sm:py-5">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 sm:flex-row sm:gap-6">
        <p className="flex-1 text-center text-sm leading-relaxed text-slate-300 sm:text-left">
          Utilizamos cookies e tecnologias semelhantes, incluindo o Meta Pixel, para personalizar
          sua experiência e mensurar campanhas publicitárias. Ao aceitar, você concorda com o uso
          de cookies conforme nossa{' '}
          <Link to="/politica-de-privacidade" className="text-[#00BCD4] underline">
            Política de Privacidade
          </Link>.
        </p>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={handleReject}
            className="min-w-[120px] rounded-lg border border-slate-600 bg-transparent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-slate-800"
          >
            Rejeitar
          </button>
          <button
            type="button"
            onClick={handleAccept}
            className="min-w-[120px] rounded-lg border border-[#00BCD4] bg-[#00BCD4] px-5 py-2.5 text-sm font-bold text-slate-900 transition-colors hover:bg-[#00ACC1]"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  )
}

export default CookieConsent
