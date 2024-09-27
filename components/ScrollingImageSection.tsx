import React, { useEffect, useState } from 'react';

const ScrollingImageSection: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex flex-col">
      {/* Div inferior con fondo de color */}
      <div className="flex-1 bg-blue-500">
        {/* Aquí puedes agregar contenido adicional */}
      </div>

      {/* Div superior con imagen y desplazamiento */}
      <div
        className="w-full absolute top-0 left-0 right-0 h-screen flex justify-center items-center"
        style={{
          backgroundImage: 'url(/cover.png)', // Reemplaza esta ruta
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollY * 0.5}px)`, // Ajusta la velocidad del desplazamiento
        }}
      >
        {/* Aquí puedes agregar contenido adicional */}
        <h1 className="text-white text-4xl font-bold">¡Bienvenido!</h1>
      </div>
    </div>
  );
};

export default ScrollingImageSection;
