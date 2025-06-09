'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  loadingContainer,
  loadingNameContainer,
  loadingLetterReveal,
  loadingSubtitle,
  loadingProgress
} from '@/lib/animations';

interface LoadingScreenProps {
  isLoading: boolean;
  onLoadingComplete: () => void;
}

export default function LoadingScreen({ isLoading, onLoadingComplete }: LoadingScreenProps) {
  const name = "ALEX CHEN";
  const subtitle = "CREATIVE DEVELOPER";

  // Auto-complete loading after animation sequence
  React.useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 5000); // 5 seconds for full professional sequence

      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  return (
    <AnimatePresence mode="wait">
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 bg-black flex items-center justify-center overflow-hidden"
          variants={loadingContainer}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          {/* Sophisticated background */}
          <div className="absolute inset-0">
            {/* Primary gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-950 to-black" />

            {/* Subtle radial gradient overlay */}
            <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

            {/* Animated grid pattern */}
            <motion.div
              className="absolute inset-0 opacity-[0.015]"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%'],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: `
                  linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                `,
                backgroundSize: '50px 50px'
              }}
            />
          </div>

          {/* Main content container */}
          <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
            {/* Company/Brand mark */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.1, ease: [0.215, 0.61, 0.355, 1] }}
              className="mb-16"
            >
              <motion.div
                className="w-12 h-12 mx-auto mb-4 border border-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <motion.div
                  className="w-6 h-6 bg-white rounded-sm"
                  animate={{
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Animated name with professional typography */}
            <motion.div
              className="mb-8"
              variants={loadingNameContainer}
              initial="initial"
              animate="animate"
            >
              <motion.h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-[0.2em] leading-none">
                {name.split('').map((letter, index) => (
                  <motion.span
                    key={index}
                    variants={loadingLetterReveal}
                    className="inline-block"
                    style={{
                      marginRight: letter === ' ' ? '0.4em' : '0',
                      fontWeight: '300',
                      letterSpacing: '0.1em'
                    }}
                  >
                    {letter === ' ' ? '\u00A0' : letter}
                  </motion.span>
                ))}
              </motion.h1>
            </motion.div>

            {/* Elegant subtitle */}
            <motion.div
              variants={loadingSubtitle}
              initial="initial"
              animate="animate"
              className="text-sm sm:text-base font-light tracking-[0.3em] text-white/60 uppercase mb-16"
            >
              {subtitle}
            </motion.div>

            {/* Sophisticated progress indicator */}
            <motion.div
              className="flex justify-center mb-8"
              variants={loadingProgress}
              initial="initial"
              animate="animate"
            >
              <div className="relative w-64 h-px bg-white/10">
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
                  style={{ transformOrigin: 'left' }}
                />
                <motion.div
                  className="absolute left-0 top-1/2 w-1 h-1 bg-white rounded-full -translate-y-1/2"
                  animate={{
                    x: [0, 256, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 2
                  }}
                />
              </div>
            </motion.div>

            {/* Minimal loading text with pulse effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="relative"
            >
              {/* Pulse rings */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[0, 1, 2].map((index) => (
                  <motion.div
                    key={index}
                    className="absolute w-32 h-32 border border-white/5 rounded-full"
                    animate={{
                      scale: [1, 2, 1],
                      opacity: [0.3, 0, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      delay: index * 1,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </div>

              <div className="relative text-xs font-light tracking-widest text-white/40 uppercase">
                Loading Experience
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
