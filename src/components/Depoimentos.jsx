function Depoimentos() {
  const depoimentos = [
    {
      nome: 'Thiago Freitas',
      tutorDe: 'Tutor do Thor',
      texto: 'Estou muito satisfeito com o adestramento canino que meu cachorro recebeu do adestrador Brenno! Desde o primeiro encontro, ele demonstrou uma enorme personalidade e dedicação, sempre buscando entender as necessidades do meu Thor, que é um Daschund filhote macho de 3 meses. Trazendo mais conforto e equilíbrio para a família.',
      rating: 5,
    },
    {
      nome: 'João Souza',
      tutorDe: 'Tutor da Maia',
      texto: 'A Maia, uma encantadora yorkshire de 3 anos, tem se destacado não apenas pela fofura, mas também pelo seu comportamento exemplar, graças ao adestramento do Brenno. Cada passeio se transforma em uma oportunidade de explorar o mundo ao seu redor.',
      rating: 5,
    },
    {
      nome: 'Maria Silva',
      tutorDe: 'Tutora do Max',
      texto: 'O Brenno demonstrou uma habilidade excepcional ao trabalhar com Max, o bulldog de 1 ano. Desde o início, ficou evidente a conexão que Brenno distribuía com o cão, utilizando técnicas de adestramento positivos que estimularam e respeitaram a personalidade única de Max. O progresso de Max em tão pouco tempo é uma prova da competência do adestrador.',
      rating: 5,
    },
  ]

  return (
    <section id="depoimentos" className="bg-gray-50 px-6 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-2 text-3xl font-extrabold text-gray-900 md:text-4xl" data-reveal="up">
          Depoimentos de Adestramento
        </h2>
        <p className="mb-4 text-center text-lg font-bold text-gray-900" data-reveal="up">
          Resultados que dizem
        </p>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600" data-reveal="up">
          Cada depoimento aqui é uma história real de evolução, conexão e resultados. Veja como
          nossos métodos ajudaram cães a se tornarem mais equilibrados e profissionais a iniciarem
          carreiras no universo pet com segurança e propósito.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" data-reveal-stagger data-reveal="up">
          {depoimentos.map((d, i) => (
            <article key={i} className="card-hover flex flex-col rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
              <div className="mb-3 text-sm text-amber-400">
                {'★'.repeat(d.rating)}
                <span className="ml-1 text-xs text-gray-400">5 de 5</span>
              </div>
              <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">"{d.texto}"</p>
              <div className="flex items-center gap-3 border-t border-gray-100 pt-4">
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--color-accent-warm)]/10 text-sm font-bold text-[var(--color-accent-warm)]"
                >
                  {d.nome.charAt(0)}
                </div>
                <div>
                  <span className="block text-sm font-bold text-gray-900">{d.nome}</span>
                  <span className="block text-xs text-gray-500">{d.tutorDe}</span>
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
