import dynamic from 'next/dynamic';
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/react';
import React from 'react';

// Importaciones de componentes
const DefaultLayout = dynamic(() => import('@/layouts/default')); // Importar el layout
const Slider = dynamic(() => import('../components/slider'));
const Pregunta = dynamic(() => import('../components/preguntas'));
const AnimatedBeamDemo = dynamic(() => import('../components/AnimatedBeamDemo'));
const Aliados = dynamic(() => import('../components/Aliados'));
const Numeros = dynamic(() => import('../components/numeros'));
const ServicioReserva = dynamic(() => import('@/components/ServicioReserva'));
const Explore = dynamic(() => import('@/components/Explore'));
const Service = dynamic(() => import('../components/service'));
const TextRevealDemo = dynamic(() => import('@/components/ui/TextRevealDem'));
const Modalreserva = dynamic(() => import('@/components/Modalreserva'));
const Servicios = dynamic(() => import('../components/servicios'));


export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="relative flex flex-col items-center justify-center lg:mt-8  gap-0 py-0 md:py-0 bg-transparent rounded-lg ">
        <div className="relative z-10 w-full max-w-screen-xl mx-auto text-center flex flex-col items-center justify-center h-[100vh]" style={{
          backgroundImage: 'url("/malla.svg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
          <div className="p-6 lg:p-20 flex flex-col justify-end items-center relative overflow-hidden h-auto text-foreground box-border outline-none">
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
        </div>
        <TextRevealDemo />
        <Service />
        <Servicios />
        <Slider />
        <Explore />
        <ServicioReserva />
        <div className="mt-10 pt-10 pb-28 bg-gradient-to-r from-transparent via-transparent to-transparent rounded-lg shadow-md border border-gray-300 border-opacity-10 bg-white/10 backdrop-blur-lg">
          <div className="absolute inset-0 border border-warning border-opacity-10 rounded-lg pointer-events-none"></div>
          <Pregunta />
        </div>
        <AnimatedBeamDemo />
        <Aliados />
        <Numeros />
      </section>
    </DefaultLayout>
  );
}
