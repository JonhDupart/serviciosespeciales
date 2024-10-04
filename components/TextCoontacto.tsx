"use client";

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const TextContacto: React.FC = () => {
  // Hook to track if the component is in view
  const { ref, inView } = useInView({
    triggerOnce: false, // Cambiado a false para activar la animación al salir también
    threshold: 0.2,
  });

  return (
    <div className="w-full items-center justify-center ">
      <motion.h3
        id="servicios"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="text-center w-full items-start mb-10 lg:mb-20 justify-start pointer-events-none whitespace-pre-wrap gradient-text  text-4xl md:text-4xl lg:text-4xl font-semibold leading-none "
      >
        Contáctanos
      </motion.h3>
    </div>
  );
};

export default TextContacto;
