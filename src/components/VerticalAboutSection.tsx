'use client';

import { motion } from 'framer-motion';
import { fadeInUp, staggerText, textReveal } from '../lib/animations';

export default function VerticalAboutSection() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Background Pattern */}
      <motion.div
        className="absolute inset-0 opacity-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent" />
      </motion.div>

      {/* Main Content Container */}
      <div className="container mx-auto px-6 lg:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Column - Text Content */}
          <motion.div
            className="space-y-8"
            variants={staggerText}
            initial="initial"
            animate="animate"
          >
            {/* Large Background Text */}
            <motion.div
              className="absolute -left-4 top-1/2 transform -translate-y-1/2 -z-10"
              variants={textReveal}
              initial="initial"
              animate="animate"
            >
              <h1 className="text-[12rem] lg:text-[16rem] font-bold text-white/5 leading-none select-none">
                ABOUT
              </h1>
            </motion.div>

            {/* Main Heading */}
            <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
              <h2 className="text-4xl lg:text-6xl font-light text-white mb-6 leading-tight">
                Creative
                <br />
                <span className="text-white/80">Developer</span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div
              className="space-y-6 text-gray-100 text-lg leading-relaxed"
              variants={staggerText}
              initial="initial"
              animate="animate"
            >
              <motion.p variants={fadeInUp} transition={{ delay: 0.4 }}>
                I'm a passionate full-stack developer with a keen eye for design and 
                a love for creating immersive digital experiences. My journey in web 
                development spans over 5 years, during which I've honed my skills in 
                modern technologies and frameworks.
              </motion.p>

              <motion.p variants={fadeInUp} transition={{ delay: 0.6 }}>
                I specialize in building responsive, performant applications that not 
                only look great but also provide exceptional user experiences. From 
                concept to deployment, I enjoy every aspect of the development process.
              </motion.p>

              <motion.p variants={fadeInUp} transition={{ delay: 0.8 }}>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community.
              </motion.p>
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              transition={{ delay: 1.0 }}
            >
              <motion.button
                className="group flex items-center space-x-3 text-white/80 hover:text-white font-light tracking-wider text-sm border-b border-white/30 hover:border-white/80 pb-2 transition-all duration-300"
                whileHover={{ x: 10 }}
              >
                <span>LEARN MORE ABOUT ME</span>
                <motion.span
                  className="transform transition-transform group-hover:translate-x-2"
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Column - Skills Grid */}
          <motion.div
            className="space-y-8"
            variants={staggerText}
            initial="initial"
            animate="animate"
          >
            {/* Skills Header */}
            <motion.div variants={fadeInUp} transition={{ delay: 0.6 }}>
              <h3 className="text-2xl font-light text-white mb-6">Core Technologies</h3>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              className="grid grid-cols-2 gap-4"
              variants={staggerText}
              initial="initial"
              animate="animate"
            >
              {[
                'React', 'Next.js', 'TypeScript', 'Node.js',
                'Three.js', 'WebGL', 'GSAP', 'Tailwind CSS',
                'PostgreSQL', 'MongoDB', 'AWS', 'Docker'
              ].map((skill, index) => (
                <motion.div
                  key={skill}
                  className="group p-4 border border-white/20 rounded-lg hover:border-white/40 transition-all duration-300 hover:bg-white/5"
                  variants={fadeInUp}
                  transition={{ delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <span className="text-white font-light tracking-wide text-sm">
                    {skill}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-6 pt-8"
              variants={staggerText}
              initial="initial"
              animate="animate"
            >
              <motion.div
                className="text-center"
                variants={fadeInUp}
                transition={{ delay: 1.2 }}
              >
                <div className="text-3xl font-light text-white mb-2">5+</div>
                <div className="text-gray-200 text-sm tracking-wider">Years Experience</div>
              </motion.div>
              
              <motion.div
                className="text-center"
                variants={fadeInUp}
                transition={{ delay: 1.3 }}
              >
                <div className="text-3xl font-light text-white mb-2">50+</div>
                <div className="text-gray-200 text-sm tracking-wider">Projects Completed</div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Hint */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60 text-sm font-light tracking-wider"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span>SCROLL DOWN</span>
          <span>↓</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
