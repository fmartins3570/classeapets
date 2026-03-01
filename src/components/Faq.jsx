import { useState } from 'react'

const faqItems = [
  {
    pergunta: 'Os cursos são totalmente digitais?',
    resposta:
      'Sim! Os cursos digitais são 100% online, com acesso completo pela internet, de qualquer lugar do Brasil ou do mundo.',
  },
  {
    pergunta: 'Quais cursos estão disponíveis?',
    resposta:
      'Adestramento para Tutores, Formação de Adestrador Profissional, Formação de Passeador de Cães — todos disponíveis no formato presencial, híbrido ou 100% digital.',
  },
  {
    pergunta: 'Preciso de experiência prévia?',
    resposta:
      'Não. Os cursos foram desenvolvidos para todos os níveis, desde iniciantes até quem já trabalha na área e quer se aprofundar.',
  },
  {
    pergunta: 'Como são as aulas?',
    resposta:
      'As aulas presenciais são em turmas reduzidas para garantir atenção individualizada. O formato digital conta com videoaulas curtas, didáticas e materiais de apoio.',
  },
  {
    pergunta: 'Os cursos têm parte prática?',
    resposta:
      'Sim! No presencial, você estará em contato com os cães desde o primeiro dia. No digital, os exercícios são pensados para você aplicar com seu próprio cão ou nos seus atendimentos.',
  },
  {
    pergunta: 'Como acesso o curso depois da compra?',
    resposta:
      'Após a confirmação do pagamento, você recebe o acesso imediato à plataforma por e-mail.',
  },
]

function Faq() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="bg-white px-6 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-2xl">
        <h2 className="section-title mb-12 text-3xl font-extrabold text-gray-900 md:text-4xl" data-reveal="up">
          Ainda tem dúvidas?
        </h2>
        <div className="overflow-hidden rounded-2xl border border-gray-200" data-reveal="up">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-200 last:border-b-0">
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 rounded-none bg-transparent px-6 py-5 text-left font-semibold text-gray-900 transition-colors hover:bg-gray-50"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                id={`faq-question-${index}`}
              >
                {item.pergunta}
                <svg
                  className={`h-5 w-5 shrink-0 text-gray-500 transition-transform duration-200 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-200 ${openIndex === index ? 'max-h-64' : 'max-h-0'}`}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed text-gray-600">{item.resposta}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Faq
