'use client';

import { motion } from 'framer-motion';
import { dotScale, fadeIn } from '@/lib/animations';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

const slideLabels = ['Home', 'About', 'Work', 'Skills', 'Contact'];

export default function Navigation({ currentSlide, totalSlides, onSlideChange }: NavigationProps) {
  return (
    <motion.nav
      className="fixed left-8 top-1/2 transform -translate-y-1/2 z-[100]"
      variants={fadeIn}
      initial="initial"
      animate="animate"
    >
      <div className="flex flex-col space-y-6">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => onSlideChange(index)}
            className="group relative flex items-center"
            variants={dotScale}
            initial="initial"
            whileHover="hover"
            animate={currentSlide === index ? "active" : "initial"}
          >
            {/* Dot */}
            <motion.div
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white border-white'
                  : 'bg-transparent border-white/50 hover:border-white/80'
              }`}
            />

            {/* Label */}
            <motion.span
              className={`ml-4 text-sm font-medium transition-all duration-300 ${
                currentSlide === index
                  ? 'text-white opacity-100'
                  : 'text-white/60 opacity-0 group-hover:opacity-100'
              }`}
            >
              {slideLabels[index] || `Slide ${index + 1}`}
            </motion.span>

            {/* Active line */}
            {currentSlide === index && (
              <motion.div
                className="absolute left-0 w-8 h-0.5 bg-white rounded-full"
                layoutId="activeLine"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </motion.button>
        ))}
      </div>

      {/* Slide counter */}
      <motion.div
        className="mt-8 text-white/60 text-xs font-mono"
        variants={fadeIn}
      >
        {String(currentSlide + 1).padStart(2, '0')} / {String(totalSlides).padStart(2, '0')}
      </motion.div>
    </motion.nav>
  );
}
