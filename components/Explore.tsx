'use client';

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { TypingText, TitleText } from '../components/CustomTexts';
import ExploreCard from './ExploreCard';
import { staggerContainer } from '../utils/motion';
import { exploreWorlds } from '../constants';

// Define la interfaz para los datos de cada mundo que exploramos
interface ExploreWorld {
  id: string;
  imgUrl: string;
  title: string;
}

// Define el tipo para las props de ExploreCard si no lo tienes definido aún
interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const Explore: React.FC = () => {
  const [active, setActive] = useState<string>('world-2');
  
  // Definir la referencia y estado para la animación del h4
  const refHeader = useRef<HTMLHeadingElement>(null);
  const [headerInView, setHeaderInView] = useState<boolean>(false);

  // Hook para detectar si el elemento está en vista
  useEffect(() => {
    const handleScroll = () => {
      if (refHeader.current) {
        const rect = refHeader.current.getBoundingClientRect();
        setHeaderInView(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section className="w-full mt-20 md:mt-26 lg:mt-24 xl:mt-28" id="explore">
      <motion.div
        variants={staggerContainer(0.2, 0.1)} // Ajusta los parámetros según sea necesario
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} flex flex-col w-full`}
      >
        <TypingText 
          title="| S E R P C " 
          textStyles="text-center text-[10px] sm:text-[12px] md:text-[16px] lg:text-[16px] p-0" 
        />
        <TitleText 
          title={<>
            Zonas de Cobertura 
            <br className="md:block hidden" />
          </>}
          textStyles="text-center gradient-text" 
        />
        
        {/* Contenedor para el texto descriptivo */}
        <motion.h4
          ref={refHeader}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 30 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="w-full text-base lg:text-lg leading-relaxed mt-2"
        >
          <p className="w-full md:w-3/5 mx-auto  text-center">
            Cubrimos una amplia área geográfica para brindarte soluciones donde las necesites. Nos especializamos en atender áreas locales de Zipaquirá y toda Sabana Centro.
            <span className="font-bold shadow-md"></span>
          </p>
        </motion.h4>

        {/* Contenedor de las tarjetas de exploración */}
        <div className="mt-[20px] sm:mt-[20px] md:mt-[30px] lg:mt-[40px] flex lg:flex-row flex-col min-h-[80vh] gap-2">
          {exploreWorlds.map((world: ExploreWorld, index: number) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Explore;
