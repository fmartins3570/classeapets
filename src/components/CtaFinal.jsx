import useScrollReveal from '../hooks/useScrollReveal'

function CtaFinal() {
  useScrollReveal()
  const whatsappHref = 'https://wa.me/INSERIR_NUMERO_REAL_AQUI' // TODO: INSERIR_NUMERO_REAL_AQUI

  return (
    <section
      id="contato"
      className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Ambient glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.35), transparent 70%)' }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-[640px] text-center" data-reveal="scale">
        <span className="section-label section-label-light mb-6 justify-center">Fale Conosco</span>

        <h2 className="mb-6 !text-[var(--color-cream)]">
          Vamos criar juntos uma nova rotina para seu cao?
        </h2>

        <p className="mx-auto mb-10 max-w-[480px] text-[1.05rem] leading-relaxed text-[var(--color-cream)]/60">
          Seu cao pode muito mais — com orientacao certa e respeito ao comportamento natural.
          Fale com um adestrador especializado e descubra como mudar a rotina do seu pet.
        </p>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary inline-flex min-h-[56px] items-center justify-center gap-3 !rounded-full !px-10 !py-4 !text-base !font-bold !no-underline hover:!no-underline"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.49 0 .16 5.32.16 11.9c0 2.1.55 4.15 1.6 5.95L0 24l6.33-1.66a11.9 11.9 0 0 0 5.74 1.46h.01c6.58 0 11.92-5.33 11.92-11.9a11.8 11.8 0 0 0-3.48-8.42Z" />
          </svg>
          Quero entrar em contato
        </a>

        {/* Trust line */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
          {['Metodo positivo', 'Resposta rapida', 'Sem compromisso'].map((text) => (
            <div key={text} className="flex items-center gap-2">
              <svg className="h-4 w-4 text-[var(--color-success)]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-[0.8rem] font-medium text-[var(--color-cream)]/50">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CtaFinal
