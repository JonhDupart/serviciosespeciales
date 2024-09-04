import { Input } from '@nextui-org/input';
import { Kbd } from '@nextui-org/kbd';
import { Link } from '@nextui-org/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';

interface Servicio {
  id: number;
  name: string;
  description: string;
  url: string; // Nueva propiedad para la URL del servicio
}

const serviciosData: Servicio[] = [
  {
    id: 1,
    name: 'Electricidad, electricista',
    description: 'Contacta un profesional',
    url: '../about/',
  },
  {
    id: 2,
    name: 'Pintura',
    description: 'Contacta un profesional',
    url: '/servicios/servicio-b',
  },
  {
    id: 3,
    name: 'Fontanería',
    description: 'Contacta un profesional',
    url: '/servicios/servicio-c',
  },
  // Agrega más servicios aquí
];

const ServiciosSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredServicios, setFilteredServicios] = useState<Servicio[]>([]);
  const [hasInteracted, setHasInteracted] = useState(false);
  const router = useRouter();

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

  return (
    <div className="w-full block md:w-1/2 flex flex-col items-center justify-center mt-8">
      <Input
        aria-label="Buscar servicios"
        placeholder="Busca tu servicio..."
        startContent={<Kbd keys={['command']}>K</Kbd>}
        onChange={handleSearchChange}
        className="mb-4 w-full max-w-4xl" // Ajusta el ancho aquí
        size="lg" // Aumenta el tamaño del Input
      />
      {filteredServicios.length > 0 ? (
        <ul className="list-disc">
          {filteredServicios.map((servicio) => (
            <li key={servicio.id} className="mb-2">
              <Link
                href={servicio.url}
                className="text-gray-900 hover:underline"
              >
                <strong>{servicio.name}:</strong> {servicio.description}
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
