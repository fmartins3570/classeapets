import { Instagram as InstagramIcon } from 'lucide-react'
import { InteractiveHoverButton } from './ui/InteractiveHoverButton'
import { assetUrl } from '../utils/assetUrl'

const posts = [
  { href: 'https://www.instagram.com/classeapets/reel/DXshpJWgDBw/', img: 'post-1.jpg', alt: 'Treinando Golden Retriever que reage para outros cães' },
  { href: 'https://www.instagram.com/classeapets/reel/DW6P-GwhYzv/', img: 'post-2.jpg', alt: 'Dog Walker AMADOR vs. PROFISSIONAL' },
  { href: 'https://www.instagram.com/classeapets/reel/DW3rIp5BsfJ/', img: 'post-3.jpg', alt: '5 erros que DESTROEM um Dog Walker' },
  { href: 'https://www.instagram.com/classeapets/reel/DW1GXihBGGR/', img: 'post-4.jpg', alt: 'Quanto faturei como adestrador' },
  { href: 'https://www.instagram.com/classeapets/reel/DWygjxsALZP/', img: 'post-5.jpg', alt: 'O que ninguém te conta sobre ser Dog Walker' },
  { href: 'https://www.instagram.com/classeapets/reel/DWtoFg8gKnc/', img: 'post-6.jpg', alt: 'Quanto ganha um Dog Walker profissional em São Paulo' },
  { href: 'https://www.instagram.com/classeapets/reel/DWtWT68DqDC/', img: 'post-7.jpg', alt: 'Cão andando ao lado no passeio' },
  { href: 'https://www.instagram.com/classeapets/reel/DWKqTLwCZ0B/', img: 'post-8.jpg', alt: 'Dessensibilização Sistemática - técnica de adestramento' },
]

function Instagram() {
  return (
    <section id="instagram" className="bg-white px-4 py-14 sm:px-6 sm:py-20 md:py-24">
      <div className="mx-auto max-w-5xl">
        {/* Profile Card */}
        <a
          href="https://www.instagram.com/classeapets/"
          target="_blank"
          rel="noopener noreferrer"
          className="group mx-auto mb-10 block max-w-2xl !no-underline"
          data-reveal="up"
        >
          <div className="flex flex-col items-center gap-6 rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-all duration-300 group-hover:border-gray-200 group-hover:shadow-lg sm:flex-row sm:items-center sm:p-10">
            <div className="shrink-0 rounded-full bg-gradient-to-tr from-purple-500 via-pink-500 to-orange-400 p-[3px]">
              <img
                src={assetUrl('/images/instagram/profile-pic.jpg')}
                alt="Classe A Pets no Instagram"
                className="h-24 w-24 rounded-full border-[3px] border-white object-cover sm:h-28 sm:w-28"
                loading="lazy"
              />
            </div>
            <div className="text-center sm:text-left">
              <div className="mb-2 flex items-center justify-center gap-2 sm:justify-start">
                <span className="text-lg font-bold text-gray-900">@classeapets</span>
                <svg className="h-5 w-5 text-[#3897f0]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.7 14.5L6 12.2l1.4-1.4 2.9 2.9 6.3-6.3L18 8.8l-7.7 7.7z" />
                </svg>
              </div>
              <p className="mb-3 text-sm leading-relaxed text-gray-600">
                Adestramento de cães Online e a Domicílio · Curso profissionalizante para Adestrador
              </p>
              <div className="flex items-center justify-center gap-6 sm:justify-start">
                <div>
                  <span className="block text-lg font-extrabold text-gray-900">2.575</span>
                  <span className="text-xs text-gray-500">seguidores</span>
                </div>
                <div>
                  <span className="block text-lg font-extrabold text-gray-900">348</span>
                  <span className="text-xs text-gray-500">publicações</span>
                </div>
                <div>
                  <span className="block text-lg font-extrabold text-gray-900">271</span>
                  <span className="text-xs text-gray-500">seguindo</span>
                </div>
              </div>
            </div>
          </div>
        </a>

        {/* Posts Grid */}
        <h2 className="mb-4 text-center text-3xl font-extrabold text-gray-900 md:text-4xl" data-reveal="up">
          Conteúdo Diário no Instagram
        </h2>
        <p className="mx-auto mb-8 max-w-2xl text-center text-gray-600" data-reveal="up">
          Dicas de adestramento, bastidores dos treinos, transformações reais e conteúdo
          exclusivo sobre comportamento canino.
        </p>

        <div className="mb-10 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4" data-reveal-stagger data-reveal="scale">
          {posts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <img
                src={assetUrl(`/images/instagram/${post.img}`)}
                alt={post.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors duration-300 group-hover:bg-black/30">
                <InstagramIcon className="h-8 w-8 translate-y-2 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" />
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center" data-reveal="up">
          <InteractiveHoverButton
            href="https://www.instagram.com/classeapets/"
            target="_blank"
            rel="noopener noreferrer"
            text="Seguir @classeapets"
            className="w-full text-sm sm:w-auto"
          />
          <div className="flex items-center gap-6 text-sm text-gray-500">
            <a
              href="https://www.tiktok.com/@classeapets"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-gray-900"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M15.7 2c.2 1.2.9 2.4 1.9 3.2 1 .8 2.2 1.2 3.4 1.3v3.2c-1.4 0-2.8-.3-4-.9v6.5A6.3 6.3 0 1 1 10.7 9v3.4a3 3 0 1 0 2.8 3V2h2.2Z" />
              </svg>
              TikTok
            </a>
            <a
              href="https://www.youtube.com/@classeapets"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-gray-900"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
                <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.6 31.6 0 0 0 0 12a31.6 31.6 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.6 31.6 0 0 0 24 12a31.6 31.6 0 0 0-.5-5.81ZM9.75 15.02V8.98L15.5 12l-5.75 3.02Z" />
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instagram
