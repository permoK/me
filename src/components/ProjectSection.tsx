'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { textReveal, fadeInUp, staggerText, wipeLeft } from '@/lib/animations';
import { useState, useCallback } from 'react';
import PlaceholderImage from './PlaceholderImage';

const projects = [
  {
    id: 1,
    title: "DIGITAL GALLERY",
    subtitle: "Interactive Art Platform",
    year: "2024",
    category: "WEB DEVELOPMENT",
    image: "/api/placeholder/400/300",
    gradient: "from-purple-500 via-pink-500 to-red-500"
  },
  {
    id: 2,
    title: "MOTION STUDIO",
    subtitle: "Creative Agency Website",
    year: "2023",
    category: "UI/UX DESIGN",
    image: "/api/placeholder/400/300",
    gradient: "from-blue-500 via-cyan-500 to-teal-500"
  },
  {
    id: 3,
    title: "NEURAL NETWORK",
    subtitle: "AI Visualization Tool",
    year: "2024",
    category: "DATA VISUALIZATION",
    image: "/api/placeholder/400/300",
    gradient: "from-green-500 via-emerald-500 to-cyan-500"
  }
];

interface PreviewCardProps {
  project: typeof projects[0];
}

function PreviewCard({ project }: PreviewCardProps) {
  return (
    <motion.div
      className="fixed top-1/2 right-16 transform -translate-y-1/2 z-50 pointer-events-none"
      initial={{
        opacity: 0,
        scale: 0.8,
        x: 100,
        rotateY: -15,
        filter: "blur(10px)"
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        rotateY: 0,
        filter: "blur(0px)"
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        x: 50,
        rotateY: 15,
        filter: "blur(5px)"
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        filter: { duration: 0.3 }
      }}
    >
      <motion.div
        className="bg-black/90 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl w-96"
        initial={{ boxShadow: "0 0 0 rgba(255, 255, 255, 0)" }}
        animate={{
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.5), 0 0 30px rgba(255, 255, 255, 0.1)"
        }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.div
          className="w-full h-64 rounded-xl overflow-hidden mb-5"
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.7,
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
        >
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease: [0.25, 0.46, 0.45, 0.94]
            }}
          >
            <PlaceholderImage
              title={project.title}
              className="w-full h-full"
              gradient={project.gradient}
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="space-y-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
        >
          <h4 className="text-white font-medium text-xl tracking-wide">{project.title}</h4>
          <p className="text-gray-300 text-base leading-relaxed">{project.subtitle}</p>
          <div className="flex justify-between items-center pt-3 border-t border-white/10">
            <span className="text-sm text-gray-400 uppercase tracking-wider font-medium">
              {project.category}
            </span>
            <span className="text-sm text-gray-400 font-mono bg-white/5 px-3 py-1 rounded">
              {project.year}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default function ProjectSection() {
  const [hoveredProject, setHoveredProject] = useState<typeof projects[0] | null>(null);

  const handleProjectHover = useCallback((project: typeof projects[0]) => {
    setHoveredProject(project);
  }, []);

  const handleProjectLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden pt-16 sm:pt-20 pb-20 sm:pb-8">
      {/* Preview Card */}
      <AnimatePresence>
        {hoveredProject && (
          <PreviewCard
            project={hoveredProject}
          />
        )}
      </AnimatePresence>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">

        {/* Header */}
        <motion.div
          className="mb-8 sm:mb-12 lg:mb-16"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            className="text-6xl sm:text-8xl lg:text-9xl font-bold text-white/10 leading-none mb-2 sm:mb-4"
            variants={textReveal}
          >
            WORK
          </motion.h1>
          <motion.p
            className="text-lg sm:text-xl text-gray-200 font-light tracking-wide"
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
              whileHover={{
                x: 20,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              onMouseEnter={() => handleProjectHover(project)}
              onMouseLeave={handleProjectLeave}
            >
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-baseline space-x-6 mb-2">
                    <motion.h3
                      className="text-3xl md:text-4xl font-light text-white group-hover:text-gray-200 transition-colors"
                      variants={wipeLeft}
                    >
                      {project.title}
                    </motion.h3>
                    <span className="text-sm text-gray-300 font-mono">
                      {project.year}
                    </span>
                  </div>
                  <div className="flex items-center space-x-8">
                    <p className="text-gray-200 font-light">
                      {project.subtitle}
                    </p>
                    <span className="text-xs text-gray-400 tracking-widest uppercase">
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
            className="text-white/80 hover:text-white font-light tracking-widest text-sm border-b border-white/30 hover:border-white/80 pb-1 transition-colors"
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
