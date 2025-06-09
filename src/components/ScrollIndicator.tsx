'use client';

import { motion } from 'framer-motion';

interface ScrollIndicatorProps {
  currentSlide: number;
  totalSlides: number;
  isFirst: boolean;
  isLast: boolean;
}

export default function ScrollIndicator({ currentSlide, totalSlides, isFirst, isLast }: ScrollIndicatorProps) {
  return (
    <motion.div
      className="fixed right-4 top-1/2 transform -translate-y-1/2 z-[85] sm:hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <div className="flex flex-col items-center space-y-3">
        {/* Up Arrow */}
        <motion.div
          className={`transition-opacity duration-300 ${isFirst ? 'opacity-40' : 'opacity-80'}`}
          animate={!isFirst ? { y: [0, -3, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="text-white"
            >
              <path d="m18 15-6-6-6 6"/>
            </svg>
          </div>
        </motion.div>

        {/* Progress Dots */}
        <div className="flex flex-col space-y-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.div
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white scale-125' 
                  : 'bg-white/30'
              }`}
              whileHover={{ scale: 1.2 }}
            />
          ))}
        </div>

        {/* Down Arrow */}
        <motion.div
          className={`transition-opacity duration-300 ${isLast ? 'opacity-40' : 'opacity-80'}`}
          animate={!isLast ? { y: [0, 3, 0] } : {}}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-6 flex items-center justify-center">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              className="text-white"
            >
              <path d="m6 9 6 6 6-6"/>
            </svg>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
