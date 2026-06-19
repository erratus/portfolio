"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ExpertiseSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track page scroll to map to marquee positions
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Left to Right translation for Line 1 and Line 3
  const xLeftToRight = useTransform(scrollYProgress, [0, 1], [-250, 150]);
  
  // Right to Left translation for Line 2
  const xRightToLeft = useTransform(scrollYProgress, [0, 1], [150, -250]);

  const line1 = ["GENERATIVE_AI", "RETRIEVAL_AUGMENTED_GENERATION", "MULTI-AGENT_SYSTEMS"];
  const line2 = ["COMPUTER_VISION", "LARGE_LANGUAGE_MODELS", "SEMANTIC_SEARCH"];
  const line3 = ["EMBEDDINGS", "DEEP_LEARNING", "FULL-STACK_WEBDEV", "FRONTEND_DEV", "BACKEND_ENGINEERING"];

  return (
    <section
      id="expertise"
      ref={sectionRef}
      className="py-24 md:py-32 w-full relative bg-dark-bg z-10 overflow-hidden border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-8 mb-16 relative z-10">
        <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase">
          05 // Architectural Focus
        </span>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight mt-2 max-w-lg">
          Specialized Technical Directives
        </h2>
      </div>

      {/* Marquee lines block */}
      <div className="flex flex-col gap-4 md:gap-8 relative select-none">
        
        {/* Line 1: Left to Right */}
        <motion.div
          className="flex gap-4 md:gap-8 whitespace-nowrap"
          style={{ x: xLeftToRight }}
        >
          {line1.map((word, idx) => (
            <span
              key={idx}
              className={`font-display font-black text-5xl sm:text-7xl md:text-[90px] uppercase tracking-tighter leading-none ${
                idx % 2 === 0
                  ? "text-transparent stroke-text bg-clip-text text-white"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow to-electric-blue"
              }`}
              style={{
                WebkitTextStroke: idx % 2 !== 0 ? "none" : "1px rgba(255, 255, 255, 0.15)"
              }}
            >
              {word} •
            </span>
          ))}
        </motion.div>

        {/* Line 2: Right to Left */}
        <motion.div
          className="flex gap-4 md:gap-8 whitespace-nowrap"
          style={{ x: xRightToLeft }}
        >
          {line2.map((word, idx) => (
            <span
              key={idx}
              className={`font-display font-black text-5xl sm:text-7xl md:text-[90px] uppercase tracking-tighter leading-none ${
                idx % 2 === 0
                  ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-glow to-pink-500"
                  : "text-transparent stroke-text bg-clip-text text-white"
              }`}
              style={{
                WebkitTextStroke: idx % 2 === 0 ? "none" : "1px rgba(255, 255, 255, 0.15)"
              }}
            >
              {word} •
            </span>
          ))}
        </motion.div>

        {/* Line 3: Left to Right */}
        <motion.div
          className="flex gap-4 md:gap-8 whitespace-nowrap"
          style={{ x: xLeftToRight }}
        >
          {line3.map((word, idx) => (
            <span
              key={idx}
              className={`font-display font-black text-5xl sm:text-7xl md:text-[90px] uppercase tracking-tighter leading-none ${
                idx % 2 === 0
                  ? "text-transparent stroke-text bg-clip-text text-white"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-emerald-glow to-teal-500"
              }`}
              style={{
                WebkitTextStroke: idx % 2 !== 0 ? "none" : "1px rgba(255, 255, 255, 0.15)"
              }}
            >
              {word} •
            </span>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
