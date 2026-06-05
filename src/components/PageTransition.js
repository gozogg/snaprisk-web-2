import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useLocation, useOutlet } from 'react-router-dom';
import { pageTransition } from '../motion/variants';

export default function PageTransition() {
  const location = useLocation();
  const outlet = useOutlet();
  const reducedMotion = useReducedMotion();

  if (reducedMotion) {
    return <div className="page-transition-shell">{outlet}</div>;
  }

  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={location.key}
        className="page-transition-shell"
        initial={pageTransition.initial}
        animate={pageTransition.animate}
        exit={pageTransition.exit}
      >
        {outlet}
      </motion.div>
    </AnimatePresence>
  );
}
