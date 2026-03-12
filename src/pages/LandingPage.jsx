import { useState } from 'react'
import {
  Heart,
  GraduationCap,
  Briefcase,
  Stethoscope,
  CheckCircle2,
  Clock,
  Calendar,
  ChevronDown,
  Shield,
  Zap,
  Users,
  TrendingUp,
  BookOpen,
  Target,
  Award,
  Gift,
  MessageCircle,
  FileText,
  Video,
  Star,
} from 'lucide-react'
import LandingHeader from '../components/LandingHeader'
import { BackgroundGradientAnimation } from '../components/ui/BackgroundGradientAnimation'
import { GlowingShadow } from '../components/ui/GlowingShadow'
import VideoPlayer from '../components/ui/VideoPlayer'
import useScrollReveal from '../hooks/useScrollReveal'
import { createCheckout } from '../utils/checkout'

/* ─────────────────── CHECKOUT BUTTON ─────────────────── */

function CheckoutButton({ children, className = '' }) {
  const [loading, setLoading] = useState(false)

  const handleCheckout = async () => {
    if (loading) return
    setLoading(true)
    try {
      await createCheckout('curso-adestrador-profissional')
    } catch {
      alert('Erro ao iniciar pagamento. Tente novamente.')
      setLoading(false)
    }
  }

  return (
    <button
      type="button"
      onClick={handleCheckout}
      disabled={loading}
      className={`disabled:opacity-60 disabled:hover:translate-y-0 ${className}`}
    >
      {loading ? 'Redirecionando...' : children}
    </button>
  )
}

/* ─────────────────── HERO ─────────────────── */

