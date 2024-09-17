import { cn } from "@/lib/utils";

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number; // Usaremos un valor fijo en lugar de Infinity
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 10, // Usa un valor fijo para el repeat
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
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
          gap: "var(--gap)",
          width: vertical ? "10%" : `calc(30% )`, // Ajusta el width para repetir el contenido
        }}
      >
        {Array(repeat).fill(0).map((_, i) => (
          <div
            key={i}
            className="flex items-center"
            style={{
              display: "flex",
              flexDirection: vertical ? "column" : "row",
              gap: "var(--gap)",
            }}
          >
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}
