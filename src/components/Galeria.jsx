function Galeria() {
  const filtros = ['Todos', 'Adestramento de Cães', 'Formação de Profissionais', 'Treinamentos Digitais']

  return (
    <section id="galeria" className="bg-white px-6 py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="section-title mb-2 text-3xl font-extrabold text-gray-900 md:text-4xl" data-reveal="up">
          Galeria de Fotos
        </h2>
        <p className="mb-8 text-center text-gray-500" data-reveal="up">Por dentro dos nossos treinos</p>
        <div className="mb-8 flex flex-wrap justify-center gap-2" data-reveal="up">
          {filtros.map((f, i) => (
            <button
              key={i}
              type="button"
              className={`min-h-10 cursor-pointer touch-manipulation whitespace-nowrap rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                i === 0
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4 sm:gap-4" data-reveal-stagger data-reveal="scale">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
            <div key={n} className="group aspect-square">
              <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-100 text-sm text-gray-400 transition-all duration-300 group-hover:bg-gray-200 group-hover:shadow-md">
                Foto {n}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Galeria
