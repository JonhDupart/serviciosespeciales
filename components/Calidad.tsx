import React from 'react';
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
const Calidad: React.FC = () => {
  return (
    <div className="flex items-center justify-between  lg:pt-4">
      <div className="flex gap-1 items-center text-center">
        <IoMdCheckmarkCircleOutline className="h-6 w-6 text-warning  " />
        <h3 className="text-sm md:text-lg font-light ">Garantía</h3>
      </div>

      <div className="flex gap-1 items-center text-center">
        <IoMdCheckmarkCircleOutline className="h-6 w-6 text-warning  " />
        <h3 className="text-md md:text-lg font-light">Precio</h3>
      </div>

      <div className="flex gap-1 items-center text-center ">
        <IoMdCheckmarkCircleOutline className="h-6 w-6 text-warning " />
        <h3 className="text-md md:text-lg font-light">Calidad</h3>
      </div>
    </div>
  );
};

export default Calidad;
