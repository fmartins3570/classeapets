import { useState, useEffect, lazy, Suspense } from 'react'
import {
  CheckCircle2,
  ChevronDown,
  Shield,
  Users,
  TrendingUp,
  DollarSign,
  MapPin,
  ArrowRight,
  Dog,
  FileText,
  MessageCircle,
  Award,
  Heart,
  Briefcase,
  Scissors,
  Sun,
  AlertTriangle,
  Scale,
  ShieldCheck,
  BookOpen,
} from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { assetUrl } from '../utils/assetUrl'
import { trackViewContent, trackContact } from '../utils/metaPixel'
import { createCheckout } from '../utils/checkout'

const BackgroundGradientAnimation = lazy(() => import('../components/ui/BackgroundGradientAnimation').then(m => ({ default: m.BackgroundGradientAnimation })))
const GlowingShadow = lazy(() => import('../components/ui/GlowingShadow').then(m => ({ default: m.GlowingShadow })))
const SlideTabs = lazy(() => import('../components/ui/SlideTabs').then(m => ({ default: m.SlideTabs })))

// Skip GlowingShadow on mobile to reduce Style & Layout work
function OptionalGlow({ children, className }) {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768
  if (isMobile) return children
  return <Suspense fallback={null}><GlowingShadow className={className}>{children}</GlowingShadow></Suspense>
}

/* ─────────────────── HEADER ─────────────────── */

const navLinks = [
  { href: '#programa', label: 'O Curso' },
  { href: '#diferencial', label: 'Diferencial' },
  { href: '#investimento', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
]

function DogWalkerHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const isMobileNav = typeof window !== 'undefined' && window.innerWidth < 768

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
        <a href="/" className="relative z-10 inline-flex items-center !no-underline hover:opacity-90 hover:!no-underline">
          <img
            src={assetUrl('/images/optimized/logo-classeapets-transparent-v2.webp')}
            srcSet={`${assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} 320w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-480w.webp')} 480w`}
            sizes="56px"
            alt="Classe A Pets"
            className="w-[48px] object-contain sm:w-[56px]"
            width={56}
            height={56}
            decoding="async"
            fetchPriority="high"
          />
        </a>

        <nav className="hidden items-center gap-3 md:flex" aria-label="Navegação principal">
          {!isMobileNav && <Suspense fallback={null}><SlideTabs items={navLinks} /></Suspense>}
          <a
            href="#investimento"
            className="btn-primary ml-3 !rounded-full !px-6 !py-2.5 !text-[0.82rem] !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline"
          >
            Garantir Vaga
          </a>
        </nav>

        <button
          type="button"
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-cyan)]/20 bg-transparent p-0 md:hidden"
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

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 translate-y-full"
        style={{ background: 'linear-gradient(to bottom, rgba(46,222,240,0.07), rgba(46,222,240,0.02) 40%, transparent)' }}
        aria-hidden
      />

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
            href="#investimento"
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

/* ─────────────────── HERO ─────────────────── */

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768)
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)')
    const handler = (e) => setIsMobile(!e.matches)
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])
  return isMobile
}

