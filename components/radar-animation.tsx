"use client";

import { motion } from "framer-motion";

export function RadarAnimation() {
  return (
    <div className="absolute -right-10 -top-10 h-80 w-80">
      {/* Outer ring */}
      <div className="absolute inset-0 rounded-full border border-[#0369A1]/30" />
      
      {/* Middle ring */}
      <div className="absolute inset-12 rounded-full border border-[#0369A1]/25" />
      
      {/* Inner ring */}
      <div className="absolute inset-24 rounded-full border border-[#0369A1]/20" />
      
      {/* Center dot */}
      <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0369A1]/70" />
      
      {/* Radar sweep */}
      <motion.div
        className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div
          className="absolute left-1/2 top-0 h-1/2 w-1/2 origin-bottom-left"
          style={{
            background: "conic-gradient(from 0deg at 0% 100%, transparent 0deg, rgba(3,105,161,0.35) 30deg, transparent 60deg)",
          }}
        />
      </motion.div>
      
      {/* Blip dots that pulse */}
      <motion.div
        className="absolute right-20 top-16 h-2 w-2 rounded-full bg-[#0369A1]/80"
        animate={{
          opacity: [0.3, 0.9, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute bottom-20 left-20 h-1.5 w-1.5 rounded-full bg-[#0369A1]/60"
        animate={{
          opacity: [0.2, 0.7, 0.2],
          scale: [0.8, 1.1, 0.8],
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      />
      
      <motion.div
        className="absolute bottom-28 right-28 h-1.5 w-1.5 rounded-full bg-[#0369A1]/50"
        animate={{
          opacity: [0.15, 0.6, 0.15],
          scale: [0.9, 1.15, 0.9],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Crosshairs */}
      <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#0369A1]/10" />
      <div className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#0369A1]/10" />
    </div>
  );
}
