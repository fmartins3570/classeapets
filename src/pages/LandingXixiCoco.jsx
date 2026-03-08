import { useState, useEffect } from 'react'
import {
  CheckCircle2,
  ChevronDown,
  Shield,
  Zap,
  Users,
  Clock,
  Star,
  Home,
  MessageSquare,
  Brain,
  Gift,
  XCircle,
  UserCheck,
} from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { assetUrl } from '../utils/assetUrl'
import { BackgroundGradientAnimation } from '../components/ui/BackgroundGradientAnimation'

/* ─────────────────────────────────────────────────
   LIGHT THEME — Xixi no Lugar Certo
   O Metodo Definitivo para Caes Filhotes e Adultos
   Paleta: branco + cinza claro + accent teal (#00BCD4)
   ───────────────────────────────────────────────── */

/* ─────────────────── HEADER ─────────────────── */

const navLinks = [
  { href: '#metodo', label: 'Metodo' },
  { href: '#modulos', label: 'Conteudo' },
  { href: '#preco', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
]

function XixiCocoHeader() {
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
          ? 'bg-white/85 shadow-[0_1px_12px_rgba(0,0,0,0.06)]'
          : 'bg-white/50'
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

        <nav className="hidden items-center gap-2 md:flex" aria-label="Navegacao principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-[0.85rem] font-semibold tracking-wide text-[var(--color-gray-600)] !no-underline transition-colors duration-300 hover:text-[var(--color-accent)] hover:!no-underline"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#checkout"
            className="ml-2 inline-flex items-center rounded-full bg-[var(--color-accent)] px-6 py-2.5 text-[0.82rem] font-bold uppercase tracking-wider text-white !no-underline shadow-[0_4px_16px_rgba(0,188,212,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(0,188,212,0.35)] hover:!no-underline"
          >
            Comecar Agora
          </a>
        </nav>

        <button
          type="button"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-gray-200)] bg-transparent p-0 md:hidden"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setMenuOpen((c) => !c)}
        >
          <div className="flex w-[18px] flex-col items-center gap-[4px]">
            <span className={`block h-[2px] w-full rounded-full bg-[var(--color-gray-700)] transition-all duration-300 ${menuOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-[var(--color-gray-700)] transition-all duration-300 ${menuOpen ? 'scale-x-0 opacity-0' : ''}`} />
            <span className={`block h-[2px] w-full rounded-full bg-[var(--color-gray-700)] transition-all duration-300 ${menuOpen ? '-translate-y-[6px] -rotate-45' : ''}`} />
          </div>
        </button>
      </div>

      <div className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-white/98 backdrop-blur-2xl transition-all duration-500 md:hidden ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}>
        <nav className="flex flex-col items-center gap-7">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-light tracking-wide text-[var(--color-gray-700)] !no-underline transition-all duration-300 hover:text-[var(--color-accent)] hover:!no-underline"
              style={{ transitionDelay: menuOpen ? `${i * 60}ms` : '0ms' }}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#checkout"
            onClick={() => setMenuOpen(false)}
            className="mt-4 inline-flex items-center rounded-full bg-[var(--color-accent)] px-8 py-3 text-sm font-bold uppercase tracking-wider text-white !no-underline shadow-[0_4px_16px_rgba(0,188,212,0.3)] hover:!no-underline"
          >
            Comecar Agora
          </a>
        </nav>
      </div>
    </header>
  )
}

/* ─────────────────── HERO (LIGHT) ─────────────────── */

