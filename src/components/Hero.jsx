import { assetUrl } from '../utils/assetUrl'

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden px-5 pb-16 pt-28 sm:px-8 sm:pt-32 md:pb-24 lg:pt-36"
      style={{ background: 'var(--gradient-hero)' }}
    >
      {/* Ambient glow orbs */}
      <div
        className="pointer-events-none absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full opacity-30 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(212,168,83,0.3), transparent 70%)' }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-5%] bottom-[5%] h-[400px] w-[400px] rounded-full opacity-20 blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(27,139,141,0.3), transparent 70%)' }}
        aria-hidden
      />

      {/* Subtle grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(212,168,83,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
        aria-hidden
      />

      <div className="relative mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Text content */}
        <div className="text-center lg:text-left">
          <span className="section-label section-label-light mb-4 inline-flex justify-center lg:justify-start">
            Metodo positivo
          </span>
          <h1 className="mb-5 !text-[var(--color-cream)] sm:mb-6">
            Transforme Sua{' '}
            <span className="relative inline-block">
              <span
                className="bg-clip-text text-transparent"
                style={{ backgroundImage: 'var(--gradient-honey)' }}
              >
                Paixao por Caes
              </span>
              <span
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full opacity-60"
                style={{ background: 'var(--gradient-honey)' }}
                aria-hidden
              />
            </span>{' '}
            em uma Profissao Lucrativa
          </h1>

          <p className="mx-auto mb-8 max-w-[540px] text-[1.05rem] leading-relaxed text-[var(--color-cream)]/70 lg:mx-0 lg:text-[1.1rem]">
            Aprenda do zero como faturar no mercado pet com o metodo positivo.
            Nossa formacao presencial te da o passo a passo, a pratica real e a
            confianca para iniciar sua nova carreira como adestrador.
          </p>

          {/* Urgency badge */}
          <div className="mb-8 inline-flex items-center gap-2.5 rounded-full border border-[var(--color-vermelho)]/30 bg-[var(--color-vermelho)]/10 px-5 py-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--color-vermelho)] opacity-75" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[var(--color-vermelho)]" />
            </span>
            <span className="text-[0.85rem] font-semibold text-[var(--color-vermelho)]">
              Apenas 15 vagas para a proxima turma
            </span>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:gap-5 lg:justify-start">
            <a
              href="#cursos"
              className="btn-primary inline-flex min-h-[52px] w-full items-center justify-center gap-2.5 !rounded-full !px-8 !py-3.5 !text-[0.95rem] !font-bold !no-underline hover:!no-underline sm:w-auto"
            >
              Ver Detalhes da Formacao
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#sobre"
              className="btn-outline inline-flex min-h-[52px] w-full items-center justify-center !rounded-full !px-8 !py-3.5 !text-[0.95rem] !font-semibold !no-underline hover:!no-underline sm:w-auto"
            >
              Conhecer o Brenno
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start lg:gap-8">
            {[
              { value: '250+', label: 'Familias' },
              { value: '5+', label: 'Anos' },
              { value: '100%', label: 'Positivo' },
            ].map((stat) => (
              <div key={stat.label} className="flex items-center gap-2">
                <span
                  className="text-lg font-bold bg-clip-text text-transparent"
                  style={{ backgroundImage: 'var(--gradient-honey)' }}
                >
                  {stat.value}
                </span>
                <span className="text-[0.8rem] font-medium text-[var(--color-cream)]/50">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Hero image */}
        <div className="relative mx-auto w-full max-w-[420px] lg:max-w-none">
          {/* Background shape */}
          <div
            className="absolute left-1/2 top-1/2 h-[85%] w-[75%] -translate-x-1/2 -translate-y-1/2 rounded-[32px]"
            style={{
              background: 'linear-gradient(160deg, rgba(212,168,83,0.15), rgba(27,139,141,0.1))',
              border: '1px solid rgba(212,168,83,0.1)',
            }}
            aria-hidden
          />
          <div
            className="absolute left-1/2 top-1/2 h-[78%] w-[68%] -translate-x-1/2 -translate-y-1/2 rounded-[28px]"
            style={{
              background: 'linear-gradient(160deg, rgba(212,168,83,0.08), rgba(27,139,141,0.05))',
              border: '1px solid rgba(212,168,83,0.06)',
            }}
            aria-hidden
          />
          <img
            src={assetUrl('/images/optimized/hero-brenno-caes-768w.webp')}
            srcSet={`${assetUrl('/images/optimized/hero-brenno-caes-320w.webp')} 320w, ${assetUrl('/images/optimized/hero-brenno-caes-480w.webp')} 480w, ${assetUrl('/images/optimized/hero-brenno-caes-640w.webp')} 640w, ${assetUrl('/images/optimized/hero-brenno-caes-768w.webp')} 768w, ${assetUrl('/images/optimized/hero-brenno-caes-960w.webp')} 960w, ${assetUrl('/images/optimized/hero-brenno-caes-1200w.webp')} 1200w`}
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 420px, 500px"
            alt="Adestrador Brenno trabalhando com dois caes Golden Retriever"
            className="relative z-10 w-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>

      {/* Bottom fade to cream */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{ background: 'linear-gradient(to bottom, transparent, var(--color-cream))' }}
        aria-hidden
      />
    </section>
  )
}

export default Hero
