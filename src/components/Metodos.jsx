import { InteractiveHoverButton } from './ui/InteractiveHoverButton'
import { GlowCard } from './ui/GlowCard'

function Metodos() {
  const metodos = [
    {
      title: 'Tutores, adestre seu cão',
      items: [
        'Correção de comportamentos indesejados',
        'Mais liberdade para o cão e tranquilidade para o tutor',
        'Relação baseada em confiança, respeito e afeto',
        'Adaptação mais fácil à rotina da família',
      ],
    },
    {
      title: 'Curso de adestrador de cães',
      items: [
        'Acompanhamento próximo com profissional experiente',
        'Casos práticos e treinamentos reais desde o 1º dia',
        'Aprenda a interpretar sinais e emoções dos cães',
        'Formação sólida com troca direta e orientação constante',
      ],
    },
    {
      title: 'Curso passeador de cães presencial',
      items: [
        'Menos estresse e mais equilíbrio para o cão',
        'Estímulo físico e mental nos passeios',
        'Rotina saudável e prazerosa',
        'Socialização na medida certa',
        'Alto potencial de lucro com preparo profissional',
      ],
    },
    {
      title: 'Cursos 100% digital',
      items: [
        'Mapa das melhores rotas para passeios seguros',
        'Módulos sobre ansiedade, comandos, xixi fora do lugar e mais',
        'Modelos prontos: contratos e fichas de atendimento',
        'Comunidade online para trocar experiências',
      ],
    },
  ]

  return (
    <section id="metodos" className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl" data-reveal="up">
          Nossos Métodos
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-center text-gray-600" data-reveal="up">
          Seja você tutor ou aspirante a profissional, temos a solução ideal com nossos métodos comprovados,
          conteúdo de qualidade e apoio profissional para sua jornada no mundo comportamental canino.
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-8" data-reveal-stagger data-reveal="up">
          {metodos.map((m, i) => (
            <GlowCard key={i}>
            <article className="relative card-hover flex flex-col rounded-2xl border border-gray-200 bg-white p-6">
              <h3 className="mb-4 text-base font-bold text-gray-900">{m.title}</h3>
              <ul className="mb-5 flex-1 space-y-2">
                {m.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm leading-snug text-gray-600">
                    <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
              <InteractiveHoverButton
                href="#contato"
                text="Saiba mais"
                className="w-full text-sm"
              />
            </article>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metodos
