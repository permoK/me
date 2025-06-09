'use client';

import { motion } from 'framer-motion';

interface PlaceholderImageProps {
  title: string;
  className?: string;
  gradient?: string;
}

export default function PlaceholderImage({ 
  title, 
  className = "", 
  gradient = "from-purple-500 to-pink-500" 
}: PlaceholderImageProps) {
  return (
    <motion.div
      className={`bg-gradient-to-br ${gradient} flex items-center justify-center ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center text-white p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/80 text-sm">Project Preview</p>
      </div>
    </motion.div>
  );
}
