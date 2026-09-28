import Reveal from './Reveal';
import { Link } from 'react-router-dom';
import { waLink } from '../config';

function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full overflow-hidden -mt-20 pt-20 md:-mt-24 md:pt-24 min-h-[100svh] md:min-h-[85vh] flex items-center"
    >
      {/* 1. Video VERTICAL para Celulares (se oculta de pantalla 'md' en adelante) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center md:hidden"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* 2. Video HORIZONTAL para Computadoras (se muestra de pantalla 'md' en adelante) */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover object-center hidden md:block"
      >
        <source src="/videos/hero-bg1.mp4" type="video/mp4" />
      </video>

      {/* Capa de degradado sobre el video para mejorar la lectura del texto */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink/75 md:bg-gradient-to-r md:from-ink/75 md:via-ink/35 md:to-transparent" />

      <div className="relative w-full px-6 md:px-24 pt-16 md:pt-24 pb-20">
        <Reveal>
          <div className="max-w-xl">
            <p className="font-display italic text-lg sm:text-xl text-rose mb-4">Peluquería Salzmann</p>

            <h1 className="text-4xl sm:text-5xl md:text-7xl leading-[1.1] md:leading-[1.02] text-white font-medium">
              Una historia de pasión,
              <br />
              <span className="italic text-lilac-light">dedicada a tu belleza.</span>
            </h1>

            {/*<p className="mt-6 md:mt-7 text-lg sm:text-xl text-white/85 max-w-md leading-relaxed">
              Todos los servicios 
            </p>*/}

            <div className="mt-8 md:mt-9 flex flex-wrap gap-4">
              <a href={waLink('Hola! Vi la web y quiero reservar un turno.')} target="_blank" rel="noopener noreferrer" className="bg-lilac text-white px-6 py-3 rounded-full font-semibold text-base hover:bg-lilac-light hover:scale-[1.03] hover:shadow-lg hover:shadow-lilac/30 transition-all duration-200">
                Reservá tu turno
              </a>
              <Link to="/servicios" className="border-2 border-white/40 text-white px-6 py-3 rounded-full font-semibold text-base hover:border-white/70 hover:scale-[1.03] hover:shadow-md transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                Ver servicios
              </Link>
            </div>

            <div className="mt-12 md:mt-16 flex flex-wrap gap-6 sm:gap-10 border-t border-white/20 pt-8">
              <div>
                <p className="font-display text-2xl sm:text-3xl text-lilac-light">Belgrano 627</p>
                <p className="text-base text-white/70 mt-1">San Carlos, Santa Fe</p>
              </div>
              <div>
                <p className="font-display text-2xl sm:text-3xl text-lilac-light">Mar a sáb</p>
                <p className="text-base text-white/70 mt-1">15 a 21hs</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Hero;