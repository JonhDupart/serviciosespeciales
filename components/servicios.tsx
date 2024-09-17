import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import React, { useState, useEffect } from 'react';

interface Servicio {
  id: number;
  name: string;
  description: string;
}

const serviciosData: Servicio[] = [
  {
    id: 1,
    name: 'Electricidad',
    description: ' Contacta un profesional',
  },
  {
    id: 2,
    name: 'Pintura',
    description: ' Contacta un profesional',
  },
  {
    id: 3,
    name: 'Fontanería',
    description: 'Contacta un profesional',
  },  {
    id: 4,
    name: 'Ingenieria civil',
    description: 'Contacta un profesional',
  },
  {
    id: 5,
    name: 'Estructuras',
    description: 'Contacta un profesional',
  },
  {
    id: 6,
    name: 'Diseño de Interiores',
    description: 'Contacta un profesional',
  },  {
    id: 7,
    name: 'Terminados y Acabados',
    description: 'Contacta un profesional',
  },
  {
    id: 8,
    name: 'Lavado de Tanques',
    description: 'Contacta un profesional',
  },
  {
    id: 9,
    name: 'Limpieza de Muebles a Vapor',
    description: 'Contacta un profesional',
  },  {
    id: 10,
    name: 'Iluminación',
    description: 'Contacta un profesional',
  },
  {
    id: 11,
    name: 'Impermeabilización de Techos',
    description: 'Contacta un profesional',
  },
  {
    id: 12,
    name: 'Instalación de Camaras',
    description: 'Contacta un profesional',
  },  {
    id: 13,
    name: 'Jardineria',
    description: 'Contacta un profesional',
  },
  {
    id: 14,
    name: 'Ebanisteria',
    description: 'Contacta un profesional',
  },
  {
    id: 15,
    name: 'Instalación de Techos',
    description: 'Contacta un profesional',
  },
  {
    id: 16,
    name: 'Ferreteria',
    description: 'Contacta un profesional',
  },  {
    id: 17,
    name: 'Cerraduras',
    description: 'Contacta un profesional',
  },
  {
    id: 18,
    name: 'Plomeria',
    description: 'Contacta un profesional',
  },
  {
    id: 19,
    name: 'Lavado de Fachadas',
    description: 'Contacta un profesional',
  },
  {
    id: 20,
    name: 'Drywall',
    description: 'Contacta un profesional',
  },
  {
    id: 21,
    name: 'Mudanzas',
    description: 'Contacta un profesional',
  },  {
    id: 22,
    name: 'Instalación de Gas',
    description: 'Contacta un profesional',
  },
  
  // Agrega más servicios aquí
];

const ServiciosSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServicios, setFilteredServicios] = useState<Servicio[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    if (searchTerm === '') {
      setFilteredServicios([]);
      return;
    }

    const filtered = serviciosData.filter((servicio) =>
      servicio.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredServicios(filtered);
  }, [searchTerm]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHasInteracted(true);
    setSearchTerm(e.target.value);
  };

  const getWhatsappUrl = (name: string) => {
    const message = `Hola, me gustaría saber más sobre el servicio de ${name}.`;
    return `https://api.whatsapp.com/send/?phone=573015360531&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
  };

  return (
    <div className="w-full md:w-1/2 flex flex-col items-center justify-center mt-2 mb-10">
      <Input
        aria-label="Buscar servicios"
        placeholder="Busca tu servicio..."
        startContent={<Kbd keys={['command']}>S</Kbd>}
        onChange={handleSearchChange}
        className="mb-4 w-full max-w-4xl" // Ajusta el ancho aquí
        size="lg" // Aumenta el tamaño del Input
      />
      {filteredServicios.length > 0 ? (
       <ul className="list-disc">
       {filteredServicios.map((servicio) => (
         <li key={servicio.id} className="mb-2">
           <Link
             href={getWhatsappUrl(servicio.name)}
             className="text-base hover:underline font-semibold"
             target="_blank"
             rel="noopener noreferrer" 
           >
             <strong>{servicio.name}:</strong>
             <span className="pl-2">{servicio.description}</span>
           </Link>
         </li>
       ))}
     </ul>
      ) : hasInteracted ? (
        <p>No se encontraron servicios.</p>
      ) : null}
    </div>
  );
};

export default ServiciosSearch;