function HeroSection() {
  const isMobile = useIsMobile()

  return (
    <section id="hero" className="relative md:min-h-screen" style={{ background: 'linear-gradient(135deg, rgb(3,12,15), rgb(5,25,30))' }}>
      {!isMobile && (
        <Suspense fallback={null}>
          <BackgroundGradientAnimation
            gradientBackgroundStart="rgb(3, 12, 15)"
            gradientBackgroundEnd="rgb(5, 25, 30)"
            firstColor="10, 70, 80"
            secondColor="15, 90, 100"
            thirdColor="0, 60, 70"
            fourthColor="20, 80, 90"
            fifthColor="10, 65, 75"
            pointerColor="15, 85, 95"
            containerClassName="!h-auto !absolute !inset-0"
            className="!absolute !inset-0"
          />
        </Suspense>
      )}

      <div className="relative z-10 px-4 pb-10 pt-22 sm:px-8 sm:pb-16 sm:pt-32 md:pb-24 lg:pt-36">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Mobile: image first, then text */}
          <div className="relative flex justify-center md:order-2 md:justify-end">
            <div className="relative w-[50vw] max-w-[200px] sm:w-[260px] md:w-[380px] lg:w-[440px]">
              <img
                src={assetUrl('/images/optimized/servico-passeador-640w.webp')}
                srcSet={`${assetUrl('/images/optimized/servico-passeador-480w.webp')} 480w, ${assetUrl('/images/optimized/servico-passeador-640w.webp')} 640w, ${assetUrl('/images/optimized/servico-passeador-960w.webp')} 960w`}
                sizes="(max-width: 768px) 200px, 440px"
                alt="Brenno Rodrigues — Dog Walker Profissional passeando com cães"
                className="relative z-10 h-auto w-full rounded-2xl object-cover shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                width={640}
                height={640}
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Text */}
          <div className="text-center md:order-1 md:text-left">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/6 px-3.5 py-1.5 backdrop-blur-sm sm:mb-8 sm:gap-2.5 sm:px-5 sm:py-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-cyan)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-cyan)]" />
              </span>
              <span className="text-[0.75rem] font-semibold leading-tight text-[var(--color-cyan)] sm:text-[0.82rem]">
                Vagas Limitadas — Presencial em SP
              </span>
            </div>

            <h1 className="mb-4 !text-[1.6rem] !leading-[1.18] !text-white sm:mb-6 sm:!text-[2rem] md:!text-[2.5rem] lg:!text-[3.2rem]">
              Torne-se Dog Walker Profissional e{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--gradient-cyan)' }}
              >
                fature de R$ 4 a 7 mil/mês.
              </span>
            </h1>

            <p className="mx-auto mb-6 max-w-[540px] text-[0.9rem] leading-relaxed text-[var(--color-cinza-400)] sm:mb-10 sm:text-[1.1rem] md:mx-0 md:text-[1.05rem]">
              O único curso de Dog Walker ministrado por um adestrador profissional.
              Você não aprende só a passear — aprende a ENTENDER o cão.
            </p>

            <a
              href="#investimento"
              className="btn-primary inline-flex min-h-[48px] w-full items-center justify-center gap-2.5 !rounded-full !px-8 !py-3 !text-[0.88rem] !font-bold !no-underline hover:!no-underline sm:min-h-[56px] sm:w-auto sm:!px-10 sm:!py-4 sm:!text-base"
            >
              Quero me tornar Dog Walker
              <ArrowRight className="h-4 w-4" aria-hidden />
            </a>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:mt-10 sm:gap-6 md:justify-start">
              {[
                { icon: Shield, text: 'Certificação profissional' },
                { icon: Dog, text: 'Prática real com cães' },
                { icon: MapPin, text: 'Presencial em São Paulo' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  <item.icon className="h-3.5 w-3.5 text-[var(--color-cyan-muted)]/60 sm:h-4 sm:w-4" />
                  <span className="text-[0.72rem] font-medium text-[var(--color-cinza-500)] sm:text-[0.8rem]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-20 sm:h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-cream))' }}
        aria-hidden
      />
    </section>
  )
}

/* ─────────────────── NÚMEROS DO MERCADO ─────────────────── */

function NumerosMercado() {
  useScrollReveal()

  return (
    <section className="bg-[var(--color-cream)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label justify-center">O Mercado</span>
          <h2 className="mx-auto max-w-[550px] !text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            A profissão que não para de crescer
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4" data-reveal data-reveal-stagger>
          {[
            {
              icon: DollarSign,
              value: 'R$ 30–80',
              label: 'por passeio de 1 hora',
              accent: true,
            },
            {
              icon: TrendingUp,
              value: 'R$ 4–7 mil',
              mobileValue: 'R$ 4–7 mil',
              label: 'renda mensal com 5 cães/dia',
              accent: false,
            },
            {
              icon: Sun,
              value: '100%',
              label: 'ao ar livre, no seu horário',
              accent: false,
            },
            {
              icon: Users,
              value: '62 milhões',
              label: 'de cães no Brasil (demanda enorme)',
              accent: false,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className={`group relative overflow-hidden rounded-2xl border p-4 transition-all duration-500 hover:-translate-y-1 sm:p-6 lg:p-8 ${
                stat.accent
                  ? 'border-[var(--color-cyan-muted)]/20 bg-[var(--color-cyan-muted)]/5'
                  : 'border-[var(--color-cinza-200)] bg-[var(--color-branco)]'
              }`}
            >
              <div className="relative z-10">
                <div className={`mb-2.5 inline-flex rounded-xl p-2 sm:mb-3 sm:p-2.5 ${stat.accent ? 'bg-[var(--color-cyan-muted)]/15' : 'bg-[var(--color-cyan-muted)]/8'}`}>
                  <stat.icon className={`h-4 w-4 sm:h-5 sm:w-5 ${stat.accent ? 'text-[var(--color-cyan-muted)]' : 'text-[var(--color-cyan-muted)]'}`} />
                </div>
                <p
                  className="text-xl font-bold tracking-tight sm:text-2xl lg:text-3xl bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--gradient-cyan)' }}
                >
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-medium leading-relaxed text-[var(--color-texto-muted)] sm:text-sm">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

/* ─────────────────── REGULAMENTAÇÃO ─────────────────── */

function Regulamentacao() {
  useScrollReveal()

  const exigencias = [
    {
      icon: BookOpen,
      title: 'Treinamento obrigatório',
      text: 'Certificação em comportamento canino, técnicas de manejo e sinais de emergência.',
    },
    {
      icon: Scale,
      title: 'Licença profissional',
      text: 'Licença emitida pelo governo federal com renovação a cada 2 anos.',
    },
    {
      icon: ShieldCheck,
      title: 'Avaliação prática',
      text: 'Prova prática com avaliador credenciado para comprovar competência.',
    },
  ]

  return (
    <section className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28" style={{ background: 'var(--gradient-section-dark)' }}>
      <div
        className="pointer-events-none absolute left-[-10%] bottom-[10%] h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.2), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1000px]">
        {/* Alert badge */}
        <div className="mb-6 flex justify-center" data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-vermelho)]/25 bg-[var(--color-vermelho)]/8 px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--color-vermelho)] uppercase">
            <AlertTriangle className="h-3.5 w-3.5" />
            Atenção — mudança na legislação
          </span>
        </div>

        <div className="mb-4 text-center" data-reveal="up">
          <h2 className="mx-auto max-w-[700px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            Nova lei vai tornar a certificação de Dog Walker{' '}
            <span className="text-[var(--color-vermelho)]">OBRIGATÓRIA</span>{' '}
            no Brasil
          </h2>
        </div>

        <p className="mx-auto mb-10 max-w-[600px] text-center text-[0.9rem] leading-relaxed text-[var(--color-cinza-400)] sm:mb-14 sm:text-[0.95rem]" data-reveal>
          A Câmara dos Deputados aprovou o Projeto de Lei que regulamenta a profissão de Dog Walker e
          Pet Sitter em todo o território nacional. Quem não se adequar ficará{' '}
          <strong className="text-white">impedido de atuar legalmente</strong>.
        </p>

        {/* What the law requires */}
        <div className="mb-10 sm:mb-14">
          <p className="mb-6 text-center text-xs font-bold tracking-widest text-[var(--color-vermelho)] uppercase sm:mb-8" data-reveal>
            O que a lei vai exigir
          </p>

          <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6" data-reveal-stagger>
            {exigencias.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-[var(--color-vermelho)]/15 bg-[var(--color-vermelho)]/[0.04] p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6"
              >
                <div className="mb-3 inline-flex rounded-xl bg-[var(--color-vermelho)]/10 p-2.5">
                  <item.icon className="h-5 w-5 text-[var(--color-vermelho)]" />
                </div>
                <h3 className="mb-1.5 !text-[0.95rem] font-bold !text-white sm:!text-[1.05rem]">{item.title}</h3>
                <p className="text-[0.82rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[0.88rem]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Classe A Pets = the solution */}
        <div className="rounded-2xl border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/[0.04] p-6 sm:rounded-3xl sm:p-8 md:p-10" data-reveal="scale">
          <div className="flex flex-col items-center gap-6 md:flex-row md:gap-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl sm:h-20 sm:w-20" style={{ background: 'var(--gradient-cyan)' }}>
              <ShieldCheck className="h-8 w-8 text-white sm:h-10 sm:w-10" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-2 !text-[1.15rem] font-bold !text-white sm:!text-[1.3rem]">
                O Curso de Dog Walker da Classe A Pets já te prepara para TUDO isso
              </h3>
              <p className="mb-4 text-[0.88rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[0.95rem]">
                Nosso programa cobre todas as exigências do projeto de lei: comportamento canino,
                técnicas de manejo, segurança, sinais de emergência e certificação profissional.
                Quem se formar agora estará <strong className="text-[var(--color-cyan)]">à frente de 95% do mercado</strong> quando
                a lei entrar em vigor.
              </p>

              <div className="grid grid-cols-2 gap-x-3 gap-y-2 text-[0.78rem] font-medium text-[var(--color-cinza-400)] sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-6 sm:text-[0.82rem] md:justify-start">
                {[
                  'Comportamento canino',
                  'Técnicas de manejo',
                  'Sinais de emergência',
                  'Certificação',
                ].map((item) => (
                  <span key={item} className="inline-flex items-center gap-1.5">
                    <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[var(--color-success)]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-center sm:mt-8 md:justify-start md:pl-[104px]">
            <a
              href="#investimento"
              className="btn-primary group inline-flex w-full items-center justify-center gap-3 !rounded-full !px-6 !py-3.5 !text-[0.82rem] !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline sm:w-auto sm:!px-8 sm:!text-[0.92rem]"
            >
              Garantir minha certificação agora
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>

        <p className="mt-6 text-center text-[0.72rem] text-[var(--color-cinza-500)] sm:mt-8 sm:text-[0.75rem]">
          Fonte: Comissão de Meio Ambiente da Câmara dos Deputados — Projeto de Lei aprovado em dez/2025.
          Pendente de votação no plenário. A Classe A Pets acompanha ativamente a tramitação.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── PARA QUEM É ─────────────────── */

const publicoItems = [
  {
    icon: Briefcase,
    title: 'Insatisfeito com o CLT',
    text: 'Quer sair do escritório e viver de algo que ama, com horário flexível.',
  },
  {
    icon: Heart,
    title: 'Amante de cães',
    text: 'Ama animais e quer transformar essa paixão em profissão real.',
  },
  {
    icon: Scissors,
    title: 'Profissional pet',
    text: 'Já trabalha com pets e quer adicionar mais um serviço rentável.',
  },
  {
    icon: Dog,
    title: 'Dog Walker amador',
    text: 'Já passeia com cães mas quer se profissionalizar, cobrar mais e ter segurança.',
  },
]

function PublicoAlvo() {
  useScrollReveal()

  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      <div
        className="pointer-events-none absolute left-[-10%] top-[30%] h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.25), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label section-label-light justify-center">Para quem é</span>
          <h2 className="mx-auto max-w-[550px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            Esse curso foi feito pra você que...
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6" data-reveal-stagger>
          {publicoItems.map((item) => (
            <OptionalGlow key={item.title} className="rounded-2xl">
              <article className="card-dark group flex flex-row items-start gap-4 p-5 hover:border-transparent sm:flex-col sm:items-center sm:p-6 sm:text-center">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 sm:mb-4 sm:h-14 sm:w-14 sm:rounded-2xl" style={{ background: 'var(--gradient-cyan-subtle)' }}>
                  <item.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1 !text-[1.05rem] !text-white sm:mb-2 sm:!text-[1.15rem]">{item.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[0.9rem]">{item.text}</p>
                </div>
              </article>
            </OptionalGlow>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── COMPARATIVO ─────────────────── */

function Comparativo() {
  useScrollReveal()

  const items = [
    { amador: 'Cobra R$ 15–20 por passeio', profissional: 'Cobra R$ 60–80 por passeio' },
    { amador: 'Sem contrato, sem segurança', profissional: 'Contrato, ficha e relatório profissional' },
    { amador: 'Não sabe lidar com cão reativo', profissional: 'Preparado pra qualquer situação' },
    { amador: 'Desiste em 6 meses', profissional: 'Constrói carreira sólida e lucrativa' },
    { amador: 'Quando a lei sair: impedido de atuar', profissional: 'Certificado ANTES da lei exigir' },
  ]

  return (
    <section className="bg-[var(--color-cream)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label justify-center">Comparativo</span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            Dog Walker amador vs. profissional
          </h2>
        </div>

        {/* Mobile: stacked cards */}
        <div className="mx-auto max-w-md space-y-3 sm:hidden" data-reveal-stagger>
          {items.map((item, i) => (
            <div key={i} className="overflow-hidden rounded-xl border border-[var(--color-cinza-200)]">
              <div className="flex items-start gap-2.5 border-b border-[var(--color-cinza-200)]/60 bg-[var(--color-vermelho)]/[0.04] px-4 py-3">
                <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-vermelho)]/10">
                  <span className="text-[0.65rem] font-bold text-[var(--color-vermelho)]">✕</span>
                </span>
                <p className="text-[0.85rem] leading-snug text-[var(--color-texto-muted)]">{item.amador}</p>
              </div>
              <div className="flex items-start gap-2.5 bg-[var(--color-cyan-muted)]/[0.04] px-4 py-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-success)]" />
                <p className="text-[0.85rem] font-semibold leading-snug text-[var(--color-charcoal)]">{item.profissional}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: table grid */}
        <div className="mx-auto hidden max-w-3xl sm:block" data-reveal>
          <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-0">
            <div className="rounded-tl-2xl border-b border-[var(--color-cinza-200)] bg-[var(--color-vermelho)]/5 px-4 py-4 sm:px-6">
              <p className="text-xs font-bold tracking-widest text-[var(--color-vermelho)] uppercase">Amador</p>
            </div>
            <div className="border-b border-[var(--color-cinza-200)] bg-transparent px-2" />
            <div className="rounded-tr-2xl border-b border-[var(--color-cyan-muted)]/20 bg-[var(--color-cyan-muted)]/5 px-4 py-4 sm:px-6">
              <p className="text-xs font-bold tracking-widest text-[var(--color-cyan-muted)] uppercase">Profissional</p>
            </div>

            {items.map((item, i) => (
              <div key={i} className="contents">
                <div className={`flex items-center border-b border-[var(--color-cinza-200)]/40 bg-[var(--color-vermelho)]/[0.02] px-4 py-4 sm:px-6 ${i === items.length - 1 ? 'rounded-bl-2xl' : ''}`}>
                  <p className="text-sm font-medium leading-relaxed text-[var(--color-texto-muted)]">{item.amador}</p>
                </div>
                <div className="flex items-center justify-center border-b border-[var(--color-cinza-200)]/40 px-2">
                  <ArrowRight className="h-4 w-4 text-[var(--color-cyan-muted)]/60" />
                </div>
                <div className={`flex items-center border-b border-[var(--color-cyan-muted)]/10 bg-[var(--color-cyan-muted)]/[0.03] px-4 py-4 sm:px-6 ${i === items.length - 1 ? 'rounded-br-2xl' : ''}`}>
                  <p className="text-sm font-semibold leading-relaxed text-[var(--color-charcoal)]">{item.profissional}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PROGRAMA DO CURSO ─────────────────── */

const programaModulos = [
  {
    modulo: 'Módulo 1',
    title: 'Comportamento Canino',
    items: [
      'Linguagem corporal e sinais de estresse',
      'Temperamentos e compatibilidade entre cães',
      'Manejo entre cães',
      'Identificação de cães reativos',
    ],
  },
  {
    modulo: 'Módulo 2',
    title: 'Segurança e Emergências',
    items: [
      'Protocolo para brigas entre cães',
      'Sinais de emergência',
      'Fuga, atropelamento e acidentes',
      'Responsabilidade legal e seguros',
    ],
  },
  {
    modulo: 'Módulo 3',
    title: 'Negócio e Clientes',
    items: [
      'Apresentação profissional para seu cliente',
      'Precificação e pacotes de serviço',
      'Contratos e fichas profissionais',
      'Marketing e posicionamento digital',
    ],
  },
]

function Programa() {
  useScrollReveal()

  return (
    <section
      id="programa"
      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      <div
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.25), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1000px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label section-label-light justify-center">O Curso</span>
          <h2 className="mx-auto mb-3 max-w-[600px] !text-[1.5rem] !text-white sm:mb-4 sm:!text-[1.75rem] md:!text-[2.2rem]">
            Programa completo — da teoria à prática na rua
          </h2>
          <p className="mx-auto max-w-[500px] text-[0.9rem] text-[var(--color-cinza-400)] sm:text-[0.95rem]">
            Enquanto outros cursos te ensinam o básico em poucas horas, aqui você sai preparado pra QUALQUER situação.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6" data-reveal-stagger>
          {programaModulos.map((fase) => (
            <OptionalGlow key={fase.modulo} className="rounded-2xl">
              <div className="card-dark group h-full p-5 hover:border-transparent sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: 'var(--gradient-cyan-subtle)' }}
                  >
                    <CheckCircle2 className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <div>
                    <span className="block text-[0.72rem] font-bold uppercase tracking-widest text-[var(--color-cyan)]">
                      {fase.modulo}
                    </span>
                    <h3 className="!text-[1.05rem] !text-white sm:!text-[1.15rem]">{fase.title}</h3>
                  </div>
                </div>
                <ul className="space-y-2.5">
                  {fase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-success)]" aria-hidden />
                      <span className="text-[0.85rem] leading-snug text-[var(--color-cinza-400)] sm:text-[0.9rem]">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </OptionalGlow>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 sm:mt-12 sm:gap-10" data-reveal="fade">
          {[
            { value: 'Presencial', label: 'em São Paulo' },
            { value: 'Prática', label: 'com cães reais' },
            { value: 'Turmas', label: 'reduzidas' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-1.5 sm:gap-2">
              <span
                className="text-base font-bold bg-clip-text text-transparent sm:text-xl"
                style={{ backgroundImage: 'var(--gradient-cyan)' }}
              >
                {s.value}
              </span>
              <span className="text-[0.72rem] font-medium text-[var(--color-cinza-500)] sm:text-[0.82rem]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── DIFERENCIAL ─────────────────── */

function Diferencial() {
  useScrollReveal()

  return (
    <section id="diferencial" className="bg-[var(--color-cream)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6 text-center md:hidden" data-reveal="up">
          <span className="section-label justify-center">O Diferencial</span>
          <h2 className="!text-[1.5rem] sm:!text-[1.75rem]">
            Por que esse curso é diferente de todos os outros?
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-16">
          <div className="flex items-center gap-5 md:block" data-reveal="left">
            <img
              src={assetUrl('/images/optimized/foto-brenno-480w.webp')}
              srcSet={`${assetUrl('/images/optimized/foto-brenno-320w.webp')} 320w, ${assetUrl('/images/optimized/foto-brenno-480w.webp')} 480w, ${assetUrl('/images/optimized/foto-brenno-640w.webp')} 640w`}
              sizes="(max-width: 640px) 120px, (max-width: 768px) 260px, 300px"
              alt="Adestrador Brenno Rodrigues"
              className="w-[120px] shrink-0 rounded-2xl shadow-[var(--shadow-md)] sm:mx-auto sm:mb-6 sm:w-auto sm:max-w-[260px]"
              width={480}
              height={480}
              loading="lazy"
              decoding="async"
            />
            <div className="min-w-0 flex-1 sm:hidden">
              <p className="mb-1 text-[0.88rem] font-bold text-[var(--color-charcoal)]">Brenno Rodrigues</p>
              <p className="text-[0.78rem] leading-snug text-[var(--color-texto-muted)]">
                Adestrador profissional. Dog Walker desde 2017.
              </p>
              <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
                {[
                  { value: '+500', label: 'cães' },
                  { value: '+250', label: 'famílias' },
                  { value: '5+', label: 'anos' },
                ].map((s) => (
                  <div key={s.label} className="flex items-center gap-1">
                    <span className="text-[0.82rem] font-bold bg-clip-text text-transparent" style={{ backgroundImage: 'var(--gradient-cyan)' }}>{s.value}</span>
                    <span className="text-[0.68rem] font-medium text-[var(--color-texto-muted)]">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div data-reveal="right">
            <div className="hidden md:block">
              <span className="section-label mb-4">O Diferencial</span>
              <h2 className="mb-6">
                Por que esse curso é diferente de todos os outros?
              </h2>
            </div>

            <p className="mb-4 text-[0.9rem] leading-relaxed text-[var(--color-texto-muted)] sm:mb-5 sm:text-[1.05rem]">
              Eu sou o Brenno Rodrigues — adestrador profissional. Comecei minha carreira no mundo pet
              como Dog Walker em 2017 e de lá pra cá já transformei a vida de +500 cães e +250 famílias.
            </p>
            <p className="mb-4 text-[0.9rem] leading-relaxed text-[var(--color-texto-muted)] sm:mb-5 sm:text-[1.05rem]">
              Diferente de outros cursos de Dog Walker, aqui você aprende com quem ENTENDE de comportamento canino.
              Isso significa que você sai do curso não só sabendo passear — mas sabendo LER o cão,
              prevenir problemas e entregar muito mais valor pro tutor.
            </p>
            <p className="mb-6 text-[0.9rem] font-semibold leading-relaxed text-[var(--color-charcoal)] sm:mb-8 sm:text-[1.05rem]">
              Dog Walker que entende de adestramento cobra 3x mais. E nunca falta cliente.
            </p>

            <div className="hidden flex-wrap gap-5 sm:flex sm:gap-6">
              {[
                { value: '+500', label: 'cães' },
                { value: '+250', label: 'famílias' },
                { value: '5+', label: 'anos' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span
                    className="text-lg font-bold bg-clip-text text-transparent sm:text-xl"
                    style={{ backgroundImage: 'var(--gradient-cyan)' }}
                  >
                    {s.value}
                  </span>
                  <span className="text-[0.78rem] font-medium text-[var(--color-texto-muted)] sm:text-[0.8rem]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── INCLUSO ─────────────────── */

const inclusoItems = [
  {
    icon: Users,
    title: 'Estágio Presencial',
    description: 'Participação do estágio presencial com acompanhamento do instrutor.',
  },
  {
    icon: Award,
    title: 'Certificado Profissional',
    description: 'Certificação reconhecida de Dog Walker Profissional.',
  },
  {
    icon: FileText,
    title: 'Kit Profissional Completo',
    description: 'Modelos de contrato, ficha de avaliação, relatório para tutores e tabela de preços.',
  },
  {
    icon: MessageCircle,
    title: 'Grupo VIP no WhatsApp',
    description: 'Suporte pós-curso + networking com outros dog walkers formados.',
  },
  {
    icon: Dog,
    title: 'Dia de Prática em Campo',
    description: 'Estágio prático real na rua com cães de diferentes temperamentos.',
  },
]

function Incluso() {
  useScrollReveal()

  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      <div className="relative mx-auto max-w-[900px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label section-label-light justify-center">O que está incluso</span>
          <h2 className="mx-auto mb-3 max-w-[500px] !text-[1.5rem] !text-white sm:mb-4 sm:!text-[1.75rem] md:!text-[2.2rem]">
            Além do curso, você ainda leva:
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6" data-reveal-stagger>
          {inclusoItems.map((item) => (
            <OptionalGlow key={item.title} className="rounded-2xl">
              <div className="card-dark group flex gap-4 p-5 hover:border-transparent sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-colors duration-300 sm:h-12 sm:w-12" style={{ background: 'var(--gradient-cyan-subtle)' }}>
                  <item.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" aria-hidden />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="!text-[0.95rem] !text-white sm:!text-[1.05rem]">{item.title}</h3>
                    <span className="rounded-full bg-[var(--color-success)]/10 px-2 py-0.5 text-[0.68rem] font-bold text-[var(--color-success)]">
                      INCLUSO
                    </span>
                  </div>
                  <p className="text-[0.82rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[0.88rem]">{item.description}</p>
                </div>
              </div>
            </OptionalGlow>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── INVESTIMENTO ─────────────────── */

function Investimento() {
  useScrollReveal()
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    if (loading) return
    setLoading(true)
    try {
      trackContact('LP Dog Walker CTA')
      await createCheckout('curso-dog-walker')
    } catch {
      setLoading(false)
    }
  }

  return (
    <section
      id="investimento"
      className="bg-[var(--color-cream)] px-4 py-14 sm:px-8 sm:py-20 md:py-28"
    >
      <div className="relative mx-auto max-w-[560px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label justify-center">Investimento</span>
          <h2 className="!text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            Valor que se paga no primeiro mês de trabalho
          </h2>
        </div>

        {/* Included items */}
        <div className="mb-6 space-y-2.5 sm:mb-8" data-reveal="fade">
          {[
            'Curso Presencial completo',
            'Dia de prática em campo com cães reais',
            'Certificado Profissional',
            'Kit completo: contrato, ficha, relatório, tabela de preços',
            'Grupo VIP WhatsApp + suporte pós-curso',
          ].map((label) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-[var(--color-cinza-200)] bg-[var(--color-branco)] px-4 py-2.5 sm:px-5 sm:py-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-success)]" aria-hidden />
              <span className="text-[0.82rem] text-[var(--color-texto-muted)] sm:text-[0.88rem]">{label}</span>
            </div>
          ))}
        </div>

        <div className="pt-4" data-reveal="scale">
          <div
            id="checkout"
            className="relative rounded-2xl border-2 border-[var(--color-cyan-muted)]/30 bg-[var(--color-branco)] shadow-[0_0_60px_rgba(46,222,240,0.08)] scroll-mt-28 sm:rounded-3xl"
          >
            <span
              className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-widest text-white shadow-md sm:px-5 sm:py-2 sm:text-[0.78rem]"
              style={{ background: 'var(--gradient-cyan)' }}
            >
              Formação completa
            </span>

            <div className="px-5 pb-6 pt-8 sm:px-10 sm:pb-10 sm:pt-12">
              <p className="mb-1 text-center text-[0.82rem] font-medium text-[var(--color-texto-muted)] sm:text-[0.88rem]">
                ou em até
              </p>

              <p
                className="mt-2 text-center text-[1.65rem] font-bold bg-clip-text text-transparent sm:mt-3 sm:text-3xl md:text-4xl"
                style={{
                  backgroundImage: 'var(--gradient-cyan)',
                  fontFamily: "'DM Serif Display', Georgia, serif",
                }}
              >
                12x de R$ 37,65
              </p>

              <div className="mx-auto my-4 h-px w-16 bg-[var(--color-cinza-200)] sm:my-5" />

              <p className="text-center text-[0.95rem] font-semibold text-[var(--color-charcoal)] sm:text-[1.05rem]">
                À vista:{' '}
                <span
                  className="text-[1.15rem] font-bold bg-clip-text text-transparent sm:text-[1.3rem]"
                  style={{ backgroundImage: 'var(--gradient-cyan)' }}
                >
                  R$ 370,00
                </span>
                <span className="ml-2 inline-flex items-center rounded-full bg-[var(--color-success)]/10 px-2.5 py-0.5 text-[0.72rem] font-bold text-[var(--color-success)]">
                  18% OFF
                </span>
              </p>

              <div className="mx-auto my-5 h-px w-full bg-[var(--color-cinza-200)] sm:my-6" />

              <button
                type="button"
                onClick={handleCheckout}
                disabled={loading}
                className="btn-primary inline-flex min-h-[50px] w-full items-center justify-center gap-2 !rounded-full !px-4 !py-3.5 !text-[0.88rem] !font-bold !no-underline hover:!no-underline sm:min-h-[56px] sm:!px-6 sm:!py-4 sm:!text-[0.95rem] disabled:opacity-60"
              >
                {loading ? 'Redirecionando...' : 'Quero garantir minha vaga'}
              </button>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:mt-5 sm:gap-4">
                {['Certificação profissional', 'Pagamento seguro', 'Vagas limitadas'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-[var(--color-success)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[0.72rem] text-[var(--color-cinza-500)] sm:text-[0.8rem]">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── FAQ ─────────────────── */

const faqItems = [
  {
    pergunta: 'Preciso ter experiência com cães?',
    resposta:
      'Não. O curso foi desenhado para ensinar do zero. Você não precisa de experiência prévia com passeio de cães ou adestramento — o método te prepara para qualquer cenário.',
  },
  {
    pergunta: 'Quanto tempo até começar a faturar?',
    resposta:
      'Muitos alunos conseguem os primeiros clientes ainda durante o curso, usando as estratégias de captação que ensinamos. Resultados variam conforme dedicação e região.',
  },
  {
    pergunta: 'Qual a diferença desse curso pros outros?',
    resposta:
      'Esse é o único curso de Dog Walker ministrado por um adestrador profissional. Você aprende não só técnicas de passeio, mas comportamento canino completo — o que te permite cobrar mais e entregar um serviço superior a 95% do mercado.',
  },
  {
    pergunta: 'É verdade que a certificação vai ser obrigatória?',
    resposta:
      'Sim. A Câmara dos Deputados aprovou um projeto de lei que regulamenta a profissão de Dog Walker e Pet Sitter no Brasil, exigindo certificação obrigatória em comportamento canino e técnicas de manejo. Quem se certificar agora sai na frente.',
  },
  {
    pergunta: 'Quanto ganha um Dog Walker em São Paulo?',
    resposta:
      'Um Dog Walker profissional em SP cobra de R$ 30 a R$ 80 por passeio de 1 hora. Com 5 cães por dia, a renda mensal fica entre R$ 4.400 e R$ 7.040. Resultados variam conforme dedicação, região e experiência.',
  },
  {
    pergunta: 'Consigo conciliar com meu trabalho atual?',
    resposta:
      'Sim. Os passeios podem ser feitos nos horários que você escolher — manhã, tarde ou noite. Muitos alunos começam como renda extra e fazem a transição completa quando se sentem prontos.',
  },
  {
    pergunta: 'Recebo certificado?',
    resposta:
      'Sim. Você recebe certificado de conclusão de Dog Walker Profissional. Com a regulamentação em andamento, ter certificação será um diferencial (e possivelmente obrigatório).',
  },
  {
    pergunta: 'O que acontece se um cão brigar durante o passeio?',
    resposta:
      'Esse é exatamente o tipo de situação que cobrimos no módulo de Segurança e Emergências. Você aprende protocolos testados para prevenir e lidar com brigas, fugas, e qualquer emergência durante o passeio.',
  },
]

function FAQ() {
  useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section
      id="faq"
      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      <div className="relative mx-auto max-w-[700px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label section-label-light justify-center">FAQ</span>
          <h2 className="!text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">Perguntas frequentes</h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] sm:rounded-2xl" data-reveal="fade">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-white/5 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full min-h-[52px] items-center justify-between gap-3 bg-transparent px-4 py-4 text-left text-[0.92rem] font-semibold text-white transition-colors hover:bg-white/5 !rounded-none sm:gap-4 sm:px-6 sm:py-5 sm:text-base"
                aria-expanded={openIndex === index}
                aria-controls={`faq-dw-answer-${index}`}
                id={`faq-dw-question-${index}`}
              >
                {item.pergunta}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--color-cyan)] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              <div
                id={`faq-dw-answer-${index}`}
                role="region"
                aria-labelledby={`faq-dw-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-64' : 'max-h-0'}`}
              >
                <p className="px-4 pb-4 text-[0.88rem] leading-relaxed text-[var(--color-cinza-400)] sm:px-6 sm:pb-5 sm:text-[0.95rem]">
                  {item.resposta}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── WHATSAPP CTA ─────────────────── */

function WhatsAppCta() {
  return (
    <section className="bg-[#25d366]/5 px-4 py-10 sm:px-8 sm:py-14">
      <div className="mx-auto max-w-[600px] text-center" data-reveal="scale">
        <p className="mb-2 text-sm font-semibold tracking-widest text-[#25d366] uppercase">
          Ficou com dúvida?
        </p>
        <h2 className="mb-3 text-xl font-bold text-[var(--color-charcoal)] sm:text-2xl">
          Fale diretamente com o Brenno
        </h2>
        <p className="mb-6 text-sm leading-relaxed text-[var(--color-texto-muted)] sm:text-base">
          Tire suas dúvidas sobre o curso, próximas turmas ou formas de pagamento.
        </p>
        <a
          href="https://wa.me/5511934066866?text=Ol%C3%A1%20Brenno%2C%20tenho%20interesse%20no%20curso%20de%20Dog%20Walker!"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact('LP Dog Walker WhatsApp')}
          className="inline-flex items-center gap-3 rounded-full bg-[#25d366] px-8 py-3.5 text-sm font-bold text-white !no-underline shadow-lg transition-transform duration-200 hover:scale-105 hover:!no-underline sm:text-base"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.49 0 .16 5.32.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.58 0 11.92-5.33 11.92-11.9a11.8 11.8 0 0 0-3.48-8.42Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.76.99 1-3.66-.24-.38A9.84 9.84 0 0 1 2.15 11.9C2.15 6.42 6.6 1.96 12.08 1.96c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.9 6.98c0 5.49-4.46 9.94-9.9 9.94Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49a9.1 9.1 0 0 1-1.68-2.08c-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.25 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
          Falar com o Brenno no WhatsApp
        </a>
      </div>
    </section>
  )
}

/* ─────────────────── CTA FINAL ─────────────────── */

function CtaFinal() {
  useScrollReveal()

  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      <div className="relative mx-auto max-w-[600px] text-center" data-reveal="scale">
        <div className="mb-6 inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-3 sm:mb-8 sm:rounded-2xl sm:px-6 sm:py-4">
          <Shield className="h-7 w-7 text-[var(--color-success)] sm:h-8 sm:w-8" />
          <div className="text-left">
            <span className="block text-[0.82rem] font-bold text-white sm:text-sm">Certificação profissional</span>
            <span className="text-[0.72rem] text-[var(--color-cinza-400)] sm:text-xs">reconhecida no mercado</span>
          </div>
        </div>

        <p className="mb-6 text-[0.95rem] leading-relaxed text-[var(--color-cinza-400)] sm:mb-8 sm:text-[1.1rem]">
          O mercado pet está explodindo, a regulamentação está chegando, e as vagas são limitadas.
          Não espere — quem se profissionalizar agora vai dominar.
        </p>

        <a
          href="https://wa.me/5511934066866?text=Ol%C3%A1%20Brenno%2C%20quero%20garantir%20minha%20vaga%20no%20curso%20de%20Dog%20Walker!"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackContact('LP Dog Walker CTA Final')}
          className="btn-primary inline-flex min-h-[48px] w-full items-center justify-center gap-2 !rounded-full !px-6 !py-3 !text-[0.85rem] !font-bold !no-underline hover:!no-underline sm:min-h-[56px] sm:w-auto sm:!px-10 sm:!py-4 sm:!text-base"
        >
          Quero me tornar Dog Walker Profissional
        </a>

        <p className="mt-4 text-[0.78rem] text-[var(--color-cinza-500)] sm:mt-5">
          Vagas limitadas — turma presencial em São Paulo
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── FOOTER ─────────────────── */

function LandingFooter() {
  return (
    <footer className="border-t border-white/4 bg-[var(--color-midnight)] px-4 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <a href="/termos-de-uso" className="text-[var(--color-cinza-500)] transition-colors hover:text-white">
            Termos de Uso
          </a>
          <span className="text-[var(--color-cinza-500)]/30">|</span>
          <a href="/politica-de-privacidade" className="text-[var(--color-cinza-500)] transition-colors hover:text-white">
            Política de Privacidade
          </a>
        </div>
        <p className="text-center text-[10px] text-[var(--color-cinza-500)]">
          Resultados podem variar conforme dedicação e perfil do aluno.
        </p>
        <p className="text-center text-xs text-[var(--color-cinza-500)]">
          &copy; 2026 Classe A Pets — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

/* ─────────────────── PAGE ─────────────────── */

export default function LandingDogWalker() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Curso de Dog Walker Profissional em SP | Classe A Pets'
    trackViewContent('Curso Dog Walker', 'landing_page')
  }, [])

  return (
    <div className="min-h-screen overflow-x-clip">
      <DogWalkerHeader />
      <HeroSection />
      <NumerosMercado />
      <Regulamentacao />
      <PublicoAlvo />
      <Comparativo />
      <Programa />
      <Diferencial />
      <Incluso />
      <Investimento />
      <FAQ />
      <WhatsAppCta />
      <CtaFinal />
      <LandingFooter />
    </div>
  )
}
