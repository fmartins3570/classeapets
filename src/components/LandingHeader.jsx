import { useEffect, useState } from 'react'
import { assetUrl } from '../utils/assetUrl'
import { SlideTabs } from './ui/SlideTabs'

const navLinks = [
  { href: '#entregaveis', label: 'O Curso' },
  { href: '#preco', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
]

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('hashchange', close)
    return () => window.removeEventListener('hashchange', close)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled
          ? 'bg-[var(--color-charcoal)]/80'
          : 'bg-[var(--color-charcoal)]/40'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-3 sm:px-8 md:py-4">
        <a href="#hero" className="relative z-10 inline-flex items-center !no-underline hover:opacity-90 hover:!no-underline">
          <img
            src={assetUrl('/images/optimized/logo-classeapets-transparent-v2.webp')}
            srcSet={`${assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} 320w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-480w.webp')} 480w`}
            sizes="56px"
            alt="Classe A Pets"
            className="w-[48px] object-contain sm:w-[56px]"
            decoding="async"
            fetchPriority="high"
          />
        </a>

        <nav className="hidden items-center gap-3 md:flex" aria-label="Navegacao principal">
          <SlideTabs items={navLinks} />
          <a
            href="#checkout"
            className="btn-primary ml-3 !rounded-full !px-6 !py-2.5 !text-[0.82rem] !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline"
          >
            Garantir Vaga
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-cyan)]/20 bg-transparent p-0 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((c) => !c)}
        >
          <div className="flex w-[18px] flex-col items-center gap-[4px]">
            <span className={`block h-[2px] w-full rounded-full bg-[var(--color-cinza-200)] transition-all duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-[var(--color-cinza-200)] transition-all duration-300 ${menuOpen ? 'scale-x-0 opacity-0' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-[var(--color-cinza-200)] transition-all duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      {/* Soft cyan glow beneath header */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 translate-y-full"
        style={{ background: 'linear-gradient(to bottom, rgba(46,222,240,0.07), rgba(46,222,240,0.02) 40%, transparent)' }}
        aria-hidden
      />

      {/* Mobile menu overlay */}
      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--color-charcoal)]/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <nav className="flex flex-col items-center gap-7">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-light tracking-wide text-[var(--color-cinza-200)] !no-underline transition-all duration-300 hover:text-[var(--color-cyan)] hover:!no-underline"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#checkout"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4 !rounded-full !px-8 !py-3 !text-sm !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline"
          >
            Garantir Vaga
          </a>
        </nav>
      </div>
    </header>
  )
}
