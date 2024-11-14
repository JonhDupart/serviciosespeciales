// components/ImageSlider.tsx
import React from 'react';
import { Card } from '@nextui-org/react';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css'; // Asegúrate de que esta ruta sea correcta
import aliados from '../pages/api/aliados'; // Importa los datos de la API

const ImageSlider: React.FC = () => {
    return (
        <div className="relative w-full overflow-hidden">
            <Swiper
                spaceBetween={10}
                slidesPerView={6}
                loop={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    1024: {
                        slidesPerView: 6,
                        spaceBetween: 10,
                    },
                }}
            >
                {aliados.map((aliado) => (
                    <SwiperSlide key={aliado.id}>
                        <Card isHoverable className="h-full">
                            <img
                                src={aliado.image}
                                alt={`Aliado ${aliado.id}`}
                                className="object-cover "
                            />
                        </Card>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageSlider;
