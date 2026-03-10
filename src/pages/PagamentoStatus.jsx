import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'

const statusConfig = {
  sucesso: {
    title: 'Pagamento confirmado!',
    message:
      'Sua inscrição no Curso Adestrador Profissional foi realizada com sucesso. Em breve você receberá um e-mail com todos os detalhes de acesso.',
    color: 'text-green-600',
    bg: 'bg-green-50',
    border: 'border-green-200',
    icon: (
      <svg className="mx-auto h-20 w-20 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  pendente: {
    title: 'Pagamento em processamento',
    message:
      'Seu pagamento está sendo processado. Assim que for confirmado, você receberá um e-mail com os detalhes de acesso ao curso. Pagamentos via boleto podem levar até 2 dias úteis.',
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-200',
    icon: (
      <svg className="mx-auto h-20 w-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  cancelado: {
    title: 'Pagamento não concluído',
    message:
      'O pagamento foi cancelado ou não foi finalizado. Não se preocupe, nenhuma cobrança foi realizada. Você pode tentar novamente quando quiser.',
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-200',
    icon: (
      <svg className="mx-auto h-20 w-20 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
    ),
  },
}

function PagamentoStatus() {
  const { status } = useParams()
  const config = statusConfig[status] || statusConfig.cancelado

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-preto)]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="inline-flex items-center no-underline hover:opacity-90">
            <img
              src={assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')}
              alt="Classe A Pets"
              className="w-[120px] object-contain"
              loading="lazy"
              decoding="async"
            />
          </Link>
        </div>
      </header>

      <main className="flex min-h-[70vh] items-center justify-center px-4 py-16">
        <div className={`mx-auto max-w-lg rounded-2xl border-2 ${config.border} ${config.bg} p-10 text-center`}>
          {config.icon}
          <h1 className={`mt-6 text-2xl font-black md:text-3xl ${config.color}`}>
            {config.title}
          </h1>
          <p className="mt-4 leading-relaxed text-gray-600">
            {config.message}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/"
              className="rounded-xl bg-[var(--color-preto)] px-6 py-3 text-sm font-bold text-white no-underline transition-opacity hover:opacity-90"
            >
              Voltar ao Site
            </Link>
            {status === 'cancelado' && (
              <Link
                to="/curso-adestramento-classeapets-presencial#checkout"
                className="rounded-xl bg-[#00BCD4] px-6 py-3 text-sm font-bold text-white no-underline transition-opacity hover:opacity-90"
              >
                Tentar Novamente
              </Link>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export default PagamentoStatus
