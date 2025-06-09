'use client';

import { useEffect } from 'react';

export default function PerformanceOptimizer() {
  useEffect(() => {
    // Optimize for smooth animations and performance
    const optimizePerformance = () => {
      // Enable hardware acceleration for better performance
      document.body.style.transform = 'translateZ(0)';
      document.body.style.backfaceVisibility = 'hidden';
      document.body.style.willChange = 'transform';

      // Optimize scroll behavior
      document.documentElement.style.scrollBehavior = 'smooth';

      // Reduce motion for users who prefer it
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
      if (prefersReducedMotion.matches) {
        document.documentElement.style.scrollBehavior = 'auto';
        // Reduce animation durations for accessibility
        document.documentElement.style.setProperty('--animation-duration', '0.1s');
      }

      // Optimize touch events for mobile
      if ('ontouchstart' in window) {
        document.body.style.touchAction = 'none';
        document.body.style.webkitOverflowScrolling = 'touch';
        document.body.style.webkitTapHighlightColor = 'transparent';
      }

      // Optimize for high refresh rate displays
      if (window.screen && 'refreshRate' in window.screen) {
        document.documentElement.style.setProperty('--refresh-rate', `${(window.screen as any).refreshRate}Hz`);
      }
    };

    // Apply optimizations
    optimizePerformance();

    // Cleanup function
    return () => {
      // Reset critical styles if component unmounts
      document.body.style.willChange = 'auto';
    };
  }, []);

  return null; // This component doesn't render anything
}
