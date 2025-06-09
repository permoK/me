'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useHorizontalSlider } from '@/hooks/useScrollSpy';
import { slideVariants, slideTransition } from '@/lib/animations';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';

const slides = [
  { id: 'hero', component: HeroSection },
  { id: 'about', component: AboutSection },
  { id: 'work', component: ProjectSection },
  { id: 'skills', component: SkillsSection },
  { id: 'contact', component: ContactSection }
];

export default function PortfolioSlider() {
  const { currentSlide, direction, goToSlide } = useHorizontalSlider(slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Navigation */}
      <Navigation 
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={goToSlide}
      />

      {/* Slides Container */}
      <div className="relative w-full h-full z-10">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="absolute inset-0 w-full h-full z-10"
          >
            {(() => {
              const CurrentSlideComponent = slides[currentSlide].component;
              return <CurrentSlideComponent />;
            })()}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Keyboard navigation hint */}
      <motion.div
        className="fixed bottom-8 right-8 text-white/40 text-xs font-light tracking-wider z-[90]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
      >
        <div className="flex flex-col items-end space-y-1">
          <span>← → Navigate</span>
          <span>Scroll to change slides</span>
        </div>
      </motion.div>

      {/* Progress indicator */}
      <motion.div
        className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-[90]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        {slides.map((_, index) => (
          <motion.div
            key={index}
            className={`w-8 h-1 rounded-full transition-colors duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/20'
            }`}
            whileHover={{ scale: 1.2 }}
            onClick={() => goToSlide(index)}
            style={{ cursor: 'pointer' }}
          />
        ))}
      </motion.div>
    </div>
  );
}
