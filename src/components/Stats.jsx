import useScrollReveal from '../hooks/useScrollReveal'

function Stats() {
  useScrollReveal()

  const items = [
    { icon: '🐕', number: '+250', label: 'familias atendidas em Sao Paulo e regiao' },
    { icon: '🎓', number: '+250', label: 'tutores orientados com metodologia positiva' },
    { icon: '⏳', number: '+5', label: 'anos de experiencia em comportamento canino' },
    { icon: '📋', number: '30', label: 'treinamentos conduzidos por mes em media' },
  ]

  return (
    <section className="relative bg-[var(--color-cream)] px-5 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-[1100px]" data-reveal-stagger>
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl border border-[var(--color-cinza-200)] bg-[var(--color-branco)] p-5 text-center transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-honey)]/40 hover:shadow-[var(--shadow-md)] sm:p-7"
            >
              <span className="mb-3 block text-2xl sm:text-3xl">{item.icon}</span>
              <span
                className="mb-2 block text-3xl font-bold bg-clip-text text-transparent sm:text-4xl"
                style={{ backgroundImage: 'var(--gradient-honey)' }}
              >
                {item.number}
              </span>
              <span className="text-[0.85rem] leading-snug text-[var(--color-texto-muted)] sm:text-[0.9rem]">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
