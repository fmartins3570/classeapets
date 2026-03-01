import { Suspense, lazy, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useScrollReveal } from './hooks/useScrollReveal'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Servicos from './components/Servicos'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'

const Sobre = lazy(() => import('./components/Sobre'))
const Depoimentos = lazy(() => import('./components/Depoimentos'))
const CursosDetalhe = lazy(() => import('./components/CursosDetalhe'))
const Metodos = lazy(() => import('./components/Metodos'))
const Galeria = lazy(() => import('./components/Galeria'))
const Faq = lazy(() => import('./components/Faq'))
const CtaFinal = lazy(() => import('./components/CtaFinal'))

function App() {
  const whatsappHref = 'https://wa.me/5511934066866'
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [isFooterVisible, setIsFooterVisible] = useState(false)

  useScrollReveal()

  useEffect(() => {
    const onScroll = () => {
      setShowBackToTop(window.scrollY > 280)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const footer = document.getElementById('site-footer')
    if (!footer || typeof IntersectionObserver === 'undefined') return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsFooterVisible(entry.isIntersecting)
      },
      { threshold: 0.18 },
    )

    observer.observe(footer)
    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const homeContent = (
    <>
      <a
        href="#hero"
        className="absolute left-4 top-[-100px] z-[1000] bg-[var(--color-preto)] px-4 py-2 font-medium text-[var(--color-branco)] transition-[top] duration-200 focus:top-4 focus:outline focus:outline-2 focus:outline-offset-2 focus:outline-[var(--color-turquesa)]"
      >
        Ir para o conteúdo
      </a>
      <Header />
      <main className="overflow-x-clip p-0 pb-24 md:pb-0">
        <Hero />
        <Stats />
        <Servicos />
        <Suspense fallback={null}>
          <Sobre />
          <Depoimentos />
          <CursosDetalhe />
          <Metodos />
          <Galeria />
          <Faq />
          <CtaFinal />
        </Suspense>
      </main>
      <Footer />
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
        className={`fixed right-4 z-[1200] inline-flex h-12 w-12 touch-manipulation items-center justify-center rounded-xl p-0 transition-all duration-300 sm:right-5 ${isFooterVisible ? 'bg-slate-900 text-white shadow-lg' : 'bg-white text-gray-700 shadow-lg'} ${showBackToTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'}`}
        style={{ bottom: 'calc(max(1rem, env(safe-area-inset-bottom)) + 4.25rem)' }}
      >
        <span aria-hidden="true" className="text-xl leading-none font-bold">↑</span>
      </button>
      <a
        href={whatsappHref}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-4 z-[1200] inline-flex h-14 w-14 touch-manipulation items-center justify-center rounded-full bg-[#25d366] text-[var(--color-branco)] !no-underline shadow-[0_10px_24px_rgba(37,211,102,0.45)] transition-transform duration-200 hover:scale-105 hover:!no-underline focus:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-branco)] focus-visible:ring-offset-2 focus-visible:ring-offset-[#25d366] sm:right-5"
        style={{ bottom: 'max(1rem, env(safe-area-inset-bottom))' }}
      >
        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7 text-white fill-current">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.49 0 .16 5.32.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.58 0 11.92-5.33 11.92-11.9a11.8 11.8 0 0 0-3.48-8.42Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.76.99 1-3.66-.24-.38A9.84 9.84 0 0 1 2.15 11.9C2.15 6.42 6.6 1.96 12.08 1.96c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.9 6.98c0 5.49-4.46 9.94-9.9 9.94Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49a9.1 9.1 0 0 1-1.68-2.08c-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.25 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      </a>
    </>
  )

  return (
    <Routes>
      <Route path="/" element={homeContent} />
      <Route path="/landing" element={<LandingPage />} />
    </Routes>
  )
}

export default App
