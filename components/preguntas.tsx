import { Accordion, AccordionItem } from '@nextui-org/react';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  // Define unique titles and content for each AccordionItem
  const accordionData = [
    {
      title: 'pregunta 1',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'Pregunta 2',
      content:
        'Este es el contenido para el segundo acordeón. Aquí puedes colocar cualquier texto que desees para proporcionar más detalles.',
    },
    {
      title: 'Pregunta 3',
      content:
        'Aquí va el contenido para el tercer acordeón. Puedes ajustar el texto para que se ajuste a tus necesidades.',
    },
    {
      title: 'Pregunta 4',
      content:
        'Texto para el cuarto acordeón. Asegúrate de que cada sección sea única y relevante para tu aplicación.',
    },
    {
      title: 'Pregunta 5',
      content:
        'Este es el contenido del quinto acordeón. Puedes usar esto para proporcionar información adicional.',
    },
    {
      title: 'Pregunta 6',
      content:
        'Contenido para el sexto acordeón. Asegúrate de revisar todo el contenido antes de publicarlo.',
    },
    {
      title: 'Pregunta 7',
      content:
        'Texto del séptimo acordeón. Puedes usar este espacio para agregar más detalles o instrucciones.',
    },
    {
      title: 'Pregunta 8',
      content:
        'Aquí va el contenido para el octavo acordeón. Ajusta el contenido según tus necesidades.',
    },
  ];

  // State to track if element is in view
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);

  // Hook to detect if the element is in view
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();

        setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Check on mount

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="w-full pt-10 md:pt-14 pb-20 sm:pb-4 md:pb-10">
      {/* Animated Header */}
      <motion.h2
        ref={headerRef}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.6 }}
        className="w-full text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl leading-tight font-bold flex items-start pb-4 md:pb-10 lg:pb-14 xl:pb-20 pt-4 sm:pt-8 md:pt-10 lg:pt-20"
      >
        Preguntas
      </motion.h2>

      {/* Animated Accordion */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Accordion variant="splitted" className="w-full">
          {accordionData.map((item, index) => (
            <AccordionItem key={index} title={item.title}>
              {item.content}
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
