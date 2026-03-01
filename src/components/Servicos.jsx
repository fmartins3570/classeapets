import useScrollReveal from '../hooks/useScrollReveal'

function Servicos() {
  useScrollReveal()

  const servicos = [
    {
      icon: '🏠',
      title: 'Tutor: adestre seu cao',
      text: 'Aprenda passo a passo como educar seu cao usando o metodo positivo, sem violencia. Entenda os comportamentos e construa uma rotina tranquila.',
      cta: 'Quero adestrar meu cao',
      link: '#contato',
      accent: 'honey',
    },
    {
      icon: '🚶',
      title: 'Curso passeador de caes',
      text: 'Formacao para quem deseja ser dog walker profissional. Aprenda manejo, seguranca e atendimento ao cliente para se destacar no mercado pet.',
      cta: 'Quero ser passeador',
      link: '#contato',
      accent: 'teal',
    },
    {
      icon: '🎓',
      title: 'Curso adestrador de caes',
      text: 'Curso completo para atuar com seguranca. Aprenda fundamentos do comportamento canino e tecnicas de adestramento positivo na pratica.',
      cta: 'Quero ser adestrador',
      link: '#contato',
      accent: 'honey',
    },
    {
      icon: '💻',
      title: 'Cursos 100% digital',
      text: 'Videoaulas objetivas para quem prefere estudar no proprio ritmo. Conteudos praticos para aplicar com seu cao ou nos seus atendimentos.',
      cta: 'Acessar cursos online',
      link: '#contato',
      accent: 'teal',
    },
  ]

  const accentStyles = {
    honey: {
      iconBg: 'bg-[var(--color-honey)]/10',
      iconColor: 'text-[var(--color-honey)]',
      border: 'hover:border-[var(--color-honey)]/40',
      btn: 'btn-primary',
    },
    teal: {
      iconBg: 'bg-[var(--color-teal)]/10',
      iconColor: 'text-[var(--color-teal)]',
      border: 'hover:border-[var(--color-teal)]/40',
      btn: 'btn-teal',
    },
  }

  return (
    <section
      id="servicos"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-28"
      style={{ background: 'var(--gradient-section-dark)' }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute right-[-15%] top-[20%] h-[500px] w-[500px] rounded-full opacity-20 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.25), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[1200px]">
        {/* Header */}
        <div className="mb-14 text-center" data-reveal="up">
          <span className="section-label section-label-light justify-center">Nossos Servicos</span>
          <h2 className="mx-auto mb-5 max-w-[600px] !text-[var(--color-cream)]">
            Formacoes que transformam vidas
          </h2>
          <p className="mx-auto max-w-[640px] text-[var(--color-cream)]/60">
            Se voce e tutor e quer entender melhor o comportamento do seu cao, ou se sonha em
            trabalhar profissionalmente com caes, voce esta no lugar certo. Oferecemos formacoes
            completas em formato Presencial, Hibrido e 100% Digital.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:gap-7" data-reveal-stagger>
          {servicos.map((s, i) => {
            const style = accentStyles[s.accent]
            return (
              <article
                key={i}
                className={`card-dark group flex flex-col rounded-2xl p-6 sm:p-8 ${style.border}`}
              >
                {/* Icon */}
                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-2xl ${style.iconBg}`}>
                  {s.icon}
                </div>

                <h3 className="mb-3 !text-[var(--color-cream)]">{s.title}</h3>
                <p className="mb-6 flex-1 text-[0.95rem] leading-relaxed text-[var(--color-cream)]/55">
                  {s.text}
                </p>

                <a
                  href={s.link}
                  className={`${style.btn} inline-flex min-h-[48px] w-full items-center justify-center !rounded-full !px-6 !py-3 !text-[0.9rem] !font-semibold !no-underline hover:!no-underline sm:w-auto sm:self-start`}
                >
                  {s.cta}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Servicos
