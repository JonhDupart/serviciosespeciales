import React, { useState } from "react";
import { FaEnvelope, FaThumbsUp, FaUserPlus, FaClipboardCheck, FaBell, FaChartLine,  } from "react-icons/fa";
import Servicios from '@/components/servicios'; // Asegúrate de que la ruta es correcta
import { MdOutlineEngineering } from "react-icons/md";// Definimos el tipo para las opciones de workflow
interface WorkflowOption {
  icon: JSX.Element;
  title: string;
  description: string;
}

const WorkflowSelection: React.FC = () => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const workflowOptions: WorkflowOption[] = [
    {
      icon: <MdOutlineEngineering />,
      title: "Ingenieria civil",
      description: "Transformamos tus ideas en infraestructuras sólidas, diseño, planificación y ejecución de proyectos."
    },
    {
      icon: <FaThumbsUp />,
      title: "Electricidad",
      description: "Soluciones eléctricas a medida, desde instalaciones residenciales hasta proyectos industriales."
    },
    {
      icon: <FaUserPlus />,
      title: "Pintura",
      description: "Utilizando materiales de alta calidad para crear ambientes únicos y acogedores."
    },
    {
      icon: <FaClipboardCheck />,
      title: "Fontanería",
      description: "Desde duchas que gotean y lavaplatos atascados hasta instalaciones de grifos."
    },
    {
      icon: <FaBell />,
      title: "Estructuras",
      description: "Diseño y la construcción de estructuras metallicas seguras y duraderas."
    },
    {
      icon: <FaChartLine />,
      title: "Diseño",
      description: "Creamos ambientes únicos que reflejan tu estilo personal, tanto en interiores como en exteriores."
    },
    {
        icon: <FaEnvelope />,
        title: "Terminados y Acabados",
        description: "Desde pisos y pinturas hasta detalles decorativos"
      },
      {
        icon: <FaThumbsUp />,
        title: "Lavado",
        description: "Especializados en el lavado de tanques y fachadas, eliminando suciedad, moho y manchas."
      },
      {
        icon: <FaUserPlus />,
        title: "Limpieza a Vapor",
        description: "Eliminamos bacterias, alérgenos y manchas difíciles de manera efectiva y ecológica. Ideal para hogares y negocios, "
      },
      {
        icon: <FaClipboardCheck />,
        title: "Iluminación",
        description: "diseñamos y ejecutamos soluciones personalizadas, desde la ambientación de interiores hasta la iluminación exterior."
      },
      {
        icon: <FaBell />,
        title: "Impermeabilización",
        description: "Utilizamos productos de alta calidad y técnicas especializadas para asegurar que tus techos, paredes y cimientos permanezcan secos y en óptimas condiciones."
      },
      {
        icon: <FaChartLine />,
        title: "Instalación de Camaras",
        description: "Nuestro equipo se encarga de todo, desde la selección de equipos hasta la instalación y configuración."
      },
      {
        icon: <FaBell />,
        title: "Ebanisteria",
        description: "Desde armarios, puertas y estantería hasta mesas y sillas."
      },
      {
        icon: <FaChartLine />,
        title: "Instalación de Techos",
        description: "instalación especializada de techos de drywall, PVC y yeso, asegurando acabados impecables y una instalación duradera."
      },
      {
          icon: <FaEnvelope />,
          title: "Ferreteria",
          description: "Todo lo que necesitas para tus proyectos de construcción y reparación en un solo lugar."
        },
        {
          icon: <FaThumbsUp />,
          title: "Cerrajería",
          description: "Ofrecemos soluciones rápidas y confiables, desde la instalación y reparación de cerraduras hasta la apertura de puertas."
        },
        {
          icon: <FaUserPlus />,
          title: "Mudanzas",
          description: "Nuestro equipo se encarga de embalar, transportar y descargar tus pertenencias con cuidado y eficiencia."
        },
        {
          icon: <FaClipboardCheck />,
          title: "Jardineria",
          description: "Desde el diseño y la planificación hasta la instalación y el mantenimiento de tu jardin."
        },
       
  ];

  return (
    <div className="mb-20 lg:mb-44 w-full flex items-start justify-center">
      <div className="max-w-6xl w-full  rounded-lg  overflow-hidden">
  

        <div className="p-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {workflowOptions.slice(0, showMore ? undefined : 4).map((workflow, index) => (
              <div
                key={index}
                className="flex flex-col relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-md rounded-large transition-transform-background motion-reduce:transition-none border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-lg backdrop-saturate-[1.8]"
              >
                <div className="flex p-3 z-10 w-full justify-start items-center shrink-0 overflow-inherit color-inherit subpixel-antialiased rounded-t-large gap-2 ">
              <div className="text-2xl  bg-yellow-500/30  rounded-3xl p-2 backdrop-blur-xl text-warning  items-center justify-center ">{workflow.icon}  </div>
              <h2 className=" text-base  font-semibold  flex items-center">{workflow.title}</h2>
            
              </div>
<p className="text-gray-500 relative flex w-full px-3 pb-3 flex-auto flex-col place-content-inherit align-items-inherit h-auto break-words text-left overflow-y-auto subpixel-antialiased dark:text-gray-400 ">{workflow.description}</p>

              
              </div>
            ))}
          </div>

          {!showMore && (
            <div className="mt-8 text-center">
              <button
                className=" text-md px-6 py-2 rounded-full text-sm font-semibold  transition duration-300 bg-warning"
                onClick={() => setShowMore(true)}
                aria-label="Show more workflow options"
              >
                Ver más
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default WorkflowSelection;
