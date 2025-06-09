'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { textReveal, fadeInUp, staggerText, scaleIn } from '@/lib/animations';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
];

const contactInfo = [
  { icon: Mail, text: 'alex@example.com', href: 'mailto:alex@example.com' },
  { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: MapPin, text: 'San Francisco, CA', href: '#' }
];

export default function ContactSection() {
  return (
    <div className="relative w-full h-screen bg-black flex items-center justify-center overflow-hidden pl-24">
      <div className="container mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left side - Large "CONTACT" text */}
        <motion.div
          className="flex flex-col justify-center"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-7xl md:text-8xl font-bold text-white/10 leading-none"
            variants={textReveal}
          >
            CONTACT
          </motion.h1>
        </motion.div>

        {/* Right side - Contact info */}
        <motion.div
          className="flex flex-col justify-center space-y-12"
          variants={staggerText}
          initial="initial"
          animate="animate"
        >
          <motion.div variants={fadeInUp} transition={{ delay: 0.2 }}>
            <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              I'm always interested in new opportunities and creative collaborations. 
              Let's discuss how we can bring your ideas to life.
            </p>
          </motion.div>

          {/* Contact information */}
          <motion.div 
            className="space-y-6"
            variants={staggerText}
            initial="initial"
            animate="animate"
          >
            {contactInfo.map((contact, index) => (
              <motion.a
                key={contact.text}
                href={contact.href}
                className="flex items-center space-x-4 text-gray-300 hover:text-white transition-colors group"
                variants={fadeInUp}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 10 }}
              >
                <motion.div
                  className="w-6 h-6 flex items-center justify-center"
                  whileHover={{ scale: 1.2 }}
                >
                  <contact.icon size={20} />
                </motion.div>
                <span className="font-light tracking-wide">
                  {contact.text}
                </span>
              </motion.a>
            ))}
          </motion.div>

          {/* Social links */}
          <motion.div 
            className="flex space-x-6"
            variants={staggerText}
            initial="initial"
            animate="animate"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-white hover:border-white/40 transition-colors"
                variants={scaleIn}
                transition={{ delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.label}
              >
                <social.icon size={18} />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp}
            transition={{ delay: 1.2 }}
          >
            <motion.button
              className="px-8 py-3 border border-white/30 text-white font-light tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              START A PROJECT
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <motion.div
        className="absolute top-1/4 left-8 w-px h-24 bg-white/20"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      />
      
      <motion.div
        className="absolute bottom-1/4 right-8 w-24 h-px bg-white/20"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.7, duration: 0.8 }}
      />

      {/* Floating elements */}
      <motion.div
        className="absolute top-1/5 right-1/3 w-1 h-1 bg-white/50 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-1/5 left-1/3 w-2 h-2 bg-white/30 rounded-full"
        animate={{
          y: [0, -10, 0],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5
        }}
      />

      {/* Copyright */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/40 text-xs font-light tracking-widest"
        variants={fadeInUp}
        initial="initial"
        animate="animate"
        transition={{ delay: 2 }}
      >
        © 2024 ALEX CHEN
      </motion.div>
    </div>
  );
}
