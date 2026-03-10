import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'

function TermosDeUso() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--color-preto)]">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-4 sm:px-6">
          <Link to="/" className="inline-flex items-center no-underline hover:opacity-90">
            <img
              src={assetUrl('/images/optimized/logo-classeapets-transparent-v2-320w.webp')}
              alt="Classe A Pets"
              className="w-[120px] object-contain"
              loading="lazy"
              decoding="async"
            />
          </Link>
          <Link
            to="/"
            className="rounded-lg bg-[var(--color-turquesa)] px-5 py-2.5 text-sm font-bold text-[var(--color-preto)] no-underline transition-opacity hover:opacity-90"
          >
            Voltar ao Site
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-[900px] px-4 py-12 sm:px-6 md:py-20">
        <h1 className="mb-2 text-3xl font-black text-[var(--color-preto)] md:text-4xl">
          Termos de Uso
        </h1>
        <p className="mb-8 text-sm text-[var(--color-cinza-escuro)]">
          Última atualização: 08 de março de 2026
        </p>

        <div className="space-y-6 leading-relaxed text-[var(--color-cinza-escuro)]">
          <p>
            Bem-vindo ao site da <strong>Classe A Pets</strong> (
            <a href="https://classeapets.com.br" className="text-[var(--color-turquesa)] underline">classeapets.com.br</a>
            ). Ao acessar e utilizar este site, você concorda com os termos e condições descritos abaixo.
            Caso não concorde, por favor, não utilize o site.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">1. Objeto</h2>
          <p>
            Este site tem como objetivo apresentar os serviços de adestramento de cães, cursos presenciais e
            digitais oferecidos pela Classe A Pets, bem como facilitar o contato entre o usuário e a empresa.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">2. Uso Permitido</h2>
          <p>O usuário compromete-se a utilizar o site apenas para fins lícitos e de acordo com estes Termos. É proibido:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Copiar, reproduzir ou distribuir qualquer conteúdo do site sem autorização prévia por escrito;</li>
            <li>Utilizar o site para transmitir material ilegal, ofensivo ou que viole direitos de terceiros;</li>
            <li>Tentar acessar áreas restritas do site ou sistemas da Classe A Pets de forma não autorizada;</li>
            <li>Utilizar robôs, scrapers ou outros meios automatizados para extrair dados do site.</li>
          </ul>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">3. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo do site — incluindo textos, imagens, logotipos, vídeos, layout e código-fonte — é de
            propriedade exclusiva da Classe A Pets ou de seus licenciantes e está protegido pela legislação brasileira
            de direitos autorais e propriedade intelectual (Lei nº 9.610/98).
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">4. Links Externos</h2>
          <p>
            O site pode conter links para páginas de terceiros (como redes sociais). A Classe A Pets não se
            responsabiliza pelo conteúdo, políticas de privacidade ou práticas desses sites externos.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">5. Isenção de Garantias</h2>
          <p>
            Os conteúdos do site são fornecidos "como estão". A Classe A Pets empenha-se em manter as informações
            atualizadas, mas não garante a ausência de erros, interrupções ou a disponibilidade ininterrupta do site.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">6. Limitação de Responsabilidade</h2>
          <p>
            A Classe A Pets não será responsável por danos diretos, indiretos, incidentais ou consequenciais
            decorrentes do uso ou da impossibilidade de uso do site.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">7. Modificações</h2>
          <p>
            Reservamo-nos o direito de alterar estes Termos de Uso a qualquer momento. As alterações entram em vigor
            imediatamente após a publicação no site. Recomendamos que o usuário revise esta página periodicamente.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">8. Legislação Aplicável</h2>
          <p>
            Estes Termos são regidos pela legislação da República Federativa do Brasil. Fica eleito o foro da Comarca
            de São Bernardo do Campo/SP para dirimir quaisquer controvérsias.
          </p>
        </div>

        <div className="mt-12 border-t border-[var(--color-cinza-claro)] pt-6">
          <p className="text-sm text-[var(--color-cinza-escuro)]">
            Consulte também a nossa{' '}
            <Link to="/politica-de-privacidade" className="text-[var(--color-turquesa)] underline">
              Política de Privacidade
            </Link>.
          </p>
        </div>
      </main>

      <footer className="border-t border-white/15 bg-[var(--color-preto)]">
        <p className="mx-auto max-w-[1200px] px-4 py-5 text-center text-sm text-[var(--color-cinza-medio)] sm:px-6">
          © 2026 Classe A Pets - Todos os direitos reservados.
        </p>
      </footer>
    </>
  )
}

export default TermosDeUso
