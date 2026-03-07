import { assetUrl } from '../utils/assetUrl'
import { InteractiveHoverButton } from './ui/InteractiveHoverButton'

function Sobre() {
  const whatsappHref = 'https://wa.me/5511934066866'
  return (
    <section id="sobre" className="bg-slate-900 px-6 py-16 text-white sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-3xl font-extrabold text-white md:text-4xl" data-reveal="up">
          Sobre o Adestrador
        </h2>
        <div className="grid grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2 md:gap-12">
          <div className="order-2 md:order-1 space-y-6" data-reveal="left">
            <img
              src={assetUrl('/images/optimized/foto-brenno-480w.webp')}
              srcSet={`${assetUrl('/images/optimized/foto-brenno-320w.webp')} 320w, ${assetUrl('/images/optimized/foto-brenno-480w.webp')} 480w, ${assetUrl('/images/optimized/foto-brenno-640w.webp')} 640w`}
              sizes="(max-width: 640px) 280px, 280px"
              alt="Adestrador Brenno com cão branco"
              className="mx-auto max-w-[240px] rounded-2xl shadow-lg sm:max-w-[280px]"
              loading="lazy"
              decoding="async"
            />
            <div className="flex aspect-video items-center justify-center rounded-xl bg-slate-800 text-sm text-slate-400 shadow-lg">
              Vídeo (placeholder)
            </div>
          </div>
          <div className="order-1 md:order-2" data-reveal="right">
            <p className="mb-4 leading-relaxed text-slate-200">
              Após atuar como engenheiro mecatrônico, descobri minha verdadeira paixão ao lado dos meus
              primeiros cães, especialmente o Maui. Foi na convivência com eles que nasceu em mim um
              interesse genuíno em compreender o comportamento canino e a conexão entre cães e humanos.
              Em 2017, comecei a adestrar meus próprios cães como um hobby. Na mesma época, fiz meu
              primeiro curso de passeador de cães (Dog Walker), enquanto ainda conciliava a engenharia
              com o trabalho no universo pet. Mas foi em 2021 que dei um passo decisivo: entrei no curso
              profissionalizante de adestrador de cães.
            </p>
            <p className="mb-4 leading-relaxed text-slate-300">
              Ao concluir a formação, tomei a decisão mais importante da minha vida — deixei a engenharia
              para trás e escolhi viver do que realmente me realiza: trabalhar com cães. Desde então, atuo
              de forma autônoma e com dedicação total à profissão.
            </p>
            <p className="mb-6 leading-relaxed text-slate-300">
              Com mais de 4 anos de experiência prática, lidando com cães de diferentes raças e perfis,
              senti que era hora de dar um novo passo. Foi assim que comecei a compartilhar tudo o que
              aprendi — e, desde então, venho transformando a vida de centenas de cães, tutores e
              profissionais por todo o Brasil.
            </p>
            <InteractiveHoverButton
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              text="Quero falar com o Brenno"
              variant="white"
              className="w-full text-base shadow-lg sm:w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Sobre
