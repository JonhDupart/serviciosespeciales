// Importaciones de módulos externos
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/react';
import React from 'react';

// Importaciones de módulos internos
import DefaultLayout from '@/layouts/default';
import Galeria from '../components/galeria';
import Modal from '../components/modal';
import Pregunta from '../components/preguntas';
import Servicio from '../components/servicios';
import Service from '../components/service';
import Explore from '@/components/Explore';
import Slider from '../components/slider';
import AnimatedBeamDemo from '../components/AnimatedBeamDemo';
import Aliados from "@/components/Aliados"; // Ajusta la ruta según sea necesario
import Contacto from '@/components/Contacto'
import Dudas from '@/components/Dudas'
import TextRevealDemo from '@/components/ui/TextRevealDem'; 


export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="relative flex flex-col items-center justify-center mt-8 gap-0 py-0 md:py-0 bg-transparent p-2 rounded-lg ">

        <div className="absolute inset-0 overflow-hidden">
        <div className="bg-gray-300 rounded-full opacity-20 blur-3xl w-64 h-64 absolute top-1/1 left-80 transform -translate-x-1/2 -translate-y-1/2"></div>
        <div 
  className="rounded-full opacity-10 blur-3xl w-[800px] h-[800px] absolute top-[4700px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
  style={{
    background: 'linear-gradient(to bottom, rgba(255, 255, 0, 1) 0%, rgba(255, 255, 0, 0) 100%)', // Amarillo a transparente
  }}
></div>

        </div>
        <div className="relative z-10 w-full max-w-screen-xl mx-auto text-center flex flex-col items-center justify-center mt-12 md:p-2">
          <div className="flex flex-col justify-end items-center relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-lg cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-sm backdrop-saturate-[1] p-8">
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
              <Link
                isExternal
                className="bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg shadow-yellow-200/30 hover:shadow-xl transition-shadow duration-300 ease-in-out"
                href="https://api.whatsapp.com/send/?phone=573015360531&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s+sobre+sus+servicios.&type=phone_number&app_absent=0"
              >
                Contáctanos
              </Link>
              <Button color="warning" variant="ghost">
                Servicios
              </Button>
            </div>
          </div>
          {/* Componente de búsqueda */}
          <div className='w-full items-center'>
            <Modal />
          </div>
        </div>
     
        <Service />
        <Servicio />
        <Slider />
        <Explore />
        <div className="mt-10 pt-10 pb-28 sm-pt2 md:pt-20 md:pb-20 lg:pt-20 bg-gradient-to-r from-transparent via-transparent to-transparent rounded-lg shadow-md border border-gray-300 border-opacity-10 bg-white/10 backdrop-blur-lg">
          <div className="absolute inset-0 border border-yellow-400 border-opacity-10 rounded-lg pointer-events-none"></div>
          <Pregunta />
        </div>
        <TextRevealDemo />
        <Galeria />
        <AnimatedBeamDemo />
       <Aliados />
   
      <Contacto />
      </section>
    </DefaultLayout>
  );
}
