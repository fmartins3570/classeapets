import useScrollReveal from '../hooks/useScrollReveal'

function CursosDetalhe() {
  useScrollReveal()

  const presencialItems = [
    'Dominar tecnicas de passeio, conducao e manejo canino com seguranca',
    'Aprender fundamentos comportamentais, eticos e profissionais',
    'Praticar ao lado de especialistas e tirar duvidas em tempo real',
    'Adquirir estrategias para atuacao profissional e conquista de clientes',
    'Conectar-se com outros participantes e ampliar seu networking',
  ]

  const digitalItems = [
    'Videoaulas gravadas e materiais extras',
    'Estude de qualquer lugar, acesso 24h',
    'Tecnicas de manejo, adestramento e bem-estar animal',
    'Estrategias para aplicar no dia a dia',
  ]

  return (
    <section id="cursos" className="bg-[var(--color-cream)] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="mb-14 text-center" data-reveal="up">
          <span className="section-label justify-center">Nossos Cursos</span>
          <h2 className="mx-auto mb-4 max-w-[500px]">
            Escolha o formato ideal para voce
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {/* Presencial */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-[var(--color-teal)]/20 p-7 transition-all duration-500 hover:border-[var(--color-teal)]/40 sm:p-9"
            style={{ background: 'linear-gradient(160deg, rgba(27,139,141,0.06), rgba(27,139,141,0.02))' }}
            data-reveal="left"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-teal)]/20 bg-[var(--color-teal)]/8 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--color-teal)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-teal)]">
                Vagas limitadas
              </span>
            </div>

            <h3 className="mb-3 !text-[1.4rem]">Presencial e Hibrido</h3>
            <p className="mb-6 text-[var(--color-texto-muted)]">
              Um curso presencial para todos que amam, cuidam ou trabalham com caes. Aprenda com
              especialistas unindo teoria essencial com pratica real nas ruas de Sao Paulo.
            </p>

            <ul className="mb-8 space-y-3">
              {presencialItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[0.92rem] text-[var(--color-texto)]">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs"
                    style={{ background: 'var(--gradient-teal)' }}
                  >
                    <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="btn-teal inline-flex min-h-[48px] w-full items-center justify-center !rounded-full !px-7 !py-3 !font-semibold !no-underline hover:!no-underline sm:w-auto"
            >
              Garantir vaga presencial
            </a>
          </div>

          {/* Digital */}
          <div
            className="group relative overflow-hidden rounded-3xl border border-[var(--color-honey)]/20 p-7 transition-all duration-500 hover:border-[var(--color-honey)]/40 sm:p-9"
            style={{ background: 'linear-gradient(160deg, rgba(212,168,83,0.06), rgba(212,168,83,0.02))' }}
            data-reveal="right"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--color-honey)]/20 bg-[var(--color-honey)]/8 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[var(--color-honey)]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-honey-dark)]">
                Acesso imediato
              </span>
            </div>

            <h3 className="mb-3 !text-[1.4rem]">100% Digital</h3>
            <p className="mb-6 text-[var(--color-texto-muted)]">
              Metodologia clara, dinamica e baseada em casos reais. Adquira conhecimento tecnico e
              pratico com videoaulas gravadas, no seu ritmo.
            </p>

            <ul className="mb-8 space-y-3">
              {digitalItems.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-[0.92rem] text-[var(--color-texto)]">
                  <span
                    className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs"
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
              className="btn-primary inline-flex min-h-[48px] w-full items-center justify-center !rounded-full !px-7 !py-3 !font-semibold !no-underline hover:!no-underline sm:w-auto"
            >
              Garantir acesso digital
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CursosDetalhe
