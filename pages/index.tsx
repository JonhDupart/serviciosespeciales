// Importaciones de módulos externos
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';
import React from 'react';

// Importaciones de módulos internos
import { title } from '@/components/primitives';
import ServiciosSearch from '@/components/servicios';
import Slider from '@/components/slider';

import DefaultLayout from '@/layouts/default';


import Galeria from '../components/galeria';
import Modal from '../components/modal';
import Pregunta from '../components/preguntas';
import { siteConfig } from '../config/site';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center mt-24 gap-0 py-0 md:py-0 ">
        <div
          className="w-full max-w-screen-xl mx-auto text-center flex flex-col items-center justify-center p-10 md:p-20"
          style={{
            backgroundImage: 'url("/portada-home.jpg")', // Verifica que la ruta sea correcta
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '15px',
            position: 'relative', // Asegura que el fondo se muestre correctamente
          }}
        >
          <div className="flex flex-col justify-end items-center relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-lg cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-sm backdrop-saturate-[1] p-8">
            <h2 className="text-0xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 m-0 p-0">
              Bienvenido a&nbsp;
            </h2>
            <h1
              className={`${title({ color: 'yellow' })}  w-full text-4xl lg:text-5xl leading-14 p-2`}
            >
              Servicios Especiales
              <br />
              para su Hogar&nbsp;
            </h1>
            <div className="p-1 mx-auto max-w-2lg text-gray-900 dark:text-gray-100">
              <h4 className="text-base lg:text-lg leading-relaxed">
                Mantenimiento y reparación de alta calidad para sus espacios.
              </h4>
            </div>
            <div className="flex gap-3 items-center justify-center mt-4">
              <Link
                isExternal
                className={buttonStyles({
                  color: 'warning',
                  radius: 'full',
                  variant: 'shadow',
                })}
                href="https://zipaquiradigital.com"
              >
                Contáctanos
              </Link>
              <Button color="warning" variant="ghost" className="text-black">
                Servicios
              </Button>
            </div>
          </div>
          {/* Componente de búsqueda */}
          <div className="w-full flex justify-center mt-8">
            <ServiciosSearch />
          </div>
        </div>
        <Modal />
        <Slider />
        <Galeria />
        <Pregunta />
      </section>
    </DefaultLayout>
  );
}
