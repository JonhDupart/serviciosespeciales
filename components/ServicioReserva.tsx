import HeroVideoDialog from "@/components/ui/hero-video-dialog";
import Modalreserva from '@/components/Modalreserva';
import Image from "next/image";

const PromoBanner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between p-8 bg-white/0.5 rounded-lg shadow-lg w-full mt-5 mb-20">
      <div className="md:w-2/5 text-center md:text-left p-2">
        <h1 className="text-2xl font-bold lg:text-5xl">
          Como Funciona<br /> 
          <span className="text-warning text-2xl lg:text-4xl"> S E P S C</span>
        </h1>
        <p className="mt-2 text-base">
          Haz clic en el botón Agenda Visita, selecciona tu ubicación, el servicio deseado, elige el día y la hora, y listo. ¡Espera a tu profesional designado en tu domicilio.
        </p>
        <div className="mt-4 flex gap-4">
          <Modalreserva />
        </div>
      </div>

      <div className="md:w-3/5 relative">
        <HeroVideoDialog
          className="dark:hidden block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/watch?v=cX1zrClXbzk&t=23s"
          thumbnailSrc="/thumbail_comofunciona.jpg" // Asegúrate de que esta ruta sea correcta
          thumbnailAlt="Hero Video"
        />
        <HeroVideoDialog
          className="hidden dark:block"
          animationStyle="from-center"
          videoSrc="https://www.youtube.com/watch?v=cX1zrClXbzk&t=23s"
          thumbnailSrc="/thumbail_comofunciona.jpg" // Cambia esto a la ruta correcta de tu imagen JPG
          thumbnailAlt="Hero Video"
        />
      </div>
    </section>
  );
};

export default PromoBanner;
