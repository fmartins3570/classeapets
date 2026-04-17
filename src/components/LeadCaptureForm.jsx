import { useState } from 'react'
import { supabase } from '../utils/supabase'
import { trackLead } from '../utils/metaPixel'

function getUtmParams() {
  const params = new URLSearchParams(window.location.search)
  return {
    utm_source: params.get('utm_source'),
    utm_medium: params.get('utm_medium'),
    utm_campaign: params.get('utm_campaign'),
  }
}

export default function LeadCaptureForm({ source, onSuccess }) {
  const [nome, setNome] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [profissao, setProfissao] = useState('')
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 11)
    if (digits.length <= 2) return digits.length ? `(${digits}` : ''
    if (digits.length <= 7) return `(${digits.slice(0, 2)}) ${digits.slice(2)}`
    return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`
  }

  function validate() {
    const errs = {}
    if (!nome.trim() || nome.trim().length < 3) errs.nome = 'Informe seu nome completo'
    const digits = whatsapp.replace(/\D/g, '')
    if (digits.length < 10 || digits.length > 11) errs.whatsapp = 'Informe um WhatsApp valido com DDD'
    if (!profissao.trim() || profissao.trim().length < 2) errs.profissao = 'Informe sua profissao atual'
    setErrors(errs)
    return Object.keys(errs).length === 0
  }

  async function handleSubmit(e) {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    try {
      if (supabase) {
        const utm = getUtmParams()
        await supabase.from('dogwalker_leads').insert({
          nome: nome.trim(),
          whatsapp: whatsapp.replace(/\D/g, ''),
          profissao: profissao.trim(),
          source,
          ...utm,
        })
      }
      const contentName = source?.includes('certificacao') ? 'Certificacao Dog Walker' : 'Guia Dog Walker'
      const nameParts = nome.trim().split(' ')
      const userData = {
        firstName: nameParts[0],
        lastName: nameParts.length > 1 ? nameParts.slice(1).join(' ') : undefined,
        phone: whatsapp.replace(/\D/g, ''),
      }
      trackLead(contentName, userData)
      onSuccess({ nome: nome.trim(), profissao: profissao.trim() })
    } catch {
      trackLead(source?.includes('certificacao') ? 'Certificacao Dog Walker' : 'Guia Dog Walker')
      onSuccess({ nome: nome.trim(), profissao: profissao.trim() })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex w-full flex-col gap-4">
      {/* Nome */}
      <div>
        <label htmlFor="lead-nome" className="mb-1.5 block text-sm font-medium text-white/80">
          Seu nome
        </label>
        <input
          id="lead-nome"
          type="text"
          placeholder="Seu nome completo"
          value={nome}
          onChange={e => setNome(e.target.value)}
          autoComplete="name"
          className={`h-12 w-full rounded-xl border bg-white/5 px-4 text-white placeholder-white/30 outline-none transition-colors ${
            errors.nome
              ? 'border-red-500/50 focus:border-red-500/70'
              : 'border-white/10 focus:border-[var(--color-cyan)] focus:ring-1 focus:ring-[var(--color-cyan)]'
          }`}
        />
        {errors.nome && <p className="mt-1 text-sm text-red-400" role="alert">{errors.nome}</p>}
      </div>

      {/* WhatsApp */}
      <div>
        <label htmlFor="lead-whatsapp" className="mb-1.5 block text-sm font-medium text-white/80">
          WhatsApp com DDD
        </label>
        <input
          id="lead-whatsapp"
          type="tel"
          inputMode="numeric"
          placeholder="(11) 99999-9999"
          value={whatsapp}
          onChange={e => setWhatsapp(formatPhone(e.target.value))}
          autoComplete="tel"
          className={`h-12 w-full rounded-xl border bg-white/5 px-4 text-white placeholder-white/30 outline-none transition-colors ${
            errors.whatsapp
              ? 'border-red-500/50 focus:border-red-500/70'
              : 'border-white/10 focus:border-[var(--color-cyan)] focus:ring-1 focus:ring-[var(--color-cyan)]'
          }`}
        />
        {errors.whatsapp && <p className="mt-1 text-sm text-red-400" role="alert">{errors.whatsapp}</p>}
      </div>

      {/* Profissao — texto livre */}
      <div>
        <label htmlFor="lead-profissao" className="mb-1.5 block text-sm font-medium text-white/80">
          Sua profissao atual
        </label>
        <input
          id="lead-profissao"
          type="text"
          placeholder="Ex: Analista, Vendedor, Estudante..."
          value={profissao}
          onChange={e => setProfissao(e.target.value)}
          autoComplete="organization-title"
          className={`h-12 w-full rounded-xl border bg-white/5 px-4 text-white placeholder-white/30 outline-none transition-colors ${
            errors.profissao
              ? 'border-red-500/50 focus:border-red-500/70'
              : 'border-white/10 focus:border-[var(--color-cyan)] focus:ring-1 focus:ring-[var(--color-cyan)]'
          }`}
        />
        {errors.profissao && <p className="mt-1 text-sm text-red-400" role="alert">{errors.profissao}</p>}
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary mt-2 flex h-14 w-full cursor-pointer items-center justify-center rounded-xl text-base font-bold tracking-wide disabled:opacity-60"
      >
        {loading ? (
          <span className="inline-flex items-center gap-2">
            <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Enviando...
          </span>
        ) : (
          'Quero Receber Agora'
        )}
      </button>

      <p className="text-center text-[11px] text-white/40">
        Seus dados estao seguros. Nao enviamos spam.
      </p>
    </form>
  )
}
