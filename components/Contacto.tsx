import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import ContactForm from '@/components/ContactForm';
import TapContacto from '@/components/TapContacto';

export default function App() {
  // Hooks to track if elements are in view
  const { ref: refHeader, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className=" w-full  flex flex-col md:flex-row  text-center "
      style={{
        backgroundImage: 'url("/malla1.svg")', // Asegúrate de que esta ruta sea correcta
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}>
      {/* Contenedor del 40% para los textos */}
      <div className="flex flex-col items-center justify-center  w-full md:w-2/5 "> {/* Añadido padding horizontal */}
        <motion.h4
          ref={refHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 30 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full text-base lg:text-lg leading-relaxed"
        >
          <TapContacto />
        </motion.h4>
      </div>

      {/* Contenedor del 60% para el otro componente */}
      <div className="w-full md:w-3/5 justify-center"> {/* Añadido padding horizontal */}
        <ContactForm />
      </div>
    </div>
  );
}
