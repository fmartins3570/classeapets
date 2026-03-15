import { useEffect, useState } from 'react'
import {
  DollarSign,
  Clock,
  Calendar,
  TrendingUp,
  ArrowRight,
} from 'lucide-react'
import { assetUrl } from '../utils/assetUrl'
import { FallingPattern } from '../components/ui/FallingPattern'
import VideoPlayer from '../components/ui/VideoPlayer'
import useScrollReveal from '../hooks/useScrollReveal'

/* ─────────────────── HEADER ─────────────────── */

function AwarenessHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
            decoding="async"
            fetchPriority="high"
          />
        </a>

        <a
          href="/curso-adestramento-classeapets-presencial"
          className="btn-primary !rounded-full !px-5 !py-2.5 !text-[0.78rem] !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline sm:!px-6 sm:!text-[0.82rem]"
        >
          Conhecer a Formação
        </a>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 translate-y-full"
        style={{ background: 'linear-gradient(to bottom, rgba(46,222,240,0.07), rgba(46,222,240,0.02) 40%, transparent)' }}
        aria-hidden
      />
    </header>
  )
}

/* ─────────────────── STAT CARD ─────────────────── */

function StatCard({ icon: Icon, value, label, accent = false }) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-1 sm:p-8 ${
        accent
          ? 'border-[var(--color-cyan)]/30 bg-[var(--color-cyan)]/5'
          : 'border-white/8 bg-white/[0.03]'
      }`}
    >
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--color-cyan)]/5 blur-2xl transition-all duration-500 group-hover:bg-[var(--color-cyan)]/10" aria-hidden />

      <div className="relative z-10">
        <div className={`mb-3 inline-flex rounded-xl p-2.5 ${accent ? 'bg-[var(--color-cyan)]/15' : 'bg-white/5'}`}>
          <Icon className={`h-5 w-5 ${accent ? 'text-[var(--color-cyan)]' : 'text-[var(--color-cinza-200)]'}`} />
        </div>
        <p className={`text-2xl font-bold tracking-tight sm:text-3xl ${accent ? 'text-[var(--color-cyan)]' : 'text-white'}`}>
          {value}
        </p>
        <p className="mt-1 text-sm font-medium leading-relaxed text-[var(--color-cinza-200)]">
          {label}
        </p>
      </div>
    </div>
  )
}

/* ─────────────────── COMPARISON ─────────────────── */

function ComparisonSection() {
  const items = [
    { clt: 'Horário fixo — 44h/semana', adestrador: 'Você monta sua própria agenda' },
    { clt: 'Salário limitado todo mês', adestrador: 'R$130-250 por atendimento' },
    { clt: 'Esperar a sexta-feira chegar', adestrador: 'Todo dia é o melhor dia da semana' },
    { clt: 'Preso no escritório', adestrador: 'Ao ar livre, com cães, com famílias' },
  ]

  return (
    <div className="mx-auto max-w-3xl">
      <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-0">
        {/* Headers */}
        <div className="rounded-tl-2xl border-b border-white/10 bg-white/[0.03] px-4 py-4 sm:px-6">
          <p className="text-xs font-bold tracking-widest text-[var(--color-cinza-200)] uppercase">Regime CLT</p>
        </div>
        <div className="border-b border-white/10 bg-transparent px-2" />
        <div className="rounded-tr-2xl border-b border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/5 px-4 py-4 sm:px-6">
          <p className="text-xs font-bold tracking-widest text-[var(--color-cyan)] uppercase">Adestrador</p>
        </div>

        {/* Rows */}
        {items.map((item, i) => (
          <div key={i} className="contents">
            <div className={`flex items-center border-b border-white/5 bg-white/[0.02] px-4 py-4 sm:px-6 ${i === items.length - 1 ? 'rounded-bl-2xl' : ''}`}>
              <p className="text-sm font-medium leading-relaxed text-[var(--color-cinza-200)]">{item.clt}</p>
            </div>
            <div className="flex items-center justify-center border-b border-white/5 px-2">
              <ArrowRight className="h-4 w-4 text-[var(--color-cyan)]/60" />
            </div>
            <div className={`flex items-center border-b border-[var(--color-cyan)]/10 bg-[var(--color-cyan)]/[0.03] px-4 py-4 sm:px-6 ${i === items.length - 1 ? 'rounded-br-2xl' : ''}`}>
              <p className="text-sm font-semibold leading-relaxed text-white">{item.adestrador}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ─────────────────── CTA SECTION ─────────────────── */

function CtaSection() {
  return (
    <section className="relative py-16 sm:py-24">
      {/* Glow background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="h-[300px] w-[600px] rounded-full bg-[var(--color-cyan)]/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-[var(--color-cyan)] uppercase">
          Próximo passo
        </p>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Quer transformar isso<br className="hidden sm:block" /> em profissão?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--color-cinza-200)] sm:text-lg">
          Conheça a formação presencial de adestradores profissionais da Classe A Pets.
          Do zero ao seu primeiro cliente.
        </p>

        <a
          href="/curso-adestramento-classeapets-presencial"
          className="btn-primary group mt-8 inline-flex items-center gap-3 !rounded-full !px-8 !py-4 !text-sm !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline sm:!text-base"
        >
          Conhecer a Formação
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <p className="mt-6 text-xs text-[var(--color-cinza-300)]">
          Vagas limitadas — turma presencial em São Paulo
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── FOOTER SIMPLES ─────────────────── */

function SimpleFooter() {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-charcoal)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between">
        <a href="/" className="inline-flex items-center !no-underline hover:opacity-90 hover:!no-underline">
          <img
            src={assetUrl('/images/optimized/logo-classeapets-transparent-v2.webp')}
            alt="Classe A Pets"
            className="w-10 object-contain"
            decoding="async"
          />
        </a>
        <p className="text-xs text-[var(--color-cinza-300)]">
          &copy; {new Date().getFullYear()} Classe A Pets. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a href="/termos-de-uso" className="text-xs text-[var(--color-cinza-300)] !no-underline transition-colors hover:text-[var(--color-cinza-300)] hover:!no-underline">
            Termos de uso
          </a>
          <a href="/politica-de-privacidade" className="text-xs text-[var(--color-cinza-300)] !no-underline transition-colors hover:text-[var(--color-cinza-300)] hover:!no-underline">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────── MAIN PAGE ─────────────────── */

export default function LandingAwareness() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Quanto ganha um Adestrador Profissional? | Classe A Pets'
  }, [])

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <AwarenessHeader />

      {/* ── HERO + VIDEO ── */}
      <section className="relative overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-12">
        <FallingPattern
          color="rgba(46, 222, 240, 0.4)"
          backgroundColor="#111827"
          duration={140}
          blurIntensity="0.4em"
          density={1.4}
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_85%)]"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-5">
          {/* Badge */}
          <div className="mb-6 flex justify-center" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--color-cyan)] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)] animate-pulse" />
              Conteúdo exclusivo
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-center text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            data-reveal
          >
            <span className="text-white">Quanto ganha um</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-[var(--color-cyan)] to-[#2edef0] bg-clip-text text-transparent">
              Adestrador Profissional?
            </span>
          </h1>

          <p
            className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-[var(--color-cinza-200)] sm:mt-5 sm:text-lg"
            data-reveal
          >
            Descubra os números reais da profissão e por que cada vez mais pessoas
            estão trocando o CLT pela liberdade de trabalhar com cães.
          </p>

          {/* Video */}
          <div className="mt-8 sm:mt-12" data-reveal>
            <VideoPlayer src="/videos/conteudo-exclusivo-awareness.mp4" />
          </div>

          {/* CTA abaixo do vídeo */}
          <div className="mt-8 flex justify-center" data-reveal>
            <a
              href="/curso-adestramento-classeapets-presencial"
              className="btn-primary group inline-flex items-center gap-3 !rounded-full !px-8 !py-4 !text-sm !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline sm:!text-base"
            >
              Conhecer a Formação
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ── NÚMEROS DA PROFISSÃO ── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <p
            className="mb-3 text-center text-sm font-semibold tracking-widest text-[var(--color-cyan)] uppercase"
            data-reveal
          >
            Os números
          </p>
          <h2
            className="mb-10 text-center text-2xl font-bold tracking-tight text-white sm:mb-14 sm:text-3xl md:text-4xl"
            data-reveal
          >
            A realidade do adestrador em São Paulo
          </h2>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4" data-reveal data-reveal-stagger>
            <StatCard
              icon={DollarSign}
              value="R$130–250"
              label="por atendimento de 40-50 minutos"
              accent
            />
            <StatCard
              icon={TrendingUp}
              value="R$4.000–7.000"
              label="por mês trabalhando 2-3x na semana"
            />
            <StatCard
              icon={Clock}
              value="2–3 dias"
              label="de trabalho por semana são suficientes"
            />
            <StatCard
              icon={Calendar}
              value="100%"
              label="de liberdade para montar sua agenda"
            />
          </div>
        </div>
      </section>

      {/* ── QUANTO FATURA ── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <p
            className="mb-3 text-center text-sm font-semibold tracking-widest text-[var(--color-cyan)] uppercase"
            data-reveal
          >
            Na prática
          </p>
          <h2
            className="mb-4 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            data-reveal
          >
            Quanto um adestrador bem posicionado fatura por mês?
          </h2>
          <p
            className="mx-auto mb-8 max-w-xl text-center text-base leading-relaxed text-[var(--color-cinza-200)] sm:mb-12 sm:text-lg"
            data-reveal
          >
            O Brenno mostra os números reais da profissão — sem promessas, só fatos.
          </p>

          <div data-reveal>
            <VideoPlayer src="/videos/quanto-fatura-adestrador.mp4" />
          </div>
        </div>
      </section>

      {/* ── COMPARATIVO ── */}
      <section className="relative py-8 sm:py-16">
        <div className="mx-auto max-w-5xl px-5">
          <p
            className="mb-3 text-center text-sm font-semibold tracking-widest text-[var(--color-cyan)] uppercase"
            data-reveal
          >
            Comparativo
          </p>
          <h2
            className="mb-10 text-center text-2xl font-bold tracking-tight text-white sm:mb-14 sm:text-3xl"
            data-reveal
          >
            O que muda quando você vira adestrador
          </h2>

          <div data-reveal>
            <ComparisonSection />
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <CtaSection />

      {/* ── FOOTER ── */}
      <SimpleFooter />
    </div>
  )
}
