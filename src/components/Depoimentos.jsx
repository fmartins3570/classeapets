import useScrollReveal from '../hooks/useScrollReveal'

function Depoimentos() {
  useScrollReveal()

  const depoimentos = [
    {
      nome: 'Thiago Freitas',
      tutorDe: 'Tutor do Thor (Dachshund, 3 meses)',
      texto: 'Desde o primeiro encontro, o Brenno adaptou os treinos a nossa rotina com o Thor. Em pouco tempo, sentimos muito mais conforto e organizacao em casa.',
      rating: 5,
    },
    {
      nome: 'Joao Souza',
      tutorDe: 'Tutor da Maia (Yorkshire, 3 anos)',
      texto: 'A Maia era muito ansiosa, principalmente na hora de passear. Com o metodo positivo do Brenno, os passeios ficaram tranquilos e bem mais agradaveis para nos dois.',
      rating: 5,
    },
    {
      nome: 'Maria Silva',
      tutorDe: 'Tutora do Max',
      texto: 'Com o Max, o progresso apareceu em pouco tempo. O Brenno ensinou exatamente como manter os treinos no dia a dia, e isso fez toda a diferenca aqui em casa.',
      rating: 5,
    },
  ]

  return (
    <section
      id="depoimentos"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[30%] h-[400px] w-[400px] rounded-full opacity-15 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(27,139,141,0.3), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="mb-14 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center">Depoimentos</span>
          <h2 className="mx-auto mb-4 max-w-[500px] !text-[var(--color-cream)]">
            Resultados que falam por si
          </h2>
          <p className="mx-auto max-w-[560px] text-[var(--color-cream)]/55">
            Cada depoimento aqui e uma historia real de evolucao, conexao e resultados com o
            metodo positivo do Brenno.
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3" data-reveal-stagger>
          {depoimentos.map((d, i) => (
            <article
              key={i}
              className="card-dark group relative flex flex-col rounded-2xl p-6 sm:p-7"
            >
              {/* Quote mark */}
              <span
                className="mb-4 block text-4xl leading-none opacity-20"
                style={{ color: 'var(--color-honey)' }}
                aria-hidden
              >
                &ldquo;
              </span>

              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: d.rating }).map((_, j) => (
                  <svg key={j} className="h-4 w-4 text-[var(--color-honey)]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Text */}
              <p className="mb-6 flex-1 text-[0.95rem] leading-relaxed text-[var(--color-cream)]/70">
                {d.texto}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 border-t border-[var(--color-cream)]/8 pt-5">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-full text-sm font-bold text-[var(--color-charcoal)]"
                  style={{ background: i % 2 === 0 ? 'var(--gradient-honey)' : 'var(--gradient-teal)' }}
                  aria-hidden
                >
                  {d.nome.charAt(0)}
                </div>
                <div>
                  <span className="block text-[0.9rem] font-semibold text-[var(--color-cream)]">
                    {d.nome}
                  </span>
                  <span className="text-xs text-[var(--color-cream)]/40">
                    {d.tutorDe}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Depoimentos
