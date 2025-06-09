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

      // Improve text rendering
      document.body.style.textRendering = 'optimizeLegibility';
      document.body.style.webkitFontSmoothing = 'antialiased';
      document.body.style.mozOsxFontSmoothing = 'grayscale';

      // Enhance contrast for better readability
      const style = document.createElement('style');
      style.textContent = `
        .text-enhanced {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
        }

        /* Better contrast ratios */
        .text-white\\/40 { color: rgba(255, 255, 255, 0.75) !important; }
        .text-white\\/60 { color: rgba(255, 255, 255, 0.85) !important; }
        .text-gray-300 { color: rgb(229, 231, 235) !important; }
        .text-gray-400 { color: rgb(209, 213, 219) !important; }
      `;
      document.head.appendChild(style);
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
