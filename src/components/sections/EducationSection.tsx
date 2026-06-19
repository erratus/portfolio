"use client";

import React from "react";
import { GraduationCap, MapPin, BookOpen, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationSection() {
  const coursework = [
    "Artificial Intelligence",
    "Machine Learning & Pattern Recognition",
    "Deep Learning Systems",
    "Natural Language Processing (NLP)",
    "Computer Vision & Raster Graphics",
    "Web Technologies & Systems",
    "Data Structures & Algorithms (DSA)",
    "Database Management Systems (DBMS)",
    "Analysis of Algorithms",
    "Operating Systems"
  ];

  return (
    <section
      id="education"
      className="py-24 md:py-32 w-full relative bg-dark-bg z-10 px-6 md:px-8 border-t border-white/5"
    >
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase">
            06 // Academic Background
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight mt-2">
            Education
          </h2>
        </div>

        {/* Minimal Timeline */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 py-2">
          
          {/* Node marker */}
          <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-glow to-purple-glow flex items-center justify-center p-[2px]">
            <div className="w-full h-full rounded-full bg-dark-bg" />
          </div>

          <motion.div
            className="glass-panel p-6 md:p-8 rounded-3xl border-white/5 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Background blur decorative highlight */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-purple-glow/5 rounded-full filter blur-2xl pointer-events-none" />

            {/* University Title & Degree */}
            <div>
              <span className="text-[9px] font-mono tracking-widest text-cyan-glow bg-cyan-glow/5 border border-cyan-glow/20 px-3 py-1 rounded-full uppercase inline-block mb-3">
                Bachelor of Technology (B.Tech)
              </span>

              <h3 className="font-display font-bold text-2xl md:text-3xl text-white">
                MIT-WPU University
              </h3>
              
              <p className="text-sm font-semibold text-text-secondary mt-1">
                Computer Science & Engineering
              </p>
            </div>

            {/* Meta tags */}
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-secondary mt-4 border-b border-white/5 pb-6">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-glow" />
                Pune, India
              </span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-glow" />
                Graduating 2026
              </span>
            </div>

            {/* Coursework list */}
            <div className="mt-6">
              <h4 className="font-display font-bold text-xs uppercase tracking-wider text-white mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-orange-glow" />
                Relevant Technical Coursework
              </h4>

              <div className="flex flex-wrap gap-2">
                {coursework.map((course, idx) => (
                  <motion.span
                    key={course}
                    className="text-[10px] font-mono bg-white/3 border border-white/5 hover:border-white/12 px-3 py-1.5 rounded-full text-text-secondary hover:text-white transition-all cursor-default select-none"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    {course}
                  </motion.span>
                ))}
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}
