import React from 'react';
import { Card, CardHeader, CardBody,  Image } from '@nextui-org/react';

const MissionVisionValues: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-purple-900 to-pink-700 text-white p-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row justify-between items-center pb-8 border-b border-gray-400">
        <div>
          <h1 className="text-4xl font-bold mb-2">S E P S C</h1>
          <p className="text-lg">Servicios Especiales Para Su Casa</p>
        </div>
        <div className="text-right mt-4 md:mt-0">
         
        </div>
      </div>

      {/* Main Content Section */}
      <div className="text-center py-8">
        <p className="text-white text-base md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Mission, Vision, Values Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Mission Card */}
        <Card className="bg-purple-800" >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h3 className="text-white mb-2">Mision</h3>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p className="text-white text-sm">
            Suministrar una amplia gama de servicios que se adapten a las necesidades de nuestros clientes con un enfoque en la satisfacción y compromiso en cada proyecto.</p></CardBody>
        </Card>

        {/* Vision Card */}
        <Card className="bg-purple-800" >
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            < h3 className="text-white mb-2">Vision</h3>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p className="text-white text-sm">
            Proyectamos a  que nuestra empresa sea la numero uno en calidad y cumplimiento ,ofreciendo asi a nuestros clientes una gran satisfaccion ,generando confianza y tranquilidad en cada uno de los proyectos a realizar.</p>
          </CardBody>
        </Card>

        {/* Values Card */}
        <Card className="bg-purple-800">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <h3 className="text-white mb-2">Values</h3>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p className="text-white text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default MissionVisionValues;
