'use client';

import { useState, useEffect, useCallback, useRef } from 'react';

export const useHorizontalSlider = (totalSlides: number) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(0);
  const scrollCooldown = 150; // Reduced cooldown for smoother navigation

  const nextSlide = useCallback(() => {
    const now = Date.now();
    if (currentSlide < totalSlides - 1 && !isTransitioning && now - lastScrollTime.current > scrollCooldown) {
      lastScrollTime.current = now;
      setIsTransitioning(true);
      setDirection(1);
      setCurrentSlide(prev => prev + 1);

      // Reset transition state after animation
      setTimeout(() => setIsTransitioning(false), 400);
    }
  }, [currentSlide, totalSlides, isTransitioning]);

  const prevSlide = useCallback(() => {
    const now = Date.now();
    if (currentSlide > 0 && !isTransitioning && now - lastScrollTime.current > scrollCooldown) {
      lastScrollTime.current = now;
      setIsTransitioning(true);
      setDirection(-1);
      setCurrentSlide(prev => prev - 1);

      // Reset transition state after animation
      setTimeout(() => setIsTransitioning(false), 400);
    }
  }, [currentSlide, isTransitioning]);

  const goToSlide = useCallback((slideIndex: number) => {
    if (slideIndex !== currentSlide && slideIndex >= 0 && slideIndex < totalSlides && !isTransitioning) {
      setIsTransitioning(true);
      setDirection(slideIndex > currentSlide ? 1 : -1);
      setCurrentSlide(slideIndex);

      // Reset transition state after animation
      setTimeout(() => setIsTransitioning(false), 400);
    }
  }, [currentSlide, totalSlides, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') {
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        prevSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  // Optimized wheel event for smoother scrolling with momentum
  useEffect(() => {
    let accumulatedDelta = 0;
    let velocityRef = 0;
    let lastTime = 0;
    let momentumTimeout: NodeJS.Timeout;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      const now = Date.now();
      const timeDiff = now - lastTime;

      // Calculate velocity (pixels per millisecond)
      if (timeDiff > 0) {
        velocityRef = Math.abs(e.deltaY) / timeDiff;
      }

      // Accumulate delta for smoother detection
      accumulatedDelta += e.deltaY;
      lastTime = now;

      // Clear existing momentum timeout
      if (momentumTimeout) {
        clearTimeout(momentumTimeout);
      }

      // Set momentum timeout
      momentumTimeout = setTimeout(() => {
        const threshold = 30;
        const velocityThreshold = 0.3;

        // Only trigger if we have enough accumulated delta and velocity
        if (Math.abs(accumulatedDelta) > threshold && velocityRef > velocityThreshold) {
          if (accumulatedDelta > 0) {
            nextSlide();
          } else {
            prevSlide();
          }
        }

        // Reset accumulator
        accumulatedDelta = 0;
        velocityRef = 0;
      }, 80); // Wait for momentum to settle
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (momentumTimeout) clearTimeout(momentumTimeout);
    };
  }, [nextSlide, prevSlide]);

  // Optimized touch events for smoother mobile experience
  useEffect(() => {
    let touchMoveDistance = 0;
    const minSwipeDistance = 30; // Reduced for more responsive touch

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      isScrolling.current = false;
      touchMoveDistance = 0;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStartX.current || !touchStartY.current) return;

      const touchCurrentX = e.touches[0].clientX;
      const touchCurrentY = e.touches[0].clientY;
      const diffX = touchStartX.current - touchCurrentX;
      const diffY = touchStartY.current - touchCurrentY;

      // Track total movement distance
      touchMoveDistance = Math.max(touchMoveDistance, Math.abs(diffY), Math.abs(diffX));

      // On mobile, handle vertical scrolling for navigation
      if (window.innerWidth < 768) {
        // Determine if this is primarily a vertical scroll
        if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 5) {
          e.preventDefault();
          isScrolling.current = true;
        }
      } else {
        // On tablet/desktop, handle horizontal scrolling
        if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 5) {
          e.preventDefault();
          isScrolling.current = true;
        }
      }
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (!touchStartX.current || !touchStartY.current) return;

      const touchEndX = e.changedTouches[0].clientX;
      const touchEndY = e.changedTouches[0].clientY;
      const diffX = touchStartX.current - touchEndX;
      const diffY = touchStartY.current - touchEndY;

      // Only process if we've moved enough distance and were scrolling
      if (isScrolling.current && touchMoveDistance > minSwipeDistance) {
        if (window.innerWidth < 768) {
          // Mobile: Handle vertical swipes (like normal scrolling)
          if (Math.abs(diffY) > Math.abs(diffX)) {
            if (diffY > 0) {
              nextSlide();
            } else {
              prevSlide();
            }
          }
        } else {
          // Tablet/Desktop: Handle horizontal swipes
          if (Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) {
              nextSlide();
            } else {
              prevSlide();
            }
          }
        }
      }

      // Reset touch values
      touchStartX.current = null;
      touchStartY.current = null;
      isScrolling.current = false;
      touchMoveDistance = 0;
    };

    // Add touch event listeners with optimized passive settings
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [nextSlide, prevSlide]);

  return {
    currentSlide,
    direction,
    nextSlide,
    prevSlide,
    goToSlide,
    isFirst: currentSlide === 0,
    isLast: currentSlide === totalSlides - 1
  };
};
