import { motion } from 'framer-motion';
import React from 'react';
import { FaViber, FaHandsHelping, FaUsersCog } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';


export default function App() {
  // Hooks to track if elements are in view
  const { ref: refHeader, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: refBeer, inView: inViewBeer } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: refCoffee, inView: inViewCoffee } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  const { ref: refApple, inView: inViewApple } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <>
   <div className="flex flex-col items-center justify-center  text-center p-4">
   
    <motion.h3
      ref={refHeader}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: headerInView ? 1 : 10, y: headerInView ? 0 : 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.7 }}
      className="w-full  text-2xl leading-tight mb-2 mt-4 font-semibold"
    >
      Profesionales a Domicilio
    </motion.h3>
    <motion.h4
      ref={refHeader}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: headerInView ? 1 : 10, y: headerInView ? 0 : 20 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8 }}
      className="w-full text-base lg:text-lg leading-relaxed"
    >
      <p className="w-full md:w-3/5 mx-auto pb-2">
        Desde colgar un cuadro o instalar la base del televisor, hasta la renovación completa de tu vivienda, nuestro equipo de expertos está listo para ayudarte.
      </p>
    </motion.h4>
    <motion.h2
          ref={refHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className=" text-2xl font-semibold  gradient-text mt-2"
        >
          Beneficios
        </motion.h2>
  </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <motion.div
          ref={refBeer}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inViewBeer ? 1 : 0, y: inViewBeer ? 0 : 50 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] w-full"
        >
          <div className="flex  z-10 w-full justify-start pl-4 pt-4 items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 ">
          <div className="flex justify-center items-center  rounded-full bg-warning-100/80 text-yellow-500 w-12 h-12">
              <FaViber className="text-3xl" />
            </div>
            <p className="text-base font-semibold ml-3">Atención 24/7</p>
          </div>
          <div className="relative flex w-full p-4 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-justify overflow-y-auto subpixel-antialiased pb-5">
            <p className="font-normal text-base text-default-500">
            Estamos disponibles en cualquier momento para atender tus necesidades 
            urgentes o programadas.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={refCoffee}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inViewCoffee ? 1 : 0, y: inViewCoffee ? 0 : 50 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] w-full"
        >
          <div className="flex  z-10 w-full justify-start pl-4 pt-4 items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 ">
          <div className="flex justify-center items-center p-3 rounded-full bg-warning-100/80 text-yellow-500 w-12 h-12">
              <FaUsersCog className="text-3xl" />
            </div>
            <p className="text-base font-semibold ml-4">
              Profesionales Calificados
            </p>
          </div>
          <div className="relative flex w-full p-4 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-justify overflow-y-auto subpixel-antialiased">
            <p className="font-normal text-base text-default-500">
            Nuestro equipo de expertos en mantenimiento cuenta con formación especializada y certificaciones, Cumpliendo con los más altos estandares de calidad.
            </p>
          </div>
        </motion.div>

        <motion.div
          ref={refApple}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: inViewApple ? 1 : 0, y: inViewApple ? 0 : 50 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] w-full"
        >
          <div className="flex  z-10 w-full justify-start pl-4 pt-4 items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 ">
          <div className="flex justify-center items-center p-3 rounded-full bg-warning-100/80 text-yellow-500 w-12 h-12">
              <FaHandsHelping className="text-3xl" />
            </div>
            <p className="text-base font-semibold text-center">
              Insumos de la Mejor Calidad
            </p>
          </div>
          <div className="relative flex w-full p-4 flex-auto flex-col text-justify place-content-inherit align-items-inherit  break-words  overflow-y-auto subpixel-antialiased">
            <p className="font-normal text-base text-default-500">
            Utilizamos materiales y herramientas de la más alta calidad,
             asegurando la durabilidad y excelencia.
            </p>
          </div>
        </motion.div>
      </div>
    </>
  );
}
