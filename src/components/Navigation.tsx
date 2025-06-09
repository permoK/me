'use client';

import { motion } from 'framer-motion';
import { fadeIn } from '@/lib/animations';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onSlideChange: (index: number) => void;
}

const slideLabels = ['Home', 'About', 'Work', 'Skills', 'Contact'];

export default function Navigation({ currentSlide, totalSlides, onSlideChange }: NavigationProps) {
  return (
    <>
      {/* Desktop Navigation Bar */}
      <motion.nav
        className="fixed top-12 left-1/2 w-[60vw] transform -translate-x-1/2 z-[100] hidden sm:block"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div
          className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full shadow-lg"
          style={{
            padding: '1rem 3rem',
            minWidth: '800px'
          }}
        >
          <div className="flex items-center justify-between" style={{ height: '3rem' }}>
            {/* Logo/Brand - Left Side */}
            <div style={{ marginRight: '4rem' }}>
              <motion.div
                className="text-white font-light tracking-widest"
                whileHover={{ scale: 1.05 }}
              >
                ALEX CHEN
              </motion.div>
            </div>

            {/* Navigation Menu */}
            <div className="flex items-center" style={{ gap: '3rem' }}>
              {slideLabels.map((label, index) => (
                <motion.button
                  key={index}
                  onClick={() => onSlideChange(index)}
                  className={`relative text-sm font-medium tracking-wide transition-all duration-300 rounded-full ${currentSlide === index
                    ? 'text-white bg-white/10'
                    : 'text-white/80 hover:text-white hover:bg-white/5'
                    }`}
                  style={{
                    padding: '0.75rem .75rem'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label}

                  {/* Active indicator */}
                  {currentSlide === index && (
                    <motion.div
                      className="absolute w-1 h-1 bg-white rounded-full"
                      style={{
                        bottom: '-0.25rem',
                        left: '50%',
                        transform: 'translateX(-50%)'
                      }}
                      layoutId="activeIndicator"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </motion.nav>



      {/* Mobile Navigation */}
      <motion.div
        className="fixed top-8 left-1/2 transform -translate-x-1/2 z-[100] sm:hidden"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-lg">
          <div className="flex items-center justify-between h-8 min-w-[280px]">
            {/* Logo/Brand - Mobile */}
            <motion.div
              className="text-white font-light text-base tracking-widest"
              whileHover={{ scale: 1.05 }}
            >
              ALEX CHEN
            </motion.div>

            {/* Mobile Menu Indicator */}
            <div className="flex items-center space-x-2">
              <span className="text-white/80 text-xs font-light">
                {slideLabels[currentSlide]}
              </span>
              <div className="text-white/60 text-xs font-mono">
                {String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Dots */}
      <motion.div
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-[90] sm:hidden"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="flex items-center space-x-3 bg-black/80 backdrop-blur-md px-4 py-3 rounded-full border border-white/20">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index
                ? 'bg-white scale-125'
                : 'bg-white/40 hover:bg-white/70'
                }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>
    </>
  );
}
