"use client";

import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function PageShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        className="page-wrap"
        initial={{ opacity: 0, y: 8, filter: 'grayscale(100%)' }}
        animate={{ opacity: 1, y: 0, filter: 'grayscale(0%)' }}
        exit={{ opacity: 0, y: -8, filter: 'grayscale(100%)' }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
