import React, { useEffect } from 'react';
import { motion } from 'motion/react';

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  useEffect(() => {
    // Ensure page starts at top when this component mounts (prevents landing at footer)
    try {
      window.scrollTo({ top: 0, left: 0 });
    } catch (e) {
      // ignore
    }
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
