function CtaFinal() {
  const whatsappHref = 'https://wa.me/5511934066866'
  return (
    <section id="contato" className="bg-gray-50 px-6 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-2xl text-center" data-reveal="scale">
        <h2 className="mb-4 text-3xl font-extrabold text-gray-900 md:text-4xl">
          Vamos criar juntos uma nova rotina para seu cão?
        </h2>
        <p className="mb-3 text-lg text-gray-600">
          Seu cão pode muito mais — com orientação certa e respeito ao comportamento natural.
        </p>
        <p className="mb-8 text-gray-600">
          Fale com um adestrador especializado e descubra como mudar a rotina do seu pet.
        </p>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 w-full touch-manipulation items-center justify-center rounded-xl bg-[var(--color-accent)] px-8 py-4 text-base font-bold text-white !no-underline shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:!no-underline sm:w-fit"
        >
          Quero entrar em contato!
        </a>
      </div>
    </section>
  )
}

export default CtaFinal
