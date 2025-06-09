// Animation variants for horizontal sliding portfolio
export const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 1000 : -1000,
    opacity: 0
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? 1000 : -1000,
    opacity: 0
  })
};

export const slideTransition = {
  x: { type: "spring", stiffness: 300, damping: 30 },
  opacity: { duration: 0.2 }
};

// Text animations
export const textReveal = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
};

export const staggerText = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export const letterReveal = {
  initial: { y: 100, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Navigation dot animations
export const dotScale = {
  initial: { scale: 1 },
  hover: { scale: 1.2 },
  active: { scale: 1.5 }
};

// Fade animations
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Scale animations
export const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Wipe animations
export const wipeLeft = {
  initial: { clipPath: "inset(0 100% 0 0)" },
  animate: {
    clipPath: "inset(0 0% 0 0)",
    transition: { duration: 1, ease: "easeInOut" }
  }
};

// Blur effects
export const blurIn = {
  initial: { filter: "blur(10px)", opacity: 0 },
  animate: {
    filter: "blur(0px)",
    opacity: 1,
    transition: { duration: 0.8 }
  }
};

// Spin animations
export const spinSlow = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }
  }
};

// Flip animations
export const flipY = {
  initial: { rotateY: -90, opacity: 0 },
  animate: {
    rotateY: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

// Fold animations
export const foldDown = {
  initial: {
    scaleY: 0,
    transformOrigin: "top"
  },
  animate: {
    scaleY: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};
