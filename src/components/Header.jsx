import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Home,
  Briefcase,
  UserCircle,
  MessageSquare,
  GraduationCap,
  Lightbulb,
  Images,
  Phone,
} from 'lucide-react'
import { assetUrl } from '../utils/assetUrl'
import { GlowMenu } from './ui/GlowMenu'

const tealGradient =
  'radial-gradient(circle, rgba(0,188,212,0.15) 0%, rgba(0,188,212,0.06) 50%, rgba(0,188,212,0) 100%)'

const menuItems = [
  { icon: Home, label: 'Home', href: '#hero', gradient: tealGradient, iconColor: 'text-[var(--color-accent)]' },
  { icon: Briefcase, label: 'Serviços', href: '#servicos', gradient: tealGradient, iconColor: 'text-[var(--color-accent)]' },
  { icon: UserCircle, label: 'Sobre', href: '#sobre', gradient: tealGradient, iconColor: 'text-[var(--color-accent)]' },
  { icon: MessageSquare, label: 'Depoimentos', href: '#depoimentos', gradient: tealGradient, iconColor: 'text-[var(--color-accent)]' },
  { icon: GraduationCap, label: 'Cursos', href: '#cursos', gradient: tealGradient, iconColor: 'text-[var(--color-accent)]' },
  { icon: Lightbulb, label: 'Mentoria', href: '#mentoria', gradient: tealGradient, iconColor: 'text-[var(--color-accent)]' },
  { icon: Images, label: 'Galeria', href: '#galeria', gradient: tealGradient, iconColor: 'text-[var(--color-accent)]' },
  { icon: Phone, label: 'Contato', href: '#contato', gradient: tealGradient, iconColor: 'text-[var(--color-accent)]' },
]

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  useEffect(() => {
    const closeMenu = () => setMenuOpen(false)
    window.addEventListener('hashchange', closeMenu)
    return () => window.removeEventListener('hashchange', closeMenu)
  }, [])

  /* Highlight active section on scroll */
  useEffect(() => {
    const ids = menuItems.map((i) => i.href.replace('#', ''))

    const onScroll = () => {
      const scrollY = window.scrollY + 120
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= scrollY) {
          setActiveItem(menuItems[i].label)
          return
        }
      }
      setActiveItem('Home')
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleItemClick = (label) => {
    setActiveItem(label)
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 bg-white/70 shadow-[0_4px_30px_rgba(0,0,0,0.06)] backdrop-blur-xl">
      <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-2.5">
        {/* Logo */}
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

        {/* Desktop — GlowMenu */}
        <div className="hidden lg:block">
          <GlowMenu
            items={menuItems}
            activeItem={activeItem}
            onItemClick={handleItemClick}
          />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="inline-flex min-h-10 min-w-10 touch-manipulation items-center justify-center rounded-xl border border-gray-200 bg-white/80 px-3 py-2 text-sm font-semibold text-gray-700 backdrop-blur transition-colors hover:bg-gray-100 lg:hidden"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          onClick={() => setMenuOpen((c) => !c)}
        >
          <div className="flex w-[18px] flex-col items-center gap-[4px]">
            <span className={`block h-[2px] w-full rounded-full bg-gray-700 transition-all duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-gray-700 transition-all duration-300 ${menuOpen ? 'scale-x-0 opacity-0' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-gray-700 transition-all duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </div>
        </button>

        {/* Mobile nav */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              id="main-nav"
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 top-full flex flex-col gap-1 border-t border-gray-100 bg-white/95 px-6 pb-5 pt-3 shadow-lg backdrop-blur-xl lg:hidden"
            >
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = item.label === activeItem
                return (
                  <a
                    key={item.href}
                    className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold !no-underline transition-colors hover:!no-underline ${
                      isActive
                        ? 'bg-[var(--color-accent)]/8 text-[var(--color-accent)]'
                        : 'text-gray-700 hover:bg-gray-50 hover:text-[var(--color-accent)]'
                    }`}
                    href={item.href}
                    onClick={() => handleItemClick(item.label)}
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </a>
                )
              })}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

export default Header
