"use client";

import React, { useState, MouseEvent } from "react";
import { projectsData, ProjectDetail } from "@/lib/projects";
import { FolderGit2, ArrowUpRight, Cpu } from "lucide-react";
import ProjectModal from "./ProjectModal";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [hoveredCardIndex, setHoveredCardIndex] = useState<number | null>(null);
  
  // Track relative mouse position inside the card for follow-glow effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, idx: number) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
    setHoveredCardIndex(idx);
  };

  const handleMouseLeave = () => {
    setHoveredCardIndex(null);
  };

  // Bento grid spans configuration
  const gridSpans = [
    "lg:col-span-2 md:col-span-2 col-span-1", // Indramala Yoga (large freelance)
    "lg:col-span-1 md:col-span-1 col-span-1", // Vitespace (freelance)
    "lg:col-span-2 md:col-span-2 col-span-1", // Self-Learning RAG (large centerpiece)
    "lg:col-span-1 md:col-span-1 col-span-1", // CodeLens
    "lg:col-span-1 md:col-span-1 col-span-1", // VisuDocAI
    "lg:col-span-2 md:col-span-2 col-span-1"  // CHAT_APP (large bottom)
  ];

  return (
    <section
      id="projects"
      className="py-24 md:py-32 w-full relative bg-dark-bg z-10 px-6 md:px-8 border-t border-white/5"
    >
      {/* Dynamic background highlights */}
      <div className="glow-blob w-[600px] h-[600px] bg-cyan-glow/5 top-10 right-10" />
      <div className="glow-blob w-[500px] h-[500px] bg-purple-glow/5 bottom-10 left-10" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase">
              03 // Selected Operations
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight mt-2">
              Featured Projects
            </h2>
          </div>
          <p className="text-xs md:text-sm text-text-secondary max-w-xs leading-relaxed font-light">
            A showcase of production-ready RAG architectures, local developer tools, documents OCR extraction engines, and instant LAN applications.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projectsData.map((project, idx) => {
            const isHovered = hoveredCardIndex === idx;
            
            return (
              <motion.div
                key={project.id}
                className={`relative rounded-3xl overflow-hidden glass-panel border-white/6 cursor-pointer flex flex-col justify-between p-8 min-h-[340px] transition-colors duration-500 ${gridSpans[idx]} select-none`}
                onClick={() => setSelectedProject(project)}
                onMouseMove={(e) => handleMouseMove(e, idx)}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
              >
                {/* Glowing Mouse Follow Overlay */}
                {isHovered && (
                  <div
                    className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-100"
                    style={{
                      background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(6, 182, 212, 0.08), transparent 80%)`
                    }}
                  />
                )}

                {/* Top Row: category/status & Icon */}
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <span className="text-[9px] font-mono tracking-widest text-text-secondary uppercase">
                      {project.category}
                    </span>
                    <h3 className="font-display font-bold text-lg md:text-2xl text-white uppercase mt-1">
                      {project.title}
                    </h3>
                  </div>
                  
                  <div className="p-2 rounded-xl bg-white/5 border border-white/5 text-cyan-glow group">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Middle Content: One Liner & Key statistics */}
                <div className="my-8 space-y-5">
                  <p className="text-xs md:text-sm text-text-secondary leading-relaxed font-light">
                    {project.oneLiner}
                  </p>

                  {/* Micro Performance stats */}
                  <div className="flex gap-4">
                    {project.metrics.slice(0, 2).map((m) => (
                      <div key={m.label} className="border-l border-white/10 pl-3">
                        <p className="text-sm font-bold text-white leading-none">{m.value}</p>
                        <p className="text-[8px] font-mono text-text-secondary uppercase tracking-wider mt-1">{m.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Tech Stack Pills & CTA */}
                <div className="flex flex-wrap items-center justify-between gap-4 mt-auto border-t border-white/5 pt-5">
                  <div className="flex flex-wrap gap-1.5 max-w-[80%]">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[9px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-cyan-glow tracking-wider uppercase font-bold flex items-center gap-1 group">
                    Explore
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Case Study Fullscreen Dialog Drawer */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
