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
import TouchIndicator from './TouchIndicator';
import ScrollIndicator from './ScrollIndicator';
import PerformanceOptimizer from './PerformanceOptimizer';

const slides = [
  { id: 'hero', component: HeroSection },
  { id: 'about', component: AboutSection },
  { id: 'work', component: ProjectSection },
  { id: 'skills', component: SkillsSection },
  { id: 'contact', component: ContactSection }
];

export default function PortfolioSlider() {
  const { currentSlide, direction, goToSlide, isFirst, isLast } = useHorizontalSlider(slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      {/* Performance Optimizer */}
      <PerformanceOptimizer />

      {/* Navigation */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={goToSlide}
      />

      {/* Touch Indicator for Mobile */}
      <TouchIndicator />

      {/* Mobile Scroll Indicator */}
      <ScrollIndicator
        currentSlide={currentSlide}
        totalSlides={slides.length}
        isFirst={isFirst}
        isLast={isLast}
      />

      {/* Slides Container */}
      <div className="relative w-full h-full z-10">
        <AnimatePresence
          initial={false}
          custom={direction}
          mode="popLayout"
          onExitComplete={() => {
            // Optional: Add any cleanup after transition
          }}
        >
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={slideTransition}
            className="absolute inset-0 w-full h-full z-10"
            style={{
              willChange: 'transform, opacity', // Optimize for animations
            }}
          >
            {(() => {
              const CurrentSlideComponent = slides[currentSlide].component;
              return <CurrentSlideComponent />;
            })()}
          </motion.div>
        </AnimatePresence>
      </div>


    </div>
  );
}
