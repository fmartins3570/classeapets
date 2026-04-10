import { useEffect, useRef } from 'react'
import { X, ArrowDown, Dog } from 'lucide-react'

function getFirstName(nome) {
  return nome ? nome.trim().split(/\s+/)[0] : ''
}

export default function LeadPopup({ nome, profissao, onClose }) {
  const overlayRef = useRef(null)
  const firstName = getFirstName(nome)

  useEffect(() => {
    document.body.style.overflow = 'hidden'

    function onKeyDown(e) {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  function handleOverlayClick(e) {
    if (e.target === overlayRef.current) onClose()
  }

  function handleExplore() {
    onClose()
    requestAnimationFrame(() => {
      const target = document.getElementById('beneficios') || document.getElementById('guia')
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
      }
    })
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#0B1120]/85 backdrop-blur-md transition-opacity duration-300 animate-[fadeIn_0.3s_ease-out]"
    >
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[rgba(46,222,240,0.12)] bg-gradient-to-b from-[#111827] to-[#0B1120] shadow-[0_24px_80px_rgba(0,0,0,0.5)] animate-[slideUp_0.4s_cubic-bezier(0.16,1,0.3,1)]">
        {/* Cyan accent line */}
        <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#2edef0] to-transparent" />

        {/* Close */}
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute right-3 top-3 z-10 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:border-white/40 hover:bg-white/20"
        >
          <X size={18} />
        </button>

        <div className="p-6 pt-8 sm:p-8 sm:pt-10">
          {/* Icon */}
          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[rgba(46,222,240,0.2)] bg-gradient-to-br from-[rgba(46,222,240,0.15)] to-[rgba(46,222,240,0.05)]">
            <Dog className="h-8 w-8 text-[#2edef0]" />
          </div>

          {/* Headline personalizado */}
          <h2 className="mb-5 text-center text-[1.35rem] font-extrabold leading-tight tracking-tight text-white sm:text-[1.6rem]">
            {firstName}, e se voce nao precisasse mais trabalhar como{' '}
            <span className="bg-gradient-to-r from-[#1BA8B8] to-[#2edef0] bg-clip-text text-transparent">
              {profissao}
            </span>?
          </h2>

          {/* Copy personalizado com profissao inserida */}
          <div className="space-y-4 text-[0.92rem] leading-relaxed text-white/70 sm:text-[0.95rem]">
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
            <p className="text-[var(--color-cyan)]">
              E com a nova lei exigindo certificacao obrigatoria, quem se preparar agora vai
              dominar o mercado enquanto os outros ainda estao descobrindo que essa profissao existe.
            </p>
          </div>

          {/* Separador */}
          <div className="my-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* CTA — scroll para conteudo */}
          <button
            onClick={handleExplore}
            className="btn-primary flex h-14 w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl text-base font-bold tracking-wide"
          >
            <ArrowDown className="h-5 w-5" aria-hidden />
            Descobrir como comecar
          </button>

          <p className="mt-4 text-center text-[0.78rem] text-white/35">
            Voce ja deu o primeiro passo. Agora veja o plano completo abaixo.
          </p>
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
