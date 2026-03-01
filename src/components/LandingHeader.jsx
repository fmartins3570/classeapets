/**
 * Header fixo (sticky) da Landing Page Classe A Pets.
 * Contém o logo e links de navegação por âncora para as seções principais.
 *
 * Logo: coloque o arquivo em public/images/logo.png ou importe de src/assets/logo.png
 */
// TODO: Se preferir import do assets: import logoClasseAPets from '../assets/logo.png'
// e use src={logoClasseAPets} no <img> abaixo
const logoUrl = '/images/logo.png'

const navLinks = [
  { href: '#entregaveis', label: 'O Curso' },
  { href: '#preco', label: 'Investimento' },
  { href: '#faq', label: 'FAQ' },
]

export default function LandingHeader() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm py-3 px-4 md:py-3 md:px-8">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#hero" className="flex items-center shrink-0" aria-label="Classe A Pets - Ir ao início">
          <img
            src={logoUrl}
            alt="Classe A Pets"
            className="h-8 md:h-12 w-auto object-contain"
          />
        </a>
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-700 font-semibold hover:text-[#00BCD4] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
