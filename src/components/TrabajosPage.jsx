import { useEffect, useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { waLink } from '../config';

// Cada clienta puede tener varias fotos de "antes" y/o "después" (distintos ángulos).
// Confirmado por vos:
// - Clienta 1 (blusón floral): antes = 01, después = 02/03/04
// - Clienta 2: antes = 05/06, después = 07/08
const FEATURED_PAIRS = [
  {
    before: ['/trabajos/trabajo-01.jpg'],
    after: ['/trabajos/trabajo-02.jpg', '/trabajos/trabajo-03.jpg', '/trabajos/trabajo-04.jpg'],
  },
  {
    before: ['/trabajos/trabajo-05.jpg', '/trabajos/trabajo-06.jpg'],
    after: ['/trabajos/trabajo-07.jpg', '/trabajos/trabajo-08.jpg'],
  },
  {
    // TODO: asumí .jpg para trabajo-14 ya que no la vi todavía — si la guardaste con otra
    // extensión (.png, .jpeg), cambiala acá para que coincida con el archivo real.
    before: ['/trabajos/trabajo-14.png'],
    after: ['/trabajos/trabajo-11.png', '/trabajos/trabajo-13.png'],
  },
];

// TODO: los captions son un placeholder — cambialos por el nombre real de la técnica,
// o dejalos vacíos ('') si preferís que la foto no tenga texto encima.
// trabajo-10 y 12 no las vi todavía, así que van sin caption hasta que me digas qué son.
const WORKS = [
  { image: '/trabajos/trabajo-09.jpg', caption: 'Flequillo con reflejos' },
  { image: '/trabajos/trabajo-10.jpg', caption: '' },
  { image: '/trabajos/trabajo-12.png', caption: '' },
];

function PhotoSlide({ images, label }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return undefined;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 2800);
    return () => clearInterval(id);
  }, [images.length]);

  return (
    <figure className="relative aspect-[3/4] rounded-3xl overflow-hidden bg-lilac/10">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${label} del servicio${images.length > 1 ? ', otro ángulo' : ''}`}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      <span className="absolute top-4 left-4 z-10 bg-ink/80 text-white text-xs font-medium tracking-wide px-3 py-1.5 rounded-full">
        {label}
      </span>

      {images.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'w-5 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      )}
    </figure>
  );
}

function TrabajosPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ink pt-16 md:pt-24">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_80%_20%,#d98ca0,transparent_32%),radial-gradient(circle_at_15%_85%,#8a6bae,transparent_28%)]" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
            <ArrowLeft size={17} /> Volver al inicio
          </Link>
          <p className="mt-12 text-sm font-semibold uppercase tracking-[0.18em] text-rose">Trabajos</p>
          <h1 className="mt-4 max-w-3xl text-5xl sm:text-6xl md:text-7xl leading-[1.05] text-white font-medium">
            Resultados que <br />
            <span className="italic text-lilac-light">hablan solos.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg sm:text-xl leading-relaxed text-white/75">
            Una selección de transformaciones reales, hechas acá en el salón.
          </p>
        </div>
      </section>

      {/* Pares destacados: antes / después, cada uno con sus propios ángulos rotando */}
      <section className="max-w-5xl mx-auto px-6 md:px-10 pt-16 md:pt-24">
        <p className="text-sm font-semibold uppercase tracking-widest text-rose mb-3">Antes y después</p>
        <h2 className="text-3xl sm:text-4xl text-ink font-medium mb-10">
          Transformaciones <span className="italic text-lilac">reales</span>
        </h2>

        <div className="grid gap-10">
          {FEATURED_PAIRS.map((pair, index) => (
            <div key={index} className="grid sm:grid-cols-2 gap-4">
              <PhotoSlide images={pair.before} label="Antes" />
              <PhotoSlide images={pair.after} label="Después" />
            </div>
          ))}
        </div>
      </section>

      {/* Galería general */}
      <section className="max-w-6xl mx-auto px-6 md:px-10 py-16 md:py-24">
        <div className="columns-2 sm:columns-3 gap-4 [column-fill:_balance]">
          {WORKS.map(({ image, caption }, index) => (
            <div
              key={image}
              className="group relative mb-4 break-inside-avoid overflow-hidden rounded-2xl bg-lilac/10"
            >
              <img
                src={image}
                alt={caption || 'Trabajo realizado en Salzmann Peluquería'}
                loading={index < 2 ? 'eager' : 'lazy'}
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />

              {caption && (
                <div className="absolute inset-0 flex items-end bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="translate-y-2 p-4 text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                    {caption}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-lg text-muted mb-5">¿Te gustó lo que viste? Contanos qué tenés pensado para tu pelo.</p>
          <a
            href={waLink('Hola! Vi los trabajos en la web y quiero consultar disponibilidad.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-lilac text-white px-6 py-3 rounded-full font-semibold hover:bg-lilac-light hover:shadow-lg hover:shadow-lilac/25 transition-all focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}

export default TrabajosPage;