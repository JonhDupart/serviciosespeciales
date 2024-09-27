import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number; 
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 12, 
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden ",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      <div
        className={cn(
          "flex",
          {
            "animate-marquee": !vertical && !reverse,
            "animate-marquee-reverse": !vertical && reverse,
            "animate-marquee-vertical": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
          }
        )}
        style={{
          display: "flex",
          flexDirection: vertical ? "column" : "row",
          gap: "5px", // Asegúrate de que el gap esté definido aquí
          width: vertical ? "100%" : `calc(100%)`, // Ajusta el width para repetir el contenido
        }}
      >
        {Array(repeat).fill(0).map((_, i) => (
          <div
            key={i}
            className=""
            style={{
              display: "flex",
              flexDirection: vertical ? "column" : "row",
              gap: "5px", // Asegúrate de que el gap esté definido aquí
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
