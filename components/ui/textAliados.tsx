import TextReveal from "@/components/magicui/text-reveal";
import { FC } from "react";

const TextRevealDemo: FC = () => {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg ">
      <TextReveal text="CONTÁCTANOS" />
    </div>
  );
};

export default TextRevealDemo;
