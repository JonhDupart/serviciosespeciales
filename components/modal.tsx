import React from 'react';
import { FaViber, FaHandsHelping, FaUsersCog } from 'react-icons/fa';

export default function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center p-4">
        <h3 className="w-full text-2xl leading-tight mb-2 mt-4 font-semibold">
          Profesionales a Domicilio
        </h3>
        <h4 className="w-full text-base lg:text-lg leading-relaxed">
          <p className="w-full md:w-3/5 mx-auto pb-2">
            Desde colgar un cuadro o instalar la base del televisor, hasta la renovación completa de tu vivienda, nuestro equipo de expertos está listo para ayudarte.
          </p>
        </h4>
        <h2 className="text-2xl font-semibold gradient-text mt-2">
          Beneficios
        </h2>
      </div>

      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] w-full">
          <div className="flex z-10 w-full justify-start pl-4 pt-4 items-center gap-2">
            <div className="flex justify-center items-center rounded-full bg-warning-100/80 text-yellow-500 w-12 h-12">
              <FaViber className="text-3xl" />
            </div>
            <p className="text-base font-semibold ml-3">Atención 24/7</p>
          </div>
          <div className="relative flex w-full p-4 flex-auto flex-col h-auto break-words text-justify overflow-y-auto pb-5">
            <p className="font-normal text-base text-default-500">
              Estamos disponibles en cualquier momento para atender tus necesidades urgentes o programadas.
            </p>
          </div>
        </div>

        <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] w-full">
          <div className="flex z-10 w-full justify-start pl-4 pt-4 items-center gap-2">
            <div className="flex justify-center items-center p-3 rounded-full bg-warning-100/80 text-yellow-500 w-12 h-12">
              <FaUsersCog className="text-3xl" />
            </div>
            <p className="text-base font-semibold ml-4">Profesionales Calificados</p>
          </div>
          <div className="relative flex w-full p-4 flex-auto flex-col text-justify break-words overflow-y-auto">
            <p className="font-normal text-base text-default-500">
              Nuestro equipo de expertos en mantenimiento cuenta con formación especializada y certificaciones, cumpliendo con los más altos estándares de calidad.
            </p>
          </div>
        </div>

        <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-medium rounded-large border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8] w-full">
          <div className="flex z-10 w-full justify-start pl-4 pt-4 items-center gap-2">
            <div className="flex justify-center items-center p-3 rounded-full bg-warning-100/80 text-yellow-500 w-12 h-12">
              <FaHandsHelping className="text-3xl" />
            </div>
            <p className="text-base font-semibold text-center">Insumos de la Mejor Calidad</p>
          </div>
          <div className="relative flex w-full p-4 flex-auto flex-col text-justify break-words overflow-y-auto">
            <p className="font-normal text-base text-default-500">
              Utilizamos materiales y herramientas de la más alta calidad, asegurando la durabilidad y excelencia.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
