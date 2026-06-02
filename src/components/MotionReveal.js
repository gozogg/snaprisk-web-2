import { motion, useReducedMotion } from 'framer-motion';
import { defaultViewport, fadeUp } from '../motion/variants';

const TAG_MAP = {
  section: motion.section,
  article: motion.article,
  div: motion.div,
};

export default function MotionReveal({
  as = 'div',
  children,
  className = '',
  delay = 0,
  viewport = defaultViewport,
}) {
  const reducedMotion = useReducedMotion();
  const Component = TAG_MAP[as] ?? motion.div;

  if (reducedMotion) {
    const StaticTag = as === 'section' ? 'section' : as === 'article' ? 'article' : 'div';
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      transition={{ delay }}
    >
      {children}
    </Component>
  );
}
