import { useState } from 'react'
import {
  AlertTriangle,
  Heart,
  GraduationCap,
  Briefcase,
  Stethoscope,
  CheckCircle2,
  Clock,
  Calendar,
  ChevronDown,
} from 'lucide-react'
import LandingHeader from '../components/LandingHeader'

function HeroSection() {
  return (
    <section id="hero" className="relative bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-br from-gray-100/80 to-gray-50/80" aria-hidden />
      <div className="relative max-w-4xl mx-auto px-6 py-20 md:py-32 text-center">
        <span className="inline-block bg-red-100 text-red-600 text-sm font-semibold px-3 py-1 rounded-full mb-6">
          Turma Presencial em São Paulo
        </span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
          Transforme sua paixão por cães em uma carreira altamente lucrativa.
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
          Aprenda do zero o método validado para educar cães, conquistar clientes e faturar no
          mercado pet — mesmo que você não tenha experiência prévia.
        </p>
        <p className="flex items-center justify-center gap-2 text-red-500 font-semibold mb-10">
          <AlertTriangle className="w-5 h-5 shrink-0" aria-hidden />
          Apenas 15 vagas disponíveis para a próxima turma.
        </p>
        <a
          href="#checkout"
          className="inline-flex items-center justify-center w-full md:w-fit bg-[#00BCD4] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:-translate-y-1 transition-transform"
        >
          Quero garantir minha vaga agora
        </a>
      </div>
    </section>
  )
}

const publicoItems = [
  {
    icon: Heart,
    title: 'Apaixonados por cães',
    text: 'Querem transformar amor em profissão e viver do que amam.',
  },
  {
    icon: GraduationCap,
    title: 'Tutores que buscam excelência',
    text: 'Desejam educar o próprio cão com método e segurança.',
  },
  {
    icon: Briefcase,
    title: 'Transição de carreira',
    text: 'Buscam nova fonte de renda flexível e com propósito.',
  },
  {
    icon: Stethoscope,
    title: 'Profissionais da área pet',
    text: 'Veterinários, passeadores e monitores que querem se especializar.',
  },
]

