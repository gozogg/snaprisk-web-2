import { motion, useReducedMotion } from 'framer-motion';
import { heroContainer, heroItem } from '../motion/variants';

export default function HeroStagger({ className = '', children }) {
  const reducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={heroContainer}
      initial={reducedMotion ? false : 'hidden'}
      animate="visible"
    >
      {children}
    </motion.div>
  );
}

export function HeroStaggerItem({ className = '', children }) {
  return (
    <motion.div className={className} variants={heroItem}>
      {children}
    </motion.div>
  );
}
