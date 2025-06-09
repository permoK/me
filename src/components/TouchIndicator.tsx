'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function TouchIndicator() {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    // Hide indicator after user interacts
    const handleTouch = () => setShowIndicator(false);
    const handleScroll = () => setShowIndicator(false);
    
    window.addEventListener('touchstart', handleTouch);
    window.addEventListener('wheel', handleScroll);
    
    // Auto hide after 5 seconds
    const timer = setTimeout(() => setShowIndicator(false), 5000);
    
    return () => {
      window.removeEventListener('touchstart', handleTouch);
      window.removeEventListener('wheel', handleScroll);
      clearTimeout(timer);
    };
  }, []);

  if (!showIndicator) return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center sm:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 2 }}
    >
      <motion.div
        className="bg-black/80 backdrop-blur-md rounded-2xl px-6 py-4 border border-white/20"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ delay: 2.5 }}
      >
        <div className="flex flex-col items-center space-y-3 text-white">
          <motion.div
            className="flex flex-col items-center space-y-2"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-2xl">☝️</span>
            <span className="text-sm font-light tracking-wider text-center">SCROLL TO NAVIGATE</span>
          </motion.div>
          <div className="flex items-center space-x-4 text-white/60 text-xs">
            <span>↑</span>
            <span>PREVIOUS</span>
            <span>•</span>
            <span>NEXT</span>
            <span>↓</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
