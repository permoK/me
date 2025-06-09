'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface ScrollTransitionEffectProps {
  scrollDirection: 'horizontal' | 'vertical';
  isTransitioning: boolean;
}

export default function ScrollTransitionEffect({ 
  scrollDirection, 
  isTransitioning 
}: ScrollTransitionEffectProps) {
  const [showEffect, setShowEffect] = useState(false);

  useEffect(() => {
    if (isTransitioning) {
      setShowEffect(true);
      const timer = setTimeout(() => setShowEffect(false), 1000);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <AnimatePresence>
      {showEffect && (
        <motion.div
          className="fixed inset-0 z-[100] pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Directional Flow Effect */}
          <div className="absolute inset-0 overflow-hidden">
            {scrollDirection === 'horizontal' ? (
              // Horizontal flow lines
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`h-${i}`}
                    className="absolute h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    style={{
                      top: `${20 + i * 15}%`,
                      width: '100%',
                    }}
                    initial={{ x: '-100%' }}
                    animate={{ x: '100%' }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: 'easeOut'
                    }}
                  />
                ))}
              </>
            ) : (
              // Vertical flow lines
              <>
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={`v-${i}`}
                    className="absolute w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"
                    style={{
                      left: `${20 + i * 15}%`,
                      height: '100%',
                    }}
                    initial={{ y: '-100%' }}
                    animate={{ y: '100%' }}
                    transition={{
                      duration: 0.8,
                      delay: i * 0.1,
                      ease: 'easeOut'
                    }}
                  />
                ))}
              </>
            )}
          </div>

          {/* Center Direction Indicator */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            initial={{ scale: 0, rotate: 0 }}
            animate={{ 
              scale: [0, 1.2, 1], 
              rotate: scrollDirection === 'vertical' ? 90 : 0 
            }}
            exit={{ scale: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="bg-black/80 backdrop-blur-md rounded-full p-4 border border-white/30">
              <svg 
                width="32" 
                height="32" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-white"
              >
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </div>
          </motion.div>

          {/* Direction Label */}
          <motion.div
            className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="bg-black/80 backdrop-blur-md rounded-lg px-4 py-2 border border-white/20">
              <span className="text-white/90 text-sm font-light tracking-wider uppercase">
                {scrollDirection} SCROLL
              </span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
