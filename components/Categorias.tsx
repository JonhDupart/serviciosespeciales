import React, { useState } from "react";
import { FaThumbsUp, FaUserPlus, FaClipboardCheck } from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import { Divider, Popover, PopoverTrigger, PopoverContent, Select, SelectItem } from "@nextui-org/react";
import { Link, Button } from "@nextui-org/react";


const serviceOptions = {
  construction: [
    { key: 'painting', label: 'Pintura' },
    { key: 'plumbing', label: 'Fontanería' },
  ],
  electrical: [
    { key: 'wiring', label: 'Cableado' },
    { key: 'lighting', label: 'Iluminación' },
  ],
  cleaning: [
    { key: 'house_cleaning', label: 'Limpieza de Casa' },
    { key: 'office_cleaning', label: 'Limpieza de Oficina' },
  ],
  gardening: [
    { key: 'landscaping', label: 'Paisajismo' },
    { key: 'lawn_care', label: 'Cuidado del Césped' },
  ],
};

interface WorkflowOption {
  icon: JSX.Element;
  title: string;
  description: string;
  serviceGroup: keyof typeof serviceOptions;
}

const workflowOptions: WorkflowOption[] = [
  {
    icon: <MdOutlineEngineering />,
    title: "Terminados y Acabados",
    description: "Acabados y terminados de alta calidad para tus proyectos de construcción o remodelación. Nos encargamos de cada detalle, asegurando un resultado impecable en paredes, pisos, techos y más.",
    serviceGroup: 'construction'
  },
  {
    icon: <FaThumbsUp />,
    title: "Remodelación",
    description: "Servicios de remodelación de viviendas y oficinas, transformamos tus espacios con diseños funcionales y modernos. Nos especializamos en reformas integrales, ampliaciones y mejoras estéticas, adaptándonos a tus necesidades y gustos.",
    serviceGroup: 'electrical'
  },
  {
    icon: <FaUserPlus />,
    title: "Limpieza",
    description: "Servicios de limpieza profesional para hogares y empresas, garantizamos espacios impecables y saludables. Especializados en limpieza profunda, mantenimiento regular y desinfección, asegurando un entorno limpio y seguro.",
    serviceGroup: 'cleaning'
  },
  {
    icon: <FaClipboardCheck />,
    title: "Jardinería",
    description: "Servicios de jardinería profesional para mantener y embellecer tus áreas verdes. Nos especializamos en el cuidado de jardines, poda, diseño de paisajes y mantenimiento de césped.",
    serviceGroup: 'gardening'
  },
];

const WorkflowSelection: React.FC = () => {
  const [selectedServices, setSelectedServices] = useState<Record<string, string | null>>({});

  const handleServiceSelect = (group: string, service: string | null) => {
    setSelectedServices((prev) => ({
      ...prev,
      [group]: service,
    }));
  };

  const handleSendMessage = (title: string, group: string) => {
    const selectedService = selectedServices[group];
    if (selectedService) {
      const message = `Hola, estoy interesado en el servicio de ${title} y me gustaría solicitar ${selectedService}.`;
      const url = `https://api.whatsapp.com/send/?phone=573015360531&text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-start justify-center mb-10 mt-10 lg:mt-0">
      <div className="max-w-6xl w-full rounded-lg overflow-hidden">
        <div className="w-full mb-5">
          <h1 className="text-xl">Busca por Categoria</h1>
          <Divider className="my-4" />
        </div>
        <div className="p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {workflowOptions.map((workflow, index) => (
              <Popover key={index} placement="bottom" showArrow offset={10}>
                <PopoverTrigger>
                  <div className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none shadow-md rounded-large bg-white/5 dark:bg-default-400/10 backdrop-blur-lg cursor-pointer">
                    <div className="flex p-3 z-10 w-full justify-start items-center gap-2 ">
                      <div className="text-2xl bg-yellow-500/30 rounded-3xl p-2">
                        {workflow.icon}
                      </div>
                      <h2 className="text-base font-semibold">{workflow.title}</h2>
                    </div>
                    <p className="text-gray-500 relative flex w-full px-3 pb-3">
                      {workflow.description}
                    </p>
                  </div>
                </PopoverTrigger>
                <PopoverContent className="w-[340px]">
                  <Select
                    label={`${workflow.title}`}
                    placeholder="Selecciona un servicio"
                    description={`Contácta un profesinal.`}
                    onSelectionChange={(selection) => {
                      const service = selection?.currentKey || null; // Obtener el servicio seleccionado
                      handleServiceSelect(workflow.serviceGroup, service);
                    }}
                    className="max-w-xs"
                  >
                    {serviceOptions[workflow.serviceGroup].map((service) => (
                      <SelectItem key={service.key}>
                        {service.label}
                      </SelectItem>
                    ))}
                  </Select>
                  <Button
                    as={Link}
                    color="primary"
                    showAnchorIcon
                    variant="solid"
                    className="mt-2 w-full bg-warning text-white py-2 rounded"
                    onClick={() => handleSendMessage(workflow.title, workflow.serviceGroup)}
                       >
                    Enviar mensaje
                  </Button>
                </PopoverContent>
              </Popover>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowSelection;
