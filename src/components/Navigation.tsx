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
        className="fixed top-0 left-0 right-0 z-[100] bg-black/90 backdrop-blur-md border-b border-white/10"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <motion.div
              className="text-white font-light text-lg sm:text-xl tracking-widest"
              whileHover={{ scale: 1.05 }}
            >
              ALEX CHEN
            </motion.div>

            {/* Navigation Menu - Desktop */}
            <div className="hidden lg:flex items-center space-x-8 xl:space-x-12">
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

            {/* Mobile Current Section Display */}
            <div className="lg:hidden flex items-center space-x-3">
              <span className="text-white/60 text-sm font-light">
                {slideLabels[currentSlide].toUpperCase()}
              </span>
              <div className="text-white/40 text-xs font-mono">
                {String(currentSlide + 1).padStart(2, '0')}/{String(totalSlides).padStart(2, '0')}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Side Progress Indicator - Desktop Only */}
      <motion.div
        className="fixed right-4 sm:right-6 lg:right-8 top-1/2 transform -translate-y-1/2 z-[90] hidden sm:block"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="flex flex-col items-center space-y-4">
          {/* Progress Line */}
          <div className="relative w-px h-24 sm:h-32 bg-white/20">
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
        className="fixed bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-[90] sm:hidden"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      >
        <div className="flex items-center space-x-4 bg-black/70 backdrop-blur-md px-6 py-4 rounded-full border border-white/20">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <motion.button
              key={index}
              onClick={() => onSlideChange(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
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

      {/* Touch Scroll Hint for Mobile */}
      <motion.div
        className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-[80] sm:hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <div className="text-white/40 text-xs font-light tracking-wider text-center">
          <div className="flex flex-col items-center space-y-1">
            <div className="flex items-center space-x-2">
              <span>↑</span>
              <span>SCROLL TO NAVIGATE</span>
              <span>↓</span>
            </div>
            <div className="text-white/30 text-xs">
              UP: Previous • DOWN: Next
            </div>
          </div>
        </div>
      </motion.div>

      {/* Keyboard Hint - Desktop Only */}
      <motion.div
        className="fixed bottom-6 sm:bottom-8 right-4 sm:right-6 lg:right-8 text-white/30 text-xs font-light tracking-wider z-[80] hidden sm:block"
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
