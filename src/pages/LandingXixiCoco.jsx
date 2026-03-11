import { useState, useEffect } from 'react'
import {
  CheckCircle2,
  ChevronDown,
  Shield,
  Zap,
  Users,
  Clock,
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
   O Metodo Comprovado para Caes Filhotes e Adultos
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
    <>
    {/* Barra de urgência */}
    <div className="fixed top-0 left-0 right-0 z-[60] bg-[var(--color-accent)] px-4 py-2 text-center">
      <p className="text-[0.72rem] font-bold uppercase tracking-wider text-white sm:text-[0.78rem]">
        Oferta de lancamento — De <del>R$ 197</del> por apenas <span className="text-yellow-200">R$ 97</span> · Acesso imediato + Grupo WhatsApp
      </p>
    </div>
    <header
      className={`fixed top-[32px] sm:top-[36px] left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
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
          className="relative z-50 flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--color-gray-200)] bg-transparent p-0 md:hidden"
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
    </>
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
        className="px-4 pb-12 pt-32 sm:px-8 sm:pb-16 sm:pt-40 md:pb-24 lg:pt-44"
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
              Metodo para filhotes e adultos · Baseado em ciencia
            </span>
          </div>

          <h1 className="mb-5 !text-[1.5rem] !leading-[1.2] !text-[var(--color-gray-900)] sm:mb-6 sm:!text-[2rem] md:!text-[2.5rem] lg:!text-[3.2rem]">
            Ensine seu cao a fazer xixi e coco{' '}
            <span className="text-[var(--color-accent)]">
              no lugar certo com metodo comprovado
            </span>
          </h1>

          <p className="mx-auto mb-3 max-w-[540px] text-[1.05rem] font-semibold leading-snug text-[var(--color-gray-700)] sm:mb-4 sm:text-[1.2rem] md:mx-0">
            Sem brigar, sem punir — com o Metodo Suite Canina baseado em ciencia
          </p>

          <p className="mx-auto mb-8 max-w-[540px] text-[0.95rem] leading-relaxed text-[var(--color-gray-500)] sm:mb-10 sm:text-[1.1rem] md:mx-0 md:text-[1.05rem]">
            Passo a passo em video para resolver de vez o problema do xixi fora do lugar.
            Funciona para filhotes e adultos, em casas e apartamentos. Apenas 15 minutos por dia.
          </p>

          <a
            href={HOTMART_URL}
            target="_blank"
            rel="noopener noreferrer"
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
        <div className="relative flex items-end justify-center md:justify-end">
          <div className="relative w-[90vw] max-w-[380px] sm:w-[400px] md:w-[560px] lg:w-[640px]">
            <img
              src="/images/brenno-golden.png"
              alt="Brenno Rodrigues — Xixi no Lugar Certo, método renovador para cães"
              className="relative z-10 h-auto w-full object-contain drop-shadow-[0_6px_6px_rgba(0,0,0,0.25)]"
              fetchPriority="high"
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
  'Tutores que precisam limpar xixi ou coco logo ao acordar, antes mesmo do cafe',
  'Limpar o mesmo canto varias vezes — e o cheiro que nunca vai embora de verdade',
  'Tentar brigar, colocar o focinho, ignorar — e nenhum metodo funcionar',
  'Caes que fazem certo quando alguem esta olhando, mas erram quando ficam sozinhos',
  'Desconforto ao receber visitas em casa por causa do cheiro',
  'Gastos acumulados com tapetes higienicos, enzimas e produtos de limpeza',
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
            Situacoes comuns entre tutores de caes
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
            O problema nao e o tutor, nem o cao.{' '}
            <span className="text-[var(--color-accent)]">
              E a falta do metodo certo.
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

const HOTMART_URL = 'https://hotmart.com/pt-br/club/clubclasseapets/classe-a-pets-educacao-sanitaria-para-caes-filhotes-e-adultos/U104730984S?off=xnf1j7w9'

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
  'Quem mora em apartamento e precisa de solucao para espacos pequenos',
  'Quem ja tentou outros metodos sem sucesso',
  'Quem quer parar de gastar com tapetes e produtos de limpeza',
]

const naoParaQuem = [
  'Quem quer punir o animal ou usar metodos de medo',
  'Quem nao vai dedicar 15-30 minutos por dia ao processo',
  'Quem busca solucao magica sem esforco',
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

/* ─────────────────── COMO FUNCIONA ─────────────────── */

const passos = [
  {
    numero: '1',
    titulo: 'Assista as aulas',
    texto: 'Video-aulas curtas e objetivas. Assista no celular ou computador, no seu ritmo.',
  },
  {
    numero: '2',
    titulo: 'Monte a Suite Canina',
    texto: 'Prepare o ambiente ideal com materiais simples e acessiveis seguindo o passo a passo.',
  },
  {
    numero: '3',
    titulo: 'Aplique o metodo diariamente',
    texto: 'Siga o protocolo especifico para filhote ou adulto. Apenas 15-30 minutos por dia.',
  },
  {
    numero: '4',
    titulo: 'Veja os resultados',
    texto: 'Muitos tutores relatam progresso nas primeiras semanas. Tire duvidas no grupo exclusivo de WhatsApp.',
  },
]

function ComoFunciona() {
  useScrollReveal()

  return (
    <section className="bg-white px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            Passo a passo
          </span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            Como funciona na pratica
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:gap-6" data-reveal-stagger>
          {passos.map((p) => (
            <article
              key={p.numero}
              className="group flex gap-4 rounded-2xl border border-[var(--color-gray-200)] bg-white p-5 transition-all duration-500 hover:border-[var(--color-accent)]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-accent)]/10">
                <span className="text-lg font-bold text-[var(--color-accent)]">{p.numero}</span>
              </div>
              <div>
                <h3 className="mb-1.5 !text-[1rem] sm:!text-[1.1rem]">{p.titulo}</h3>
                <p className="text-[0.85rem] leading-relaxed text-[var(--color-gray-500)] sm:text-[0.92rem]">{p.texto}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── RESULTADOS ─────────────────── */

const resultados = [
  { valor: '+250', label: 'familias atendidas' },
  { valor: '+500', label: 'caes treinados' },
  { valor: '15min', label: 'por dia de dedicacao' },
  { valor: '100%', label: 'sem punicao' },
]

function Resultados() {
  useScrollReveal()

  return (
    <section className="bg-[var(--color-gray-50)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            Resultados
          </span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            Numeros que comprovam o metodo
          </h2>
          <p className="mx-auto mt-3 max-w-[480px] text-[0.92rem] text-[var(--color-gray-500)] sm:mt-4 sm:text-[1rem]">
            A Classe A Pets ja transformou a rotina de centenas de familias com metodo baseado em ciencia e reforco positivo.
          </p>
          <p className="mx-auto mt-2 max-w-[440px] text-[0.75rem] text-[var(--color-gray-400)]">
            *Resultados individuais variam conforme o cao, o ambiente e a consistencia do tutor.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-5 md:grid-cols-4" data-reveal-stagger>
          {resultados.map((r) => (
            <div
              key={r.label}
              className="rounded-2xl border border-[var(--color-gray-200)] bg-white p-5 text-center transition-all duration-500 hover:border-[var(--color-accent)]/20 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] sm:p-6"
            >
              <span className="block text-2xl font-bold text-[var(--color-accent)] sm:text-3xl">{r.valor}</span>
              <span className="mt-1 block text-[0.78rem] font-medium text-[var(--color-gray-400)] sm:text-[0.82rem]">{r.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── COMPARATIVO DE CUSTO ─────────────────── */

function Comparativo() {
  useScrollReveal()

  const itens = [
    { label: 'Adestrador presencial (4-8 sessoes)', valor: 'R$ 1.500 a R$ 3.000' },
    { label: 'Tapetes higienicos por mes', valor: 'R$ 60 a R$ 120/mes' },
    { label: 'Produtos enzimas e limpeza', valor: 'R$ 40 a R$ 80/mes' },
    { label: 'Trocar sofa, tapete ou colchao danificado', valor: 'R$ 500 a R$ 5.000' },
  ]

  return (
    <section className="bg-white px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[600px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="mb-3 inline-flex items-center gap-2 text-[0.78rem] font-bold uppercase tracking-[0.18em] text-[var(--color-accent)]">
            <span className="inline-block h-[2px] w-8 rounded-full bg-[var(--color-accent)]" />
            Perspectiva
          </span>
          <h2 className="mx-auto max-w-[480px] !text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            O custo real de nao resolver a educacao sanitaria
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4" data-reveal-stagger>
          {itens.map((item) => (
            <div
              key={item.label}
              className="flex items-center justify-between gap-4 rounded-xl border border-red-100 bg-red-50/50 px-4 py-3.5 sm:rounded-2xl sm:px-6 sm:py-4"
            >
              <span className="text-[0.85rem] text-[var(--color-gray-600)] sm:text-[0.92rem]">{item.label}</span>
              <span className="shrink-0 text-[0.82rem] font-bold text-red-400 sm:text-[0.88rem]">{item.valor}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center sm:mt-10" data-reveal="up">
          <p className="mx-auto max-w-[440px] text-[1rem] font-semibold leading-snug text-[var(--color-gray-900)] sm:text-[1.1rem]">
            Com o Metodo Suite Canina, voce resolve o problema de vez por{' '}
            <span className="text-[var(--color-accent)]">apenas R$ 97</span> — menos que
            um unico pacote de tapetes higienicos.
          </p>
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
            Tudo isso por menos do que voce imagina
          </h2>
        </div>

        <div className="pt-4" data-reveal="scale">
          <div
            id="checkout"
            className="relative rounded-2xl border-2 border-[var(--color-accent)]/20 bg-white shadow-[0_12px_48px_rgba(0,188,212,0.08)] scroll-mt-28 sm:rounded-3xl"
          >
            {/* Badge */}
            <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full bg-red-500 px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-widest text-white shadow-md sm:px-5 sm:py-2 sm:text-[0.78rem]">
              50% OFF — Lancamento
            </span>

            <div className="px-5 pb-6 pt-8 sm:px-10 sm:pb-10 sm:pt-12">
              {/* What's included */}
              <div className="mb-5 space-y-3 sm:mb-6">
                {[
                  '7 aulas do Modulo Principal (~80 min de conteudo)',
                  '4 aulas Bonus de Enriquecimento Ambiental',
                  'Grupo exclusivo de WhatsApp com o Brenno',
                  'Material de apoio e checklist do tutor',
                  'Acesso imediato pelo celular ou computador',
                  'Garantia incondicional de 7 dias',
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
                <del className="text-sm text-[var(--color-gray-400)] sm:text-base">R$ 197,00</del>
              </p>

              {/* Main price */}
              <p
                className="mt-2 text-center text-[1.65rem] font-bold text-[var(--color-accent)] sm:mt-3 sm:text-3xl md:text-4xl"
                style={{ fontFamily: "'DM Serif Display', Georgia, serif" }}
              >
                R$ 97,00
              </p>

              {/* Installments */}
              <p className="mt-2 text-center text-[0.82rem] text-[var(--color-gray-400)] sm:mt-3 sm:text-[0.88rem]">
                ou parcele em ate 12x de R$ 9,70 no cartao
              </p>

              {/* CTA */}
              <a
                href={HOTMART_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex min-h-[50px] w-full items-center justify-center gap-2 rounded-full bg-[var(--color-accent)] px-4 py-3.5 text-[0.88rem] font-bold text-white !no-underline shadow-[0_6px_24px_rgba(0,188,212,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,188,212,0.4)] hover:!no-underline sm:mt-8 sm:min-h-[56px] sm:px-6 sm:py-4 sm:text-[0.95rem]"
              >
                Quero resolver o xixi do meu cao agora
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>

              {/* Trust badges */}
              <div className="mt-4 flex flex-col items-center gap-2.5 sm:mt-5 sm:flex-row sm:justify-center sm:gap-4">
                {['7 dias de garantia', 'Pagamento seguro', 'Acesso imediato'].map((t) => (
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
      'Sim! O curso tem uma aula especifica para caes adultos que nunca aprenderam. O Metodo Suite Canina funciona independente da idade do cao.',
  },
  {
    pergunta: 'Em quanto tempo vejo resultado?',
    resposta:
      'Depende do cao e da consistencia do tutor. Muitos tutores relatam progresso em 7-14 dias seguindo o metodo. Caes adultos com historico longo de erros podem precisar de mais tempo. Resultados individuais variam.',
  },
  {
    pergunta: 'Preciso comprar equipamentos caros?',
    resposta:
      'Nao. O curso ensina como montar a Suite Canina com materiais acessiveis e faceis de encontrar. Voce nao precisa gastar muito.',
  },
  {
    pergunta: 'Funciona em apartamento?',
    resposta:
      'Sim! O metodo foi pensado especialmente para espacos limitados. Apartamentos sao os casos mais comuns dos nossos alunos.',
  },
  {
    pergunta: 'Quanto tempo preciso dedicar por dia?',
    resposta:
      'Entre 15 e 30 minutos por dia. O metodo e objetivo e as aulas sao curtas para voce encaixar na rotina sem dificuldade.',
  },
  {
    pergunta: 'Como funciona o grupo de WhatsApp?',
    resposta:
      'Ao se inscrever voce recebe acesso ao grupo exclusivo de alunos, onde pode tirar duvidas diretamente com o Brenno e trocar experiencias com outros tutores.',
  },
  {
    pergunta: 'Como acesso o curso?',
    resposta:
      'O curso e 100% online, hospedado na plataforma Hotmart. Apos o pagamento, voce recebe o acesso imediato por e-mail e pode assistir pelo celular ou computador.',
  },
  {
    pergunta: 'Tem garantia?',
    resposta:
      'Sim. Voce tem 7 dias de garantia incondicional. Se por qualquer motivo nao gostar, devolvemos 100% do valor — sem burocracia.',
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

/* ─────────────────── GARANTIA ─────────────────── */

function Garantia() {
  useScrollReveal()

  return (
    <section className="bg-[var(--color-gray-50)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[600px]" data-reveal="scale">
        <div className="rounded-2xl border-2 border-emerald-200 bg-white p-6 text-center sm:rounded-3xl sm:p-10">
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50 sm:mb-6 sm:h-20 sm:w-20">
            <Shield className="h-8 w-8 text-emerald-500 sm:h-10 sm:w-10" />
          </div>
          <h2 className="mb-3 !text-[1.3rem] sm:mb-4 sm:!text-[1.5rem] md:!text-[1.75rem]">
            Garantia incondicional de 7 dias
          </h2>
          <p className="mx-auto max-w-[450px] text-[0.92rem] leading-relaxed text-[var(--color-gray-500)] sm:text-[1rem]">
            Teste o metodo por 7 dias. Se nao ficar satisfeito por qualquer motivo,
            devolvemos <strong className="text-[var(--color-gray-700)]">100% do seu investimento</strong> — sem
            perguntas, sem burocracia. O risco e zero.
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── CTA FINAL ─────────────────── */

function CtaFinal() {
  useScrollReveal()

  return (
    <section className="bg-white px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[600px] text-center" data-reveal="scale">
        <h2 className="mb-4 !text-[1.5rem] sm:mb-5 sm:!text-[1.75rem] md:!text-[2.2rem]">
          Chega de limpar xixi no lugar errado.
        </h2>
        <p className="mx-auto mb-6 max-w-[480px] text-[0.95rem] leading-relaxed text-[var(--color-gray-500)] sm:mb-8 sm:text-[1.05rem]">
          O metodo que ja ajudou centenas de familias pode resolver o problema do seu cao tambem.
          Comece hoje com garantia total de 7 dias.
        </p>

        <a
          href={HOTMART_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-[50px] w-full items-center justify-center gap-2.5 rounded-full bg-[var(--color-accent)] px-8 py-3.5 text-[0.9rem] font-bold text-white !no-underline shadow-[0_6px_24px_rgba(0,188,212,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_32px_rgba(0,188,212,0.4)] hover:!no-underline sm:min-h-[56px] sm:w-auto sm:px-10 sm:py-4 sm:text-base"
        >
          Quero comecar agora por R$ 97
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        <p className="mt-3 text-[0.85rem] text-[var(--color-gray-400)] sm:mt-4">
          <del>R$ 197</del>{' '}
          <span className="font-bold text-[var(--color-accent)]">R$ 97</span>{' '}
          <span className="text-[0.78rem]">· Oferta de lancamento</span>
        </p>
        <p className="mt-2 text-[0.78rem] text-[var(--color-gray-400)] sm:text-[0.82rem]">
          Pagamento seguro via Hotmart · Acesso imediato · 7 dias de garantia
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── FOOTER ─────────────────── */

function LandingFooter() {
  return (
    <footer className="border-t border-[var(--color-gray-200)] bg-[var(--color-gray-50)] px-4 py-6 sm:px-8 sm:py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-3">
        <div className="flex flex-wrap justify-center gap-4 text-xs">
          <a href="/termos-de-uso" className="text-[var(--color-gray-400)] transition-colors hover:text-[var(--color-gray-700)]">
            Termos de Uso
          </a>
          <span className="text-[var(--color-gray-300)]">|</span>
          <a href="/politica-de-privacidade" className="text-[var(--color-gray-400)] transition-colors hover:text-[var(--color-gray-700)]">
            Política de Privacidade
          </a>
        </div>
        <p className="text-center text-xs text-[var(--color-gray-400)]">
          &copy; 2026 Classe A Pets — Todos os direitos reservados.
        </p>
      </div>
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
      <ComoFunciona />
      <Modulos />
      <SobreBrenno />
      <ParaQuemE />
      <Resultados />
      <Comparativo />
      <Preco />
      <Garantia />
      <FAQ />
      <CtaFinal />
      <LandingFooter />
    </div>
  )
}
