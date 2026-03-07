import { assetUrl } from '../utils/assetUrl'
import { InteractiveHoverButton } from './ui/InteractiveHoverButton'
import { GlowCard } from './ui/GlowCard'

function Servicos() {
  const servicos = [
    {
      title: 'Tutores, adestre seu cão',
      text: 'Nosso foco é ensinar você, tutor, a adestrar seu cão, para ser feliz e equilibrado, de forma presencial, em São Paulo.',
      cta: 'Clique aqui',
      link: 'https://classeapets.com.br/adestramento-de-caes-para-tutores',
      img: 'servico-tutores',
      alt: 'Brenno com três cães durante treinamento para tutores',
    },
    {
      title: 'Formação de Adestrador de Cães',
      text: 'Você aprende tudo o que precisa para atuar com confiança no mercado de adestramento. Formação Técnica + Comportamental + Emocional com acompanhamento próximo.',
      cta: 'Clique aqui',
      link: 'https://classeapets.com.br/curso-profissional-de-adestrador-de-caes/',
      img: 'servico-formacao-adestrador',
      alt: 'Brenno agachado com dois cães Golden Retriever durante treinamento',
    },
    {
      title: 'Cursos 100% Digital',
      text: 'Aprenda com liberdade. Acesse todos os cursos, de onde quiser, no seu ritmo. Com videoaulas, materiais de apoio, suporte especializado e certificado de conclusão.',
      cta: 'Clique aqui',
      link: 'https://classeapets.com.br/cursos-digitais/',
      img: 'servico-digital',
      alt: 'Brenno com dois cães Golden Retriever em sessão de adestramento digital',
    },
    {
      title: 'Curso de Formação Passeador de Cães',
      text: 'Seja um profissional completo, preparado para o mercado. A profissão de Dog Walker é uma vocação — com propósito, movimento, conexão e crescimento real.',
      cta: 'Clique aqui',
      link: 'https://classeapets.com.br/curso-profissional-de-passeador-de-caes/',
      img: 'servico-passeador',
      alt: 'Brenno passeando com cão durante formação de passeador',
    },
    {
      title: 'Mentoria para Profissionais',
      text: 'Acompanhamento personalizado para adestradores e profissionais do mercado pet que querem elevar seus resultados, atrair mais clientes e se posicionar com autoridade.',
      cta: 'Clique aqui',
      link: '#mentoria',
      img: 'servico-mentoria',
      alt: 'Brenno em sessão de mentoria para profissionais do mercado pet',
    },
  ]

  const formatos = [
    {
      label: 'Presencial',
      desc: 'Ideal para quem busca interação prática com o adestrador.',
    },
    {
      label: 'Híbrido',
      desc: 'Estude online no seu ritmo e venha praticar com a gente!',
    },
    {
      label: '100% Digital',
      desc: 'Acesso completo à nossa plataforma, com videoaulas, materiais extras e suporte, tudo de onde você estiver.',
    },
  ]

  return (
    <section id="servicos" className="bg-white px-6 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl" data-reveal="up">
          Nossos Serviços
        </h2>
        <p className="mx-auto mb-6 max-w-3xl text-center text-gray-600" data-reveal="up">
          Se você é tutor e quer entender melhor o comportamento do seu cão, ou se sonha em
          trabalhar profissionalmente com cães — como adestrador ou passeador — você está no lugar certo!
        </p>
        <p className="mx-auto mb-6 max-w-3xl text-center text-gray-600" data-reveal="up">
          Com uma metodologia moderna, baseada em casos reais, técnicas atualizadas e estudo científico, oferecemos três formatos de aprendizado:
        </p>
        <div className="mx-auto mb-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3" data-reveal="up">
          {formatos.map((f) => (
            <div key={f.label} className="rounded-xl bg-gray-50 p-4 text-center">
              <span className="mb-1 block text-sm font-bold text-gray-900">{f.label}</span>
              <span className="text-xs leading-snug text-gray-500">{f.desc}</span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8" data-reveal-stagger data-reveal="up">
          {servicos.map((s, i) => (
            <GlowCard key={i}>
            <article className="relative card-hover flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:shadow-md">
              <div className="flex h-40 items-end justify-center overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200 sm:h-48">
                <img
                  src={assetUrl(`/images/optimized/${s.img}-480w.webp`)}
                  srcSet={`${assetUrl(`/images/optimized/${s.img}-320w.webp`)} 320w, ${assetUrl(`/images/optimized/${s.img}-480w.webp`)} 480w, ${assetUrl(`/images/optimized/${s.img}-640w.webp`)} 640w`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  alt={s.alt}
                  className="h-full w-auto max-w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.1)]"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 text-base font-bold text-gray-900">{s.title}</h3>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-600">{s.text}</p>
                <InteractiveHoverButton
                  href={s.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  text={s.cta}
                  className="w-full text-sm"
                />
              </div>
            </article>
            </GlowCard>
          ))}
        </div>

        {/* Banner de destaque */}
        <div className="mt-16 rounded-2xl bg-gray-50 px-6 py-10 text-center sm:px-10 sm:py-14" data-reveal="up">
          <h3 className="mb-3 text-2xl font-extrabold text-gray-900 md:text-3xl">
            Adestramento e Equilíbrio Mental para o Seu Cão
          </h3>
          <p className="mb-6 text-sm text-gray-500">
            Treinamentos presenciais, híbrido e 100% digital &middot; Acesso Imediato &middot; Suporte direto com o adestrador
          </p>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-4 text-left sm:grid-cols-2">
            {[
              { title: 'Domine técnicas eficazes e ganhe segurança', desc: 'Os resultados aparecem rápido e de forma duradoura.' },
              { title: 'Com abordagem estratégica e foco no comportamento', desc: 'Seja um adestrador completo, preparado para o mercado.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm">
                <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <div>
                  <span className="block text-sm font-bold text-gray-900">{item.title}</span>
                  <span className="text-xs text-gray-500">{item.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Servicos
