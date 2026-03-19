import { useEffect, useState } from 'react'
import { ArrowRight, Star, Quote } from 'lucide-react'
import { assetUrl } from '../utils/assetUrl'
import { FallingPattern } from '../components/ui/FallingPattern'
import VideoPlayer from '../components/ui/VideoPlayer'
import useScrollReveal from '../hooks/useScrollReveal'
import { trackViewContent } from '../utils/metaPixel'

/* ─────────────────── HEADER ─────────────────── */

function ProvaSocialHeader() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-xl ${
        scrolled
          ? 'bg-[var(--color-charcoal)]/80'
          : 'bg-[var(--color-charcoal)]/40'
      }`}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-5 py-3 sm:px-8 md:py-4">
        <a href="/" className="relative z-10 inline-flex items-center !no-underline hover:opacity-90 hover:!no-underline">
          <img
            src={assetUrl('/images/optimized/logo-classeapets-transparent-v2.webp')}
            srcSet={`${assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} 320w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-480w.webp')} 480w`}
            sizes="56px"
            alt="Classe A Pets"
            className="w-[48px] object-contain sm:w-[56px]"
            decoding="async"
            fetchPriority="high"
          />
        </a>

        <a
          href="/curso-adestramento-classeapets-presencial"
          className="btn-primary !rounded-full !px-5 !py-2.5 !text-[0.78rem] !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline sm:!px-6 sm:!text-[0.82rem]"
        >
          Conhecer a Formação
        </a>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 translate-y-full"
        style={{ background: 'linear-gradient(to bottom, rgba(46,222,240,0.07), rgba(46,222,240,0.02) 40%, transparent)' }}
        aria-hidden
      />
    </header>
  )
}

/* ─────────────────── DEPOIMENTO CARD ─────────────────── */

function TestimonialCard({ name, role, text }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-white/8 bg-white/[0.03] p-6 transition-all duration-500 hover:-translate-y-1 sm:p-8">
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[var(--color-cyan)]/5 blur-2xl transition-all duration-500 group-hover:bg-[var(--color-cyan)]/10" aria-hidden />

      <div className="relative z-10">
        <Quote className="mb-4 h-6 w-6 text-[var(--color-cyan)]/40" />

        <p className="text-sm leading-relaxed text-[var(--color-cinza-200)] sm:text-base">
          "{text}"
        </p>

        <div className="mt-5 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-cyan)]/10 text-sm font-bold text-[var(--color-cyan)]">
            {name.charAt(0)}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{name}</p>
            <p className="text-xs text-[var(--color-cinza-300)]">{role}</p>
          </div>
        </div>

        <div className="mt-4 flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="h-3.5 w-3.5 fill-[var(--color-cyan)] text-[var(--color-cyan)]" />
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─────────────────── CTA SECTION ─────────────────── */

function CtaSection() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
        <div className="h-[300px] w-[600px] rounded-full bg-[var(--color-cyan)]/8 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-2xl px-5 text-center">
        <p className="mb-3 text-sm font-semibold tracking-widest text-[var(--color-cyan)] uppercase">
          Próximo passo
        </p>
        <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
          Quer ser o próximo<br className="hidden sm:block" /> caso de sucesso?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-[var(--color-cinza-200)] sm:text-lg">
          Conheça a formação presencial de adestradores profissionais da Classe A Pets.
          Do zero ao seu primeiro cliente.
        </p>

        <a
          href="/curso-adestramento-classeapets-presencial"
          className="btn-primary group mt-8 inline-flex items-center gap-3 !rounded-full !px-8 !py-4 !text-sm !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline sm:!text-base"
        >
          Conhecer a Formação
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>

        <p className="mt-6 text-xs text-[var(--color-cinza-300)]">
          Vagas limitadas — turma presencial em São Paulo
        </p>
      </div>
    </section>
  )
}

/* ─────────────────── FOOTER SIMPLES ─────────────────── */

function SimpleFooter() {
  return (
    <footer className="border-t border-white/5 bg-[var(--color-charcoal)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-5 py-8 sm:flex-row sm:justify-between">
        <a href="/" className="inline-flex items-center !no-underline hover:opacity-90 hover:!no-underline">
          <img
            src={assetUrl('/images/optimized/logo-classeapets-transparent-v2.webp')}
            alt="Classe A Pets"
            className="w-10 object-contain"
            decoding="async"
          />
        </a>
        <p className="text-xs text-[var(--color-cinza-300)]">
          &copy; {new Date().getFullYear()} Classe A Pets. Todos os direitos reservados.
        </p>
        <div className="flex gap-4">
          <a href="/termos-de-uso" className="text-xs text-[var(--color-cinza-300)] !no-underline transition-colors hover:text-[var(--color-cinza-300)] hover:!no-underline">
            Termos de uso
          </a>
          <a href="/politica-de-privacidade" className="text-xs text-[var(--color-cinza-300)] !no-underline transition-colors hover:text-[var(--color-cinza-300)] hover:!no-underline">
            Privacidade
          </a>
        </div>
      </div>
    </footer>
  )
}

