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
import Aliados from '../components/Aliados'

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center mt-8 gap-0 py-0 md:py-0">
        <div
          className="w-full max-w-screen-xl mx-auto text-center flex flex-col items-center justify-center mt-12 md:p-2"
          style={{
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '15px',
            position: 'relative',
          }}
        >
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
        {/* Contenedor para Pregunta con fondo */}
        <div className="mt-10 pt-10 pb-28 sm-pt2 md:pt-20 md:pb-20 lg:pt-20 bg-gradient-to-r from-transparent via-transparent to-transparent rounded-lg shadow-md border border-gray-300 border-opacity-10 bg-white/10 backdrop-blur-lg">
          <div className="absolute inset-0 border border-yellow-400 border-opacity-10 rounded-lg pointer-events-none"></div>
          <Pregunta />
        </div>
        <Galeria />
        <AnimatedBeamDemo />
        <Aliados />
      </section>
    </DefaultLayout>
  );
}
