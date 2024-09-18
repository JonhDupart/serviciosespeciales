import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles';
import { fadeIn } from '../utils/motion';

interface ExploreCardProps {
  id: string;
  imgUrl: string;
  title: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

const ExploreCard: React.FC<ExploreCardProps> = ({
  id,
  imgUrl,
  title,
  index,
  active,
  handleClick
}) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.7, 0.75)}
    className={`relative  ${
      active === id ? 'lg:flex-[3.5] flex-[10]' : 'lg:flex-[0.1] flex-[2]'
    }  flex items-center justify-center min-w-[60px] h-[400px]  transition-[flex] duration-[0.3s] ease-out cursor-pointer `}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[5px]"
    />

    {active !== id ? (
    <h3 className=" font-semibold sm:text-[26px] text-[18px] text-white bg-[rgba(0,0,0,0.1)] absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0] pl-4 pr-8 rounded-md  flex items-center justify-center">
    {title}
  </h3>
  
    ) : (
      <div className="absolute bottom-0 p-4 justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[4px]">
        <div className={`${styles.flexCenter} mb-[6px] rounded-[1px]`}>
        </div>
        <p className="font-normal text-[16px] leading-[20.16px] text-yellow-500 uppercase">S E P S C</p>
        <h2 className="mt-[4px] font-semibold sm:text-[32px] text-[24px] text-white">
          {title}
        </h2>
      </div>
    )}
  </motion.div>
);

export default ExploreCard;
