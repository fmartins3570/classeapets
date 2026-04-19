import { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  Download,
  CheckCircle2,
  ArrowRight,
  Clock,
  Users,
  Heart,
  Star,
} from 'lucide-react'
import { assetUrl } from '../utils/assetUrl'
import { trackCompleteRegistration, trackContact } from '../utils/metaPixel'

export default function ThankYouGuia() {
  const location = useLocation()
  const navigate = useNavigate()
  const lead = location.state
  const firstName = lead?.nome ? lead.nome.trim().split(/\s+/)[0] : ''

  const [downloaded, setDownloaded] = useState(false)

  useEffect(() => {
    if (!lead?.nome) {
      navigate('/guia-dog-walker', { replace: true })
      return
    }
    document.title = 'Seu guia esta pronto! | Classe A Pets'
    window.scrollTo(0, 0)
  }, [lead, navigate])

  if (!lead?.nome) return null

  const waText = encodeURIComponent(
    `Oi Brenno! Sou ${firstName}, acabei de baixar o guia de transição para Dog Walker e quero saber mais sobre o curso!`
  )

  function handleDownload() {
    setDownloaded(true)
    trackCompleteRegistration('Guia Dog Walker')
  }

  return (
    <div className="min-h-screen" style={{ background: 'var(--gradient-hero)' }}>
      {/* Header minimal */}
      <header className="mx-auto flex w-full max-w-[1280px] items-center justify-center px-5 py-5">
        <a href="/" className="flex items-center gap-2.5 !no-underline">
          <img src={assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} alt="Classe A Pets" className="h-8 w-auto sm:h-10" width={320} height={320} loading="eager" />
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">Classe A Pets</span>
        </a>
      </header>

      <main className="mx-auto max-w-[640px] px-5 pb-20 pt-8 sm:px-8 sm:pt-12">
        {/* Success badge */}
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full border-2 border-emerald-400/30 bg-emerald-400/10">
          <CheckCircle2 className="h-10 w-10 text-emerald-400" />
        </div>

        <h1 className="mb-3 text-center text-[1.5rem] font-extrabold leading-tight tracking-tight text-white sm:text-[2rem]">
          {firstName}, seu guia esta pronto!
        </h1>
        <p className="mx-auto mb-10 max-w-[450px] text-center text-[0.95rem] leading-relaxed text-white/60">
          O plano de transicao de carreira para Dog Walker esta disponivel para download.
        </p>

        {/* Download Card */}
        <div className="mb-6 rounded-2xl border border-emerald-400/15 bg-emerald-400/[0.04] p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15">
              <Download className="h-6 w-6 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-[1rem] font-bold text-white">Guia de Transicao de Carreira</h2>
              <p className="text-[0.82rem] text-white/50">PDF gratuito — acesso imediato</p>
            </div>
          </div>
          <a
            href="/downloads/guia-transicao-dog-walker.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleDownload}
            className="flex w-full min-h-[52px] items-center justify-center gap-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-400 px-6 py-3.5 text-[0.95rem] font-bold text-white shadow-[0_4px_16px_rgba(16,185,129,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(16,185,129,0.4)] !no-underline hover:!no-underline"
          >
            <Download className="h-5 w-5" aria-hidden />
            {downloaded ? 'Baixar Novamente' : 'Baixar Guia Agora'}
          </a>
        </div>

        {/* Divider */}
        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#0B1120] px-4 text-[0.78rem] font-semibold text-white/40 uppercase tracking-wider">proximo passo</span>
          </div>
        </div>

        {/* WhatsApp CTA - Principal */}
        <div className="mb-8 rounded-2xl border-2 border-[#25d366]/25 bg-[#25d366]/[0.06] p-6 sm:p-8">
          <div className="mb-4 flex items-center gap-3">
            <img
              src={assetUrl('/images/optimized/foto-brenno-320w.webp')}
              alt="Brenno Rodrigues"
              className="h-14 w-14 rounded-full border-2 border-[#25d366]/40 object-cover"
              width={320} height={320} loading="eager"
            />
            <div>
              <h2 className="text-[1rem] font-bold text-white">Fale com o Brenno agora</h2>
              <p className="text-[0.82rem] text-[#25d366]/80">Online — responde em minutos</p>
            </div>
          </div>

          <p className="mb-5 text-[0.9rem] leading-relaxed text-white/60">
            {firstName}, o guia e so o comeco. O Brenno quer te conhecer e entender
            seu momento. Converse com ele — sem compromisso, sem pressao.
          </p>

          <a
            href={`https://wa.me/5511934066866?text=${waText}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackContact('WhatsApp ThankYou Guia')}
            className="flex w-full min-h-[56px] items-center justify-center gap-3 rounded-xl bg-[#25d366] px-6 py-4 text-[1rem] font-bold text-white shadow-[0_4px_16px_rgba(37,211,102,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_28px_rgba(37,211,102,0.45)] !no-underline hover:!no-underline"
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current" aria-hidden>
              <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.49 0 .16 5.32.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.58 0 11.92-5.33 11.92-11.9a11.8 11.8 0 0 0-3.48-8.42Zm-8.45 18.3h-.01a9.9 9.9 0 0 1-5.05-1.38l-.36-.22-3.76.99 1-3.66-.24-.38A9.84 9.84 0 0 1 2.15 11.9C2.15 6.42 6.6 1.96 12.08 1.96c2.64 0 5.12 1.03 6.98 2.9a9.8 9.8 0 0 1 2.9 6.98c0 5.49-4.46 9.94-9.9 9.94Zm5.44-7.43c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.49a9.1 9.1 0 0 1-1.68-2.08c-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.6-.92-2.2-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.25 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
            </svg>
            Conversar com o Brenno
            <ArrowRight className="h-5 w-5" aria-hidden />
          </a>

          <div className="mt-4 flex items-center justify-center gap-4 text-[0.78rem] text-white/40">
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" aria-hidden />
              Resposta rapida
            </span>
            <span className="flex items-center gap-1">
              <Heart className="h-3.5 w-3.5" aria-hidden />
              Sem compromisso
            </span>
          </div>
        </div>

        {/* Urgency + Social proof */}
        <div className="mb-8 rounded-2xl border border-amber-400/15 bg-amber-400/[0.04] p-5">
          <div className="flex items-start gap-3">
            <Star className="mt-0.5 h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <p className="text-[0.9rem] font-semibold text-white">Proxima turma com vagas limitadas</p>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-white/50">
                A formacao presencial em SP tem turmas reduzidas para garantir pratica individual
                com os caes. Quem conversa com o Brenno primeiro garante prioridade.
              </p>
            </div>
          </div>
        </div>

        {/* Social proof */}
        <div className="space-y-3">
          <div className="flex items-center justify-center gap-2 text-[0.82rem] text-white/40">
            <Users className="h-4 w-4" aria-hidden />
            <span>+340 pessoas ja baixaram este guia</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-[0.82rem] text-white/40">
            <CheckCircle2 className="h-4 w-4" aria-hidden />
            <span>+250 familias atendidas pela Classe A Pets</span>
          </div>
        </div>
      </main>

      {/* Footer minimal */}
      <footer className="border-t border-white/[0.06] bg-[#0B1120] px-5 py-6">
        <p className="text-center text-[0.72rem] text-white/25">
          Classe A Pets {new Date().getFullYear()}. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  )
}
