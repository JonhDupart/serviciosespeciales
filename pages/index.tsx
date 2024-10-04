// Importaciones de módulos externos
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/react';
import React from 'react';

// Importaciones de módulos internos
import ServicioReserva from '@/components/ServicioReserva'
import DefaultLayout from '@/layouts/default';
import Galeria from '../components/galeria';
import Pregunta from '../components/preguntas';
import Servicio from '../components/servicios';
import Service from '../components/service';
import Explore from '@/components/Explore';
import Slider from '../components/slider';
import AnimatedBeamDemo from '../components/AnimatedBeamDemo';
import Aliados from "@/components/Aliados"; // Ajusta la ruta según sea necesario
import Contacto from '@/components/Contacto'
import TextRevealDemo from '@/components/ui/TextRevealDem'; 
import TextContacto from '@/components/TextCoontacto';
import Numeros from '@/components/numeros'
import Modalreserva from '@/components/Modalreserva'




export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="relative flex flex-col items-center justify-center mt-8 gap-0 py-0 md:py-0 bg-transparent  rounded-lg ">

        <div className="absolute inset-0 overflow-hidden">
 

        </div>
        <div className="relative z-10 w-full max-w-screen-xl mx-auto text-center flex flex-col items-center justify-center h-[100vh] "
        style={{
          backgroundImage: 'url("/malla.svg")', // Asegúrate de que esta ruta sea correcta
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="p-6 lg:p-20 flex flex-col justify-end items-center relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-lg cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-sm backdrop-saturate-[1] ">
            <h1 className="w-full text-4xl leading-tight mb-2 font-bold gradient-text">
              Servicios Especiales
              <br />
              Para Su Casa
            </h1>
            <h4 className="w-full text-base lg:text-lg leading-relaxed">
              <p className="w-full md:w-3/5 mx-auto pb-2">
                Mantenimiento y reparación de alta calidad para sus espacios.
              </p>
            </h4>
            <div className="flex gap-3 items-center justify-center mt-4">
            <Modalreserva />
             <Link href="/servicios">
               <Button color="warning" variant="ghost">
                  Ver servicios
               </Button>
             </Link>
            </div>
          </div>
          {/* Componente de búsqueda */}
          <div className='w-full items-center'>
          </div>
        </div>
        <TextRevealDemo />
        <Service />
        <Servicio />
        <Slider />
        <Explore />
        <ServicioReserva />
        <div className="mt-10 pt-10 pb-28 sm-pt2 md:pt-20 md:pb-20 lg:pt-20 bg-gradient-to-r from-transparent via-transparent to-transparent rounded-lg shadow-md border border-gray-300 border-opacity-10 bg-white/10 backdrop-blur-lg">
          <div className="absolute inset-0 border border-warning border-opacity-10 rounded-lg pointer-events-none"></div>
          <Pregunta />
        </div>
        <AnimatedBeamDemo />
       <Aliados />
       <Numeros/>
      </section>
    </DefaultLayout>
  );
}
