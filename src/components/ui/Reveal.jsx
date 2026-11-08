import { motion } from 'framer-motion';

/** Fades/slides children in when they scroll into view. Respects reduced motion via MotionConfig. */
export default function Reveal({ children, delay = 0, y = 24, as = 'div', className = '', ...props }) {
  const Component = motion[as];
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
}
