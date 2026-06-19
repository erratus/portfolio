"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Cpu, Eye, Network, CodeXml } from "lucide-react";

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Parallax effect on the large background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const specialties = [
    {
      icon: <Network className="w-5 h-5 text-cyan-glow" />,
      title: "Generative AI & LLMs",
      desc: "Architecting context-aware applications, custom prompt systems, and local LLM microservices using Ollama."
    },
    {
      icon: <Cpu className="w-5 h-5 text-purple-glow" />,
      title: "Multi-Agent AI & RAG",
      desc: "Building self-learning Retrieval-Augmented Generation networks with smart rewrite caching and adaptive overrides."
    },
    {
      icon: <Eye className="w-5 h-5 text-emerald-glow" />,
      title: "Computer Vision",
      desc: "Implementing object detection pipelines, OCR layouts analysis, spatial geometry inference, and image processing."
    },
    {
      icon: <CodeXml className="w-5 h-5 text-orange-glow" />,
      title: "Full-Stack Development",
      desc: "Creating responsive frontends paired with robust microservices backends using React, Next.js, and FastAPI/Flask."
    }
  ];

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-24 md:py-32 w-full relative overflow-hidden bg-dark-bg z-10 px-6 md:px-8 border-t border-white/5"
    >
      {/* Background ambient lighting */}
      <div className="glow-blob w-[500px] h-[500px] bg-cyan-glow/5 top-1/4 -left-48" />

      {/* Floating editorial text shadow */}
      <motion.div
        className="absolute right-0 top-10 font-display font-black text-[22vw] leading-none text-white/2 select-none uppercase tracking-tighter pointer-events-none"
        style={{ y: textY }}
      >
        INTELLIGENCE
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase">
              01 // The Profile
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight mt-2">
              Engineering systems that reason.
            </h2>
          </div>
          <div className="h-[1px] bg-white/10 flex-grow hidden md:block mx-10 mb-4" />
          <div className="text-sm font-mono text-cyan-glow">
            // MIT-WPU COMPUTER SCIENCE
          </div>
        </div>

        {/* Editorial Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Huge typographic pull quotes */}
          <div className="lg:col-span-7 flex flex-col gap-8 md:gap-12">
            <motion.h3
              className="font-display font-bold text-2xl md:text-4xl text-white leading-snug tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              I am a Computer Science Engineering student specializing in{" "}
              <span className="text-cyan-glow">Generative AI</span>,{" "}
              <span className="text-purple-glow">Computer Vision</span>, and modern{" "}
              <span className="text-orange-glow">Web Development</span> at MIT-WPU.
            </motion.h3>

            <motion.p
              className="text-md md:text-lg text-text-secondary leading-relaxed font-light"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              My passion lies at the intersection of AI modeling and full-stack web engineering. 
              Instead of building wrapper apps, I build resilient architectures: indexing 
              hundreds of thousands of files, programming local LLM nodes, and creating 
              dynamic, premium web interfaces. I bridge research code with robust, 
              scalable, offline-first production standards.
            </motion.p>

            {/* Quick Facts Bento Grid */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="glass-panel p-6 rounded-2xl border-white/5">
                <p className="text-[10px] font-mono text-text-secondary tracking-widest uppercase mb-1">Affiliation</p>
                <p className="text-sm font-display font-bold text-white">MIT-WPU University</p>
                <p className="text-xs text-text-secondary">CS Engineering Student</p>
              </div>
              <div className="glass-panel p-6 rounded-2xl border-white/5">
                <p className="text-[10px] font-mono text-text-secondary tracking-widest uppercase mb-1">Focus Areas</p>
                <p className="text-sm font-display font-bold text-white">Multi-Agent AI</p>
                <p className="text-xs text-text-secondary">RAG & Dense Retrieval</p>
              </div>
            </div>
          </div>

          {/* Right Column: Specialties List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-[10px] font-mono text-text-secondary tracking-widest uppercase mb-2 block">
              Core Technical Competencies
            </span>

            <div className="flex flex-col gap-4">
              {specialties.map((spec, idx) => (
                <motion.div
                  key={idx}
                  className="glass-panel p-5 rounded-2xl border-white/5 hover:border-white/10 hover:bg-white/5 transition-all flex gap-4 items-start"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                >
                  <div className="p-2 rounded-xl bg-white/5 mt-0.5 border border-white/5">
                    {spec.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white mb-1">
                      {spec.title}
                    </h4>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

        {/* Stats strip at the bottom */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mt-24 border-t border-white/5 pt-12">
          {[
            { value: "4+", label: "GenAI Projects" },
            { value: "400K+", label: "Docs Query Indexed" },
            { value: "100%", label: "Local Isolation" },
            { value: "0ms", label: "Client DB overhead" }
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <h4 className="font-display font-black text-3xl md:text-5xl text-white tracking-tight leading-none mb-2">
                {stat.value}
              </h4>
              <p className="text-[10px] font-mono text-text-secondary tracking-[0.1em] uppercase">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
