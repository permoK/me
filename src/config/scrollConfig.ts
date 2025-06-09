export type ScrollDirection = 'horizontal' | 'vertical';

export interface SlideConfig {
  id: string;
  scrollDirection: ScrollDirection;
  component: React.ComponentType;
}

// Configuration for each section's scroll behavior
export const scrollConfig: SlideConfig[] = [
  {
    id: 'hero',
    scrollDirection: 'horizontal', // Hero slides in horizontally
    component: () => null // Will be set in PortfolioSlider
  },
  {
    id: 'about',
    scrollDirection: 'vertical', // About scrolls vertically
    component: () => null
  },
  {
    id: 'projects',
    scrollDirection: 'horizontal', // Projects slide horizontally
    component: () => null
  },
  {
    id: 'skills',
    scrollDirection: 'vertical', // Skills scroll vertically
    component: () => null
  },
  {
    id: 'contact',
    scrollDirection: 'horizontal', // Contact slides horizontally
    component: () => null
  }
];

// Animation variants for different scroll directions
export const horizontalVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.95
  })
};

export const verticalVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.98
  }),
  center: {
    zIndex: 1,
    y: 0,
    opacity: 1,
    scale: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    y: direction < 0 ? 1000 : -1000,
    opacity: 0,
    scale: 0.98
  })
};

export const mixedTransition = {
  type: "tween",
  ease: [0.25, 0.46, 0.45, 0.94],
  duration: 0.6 // Slightly longer for vertical transitions
};
