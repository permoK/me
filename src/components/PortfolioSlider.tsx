'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useHorizontalSlider } from '@/hooks/useScrollSpy';
import { getDynamicVariants, getDynamicTransition } from '@/lib/animations';
import Navigation from './Navigation';
import HeroSection from './HeroSection';
import VerticalAboutSection from './VerticalAboutSection';
import ProjectSection from './ProjectSection';
import SkillsSection from './SkillsSection';
import ContactSection from './ContactSection';
import TouchIndicator from './TouchIndicator';
import ScrollIndicator from './ScrollIndicator';
import PerformanceOptimizer from './PerformanceOptimizer';

const slides = [
  { id: 'hero', component: HeroSection, scrollDirection: 'horizontal' as const },
  { id: 'about', component: VerticalAboutSection, scrollDirection: 'vertical' as const },
  { id: 'work', component: ProjectSection, scrollDirection: 'horizontal' as const },
  { id: 'skills', component: SkillsSection, scrollDirection: 'vertical' as const },
  { id: 'contact', component: ContactSection, scrollDirection: 'horizontal' as const }
];

export default function PortfolioSlider() {
  const { currentSlide, direction, goToSlide, isFirst, isLast } = useHorizontalSlider(slides.length);

  // Get current slide configuration
  const currentSlideConfig = slides[currentSlide];
  const dynamicVariants = getDynamicVariants(currentSlideConfig.scrollDirection);
  const dynamicTransition = getDynamicTransition(currentSlideConfig.scrollDirection);

  return (
    <div className="relative w-full h-screen overflow-hidden bg-black px-4 sm:px-6 lg:px-8">
      {/* Performance Optimizer */}
      <PerformanceOptimizer />

      {/* Navigation */}
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onSlideChange={goToSlide}
      />

      {/* Touch Indicator for Mobile */}
      <TouchIndicator scrollDirection={currentSlideConfig.scrollDirection} />

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
            variants={dynamicVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={dynamicTransition}
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
