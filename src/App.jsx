import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import BeforeAfter from './components/BeforeAfter';
import Testimonial from './components/Testimonial';
import CtaFinal from './components/CtaFinal';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import OurJourney from './components/OurJourney';
import ServicesPage from './components/ServicesPage';
import TrabajosPage from './components/TrabajosPage';
import NotFoundPage from './components/NotFoundPage';

const PAGE_TITLES = {
  '/': 'Peluquería en San Carlos, Santa Fe | Salzmann Peluquería',
  '/servicios': 'Cortes, color y alisados en San Carlos | Salzmann Peluquería',
  '/trabajos': 'Trabajos de peluquería en San Carlos | Salzmann Peluquería',
};

function ScrollToRoute() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    document.title = PAGE_TITLES[pathname] ?? 'Página no encontrada | Salzmann Peluquería';

    const target = hash ? document.querySelector(hash) : null;
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

function HomePage() {
  return (
    <main>
      <Hero />
      <OurJourney />
      <BeforeAfter />
      <Testimonial />
      <CtaFinal />
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <ScrollToRoute />
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/trabajos" element={<TrabajosPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
        <WhatsAppButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
