import { GlowCard } from './ui/GlowCard'

function Stats() {
  const items = [
    { number: '+250', label: 'Famílias Atendidas' },
    { number: '+500', label: 'Cães Transformados' },
    { number: '+4', label: 'Anos de Experiência' },
    { number: '+10', label: 'Estados Atendidos' },
  ]

  return (
    <section id="estatisticas" className="bg-gray-50 px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-3 text-center text-sm font-semibold uppercase tracking-wider text-[var(--color-accent)]" data-reveal="up">
          O que posso te ajudar?
        </p>
        <h2 className="section-title mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl" data-reveal="up">
          Resultados que comprovam nossa paixão e experiência
        </h2>
        <p className="mx-auto mb-12 max-w-2xl text-center text-gray-600" data-reveal="up">
          Aqui, o adestramento vai além dos comandos: é conexão, respeito e resultado de verdade!
        </p>
        <div
          className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8"
          data-reveal-stagger
          data-reveal="up"
        >
          {items.map((item, i) => (
            <GlowCard key={i}>
            <div className="relative rounded-2xl bg-white p-6 text-center shadow-sm">
              <span className="mb-1 block text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
                {item.number}
              </span>
              <span className="text-sm leading-snug text-gray-500">{item.label}</span>
            </div>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
