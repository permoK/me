'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { textReveal, fadeInUp, staggerText, wipeLeft } from '@/lib/animations';

const projects = [
  {
    id: 1,
    title: "DIGITAL GALLERY",
    subtitle: "Interactive Art Platform",
    year: "2024",
    category: "WEB DEVELOPMENT"
  },
  {
    id: 2,
    title: "MOTION STUDIO",
    subtitle: "Creative Agency Website",
    year: "2023",
    category: "UI/UX DESIGN"
  },
  {
    id: 3,
    title: "NEURAL NETWORK",
    subtitle: "AI Visualization Tool",
    year: "2024",
    category: "DATA VISUALIZATION"
  }
];

export default function ProjectSection() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden pl-24">
      <div className="container mx-auto px-8">

        {/* Header */}
        <motion.div
          className="mb-16"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-8xl md:text-9xl font-bold text-white/10 leading-none mb-4"
            variants={textReveal}
          >
            WORK
          </motion.h1>
          <motion.p
            className="text-xl text-gray-400 font-light tracking-wide"
            variants={fadeInUp}
            transition={{ delay: 0.3 }}
          >
            Selected Projects
          </motion.p>
        </motion.div>

        {/* Projects List */}
        <motion.div
          className="space-y-8"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group border-b border-white/10 pb-8 cursor-pointer"
              variants={fadeInUp}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 20 }}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-baseline space-x-6 mb-2">
                    <motion.h3
                      className="text-3xl md:text-4xl font-light text-white group-hover:text-gray-300 transition-colors"
                      variants={wipeLeft}
                    >
                      {project.title}
                    </motion.h3>
                    <span className="text-sm text-gray-500 font-mono">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center space-x-8">
                    <p className="text-gray-400 font-light">
                      {project.subtitle}
                    </p>
                    <span className="text-xs text-gray-600 tracking-widest uppercase">
                      {project.category}
                    </span>
                  </div>
                </div>

                <motion.div
                  className="opacity-0 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="text-white" size={20} />
                </motion.div>
              </div>

              {/* Hover line */}
              <motion.div
                className="h-px bg-white mt-4 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All Link */}
        <motion.div
          className="mt-16 text-center"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.2 }}
        >
          <motion.button
            className="text-white/60 hover:text-white font-light tracking-widest text-sm border-b border-white/20 hover:border-white/60 pb-1 transition-colors"
            whileHover={{ y: -2 }}
          >
            VIEW ALL PROJECTS
          </motion.button>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 right-8 w-px h-32 bg-white/10"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />

      <motion.div
        className="absolute bottom-1/4 left-8 w-32 h-px bg-white/10"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      />
    </div>
  );
}
