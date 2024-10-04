// components/AnimatedListDemo.tsx

"use client";

import { cn } from "@/lib/utils"; // Asegúrate de que este módulo esté bien definido
import { AnimatedList } from "@/components/magicui/animated-list"; // Importa tu componente de lista animada
import { Avatar } from "@nextui-org/react"; // Importar el Avatar de NextUI
import { MdDoneAll } from "react-icons/md";

interface Item {
  name: string;
  description: string;
  time: string;
  avatar: string; // Agregado campo para el avatar
}

const notifications: Item[] = [
    {
      name: "Maria Camila",
      description: "Me gustaría agendar...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
    },
    {
      name: "Monica Urbina",
      description: "Zipaquirá calle 9a...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026705d",
    },
    {
      name: "Diego Silva",
      description: "Tarde de 2 a 5 pm...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a04258114e29026708c",
    },
    {
      name: "Mateo Gomez",
      description: "Hola, me gustaría reser...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026707d",
    },
    {
      name: "Ana Torres",
      description: "La llave tiene una...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026709d",
    },
    {
      name: "Carla Saez",
      description: "Excelente trabajo...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026710d",
    },
    {
      name: "Giovany López",
      description: "Los techos en pv...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026711d",
    },
    {
      name: "Diana Sánchez",
      description: "El piso color...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026712d",
    },
    {
      name: "Claudia Ramírez",
      description: "Me quedo muy bie...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026713d",
    },
    {
      name: "Jorge Martínez",
      description: "La pintura para ext...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026714d",
    },
    {
      name: "Mario Fernández",
      description: "Las cuatro lampar...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026715d",
    },
    {
      name: "Andrés Jiménez",
      description: "Tan bonito y es...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026716d",
    },
    {
      name: "Patricia Gómez",
      description: "Saber sobre cap...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026717d",
    },
    {
      name: "Ricardo Ortega",
      description: "Aseo y reparacion de...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026718d",
    },
    {
      name: "Luis Méndez",
      description: "Revisión del cole...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026719d",
    },
    {
      name: "Fernando Castillo",
      description: "el pago lo puedo...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026720d",
    },
    {
      name: "Isabel Torres",
      description: "Ayuda con mi aparta...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026721d",
    },
    {
      name: "Eduardo Rojas",
      description: "Conjunto residen...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026722d",
    },
    {
      name: "Verónica López",
      description: "Confirmar la reser...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026723d",
    },
    {
      name: "Santiago Ruiz",
      description: "La instalación de ga...",
      time: " 🟢 ",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026724d",
    },
  ];
  // Duplica las notificaciones para tener un array más grande
const extendedNotifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification: React.FC<Item> = ({ name, description, time, avatar }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[300px] cursor-pointer overflow-hidden rounded-2xl p-2",
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        "bg-white/10 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <Avatar
          src={avatar} // Usar el avatar de cada notificación
          size="md"
          className="rounded-full" // Asegúrate de que tenga bordes redondeados
        />
        <div className="flex flex-col flex-grow overflow-hidden">
          <figcaption className="flex flex-row items-start justify-between whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="text-xs text-gray-500">{time}</span>
          </figcaption>
          
          <p className="text-sm font-normal dark:text-white/60 flex items-center">
            <MdDoneAll className="mr-1 text-blue-600" /> {/* Ícono antes de la descripción */}
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export const AnimatedListDemo: React.FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={cn(
        "relative flex  h-[300px] lg:h-[500] w-full flex-col p-2 overflow-hidden ",
        className,
      )}
    >
      <AnimatedList>
        {extendedNotifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
    </div>
  );
};
