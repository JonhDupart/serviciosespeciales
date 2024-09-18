// Importaciones de módulos externos
import { Card } from '@nextui-org/react';
import { motion } from 'framer-motion'; 
import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../node_modules/swiper/swiper-bundle.min.css'; 

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

    const { ref: refText, inView: textInView } = useInView({
        threshold: 0.1,
    });

    return (
        <div className="relative w-full overflow-hidden text-center  p-10 m-48 ">
            <motion.h3
                id='servicios' 
                ref={refHeader}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: headerInView ? 1 : 0, y: headerInView ? 0 : 50 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.7 }}
                className="gradient-text text-4xl leading-tight mb-2 mt-4 font-semibold"
            >
                Nuestros Aliados
            </motion.h3>
            <motion.span
                ref={refText}
                initial={{ opacity: 0, y: 70 }}
                animate={{ opacity: textInView ? 1 : 0, y: textInView ? 0 : 70 }}
                exit={{ opacity: 0, y: 70 }}
                transition={{ duration: 0.7 }}
                className="text-base text-gray-400"
            >
                "Trabajamos con los mejores para ofrecerte soluciones integrales de calidad."
            </motion.span>
            <motion.div
                ref={sliderRef}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: sliderInView ? 1 : 0, y: sliderInView ? 0 : 50 }}
                transition={{ duration: 0.5 }}
                className="mySwiper relative mt-4 "
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
                            slidesPerView: 3,
                            spaceBetween: 4,
                        },
                        640: {
                            slidesPerView: 4,
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
                                    <img 
                                        src={slide.image} 
                                        className="w-auto h-auto "
                                        width={80} 
                                        height={40} 
                                    />
                                </Card>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Degradados en los bordes */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black/0 to-transparent backdrop-blur-sm z-10"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black/0 to-transparent backdrop-blur-sm z-10"></div>
            </motion.div> 
        </div>
    );
};

export default Slider;
