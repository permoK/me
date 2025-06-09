'use client';

import { motion } from 'framer-motion';

interface ScrollDirectionIndicatorProps {
  scrollDirection: 'horizontal' | 'vertical';
  currentSlide: number;
  totalSlides: number;
}

export default function ScrollDirectionIndicator({ 
  scrollDirection, 
  currentSlide, 
  totalSlides 
}: ScrollDirectionIndicatorProps) {
  return (
    <motion.div
      className="fixed top-6 right-6 z-[90] hidden lg:block"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5 }}
    >
      <div className="bg-black/80 backdrop-blur-md rounded-xl px-4 py-3 border border-white/20">
        <div className="flex items-center space-x-3">
          {/* Direction Icon */}
          <motion.div
            key={scrollDirection}
            className="w-6 h-6 flex items-center justify-center"
            initial={{ rotate: 0 }}
            animate={{ rotate: scrollDirection === 'vertical' ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {scrollDirection === 'horizontal' ? (
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-white/80"
              >
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            ) : (
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                className="text-white/80"
              >
                <path d="M12 5v14"/>
                <path d="m19 12-7 7-7-7"/>
              </svg>
            )}
          </motion.div>
          
          {/* Direction Label */}
          <motion.span
            key={scrollDirection}
            className="text-white/80 text-xs font-light tracking-wider uppercase"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {scrollDirection}
          </motion.span>
          
          {/* Slide Counter */}
          <div className="text-white/60 text-xs font-mono">
            {String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
