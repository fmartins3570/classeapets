import { assetUrl } from '../utils/assetUrl'

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100/80 to-gray-50/80" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl items-center gap-8 px-6 py-16 sm:py-20 md:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
        <div className="text-center lg:text-left" data-reveal="up">
          <span className="mb-5 inline-block rounded-full bg-red-50 px-3 py-1 text-sm font-semibold text-red-600">
            Turma Presencial em São Paulo
          </span>
          <h1 className="mb-5 text-4xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
            Transforme Sua Paixão por Cães em uma Profissão Lucrativa
          </h1>
          <p className="mb-5 text-lg leading-relaxed text-gray-600 lg:max-w-[540px]">
            Aprenda do zero como faturar no mercado pet com o método positivo. Seja você um apaixonado
            por cães, tutor ou passeador, nossa formação presencial te dá o passo a passo, a prática
            real e a confiança para iniciar sua nova carreira como adestrador.
          </p>
          <p className="mb-8 flex items-center justify-center gap-2 text-sm font-semibold text-red-500 lg:justify-start">
            <svg className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
            Apenas 15 vagas disponíveis para a próxima turma.
          </p>
          <a
            href="#contato"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--color-accent)] px-8 py-4 text-base font-bold text-white !no-underline shadow-lg transition-transform duration-200 hover:-translate-y-1 hover:!no-underline sm:w-fit"
          >
            Ver Detalhes da Formação
            <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
          </a>
        </div>
        <div className="relative mx-auto h-[320px] w-full max-w-[340px] sm:h-[450px] sm:max-w-[380px] lg:h-[540px] lg:max-w-[420px]" data-reveal="scale">
          <div
            aria-hidden
            className="absolute left-1/2 top-[52%] h-[60%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-gray-900/5"
          />
          <img
            src={assetUrl('/images/optimized/hero-brenno-caes-768w.webp')}
            srcSet={`${assetUrl('/images/optimized/hero-brenno-caes-320w.webp')} 320w, ${assetUrl('/images/optimized/hero-brenno-caes-480w.webp')} 480w, ${assetUrl('/images/optimized/hero-brenno-caes-640w.webp')} 640w, ${assetUrl('/images/optimized/hero-brenno-caes-768w.webp')} 768w, ${assetUrl('/images/optimized/hero-brenno-caes-960w.webp')} 960w, ${assetUrl('/images/optimized/hero-brenno-caes-1200w.webp')} 1200w, ${assetUrl('/images/optimized/hero-brenno-caes-1600w.webp')} 1600w, ${assetUrl('/images/optimized/hero-brenno-caes-1920w.webp')} 1920w`}
            sizes="(max-width: 640px) 96vw, (max-width: 1024px) 380px, 420px"
            alt="Adestrador Brenno trabalhando com dois cães Golden Retriever"
            className="absolute bottom-0 left-1/2 z-10 w-[96%] -translate-x-1/2 object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.15)]"
            decoding="async"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
