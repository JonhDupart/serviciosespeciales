import React from 'react';
import Servicios from '@/components/servicios'; // Asegúrate de que la ruta es correcta
import IndexServicios from '@/components/IndexServicios';
import { FaAward } from 'react-icons/fa';
import Calidad from './Calidad';
import { AnimatedListDemo } from './AnimatedListDemo';

const TwoColumnLayout: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row w-full   mt-10 lg:mt-20"
      style={{
        backgroundImage: 'url("/malla1.svg")', // Asegúrate de que esta ruta sea correcta
        backgroundSize: 'contain',
        backgroundPosition: 'start',
        backgroundRepeat: 'no-repeat',
      }}>
      {/* Columna Izquierda */}
      <div className="md:w-1/2 p-2 flex flex-col lg:sticky lg:top-32  lg:h-[80vh]">
        <p className="text-lg mb-4 flex items-center justify-center lg:justify-start font-semibold text-warning text-center lg:text-left">
          <FaAward className="mr-2 text-warning" /> {/* Añade color o tamaño si lo deseas */}
          Calidad Certificada
        </p>
        <h1 className="text-4xl font-bold mb-4 text-center md:text-left">Reparación y Mantenimiento para todo tipo de espacios</h1>
        <p className="text-lg mb-4 text-center md:text-left">
          hogares, oficinas, apartamentos, 
          conjuntos residenciales y colegios.
        </p>
        <Servicios />
        <Calidad />
      </div>

      {/* Columna Derecha */}
      <div className="md:w-1/2 flex flex-col justify-center  ">
      <div className=" rounded-lg" >
        <AnimatedListDemo/>
          </div>
        <div className='w-full mt-0'>
          <IndexServicios />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnLayout;
