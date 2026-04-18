import { useState, useEffect, useCallback } from 'react'
import {
  Shield,
  AlertTriangle,
  BookOpen,
  Scale,
  ShieldCheck,
  CheckCircle2,
  Download,
  FileText,
  Award,
  TrendingUp,
  DollarSign,
  Users,
  ArrowRight,
  Dog,
  Clock,
  Lock,
  X,
} from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { assetUrl } from '../utils/assetUrl'
import { trackViewContent, trackCompleteRegistration, trackContact } from '../utils/metaPixel'
import LeadCaptureForm from '../components/LeadCaptureForm'

const SESSION_KEY = 'dw_cert_popup_shown'

/* ─────────────────── POPUP AUTO-OPEN ─────────────────── */

function AutoPopup({ onSuccess }) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return
    const timer = setTimeout(() => setOpen(true), 3000)
    return () => clearTimeout(timer)
  }, [])

  const dismiss = useCallback(() => {
    sessionStorage.setItem(SESSION_KEY, '1')
    setOpen(false)
  }, [])

  useEffect(() => {
    if (!open) return
    const onEsc = (e) => { if (e.key === 'Escape') dismiss() }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, dismiss])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  function handleSuccess(data) {
    sessionStorage.setItem(SESSION_KEY, '1')
    setOpen(false)
    onSuccess(data)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Receba o Guia de Certificacao Dog Walker">
      <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]" onClick={dismiss} />

      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[rgba(46,222,240,0.12)] bg-gradient-to-b from-[#111827] to-[#0B1120] shadow-[0_24px_80px_rgba(0,0,0,0.5)] animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        {/* Cyan accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2edef0] to-transparent" />

        <button
          onClick={dismiss}
          className="absolute top-3 right-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:border-white/40 hover:bg-white/20"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>

        <div className="p-6 pt-8 sm:p-8 sm:pt-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(46,222,240,0.2)] bg-gradient-to-br from-[rgba(46,222,240,0.15)] to-[rgba(46,222,240,0.05)]">
            <Download className="h-7 w-7 text-[#2edef0]" />
          </div>

          <h2 className="mb-2 text-center text-[1.35rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.5rem]">
            Guia Gratuito de Certificacao
          </h2>
          <p className="mb-6 text-center text-[0.9rem] leading-relaxed text-white/55">
            Descubra como se certificar antes da nova regulamentacao
          </p>

          <LeadCaptureForm source="certificacao-popup" onSuccess={handleSuccess} />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96) }
          to { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>
    </div>
  )
}

/* ─────────────────── MANUAL POPUP (CTA triggered) ─────────────────── */

function ManualPopup({ open, onSuccess, onDismiss }) {
  useEffect(() => {
    if (!open) return
    const onEsc = (e) => { if (e.key === 'Escape') onDismiss() }
    document.addEventListener('keydown', onEsc)
    return () => document.removeEventListener('keydown', onEsc)
  }, [open, onDismiss])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Receba o Guia de Certificacao Dog Walker">
      <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]" onClick={onDismiss} />

      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-[rgba(46,222,240,0.12)] bg-gradient-to-b from-[#111827] to-[#0B1120] shadow-[0_24px_80px_rgba(0,0,0,0.5)] animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2edef0] to-transparent" />

        <button
          onClick={onDismiss}
          className="absolute top-3 right-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:border-white/40 hover:bg-white/20"
          aria-label="Fechar"
        >
          <X size={18} />
        </button>

        <div className="p-6 pt-8 sm:p-8 sm:pt-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-[rgba(46,222,240,0.2)] bg-gradient-to-br from-[rgba(46,222,240,0.15)] to-[rgba(46,222,240,0.05)]">
            <Download className="h-7 w-7 text-[#2edef0]" />
          </div>

          <h2 className="mb-2 text-center text-[1.35rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.5rem]">
            Guia Gratuito de Certificacao
          </h2>
          <p className="mb-6 text-center text-[0.9rem] leading-relaxed text-white/55">
            Preencha seus dados e receba o guia completo agora
          </p>

          <LeadCaptureForm source="certificacao-cta" onSuccess={onSuccess} />
        </div>
      </div>

      <style>{`
        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.96) }
          to { opacity: 1; transform: translateY(0) scale(1) }
        }
      `}</style>
    </div>
  )
}

/* ─────────────────── SECAO PERSONALIZADA (inline na pagina) ─────────────────── */

