"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";
import { useTheme } from 'next-themes';
import Meteors from "@/components/magicui/meteors";
import { motion } from 'framer-motion'; // Importar motion
import { useInView } from 'react-intersection-observer'; // Importar useInView

interface Item {
  name: string;
  description: string;
  imageUrl: string; // Cambié 'icon' por 'imageUrl'
}

let notifications = [
  {
    name: "San Lorenzo",
    description: "Ceramicas",
    imageUrl: "/sanlorenzo-ceramiscas.jpg",
  },
  {
    name: "Cemex",
    description: "Cemento",
    imageUrl: "/cemex.jpg",
  },
  {
    name: "Ceramica Italia",
    description: "Ceramicas",
    imageUrl: "/ceramica-italia.jpg",
  },
  {
    name: "Demadera",
    description: "Acabados",
    imageUrl: "/demadera.jpg",
  },
  {
    name: "Homecenter",
    description: "Todo Sobre Construccion",
    imageUrl: "/homecenter.jpg",
  },
  {
    name: "Santafé",
    description: "Ladrillera",
    imageUrl: "/ladrillera.jpg",
  },
  {
    name: "Argos",
    description: "Cemento",
    imageUrl: "/argos.jpg",
  },
  // más notificaciones...
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, imageUrl }: Item) => {
  const { theme } = useTheme();

  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4 transition-all duration-200 ease-in-out hover:scale-[103%]",
        theme === 'light'
          ? "bg-white shadow-md"
          : "bg-gray-800 shadow-lg"
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex size-32 items-center justify-center rounded-2xl">
          <img src={imageUrl} alt={name} className="h-20 w-20 rounded-full object-contain bg-white" />
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium text-base dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal text-base dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  const { theme } = useTheme();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className={cn(
        "relative flex flex-col md:flex-row h-[650px] md:h-[450px] w-full p-2 overflow-hidden rounded-lg border md:shadow-xl m-44",
        theme === 'light' ? "bg-white border-gray-300" : "bg-black border-gray-700",
        className,
      )}
    >
      <Meteors number={20} />

      <div className="flex flex-col justify-center items-center w-full md:w-2/5 p-6 mb-6 md:mb-2">
        <h3 className="w-full text-6xl leading-tight mb-2 font-bold gradient-text">Aliados</h3>
        <p className="text-lg text-justify flex flex-col justify-end items-center relative overflow-hidden h-auto text-foreground box-border outline-none data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 shadow-medium rounded-lg cursor-pointer transition-transform-background motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-sm backdrop-saturate-[1] p-0 md:p-8 lg:p-8 xl:p-8">
          Gracias a nuestra red de aliados estratégicos, podemos ofrecerte precios 
          competitivos sin comprometer la calidad. Además, contamos con garantías 
          en todos nuestros servicios.
        </p>
      </div>

      <div className="w-full md:w-3/5">
        <AnimatedList>
          {notifications.map((item, idx) => (
            <Notification {...item} key={idx} />
          ))}
        </AnimatedList>
      </div>
    </motion.div>
  );
}
