import { assetUrl } from '../utils/assetUrl'

function Footer() {
  const quickLinks = [
    { href: '#hero', label: 'Inicio' },
    { href: '#servicos', label: 'Servicos' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#cursos', label: 'Cursos' },
  ]

  const courseLinks = [
    { href: '#servicos', label: 'Adestramento para Tutores' },
    { href: '#servicos', label: 'Formacao Passeador de Caes' },
    { href: '#servicos', label: 'Formacao Adestrador Profissional' },
    { href: '#servicos', label: 'Cursos 100% Digitais' },
  ]

  return (
    <footer id="site-footer" className="border-t border-[var(--color-cream)]/5 bg-[var(--color-midnight)]">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <a href="#hero" className="mb-6 inline-flex items-center !no-underline hover:opacity-90 hover:!no-underline">
            <img
              src={assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')}
              srcSet={`${assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} 320w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-480w.webp')} 480w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-640w.webp')} 640w`}
              sizes="100px"
              alt="Classe A Pets"
              className="w-[100px] object-contain"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="mb-6 max-w-[280px] text-[0.9rem] leading-relaxed text-[var(--color-cream)]/40">
            Adestramento de caes com metodo positivo. Transformando a relacao entre caes e tutores
            no ABC Paulista e Sao Paulo.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {[
              {
                label: 'Facebook',
                path: 'M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V11H8v3h2.2v8h3.3Z',
              },
              {
                label: 'Instagram',
                path: 'M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm8.3 1.9H7.9A3.9 3.9 0 0 0 4 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.2a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9Zm.9 1.4a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10.1A5 5 0 0 1 12 7Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z',
              },
              {
                label: 'TikTok',
                path: 'M15.7 2c.2 1.2.9 2.4 1.9 3.2 1 .8 2.2 1.2 3.4 1.3v3.2c-1.4 0-2.8-.3-4-.9v6.5A6.3 6.3 0 1 1 10.7 9v3.4a3 3 0 1 0 2.8 3V2h2.2Z',
              },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                aria-label={`${social.label} Classe A Pets`}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--color-cream)]/8 text-[var(--color-cream)]/40 transition-all duration-300 hover:border-[var(--color-honey)]/30 hover:text-[var(--color-honey)]"
              >
                <svg viewBox="0 0 24 24" className="h-4.5 w-4.5 fill-current" aria-hidden="true">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[var(--color-cream)]">
            Links Rapidos
          </h4>
          <ul className="space-y-3">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-[0.9rem] text-[var(--color-cream)]/40 transition-colors duration-300 hover:text-[var(--color-honey)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[var(--color-cream)]">
            Nossos Cursos
          </h4>
          <ul className="space-y-3">
            {courseLinks.map((course) => (
              <li key={course.label}>
                <a
                  href={course.href}
                  className="text-[0.9rem] text-[var(--color-cream)]/40 transition-colors duration-300 hover:text-[var(--color-honey)]"
                >
                  {course.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="mb-5 text-sm font-bold uppercase tracking-wider text-[var(--color-cream)]">
            Contato
          </h4>

          <div className="space-y-4">
            {[
              { label: 'Endereco', value: 'ABC Paulista e Sao Paulo Capital' },
              { label: 'WhatsApp', value: '(11) 9XXXX-XXXX' },
              { label: 'Email', value: 'contato@classeapets.com.br' },
              { label: 'Horario', value: 'Segunda a Sabado, 8h as 18h' },
            ].map((info) => (
              <div key={info.label}>
                <span className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-honey)]/70">
                  {info.label}
                </span>
                <span className="text-[0.9rem] text-[var(--color-cream)]/60">{info.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[var(--color-cream)]/5">
        <p className="mx-auto max-w-[1200px] px-5 py-5 text-center text-xs text-[var(--color-cream)]/25 sm:px-8">
          &copy; 2026 Classe A Pets — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
