"use client";

import React, { useState } from "react";
import { skillsData, skillCategories } from "@/lib/skills";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Settings2, Database, BrainCircuit, Globe, Layers } from "lucide-react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredSkills = activeCategory === "all"
    ? skillsData
    : skillsData.filter((skill) => skill.category === activeCategory);

  // Map category IDs to icons
  const getCategoryIcon = (id: string, className: string) => {
    switch (id) {
      case "ai-ml":
        return <BrainCircuit className={className} />;
      case "programming":
        return <Code2 className={className} />;
      case "frameworks":
        return <Layers className={className} />;
      case "web-dev":
        return <Globe className={className} />;
      case "dev-tools":
        return <Settings2 className={className} />;
      case "databases":
        return <Database className={className} />;
      default:
        return <Code2 className={className} />;
    }
  };

  return (
    <section
      id="skills"
      className="py-24 md:py-32 w-full relative bg-dark-bg z-10 px-6 md:px-8 border-t border-white/5"
    >
      {/* Background glow highlights */}
      <div className="glow-blob w-[500px] h-[500px] bg-cyan-glow/5 top-1/2 left-0" />
      <div className="glow-blob w-[500px] h-[500px] bg-purple-glow/5 bottom-0 right-0" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase">
              04 // The Stack
            </span>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl text-white tracking-tight mt-2">
              Technical Infrastructure
            </h2>
          </div>
          <p className="text-xs md:text-sm text-text-secondary max-w-xs leading-relaxed font-light">
            An interactive catalog of programming languages, machine learning architectures, web standards, databases, and workflow pipelines.
          </p>
        </div>

        {/* Filter Toolbar Buttons */}
        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-12">
          {/* "All" button */}
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wider transition-all duration-300 ${
              activeCategory === "all"
                ? "bg-white text-black border border-white"
                : "border border-white/8 text-text-secondary hover:text-white hover:bg-white/5"
            }`}
          >
            ALL_TECH
          </button>

          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold font-mono tracking-wider transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-white text-black border border-white"
                  : "border border-white/8 text-text-secondary hover:text-white hover:bg-white/5"
              }`}
            >
              {getCategoryIcon(cat.id, "w-3.5 h-3.5")}
              {cat.name.toUpperCase().replace(" & ", "_")}
            </button>
          ))}
        </div>

        {/* Dynamic Interactive Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -4 }}
                className="group relative p-5 rounded-2xl overflow-hidden glass-panel border-white/5 select-none"
              >
                {/* Background colorized hover gradient glow */}
                <div className={`absolute -inset-full bg-gradient-to-tr ${skill.glowColor} opacity-0 group-hover:opacity-[0.06] blur-xl transition-all duration-500 group-hover:scale-110 pointer-events-none`} />

                {/* Card Border Glow */}
                <div className={`absolute inset-0 border border-transparent rounded-2xl group-hover:border-white/10 transition-colors pointer-events-none`} />

                {/* Tech Title */}
                <div className="relative z-10 flex flex-col justify-between h-full">
                  <span className="text-[9px] font-mono tracking-widest text-text-secondary uppercase select-none">
                    {skill.category.substring(0, 10)}
                  </span>
                  <h4 className="font-display font-bold text-sm text-white mt-8 tracking-tight group-hover:text-cyan-glow transition-colors">
                    {skill.name}
                  </h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