function PersonalizedBanner({ nome, profissao }) {
  const firstName = nome ? nome.trim().split(/\s+/)[0] : ''

  return (
    <section id="personalizado" className="relative overflow-hidden px-5 pt-28 pb-14 sm:px-8 sm:pt-36 sm:pb-20" style={{ background: 'var(--gradient-hero)' }}>
      {/* Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.3), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[720px]">
        {/* Icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(46,222,240,0.2)] bg-gradient-to-br from-[rgba(46,222,240,0.15)] to-[rgba(46,222,240,0.05)]">
          <Dog className="h-8 w-8 text-[#2edef0]" />
        </div>

        {/* Headline personalizado */}
        <h2 className="mb-6 text-center text-[1.5rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.85rem] md:text-[2.2rem]">
          {firstName}, e se voce nao precisasse mais trabalhar como{' '}
          <span className="bg-gradient-to-r from-[#1BA8B8] to-[#2edef0] bg-clip-text text-transparent">
            {profissao}
          </span>?
        </h2>

        {/* Copy personalizado */}
        <div className="mx-auto max-w-[600px] space-y-4 text-[0.95rem] leading-relaxed text-white/70 sm:text-[1.05rem]">
          <p>
            <strong className="text-white">Eu sei que mudar de carreira nao e uma decisao facil.</strong>{' '}
            Mas {firstName}, milhares de pessoas que trabalhavam como {profissao} ja fizeram
            essa transicao e hoje faturam entre{' '}
            <strong className="text-white">R$ 4.000 a R$ 7.000 por mes</strong> como Dog Walker
            profissional — ao ar livre, no proprio horario, fazendo o que amam.
          </p>
          <p>
            Voce nao precisa largar tudo amanha. Muitos comecaram nos fins de semana e so
            fizeram a transicao quando ja faturavam mais do que ganhavam antes. O segredo e{' '}
            <strong className="text-white">comecar com a preparacao certa</strong>.
          </p>
          <p className="rounded-xl border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/[0.06] p-4 text-[var(--color-cyan)]">
            E com a nova lei exigindo certificacao obrigatoria, quem se preparar agora vai
            dominar o mercado enquanto os outros ainda estao descobrindo que essa profissao existe.
          </p>
        </div>

        {/* Download + seta */}
        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href="/downloads/certificacao-dog-walker.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCompleteRegistration('Certificacao Dog Walker')}
            className="btn-primary inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 !rounded-full !px-8 !py-3.5 !text-[0.95rem] !font-bold !no-underline hover:!no-underline sm:!px-10 sm:!text-base"
          >
            <Download className="h-5 w-5" aria-hidden />
            Acessar Guia de Certificacao
          </a>

          <a
            href={`https://wa.me/5511934066866?text=${encodeURIComponent(`Oi Brenno, sou ${firstName}. Acabei de baixar o guia de certificação e quero saber mais sobre o curso de Dog Walker!`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact('Lead Certificacao WhatsApp')}
            className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-full border-2 border-[#25d366]/40 bg-[#25d366]/10 px-8 py-3 text-[0.9rem] font-bold text-[#25d366] shadow-[0_4px_16px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25d366]/60 hover:bg-[#25d366]/20 !no-underline hover:!no-underline sm:px-10 sm:text-[0.95rem]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.49 0 .16 5.32.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.58 0 11.92-5.33 11.92-11.9a11.8 11.8 0 0 0-3.48-8.42Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.76.99 1-3.66-.24-.38A9.84 9.84 0 0 1 2.15 11.9C2.15 6.42 6.6 1.96 12.08 1.96c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.9 6.98c0 5.49-4.46 9.94-9.9 9.94Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49a9.1 9.1 0 0 1-1.68-2.08c-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.25 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            Falar com o Brenno no WhatsApp
          </a>

          <div className="flex flex-col items-center gap-2">
            <p className="text-[0.82rem] font-medium text-white/40">
              Continue rolando para ver o plano completo
            </p>
            <ArrowRight className="h-5 w-5 rotate-90 animate-bounce text-[#2edef0]" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── HEADER ─────────────────── */

function CertHeader({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0B1120]/95 shadow-lg shadow-black/10 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-3.5 sm:px-8 sm:py-4">
        <a href="/" className="flex items-center gap-2.5 !no-underline">
          <img
            src={assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')}
            alt="Classe A Pets"
            className="h-8 w-auto sm:h-10"
            width={320}
            height={320}
            loading="eager"
          />
          <span className="hidden text-base font-bold tracking-tight text-white sm:inline sm:text-lg">
            Classe A Pets
          </span>
        </a>
        <button
          onClick={onCtaClick}
          className="btn-primary inline-flex cursor-pointer items-center gap-2 !rounded-full !px-5 !py-2.5 !text-[0.82rem] !font-bold !no-underline hover:!no-underline sm:!px-6 sm:!text-[0.88rem]"
        >
          <Download className="h-4 w-4" aria-hidden />
          Quero o Guia
        </button>
      </div>
    </header>
  )
}

/* ─────────────────── HERO ─────────────────── */

function HeroSection({ onCtaClick }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div
        className="pointer-events-none absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.12), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-[10%] -left-[10%] h-[400px] w-[400px] rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(27,168,184,0.10), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 md:pb-32 md:pt-40">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Text */}
          <div className="text-center md:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-vermelho)]/25 bg-[var(--color-vermelho)]/8 px-4 py-1.5 sm:mb-6">
              <AlertTriangle className="h-3.5 w-3.5 text-[var(--color-vermelho)]" />
              <span className="text-[0.75rem] font-semibold tracking-wide text-[var(--color-vermelho)] uppercase">
                Regulamentacao em andamento
              </span>
            </div>

            <h1 className="mb-5 text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.2rem]">
              Certificacao Dog Walker:{' '}
              <span className="bg-gradient-to-r from-[#1BA8B8] to-[#2edef0] bg-clip-text text-transparent">
                tudo que voce precisa saber
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-[520px] text-[0.95rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[1.1rem] md:mx-0">
              Baixe gratuitamente o guia completo sobre a nova regulamentacao, requisitos de certificacao e como se preparar para atuar legalmente como Dog Walker Profissional.
            </p>

            <button
              onClick={onCtaClick}
              className="btn-primary inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 !rounded-full !px-8 !py-3.5 !text-[0.95rem] !font-bold !no-underline hover:!no-underline sm:min-h-[56px] sm:w-auto sm:!px-10 sm:!py-4 sm:!text-base"
            >
              <Download className="h-5 w-5" aria-hidden />
              Quero o Guia Gratuito
            </button>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-8 md:justify-start">
              {[
                { icon: FileText, text: 'Material completo' },
                { icon: Lock, text: '100% gratuito' },
                { icon: Clock, text: 'Acesso imediato' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  <item.icon className="h-3.5 w-3.5 text-[var(--color-cyan-muted)]" />
                  <span className="text-[0.75rem] font-medium text-[var(--color-cinza-500)]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Guide mockup */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-3xl opacity-40 blur-3xl" style={{ background: 'var(--gradient-cyan)' }} aria-hidden />
              <div className="relative w-[220px] overflow-hidden rounded-2xl border border-[var(--color-cyan)]/20 bg-gradient-to-b from-[#1E293B] to-[#111827] p-6 shadow-2xl sm:w-[280px] sm:p-8 md:w-[320px]">
                <div className="mb-4 flex items-center gap-2">
                  <Shield className="h-5 w-5 text-[#2edef0]" />
                  <span className="text-[0.7rem] font-bold tracking-widest text-[#2edef0] uppercase">Guia Oficial</span>
                </div>
                <h3 className="mb-3 text-lg font-extrabold leading-tight text-white sm:text-xl">
                  Certificacao Dog Walker Profissional
                </h3>
                <p className="mb-5 text-[0.78rem] leading-relaxed text-white/50">
                  Classe A Pets — 2026
                </p>
                <div className="space-y-2.5">
                  {['Nova legislacao', 'Requisitos', 'Passo a passo', 'Checklist completo'].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                      <span className="text-[0.78rem] font-medium text-white/60">{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl bg-[var(--color-cyan)]/10 py-2.5 text-center">
                  <span className="text-[0.75rem] font-bold text-[#2edef0]">GRATUITO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── POR QUE CERTIFICAR ─────────────────── */

function BeneficiosCertificacao() {
  useScrollReveal()

  const beneficios = [
    {
      icon: DollarSign,
      title: 'Cobre ate 3x mais',
      text: 'Dog Walkers certificados tem justificativa para cobrar valores premium por passeio.',
    },
    {
      icon: Shield,
      title: 'Atue dentro da lei',
      text: 'Com a nova regulamentacao, a certificacao sera obrigatoria para exercer a profissao.',
    },
    {
      icon: Users,
      title: 'Conquiste mais clientes',
      text: 'Tutores preferem profissionais certificados pela seguranca e confianca que transmitem.',
    },
    {
      icon: TrendingUp,
      title: 'Destaque no mercado',
      text: 'Enquanto amadores disputam por preco, voce compete por qualidade e reputacao.',
    },
    {
      icon: Award,
      title: 'Certificado reconhecido',
      text: 'Certificado emitido pela Classe A Pets, referencia em adestramento profissional.',
    },
    {
      icon: Dog,
      title: 'Seguranca para os caes',
      text: 'Domine comportamento canino, emergencias e protocolos de seguranca nos passeios.',
    },
  ]

  return (
    <section id="beneficios" className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24" style={{ background: 'var(--gradient-section-dark)' }}>
      <div
        className="pointer-events-none absolute right-[-8%] top-[15%] h-[350px] w-[350px] rounded-full opacity-10 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.2), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="mb-12 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center">Por que se certificar</span>
          <h2 className="mx-auto max-w-[600px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            6 motivos para garantir sua certificacao agora
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6" data-reveal-stagger>
          {beneficios.map((b) => (
            <div
              key={b.title}
              className="card-dark group p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6"
            >
              <div className="mb-4 inline-flex rounded-xl p-2.5" style={{ background: 'var(--gradient-cyan-subtle)' }}>
                <b.icon className="h-5 w-5 text-white" aria-hidden />
              </div>
              <h3 className="mb-2 !text-[1rem] font-bold !text-white sm:!text-[1.05rem]">{b.title}</h3>
              <p className="text-[0.85rem] leading-relaxed text-[var(--color-cinza-400)]">{b.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── REGULAMENTACAO ─────────────────── */

function Regulamentacao() {
  useScrollReveal()

  const exigencias = [
    {
      icon: BookOpen,
      title: 'Treinamento obrigatorio',
      text: 'Certificacao em comportamento canino, tecnicas de manejo e sinais de emergencia.',
    },
    {
      icon: Scale,
      title: 'Licenca profissional',
      text: 'Licenca emitida pelo governo federal com renovacao a cada 2 anos.',
    },
    {
      icon: ShieldCheck,
      title: 'Avaliacao pratica',
      text: 'Prova pratica com avaliador credenciado para comprovar competencia.',
    },
  ]

  return (
    <section className="relative overflow-hidden bg-[var(--color-charcoal)] px-5 py-16 sm:px-8 sm:py-24">
      <div
        className="pointer-events-none absolute left-[-8%] bottom-[10%] h-[300px] w-[300px] rounded-full opacity-10 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.2), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1000px]">
        <div className="mb-5 flex justify-center" data-reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-vermelho)]/25 bg-[var(--color-vermelho)]/8 px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--color-vermelho)] uppercase">
            <AlertTriangle className="h-3.5 w-3.5" />
            Atencao — mudanca na legislacao
          </span>
        </div>

        <div className="mb-4 text-center" data-reveal="up">
          <h2 className="mx-auto max-w-[700px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            Nova lei vai tornar a certificacao{' '}
            <span className="text-[var(--color-vermelho)]">OBRIGATORIA</span>
          </h2>
        </div>

        <p className="mx-auto mb-12 max-w-[600px] text-center text-[0.9rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[0.95rem]" data-reveal>
          A Camara dos Deputados aprovou o Projeto de Lei que regulamenta a profissao de Dog Walker e
          Pet Sitter no territorio nacional. Quem nao se adequar ficara{' '}
          <strong className="text-white">impedido de atuar legalmente</strong>.
        </p>

        <p className="mb-6 text-center text-xs font-bold tracking-widest text-[var(--color-vermelho)] uppercase sm:mb-8" data-reveal>
          O que a lei vai exigir
        </p>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-3 md:gap-6" data-reveal-stagger>
          {exigencias.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[var(--color-vermelho)]/15 bg-[var(--color-vermelho)]/[0.04] p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6"
            >
              <div className="mb-3 inline-flex rounded-xl bg-[var(--color-vermelho)]/10 p-2.5">
                <item.icon className="h-5 w-5 text-[var(--color-vermelho)]" />
              </div>
              <h3 className="mb-1.5 !text-[0.95rem] font-bold !text-white sm:!text-[1.05rem]">{item.title}</h3>
              <p className="text-[0.82rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[0.88rem]">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/[0.04] p-6 sm:mt-14 sm:rounded-3xl sm:p-8" data-reveal="scale">
          <div className="flex flex-col items-center gap-4 text-center md:flex-row md:gap-8 md:text-left">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl" style={{ background: 'var(--gradient-cyan)' }}>
              <Shield className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="mb-1 !text-[1.1rem] !text-white sm:!text-[1.2rem]">Nao espere a lei entrar em vigor</h3>
              <p className="text-[0.88rem] leading-relaxed text-[var(--color-cinza-400)]">
                Nosso guia explica exatamente o que voce precisa fazer para estar preparado ANTES da regulamentacao ser aprovada. Quem se antecipar sai na frente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── CONTEUDO DO GUIA ─────────────────── */

function ConteudoGuia({ onCtaClick }) {
  useScrollReveal()

  const conteudo = [
    'Resumo completo da nova legislacao para Dog Walker e Pet Sitter',
    'Checklist de requisitos: o que voce precisa para se certificar',
    'Passo a passo: como dar entrada no processo de certificacao',
    'Comparativo: Dog Walker amador vs. Dog Walker certificado',
    'Tabela de precos: quanto cobrar como profissional certificado',
    'Modelo de contrato de prestacao de servico',
    'Ficha de avaliacao comportamental do cao',
    'Lista de emergencias e protocolos de seguranca',
  ]

  return (
    <section id="guia" className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24" style={{ background: 'var(--gradient-section-dark)' }}>
      <div
        className="pointer-events-none absolute right-[-5%] top-[30%] h-[400px] w-[400px] rounded-full opacity-8 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.15), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[900px]">
        <div className="mb-12 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center">O que voce recebe</span>
          <h2 className="mx-auto max-w-[550px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            Tudo dentro do guia gratuito
          </h2>
          <p className="mx-auto mt-3 max-w-[480px] text-[0.9rem] text-[var(--color-cinza-400)]">
            Um material completo para voce entender a regulamentacao e se preparar para atuar como Dog Walker Profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4" data-reveal-stagger>
          {conteudo.map((item) => (
            <div
              key={item}
              className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-[var(--color-cyan)]/15 hover:bg-[var(--color-cyan)]/[0.03]"
            >
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
              <span className="text-[0.88rem] leading-snug text-white/70">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-14" data-reveal="up">
          <button
            onClick={onCtaClick}
            className="btn-primary inline-flex min-h-[52px] w-full max-w-[400px] cursor-pointer items-center justify-center gap-2.5 !rounded-full !px-8 !py-3.5 !text-[0.95rem] !font-bold !no-underline hover:!no-underline sm:min-h-[56px] sm:w-auto sm:!px-10 sm:!py-4 sm:!text-base"
          >
            <Download className="h-5 w-5" aria-hidden />
            Quero o Guia Gratuito
          </button>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── SOCIAL PROOF ─────────────────── */

function SocialProof() {
  useScrollReveal()

  return (
    <section className="bg-[var(--color-charcoal)] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center">Classe A Pets</span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            Quem esta por tras deste guia
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-14" data-reveal="up">
          <div className="flex justify-center">
            <img
              src={assetUrl('/images/optimized/foto-brenno-480w.webp')}
              srcSet={`${assetUrl('/images/optimized/foto-brenno-320w.webp')} 320w, ${assetUrl('/images/optimized/foto-brenno-480w.webp')} 480w`}
              sizes="(max-width: 640px) 200px, 280px"
              alt="Brenno Rodrigues — Adestrador profissional e fundador da Classe A Pets"
              className="w-[200px] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:w-[280px]"
              width={480}
              height={480}
              loading="lazy"
              decoding="async"
            />
          </div>

          <div>
            <p className="mb-4 text-[0.95rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[1.05rem]">
              Eu sou o <strong className="text-white">Brenno Rodrigues</strong>, adestrador profissional e fundador da Classe A Pets.
              Comecei como Dog Walker em 2017 e de la pra ca ja transformei a vida de mais de 500 caes.
            </p>
            <p className="mb-6 text-[0.95rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[1.05rem]">
              Este guia reune tudo que aprendi na pratica sobre certificacao, regulamentacao e o que separa
              um amador de um profissional que cobra 3x mais e nunca falta cliente.
            </p>

            <div className="flex flex-wrap gap-6">
              {[
                { value: '+500', label: 'caes atendidos' },
                { value: '+250', label: 'familias' },
                { value: '5+', label: 'anos de experiencia' },
              ].map((s) => (
                <div key={s.label} className="flex items-center gap-2">
                  <span className="bg-gradient-to-r from-[#1BA8B8] to-[#2edef0] bg-clip-text text-lg font-bold text-transparent sm:text-xl">
                    {s.value}
                  </span>
                  <span className="text-[0.78rem] font-medium text-[var(--color-cinza-500)]">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── CTA FINAL ─────────────────── */

function CtaFinal({ onCtaClick }) {
  useScrollReveal()

  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24" style={{ background: 'var(--gradient-section-dark)' }}>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-15 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.3), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[650px] text-center" data-reveal="up">
        <div className="mb-5 inline-flex rounded-full border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/8 px-4 py-1.5">
          <span className="text-[0.75rem] font-semibold tracking-wider text-[#2edef0] uppercase">
            Material gratuito
          </span>
        </div>

        <h2 className="mb-4 !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
          Nao fique para tras enquanto o mercado se profissionaliza
        </h2>

        <p className="mx-auto mb-8 max-w-[500px] text-[0.95rem] leading-relaxed text-[var(--color-cinza-400)]">
          A regulamentacao esta chegando. Quem se antecipar vai sair na frente com mais clientes, melhores precos e seguranca juridica.
        </p>

        <button
          onClick={onCtaClick}
          className="btn-primary inline-flex min-h-[52px] w-full max-w-[400px] cursor-pointer items-center justify-center gap-2.5 !rounded-full !px-8 !py-3.5 !text-[0.95rem] !font-bold !no-underline hover:!no-underline sm:min-h-[56px] sm:w-auto sm:!px-10 sm:!py-4 sm:!text-base"
        >
          Quero me Certificar
          <ArrowRight className="h-4 w-4" aria-hidden />
        </button>

        <p className="mt-4 text-[0.75rem] text-white/30">
          Seus dados estao seguros. Nao enviamos spam.
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── FOOTER ─────────────────── */

function CertFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0B1120] px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <img
              src={assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')}
              alt="Classe A Pets"
              className="h-6 w-auto"
              width={320}
              height={320}
              loading="lazy"
            />
            <span className="text-sm font-semibold text-white/60">Classe A Pets</span>
          </div>
          <div className="flex gap-4 text-[0.78rem] text-white/40">
            <a href="/termos-de-uso" className="transition-colors hover:text-white/60">Termos de Uso</a>
            <a href="/politica-de-privacidade" className="transition-colors hover:text-white/60">Privacidade</a>
          </div>
        </div>
        <p className="mt-4 text-center text-[0.72rem] text-white/25 sm:text-left">
          Classe A Pets {new Date().getFullYear()}. Todos os direitos reservados. Os resultados podem variar de pessoa para pessoa.
        </p>
      </div>
    </footer>
  )
}

/* ─────────────────── PAGE ─────────────────── */

export default function LeadCertificacao() {
  const [lead, setLead] = useState(null)
  const [manualPopup, setManualPopup] = useState(false)

  useScrollReveal()

  useEffect(() => {
    document.title = 'Certificacao Dog Walker — Guia Gratuito | Classe A Pets'
    trackViewContent('Certificacao Dog Walker', 'lead_capture')
  }, [])

  const openForm = () => setManualPopup(true)

  function handleSuccess(data) {
    setManualPopup(false)
    setLead(data)
    // Scroll to personalized section after popup closes
    requestAnimationFrame(() => {
      const el = document.getElementById('personalizado')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div className="min-h-screen overflow-x-clip">
      <CertHeader onCtaClick={openForm} />

      {/* Secao personalizada — topo da pagina apos preencher o formulario */}
      {lead && <PersonalizedBanner nome={lead.nome} profissao={lead.profissao} />}

      <HeroSection onCtaClick={openForm} />
      <BeneficiosCertificacao />
      <Regulamentacao />
      <ConteudoGuia onCtaClick={openForm} />
      <SocialProof />
      <CtaFinal onCtaClick={openForm} />
      <CertFooter />

      {/* Auto-opening popup after 3s */}
      <AutoPopup onSuccess={handleSuccess} />

      {/* CTA-triggered popup */}
      <ManualPopup
        open={manualPopup}
        onSuccess={handleSuccess}
        onDismiss={() => setManualPopup(false)}
      />
    </div>
  )
}
