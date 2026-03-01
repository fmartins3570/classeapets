import useScrollReveal from '../hooks/useScrollReveal'

function Metodos() {
  useScrollReveal()

  const metodos = [
    {
      icon: '🏠',
      title: 'Adestrador de caes para tutores',
      items: [
        'Correcao de comportamentos indesejados',
        'Mais liberdade para o cao e tranquilidade para o tutor',
        'Relacao baseada em confianca, respeito e afeto',
        'Adaptacao mais facil a rotina da familia',
      ],
    },
    {
      icon: '🎓',
      title: 'Curso de adestrador de caes',
      items: [
        'Durante o curso, voce ja comeca aplicando as tecnicas',
        'Formacao completa e profissionalizante',
        'Aprenda a interpretar sinais e emocoes dos caes',
        'Comece sua carreira com confianca',
      ],
    },
    {
      icon: '🚶',
      title: 'Curso passeador de caes',
      items: [
        'Geracao de renda com liberdade de horarios',
        'Baixo investimento inicial e retorno rapido',
        'Avaliacoes positivas abrem portas para mais caes',
        'Iniciar os atendimentos e conquistar os primeiros clientes',
      ],
    },
    {
      icon: '💻',
      title: 'Cursos 100% digital',
      items: [
        'Sem depender de horarios fixos ou deslocamentos',
        'Conteudo completo para todos os niveis',
        'Treinar seu proprio cao ou atender seus proximos clientes',
        'Acesso a materiais atualizados e suporte especializado',
      ],
    },
  ]

  return (
    <section
      id="metodos"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-[50%] top-[-10%] h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.3), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-14 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center">Nossos Metodos</span>
          <h2 className="mx-auto mb-4 max-w-[600px] !text-[var(--color-cream)]">
            Ciencia do comportamento com pratica guiada
          </h2>
          <p className="mx-auto max-w-[580px] text-[var(--color-cream)]/55">
            Seja voce tutor ou aspirante a profissional, nossos metodos combinam ciencia do
            comportamento, pratica guiada e linguagem simples.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7" data-reveal-stagger>
          {metodos.map((m, i) => (
            <article
              key={i}
              className="card-dark group flex flex-col rounded-2xl p-6 hover:border-[var(--color-honey)]/30 sm:p-8"
            >
              <span className="mb-4 block text-2xl">{m.icon}</span>
              <h3 className="mb-5 !text-[var(--color-cream)]">{m.title}</h3>

              <ul className="mb-6 flex-1 space-y-3">
                {m.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-[0.92rem] leading-snug text-[var(--color-cream)]/60">
                    <span
                      className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full"
                      style={{ background: 'var(--gradient-honey)' }}
                    >
                      <svg className="h-3 w-3 text-[var(--color-charcoal)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href="#contato"
                className="btn-outline inline-flex min-h-[44px] w-full items-center justify-center !rounded-full !px-6 !py-2.5 !text-[0.88rem] !font-semibold !no-underline hover:!no-underline sm:w-auto sm:self-start"
              >
                Saiba mais
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metodos
