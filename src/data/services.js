import {
  Droplets,
  Palette,
  Scissors,
  Wind,
  Sparkles,
  WandSparkles,
} from 'lucide-react';

export const SERVICES = [
  {
    id: 'peinados',
    icon: Wind,
    title: 'Peinados',
    description: 'Peinados para fiestas, casamientos y eventos especiales.',
    duration: 'Duración aprox. 1 h',
    image: '/peinados.jpg',
    fullDescription:
      'Creamos un peinado acorde a tu estilo y ocasión, buscando que se mantenga impecable durante todo el evento.',
    steps: [
      'Elección del estilo',
      'Preparación y protección del cabello',
      'Armado del peinado',
      'Fijación y terminación final',
    ],
  },
  {
    id: 'corte',
    icon: Scissors,
    title: 'Corte',
    description: 'Cortes personalizados según tu estilo, rostro y tipo de cabello.',
    duration: 'Duración aprox. 30 min',
    image: '/corte.jpg',
    fullDescription:
      'Un corte pensado para acompañar la forma de tu rostro, tu estilo y tu rutina diaria.',
    steps: [
      'Charla previa sobre el estilo que buscás',
      'Evaluación del cabello',
      'Corte personalizado',
      'Finalizado y recomendaciones de cuidado',
    ],
  },
  {
    id: 'tintura',
    icon: Palette,
    title: 'Tintura',
    description: 'Color de raíz a puntas cuidando la salud y el brillo del cabello.',
    duration: 'Duración aprox. 2 h',
    image: '/tintura.png',
    fullDescription:
      'Trabajamos el color buscando un resultado natural y uniforme, cuidando la fibra capilar durante todo el proceso.',
    steps: [
      'Diagnóstico del cabello y elección del tono',
      'Preparación y protección capilar',
      'Aplicación del color',
      'Lavado, hidratación y finalizado',
    ],
  },
  {
    id: 'reflejos',
    icon: Sparkles,
    title: 'Reflejos',
    description: 'Iluminación y reflejos para darle dimensión y luminosidad al cabello.',
    duration: 'Duración aprox. 3 h',
    image: '/reflejos.jpeg',
    fullDescription:
      'Creamos reflejos personalizados para aportar luz, movimiento y dimensión respetando tu tono natural.',
    steps: [
      'Diagnóstico y elección del tono',
      'Selección de las zonas a iluminar',
      'Aplicación técnica de reflejos',
      'Matización, hidratación y finalizado',
    ],
  },
  {
    id: 'tratamientos',
    icon: Droplets,
    title: 'Tratamientos hidratantes',
    description: 'Nutrición profunda para devolverle brillo y salud al pelo.',
    duration: 'Duración aprox. 1 h',
    image:
      'https://images.unsplash.com/photo-1527799820374-dcf8d9d4a388?auto=format&fit=crop&w=1400&q=85',
    fullDescription:
      'Nutrición profunda para devolverle brillo, suavidad y elasticidad a tu cabello.',
    steps: [
      'Diagnóstico del estado del cabello',
      'Aplicación del tratamiento indicado',
      'Masaje capilar para potenciar la absorción',
      'Sellado y finalizado',
    ],
  },
  {
    id: 'alisados',
    icon: WandSparkles,
    title: 'Alisados',
    description: 'Tratamientos de alisado para reducir el frizz y facilitar el peinado.',
    duration: 'Duración aprox. 3 a 5 h',
    image: '/alisado.jpg',
    fullDescription:
      'Tratamientos pensados para dejar el cabello más liso, manejable y con menos frizz, cuidando la fibra capilar.',
    steps: [
      'Diagnóstico capilar',
      'Limpieza profunda',
      'Aplicación del tratamiento',
      'Planchado técnico y sellado',
    ],
  },
  {
    id: 'botox',
    icon: Sparkles,
    title: 'Botox capilar',
    description: 'Tratamiento intensivo para recuperar suavidad, brillo y manejabilidad.',
    duration: 'Duración aprox. 2 h',
    image: '/botox.jpeg',
    fullDescription:
      'Tratamiento reparador que ayuda a mejorar la apariencia del cabello, reducir el frizz y devolverle suavidad y brillo.',
    steps: [
      'Diagnóstico del cabello',
      'Lavado y preparación',
      'Aplicación del tratamiento',
      'Sellado y finalizado',
    ],
  },
];