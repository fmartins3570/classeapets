import { motion } from 'framer-motion'
import { assetUrl } from '../utils/assetUrl'
import { AuroraBackground } from './ui/AuroraBackground'
import { InteractiveHoverButton } from './ui/InteractiveHoverButton'

function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden">
      <AuroraBackground className="min-h-[auto] bg-gray-50 py-10 sm:py-16 md:py-28">
        <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: 'easeOut' }}
            className="relative z-10 text-center lg:text-left"
          >
            <span className="mb-4 inline-block rounded-full bg-red-50 px-3 py-1 text-xs font-semibold text-red-600 sm:mb-5 sm:text-sm">
              Turma Presencial em São Paulo
            </span>
            <h1 className="mb-4 text-[1.6rem] font-extrabold leading-tight text-gray-900 sm:mb-5 sm:text-4xl md:text-5xl lg:text-6xl">
              Transforme Sua Paixão por Cães em uma Nova Carreira
            </h1>
            <p className="mb-4 text-[0.95rem] leading-relaxed text-gray-600 sm:mb-5 sm:text-lg lg:max-w-[540px]">
              Aprenda do zero como atuar profissionalmente no mercado pet com o método renovador. Seja você um apaixonado
              por cães, tutor ou passeador, nossa formação presencial te dá o passo a passo, a prática
              real e a confiança para iniciar sua nova carreira como adestrador.
            </p>
            <p className="mb-6 flex items-center justify-center gap-2 text-xs font-semibold text-red-500 sm:mb-8 sm:text-sm lg:justify-start">
              <svg className="h-4 w-4 shrink-0 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4.5c-.77-.833-2.694-.833-3.464 0L3.34 16.5c-.77.833.192 2.5 1.732 2.5z" /></svg>
              Apenas 15 vagas disponíveis para a próxima turma.
            </p>
            <InteractiveHoverButton
              href="#cursos"
              text="Ver Detalhes da Formação"
              className="relative z-20 w-full text-sm shadow-lg sm:w-fit sm:text-base"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: 'easeOut' }}
            className="relative mx-auto w-[75vw] max-w-[300px] sm:w-full sm:max-w-[380px] lg:max-w-[420px]"
          >
            <img
              src={assetUrl('/images/optimized/hero-brenno-caes-768w.webp')}
              srcSet={`${assetUrl('/images/optimized/hero-brenno-caes-320w.webp')} 320w, ${assetUrl('/images/optimized/hero-brenno-caes-480w.webp')} 480w, ${assetUrl('/images/optimized/hero-brenno-caes-640w.webp')} 640w, ${assetUrl('/images/optimized/hero-brenno-caes-768w.webp')} 768w, ${assetUrl('/images/optimized/hero-brenno-caes-960w.webp')} 960w, ${assetUrl('/images/optimized/hero-brenno-caes-1200w.webp')} 1200w, ${assetUrl('/images/optimized/hero-brenno-caes-1600w.webp')} 1600w, ${assetUrl('/images/optimized/hero-brenno-caes-1920w.webp')} 1920w`}
              sizes="(max-width: 640px) 75vw, (max-width: 1024px) 380px, 420px"
              alt="Adestrador Brenno trabalhando com dois cães Golden Retriever"
              className="h-auto w-full object-contain drop-shadow-[0_18px_35px_rgba(0,0,0,0.15)]"
              decoding="async"
              fetchPriority="high"
            />
          </motion.div>
        </div>
      </AuroraBackground>
    </section>
  )
}

export default Hero
