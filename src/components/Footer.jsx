import { assetUrl } from '../utils/assetUrl'

function Footer() {
  const quickLinks = [
    { href: '#hero', label: 'Início' },
    { href: '#servicos', label: 'Serviços' },
    { href: '#sobre', label: 'Sobre' },
    { href: '#depoimentos', label: 'Depoimentos' },
    { href: '#faq', label: 'FAQ' },
    { href: '#', label: 'Política de Privacidade' },
  ]

  const courseLinks = [
    { href: '#servicos', label: 'Formação Adestrador Profissional' },
    { href: '#servicos', label: 'Cursos 100% Digitais' },
    { href: '#servicos', label: 'Adestramento para Tutores' },
    { href: '#servicos', label: 'Formação Passeador de Cães' },
    { href: '#mentoria', label: 'Mentoria para Profissionais' },
  ]

  const socialLinks = [
    { label: 'Facebook', href: 'https://www.facebook.com/classeapets/', path: 'M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V4.9c-.3 0-1.3-.1-2.5-.1-2.5 0-4.1 1.5-4.1 4.3V11H8v3h2.2v8h3.3Z' },
    { label: 'Instagram', href: 'https://www.instagram.com/classeapets/', path: 'M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2Zm8.3 1.9H7.9A3.9 3.9 0 0 0 4 7.8v8.4a3.9 3.9 0 0 0 3.9 3.9h8.2a3.9 3.9 0 0 0 3.9-3.9V7.8a3.9 3.9 0 0 0-3.9-3.9Zm.9 1.4a1.2 1.2 0 1 1 0 2.3 1.2 1.2 0 0 1 0-2.3ZM12 7a5 5 0 1 1 0 10.1A5 5 0 0 1 12 7Zm0 1.9a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Z' },
    { label: 'TikTok', href: 'https://www.tiktok.com/@classeapets', path: 'M15.7 2c.2 1.2.9 2.4 1.9 3.2 1 .8 2.2 1.2 3.4 1.3v3.2c-1.4 0-2.8-.3-4-.9v6.5A6.3 6.3 0 1 1 10.7 9v3.4a3 3 0 1 0 2.8 3V2h2.2Z' },
    { label: 'YouTube', href: 'https://www.youtube.com/@classeapets', path: 'M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z' },
  ]

  return (
    <footer id="site-footer" className="bg-slate-900 text-slate-400">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-12 sm:grid-cols-2 sm:gap-10 sm:px-6 sm:py-16 lg:grid-cols-4">
        <div>
          <a href="#hero" className="mb-5 inline-flex items-center no-underline hover:opacity-90 hover:no-underline">
            <img
              src={assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')}
              srcSet={`${assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')} 320w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-480w.webp')} 480w, ${assetUrl('/images/optimized/logo-classeapets-transparent-v2-640w.webp')} 640w`}
              sizes="120px"
              alt="Classe A Pets"
              className="w-20 object-contain sm:w-[120px]"
              loading="lazy"
              decoding="async"
            />
          </a>
          <p className="mb-6 max-w-[280px] text-sm leading-relaxed text-slate-400">
            Adestramento de cães com método moderno. Transformando a relação entre cães e tutores no
            ABC Paulista e São Paulo.
          </p>
          <div className="flex items-center gap-3">
            {socialLinks.map((icon) => (
              <a
                key={icon.label}
                href={icon.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${icon.label} Classe A Pets`}
                className="text-slate-500 transition-colors duration-200 hover:text-white"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                  <path d={icon.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Links Rápidos</h4>
          <ul className="space-y-2.5">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Nossos Cursos</h4>
          <ul className="space-y-2.5">
            {courseLinks.map((course) => (
              <li key={course.label}>
                <a
                  href={course.href}
                  className="text-sm text-slate-400 transition-colors duration-200 hover:text-white"
                >
                  {course.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contato</h4>
          <div className="space-y-3 text-sm break-words">
            <div>
              <p className="font-semibold text-slate-300">Endereço</p>
              <p>ABC Paulista e São Paulo Capital</p>
            </div>
            <div>
              <p className="font-semibold text-slate-300">WhatsApp</p>
              <p>(11) 93406-6866</p>
            </div>
            <div>
              <p className="font-semibold text-slate-300">Email</p>
              <p>classeapets@gmail.com</p>
            </div>
            <div>
              <p className="font-semibold text-slate-300">Atendimento</p>
              <p>Segunda a Sábado, 8h às 18h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <p className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-slate-500 sm:px-6">
          © 2026 Classe A Pets — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
