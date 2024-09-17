import { Accordion, AccordionItem } from '@nextui-org/react';
import { motion } from 'framer-motion';
import React, { useState, useEffect, useRef } from 'react';

export default function App() {
  // Define unique titles and content for each AccordionItem
  const accordionData = [
    {
      title: '¿Ofrecen servicios de emergencia?',
      content:
        'Sí, contamos con un servicio de atención 24/7 para emergencias relacionadas con mantenimiento y reparaciones urgentes en tu hogar.',
    },
    {
      title: '¿Cuánto tiempo tardan en realizar una cotización?',
      content:
        'Después de recibir tu solicitud, nuestro equipo se pondrá en contacto contigo en un plazo de 24 horas para coordinar una visita y realizar una cotización sin compromiso.',
    },
    {
      title: '¿Qué tipo de materiales utilizan en las reparaciones?',
      content:
        'Trabajamos con insumos de la mejor calidad, garantizando que todos los materiales utilizados sean duraderos y adecuados para el tipo de trabajo requerido.',
    },
    {
      title: '¿Puedo programar un servicio fuera del horario laboral?',
      content:
        'Sí, nos adaptamos a tu disponibilidad. Podemos programar visitas o servicios en horarios extendidos o fines de semana para tu mayor comodidad.',
    },
    {
      title: '¿Ofrecen garantía en los trabajos realizados?',
      content:
        'Sí, ofrecemos garantía en todos nuestros trabajos, lo que asegura que cualquier inconveniente será resuelto de forma rápida y eficiente.',
    },
    {
      title: '¿Cómo puedo realizar el pago por los servicios?',
      content:
        'Aceptamos diferentes métodos de pago: efectivo, transferencia bancaria y pagos electrónicos. Te brindaremos todas las opciones para mayor comodidad.',
    },
    {
      title: '¿Puedo solicitar varios servicios en una misma visita?',
      content:
        '¡Por supuesto! Nuestro equipo está capacitado para atender múltiples necesidades en una sola visita, desde reparaciones hasta tareas de mantenimiento, optimizando tiempo y recursos.',
    },
    {
      title: '¿Qué costo tiene la visita domiciliaria?',
      content:
        'La visita domiciliaria tiene un costo de 20 mil pesos en zonas locales de Zipaquirá y 40 mil pesos en la Sabana Centro. Sin embargo, si decides aceptar nuestros servicios tras la cotización, el costo de la visita será descontado del total del trabajo, lo que la convierte en un beneficio adicional para ti.',
    },
  ];

  // State to track if elements are in view
  const [isInView, setIsInView] = useState(false);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const h4Ref = useRef<HTMLHeadingElement>(null);
  const [h4InView, setH4InView] = useState(false);

  // Hook to detect if the elements are in view
  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        setIsInView(rect.top < window.innerHeight && rect.bottom >= 0);
      }
      if (h4Ref.current) {
        const rect = h4Ref.current.getBoundingClientRect();
        setH4InView(rect.top < window.innerHeight && rect.bottom >= 0);
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
    <div className="w-full flex flex-col lg:flex-row items-start lg:space-x-4 px-4 lg:px-6">
      {/* Left Container: Title and Description */}
      <div className="w-full lg:w-2/5 flex flex-col items-center lg:sticky lg:top-10 lg:z-10 lg:py-4  space-y-4">
        <motion.h2
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 30 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className=" gradient-text text-3xl sm:text-4xl md:text-4xl lg:text-5xl xl:text-5xl leading-tight font-bold text-center lg:text-left pb-1"
        >
          Los clientes preguntan
        </motion.h2>
        <motion.h4
          ref={h4Ref}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: h4InView ? 1 : 0, y: h4InView ? 0 : 30 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-base lg:text-lg leading-relaxed text-center lg:text-left"
        >
          <p className="md:w-3/4">
            Aquí encontrarás respuestas a las dudas más comunes que recibimos. Si no encuentras lo que buscas,
            <span>
              <a href="https://wa.me/1234567890" className="text-success hover:underline font-bold gradient-text" target="_blank" rel="noopener noreferrer">
                no dudes en contactarnos.
              </a>
            </span>
          </p>
        </motion.h4>
      </div>

      {/* Right Container: Accordion */}
      <div className="w-full lg:w-3/5 flex flex-col mt-6 lg:mt-0 space-y-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: isInView ? 1 : 1, y: isInView ? 0 : 40 }}
          transition={{ duration: 0.6 }}
          className="w-full"
        >
          <Accordion>
            {accordionData.map((item, index) => (
              <AccordionItem
                key={index}
                aria-label={`Accordion ${index + 1}`}
                subtitle={index === 0 ? <span className='gradient-text'>Presiona para abrir </span> : undefined} // Only show subtitle for the first item
                title={item.title}
                className="border-b border-gray-200"
              >
                {item.content}
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
}
