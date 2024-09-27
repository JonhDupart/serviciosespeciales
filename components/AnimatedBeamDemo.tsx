// Importaciones de módulos externos
import { cn } from "@/lib/utils";
import Marquee from "@/components/magicui/marquee";

// Importaciones de módulos internos
import Testimonios from '../components/Testimonios';
import ReviewCard from "@/components/ReviewCard"; // Asegúrate de que esta ruta sea correcta

const reviews = [
  {
    name: "Excelente servicio",
    username: "Marta R., Zipaquirá",
    body: "Contraté sus servicios para remodelar mi cocina y quedé encantada con el resultado.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Respuesta rápida",
    username: "Carlos G., Chía",
    body: "Tuve una emergencia con una fuga en mi casa un fin de semana, resolvieron el problema rápidamente.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Gran atención al detalle",
    username: "Luis M., Cajicá",
    body: "Realicé varios trabajos de mantenimiento en mi casa y el resultado superó mis expectativas.",
    img: "https://avatar.vercel.sh/john",
  },
  {
    name: "Soluciones integrales para el hogar",
    username: "Ana P., Tocancipá",
    body: "Solicité ayuda para varios arreglos en mi apartamento y fue genial poder coordinar todo en una sola visita.",
    img: "https://avatar.vercel.sh/jane",
  },
  {
    name: "Profesionales y confiables",
    username: "Andrea S., Cajicá",
    body: "Necesitaba pintar mi apartamento y me recomendaron esta empresa. Fueron muy puntuales y dejaron el espacio impecable.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Trabajo de calidad garantizada",
    username: "Juan P., Zipaquirá",
    body: "Hicieron una remodelación en mi baño y el resultado me gustó mucho.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Reparaciones de alta calidad",
    username: "Laura G., Zipaquirá",
    body: "La empresa me ayudó a solucionar varios problemas eléctricos en mi hogar.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Atención personalizada",
    username: "Lina A., Tabio",
    body: "Lo que más me gustó fue la forma en que escucharon mis necesidades. Me dieron opciones y personalizaron el servicio según lo que necesitaba.",
    img: "https://avatar.vercel.sh/jenny",
  },
  {
    name: "Soluciones rápidas y efectivas",
    username: "Diana F., Zipaquirá",
    body: "Me ayudaron con una reparación de emergencia y no solo solucionaron el problema rápidamente, sino que el precio fue justo.",
    img: "https://avatar.vercel.sh/james",
  },
  {
    name: "Atención al cliente excelente",
    username: "Jorge L., Zipaquirá",
    body: "Desde el primer contacto hasta la finalización del trabajo, el equipo fue increíble. Siempre estaban disponibles para responder mis preguntas. Excelente servicio.",
    img: "https://avatar.vercel.sh/jenny",
  },
];

export function MarqueeDemo() {
  return (
    <div className=" mt-2 relative flex h-[700px] w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-white/5 dark:bg-default-400/10 backdrop-blur-sm backdrop-saturate-[1] md:shadow-xl">

      <Testimonios />
      <Marquee pauseOnHover className="[--duration:260s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <Marquee reverse pauseOnHover className="[--duration:280s]">
        {reviews.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/8 bg-gradient-to-r from-transparent via-background to-transparent dark:from-transparent dark:via-gray-900 dark:to-transparent blur-sm"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/8 bg-gradient-to-l from-transparent via-background to-transparent dark:from-transparent dark:via-gray-900 dark:to-transparent blur-sm"></div>
    </div>
  );
}

export default MarqueeDemo;
