import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLocation } from 'react-router-dom';
import { pageTransition } from '../motion/variants';

export default function PageTransition({ children }) {
  const { pathname } = useLocation();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className="page-transition-shell">{children}</div>;
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        className="page-transition-shell"
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
