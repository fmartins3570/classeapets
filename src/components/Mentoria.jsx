import { assetUrl } from '../utils/assetUrl'
import { InteractiveHoverButton } from './ui/InteractiveHoverButton'
import { GlowCard } from './ui/GlowCard'

function Mentoria() {
  const whatsappHref = 'https://wa.me/5511934066866?text=Ol%C3%A1%2C%20tenho%20interesse%20na%20mentoria%20para%20profissionais!'

  const beneficios = [
    'Acompanhamento individualizado com o adestrador Brenno',
    'Estratégias para atrair e fidelizar clientes',
    'Posicionamento profissional e marketing pessoal',
    'Análise de casos reais e orientação prática',
    'Suporte contínuo para evolução na carreira',
  ]

  return (
    <section id="mentoria" className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="section-title mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl" data-reveal="up">
          Mentoria para Profissionais
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-center text-gray-600" data-reveal="up">
          Você já atua como adestrador ou profissional do mercado pet e quer ir além?
          A mentoria foi criada para quem busca crescimento real, com direcionamento estratégico
          e acompanhamento próximo.
        </p>
        <GlowCard>
        <div className="relative rounded-2xl border-2 border-[var(--color-accent)] bg-white p-4 sm:p-8 md:p-10" data-reveal="up">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 md:items-center">
            <div>
              <span className="mb-4 inline-block rounded-full bg-[var(--color-accent)]/10 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--color-accent)]">
                Exclusivo
              </span>
              <h3 className="mb-4 text-xl font-bold text-gray-900">
                Eleve sua carreira no mercado pet
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-gray-600">
                A mentoria é um programa de acompanhamento personalizado para adestradores
                e profissionais que querem se destacar, conquistar mais clientes e construir
                autoridade no mercado.
              </p>
              <ul className="space-y-3">
                {beneficios.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-accent)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center">
              <img
                src={assetUrl('/images/optimized/mentoria-destaque-480w.webp')}
                srcSet={`${assetUrl('/images/optimized/mentoria-destaque-320w.webp')} 320w, ${assetUrl('/images/optimized/mentoria-destaque-480w.webp')} 480w, ${assetUrl('/images/optimized/mentoria-destaque-640w.webp')} 640w`}
                sizes="240px"
                alt="Adestrador Brenno — Mentoria para profissionais do mercado pet"
                className="mb-6 mx-auto max-w-[240px] rounded-2xl"
                loading="lazy"
                decoding="async"
              />
              <InteractiveHoverButton
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                text="Quero saber mais sobre a mentoria"
                className="w-full text-sm shadow-lg sm:text-base"
              />
            </div>
          </div>
        </div>
        </GlowCard>
      </div>
    </section>
  )
}

export default Mentoria
