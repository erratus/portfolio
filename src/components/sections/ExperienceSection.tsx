"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, Building2, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const achievements = [
    {
      title: "Multi-Agent RAG Architectures",
      desc: "Designed cooperative agents to segment and answer complex technical queries by dynamically routing logic to appropriate specialized models."
    },
    {
      title: "Graph RAG Integrations",
      desc: "Constructed knowledge graphs using semantic entities to connect unstructured data nodes, improving contextual grounding for LLMs."
    },
    {
      title: "Hybrid Search & Dense Retrieval",
      desc: "Engineered high-performance hybrid queries combining BM25 sparse search and dense embeddings, scaling lookup efficiency over 400K+ index docs."
    },
    {
      title: "Custom Embedding Adjustments",
      desc: "Fine-tuned SentenceTransformer models for domain-specific vocabulary terms, increasing cosine similarity accuracy in dense retrievals."
    },
    {
      title: "LLM Evaluation Frameworks",
      desc: "Formulated custom LLM-as-Judge evaluation tools using Ollama to score and log accuracy, relevancy, and latency metrics in real-time."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } }
  } as const;

  return (
    <section
      id="experience"
      className="py-24 md:py-32 w-full relative bg-dark-bg z-10 px-6 md:px-8 border-t border-white/5"
    >
      {/* Background visual detail */}
      <div className="glow-blob w-[500px] h-[500px] bg-purple-glow/5 top-1/2 right-0" />

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase">
            02 // The Journey
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight mt-2">
            Professional Experience
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l border-white/10 pl-6 md:pl-10 ml-4 py-2">
          
          {/* Timeline Dot Overlay */}
          <div className="absolute top-0 left-0 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-tr from-cyan-glow to-purple-glow flex items-center justify-center p-[2px]">
            <div className="w-full h-full rounded-full bg-dark-bg" />
          </div>

          {/* Job Card (Involead) */}
          <div className="mb-12">
            {/* Tag / Status */}
            <span className="text-[9px] font-mono tracking-widest text-emerald-glow bg-emerald-glow/5 border border-emerald-glow/20 px-3 py-1 rounded-full uppercase inline-block mb-3">
              Internship Completed
            </span>

            <h3 className="font-display font-bold text-xl md:text-3xl text-white flex flex-wrap items-center gap-3">
              Data Science Intern
            </h3>

            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-text-secondary mt-2">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5" />
                Involead
              </span>
              <span className="hidden sm:inline text-white/10">•</span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                Jun 2025 - Dec 2025
              </span>
            </div>

            <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-4 max-w-2xl font-light">
              Spearheaded the development and optimization of high-scale semantic search indexes and custom retrieval pipelines. Maintained focus on minimizing LLM context pollution and caching repeat queries.
            </p>
          </div>

          {/* Achievements Checklist (Animated Timeline Nodes) */}
          <div className="mt-8">
            <h4 className="font-display font-bold text-xs uppercase tracking-[0.2em] text-white/50 mb-6 font-mono">
              Key Contributions & Technical Milestones
            </h4>

            <motion.div
              className="flex flex-col gap-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-100px" }}
            >
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  className="flex gap-4 items-start relative pl-1 group"
                  variants={itemVariants}
                >
                  {/* Glowing Node Dot indicator */}
                  <div className="absolute left-[-31px] md:left-[-47px] top-[6px] w-2.5 h-2.5 rounded-full bg-dark-bg border-2 border-white/20 group-hover:border-cyan-glow group-hover:scale-125 transition-all duration-300" />
                  
                  <div className="p-1 rounded bg-cyan-glow/5 border border-cyan-glow/10 mt-0.5 text-cyan-glow">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  
                  <div className="max-w-xl">
                    <h5 className="font-display font-bold text-sm text-white group-hover:text-cyan-glow transition-colors">
                      {ach.title}
                    </h5>
                    <p className="text-xs text-text-secondary leading-relaxed mt-1 font-light">
                      {ach.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