function HeroSection() {
  return (
    <section id="hero" className="relative md:min-h-screen">
      <BackgroundGradientAnimation
        gradientBackgroundStart="rgb(3, 12, 15)"
        gradientBackgroundEnd="rgb(5, 25, 30)"
        firstColor="10, 70, 80"
        secondColor="15, 90, 100"
        thirdColor="0, 60, 70"
        fourthColor="20, 80, 90"
        fifthColor="10, 65, 75"
        pointerColor="15, 85, 95"
        containerClassName="!h-auto"
        className="px-4 pb-12 pt-24 sm:px-8 sm:pb-16 sm:pt-32 md:pb-24 lg:pt-36"
      >
        <div className="relative mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12 lg:gap-16">
          {/* Left — Text */}
          <div className="relative z-20 text-center md:text-left">
            {/* Urgency badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-vermelho)]/20 bg-[var(--color-vermelho)]/6 px-3.5 py-2 backdrop-blur-sm sm:mb-8 sm:gap-2.5 sm:px-5 sm:py-2.5">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-vermelho)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--color-vermelho)]" />
              </span>
              <span className="text-[0.78rem] font-semibold leading-tight text-[var(--color-vermelho)] sm:text-[0.82rem]">
                Turma Presencial em SP — Apenas 15 vagas
              </span>
            </div>

            <h1 className="mb-5 !text-[1.5rem] !leading-[1.2] !text-white sm:mb-6 sm:!text-[2rem] md:!text-[2.5rem] lg:!text-[3.2rem]">
              Torne-se Adestrador Profissional e{' '}
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--gradient-cyan)' }}
              >
                construa sua carreira no mercado pet.
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-[540px] text-[0.95rem] leading-relaxed text-[var(--color-cinza-400)] sm:mb-10 sm:text-[1.1rem] md:mx-0 md:text-[1.05rem]">
              Formacao completa de 3 meses — do zero ao avancado. Aprenda o metodo validado para
              educar caes, conquistar clientes e construir uma carreira no mercado pet.
            </p>

            <CheckoutButton
              className="btn-primary inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 !rounded-full !px-8 !py-3.5 !text-[0.9rem] !font-bold !no-underline hover:!no-underline sm:min-h-[56px] sm:w-auto sm:!px-10 sm:!py-4 sm:!text-base"
            >
              Quero garantir minha vaga agora
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </CheckoutButton>

            {/* Trust badges */}
            <div className="mt-8 flex flex-col items-center gap-3 sm:mt-10 sm:flex-row sm:gap-6 md:items-start md:justify-start">
              {[
                { icon: Shield, text: '30 dias de garantia' },
                { icon: Users, text: '+250 familias atendidas' },
                { icon: Clock, text: '3 meses de formacao' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2">
                  <item.icon className="h-4 w-4 text-[var(--color-cyan-muted)]/60" />
                  <span className="text-[0.78rem] font-medium text-[var(--color-cinza-500)] sm:text-[0.8rem]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Brenno image */}
          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-[65vw] max-w-[260px] sm:w-[260px] md:w-[380px] lg:w-[440px]">
              <img
                src="/images/brenno-hero.png"
                alt="Brenno Rodrigues — Adestrador Profissional com seu cao"
                className="relative z-10 h-auto w-full object-contain drop-shadow-[0_8px_40px_rgba(0,0,0,0.3)]"
                fetchPriority="high"
              />
            </div>
          </div>
        </div>
      </BackgroundGradientAnimation>

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 z-20 h-20 sm:h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-cream))' }}
        aria-hidden
      />
    </section>
  )
}

/* ─────────────────── PUBLICO ALVO ─────────────────── */

const publicoItems = [
  {
    icon: Heart,
    title: 'Apaixonados por caes',
    text: 'Querem transformar amor em profissao e viver do que amam.',
  },
  {
    icon: GraduationCap,
    title: 'Tutores que buscam excelencia',
    text: 'Desejam educar o proprio cao com metodo e seguranca.',
  },
  {
    icon: Briefcase,
    title: 'Transicao de carreira',
    text: 'Buscam nova fonte de renda flexivel e com proposito.',
  },
  {
    icon: Stethoscope,
    title: 'Profissionais da area pet',
    text: 'Veterinarios, passeadores e monitores que querem se especializar.',
  },
]

function PublicoAlvo() {
  useScrollReveal()

  return (
    <section className="bg-[var(--color-cream)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label justify-center">Para quem e</span>
          <h2 className="mx-auto max-w-[550px] !text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">
            Esse curso foi desenhado para quem quer mais da vida...
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6" data-reveal-stagger>
          {publicoItems.map((item) => (
            <GlowingShadow key={item.title} className="rounded-2xl">
              <article
                className="group flex flex-row items-start gap-4 rounded-2xl border border-[var(--color-cinza-200)] bg-[var(--color-branco)] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-transparent sm:flex-col sm:items-center sm:p-6 sm:text-center"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--color-cyan-muted)]/8 transition-colors duration-300 group-hover:bg-[var(--color-cyan-muted)]/14 sm:mb-4 sm:h-14 sm:w-14 sm:rounded-2xl">
                  <item.icon className="h-6 w-6 text-[var(--color-cyan-muted)] sm:h-7 sm:w-7" aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1 !text-[1.05rem] sm:mb-2 sm:!text-[1.15rem]">{item.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed text-[var(--color-texto-muted)] sm:text-[0.9rem]">{item.text}</p>
                </div>
              </article>
            </GlowingShadow>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── JORNADA — 3 MESES ─────────────────── */

const jornadaItems = [
  {
    mes: 'Mes 1',
    title: 'Fundamentos',
    icon: BookOpen,
    items: [
      'Psicologia e comportamento canino',
      'Linguagem corporal e comunicacao',
      'Tecnicas de reforco positivo',
      'Primeiros comandos basicos',
    ],
  },
  {
    mes: 'Mes 2',
    title: 'Tecnicas Avancadas',
    icon: Target,
    items: [
      'Modificacao comportamental',
      'Casos complexos (agressividade, medo)',
      'Socializacao e dessensibilizacao',
      'Estagio pratico com caes reais',
    ],
  },
  {
    mes: 'Mes 3',
    title: 'Mercado e Profissao',
    icon: TrendingUp,
    items: [
      'Posicionamento e marca pessoal',
      'Como captar e fidelizar clientes',
      'Precificacao de servicos',
      'TCC e certificacao final',
    ],
  },
]

function Jornada() {
  useScrollReveal()

  return (
    <section
      id="jornada"
      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      <div
        className="pointer-events-none absolute left-[-10%] top-[30%] h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.25), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1000px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label section-label-light justify-center">A Jornada</span>
          <h2 className="mx-auto mb-3 max-w-[600px] !text-[1.5rem] !text-white sm:mb-4 sm:!text-[1.75rem] md:!text-[2.2rem]">
            3 meses de formacao completa — do zero ao profissional
          </h2>
          <p className="mx-auto max-w-[500px] text-[0.9rem] text-[var(--color-cinza-400)] sm:text-[0.95rem]">
            Enquanto outros cursos ensinam o basico em um fim de semana, aqui voce se forma com pratica real em 3 meses.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:gap-6" data-reveal-stagger>
          {jornadaItems.map((fase) => (
            <GlowingShadow key={fase.mes} className="rounded-2xl">
              <div className="card-dark group h-full p-5 hover:border-transparent sm:p-7">
                <div className="mb-4 flex items-center gap-3">
                  <div
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                    style={{ background: 'var(--gradient-cyan-subtle)' }}
                  >
                    <fase.icon className="h-5 w-5 text-white" aria-hidden />
                  </div>
                  <div>
                    <span className="block text-[0.72rem] font-bold uppercase tracking-widest text-[var(--color-cyan)]">
                      {fase.mes}
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
            </GlowingShadow>
          ))}
        </div>

        {/* Carga horaria */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:mt-12 sm:gap-10" data-reveal="fade">
          {[
            { value: '100h+', label: 'de carga horaria' },
            { value: '+50', label: 'atividades em video' },
            { value: '15', label: 'alunos por turma' },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <span
                className="text-lg font-bold bg-clip-text text-transparent sm:text-xl"
                style={{ backgroundImage: 'var(--gradient-cyan)' }}
              >
                {s.value}
              </span>
              <span className="text-[0.78rem] font-medium text-[var(--color-cinza-500)] sm:text-[0.82rem]">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── ENTREGAVEIS ─────────────────── */

const entregaveisItems = [
  {
    title: 'Processo Completo de Adestramento',
    text: 'Metodologia validada e passo a passo para educar caes com seguranca e resultados.',
  },
  {
    title: 'Modificacao Comportamental',
    text: 'Tecnicas testadas para corrigir comportamentos e fortalecer o vinculo tutor-cao.',
  },
  {
    title: 'Posicionamento e Vendas',
    text: 'Como captar clientes, precificar servicos e se destacar no mercado pet.',
  },
  {
    title: 'Plataforma e Pratica',
    text: '+50 atividades em video e estagio com caes reais para fixar o aprendizado.',
  },
]

function Entregaveis() {
  useScrollReveal()

  return (
    <section
      id="entregaveis"
      className="bg-[var(--color-cream)] px-4 py-14 sm:px-8 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label justify-center">O Curso</span>
          <h2 className="mx-auto mb-3 max-w-[500px] !text-[1.5rem] sm:mb-4 sm:!text-[1.75rem] md:!text-[2.2rem]">
            O que voce vai dominar
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6" data-reveal-stagger>
          {entregaveisItems.map((item) => (
            <GlowingShadow key={item.title} className="rounded-2xl">
              <div
                className="group flex gap-3.5 rounded-2xl border border-[var(--color-cinza-200)] bg-[var(--color-branco)] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-transparent sm:gap-4 sm:p-7"
              >
                <div
                  className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:mt-1 sm:h-10 sm:w-10 sm:rounded-xl"
                  style={{ background: 'var(--gradient-cyan)' }}
                >
                  <CheckCircle2 className="h-4.5 w-4.5 text-white sm:h-5 sm:w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="mb-1.5 !text-[1rem] sm:mb-2 sm:!text-[1.15rem]">{item.title}</h3>
                  <p className="text-[0.85rem] leading-relaxed text-[var(--color-texto-muted)] sm:text-[0.92rem]">{item.text}</p>
                </div>
              </div>
            </GlowingShadow>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── MERCADO PET ─────────────────── */

function MercadoPet() {
  useScrollReveal()

  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      <div
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[300px] w-[300px] rounded-full opacity-10 blur-[100px] sm:h-[400px] sm:w-[400px] sm:blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.25), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[900px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label section-label-light justify-center">O Mercado</span>
          <h2 className="mx-auto mb-3 max-w-[600px] !text-[1.5rem] !text-white sm:mb-4 sm:!text-[1.75rem] md:!text-[2.2rem]">
            O mercado pet no Brasil nao para de crescer
          </h2>
          <p className="mx-auto max-w-[500px] text-[0.9rem] text-[var(--color-cinza-400)] sm:text-[0.95rem]">
            O setor pet cresce 14% ao ano no Brasil (fonte: ABINPET). Conheça alguns dados do segmento:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6" data-reveal-stagger>
          {[
            {
              icon: TrendingUp,
              value: '3º maior',
              label: 'mercado pet do mundo',
              detail: 'Brasil so fica atras de EUA e China',
            },
            {
              icon: Users,
              value: '149 milhoes',
              label: 'de animais de estimacao',
              detail: 'Mais pets que criancas no pais',
            },
            {
              icon: Target,
              value: 'R$ 68 bi',
              label: 'faturamento do setor em 2024',
              detail: 'Crescimento acima da media da economia',
            },
          ].map((item) => (
            <GlowingShadow key={item.label} className="rounded-2xl">
              <div className="card-dark group flex flex-col items-center p-5 text-center hover:border-transparent sm:p-7">
                <div
                  className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl sm:mb-4 sm:h-14 sm:w-14 sm:rounded-2xl"
                  style={{ background: 'var(--gradient-cyan-subtle)' }}
                >
                  <item.icon className="h-6 w-6 text-white sm:h-7 sm:w-7" aria-hidden />
                </div>
                <span
                  className="mb-1 text-xl font-bold bg-clip-text text-transparent sm:text-2xl"
                  style={{ backgroundImage: 'var(--gradient-cyan)' }}
                >
                  {item.value}
                </span>
                <span className="mb-1 text-[0.88rem] font-semibold text-white sm:text-[0.95rem]">{item.label}</span>
                <span className="text-[0.78rem] text-[var(--color-cinza-400)] sm:text-[0.82rem]">{item.detail}</span>
              </div>
            </GlowingShadow>
          ))}
        </div>

        <div className="mt-8 rounded-xl border border-[var(--color-success)]/20 bg-[var(--color-success)]/5 p-4 text-center sm:mt-12 sm:rounded-2xl sm:p-6" data-reveal="fade">
          <p className="text-[0.9rem] font-medium text-[var(--color-success)] sm:text-[1rem]">
            Um setor em expansao com demanda crescente por profissionais qualificados.
          </p>
          <p className="mt-2 text-[0.72rem] text-[var(--color-cinza-500)] sm:text-[0.75rem]">
            *Dados baseados em relatorios publicos do setor pet brasileiro (ABINPET 2024).
          </p>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SOBRE BRENNO ─────────────────── */

function SobreBrenno() {
  useScrollReveal()

  return (
    <section className="bg-[var(--color-cream)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Mobile: title first, then video, then text. Desktop: video left, text right */}
        <div className="mb-6 text-center md:hidden" data-reveal="up">
          <span className="section-label justify-center">Seu Adestrador</span>
          <h2 className="!text-[1.5rem] sm:!text-[1.75rem]">
            De Engenheiro a Adestrador: conheca o Brenno.
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16">
          {/* Foto + Video do Brenno */}
          <div data-reveal="left">
            <img
              src="/images/optimized/foto-brenno-480w.webp"
              srcSet="/images/optimized/foto-brenno-320w.webp 320w, /images/optimized/foto-brenno-480w.webp 480w, /images/optimized/foto-brenno-640w.webp 640w"
              sizes="(max-width: 640px) 260px, 300px"
              alt="Adestrador Brenno Rodrigues"
              className="mx-auto mb-6 max-w-[220px] rounded-2xl shadow-[var(--shadow-md)] sm:max-w-[260px]"
              loading="lazy"
              decoding="async"
            />
            <VideoPlayer youtube="CMqEWXaRhWU" variant="dark" />
          </div>

          {/* Text */}
          <div data-reveal="right">
            {/* Desktop title (hidden on mobile since it shows above) */}
            <div className="hidden md:block">
              <span className="section-label mb-4">Seu Adestrador</span>
              <h2 className="mb-6">
                De Engenheiro a Adestrador: conheca o Brenno.
              </h2>
            </div>
            <p className="mb-4 text-[0.95rem] leading-relaxed text-[var(--color-texto-muted)] sm:mb-5 sm:text-[1.05rem]">
              Sou o Brenno Rodrigues. Atuei como engenheiro, mas descobri meu proposito: transformar
              vidas atraves da conexao entre pessoas e caes.
            </p>
            <p className="mb-6 text-[0.95rem] leading-relaxed text-[var(--color-texto-muted)] sm:mb-8 sm:text-[1.05rem]">
              Com mais de 5 anos de experiencia, ja impactei +250 familias. Minha missao e te ensinar
              o exato caminho que trilhei para me tornar um profissional realizado e viver do que amo.
            </p>

            <div className="flex flex-wrap gap-5 sm:gap-6">
              {[
                { value: '+250', label: 'familias' },
                { value: '5+', label: 'anos' },
                { value: '100%', label: 'dedicação' },
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

/* ─────────────────── FORMATO ─────────────────── */

const formatos = [
  {
    title: 'Turma Noturna',
    schedule: 'Tercas e Quintas',
    time: '19h as 22h',
    duration: '3 meses',
    highlight: true,
  },
  {
    title: 'Turma de Sabado',
    schedule: 'Sabados completos',
    time: '08h as 14h',
    duration: '3 meses',
    highlight: false,
  },
]

function Formato() {
  useScrollReveal()

  return (
    <section
      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      <div className="relative mx-auto max-w-[900px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label section-label-light justify-center">Formatos</span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            Escolha o formato que se adapta a sua rotina
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-8" data-reveal-stagger>
          {formatos.map((f) => (
            <GlowingShadow key={f.title} className="rounded-2xl">
              <article
                className="card-dark group relative overflow-hidden p-5 hover:border-transparent sm:p-7 md:p-8"
              >
                {f.highlight && (
                  <span className="absolute right-4 top-4 rounded-full bg-[var(--color-cyan-muted)]/12 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[var(--color-cyan)] sm:right-5 sm:top-5">
                    Popular
                  </span>
                )}

                <h3 className="mb-4 !text-[1.15rem] !text-white sm:mb-5 sm:!text-[1.3rem]">{f.title}</h3>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9 sm:rounded-xl" style={{ background: 'var(--gradient-cyan-subtle)' }}>
                      <Calendar className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" aria-hidden />
                    </div>
                    <span className="text-[0.88rem] text-[var(--color-cinza-400)] sm:text-[0.95rem]">{f.schedule}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg sm:h-9 sm:w-9 sm:rounded-xl" style={{ background: 'var(--gradient-cyan-subtle)' }}>
                      <Clock className="h-3.5 w-3.5 text-white sm:h-4 sm:w-4" aria-hidden />
                    </div>
                    <span className="text-[0.88rem] text-[var(--color-cinza-400)] sm:text-[0.95rem]">
                      {f.time} — {f.duration}
                    </span>
                  </div>
                </div>
              </article>
            </GlowingShadow>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── BONUS ─────────────────── */

const bonusItems = [
  {
    icon: Video,
    title: 'Plataforma com +50 videoaulas',
    description: 'Acesso completo a plataforma online para revisar e aprofundar o conteudo quando quiser.',
  },
  {
    icon: MessageCircle,
    title: 'Grupo VIP no WhatsApp',
    description: 'Comunidade exclusiva de alunos para trocar experiencias, tirar duvidas e fazer networking.',
  },
  {
    icon: Award,
    title: 'Certificado com TCC',
    description: 'Certificacao profissional com carga de +100 horas e Trabalho de Conclusao de Curso.',
  },
  {
    icon: FileText,
    title: 'Kit do Adestrador Profissional',
    description: 'Templates de contrato, tabela de precificacao, modelo de orcamento e scripts de captacao de clientes.',
  },
]

function Bonus() {
  useScrollReveal()

  return (
    <section className="bg-[var(--color-cream)] px-4 py-14 sm:px-8 sm:py-20 md:py-28">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label justify-center">Bonus Exclusivos</span>
          <h2 className="mx-auto mb-3 max-w-[500px] !text-[1.5rem] sm:mb-4 sm:!text-[1.75rem] md:!text-[2.2rem]">
            Alem do curso, voce ainda leva:
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6" data-reveal-stagger>
          {bonusItems.map((item) => (
            <GlowingShadow key={item.title} className="rounded-2xl">
              <div className="group flex gap-4 rounded-2xl border border-[var(--color-cinza-200)] bg-[var(--color-branco)] p-5 transition-all duration-500 hover:-translate-y-1 hover:border-transparent sm:p-6">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--color-cyan-muted)]/8 transition-colors duration-300 group-hover:bg-[var(--color-cyan-muted)]/14 sm:h-12 sm:w-12">
                  <item.icon className="h-5 w-5 text-[var(--color-cyan-muted)] sm:h-6 sm:w-6" aria-hidden />
                </div>
                <div className="flex-1">
                  <div className="mb-1 flex flex-wrap items-center gap-2">
                    <h3 className="!text-[0.95rem] sm:!text-[1.05rem]">{item.title}</h3>
                    <span className="rounded-full bg-[var(--color-success)]/10 px-2 py-0.5 text-[0.68rem] font-bold text-[var(--color-success)]">
                      GRATIS
                    </span>
                  </div>
                  <p className="mb-1.5 text-[0.82rem] leading-relaxed text-[var(--color-texto-muted)] sm:text-[0.88rem]">{item.description}</p>
                  <p className="text-[0.78rem] font-medium text-[var(--color-success)]">
                    Incluido na formacao
                  </p>
                </div>
              </div>
            </GlowingShadow>
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
    <section
      id="preco"
      className="relative overflow-hidden px-4 py-14 sm:px-8 sm:py-20 md:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      <div className="relative mx-auto max-w-[560px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label section-label-light justify-center">Investimento</span>
          <h2 className="!text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">O investimento para iniciar sua nova profissao</h2>
        </div>

        {/* O que esta incluido */}
        <div className="mb-6 space-y-2.5 sm:mb-8" data-reveal="fade">
          {[
            'Curso Presencial — 3 meses (100h+)',
            'Plataforma com +50 videoaulas',
            'Certificado com TCC',
            'Grupo VIP no WhatsApp',
            'Kit do Adestrador Profissional',
          ].map((label) => (
            <div key={label} className="flex items-center gap-3 rounded-lg border border-white/5 bg-white/3 px-4 py-2.5 sm:px-5 sm:py-3">
              <CheckCircle2 className="h-4 w-4 shrink-0 text-[var(--color-success)]" aria-hidden />
              <span className="text-[0.82rem] text-[var(--color-cinza-300)] sm:text-[0.88rem]">{label}</span>
            </div>
          ))}
        </div>

        {/* Wrapper with padding-top so badge isn't clipped */}
        <div className="pt-4" data-reveal="scale">
          <div
            id="checkout"
            className="relative rounded-2xl border-2 border-[var(--color-cyan-muted)]/30 bg-[var(--color-branco)] shadow-[0_0_60px_rgba(46,222,240,0.08)] scroll-mt-28 sm:rounded-3xl"
          >
            {/* Badge */}
            <span
              className="absolute left-1/2 top-0 z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[0.75rem] font-bold uppercase tracking-widest text-white shadow-md sm:px-5 sm:py-2 sm:text-[0.78rem]"
              style={{ background: 'var(--color-vermelho-muted)' }}
            >
              Oferta especial
            </span>

            <div className="px-5 pb-6 pt-8 sm:px-10 sm:pb-10 sm:pt-12">
              <p className="mb-1 text-center text-[0.82rem] font-medium text-[var(--color-texto-muted)] sm:text-[0.88rem]">
                Tudo isso por apenas
              </p>

              {/* Main price */}
              <p
                className="mt-2 text-center text-[1.65rem] font-bold bg-clip-text text-transparent sm:mt-3 sm:text-3xl md:text-4xl"
                style={{
                  backgroundImage: 'var(--gradient-cyan)',
                  fontFamily: "'DM Serif Display', Georgia, serif",
                }}
              >
                12x de R$ 233,33
              </p>

              {/* Pix price */}
              <p className="mt-3 text-center text-[0.88rem] text-[var(--color-texto-muted)] sm:mt-4 sm:text-[0.95rem]">
                Ou{' '}
                <span className="font-bold text-[var(--color-success)]">R$ 2.660 a vista no Pix</span>{' '}
                <span className="text-[var(--color-cinza-400)]">(com desconto)</span>
              </p>

              <p className="mt-1.5 text-center text-[0.78rem] text-[var(--color-cinza-400)] sm:mt-2 sm:text-[0.82rem]">
                Opcoes flexiveis em 3x ou 6x sem juros no cartao.
              </p>

              {/* Custo por hora */}
              <p className="mt-4 text-center text-[0.75rem] text-[var(--color-cinza-400)] sm:mt-5 sm:text-[0.78rem]">
                Menos de R$ 27/hora de formacao profissional
              </p>

              {/* Divider */}
              <div className="mx-auto my-5 h-px w-full bg-[var(--color-cinza-200)] sm:my-6" />

              {/* CTA */}
              <CheckoutButton
                className="btn-primary inline-flex min-h-[50px] w-full items-center justify-center gap-2 !rounded-full !px-4 !py-3.5 !text-[0.88rem] !font-bold !no-underline hover:!no-underline sm:min-h-[56px] sm:!px-6 sm:!py-4 sm:!text-[0.95rem]"
              >
                Quero me tornar Adestrador Profissional
              </CheckoutButton>

              {/* Trust badges */}
              <div className="mt-4 flex flex-col items-center gap-2.5 sm:mt-5 sm:flex-row sm:justify-center sm:gap-4">
                {['30 dias de garantia', 'Pagamento seguro', 'Vagas limitadas'].map((t) => (
                  <div key={t} className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-[var(--color-success)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-[0.78rem] text-[var(--color-cinza-500)] sm:text-[0.8rem]">{t}</span>
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
    pergunta: 'Preciso ter experiencia previa?',
    resposta:
      'Nao. O curso foi desenhado para ensinar do zero ao avancado. Voce nao precisa de experiencia previa com adestramento — nosso metodo te guia passo a passo durante os 3 meses.',
  },
  {
    pergunta: 'Consigo conciliar com meu trabalho atual?',
    resposta:
      'Sim. Oferecemos turmas noturnas (Tercas e Quintas, 19h as 22h) e turmas aos Sabados (08h as 14h), para voce encaixar na sua rotina sem precisar largar seu emprego.',
  },
  {
    pergunta: 'Quanto tempo ate conseguir o primeiro cliente?',
    resposta:
      'Muitos alunos conseguem o primeiro cliente ainda durante o curso, aplicando as tecnicas de posicionamento e captacao que ensinamos no Mes 3. O metodo inclui scripts prontos e estrategias testadas. Resultados variam conforme dedicação.',
  },
  {
    pergunta: 'Como esta o mercado para adestradores?',
    resposta:
      'O mercado pet brasileiro e o 3o maior do mundo e cresce 14% ao ano (ABINPET). A demanda por profissionais qualificados acompanha esse crescimento. Resultados individuais variam conforme dedicacao, regiao e experiencia.',
  },
  {
    pergunta: 'O certificado e reconhecido?',
    resposta:
      'Sim. O curso possui carga de +100 horas e inclui TCC (Trabalho de Conclusao de Curso). Voce recebe um certificado de conclusao que comprova sua formacao como adestrador profissional.',
  },
  {
    pergunta: 'E se eu faltar uma aula?',
    resposta:
      'Voce tem acesso a plataforma online com +50 videoaulas para acompanhar e revisar todo o conteudo. Alem disso, o grupo VIP no WhatsApp permite tirar duvidas a qualquer momento.',
  },
  {
    pergunta: 'Tem acompanhamento apos o curso?',
    resposta:
      'Sim. O grupo VIP no WhatsApp continua ativo apos o termino do curso, para que voce troque experiencias com outros adestradores formados e tire duvidas conforme atende seus primeiros clientes.',
  },
  {
    pergunta: 'Como funciona a garantia de 30 dias?',
    resposta:
      'Se por qualquer motivo voce nao ficar satisfeito com o curso nos primeiros 30 dias, devolvemos 100% do valor investido. Sem burocracia, sem perguntas. O risco e todo nosso.',
  },
]

function FAQ() {
  useScrollReveal()
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section
      id="faq"
      className="bg-[var(--color-cream)] px-4 py-14 sm:px-8 sm:py-20 md:py-28"
    >
      <div className="mx-auto max-w-[700px]">
        <div className="mb-10 text-center sm:mb-14" data-reveal="up">
          <span className="section-label justify-center">FAQ</span>
          <h2 className="!text-[1.5rem] sm:!text-[1.75rem] md:!text-[2.2rem]">Perguntas frequentes</h2>
        </div>

        <div className="overflow-hidden rounded-xl border border-[var(--color-cinza-200)] bg-[var(--color-branco)] sm:rounded-2xl" data-reveal="fade">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-[var(--color-cinza-200)]/60 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full min-h-[52px] items-center justify-between gap-3 bg-transparent px-4 py-4 text-left text-[0.92rem] font-semibold text-[var(--color-charcoal)] transition-colors hover:bg-[var(--color-cinza-100)]/50 !rounded-none sm:gap-4 sm:px-6 sm:py-5 sm:text-base"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {item.pergunta}
                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-[var(--color-cyan-muted)] transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-64' : 'max-h-0'}`}
              >
                <p className="px-4 pb-4 text-[0.88rem] leading-relaxed text-[var(--color-texto-muted)] sm:px-6 sm:pb-5 sm:text-[0.95rem]">
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

/* ─────────────────── CTA FINAL ─────────────────── */

function LandingCtaFinal() {
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
            <span className="block text-[0.82rem] font-bold text-white sm:text-sm">30 dias de garantia</span>
            <span className="text-[0.72rem] text-[var(--color-cinza-400)] sm:text-xs">ou seu dinheiro de volta</span>
          </div>
        </div>

        <p className="mb-6 text-[0.95rem] leading-relaxed text-[var(--color-cinza-400)] sm:mb-8 sm:text-[1.1rem]">
          Inscreva-se com seguranca e teste o metodo sem risco. Se nao ficar satisfeito nos primeiros 30 dias, devolvemos 100% do valor. Sem burocracia.
        </p>

        <CheckoutButton
          className="btn-primary inline-flex min-h-[50px] w-full items-center justify-center gap-2 !rounded-full !px-8 !py-3.5 !text-[0.9rem] !font-bold !no-underline hover:!no-underline sm:min-h-[56px] sm:w-auto sm:!px-10 sm:!py-4 sm:!text-base"
        >
          Quero garantir minha vaga agora
        </CheckoutButton>

        <p className="mt-4 text-[0.78rem] text-[var(--color-cinza-500)] sm:mt-5">
          Restam poucas vagas — turma limitada a 15 alunos.
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

export default function LandingPage() {
  return (
    <div className="min-h-screen overflow-x-clip">
      <LandingHeader />
      <HeroSection />
      <PublicoAlvo />
      <Jornada />
      <Entregaveis />
      <MercadoPet />
      <SobreBrenno />
      <Formato />
      <Bonus />
      <Preco />
      <FAQ />
      <LandingCtaFinal />
      <LandingFooter />
    </div>
  )
}
