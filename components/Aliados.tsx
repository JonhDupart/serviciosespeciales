// Importaciones de módulos externos
import { Card } from '@nextui-org/react';
import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Asegúrate de que esta ruta es correcta
import Image from 'next/image'; // Importa el componente Image
import Globe from "@/components/ui/globe"; // Asegúrate de que esta ruta es correcta

// Importaciones de módulos internos
const slides = [
    { id: 1, image: '/argos.jpg' },
    { id: 2, image: '/ceramica-italia.jpg' },
    { id: 3, image: '/corona-ceramicas.jpg' },
    { id: 4, image: '/demadera.jpg' },
    { id: 5, image: '/homecenter.jpg' },
    { id: 6, image: '/ladrillera.jpg' },
    { id: 7, image: '/sanlorenzo.jpg' },
    { id: 8, image: '/santaclara.jpg' },
    { id: 9, image: '/mekeup.jpg' },
    { id: 10, image: '/cemex.jpg' },
];

const Slider: React.FC = () => {
    const { ref: sliderRef, inView: sliderInView } = useInView({
        threshold: 0.1,
    });

    const { ref: refHeader, inView: headerInView } = useInView({
        threshold: 0.1,
    });

    const { ref: refGlobe, inView: globeInView } = useInView({
        threshold: 0.1,
    });

    const { ref: refText, inView: textInView } = useInView({
        threshold: 0.1,
    });

    return (
        <div className="relative w-full overflow-hidden text-center mt-36 md:mt30 lg:mt-30 xl:mt-32 flex flex-col">
            <motion.span
                ref={refHeader}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.7 }}
                className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b gradient-text text-center text-4xl mb-2 mt-4 font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10"
            >
                Nuestros Aliados
            </motion.span>
            <motion.span
                ref={refText}
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 70 }}
                exit={{ opacity: 0, y: 70 }}
                transition={{ duration: 0.7 }}
                className="text-base text-gray-400"
            >
                &quot;Trabajamos con los mejores para ofrecerte precios y materiales de calidad.&quot;
            </motion.span>
           
                <Globe  className='top-28 md:-top-28 lg:top-8'/>
           
            <motion.div
                ref={sliderRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: sliderInView ? 1 : 0, y: sliderInView ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                className="mySwiper relative mt-40 md:mt-32 lg:mt-52"
            > 
                <Swiper
                    spaceBetween={10}
                    slidesPerView={6}
                    loop={true}
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    speed={800}
                    modules={[Autoplay]}
                    breakpoints={{
                        320: {
                            slidesPerView: 2,
                            spaceBetween: 2,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 8,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 10,
                        },
                    }}
                >
                    {slides.map(slide => (
                        <SwiperSlide key={slide.id}>
                            <div className="relative opacity-80">
                                <Card isFooterBlurred radius="sm" className="border-none relative h-full shadow-lg">
                                    <Image 
                                        src={slide.image} 
                                        alt={`Logo de ${slide.id}`}  // Proporciona un alt significativo
                                        layout="responsive" // Mejora la adaptación
                                        width={80} 
                                        height={40} 
                                    />
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Degradados en los bordes */}
            </motion.div>
            
        </div>
    );
};

export default Slider;
