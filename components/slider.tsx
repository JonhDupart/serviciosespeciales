// Importaciones de módulos externos
import { Card, CardFooter, Button } from '@nextui-org/react';
import { motion } from 'framer-motion'; // Importa framer-motion para animaciones
import Image from 'next/image';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../node_modules/swiper/swiper-bundle.min.css'; // Asegúrate de que esta ruta es correcta para Swiper

// Importaciones de módulos internos
import { slides } from '../pages/api/slides'; // Ajusta la ruta según sea necesario

const Slider = () => {
  const { ref: sliderRef, inView: sliderInView } = useInView({
    threshold: 0.1, // Umbral de visibilidad para activar la animación
  });

  const { ref: headerRef, inView: headerInView } = useInView({
    threshold: 0.1, // Umbral de visibilidad para activar la animación
  });

  return (
    <div className="relative w-full overflow-hidden py-0  " >


      <motion.div
        ref={sliderRef}
        initial={{ opacity: 0, y: 50 }} // Animación inicial
        animate={{ opacity: sliderInView ? 1 : 0, y: sliderInView ? 0 : 150 }} // Animación al entrar/salir del viewport
        transition={{ duration: 0.8 }} // Duración de la animación
        className="mySwiper"
      >
        <Swiper
          spaceBetween={20} // Espacio entre slides
          slidesPerView={4} // Número de slides visibles a la vez
          loop={true} // Hacer el slider infinito
          autoplay={{ delay: 2000 }} // Intervalo de auto-play
          pagination={{ clickable: true }} // Hacer la paginación clickeable
          modules={[Autoplay]} // Módulos de Swiper que estamos usando
          speed={1500}
          breakpoints={{
            // Definir el número de slides visibles a diferentes tamaños de pantalla
            320: {
              slidesPerView: 1.3,
              spaceBetween: 30,
            },
            480: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 3.1,
              spaceBetween: 10,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id} className="flex-shrink-0">
              <div className="relative w-full max-w-[300px] h-full">
                <Card
                  isFooterBlurred
                  radius="sm"
                  className="border-none relative h-full shadow-lg"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={800} // Ajusta el tamaño según lo necesites
                    height={600} // Ajusta el tamaño según lo necesites
                  />
                  <CardFooter className="absolute bottom-0 flex justify-between items-center p-2 bg-yellow-500 backdrop-blur-sm border border-white/20 rounded-lg">
                    <p className="text-sm text-gray/900 font-bold">
                      {slide.description}
                    </p>
                    <Button
  as="a" 
  target='_blank'
  rel='noreferrer'
  href={`https://api.whatsapp.com/send/?phone=573015360531&text=Hola%2C+me+gustar%C3%ADa+saber+m%C3%A1s+sobre+el+servicio+de ${encodeURIComponent(slide.title)}&type=phone_number&app_absent=0`}
  className="text-tiny text-white dark:text-gray-500 bg-success/90"
  variant="flat"
  color="default"
  radius="lg"
  size="sm"
>
  Contratar
</Button>
                  </CardFooter>
                </Card>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Slider;
