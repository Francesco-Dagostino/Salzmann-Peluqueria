import { ArrowLeft, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { waLink } from '../config';

function NotFoundPage() {
  return (
    <main>
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-bg px-6 py-20 md:min-h-[calc(100svh-6rem)] md:px-24">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
          <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none font-display text-[13rem] leading-none tracking-[-0.12em] text-lilac/[0.07] sm:text-[19rem] md:text-[29rem]">
            404
          </p>
          <div className="absolute -right-20 top-16 h-64 w-64 rounded-full border border-rose/25 md:-right-8 md:top-24 md:h-96 md:w-96" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-lilac/10 blur-3xl md:h-96 md:w-96" />
        </div>

        <div className="relative mx-auto w-full max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-rose">Error 404</p>
          <h1 className="mt-5 text-5xl leading-[1.05] text-ink sm:text-6xl md:text-7xl">
            Esta cita no está<br />
            <span className="italic text-lilac">en la agenda.</span>
          </h1>
          <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-muted">
            La página que buscás no existe o cambió de lugar. Volvé al inicio para seguir conociendo el salón.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/" className="inline-flex items-center gap-2 rounded-full bg-lilac px-6 py-3 font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-lilac-light hover:shadow-lg hover:shadow-lilac/25 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac">
              <ArrowLeft size={18} aria-hidden="true" />
              Volver al inicio
            </Link>
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-ink/15 px-6 py-3 font-semibold text-ink transition-colors duration-200 hover:border-lilac hover:text-lilac focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac">
              <MessageCircle size={18} aria-hidden="true" />
              Consultar por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default NotFoundPage;
