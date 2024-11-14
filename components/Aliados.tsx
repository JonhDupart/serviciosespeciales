// Importaciones de módulos externos
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import Globe from "@/components/ui/globe"; // Asegúrate de que esta ruta es correcta
import Slide from './ImagenSlider';

const Slider: React.FC = () => {
    const { ref: sliderRef, inView: sliderInView } = useInView({ threshold: 0.1 });
    const { ref: refHeader, inView: headerInView } = useInView({ threshold: 0.1 });
    const { ref: refText, inView: textInView } = useInView({ threshold: 0.1 });

    return (
        <div className="relative w-full overflow-hidden text-center mt-36  flex flex-col">
            <motion.span
                ref={refHeader}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.7 }}
                className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b gradient-text text-center text-4xl mb-2 mt-4 font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
            >
                Nuestros Aliados
            </motion.span>
            <motion.span
                ref={refText}
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 70 }}
                exit={{ opacity: 0, y: 70 }}
                transition={{ duration: 0.7 }}
                className="text-base text-gray-400"
            >
                &quot;Trabajamos con los mejores para ofrecerte precios y materiales de calidad.&quot;
            </motion.span>
           
            <Globe className='top-28 md:-top-28 lg:top-8' />

            <motion.div
                ref={sliderRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: sliderInView ? 1 : 0, y: sliderInView ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                className="relative mt-40 md:mt-32 lg:mt-52"
            >
                {/* Puedes agregar cualquier contenido adicional aquí si es necesario */}
            </motion.div>
           
        </div>
    );
};

export default Slider;
