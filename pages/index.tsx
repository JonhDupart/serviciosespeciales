// Importaciones de módulos externos
import { Link } from '@nextui-org/link';
import { Button } from '@nextui-org/react';
import { button as buttonStyles } from '@nextui-org/theme';
import React from 'react';
import { motion } from 'framer-motion';

// Importaciones de módulos internos
import { title } from '@/components/primitives';
import Servicios from '@/components/servicios';
import Slider from '@/components/slider';
import DefaultLayout from '@/layouts/default';
import Galeria from '../components/galeria';
import Modal from '../components/modal';
import Pregunta from '../components/preguntas';
import { siteConfig } from '../config/site';
import Servicio from '../components/servicios';
import Ubicacion from '../components/ubicacion';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

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
            
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.7 }}
              className="w-full text-4xl  leading-tight mb-2 mt-4 font-bold gradient-text"
            >
            Servicios Especiales
            ' para su Hogar 
            </motion.h1>
            <motion.h4
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8 }}
              className="w-full text-base lg:text-lg leading-relaxed"
            >
              <p className="w-full md:w-3/5 mx-auto pb-2">
              Mantenimiento y reparación de alta calidad para sus espacios.
              </p>
            </motion.h4>
          
            
            <div className="flex gap-3 items-center justify-center mt-4">
              <Link
                isExternal
                className={`bg-yellow-500 text-black font-bold py-2 px-4 rounded-full shadow-lg shadow-yellow-200/30 hover:shadow-xl transition-shadow duration-300 ease-in-out`}
                href="https://api.whatsapp.com/send/?phone=573015360531&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s+sobre+sus+servicios.&type=phone_number&app_absent=0"
              >
                Contáctanos
              </Link>
              <Button color="warning" variant="ghost" className="">
                Servicios
              </Button>
            </div>
          </div>
          
          {/* Componente de búsqueda */}
          <div className='w-full items-center'>
            <Modal />
          </div>
        </div>
        <Ubicacion />
        <Servicio />
        <Slider />
        <Galeria />
        <Pregunta />
      </section>
    </DefaultLayout>
  );
}
