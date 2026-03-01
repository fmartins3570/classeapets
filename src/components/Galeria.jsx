import { useState } from 'react'
import useScrollReveal from '../hooks/useScrollReveal'

function Galeria() {
  useScrollReveal()
  const [activeFilter, setActiveFilter] = useState(0)

  const filtros = [
    'Todos',
    'Adestramento',
    'Formacao Profissional',
    'Digital',
  ]

  const placeholders = [
    { id: 1, label: 'Treino ao ar livre', category: 0 },
    { id: 2, label: 'Aula pratica', category: 1 },
    { id: 3, label: 'Formacao presencial', category: 1 },
    { id: 4, label: 'Golden em treinamento', category: 0 },
    { id: 5, label: 'Turma de alunos', category: 2 },
    { id: 6, label: 'Videoaula gravacao', category: 3 },
  ]

  return (
    <section id="galeria" className="bg-[var(--color-cream)] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="mb-10 text-center" data-reveal="up">
          <span className="section-label justify-center">Galeria</span>
          <h2 className="mb-3">Por dentro dos nossos treinos</h2>
        </div>

        {/* Filter buttons */}
        <div
          className="mb-10 -mx-2 flex snap-x snap-mandatory gap-2.5 overflow-x-auto px-2 sm:mx-0 sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0"
          data-reveal="fade"
        >
          {filtros.map((f, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActiveFilter(i)}
              className={`shrink-0 snap-start whitespace-nowrap rounded-full px-5 py-2.5 text-[0.85rem] font-semibold transition-all duration-300 ${
                activeFilter === i
                  ? 'bg-[var(--color-charcoal)] text-[var(--color-cream)] shadow-[var(--shadow-md)]'
                  : 'border border-[var(--color-cinza-300)] bg-transparent text-[var(--color-texto-muted)] hover:border-[var(--color-honey)] hover:text-[var(--color-honey)]'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-5" data-reveal-stagger>
          {placeholders.map((photo) => (
            <div
              key={photo.id}
              className="group relative aspect-square overflow-hidden rounded-2xl border border-[var(--color-cinza-200)] bg-[var(--color-branco)] transition-all duration-500 hover:-translate-y-1 hover:border-[var(--color-honey)]/30 hover:shadow-[var(--shadow-lg)]"
            >
              {/* Placeholder gradient */}
              <div
                className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
                style={{
                  background: `linear-gradient(${135 + photo.id * 30}deg, rgba(212,168,83,0.15), rgba(27,139,141,0.1))`,
                }}
              />

              {/* Placeholder content */}
              <div className="relative flex h-full flex-col items-center justify-center p-4">
                <span className="mb-2 text-3xl opacity-30">📷</span>
                <span className="text-center text-xs font-medium text-[var(--color-texto-muted)]">
                  {photo.label}
                </span>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[var(--color-charcoal)]/80 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <span className="text-xs font-medium text-[var(--color-cream)]">
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria
