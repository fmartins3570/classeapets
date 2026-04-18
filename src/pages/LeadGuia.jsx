import { useState, useEffect, useCallback } from 'react'
import {
  MapPin,
  TrendingUp,
  Briefcase,
  Heart,
  ArrowRight,
  Clock,
  Download,
  X,
  CheckCircle2,
  Dog,
  Shield,
  DollarSign,
  Sun,
  Users,
  AlertTriangle,
  FileText,
  Lock,
} from 'lucide-react'
import useScrollReveal from '../hooks/useScrollReveal'
import { assetUrl } from '../utils/assetUrl'
import { trackViewContent, trackCompleteRegistration, trackContact } from '../utils/metaPixel'
import LeadCaptureForm from '../components/LeadCaptureForm'

const SESSION_KEY = 'dw_guia_popup_shown'

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true" aria-label="Guia de Transicao de Carreira">
      <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]" onClick={dismiss} />
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-emerald-400/12 bg-gradient-to-b from-[#111827] to-[#0B1120] shadow-[0_24px_80px_rgba(0,0,0,0.5)] animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
        <button onClick={dismiss} className="absolute top-3 right-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:border-white/40 hover:bg-white/20" aria-label="Fechar"><X size={18} /></button>
        <div className="p-6 pt-8 sm:p-8 sm:pt-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 to-emerald-400/5">
            <Heart className="h-7 w-7 text-emerald-400" />
          </div>
          <h2 className="mb-2 text-center text-[1.35rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.5rem]">
            Pronto pra mudar de vida?
          </h2>
          <p className="mb-6 text-center text-[0.9rem] leading-relaxed text-white/55">
            Receba o plano completo de transicao de carreira para Dog Walker
          </p>
          <LeadCaptureForm source="guia-popup" onSuccess={handleSuccess} />
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

/* ─────────────────── MANUAL POPUP ─────────────────── */

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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-[#0B1120]/85 backdrop-blur-md animate-[fadeIn_0.3s_ease-out]" onClick={onDismiss} />
      <div className="relative w-full max-w-[480px] overflow-hidden rounded-2xl border border-emerald-400/12 bg-gradient-to-b from-[#111827] to-[#0B1120] shadow-[0_24px_80px_rgba(0,0,0,0.5)] animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />
        <button onClick={onDismiss} className="absolute top-3 right-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:border-white/40 hover:bg-white/20" aria-label="Fechar"><X size={18} /></button>
        <div className="p-6 pt-8 sm:p-8 sm:pt-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 to-emerald-400/5">
            <Heart className="h-7 w-7 text-emerald-400" />
          </div>
          <h2 className="mb-2 text-center text-[1.35rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.5rem]">
            Sua nova carreira comeca aqui
          </h2>
          <p className="mb-6 text-center text-[0.9rem] leading-relaxed text-white/55">
            Preencha seus dados e acesse o plano de transicao agora
          </p>
          <LeadCaptureForm source="guia-cta" onSuccess={onSuccess} />
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

/* ─────────────────── SECAO PERSONALIZADA (topo, apos form) ─────────────────── */

function PersonalizedBanner({ nome, profissao }) {
  const firstName = nome ? nome.trim().split(/\s+/)[0] : ''

  return (
    <section id="personalizado" className="relative overflow-hidden px-5 pt-28 pb-14 sm:px-8 sm:pt-36 sm:pb-20" style={{ background: 'var(--gradient-hero)' }}>
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-20 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.3), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[720px]">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-emerald-400/20 bg-gradient-to-br from-emerald-400/15 to-emerald-400/5">
          <Dog className="h-8 w-8 text-emerald-400" />
        </div>

        <h2 className="mb-6 text-center text-[1.5rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.85rem] md:text-[2.2rem]">
          {firstName}, voce nao precisa continuar sendo{' '}
          <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
            {profissao}
          </span>{' '}
          pro resto da vida.
        </h2>

        <div className="mx-auto max-w-[620px] space-y-4 text-[0.95rem] leading-relaxed text-white/70 sm:text-[1.05rem]">
          <p>
            <strong className="text-white">Eu sei o que voce esta sentindo.</strong>{' '}
            Acordar todo dia pra fazer algo que nao faz sentido. Contar as horas pro fim do expediente.
            Pensar "deve existir algo melhor" — mas nao saber por onde comecar.
          </p>
          <p>
            {firstName}, o Brenno era engenheiro. Odiava a rotina. Largou tudo com R$ 800 no bolso
            e um cachorro pra passear. <strong className="text-white">Hoje fatura mais de R$ 6.000 por mes</strong>,
            trabalha ao ar livre, no horario que escolhe, fazendo o que ama.
            E ja ajudou mais de 250 familias.
          </p>
          <p>
            <strong className="text-white">Ele nao tinha experiencia. Nao tinha contatos. Nao tinha dinheiro guardado.</strong>{' '}
            Ele tinha um metodo. E agora esse metodo esta neste guia — o mesmo passo a passo,
            adaptado pra quem esta comecando do zero.
          </p>
          <p className="rounded-xl border border-emerald-400/20 bg-emerald-400/[0.06] p-4 text-emerald-300">
            A Classe A Pets ja formou dezenas de profissionais pet. Nos nao so ensinamos a tecnica —
            nos te acompanhamos na transicao. Voce nao vai estar sozinho, {firstName}.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5">
          <a
            href="/downloads/guia-transicao-dog-walker.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackCompleteRegistration('Guia Dog Walker')}
            className="inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 px-8 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(16,185,129,0.4)] !no-underline hover:!no-underline sm:px-10 sm:text-base"
          >
            <Download className="h-5 w-5" aria-hidden />
            Acessar Guia de Transicao
          </a>

          <a
            href={`https://wa.me/5511934066866?text=${encodeURIComponent(`Oi Brenno, sou ${firstName}. Acabei de baixar o guia de transição e quero saber mais sobre o curso de Dog Walker!`)}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact('Lead Guia WhatsApp')}
            className="inline-flex min-h-[48px] cursor-pointer items-center justify-center gap-2.5 rounded-full border-2 border-[#25d366]/40 bg-[#25d366]/10 px-8 py-3 text-[0.9rem] font-bold text-[#25d366] shadow-[0_4px_16px_rgba(37,211,102,0.15)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#25d366]/60 hover:bg-[#25d366]/20 !no-underline hover:!no-underline sm:px-10 sm:text-[0.95rem]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.49 0 .16 5.32.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.58 0 11.92-5.33 11.92-11.9a11.8 11.8 0 0 0-3.48-8.42Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.76.99 1-3.66-.24-.38A9.84 9.84 0 0 1 2.15 11.9C2.15 6.42 6.6 1.96 12.08 1.96c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.9 6.98c0 5.49-4.46 9.94-9.9 9.94Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49a9.1 9.1 0 0 1-1.68-2.08c-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.25 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            Falar com o Brenno no WhatsApp
          </a>

          <div className="flex flex-col items-center gap-2">
            <p className="text-[0.82rem] font-medium text-white/40">
              Continue rolando — o plano completo esta logo abaixo
            </p>
            <ArrowRight className="h-5 w-5 rotate-90 animate-bounce text-emerald-400" aria-hidden />
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── HEADER ─────────────────── */

function GuiaHeader({ onCtaClick }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#0B1120]/95 shadow-lg shadow-black/10 backdrop-blur-xl' : 'bg-transparent'}`}>
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-3.5 sm:px-8 sm:py-4">
        <a href="/" className="flex items-center gap-2.5 !no-underline">
          <img src={assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} alt="Classe A Pets" className="h-8 w-auto sm:h-10" width={320} height={320} loading="eager" />
          <span className="hidden text-base font-bold tracking-tight text-white sm:inline sm:text-lg">Classe A Pets</span>
        </a>
        <button onClick={onCtaClick} className="inline-flex cursor-pointer items-center gap-2 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 px-5 py-2.5 text-[0.82rem] font-bold text-white shadow-[0_4px_12px_rgba(16,185,129,0.25)] transition-all hover:-translate-y-0.5 sm:px-6 sm:text-[0.88rem]">
          <Heart className="h-4 w-4" aria-hidden />
          Quero Mudar de Vida
        </button>
      </div>
    </header>
  )
}

/* ─────────────────── HERO ─────────────────── */

function HeroSection({ onCtaClick }) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden" style={{ background: 'var(--gradient-hero)' }}>
      <div className="pointer-events-none absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full blur-[120px]" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.12), transparent 70%)' }} aria-hidden />
      <div className="pointer-events-none absolute -bottom-[10%] -left-[10%] h-[400px] w-[400px] rounded-full blur-[100px]" style={{ background: 'radial-gradient(circle, rgba(46,222,240,0.08), transparent 70%)' }} aria-hidden />

      <div className="relative z-10 mx-auto max-w-[1100px] px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-36 md:pb-32 md:pt-40">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="text-center md:text-left">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/8 px-4 py-1.5 sm:mb-6">
              <Heart className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-[0.75rem] font-semibold tracking-wide text-emerald-400 uppercase">Transicao de carreira</span>
            </div>

            <h1 className="mb-5 text-[1.75rem] font-extrabold leading-[1.15] tracking-tight text-white sm:text-[2.25rem] md:text-[2.75rem] lg:text-[3.2rem]">
              Cansado da sua rotina?{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-300 bg-clip-text text-transparent">
                Faca a transicao para Dog Walker
              </span>
            </h1>

            <p className="mx-auto mb-8 max-w-[520px] text-[0.95rem] leading-relaxed text-[var(--color-cinza-400)] sm:text-[1.1rem] md:mx-0">
              Descubra o passo a passo que o Brenno seguiu pra sair do CLT,
              comecar com R$ 800 e chegar a R$ 6.000+/mes ao ar livre, fazendo o que ama.
              Nos te mostramos como.
            </p>

            <button onClick={onCtaClick} className="inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 px-8 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(16,185,129,0.4)] sm:min-h-[56px] sm:w-auto sm:px-10 sm:py-4 sm:text-base">
              Quero Mudar de Vida
              <ArrowRight className="h-5 w-5" aria-hidden />
            </button>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 sm:mt-8 md:justify-start">
              {[
                { icon: FileText, text: 'Plano completo' },
                { icon: Lock, text: '100% gratuito' },
                { icon: Clock, text: 'Acesso imediato' },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-1.5">
                  <item.icon className="h-3.5 w-3.5 text-emerald-400/70" />
                  <span className="text-[0.75rem] font-medium text-[var(--color-cinza-500)]">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Foto do Brenno com caes */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="absolute inset-0 -m-8 rounded-3xl opacity-40 blur-3xl" style={{ background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(46,222,240,0.2))' }} aria-hidden />
              <img
                src={assetUrl('/images/optimized/servico-passeador-640w.webp')}
                srcSet={`${assetUrl('/images/optimized/servico-passeador-480w.webp')} 480w, ${assetUrl('/images/optimized/servico-passeador-640w.webp')} 640w`}
                sizes="(max-width: 768px) 220px, 380px"
                alt="Brenno Rodrigues — Dog Walker Profissional"
                className="relative w-[220px] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:w-[300px] md:w-[380px]"
                width={640} height={640} loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── DOR vs SONHO (Contrast Effect) ─────────────────── */

function DorVsSonho() {
  useScrollReveal()

  return (
    <section id="beneficios" className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24" style={{ background: 'var(--gradient-section-dark)' }}>
      <div className="relative mx-auto max-w-[1100px]">
        <div className="mb-12 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center" style={{ color: 'rgb(52,211,153)' }}>Duas realidades</span>
          <h2 className="mx-auto max-w-[600px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            Onde voce esta vs. onde voce poderia estar
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2" data-reveal-stagger>
          {/* DOR — vida atual */}
          <div className="rounded-2xl border border-red-500/15 bg-red-500/[0.03] p-6 sm:p-8">
            <div className="mb-4 inline-flex rounded-xl bg-red-500/10 p-2.5">
              <AlertTriangle className="h-5 w-5 text-red-400" />
            </div>
            <h3 className="mb-4 !text-[1.1rem] font-bold !text-white">Sua rotina hoje</h3>
            <ul className="space-y-3">
              {[
                'Acordar cedo pra fazer algo que nao faz sentido',
                'Contar as horas pro fim do expediente',
                'Domingo a noite ja pensando na segunda',
                'Salario que mal paga as contas no fim do mes',
                'Sentir que os anos estao passando sem proposito',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <X className="mt-0.5 h-4 w-4 shrink-0 text-red-400/60" aria-hidden />
                  <span className="text-[0.88rem] leading-snug text-white/55">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* SONHO — vida como Dog Walker */}
          <div className="rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.03] p-6 sm:p-8">
            <div className="mb-4 inline-flex rounded-xl bg-emerald-400/10 p-2.5">
              <Sun className="h-5 w-5 text-emerald-400" />
            </div>
            <h3 className="mb-4 !text-[1.1rem] font-bold !text-white">Sua vida como Dog Walker</h3>
            <ul className="space-y-3">
              {[
                'Trabalhar ao ar livre, no seu horario',
                'Faturar de R$ 4.000 a R$ 7.000 por mes',
                'Fazer o que ama — todo dia e diferente',
                'Ser dono do proprio negocio, sem chefe',
                'Construir algo com proposito de verdade',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden />
                  <span className="text-[0.88rem] leading-snug text-white/70">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── HISTORIA DO BRENNO (Social Proof) ─────────────────── */

function HistoriaBrenno() {
  useScrollReveal()

  const timeline = [
    { year: '2017', title: 'Largou a engenharia', desc: 'Todo mundo achou loucura. Comecou com 1 cachorro, R$ 800 no primeiro mes. Mas ele sabia que tinha um caminho.', accent: false },
    { year: '6 meses', title: 'Investiu em formacao', desc: 'Estudou comportamento canino. Aprendeu a LER os caes. Chegou a R$ 4.000/mes so com passeios.', accent: false },
    { year: '1 ano', title: 'Dog Walker + Adestrador', desc: 'Se formou adestrador profissional. R$ 6.000+/mes, agenda lotada, clientes indicando.', accent: true },
    { year: 'Hoje', title: '+250 familias transformadas', desc: 'Fundou a Classe A Pets. Agora ensina outras pessoas a fazer a mesma transicao que ele fez.', accent: true },
  ]

  return (
    <section className="bg-[var(--color-charcoal)] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-10 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center" style={{ color: 'rgb(52,211,153)' }}>Prova real</span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            De engenheiro a R$ 6.000+/mes com caes
          </h2>
          <p className="mx-auto mt-3 max-w-[450px] text-[0.9rem] text-[var(--color-cinza-400)]">
            Se o Brenno conseguiu sem experiencia e sem contatos, voce tambem consegue.
          </p>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-[auto_1fr] md:gap-10" data-reveal="up">
          <div className="flex justify-center">
            <img
              src={assetUrl('/images/optimized/foto-brenno-480w.webp')}
              srcSet={`${assetUrl('/images/optimized/foto-brenno-320w.webp')} 320w, ${assetUrl('/images/optimized/foto-brenno-480w.webp')} 480w`}
              sizes="(max-width: 640px) 160px, 220px"
              alt="Brenno Rodrigues"
              className="w-[160px] rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.3)] sm:w-[220px]"
              width={480} height={480} loading="lazy" decoding="async"
            />
          </div>

          <div className="space-y-4">
            {timeline.map((step) => (
              <div key={step.year} className={`flex gap-4 rounded-xl border p-4 sm:p-5 ${step.accent ? 'border-emerald-400/20 bg-emerald-400/[0.04]' : 'border-white/6 bg-white/[0.02]'}`}>
                <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${step.accent ? 'bg-emerald-400/15' : 'bg-[var(--color-cyan)]/10'}`}>
                  <span className={`text-xs font-bold ${step.accent ? 'text-emerald-400' : 'text-[var(--color-cyan)]'}`}>{step.year}</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white sm:text-base">{step.title}</h3>
                  <p className="mt-1 text-[0.85rem] leading-relaxed text-white/55">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── O QUE TEM NO GUIA ─────────────────── */

function ConteudoGuia({ onCtaClick }) {
  useScrollReveal()

  const conteudo = [
    'Plano de 30, 60 e 90 dias para sair do emprego e comecar como Dog Walker',
    'Quanto voce pode faturar mes a mes — a timeline real do Brenno',
    'Como comecar do ZERO: sem experiencia, sem contatos, sem dinheiro guardado',
    'Os 5 erros que destroem iniciantes (e como evitar todos)',
    'Modelo de contrato profissional pronto pra usar',
    'Como precificar seus servicos e montar pacotes de passeio',
    'Marketing basico: como conseguir seus 5 primeiros clientes em 30 dias',
    'Checklist de equipamentos essenciais (sem gastar demais)',
  ]

  return (
    <section id="guia" className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24" style={{ background: 'var(--gradient-section-dark)' }}>
      <div className="relative mx-auto max-w-[900px]">
        <div className="mb-12 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center" style={{ color: 'rgb(52,211,153)' }}>O que voce recebe</span>
          <h2 className="mx-auto max-w-[550px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            Tudo dentro do guia de transicao
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4" data-reveal-stagger>
          {conteudo.map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] p-4 transition-colors duration-300 hover:border-emerald-400/15 hover:bg-emerald-400/[0.03]">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400" aria-hidden />
              <span className="text-[0.88rem] leading-snug text-white/70">{item}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center sm:mt-14" data-reveal="up">
          <button onClick={onCtaClick} className="inline-flex min-h-[52px] w-full max-w-[400px] cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 px-8 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(16,185,129,0.4)] sm:min-h-[56px] sm:w-auto sm:px-10 sm:py-4 sm:text-base">
            Quero Fazer Essa Transicao
            <ArrowRight className="h-5 w-5" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── COMO A CLASSE A PETS TE AJUDA ─────────────────── */

function ComoAjudamos() {
  useScrollReveal()

  const passos = [
    { num: '01', title: 'Voce recebe o guia', desc: 'Plano completo de transicao com passo a passo, templates e checklists prontos pra usar.' },
    { num: '02', title: 'A gente te acompanha', desc: 'Grupo VIP no WhatsApp com o Brenno e outros alunos. Duvidas respondidas em tempo real.' },
    { num: '03', title: 'Voce se certifica', desc: 'Curso presencial em SP com pratica real com caes. Certificacao profissional da Classe A Pets.' },
    { num: '04', title: 'Voce comeca a faturar', desc: 'Com as tecnicas do curso, voce conquista seus primeiros clientes em ate 30 dias.' },
  ]

  return (
    <section className="bg-[var(--color-charcoal)] px-5 py-16 sm:px-8 sm:py-24">
      <div className="mx-auto max-w-[900px]">
        <div className="mb-12 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center" style={{ color: 'rgb(52,211,153)' }}>Nos te guiamos</span>
          <h2 className="mx-auto max-w-[500px] !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
            Voce nao vai fazer isso sozinho
          </h2>
          <p className="mx-auto mt-3 max-w-[450px] text-[0.9rem] text-[var(--color-cinza-400)]">
            A Classe A Pets te acompanha do primeiro passo ate a sua primeira renda como Dog Walker.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5" data-reveal-stagger>
          {passos.map((p) => (
            <div key={p.num} className="rounded-2xl border border-emerald-400/10 bg-emerald-400/[0.03] p-5 transition-all duration-500 hover:-translate-y-1 sm:p-6">
              <span className="mb-3 block text-2xl font-black text-emerald-400">{p.num}</span>
              <h3 className="mb-1.5 !text-[1rem] font-bold !text-white">{p.title}</h3>
              <p className="text-[0.85rem] leading-relaxed text-[var(--color-cinza-400)]">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────── CTA FINAL (Loss Aversion) ─────────────────── */

function CtaFinal({ onCtaClick }) {
  useScrollReveal()

  return (
    <section className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-24" style={{ background: 'var(--gradient-section-dark)' }}>
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full opacity-15 blur-[140px]" style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.3), transparent 70%)' }} aria-hidden />

      <div className="relative mx-auto max-w-[650px] text-center" data-reveal="up">
        <h2 className="mb-4 !text-[1.5rem] !text-white sm:!text-[1.75rem] md:!text-[2.2rem]">
          Daqui a 1 ano voce vai desejar ter comecado hoje
        </h2>
        <p className="mx-auto mb-4 max-w-[500px] text-[0.95rem] leading-relaxed text-[var(--color-cinza-400)]">
          Cada dia que passa e um dia a mais na rotina que voce quer deixar pra tras.
          O Brenno comecou com menos do que voce tem agora.
        </p>
        <p className="mx-auto mb-8 max-w-[500px] text-[0.95rem] font-semibold text-white">
          A unica diferenca entre quem consegue e quem nao consegue e dar o primeiro passo.
        </p>

        <button onClick={onCtaClick} className="inline-flex min-h-[52px] w-full max-w-[400px] cursor-pointer items-center justify-center gap-2.5 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-400 px-8 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(16,185,129,0.4)] sm:min-h-[56px] sm:w-auto sm:px-10 sm:py-4 sm:text-base">
          Quero Comecar Agora
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

function GuiaFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0B1120] px-5 py-8 sm:px-8">
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <div className="flex items-center gap-2">
            <img src={assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} alt="Classe A Pets" className="h-6 w-auto" width={320} height={320} loading="lazy" />
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

export default function LeadGuia() {
  const [lead, setLead] = useState(null)
  const [manualPopup, setManualPopup] = useState(false)

  useScrollReveal()

  useEffect(() => {
    document.title = 'Transicao de Carreira para Dog Walker — Guia Gratuito | Classe A Pets'
    trackViewContent('Guia Dog Walker', 'lead_capture')
  }, [])

  const openForm = () => setManualPopup(true)

  function handleSuccess(data) {
    setManualPopup(false)
    setLead(data)
    requestAnimationFrame(() => {
      const el = document.getElementById('personalizado')
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    })
  }

  return (
    <div className="min-h-screen overflow-x-clip">
      <GuiaHeader onCtaClick={openForm} />

      {lead && <PersonalizedBanner nome={lead.nome} profissao={lead.profissao} />}

      <HeroSection onCtaClick={openForm} />
      <DorVsSonho />
      <HistoriaBrenno />
      <ConteudoGuia onCtaClick={openForm} />
      <ComoAjudamos />
      <CtaFinal onCtaClick={openForm} />
      <GuiaFooter />

      <AutoPopup onSuccess={handleSuccess} />
      <ManualPopup open={manualPopup} onSuccess={handleSuccess} onDismiss={() => setManualPopup(false)} />
    </div>
  )
}
