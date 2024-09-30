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
    <div className="w-full">
      <motion.h3
        id="servicios"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 40 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="w-full items-start justify-start pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-5xl md:text-5xl lg:text-8xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
      >
        Contáctanos
      </motion.h3>
    </div>
  );
};

export default TextContacto;
