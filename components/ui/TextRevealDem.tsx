import TextReveal from "@/components/magicui/text-reveal";
import { FC } from "react";

const TextRevealDemo: FC = () => {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg  bg-transparent text-center justify-content-center ">
      <TextReveal text="Encuentra  el  servicio  que  necesitas  en  poco  tiempo" />
    </div>
  );
};

export default TextRevealDemo;
