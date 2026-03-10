import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { assetUrl } from '../utils/assetUrl'

function PoliticaDePrivacidade() {
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
          Política de Privacidade
        </h1>
        <p className="mb-8 text-sm text-[var(--color-cinza-escuro)]">
          Última atualização: 08 de março de 2026
        </p>

        <div className="space-y-6 leading-relaxed text-[var(--color-cinza-escuro)]">
          <p>
            A <strong>Classe A Pets</strong> valoriza a privacidade dos seus usuários. Esta Política de Privacidade
            explica quais dados pessoais coletamos, como os utilizamos, armazenamos e protegemos, em conformidade
            com a <strong>Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018)</strong> e as diretrizes da
            plataforma Meta (Facebook e Instagram).
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">1. Dados que Coletamos</h2>
          <p>Podemos coletar os seguintes dados pessoais:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li><strong>Dados fornecidos pelo usuário:</strong> nome, e-mail, telefone/WhatsApp e mensagens enviadas através de formulários de contato ou WhatsApp;</li>
            <li><strong>Dados de navegação:</strong> endereço IP, tipo de navegador, sistema operacional, páginas visitadas, tempo de permanência e origem do tráfego;</li>
            <li><strong>Dados de cookies e tecnologias semelhantes:</strong> cookies de sessão, cookies analíticos (Google Analytics) e pixels de rastreamento (Meta Pixel/Facebook Pixel).</li>
          </ul>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">2. Como Utilizamos os Dados</h2>
          <p>Os dados coletados são utilizados para as seguintes finalidades:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Responder a solicitações de contato e fornecer informações sobre nossos serviços;</li>
            <li>Personalizar a experiência do usuário no site;</li>
            <li>Mensurar o desempenho do site e de campanhas publicitárias (incluindo anúncios no Facebook e Instagram);</li>
            <li>Enviar comunicações de marketing, quando houver consentimento prévio do usuário;</li>
            <li>Cumprir obrigações legais e regulatórias.</li>
          </ul>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">3. Meta Pixel (Facebook Pixel)</h2>
          <p>
            Utilizamos o <strong>Meta Pixel</strong> (anteriormente chamado Facebook Pixel) para:
          </p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Medir a eficácia dos nossos anúncios no Facebook e Instagram;</li>
            <li>Criar públicos personalizados e semelhantes para campanhas publicitárias;</li>
            <li>Rastrear conversões e eventos no site (como visualizações de página, cliques em botões de contato);</li>
            <li>Otimizar a entrega dos anúncios para pessoas com maior probabilidade de interesse nos nossos serviços.</li>
          </ul>
          <p>
            Os dados coletados pelo Meta Pixel são processados pela <strong>Meta Platforms, Inc.</strong> de acordo
            com a{' '}
            <a
              href="https://www.facebook.com/privacy/policy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-turquesa)] underline"
            >
              Política de Privacidade da Meta
            </a>
            . O usuário pode gerenciar suas preferências de anúncios diretamente nas{' '}
            <a
              href="https://www.facebook.com/adpreferences"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--color-turquesa)] underline"
            >
              Configurações de Anúncios do Facebook
            </a>
            .
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">4. Cookies</h2>
          <p>Utilizamos os seguintes tipos de cookies:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li><strong>Cookies essenciais:</strong> necessários para o funcionamento básico do site;</li>
            <li><strong>Cookies analíticos:</strong> utilizados para entender como os visitantes interagem com o site (ex.: Google Analytics);</li>
            <li><strong>Cookies de marketing:</strong> utilizados para exibir anúncios relevantes (ex.: Meta Pixel).</li>
          </ul>
          <p>
            O usuário pode desativar cookies a qualquer momento através das configurações do seu navegador.
            A desativação de alguns cookies pode afetar a funcionalidade do site.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">5. Compartilhamento de Dados</h2>
          <p>Os dados pessoais poderão ser compartilhados com:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li><strong>Meta Platforms, Inc.:</strong> para fins de mensuração e otimização de anúncios;</li>
            <li><strong>Google LLC:</strong> para análise de tráfego do site (Google Analytics);</li>
            <li><strong>Autoridades competentes:</strong> quando exigido por lei ou ordem judicial.</li>
          </ul>
          <p>
            Não vendemos, alugamos ou comercializamos dados pessoais dos nossos usuários com terceiros para
            finalidades distintas das descritas nesta política.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">6. Armazenamento e Segurança</h2>
          <p>
            Os dados pessoais são armazenados em servidores seguros e protegidos por medidas técnicas e
            organizacionais adequadas contra acesso não autorizado, perda ou destruição. Os dados são retidos
            pelo período necessário para cumprir as finalidades descritas nesta política ou conforme exigido
            por lei.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">7. Direitos do Titular (LGPD)</h2>
          <p>Em conformidade com a LGPD, o usuário tem direito a:</p>
          <ul className="ml-6 list-disc space-y-1">
            <li>Confirmar a existência de tratamento de dados pessoais;</li>
            <li>Acessar seus dados pessoais;</li>
            <li>Corrigir dados incompletos, inexatos ou desatualizados;</li>
            <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários;</li>
            <li>Solicitar a portabilidade dos dados;</li>
            <li>Revogar o consentimento a qualquer momento;</li>
            <li>Obter informações sobre o compartilhamento de dados.</li>
          </ul>
          <p>
            Para exercer qualquer desses direitos, entre em contato pelo e-mail:{' '}
            <a
              href="mailto:classeapets@gmail.com"
              className="text-[var(--color-turquesa)] underline"
            >
              classeapets@gmail.com
            </a>
            .
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">8. Menores de Idade</h2>
          <p>
            Este site não é direcionado a menores de 18 anos. Não coletamos intencionalmente dados pessoais de
            menores. Se tomarmos conhecimento de que coletamos dados de um menor sem o consentimento dos
            responsáveis legais, tomaremos medidas para excluir essas informações.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">9. Alterações nesta Política</h2>
          <p>
            Esta Política de Privacidade pode ser atualizada periodicamente. Quaisquer alterações serão publicadas
            nesta página com a data de atualização revisada. Recomendamos que o usuário revise esta política
            regularmente.
          </p>

          <h2 className="!mt-10 text-xl font-bold text-[var(--color-preto)]">10. Contato</h2>
          <p>
            Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento dos seus dados pessoais,
            entre em contato conosco:
          </p>
          <ul className="ml-6 list-disc space-y-1">
            <li><strong>Empresa:</strong> Classe A Pets</li>
            <li><strong>E-mail:</strong>{' '}
              <a href="mailto:classeapets@gmail.com" className="text-[var(--color-turquesa)] underline">
                classeapets@gmail.com
              </a>
            </li>
            <li><strong>WhatsApp:</strong> (11) 93406-6866</li>
            <li><strong>Endereço:</strong> ABC Paulista e São Paulo Capital</li>
          </ul>
        </div>

        <div className="mt-12 border-t border-[var(--color-cinza-claro)] pt-6">
          <p className="text-sm text-[var(--color-cinza-escuro)]">
            Consulte também os nossos{' '}
            <Link to="/termos-de-uso" className="text-[var(--color-turquesa)] underline">
              Termos de Uso
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

export default PoliticaDePrivacidade
