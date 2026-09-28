import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Servicios', href: '/servicios' },
  { label: 'Trabajos', href: '/trabajos' },
  { label: 'Contacto', href: '/#contacto' },
];

function Header() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState('');
  const [overHero, setOverHero] = useState(true);
  const headerRef = useRef(null);
  const location = useLocation();
  const isHome = location.pathname === '/';
  const headerOverHero = isHome && overHero;

  useEffect(() => {
    if (!isHome) return undefined;
    const sections = NAV_LINKS.filter((link) => link.href.startsWith('/#')).map((link) => document.querySelector(link.href.slice(1))).filter(Boolean);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveId(`/#${entry.target.id}`);
      });
    }, { rootMargin: '-40% 0px -50% 0px' });

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return undefined;
    const hero = document.getElementById('inicio');
    if (!hero || !headerRef.current) return;

    let observer;

    const setupObserver = () => {
      if (observer) observer.disconnect();
      const headerHeight = headerRef.current.offsetHeight;
      observer = new IntersectionObserver(
        ([entry]) => setOverHero(entry.isIntersecting),
        { rootMargin: `-${headerHeight}px 0px 0px 0px`, threshold: 0 }
      );
      observer.observe(hero);
    };

    setupObserver();
    window.addEventListener('resize', setupObserver);
    return () => {
      observer?.disconnect();
      window.removeEventListener('resize', setupObserver);
    };
  }, [isHome]);

  return (
    <header
      ref={headerRef}
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        headerOverHero ? 'bg-transparent border-transparent' : 'bg-bg/90 backdrop-blur-sm border-b border-ink/10'
      }`}
    >
      <div className="w-full px-4 sm:px-6 md:px-24 h-20 md:h-24 flex items-center justify-between">
          <Link to="/" onClick={() => setActiveId('')} className="flex items-center gap-3">
          <div className="h-12 w-12 md:h-14 md:w-14 rounded-full overflow-hidden shrink-0">
            <img src="/logo-salzmann.png" alt="Salzmann Peluquería" className="h-full w-full object-cover" />
          </div>
          <span className={`font-display text-xl md:text-2xl hidden sm:block transition-colors duration-300 ${headerOverHero ? 'text-white' : 'text-ink'}`}>
            Salzmann<span className="text-rose">.</span>
          </span>
          </Link>

        <nav className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((link) => {
            const isActive = link.href.startsWith('/#') ? isHome && activeId === link.href : location.pathname === link.href;
            const underline = isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100';
            const linkColor = headerOverHero ? 'text-white' : 'text-lilac';
            return (
              <Link key={link.href} to={link.href} className={`relative font-medium after:content-[''] after:absolute after:left-0 after:-bottom-1.5 after:h-[2px] after:w-full after:bg-rose after:origin-left after:transition-transform after:duration-300 transition-colors duration-300 ${linkColor} ${underline}`}>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button className="md:hidden flex flex-col gap-1.5 w-7" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          <span className={`h-[2px] w-full transition-colors duration-300 ${headerOverHero ? 'bg-white' : 'bg-ink'}`} />
          <span className={`h-[2px] w-full transition-colors duration-300 ${headerOverHero ? 'bg-white' : 'bg-ink'}`} />
        </button>
      </div>

      {open && (
        <nav className="md:hidden flex flex-col gap-1 px-6 pb-6 bg-bg/95 backdrop-blur-sm">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setOpen(false)} className="py-3 text-lilac font-medium border-t border-ink/10">
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;
