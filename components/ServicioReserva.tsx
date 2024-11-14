import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Modalreserva from '@/components/Modalreserva';
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between bg-white/0.5 rounded-lg shadow-lg w-full mt-20 mb-28">
      <div className="md:w-2/5 text-center md:text-left p-6">
        <h1 className="text-2xl font-bold lg:text-5xl">
          Como Funciona<br />
          <span className="text-warning text-2xl lg:text-4xl"> S E P S C</span>
        </h1>
        <p className="text-base text-justify lg:text-start">
          Haz clic en el botón Agendar visita, selecciona tu ubicación, la categoria del servicio, tipo de visita, elige el día y la hora listo. ¡Espera a tu profesional designado en tu domicilio.
        </p>
        <div className="mt-4 flex gap-4 w-full justify-center lg:justify-start">
          <Modalreserva />
        </div>
      </div>

      <div className="md:w-3/5 relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="top-in-bottom-out"
          videoSrc="/videos/comofuncionaf.mp4" // Ruta del video local
          thumbnailSrc="/thumbail_comofunciona.jpg" // Asegúrate de que esta ruta sea correcta
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="top-in-bottom-out"
          videoSrc="/videos/capitulo1navegantesonoro.mp4" // Ruta del video local
          thumbnailSrc="/thumbail_comofunciona.jpg" // Cambia esto a la ruta correcta de tu imagen JPG
          thumbnailAlt="Hero Video"
        />
      </div>
    </section>
  );
};

export default PromoBanner;
