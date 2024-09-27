import React from 'react';
import { motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const AnimatedHouse: React.FC<{ width?: number; height?: number; color?: string }> = ({ width = 100, height = 100, color = '#000' }) => {
    const { ref, inView } = useInView({ threshold: 0.1 });

    const lineVariants = {
        hidden: { strokeDasharray: '1000', strokeDashoffset: '1000' },
        visible: { strokeDashoffset: 0 },
    };

    return (
        <svg
            ref={ref}
            width={width}
            height={height}
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
        >
            {/* Techo */}
            <motion.line
                x1="20" y1="40" x2="50" y2="10"
                stroke={color}
                strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 1 }}
            />
            <motion.line
                x1="50" y1="10" x2="80" y2="40"
                stroke={color}
                strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 1, delay: 0.2 }}
            />
            {/* Paredes */}
            <motion.rect
                x="20" y="40" width="60" height="40"
                fill="none" stroke={color} strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 1, delay: 0.4 }}
            />
            {/* Puerta */}
            <motion.rect
                x="40" y="60" width="20" height="20"
                fill="none" stroke={color} strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 1, delay: 0.6 }}
            />
            {/* Ventanas */}
            <motion.rect
                x="25" y="50" width="15" height="15"
                fill="none" stroke={color} strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 1, delay: 0.8 }}
            />
            <motion.rect
                x="60" y="50" width="15" height="15"
                fill="none" stroke={color} strokeWidth="2"
                variants={lineVariants}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                transition={{ duration: 1, delay: 1 }}
            />
        </svg>
    );
};

export default AnimatedHouse;