function PublicoAlvo() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Esse curso foi desenhado para quem quer mais da vida...
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {publicoItems.map((item) => (
            <article
              key={item.title}
              className="bg-gray-50 rounded-2xl p-6 text-center flex flex-col items-center transition-all duration-300 hover:bg-linear-to-br hover:from-[#00BCD4]/5 hover:to-[#FF9800]/10 hover:shadow-md"
            >
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#FF9800]/10 flex items-center justify-center mb-4">
                <item.icon className="w-9 h-9 md:w-11 md:h-11 text-[#FF9800]" aria-hidden />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const entregaveisItems = [
  {
    title: 'Processo Completo de Adestramento',
    text: 'Metodologia validada e passo a passo para educar cães com segurança e resultados.',
  },
  {
    title: 'Modificação Comportamental',
    text: 'Técnicas testadas para corrigir comportamentos e fortalecer o vínculo tutor-cão.',
  },
  {
    title: 'Posicionamento e Vendas',
    text: 'Como captar clientes, precificar serviços e se destacar no mercado pet.',
  },
  {
    title: 'Plataforma e Prática',
    text: '+50 atividades em vídeo e estágio com cães reais para fixar o aprendizado.',
  },
]

function Entregaveis() {
  return (
    <section id="entregaveis" className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          O que você vai aprender?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {entregaveisItems.map((item) => (
            <div key={item.title} className="flex gap-4">
              <CheckCircle2 className="w-8 h-8 text-[#00BCD4] shrink-0 mt-0.5" aria-hidden />
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SobreBrenno() {
  // TODO: Substituir por imagem do Brenno do Google Drive (pasta "SEM FUNDO")
  const brennoImageSrc = '/images/brenno.jpg'

  return (
    <section className="bg-slate-900 text-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="order-2 md:order-1">
            <img
              src={brennoImageSrc}
              alt="Brenno Rodrigues - Adestrador de Cães"
              className="rounded-lg shadow-lg object-cover h-96 md:h-full w-full"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
              De Engenheiro a Adestrador: conheça o seu instrutor.
            </h2>
            <p className="text-slate-200 leading-relaxed text-lg">
              Sou o Brenno Rodrigues. Atuei como engenheiro, mas descobri meu propósito: transformar
              vidas através da conexão entre pessoas e cães. Com mais de 4 anos de experiência, já
              impactei +250 famílias. Minha missão é te ensinar o exato caminho que trilhei para me
              tornar um profissional bem remunerado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const formatos = [
  {
    title: 'Turma Noturna',
    schedule: 'Terças e Quintas',
    time: '19h às 22h',
    duration: '6 semanas',
    highlight: true,
  },
  {
    title: 'Turma de Sábado',
    schedule: 'Sábados completos',
    time: '08h às 14h',
    duration: '5 sábados',
    highlight: false,
  },
]

function Formato() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Escolha o formato que se adapta à sua rotina
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {formatos.map((f) => (
            <article
              key={f.title}
              className={`rounded-2xl p-8 border-2 ${f.highlight ? 'border-[#00BCD4]' : 'border-gray-200'}`}
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">{f.title}</h3>
              <div className="space-y-3 text-gray-600">
                <p className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-[#00BCD4]" aria-hidden />
                  {f.schedule}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#00BCD4]" aria-hidden />
                  {f.time} — {f.duration}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function Preco() {
  return (
    <section id="preco" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          O investimento para iniciar sua nova profissão.
        </h2>
        <div id="checkout" className="relative border-2 border-[#00BCD4] rounded-3xl p-10 bg-white scroll-mt-24">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
            MELHOR OPÇÃO
          </span>
          <div className="text-center space-y-6 pt-2">
            <p>
              <del className="text-gray-400 text-xl">R$ 2.500,00</del>
            </p>
            <p className="text-4xl font-extrabold text-gray-900">12x de R$ 203,52</p>
            <p className="text-gray-600">
              Ou <span className="text-green-600 font-bold">R$ 1.900 à vista no Pix</span> (com desconto)
            </p>
            <p className="text-sm text-gray-500">
              Opções flexíveis em 3x ou 6x sem juros no cartão.
            </p>
            <a
              href="#checkout"
              className="inline-flex items-center justify-center w-full md:w-fit bg-[#00BCD4] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:-translate-y-1 transition-transform mt-4"
            >
              Quero me tornar Adestrador Profissional
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqItems = [
  {
    pergunta: 'Preciso ter experiência?',
    resposta:
      'Não. O curso foi desenhado para ensinar do zero. Você não precisa de experiência prévia com adestramento.',
  },
  {
    pergunta: 'Consigo conciliar com trabalho?',
    resposta:
      'Sim. Oferecemos turmas noturnas (Terças e Quintas, 19h às 22h) e turmas aos Sábados (08h às 14h), para você encaixar na sua rotina.',
  },
  {
    pergunta: 'Quanto tempo para o 1º cliente?',
    resposta:
      'Muitos alunos conseguem conquistar o primeiro cliente logo após o término do curso, aplicando o que aprenderam em posicionamento e vendas.',
  },
  {
    pergunta: 'Tem certificado?',
    resposta:
      'Sim. O curso possui carga de aproximadamente 100 horas e inclui TCC (Trabalho de Conclusão de Curso) para certificação.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="bg-white py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-12">
          Ainda tem dúvidas?
        </h2>
        <div className="space-y-0 border border-gray-200 rounded-2xl overflow-hidden">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between gap-4 py-5 px-6 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {item.pergunta}
                <ChevronDown
                  className={`w-5 h-5 shrink-0 text-gray-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  aria-hidden
                />
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-64' : 'max-h-0'}`}
              >
                <p className="py-0 px-6 pb-5 text-gray-600">{item.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CtaFinal() {
  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <div className="max-w-2xl mx-auto px-6 text-center">
        <p className="text-gray-600 mb-4 text-lg">
          <strong className="text-gray-900">30 dias de garantia ou seu dinheiro de volta.</strong>
          <br />
          Assine com segurança e teste o método sem risco.
        </p>
        <a
          href="#checkout"
          className="inline-flex items-center justify-center w-full md:w-fit bg-[#00BCD4] text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:-translate-y-1 transition-transform"
        >
          Quero garantir minha vaga agora
        </a>
      </div>
    </section>
  )
}

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <LandingHeader />
      <HeroSection />
      <PublicoAlvo />
      <Entregaveis />
      <SobreBrenno />
      <Formato />
      <Preco />
      <FAQ />
      <CtaFinal />
    </div>
  )
}
