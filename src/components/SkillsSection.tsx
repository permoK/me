'use client';

import { motion } from 'framer-motion';
import { textReveal, fadeInUp, staggerText, scaleIn } from '@/lib/animations';

const skills = [
  { name: "JavaScript", level: 95 },
  { name: "React", level: 90 },
  { name: "Three.js", level: 85 },
  { name: "Node.js", level: 88 },
  { name: "TypeScript", level: 82 },
  { name: "WebGL", level: 78 },
  { name: "GSAP", level: 92 },
  { name: "Blender", level: 75 }
];

export default function SkillsSection() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden pl-24">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

        {/* Left side - Skills list */}
        <motion.div
          className="space-y-8"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp}>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-2">
              Technical Skills
            </h2>
            <p className="text-gray-400 font-light">
              Tools & Technologies I work with
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={staggerText}
            initial="initial"
            animate="animate"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="group"
                variants={fadeInUp}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-light tracking-wide">
                    {skill.name}
                  </span>
                  <span className="text-gray-500 text-sm font-mono">
                    {skill.level}%
                  </span>
                </div>

                <div className="w-full h-px bg-white/10 relative overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 h-full bg-white"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{
                      duration: 1.5,
                      delay: 0.5 + index * 0.1,
                      ease: "easeOut"
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right side - Large "SKILLS" text */}
        <motion.div
          className="flex flex-col justify-center"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-white/10 leading-none"
            variants={textReveal}
          >
            SKILLS
          </motion.h1>

          {/* Additional info */}
          <motion.div
            className="mt-8 space-y-4"
            variants={fadeInUp}
            transition={{ delay: 0.8 }}
          >
            <div className="text-gray-400 font-light">
              <p className="mb-2">Years of Experience</p>
              <p className="text-2xl text-white font-light">5+</p>
            </div>

            <div className="text-gray-400 font-light">
              <p className="mb-2">Projects Completed</p>
              <p className="text-2xl text-white font-light">50+</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-8 left-8 w-16 h-px bg-white/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />

      <motion.div
        className="absolute bottom-8 right-8 w-px h-16 bg-white/20"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/3 right-1/4 w-2 h-2 bg-white/30 rounded-full"
        animate={{
          y: [0, -20, 0],
          opacity: [0.3, 1, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1 h-1 bg-white/40 rounded-full"
        animate={{
          y: [0, 15, 0],
          opacity: [0.4, 1, 0.4],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
    </div>
  );
}
