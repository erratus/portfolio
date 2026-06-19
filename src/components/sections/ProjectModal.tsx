"use client";

import React, { useEffect, useState } from "react";
import { ProjectDetail } from "@/lib/projects";
import { X, Github, ExternalLink, Calendar, Code2, ShieldAlert, Award, Lightbulb, Workflow } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectModalProps {
  project: ProjectDetail | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [hoveringGithub, setHoveringGithub] = useState(false);
  const [hoveringLive, setHoveringLive] = useState(false);

  const isGithubUnavailable = project?.githubUrl === "None" || !project?.githubUrl;
  const isLiveUnavailable = project?.liveUrl === "None" || !project?.liveUrl;
  // Prevent background scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end overflow-hidden">
      {/* Backdrop */}
      <motion.div
        className="fixed inset-0 bg-black/85 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      />

      {/* Slide-over case study panel */}
      <motion.div
        className="relative w-full max-w-4xl h-full bg-[#070707] border-l border-white/10 shadow-2xl flex flex-col z-10"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      >
        {/* Header toolbar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0a0a0a]/90 sticky top-0 z-20">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-cyan-glow uppercase">
              {project.category} // CASE STUDY
            </span>
            <h3 className="text-lg md:text-xl font-display font-black text-white uppercase mt-0.5">
              {project.title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-text-secondary hover:text-white transition-all cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Scrollable details panel */}
        <div className="flex-1 overflow-y-auto p-6 md:p-10 no-scrollbar space-y-12">
          {/* Cover Hero Banner (Rich ambient grid mesh) */}
          <div className="relative w-full h-[200px] md:h-[280px] rounded-3xl overflow-hidden border border-white/10 bg-[#0d0d0d] flex items-center justify-center p-8 select-none">
            {project.image && (
              <img
                src={project.image}
                alt=""
                className="absolute inset-0 w-full h-full object-cover opacity-15 filter blur-[1px] saturate-50 pointer-events-none"
              />
            )}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
            <div className="absolute inset-0 bg-linear-to-tr from-purple-glow/5 via-transparent to-cyan-glow/5" />
            
            {/* Mesh grids */}
            <div className="absolute inset-0 opacity-15" style={{
              backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                                linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
              backgroundSize: "20px 20px"
            }} />

            <div className="text-center z-10 max-w-xl">
              <h2 className="text-2xl md:text-4xl font-display font-black tracking-tight text-white mb-2 uppercase">
                {project.title}
              </h2>
              <p className="text-xs md:text-sm text-text-secondary">
                {project.oneLiner}
              </p>
            </div>
          </div>

          {/* Core metadata split grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 py-6 border-y border-white/5">
            <div>
              <span className="text-[9px] font-mono uppercase text-text-secondary tracking-widest">Pipeline Status</span>
              <p className="text-xs font-display font-bold text-emerald-glow mt-1 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-glow animate-pulse" />
                {project.status}
              </p>
            </div>
            <div>
              <span className="text-[9px] font-mono uppercase text-text-secondary tracking-widest">Timeframe</span>
              <p className="text-xs font-display font-bold text-white mt-1 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-purple-glow" />
                {project.timeline}
              </p>
            </div>
            <div className="md:col-span-2">
              <span className="text-[9px] font-mono uppercase text-text-secondary tracking-widest">Stack</span>
              <div className="flex flex-wrap gap-1.5 mt-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-[9px] font-mono bg-white/5 border border-white/10 px-2 py-0.5 rounded text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Problem Statement Card */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-orange-glow" />
              The Problem Space
            </h4>
            <div className="glass-panel p-6 rounded-2xl border-white/5 text-sm text-text-secondary leading-relaxed font-light">
              {project.problemStatement}
            </div>
          </div>

          {/* Project Screenshot / Visual Preview */}
          {project.image && (
            <div className="space-y-4">
              <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-glow" />
                Visual Interface Preview
              </h4>
              <div className="rounded-2xl border border-white/10 bg-[#020202] overflow-hidden p-2 flex justify-center items-center">
                <img
                  src={project.image}
                  alt={`${project.title} Screenshot`}
                  className="w-full max-h-[400px] object-contain rounded-xl select-none"
                />
              </div>
            </div>
          )}

          {/* Architecture / Design Concept */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <Workflow className="w-4 h-4 text-cyan-glow" />
              Pipeline Architecture
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              {project.architectureDescription}
            </p>
            <p className="text-xs text-text-secondary leading-relaxed font-light mt-2">
              {project.technicalOverview}
            </p>
          </div>

          {/* Implementation Milestones */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-purple-glow" />
              Implementation & Core Logic
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.implementationDetails.map((detail, index) => (
                <div key={index} className="p-4 rounded-xl border border-white/5 bg-white/1 flex gap-3">
                  <span className="text-xs font-mono text-cyan-glow font-bold">0{index + 1}.</span>
                  <p className="text-xs text-text-secondary leading-relaxed font-light">
                    {detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Code Snippet Viewer */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <Code2 className="w-4 h-4 text-orange-glow" />
              Source Execution Snippet
            </h4>
            <div className="rounded-2xl border border-white/10 bg-[#020202] overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-[#090909] text-[10px] font-mono text-text-secondary">
                <span>{project.codeSnippet.filename}</span>
                <span className="uppercase text-cyan-glow">{project.codeSnippet.language}</span>
              </div>
              <pre className="p-4 text-xs font-mono text-text-secondary overflow-x-auto leading-relaxed select-text no-scrollbar">
                <code>{project.codeSnippet.code}</code>
              </pre>
            </div>
          </div>

          {/* Metrics & Performance */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider flex items-center gap-2">
              <Award className="w-4 h-4 text-emerald-glow" />
              Validation & Performance Benchmarks
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.metrics.map((m) => (
                <div key={m.label} className="glass-panel p-5 rounded-xl border-white/5 text-center">
                  <p className="text-2xl font-display font-black text-white">{m.value}</p>
                  <p className="text-[9px] font-mono text-text-secondary uppercase tracking-wider mt-1">{m.label}</p>
                </div>
              ))}
            </div>
            <ul className="list-disc pl-5 text-xs text-text-secondary space-y-2 mt-4 font-light">
              {project.performanceMetrics.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>

          {/* Lessons Learned */}
          <div className="space-y-4">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Lessons Learned
            </h4>
            <p className="text-xs text-text-secondary leading-relaxed font-light">
              {project.lessonsLearned}
            </p>
          </div>

          {/* Future roadmap */}
          <div className="space-y-4 pb-8">
            <h4 className="font-display font-bold text-sm text-white uppercase tracking-wider">
              Future Improvements Roadmap
            </h4>
            <div className="flex flex-col gap-2">
              {project.futureImprovements.map((imp, idx) => (
                <div key={idx} className="flex gap-2 items-center text-xs text-text-secondary font-light">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-glow" />
                  <span>{imp}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions bar */}
        <div className="px-6 py-4 border-t border-white/5 bg-[#0a0a0a]/90 flex justify-between items-center gap-4">
          {isGithubUnavailable ? (
            <div
              onMouseEnter={() => setHoveringGithub(true)}
              onMouseLeave={() => setHoveringGithub(false)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/5 bg-white/2 text-xs text-text-secondary/40 select-none transition-all duration-300 cursor-not-allowed"
            >
              <Github className="w-4 h-4 opacity-30" />
              <span>{hoveringGithub ? "github repo unavailable" : "Browse Repository"}</span>
            </div>
          ) : (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/8 hover:border-white/20 bg-white/2 hover:bg-white/5 transition-all text-xs text-text-secondary hover:text-white cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>Browse Repository</span>
            </a>
          )}

          {isLiveUnavailable ? (
            <div
              onMouseEnter={() => setHoveringLive(true)}
              onMouseLeave={() => setHoveringLive(false)}
              className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/5 bg-white/2 text-xs text-text-secondary/40 select-none transition-all duration-300 cursor-not-allowed"
            >
              <span>{hoveringLive ? "Live version unavailable" : "Launch Live Demo"}</span>
              <ExternalLink className="w-3.5 h-3.5 opacity-30" />
            </div>
          ) : (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-black font-semibold text-xs transition-all hover:bg-white/90 cursor-pointer"
            >
              <span>Launch Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </motion.div>
    </div>
  );
}