function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(228, 239, 241)"
        gradientBackgroundEnd="rgb(237, 244, 245)"
        firstColor="178, 235, 242"
        secondColor="128, 222, 234"
        thirdColor="200, 240, 245"
        fourthColor="158, 230, 238"
        fifthColor="210, 245, 248"
        pointerColor="178, 235, 242"
        size="70%"
        blendingValue="normal"
        containerClassName="!h-auto"
        className="px-4 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-32 md:pb-24 lg:pt-36"
      >
      <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
        {/* Left — Text */}
        <div className="text-center md:text-left">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-accent)]/15 bg-[var(--color-accent)]/5 px-3.5 py-2 sm:mb-8 sm:gap-2.5 sm:px-5 sm:py-2.5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-accent)] opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-accent)]" />
            </span>
            <span className="text-[0.78rem] font-semibold leading-tight text-[var(--color-accent)] sm:text-[0.82rem]">
              Metodo definitivo para filhotes e adultos
            </span>
          </div>

          <h1 className="mb-5 !text-[1.5rem] !leading-[1.2] !text-[var(--color-gray-900)] sm:mb-6 sm:!text-[2rem] md:!text-[2.5rem] lg:!text-[3.2rem]">
            Xixi{' '}
            <span className="text-[var(--color-accent)]">
              no Lugar Certo
            </span>
          </h1>

          <p className="mx-auto mb-3 max-w-[540px] text-[1.05rem] font-semibold leading-snug text-[var(--color-gray-700)] sm:mb-4 sm:text-[1.2rem] md:mx-0">
            O Metodo Definitivo para Caes Filhotes e Adultos
          </p>

          <p className="mx-auto mb-8 max-w-[540px] text-[0.95rem] leading-relaxed text-[var(--color-gray-500)] sm:mb-10 sm:text-[1.1rem] md:mx-0 md:text-[1.05rem]">
            Aprenda o Metodo Suite Canina e ensine seu cao a fazer as necessidades
            no lugar certo — sem punicao, sem estresse, com ciencia.
          </p>

          <a
            href="#checkout"
            className="inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-[0.9rem] font-bold text-white !no-underline shadow-[0_6px_24px_rgba(0,188,212,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,188,212,0.4)] hover:!no-underline sm:min-h-[56px] sm:w-auto sm:px-10 sm:py-4 sm:text-base"
          >
            Quero comecar agora
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>

          {/* Trust badges */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-6 md:items-start md:justify-start">
            {[
              { icon: Zap, text: 'Método renovador' },
              { icon: Users, text: '+250 familias atendidas' },
              { icon: Shield, text: 'Baseado em ciencia' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2">
                <item.icon className="h-4 w-4 text-[var(--color-accent)]/50" />
                <span className="text-[0.78rem] font-medium text-[var(--color-gray-400)] sm:text-[0.8rem]">{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — Brenno + Golden image */}
        <div className="relative flex justify-center md:justify-end">
          <div className="relative w-[65vw] max-w-[280px] sm:w-[280px] md:w-[400px] lg:w-[460px]">
            {/* Soft teal glow behind */}
            <div
              className="pointer-events-none absolute inset-x-[10%] bottom-[0%] top-[15%] rounded-full opacity-15 blur-[50px] sm:blur-[60px]"
              style={{ background: 'radial-gradient(circle, rgba(0,188,212,0.4), transparent 70%)' }}
              aria-hidden
            />
            <img
              src="/images/brenno-golden.png"
              alt="Brenno Rodrigues — Xixi no Lugar Certo, método renovador para cães"
              className="relative z-10 h-auto w-full object-contain"
              fetchPriority="high"
            />
            {/* Floor shadow */}
            <div
              className="pointer-events-none absolute bottom-[-4%] left-1/2 z-0 h-[18px] w-[75%] -translate-x-1/2 rounded-[50%] bg-black/[0.12] blur-[12px] sm:h-[22px] sm:blur-[16px]"
              aria-hidden
            />
          </div>
        </div>
      </div>
      </BackgroundGradientAnimation>
    </section>
  )
}

/* ─────────────────── DOR / PROBLEMA ─────────────────── */

const dorItems = [
  'Acordou cedo e pisou em surpresas pelo apartamento',
  'Limpou o mesmo lugar varias vezes e o cheiro nao vai embora',
  'Tentou brigar, ignorar, punir — e nada funcionou',
  'Seu cao parece fazer de proposito justamente onde voce limpou',
  'Ja pensou em devolver o pet por nao saber o que fazer',
]

function ProblemaSection() {
  useScrollReveal()

  return (
    <section className="bg-[var(--color-gray-50)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[700px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            O problema
          </span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            Voce ja passou por isso?
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4" data-reveal-stagger>
          {dorItems.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3.5 rounded-xl border border-[var(--color-gray-200)] bg-white p-4 transition-all duration-500 hover:border-red-200 hover:shadow-[0_2px_12px_rgba(0,0,0,0.04)] sm:gap-4 sm:rounded-2xl sm:p-5"
            >
              <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-400 sm:h-6 sm:w-6" aria-hidden />
              <p className="text-[0.88rem] leading-relaxed text-[var(--color-gray-600)] sm:text-[0.95rem]">{item}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10" data-reveal="up">
          <p className="mx-auto max-w-[480px] text-[1rem] font-semibold leading-snug text-[var(--color-gray-900)] sm:text-[1.1rem]">
            Nao e culpa sua — e nem do seu cao.{' '}
            <span className="text-[var(--color-accent)]">
              O problema e a falta do metodo certo.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SOLUCAO — METODO SUITE CANINA ─────────────────── */

const pilares = [
  {
    icon: Home,
    titulo: 'Ambiente Certo',
    subtitulo: 'Suite Canina',
    texto: 'Espaco planejado para o sucesso — seu cao entende onde fazer sem precisar de bronca.',
  },
  {
    icon: MessageSquare,
    titulo: 'Comunicacao Clara',
    subtitulo: 'Sem medo',
    texto: 'O cao aprende pela clareza da comunicacao, nao pelo medo. Voce guia, ele entende.',
  },
  {
    icon: Brain,
    titulo: 'Treino Cognitivo',
    subtitulo: 'Estimulacao mental',
    texto: 'Estimulacao mental que acelera o aprendizado e deixa seu cao mais equilibrado.',
  },
]

function SolucaoSection() {
  useScrollReveal()

  return (
    <section id="metodo" className="bg-white px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            A Solucao
          </span>
          <h2 className="mx-auto mb-3 max-w-[550px] !text-[1.5rem] sm:mb-4 sm:!text-[1.75rem] md:!text-[2.2rem]">
            Apresentamos: O Metodo Suite Canina
          </h2>
          <p className="mx-auto max-w-[440px] text-[0.92rem] text-[var(--color-gray-500)] sm:text-[1rem]">
            Baseado na biologia e psicologia canina — nao em punicao.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3" data-reveal-stagger>
          {pilares.map((p) => (
            <article
              key={p.titulo}
              className="group rounded-2xl border border-[var(--color-gray-200)] bg-white p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-accent)]/20 hover:shadow-[0_8px_32px_rgba(0,188,212,0.08)] sm:p-7 md:p-8"
            >
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-accent)]/8 transition-colors duration-300 group-hover:bg-[var(--color-accent)]/12 sm:mb-5 sm:h-16 sm:w-16">
                <p.icon className="h-7 w-7 text-[var(--color-accent)] sm:h-8 sm:w-8" aria-hidden />
              </div>
              <h3 className="mb-1 !text-[1.1rem] sm:!text-[1.2rem]">{p.titulo}</h3>
              <span className="mb-3 inline-block text-[0.75rem] font-semibold uppercase tracking-wider text-[var(--color-accent)] sm:mb-4 sm:text-[0.78rem]">
                {p.subtitulo}
              </span>
              <p className="text-[0.85rem] leading-relaxed text-[var(--color-gray-500)] sm:text-[0.92rem]">{p.texto}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── MODULOS ─────────────────── */

const modulos = [
  {
    numero: '1',
    titulo: 'Fundacao do Ambiente',
    icon: Home,
    items: [
      'Como montar a Suite Canina do zero (cercados, materiais, posicionamento)',
      'Qual material de higiene escolher e onde comprar',
    ],
    aulas: '2 aulas',
    duracao: '21 min',
  },
  {
    numero: '2',
    titulo: 'Comunicacao e Limpeza',
    icon: MessageSquare,
    items: [
      'Como se comunicar com seu cao durante o processo',
      'A forma correta de limpar para eliminar cheiro e evitar repeticao',
    ],
    aulas: '2 aulas',
    duracao: '20 min',
  },
  {
    numero: '3',
    titulo: 'Filhotes vs Adultos',
    icon: UserCheck,
    items: [
      'Protocolo especifico para caes filhotes (0-5 meses)',
      'Protocolo para caes adultos que nunca aprenderam',
    ],
    aulas: '2 aulas',
    duracao: '22 min',
  },
  {
    numero: '4',
    titulo: 'Treino Cognitivo',
    icon: Brain,
    items: [
      'Como usar o treino mental para acelerar o aprendizado sanitario',
    ],
    aulas: '1 aula',
    duracao: '17 min',
  },
]

const bonus = {
  items: [
    'O que e e por que faz seu cao mais equilibrado',
    'Kong Whobbler: como usar gradualmente',
    'Kong recheado: receitas e tecnicas',
    '"Seguir a mao": comando que complementa a educacao sanitaria',
  ],
  aulas: '4 aulas',
  duracao: '11 min',
}

function Modulos() {
  useScrollReveal()

  return (
    <section id="modulos" className="bg-[var(--color-gray-50)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            Conteudo
          </span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            O que voce vai aprender
          </h2>
        </div>

        <div className="space-y-4 sm:space-y-5" data-reveal-stagger>
          {modulos.map((m) => (
            <article
              key={m.numero}
              className="group rounded-2xl border border-[var(--color-gray-200)] bg-white p-5 transition-all duration-500 hover:border-[var(--color-accent)]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-6 md:p-7"
            >
              <div className="mb-4 flex items-center gap-3 sm:gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10 sm:h-11 sm:w-11">
                  <m.icon className="h-5 w-5 text-[var(--color-accent)]" aria-hidden />
                </div>
                <div className="flex-1">
                  <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[var(--color-accent)] sm:text-[0.72rem]">
                    Modulo {m.numero}
                  </span>
                  <h3 className="!text-[1rem] !leading-tight sm:!text-[1.12rem]">{m.titulo}</h3>
                </div>
                <div className="hidden items-center gap-1.5 text-[0.75rem] text-[var(--color-gray-400)] sm:flex">
                  <Clock className="h-3.5 w-3.5" aria-hidden />
                  <span>{m.aulas} · {m.duracao}</span>
                </div>
              </div>

              <div className="space-y-2 pl-0 sm:pl-[3.25rem]">
                {m.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                    <span className="text-[0.85rem] leading-relaxed text-[var(--color-gray-600)] sm:text-[0.92rem]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 flex items-center gap-1.5 pl-0 text-[0.75rem] text-[var(--color-gray-400)] sm:hidden">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                <span>{m.aulas} · {m.duracao}</span>
              </div>
            </article>
          ))}

          {/* Bonus */}
          <article className="group rounded-2xl border-2 border-[var(--color-accent)]/20 bg-[var(--color-accent)]/[0.02] p-5 transition-all duration-500 hover:border-[var(--color-accent)]/30 hover:shadow-[0_4px_20px_rgba(0,188,212,0.06)] sm:p-6 md:p-7">
            <div className="mb-4 flex items-center gap-3 sm:gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/15 sm:h-11 sm:w-11">
                <Gift className="h-5 w-5 text-[var(--color-accent)]" aria-hidden />
              </div>
              <div className="flex-1">
                <span className="text-[0.7rem] font-bold uppercase tracking-widest text-[var(--color-accent)] sm:text-[0.72rem]">
                  Bonus
                </span>
                <h3 className="!text-[1rem] !leading-tight sm:!text-[1.12rem]">Enriquecimento Ambiental</h3>
              </div>
              <div className="hidden items-center gap-1.5 text-[0.75rem] text-[var(--color-gray-400)] sm:flex">
                <Clock className="h-3.5 w-3.5" aria-hidden />
                <span>{bonus.aulas} · {bonus.duracao}</span>
              </div>
            </div>

            <div className="space-y-2 pl-0 sm:pl-[3.25rem]">
              {bonus.items.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" aria-hidden />
                  <span className="text-[0.85rem] leading-relaxed text-[var(--color-gray-600)] sm:text-[0.92rem]">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-3 flex items-center gap-1.5 pl-0 text-[0.75rem] text-[var(--color-gray-400)] sm:hidden">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              <span>{bonus.aulas} · {bonus.duracao}</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SOBRE O ADESTRADOR ─────────────────── */

function SobreBrenno() {
  useScrollReveal()

  return (
    <section className="bg-white px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-6 text-center md:hidden" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            Seu Adestrador
          </span>
          <h2 className="!text-[1.5rem] sm:!text-[1.75rem]">
            Brenno Rodrigues — Adestrador com Metodo
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          {/* Video */}
          <div data-reveal="left">
            <div className="relative mx-auto max-w-[85vw] overflow-hidden rounded-2xl border border-[var(--color-gray-200)] bg-[var(--color-gray-100)] shadow-[0_8px_32px_rgba(0,0,0,0.06)] sm:max-w-[320px] sm:rounded-3xl md:max-w-none">
              <div className="aspect-[9/16]">
                <iframe
                  src="https://www.youtube.com/embed/CMqEWXaRhWU?rel=0&modestbranding=1"
                  title="Conheca o Brenno — Classe A Pets"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div data-reveal="right">
            <div className="hidden md:block">
              <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
                <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
                Seu Adestrador
              </span>
              <h2 className="mb-6">
                Brenno Rodrigues — Adestrador com Metodo
              </h2>
            </div>
            <p className="mb-4 text-[0.95rem] leading-relaxed text-[var(--color-gray-500)] sm:mb-5 sm:text-[1.05rem]">
              Minha missao e provar que ensinar seu cao nao e dificil — e so ter
              as orientacoes certas.
            </p>
            <p className="mb-6 text-[0.95rem] leading-relaxed text-[var(--color-gray-500)] sm:mb-8 sm:text-[1.05rem]">
              Com metodologia moderna e renovadora, ja ajudei centenas de familias
              a resolver problemas de comportamento. O Metodo Suite Canina reune tudo o que
              funciona na pratica.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-6">
              {[
                { value: '+4', label: 'anos de experiencia' },
                { value: '+250', label: 'familias atendidas' },
                { value: '+500', label: 'caes treinados' },
                { value: '100%', label: 'dedicação' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="text-lg font-bold text-[var(--color-accent)] sm:text-xl">
                    {s.value}
                  </span>
                  <span className="text-[0.75rem] font-medium text-[var(--color-gray-400)] sm:text-[0.78rem]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PARA QUEM E ─────────────────── */

const paraQuem = [
  'Tutores com filhotes recem-chegados em casa',
  'Donos de caes adultos que nunca aprenderam o local correto',
  'Quem ja tentou outros metodos sem sucesso',
  'Quem quer um lar mais limpo e harmonico',
]

const naoParaQuem = [
  'Quem quer punir o animal',
  'Quem nao vai dedicar 30 minutos por dia ao processo',
]

function ParaQuemE() {
  useScrollReveal()

  return (
    <section className="bg-[var(--color-gray-50)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            Para quem e
          </span>
          <h2 className="!text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            Este curso e para voce?
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-2" data-reveal-stagger>
          {/* Para quem E */}
          <div className="rounded-2xl border border-emerald-200 bg-white p-5 sm:rounded-3xl sm:p-7">
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
              <CheckCircle2 className="h-5.5 w-5.5 text-emerald-500 sm:h-6 sm:w-6" aria-hidden />
              <h3 className="!text-[1.05rem] !text-emerald-600 sm:!text-[1.15rem]">Para quem e</h3>
            </div>
            <div className="space-y-3">
              {paraQuem.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                  <span className="text-[0.85rem] leading-relaxed text-[var(--color-gray-600)] sm:text-[0.92rem]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Para quem NAO e */}
          <div className="rounded-2xl border border-red-200 bg-white p-5 sm:rounded-3xl sm:p-7">
            <div className="mb-4 flex items-center gap-2.5 sm:mb-5">
              <XCircle className="h-5.5 w-5.5 text-red-400 sm:h-6 sm:w-6" aria-hidden />
              <h3 className="!text-[1.05rem] !text-red-500 sm:!text-[1.15rem]">Para quem nao e</h3>
            </div>
            <div className="space-y-3">
              {naoParaQuem.map((item) => (
                <div key={item} className="flex items-start gap-2.5">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-300" aria-hidden />
                  <span className="text-[0.85rem] leading-relaxed text-[var(--color-gray-600)] sm:text-[0.92rem]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── DEPOIMENTOS ─────────────────── */

const depoimentos = [
  {
    texto: 'Depoimento em breve',
    nome: 'Maria',
    descricao: 'Tutora de filhote',
  },
  {
    texto: 'Depoimento em breve',
    nome: 'Joao',
    descricao: 'Dono de cao adulto resgatado',
  },
  {
    texto: 'Depoimento em breve',
    nome: 'Ana',
    descricao: 'Ja tentou tudo antes',
  },
]

function Depoimentos() {
  useScrollReveal()

  return (
    <section className="bg-white px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            Depoimentos
          </span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            Quem ja usou, aprovou
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3" data-reveal-stagger>
          {depoimentos.map((d) => (
            <article
              key={d.nome}
              className="group rounded-2xl border border-[var(--color-gray-200)] bg-white p-5 transition-all duration-500 hover:border-[var(--color-accent)]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-7"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden />
                ))}
              </div>

              <p className="mb-5 text-[0.88rem] leading-relaxed text-[var(--color-gray-500)] italic sm:text-[0.95rem]">
                &ldquo;{d.texto}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-accent)]/10 sm:h-10 sm:w-10">
                  <span className="text-[0.7rem] font-bold text-[var(--color-accent)] sm:text-xs">{d.nome.charAt(0)}</span>
                </div>
                <div>
                  <span className="block text-[0.82rem] font-semibold text-[var(--color-gray-900)] sm:text-sm">{d.nome}</span>
                  <span className="text-xs text-[var(--color-gray-400)]">{d.descricao}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── PRECO ─────────────────── */

function Preco() {
  useScrollReveal()

  return (
    <section id="preco" className="bg-[var(--color-gray-50)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[560px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            Investimento
          </span>
          <h2 className="!text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            Tudo que voce vai receber
          </h2>
        </div>

        <div className="pt-4" data-reveal="scale">
          <div
            id="checkout"
            className="relative rounded-2xl border-2 border-[var(--color-accent)]/20 bg-white shadow-[0_12px_48px_rgba(0,188,212,0.08)] scroll-mt-28 sm:rounded-3xl"
          >
            {/* Badge */}
            <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-[var(--color-accent)] px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-widest text-white shadow-md sm:px-5 sm:py-2 sm:text-[0.78rem]">
              Oferta especial
            </span>

            <div className="px-5 pb-6 pt-8 sm:px-10 sm:pb-10 sm:pt-12">
              {/* What's included */}
              <div className="mb-5 space-y-3 sm:mb-6">
                {[
                  '7 aulas do Modulo Principal (~80 min de conteudo)',
                  '4 aulas Bonus de Enriquecimento Ambiental',
                  'Material de apoio incluso',
                  'Acesso imediato pelo computador ou celular',
                ].map((t) => (
                  <div key={t} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4.5 w-4.5 shrink-0 text-emerald-500" aria-hidden />
                    <span className="text-[0.85rem] text-[var(--color-gray-600)] sm:text-[0.92rem]">{t}</span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="mx-auto my-5 h-px w-full bg-[var(--color-gray-200)] sm:my-6" />

              {/* Old price */}
              <p className="text-center">
                <del className="text-sm text-[var(--color-gray-400)] sm:text-base">R$ XX,00</del>
              </p>

              {/* Main price */}
              <p
                className="mt-2 text-center text-[1.65rem] font-bold text-[var(--color-accent)] sm:mt-3 sm:text-3xl md:text-4xl"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                R$ XX,00
              </p>

              {/* CTA */}
              <a
                href="#checkout"
                className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3.5 text-[0.88rem] font-bold text-white !no-underline shadow-[0_6px_24px_rgba(0,188,212,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,188,212,0.4)] hover:!no-underline sm:mt-8 sm:min-h-[56px] sm:px-6 sm:py-4 sm:text-[0.95rem]"
              >
                Quero garantir minha vaga
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Trust badges */}
              <div className="mt-4 flex flex-col items-center gap-2.5 sm:mt-5 sm:flex-row sm:justify-center sm:gap-4">
                {['Pagamento seguro', 'Acesso imediato'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-emerald-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[0.78rem] text-[var(--color-gray-400)] sm:text-[0.8rem]">{t}</span>
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
    pergunta: 'Funciona para caes adultos?',
    resposta:
      'Sim! O curso tem uma aula especifica para caes adultos que nunca aprenderam.',
  },
  {
    pergunta: 'Em quanto tempo vejo resultado?',
    resposta:
      'Depende do cao e da consistencia. A maioria dos tutores ve progresso em 7-14 dias seguindo o metodo.',
  },
  {
    pergunta: 'Preciso comprar equipamentos caros?',
    resposta:
      'Nao. O curso ensina como montar a Suite Canina com materiais acessiveis e faceis de encontrar. Voce nao precisa gastar muito.',
  },
]

function FAQ() {
  useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="bg-white px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[700px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            FAQ
          </span>
          <h2 className="!text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">Perguntas frequentes</h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-[var(--color-gray-200)] sm:rounded-2xl" data-reveal="fade">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-[var(--color-gray-100)] last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full min-h-[52px] items-center justify-between gap-3 bg-transparent px-4 py-4 text-left text-[0.92rem] font-semibold text-[var(--color-gray-900)] transition-colors hover:bg-[var(--color-gray-50)] !rounded-none sm:gap-4 sm:px-6 sm:py-5 sm:text-base"
                aria-expanded={openIndex === index}
                aria-controls={`faq-xc-answer-${index}`}
                id={`faq-xc-question-${index}`}
              >
                {item.pergunta}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--color-accent)] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              <div
                id={`faq-xc-answer-${index}`}
                role="region"
                aria-labelledby={`faq-xc-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-64' : 'max-h-0'}`}
              >
                <p className="px-4 pb-4 text-[0.88rem] leading-relaxed text-[var(--color-gray-500)] sm:px-6 sm:pb-5 sm:text-[0.95rem]">
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

/* ─────────────────── FOOTER ─────────────────── */

function LandingFooter() {
  return (
    <footer className="border-t border-[var(--color-gray-200)] bg-[var(--color-gray-50)] px-4 py-6 sm:px-8 sm:py-8">
      <p className="text-center text-xs text-[var(--color-gray-400)]">
        &copy; 2026 Classe A Pets — Todos os direitos reservados.
      </p>
    </footer>
  )
}

/* ─────────────────── PAGE ─────────────────── */

export default function LandingXixiCoco() {
  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <XixiCocoHeader />
      <HeroSection />
      <ProblemaSection />
      <SolucaoSection />
      <Modulos />
      <SobreBrenno />
      <ParaQuemE />
      <Depoimentos />
      <Preco />
      <FAQ />
      <LandingFooter />
    </div>
  )
}
