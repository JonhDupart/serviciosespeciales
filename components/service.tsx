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
   <div className="flex flex-col items-center justify-center  text-center mt-10 ">
   
    <motion.h3
      ref={refHeader}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 40 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.7 }}
      className="w-full  gradient-text text-4xl leading-tight mb-2 mt-4 font-semibold"
    >
Servicios    </motion.h3>
    <motion.h4
      ref={refHeader}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 30 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="w-full text-base lg:text-lg leading-relaxed "
    >
     <p className="w-full md:w-3/5 mx-auto pb-2 mb-4">
  Contamos con un equipo de profesionales altamente capacitados, estamos listos para atender todas tus necesidades. 
  <span className="font-bold shadow-md  "> Utiliza nuestro buscador de servicios para encontrar rápidamente lo que necesitas.</span>
</p>
    </motion.h4>
   
  </div>

    </>
  );
}
