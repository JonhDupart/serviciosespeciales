import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from '@nextui-org/react';
import { useSpring, animated } from '@react-spring/web';
import Image from 'next/image';
import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Masonry from 'react-masonry-css';

// Define los tipos de las imágenes
interface ImageItem {
  id: number;
  src: string;
  alt: string;
  likes: number;
  comments: number;
  shares: number;
  saves: number;
  title: string;
  description: string;
}

// Define los props del componente ImageComponent
interface ImageComponentProps {
  src: string;
  alt: string;
  onClick?: () => void;
  style: React.CSSProperties; // Cambiado aquí
}

// Componente ImageComponent
const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  onClick,
  style,
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const props = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'scale(1)' : 'scale(0.8)',
    config: { duration: 600 },
  });

  return (
    <animated.div
      ref={ref}
      style={{ ...props, ...style }} // Usar `props` para animaciones
      className="relative bg-white shadow-lg rounded-lg overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full h-full p-0 border-0 bg-transparent cursor-pointer"
        aria-label={alt}
      >
        <Image
          src={src}
          alt={alt}
          layout="responsive"
          width={500} // Puedes ajustar estos valores según el diseño
          height={300}
          className="object-cover"
        />
      </button>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent opacity-80 p-3 text-white">
        <ul className="flex flex-wrap gap-2">
          <li className="flex items-center">
            <svg
              className="w-5 h-5 mr-1"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z" />
            </svg>
            <span>0</span>
          </li>
        </ul>
      </div>
    </animated.div>
  );
};

// Lista de imágenes para la galería
const items: ImageItem[] = [
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },  {
    id: 1,
    src: "/estructura.jpeg",
    alt: "Imagen del producto",
    likes: 1,
    comments: 24,
    shares: 3,
    saves: 3,
    title: "Construcción",
    description:
      "Descripción de la construcción esta es la descripcion de las imagenes ",
  },
  // Resto de las imágenes...
];

const Galeria: React.FC = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(
    null
  );

  // Header animation
  const { ref: refHeader, inView: headerInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const headerSpring = useSpring({
    opacity: headerInView ? 1 : 0,
    transform: headerInView ? 'translateY(0)' : 'translateY(50px)',
    config: { duration: 600 },
  });

  const openModal = (index: number) => {
    setSelectedImageIndex(index);
    onOpen();
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === null || prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === null || prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Masonry breakpoint configuration
  const masonryBreakpointCols = {
    default: 4,
    1100: 3,
    700: 2,
    500: 2,
  };

  const selectedImage =
    selectedImageIndex !== null ? items[selectedImageIndex] : null;

  return (
    <div className="w-full flex min-h-screen flex-wrap content-center justify-center bg-transparent pt-24 sm:pt-14 md:pt-32 lg:pt-44 xl:pt-44">
      {/* Animated Header */}
      <animated.h2
        ref={refHeader}
        style={headerSpring}
        className="w-full text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-8xl leading-tight font-bold flex items-start pb-4 md:pb-10 lg:pb-14 xl:pb-20"
      >
        Trabajos
      </animated.h2>

      {/* Animated Gallery */}
      <div className="w-full rounded-xl">
        <Masonry
          breakpointCols={masonryBreakpointCols}
          className="flex w-full gap-4"
          columnClassName="masonry-grid_column"
        >
          {items.map((item, index) => (
            <ImageComponent
              key={item.id}
              src={item.src}
              alt={item.alt}
              onClick={() => openModal(index)}
              style={{}} // Puedes ajustar los estilos según sea necesario
            />
          ))}
        </Masonry>
      </div>

      {/* Modal */}
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        radius="lg"
        classNames={{
          body: 'py-6',
          backdrop: 'bg-[#292f46]/50 backdrop-opacity-40',
          base: 'border-[#292f46] bg-[#19172c] dark:bg-[#19172c] text-[#a8b0d3]',
          header: 'border-b-[1px] border-[#292f46]',
          footer: 'border-t-[1px] border-[#292f46]',
          closeButton: 'hover:bg-white/5 active:bg-white/10',
        }}
      >
        <ModalContent className="w-full md:w-[90vw] lg:w-[60vw] p-4 relative overflow-hidden h-auto text-foreground box-border outline-none shadow-lg rounded-lg cursor-pointer transition-transform motion-reduce:transition-none data-[pressed=true]:scale-[0.97] tap-highlight-transparent border-transparent bg-white/5 dark:bg-default-400/10 backdrop-blur-md backdrop-saturate-[1.8]">
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-white">
                {selectedImage ? (
                  <>
                    <h3 className="text-xl font-semibold">
                      {selectedImage.title}
                    </h3>
                    <p>{selectedImage.description}</p>
                  </>
                ) : (
                  <span>Cargando...</span>
                )}
              </ModalHeader>
              <ModalBody className="relative">
                {selectedImage && (
                  <Image
                    src={selectedImage.src}
                    alt="Imagen grande"
                    layout="responsive"
                    width={800} // Puedes ajustar estos valores según el diseño
                    height={600}
                    className="object-contain rounded-lg"
                  />
                )}
                <button
                  onClick={goToPreviousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-yellow-500 bg-opacity-50 p-2 rounded-full hover:bg-yellow-400"
                >
                  &lt;
                </button>
                <button
                  onClick={goToNextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-yellow-500 bg-opacity-50 p-2 rounded-full hover:bg-yellow-400"
                >
                  &gt;
                </button>
              </ModalBody>
              <ModalFooter className="p-2">
                {/* Footer content here if needed */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Galeria;
