import React from 'react';
import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Popover, PopoverTrigger, PopoverContent } from '@nextui-org/react';
import styles from '../styles/animatedSvgMap.module.css'; // Ajusta la ruta según tu estructura

// Define animation variants for the path
const pathVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

// Define the base positions for each SVG
const basePositions = [
  { className: 'position-1', tooltip: 'Zipaquirá' },
  { className: 'position-2', tooltip: 'Nemocón' },
  { className: 'position-3', tooltip: 'Cogua' },
  { className: 'position-4', tooltip: 'Gachanzipá' },
  { className: 'position-5', tooltip: 'Tocanzipá' },
  { className: 'position-6', tooltip: 'Sopó' },
  { className: 'position-7', tooltip: 'Chía' },
  { className: 'position-8', tooltip: 'Tabio' },
  { className: 'position-9', tooltip: 'Cajica' },
  { className: 'position-10', tooltip: 'Tenjo' },
  { className: 'position-11', tooltip: 'Cota' },
];

const AnimatedSvgMap: React.FC = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    
    <div

     className="relative w-full h-screen bg-cover bg-center bg-[url('/mapamobil.svg')] md:bg-[url('/mapa.svg')]">
     
    
      {basePositions.map((position, index) => (
        <motion.div
          key={index}
          ref={ref}
          className={`${styles.positionBase} ${styles[position.className]}`}
        >
          <Popover>
            <PopoverTrigger>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-8 h-8 sm:w-14 sm:h-14 md:w-18 md:h-18 lg:w-22 lg:h-22 cursor-pointer"
              >
                <motion.path
                  d="M296.69,92.36H175.95c-13.5,0-24.45,10.95-24.45,24.45v118.62c0,13.5,10.95,24.45,24.45,24.45h27.45
                    l23.51,92.38c6.85,10.6,17.11,9.83,20.56,0L271,259.87h25.69c13.5,0,24.45-10.95,24.45-24.45V116.81
                    C321.14,103.31,310.19,92.36,296.69,92.36z"
                  className="st0"
                  fill="#E44233"
                  stroke="#E44233"
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  exit="hidden"
                  transition={{ duration: 0.8, ease: 'easeOut' }}

                  strokeWidth="2"
                  variants={pathVariants}
                />
              </svg>
            </PopoverTrigger>
            <PopoverContent>
              <div className="p-2">
                <div className="text-sm font-bold">S E P S C</div>
                <div className="text-xs">{position.tooltip}</div>
              </div>
            </PopoverContent>
          </Popover>
        </motion.div>
      ))}
    </div>
  );
};

export default AnimatedSvgMap;
