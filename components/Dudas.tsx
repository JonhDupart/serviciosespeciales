import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image'; // Asegúrate de importar el componente de imagen que uses

export default function App() {
  // Hooks to track if elements are in view
  const { ref: refHeader, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: refImageLeft, inView: inViewLeft } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  const { ref: refImageRight, inView: inViewRight } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="flex flex-col items-center text-center mt-32 w-full backdrop-brightness-125 bg-white/30 p-10">
      <div className="flex flex-row w-full max-w-screen-lg items-center justify-center">
        <motion.div
          ref={refImageLeft}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: inViewLeft ? 1 : 0, x: inViewLeft ? 0 : -50 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
          className="w-[80px] flex justify-center items-center"
        >
          <Image
            src="/senal.png" // Reemplaza con la ruta correcta
            alt="Descripción de la imagen 1"
            layout="responsive"
            width={50} // Ajusta el ancho
            height={50} // Ajusta la altura
            className="object-cover"
          />
        </motion.div>

        <motion.h3
          id='servicios' 
          ref={refHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.7 }}
          className="w-3/5 text-baseleading-tight mb-2 mt-4 font-semibold text-center"
        > 
          "¿Tienes dudas o reclamos? ¡Estamos aquí para ayudarte!"
        </motion.h3>

        <motion.div
          ref={refImageRight}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: inViewRight ? 1 : 0, x: inViewRight ? 0 : 50 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.7 }}
          className="w-[80px] flex justify-center items-center"
        >
          <Image
            src="/senal.png" // Reemplaza con la ruta correcta
            alt="Descripción de la imagen 2"
            layout="responsive"
            width={50} // Ajusta el ancho
            height={50} // Ajusta la altura
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
}