/* ─────────────────── DEPOIMENTOS DATA ─────────────────── */

const testimonials = [
  {
    name: 'Felipe Ramalho',
    role: 'Aluno da Formação',
    text: 'Eu sempre gostei de cachorro, mas nunca imaginei que pudesse viver disso. Não tinha conhecimento nenhum do lado profissional. Conheci o Brenno, meti as caras e comecei a fazer o curso. Menos de um mês, já estava com 10, 15 clientes. E eu nem terminei o curso ainda!',
  },
]

/* ─────────────────── MAIN PAGE ─────────────────── */

export default function LandingProvaSocial() {
  useScrollReveal()

  useEffect(() => {
    document.title = 'Resultados dos Alunos | Classe A Pets'
    trackViewContent('Prova Social Adestrador', 'retargeting')
  }, [])

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      <ProvaSocialHeader />

      {/* ── HERO + VIDEO ── */}
      <section className="relative overflow-hidden pt-24 pb-8 sm:pt-32 sm:pb-12">
        <FallingPattern
          color="rgba(46, 222, 240, 0.4)"
          backgroundColor="#111827"
          duration={140}
          blurIntensity="0.4em"
          density={1.4}
          className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_85%)]"
        />

        <div className="relative z-10 mx-auto max-w-5xl px-5">
          {/* Badge */}
          <div className="mb-6 flex justify-center" data-reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-cyan)]/20 bg-[var(--color-cyan)]/5 px-4 py-1.5 text-xs font-semibold tracking-wider text-[var(--color-cyan)] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)] animate-pulse" />
              Prova social
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-center text-3xl font-bold leading-[1.1] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
            data-reveal
          >
            <span className="text-white">Veja os resultados de quem</span>
            <br />
            <span className="inline-block bg-gradient-to-r from-[var(--color-cyan)] to-[#2edef0] bg-clip-text text-transparent">
              já passou pela formação
            </span>
          </h1>

          <p
            className="mx-auto mt-4 max-w-xl text-center text-base leading-relaxed text-[var(--color-cinza-200)] sm:mt-5 sm:text-lg"
            data-reveal
          >
            Assista ao depoimento de quem já se formou e está vivendo da profissão
            de adestrador.
          </p>

          {/* Video */}
          <div className="mt-8 sm:mt-12" data-reveal>
            <VideoPlayer src="/videos/prova-social-legendado.mp4" />
          </div>

          {/* CTA abaixo do vídeo */}
          <div className="mt-8 flex justify-center" data-reveal>
            <a
              href="/curso-adestramento-classeapets-presencial"
              className="btn-primary group inline-flex items-center gap-3 !rounded-full !px-8 !py-4 !text-sm !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline sm:!text-base"
            >
              Conhecer a Formação
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ── CASO DE SUCESSO ── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <p
            className="mb-3 text-center text-sm font-semibold tracking-widest text-[var(--color-cyan)] uppercase"
            data-reveal
          >
            Caso de sucesso
          </p>
          <h2
            className="mb-4 text-center text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl"
            data-reveal
          >
            O aluno que faturou antes de terminar o curso
          </h2>
          <p
            className="mx-auto mb-8 max-w-xl text-center text-base leading-relaxed text-[var(--color-cinza-200)] sm:mb-12 sm:text-lg"
            data-reveal
          >
            Veja como um aluno da formação começou a atender e gerar resultados
            ainda durante o curso.
          </p>

          <div data-reveal>
            <VideoPlayer src="/videos/aluno-faturou-antes-terminar.mp4" />
          </div>

          <div className="mt-8 flex justify-center" data-reveal>
            <a
              href="/curso-adestramento-classeapets-presencial"
              className="btn-primary group inline-flex items-center gap-3 !rounded-full !px-8 !py-4 !text-sm !font-bold !tracking-wider !uppercase !no-underline hover:!no-underline sm:!text-base"
            >
              Quero começar minha formação
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </section>

      {/* ── DEPOIMENTOS ── */}
      <section className="relative py-16 sm:py-24">
        <div className="mx-auto max-w-5xl px-5">
          <p
            className="mb-3 text-center text-sm font-semibold tracking-widest text-[var(--color-cyan)] uppercase"
            data-reveal
          >
            Depoimentos
          </p>
          <h2
            className="mb-10 text-center text-2xl font-bold tracking-tight text-white sm:mb-14 sm:text-3xl md:text-4xl"
            data-reveal
          >
            O que nossos alunos dizem
          </h2>

          <div
            className="mx-auto max-w-lg"
            data-reveal
          >
            {testimonials.map((t, i) => (
              <TestimonialCard key={i} {...t} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <CtaSection />

      {/* ── FOOTER ── */}
      <SimpleFooter />
    </div>
  )
}
