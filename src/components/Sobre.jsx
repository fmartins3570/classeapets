import useScrollReveal from '../hooks/useScrollReveal'

function Sobre() {
  useScrollReveal()
  const whatsappHref = 'https://wa.me/INSERIR_NUMERO_REAL_AQUI' // TODO: INSERIR_NUMERO_REAL_AQUI

  const milestones = [
    { year: '2019', text: 'Descobriu a paixao por comportamento canino' },
    { year: '2021', text: 'Transicao de carreira para adestrador profissional' },
    { year: '2023', text: '250+ familias atendidas com sucesso' },
    { year: 'Hoje', text: 'Referencia em adestramento positivo no ABC Paulista' },
  ]

  return (
    <section id="sobre" className="relative bg-[var(--color-cream)] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="mb-12 text-center" data-reveal="up">
          <span className="section-label justify-center">Sobre o Adestrador</span>
          <h2 className="mx-auto mb-4 max-w-[600px]">
            De engenheiro a especialista em comportamento canino
          </h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14">
          {/* Video / placeholder */}
          <div data-reveal="left">
            <div className="relative overflow-hidden rounded-2xl border border-[var(--color-cinza-200)] bg-[var(--color-charcoal)]">
              <div className="flex aspect-video items-center justify-center">
                {/* Play button */}
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--color-honey)]/40 bg-[var(--color-honey)]/10 transition-all duration-300 hover:scale-110 hover:bg-[var(--color-honey)]/20">
                  <svg className="ml-1 h-6 w-6 text-[var(--color-honey)]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[var(--color-charcoal)] to-transparent p-4">
                <span className="text-xs font-medium text-[var(--color-cream)]/50">Video institucional</span>
              </div>
            </div>

            {/* Mini timeline */}
            <div className="mt-8 space-y-4" data-reveal-stagger>
              {milestones.map((m) => (
                <div key={m.year} className="flex items-start gap-4">
                  <span
                    className="mt-0.5 shrink-0 rounded-lg px-3 py-1 text-xs font-bold bg-clip-text text-transparent"
                    style={{ backgroundImage: 'var(--gradient-honey)', WebkitBackgroundClip: 'text' }}
                  >
                    {m.year}
                  </span>
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-honey)]" aria-hidden />
                    <span className="text-[0.9rem] text-[var(--color-texto-muted)]">{m.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text content */}
          <div data-reveal="right">
            <p className="mb-5 text-[1.1rem] font-medium leading-relaxed text-[var(--color-charcoal)]">
              Minha trajetoria comecou na engenharia mecatronica, mas foi convivendo com meus caes,
              especialmente o Maui, que descobri minha paixao por comportamento canino e por ajudar
              familias a viverem melhor com seus pets.
            </p>
            <p className="mb-5 leading-relaxed text-[var(--color-texto-muted)]">
              Em 2021, fiz a transicao definitiva de carreira e passei a atuar profissionalmente como
              adestrador, levando para cada atendimento um metodo positivo, respeitoso e aplicavel ao
              dia a dia real dos tutores.
            </p>
            <p className="mb-8 leading-relaxed text-[var(--color-texto-muted)]">
              Hoje, com mais de 4 anos de experiencia pratica, ja ajudei centenas de familias a
              construirem uma rotina mais equilibrada, com caes mais calmos, obedientes e felizes.
            </p>

            {/* CTA */}
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 !rounded-full !px-8 !py-3.5 !font-bold !no-underline hover:!no-underline sm:w-auto"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.49 0 .16 5.32.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.58 0 11.92-5.33 11.92-11.9a11.8 11.8 0 0 0-3.48-8.42Z" />
              </svg>
              Quero falar com o Brenno
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
