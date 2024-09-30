import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import TapContacto from '@/components/TapContacto';
import ContactForm from '@/components/ContactForm';


export default function App() {
  // Hooks to track if elements are in view
  const { ref: refHeader, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <div className="w-full flex flex-col md:flex-row text-center "
       style={{
        backgroundImage: 'url("/malla1.svg")', // Asegúrate de que esta ruta sea correcta
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
    
      {/* Contenedor del 50% para los textos */}
      <div className="flex flex-col items-center justify-center w-full md:w-1/2"> {/* Cambiado a 1/2 */}
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

      {/* Contenedor del 50% para el otro componente */}
      <div className="w-full md:w-1/2 pl-0 md:pl-0 lg:pl-14"> {/* Cambiado a 1/2 */}
      <ContactForm />
      </div>
    </div>
  );
}
