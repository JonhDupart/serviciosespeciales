// components/ui/Iphone15Pro.tsx
import { SVGProps } from "react";
import Image from "next/image";

export interface Iphone15ProProps extends SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  src?: string;
}

const Iphone15Pro = ({
  width = 433,
  height = 882,
  src,
  ...props
}: Iphone15ProProps) => {
  return (
    <div className="relative" style={{ width, height }}>
      {src ? (
        <Image
          src={src}
          alt="iPhone 15 Pro"
          layout="fill" // Asegúrate de que cubra todo el contenedor
          objectFit="cover" // Mantiene el aspecto
          className="rounded-[55.75px] z-10" // Para bordes redondeados
        />
      ) : (
        <svg
          width={width}
          height={height}
          viewBox={`0 0 ${width} ${height}`}
          fill="none"
        
          {...props}
        >
          <path
            d="M2 73C2 32.6832 34.6832 0 75 0H357C397.317 0 430 32.6832 430 73V809C430 849.317 397.317 882 357 882H75C34.6832 882 2 849.317 2 809V73Z"
            className="fill-[#E5E5E5] dark:fill-[#404040]"
          />
          {/* Aquí van los demás elementos SVG */}
        </svg>
      )}
    </div>
  );
};

export default Iphone15Pro;
