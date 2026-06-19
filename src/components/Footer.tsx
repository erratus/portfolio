"use client";

import React from "react";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="w-full relative border-t border-white/5 bg-dark-bg/60 pt-20 pb-10 px-4 md:px-8 overflow-hidden z-10">
      {/* Background radial highlight */}
      <div className="glow-blob w-[400px] h-[400px] bg-purple-glow/5 -bottom-20 -left-20" />
      <div className="glow-blob w-[400px] h-[400px] bg-cyan-glow/5 -bottom-20 -right-20" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-white/5 pb-12">
          <div>
            <h4 className="font-display font-bold text-lg text-white mb-2">
              Let's build something intelligent.
            </h4>
            <p className="text-sm text-text-secondary max-w-sm">
              Specialized in RAG pipelines, multi-agent AI, local LLM integrations, and custom full-stack solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <a
              href="mailto:suryabhaas.karmakar@gmail.com"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 hover:border-white/20 bg-white/2 hover:bg-white/5 transition-all text-xs text-text-secondary hover:text-white"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>suryabhaas.karmakar@gmail.com</span>
            </a>
            <a
              href="https://linkedin.com/in/suryabhaas-karmakar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 hover:border-white/20 bg-white/2 hover:bg-white/5 transition-all text-xs text-text-secondary hover:text-white"
            >
              <Linkedin className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/erratus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/8 hover:border-white/20 bg-white/2 hover:bg-white/5 transition-all text-xs text-text-secondary hover:text-white"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </div>
        </div>

        {/* Big Editorial Name Logo */}
        <div className="w-full text-center relative select-none">
          <h2 className="font-display font-black text-[12vw] xl:text-[140px] leading-none tracking-tight text-white/5 uppercase select-none">
            SURYABHAAS
          </h2>
        </div>

        {/* Bottom Credits & Meta details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-text-secondary tracking-[0.2em] uppercase font-mono">
          <div className="flex flex-wrap items-center justify-center gap-2 text-center sm:text-left">
            <span>© {currentYear} SK.DEV</span>
            <span className="hidden sm:inline text-white/10">•</span>
            <span>Pune, India</span>
            <span className="hidden sm:inline text-white/10">•</span>
            <span>MIT-WPU GEN-AI & WEB DEV SPECIALIST</span>
          </div>

          <button
            onClick={handleScrollToTop}
            className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group"
          >
            <span>Back to Top</span>
            <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
