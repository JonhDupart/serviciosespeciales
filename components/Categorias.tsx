import React, { useState } from "react";
import { FaThumbsUp, FaUserPlus, FaClipboardCheck } from "react-icons/fa";
import { MdOutlineEngineering } from "react-icons/md";
import { Divider, Popover, PopoverTrigger, PopoverContent, Select, SelectItem } from "@nextui-org/react";
import { Link, Button } from "@nextui-org/react";


const serviceOptions = {
  Electricidad: [
    { key: 'Mantenimiento puertas eléctricas', label: 'Mantenimiento puertas eléctricas' },
    { key: 'Cambio de bombillas', label: 'Cambio de bombillas' },
    { key: 'Iluminación ', label: 'Iluminación ' },
    { key: 'Ahorro de energía', label: 'Ahorro de energía' },
    { key: 'Cambio de tomas', label: 'Cambio de tomas' },
   
    
    
  ],
  EstructuraMetalica: [
    { key: 'Estructura para edificios', label: 'Estructura para edificios' },
    { key: 'Cubierta de techos', label: 'Cubierta de techos' },
    { key: 'Construcción y diseño de todo tipo de puentes', label: 'Construcción y diseño de todo tipo de puentes' },
    { key: 'Diseño de escaleras', label: 'Diseño de escaleras' },
    { key: 'Encierro en todo tipo de mallas', label: 'Encierro en todo tipo de mallas' },
    { key: 'Mantenimiento de cableado', label: 'Mantenimiento de cableado' },
    { key: 'Rejas', label: 'Rejas' },
    { key: 'Ventanas', label: 'Ventanas' },
    { key: 'Puertas', label: 'Puertas' },
    { key: 'Ornamentación en general', label: 'Ornamentación en general' },
  ],
  Acabados: [
    { key: 'Acabados de apartamentos', label: 'Acabados de apartamentos' },
    { key: 'Acabados arquitectónicos', label: 'Acabados arquitectónicos' },
    { key: 'PVC', label: 'PVC' },
    { key: 'Acabados de construcción', label: 'Acabados de construcción' },
    { key: 'Acabados en madera', label: 'Acabados en madera' },
   
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
    title: "Electricidad doméstica",
    description: "Soluciones eléctricas para su hogar u oficina. Desde el mantenimiento de puertas eléctricas hasta la instalación de duchas.",
    serviceGroup: 'Electricidad'
  },
  {
    icon: <FaThumbsUp />,
    title: "Construcción en  estructura metálica",
    description: "Nuestros servicios incluyen el diseño y construcción estructuras robustas y duraderas para todo tipo de espacio",
    serviceGroup: 'EstructuraMetalica'
  },
  {
    icon: <FaUserPlus />,
    title: "Acabados",
    description: "Nos especializamos en acabados de apartamentos, acabados arquitectónicos, PVC y acabados en madera, brindando un toque final perfecto a su construcción.",
    serviceGroup: 'Acabados'
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
      const url = `https://api.whatsapp.com/send/?phone=573204749676 &text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    }
  };

  return (
    <div className="min-h-screen w-full flex items-start justify-center mb-10 lg:mt-0">
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
                    description={`Contácta un profesional.`}
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
                    Contratar servicio
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
