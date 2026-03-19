import { InteractiveHoverButton } from './ui/InteractiveHoverButton'
import { trackContact } from '../utils/metaPixel'

function CtaFinal() {
  const whatsappHref = 'https://wa.me/5511934066866'
  return (
    <section id="contato" className="bg-gray-50 px-4 py-14 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center" data-reveal="scale">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
          Vamos criar juntos uma nova rotina para seu cão?
        </h2>
        <p className="mb-3 text-base text-gray-600 sm:text-lg">
          Seu cão pode muito mais — com orientação certa e respeito ao comportamento natural.
        </p>
        <p className="mb-8 text-gray-600">
          Fale com um adestrador especializado e descubra como mudar a rotina do seu pet.
        </p>
        <InteractiveHoverButton
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          text="Quero entrar em contato!"
          onClick={() => trackContact('CTA Final')}
          className="w-full text-sm shadow-lg sm:w-fit sm:text-base"
        />
      </div>
    </section>
  )
}

export default CtaFinal
