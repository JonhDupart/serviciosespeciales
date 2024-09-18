'use client';

import { motion } from 'framer-motion';
import { textContainer, textVariant2 } from '../utils/motion';
import React from 'react'; // Asegúrate de importar React

// Define the types for the component props
interface TypingTextProps {
  title: React.ReactNode; // Cambiado a React.ReactNode para aceptar JSX
  textStyles?: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-[14px] text-secondary-white ${textStyles || ''}`}
  >
    {Array.from(String(title)).map((letter, i) => (
      <motion.span variants={textVariant2} key={i}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
);

interface TitleTextProps {
  title: React.ReactNode; // Cambiado a React.ReactNode para aceptar JSX
  textStyles?: string;
}

export const TitleText: React.FC<TitleTextProps> = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial="hidden"
    whileInView="show"
    className={`mt-[0px] font-bold text-[28px] sm:text-[32px] md:text-[38px] lg:text-[44px]  mb-0 ${textStyles || ''}`}
  >
    {title}
  </motion.h2>
);
