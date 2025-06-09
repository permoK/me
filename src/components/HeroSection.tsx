'use client';

import { motion } from 'framer-motion';
import { textReveal, staggerText, letterReveal, fadeIn } from '@/lib/animations';

export default function HeroSection() {
  const name = "ALEX CHEN";
  const title = "CREATIVE DEVELOPER";
  const subtitle = "& DIGITAL ARTIST";

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"
        variants={fadeIn}
        initial="initial"
        animate="animate"
      />

      {/* Main content */}
      <div className="relative z-10 text-center text-white">
        {/* Main name */}
        <motion.div
          className="mb-4"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          <motion.h1 className="text-6xl md:text-8xl font-bold tracking-wider">
            {name.split('').map((letter, index) => (
              <motion.span
                key={index}
                variants={letterReveal}
                className="inline-block"
                style={{ marginRight: letter === ' ' ? '0.5em' : '0' }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Title */}
        <motion.div
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-xl md:text-2xl font-light tracking-widest text-gray-300 mb-2">
            {title}
          </h2>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          variants={textReveal}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.7 }}
        >
          <h3 className="text-xl md:text-2xl font-light tracking-widest text-gray-300">
            {subtitle}
          </h3>
        </motion.div>

        {/* Decorative line */}
        <motion.div
          className="w-24 h-px bg-white mx-auto mt-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        />
      </div>

      {/* Bottom text */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-light tracking-wider"
        variants={textReveal}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.2 }}
      >
        SCROLL TO EXPLORE
      </motion.div>

      {/* Right side text */}
      <motion.div
        className="absolute right-8 top-1/2 transform -translate-y-1/2 text-white/40 text-xs font-light tracking-widest"
        style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
        variants={textReveal}
        initial="initial"
        animate="animate"
        transition={{ delay: 1.4 }}
      >
        PORTFOLIO 2024
      </motion.div>
    </div>
  );
}
