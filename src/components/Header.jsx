import { useEffect, useState } from 'react'
import { assetUrl } from '../utils/assetUrl'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  const links = [
    { href: '#hero', label: 'Home' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#cursos', label: 'Cursos' },
    { href: '#galeria', label: 'Galeria' },
    { href: '#contato', label: 'Contato' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-3">
        <a
          href="#hero"
          className="flex shrink-0 items-center no-underline"
          aria-label="Classe A Pets - Ir ao início"
        >
          <img
            src={assetUrl('/images/optimized/logo-classeapets-transparent-v2.webp')}
            srcSet={`${assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} 320w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-480w.webp')} 480w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-640w.webp')} 640w`}
            sizes="(max-width: 640px) 48px, (max-width: 1024px) 56px, 64px"
            alt="Classe A Pets"
            className="h-8 w-auto object-contain sm:h-10 md:h-12"
            decoding="async"
            fetchPriority="high"
          />
        </a>
        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 touch-manipulation items-center justify-center rounded-lg bg-gray-100 px-3 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-200 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((c) => !c)}
        >
          Menu
        </button>
        <nav
          id="main-nav"
          className={`${menuOpen ? 'absolute left-0 right-0 top-full flex flex-col gap-1 border-t border-gray-100 bg-white px-6 pb-4 pt-2 shadow-md' : 'hidden'} md:relative md:top-auto md:flex md:flex-row md:items-center md:gap-1 md:border-0 md:bg-transparent md:px-0 md:pb-0 md:pt-0 md:shadow-none`}
        >
          {links.map((link) => (
            <a
              key={link.href}
              className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-700 !no-underline transition-colors hover:bg-gray-50 hover:text-[var(--color-accent)] hover:!no-underline"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

export default Header
