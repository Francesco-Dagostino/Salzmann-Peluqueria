import Reveal from './Reveal';

const STOPS = [
  {
    year: '2013',
    title: 'Donde todo empezó',
    description:
      'Me animé a dar un gran paso y decidí abrir mi propio espacio "Salzmann Peluquería", comenzando en un pequeño lugar dentro de mi casa. Allí transcurrieron unos años llenos de aprendizaje, trabajo y muchísimos momentos especiales.',
    image: '/recorrido/2do.png',
    image2: '/recorrido/3era.png',
    alt: 'Primer local de Salzmann Peluquería',
  },
  {
    year: '2018',
    title: 'Gran Cambio',
    description:
      'Llegó otro gran cambio: decidí trasladar la peluquería a un local más céntrico, dando un nuevo paso en este camino que tanto amo.',
    image: '/recorrido/local-2013.jpg',
    alt: 'Primer local de Salzmann Peluquería',
  },
  {
  year: '2025',
  title: 'Un nuevo espacio para seguir creciendo',
  description: `Llegó el momento de comenzar una nueva etapa, en el espacio donde hoy nos encontramos.

    Cada lugar fue parte de esta historia y cada etapa me permitió crecer un poquito más. ❤️

      Hoy miro hacia atrás y agradezco profundamente todo el camino recorrido, pero sobre todo, a cada persona que confió y sigue confiando en mí.`,
  image: '/recorrido/nuevo-local.jpg',
  alt: 'Nuevo local de Salzmann Peluquería',
}
];

function JourneyStop({ stop, index }) {
  const imagePosition = index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-3';
  const textPosition = index % 2 === 0 ? 'md:col-start-3' : 'md:col-start-1';

  return (
    <article className="relative pl-12 md:pl-0 md:grid md:grid-cols-[minmax(0,1fr)_7rem_minmax(0,1fr)] md:items-center">
      <span
        aria-hidden="true"
        className="absolute left-5 top-2 -translate-x-1/2 h-4 w-4 rounded-full border-[3px] border-bg bg-rose shadow-sm md:left-1/2 md:top-1/2 md:-translate-y-1/2"
      />

      <Reveal className={`${imagePosition} md:row-start-1`}>
        <div className="relative mx-auto max-w-md pb-8 pr-6">

          {/* Imagen principal */}
          <figure className="relative z-10 overflow-hidden rounded-3xl bg-lilac/10 shadow-xl shadow-ink/10">
            <img
              src={stop.image}
              alt={stop.alt}
              className="aspect-[4/5] w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </figure>

          {/* Segunda imagen */}
          {stop.image2 && (
            <figure className="absolute -bottom-2 -right-2 z-20 w-[48%] overflow-hidden rounded-2xl border-4 border-bg shadow-xl shadow-ink/15 rotate-3 transition-transform duration-500 hover:rotate-0 hover:scale-105 sm:-right-6">
              <img
                src={stop.image2}
                alt=""
                className="aspect-[4/5] w-full object-cover"
              />
            </figure>
          )}

        </div>
      </Reveal>

      <Reveal delay={120} className={`${textPosition} mt-7 md:row-start-1 md:mt-0`}>
        <div className="md:max-w-md md:mx-auto">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-rose">
            {stop.year}
          </p>
          <h3 className="mb-4 font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
            {stop.title}
          </h3>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {stop.description}
          </p>
        </div>
      </Reveal>
    </article>
  );
}

function OurJourney() {
  return (
    <section id="recorrido" className="bg-lilac/6">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <Reveal>
          <div className="mb-14 max-w-2xl md:mb-20">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-rose">
              Nuestra historia
            </p>
            <div className="mb-6 h-[2px] w-8 bg-rose" />
            <h2 className="mb-4 font-display text-4xl font-medium text-ink sm:text-5xl">
              Una historia que crece <span className="italic text-lilac">con vos</span>
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              Cada espacio fue parte de un mismo recorrido: acompañarte, cuidar tu pelo
              y hacer que cada visita sea un momento para vos.
            </p>
          </div>
        </Reveal>

        <div className="relative space-y-14 before:absolute before:bottom-12 before:left-5 before:top-12 before:w-px before:bg-rose/30 md:space-y-20 md:before:left-1/2">
          {STOPS.map((stop, index) => (
            <JourneyStop key={stop.title} stop={stop} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurJourney;