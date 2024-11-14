"use client";

import NumberTicker from "@/components/ui/number-ticker";
import { FaCity, FaPaintRoller, FaChartLine } from "react-icons/fa"; // Importa los íconos
import { motion } from "framer-motion"; // Importa framer-motion
import { useInView } from 'react-intersection-observer';
import Globe from "@/components/ui/globe"; // Asegúrate de que esta ruta es correcta

const ThreeDivs: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Ajusta según sea necesario
    triggerOnce: false, // Solo animar la primera vez que entra
  });

  return (
    <div className="flex flex-col md:flex-row justify-around w-full gap-4 mb-40" ref={ref}>
     
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center w-full md:w-1/3 p-6 border border-transparent rounded-lg shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
      >
        <FaCity className="text-warning text-4xl mb-2" /> {/* Icono de reparaciones */}
        <h2 className="text-xl font-semibold mb-2">Reparaciones</h2>
        <NumberTicker value={167} className="text-6xl  font-bold" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center w-full md:w-1/3 p-6 border border-transparent rounded-lg shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
      >
        <FaPaintRoller className="text-warning text-4xl mb-2" /> {/* Icono de mantenimiento */}
        <h2 className="text-xl font-semibold mb-2">Mantenimientos</h2>
        <NumberTicker value={235} className="text-6xl font-bold" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 50 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col items-center justify-center w-full md:w-1/3 p-6 border border-transparent rounded-lg shadow-lg backdrop-blur-sm hover:shadow-xl transition-shadow duration-300"
      >
        <FaChartLine className="text-warning text-4xl mb-2" /> {/* Icono de soluciones */}
        <h2 className="text-xl font-semibold mb-2">Soluciones</h2>
        <NumberTicker value={402} className="text-6xl  font-bold" />
      </motion.div>
    </div>
  );
};

export default ThreeDivs;
