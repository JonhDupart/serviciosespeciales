import TextReveal from "@/components/magicui/text-reveal";
import { FC } from "react";

const TextRevealDemo: FC = () => {
  return (
    <div className="z-10 flex min-h-[16rem] items-center justify-center rounded-lg  bg-transparent  ">
      <TextReveal text="'Descubre cómo hemos transformado hogares y espacios comerciales con dedicación y excelencia.'" />
    </div>
  );
};

export default TextRevealDemo;
