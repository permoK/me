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
      {/* Top Navigation Bar */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[100] bg-black/80 backdrop-blur-md border-b border-white/10"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <motion.div
              className="text-white font-light text-xl tracking-widest"
              whileHover={{ scale: 1.05 }}
            >
              ALEX CHEN
            </motion.div>

            {/* Navigation Menu */}
            <div className="hidden md:flex items-center space-x-12">
              {slideLabels.map((label, index) => (
                <motion.button
                  key={index}
                  onClick={() => onSlideChange(index)}
                  className={`relative text-sm font-light tracking-wider transition-all duration-300 ${
                    currentSlide === index
                      ? 'text-white'
                      : 'text-white/60 hover:text-white/90'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {label.toUpperCase()}

                  {/* Active indicator */}
                  {currentSlide === index && (
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-px bg-white"
                      layoutId="activeIndicator"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-white"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-px bg-white"></div>
                <div className="w-full h-px bg-white"></div>
                <div className="w-full h-px bg-white"></div>
              </div>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Side Progress Indicator */}
      <motion.div
        className="fixed right-8 top-1/2 transform -translate-y-1/2 z-[90]"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Progress Line */}
          <div className="relative w-px h-32 bg-white/20">
            <motion.div
              className="absolute top-0 left-0 w-full bg-white origin-top"
              style={{ height: `${((currentSlide + 1) / totalSlides) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>

          {/* Current/Total Counter */}
          <div className="text-white/60 text-xs font-mono tracking-wider">
            <div className="text-center">
              <div className="text-white text-sm">
                {String(currentSlide + 1).padStart(2, '0')}
              </div>
              <div className="text-white/40 text-xs">
                {String(totalSlides).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Navigation Dots */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-[90] md:hidden"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="flex items-center space-x-3 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full border border-white/20">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? 'bg-white scale-125'
                  : 'bg-white/40 hover:bg-white/70'
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Keyboard Hint */}
      <motion.div
        className="fixed bottom-8 right-8 text-white/30 text-xs font-light tracking-wider z-[80]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <div className="flex flex-col items-end space-y-1">
          <span>← → Navigate</span>
          <span>Scroll to explore</span>
        </div>
      </motion.div>
    </>
  );
}
