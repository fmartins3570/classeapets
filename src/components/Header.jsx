import { useEffect, useState } from 'react'
import { assetUrl } from '../utils/assetUrl'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#servicos', label: 'Servicos' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#cursos', label: 'Cursos' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--color-charcoal)]/95 shadow-[0_4px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-3 sm:px-8 md:py-4">
        {/* Logo */}
        <a href="#hero" className="relative z-10 inline-flex items-center !no-underline hover:opacity-90 hover:!no-underline">
          <img
            src={assetUrl('/images/optimized/logo-classeapets-transparent-v2.webp')}
            srcSet={`${assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} 320w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-480w.webp')} 480w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-640w.webp')} 640w`}
            sizes="(max-width: 640px) 56px, 72px"
            alt="Classe A Pets"
            className="w-[56px] object-contain sm:w-[72px]"
            decoding="async"
            fetchPriority="high"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-[0.85rem] font-semibold tracking-wide text-[var(--color-cream)]/80 !no-underline transition-colors duration-300 hover:text-[var(--color-honey)] hover:!no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            className="btn-primary ml-3 !rounded-full !px-6 !py-2.5 !text-[0.82rem] !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-honey)]/30 bg-transparent p-0 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((c) => !c)}
        >
          <div className="flex w-5 flex-col items-center gap-[5px]">
            <span
              className={`block h-[2px] w-full rounded-full bg-[var(--color-cream)] transition-all duration-300 ${
                menuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-[var(--color-cream)] transition-all duration-300 ${
                menuOpen ? 'scale-x-0 opacity-0' : ''
              }`}
            />
            <span
              className={`block h-[2px] w-full rounded-full bg-[var(--color-cream)] transition-all duration-300 ${
                menuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="main-nav"
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[var(--color-charcoal)]/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${
          menuOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="flex flex-col items-center gap-6">
          {links.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-light tracking-wide text-[var(--color-cream)] !no-underline transition-all duration-300 hover:text-[var(--color-honey)] hover:!no-underline"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contato"
            onClick={() => setMenuOpen(false)}
            className="btn-primary mt-4 !rounded-full !px-8 !py-3 !text-sm !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline"
          >
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  )
}

export default Header
