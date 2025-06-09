'use client';

import { motion } from 'framer-motion';
import { textReveal, fadeInUp, staggerText, letterReveal } from '@/lib/animations';

export default function AboutSection() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-20 sm:pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">

        {/* Left side - Large "ABOUT" text */}
        <motion.div
          className="flex flex-col justify-center order-2 lg:order-1"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-6xl sm:text-8xl lg:text-9xl font-bold text-white/10 leading-none"
            variants={textReveal}
          >
            ABOUT
          </motion.h1>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          className="flex flex-col justify-center space-y-6 sm:space-y-8 order-1 lg:order-2"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-white mb-4 sm:mb-6">
              Creative Developer
            </h2>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6 text-gray-300 text-base sm:text-lg leading-relaxed"
            variants={staggerText}
            initial="initial"
            animate="animate"
          >
            <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
              I'm a passionate creative developer with a love for crafting
              digital experiences that blend functionality with aesthetic beauty.
              My work spans across web development, digital art, and interactive design.
            </motion.p>

            <motion.p variants={fadeInUp} transition={{ delay: 0.6 }}>
              With expertise in modern web technologies and a keen eye for design,
              I create solutions that not only work flawlessly but also inspire
              and engage users on an emotional level.
            </motion.p>

            <motion.p variants={fadeInUp} transition={{ delay: 0.8 }} className="hidden sm:block">
              When I'm not coding, you'll find me exploring new creative mediums,
              experimenting with generative art, or collaborating with other
              creatives to push the boundaries of what's possible on the web.
            </motion.p>
          </motion.div>

          {/* Skills tags */}
          <motion.div
            className="flex flex-wrap gap-2 sm:gap-3 mt-6 sm:mt-8"
            variants={staggerText}
            initial="initial"
            animate="animate"
          >
            {['React', 'Three.js', 'WebGL', 'Node.js', 'TypeScript', 'GSAP'].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 sm:px-4 py-1 sm:py-2 border border-white/20 text-white/80 text-xs sm:text-sm font-light tracking-wide hover:border-white/40 transition-colors"
                variants={fadeInUp}
                transition={{ delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-8 right-8 w-px h-16 bg-white/20"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />

      <motion.div
        className="absolute bottom-8 left-8 w-16 h-px bg-white/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      />
    </div>
  );
}
