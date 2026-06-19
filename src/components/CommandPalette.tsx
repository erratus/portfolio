"use client";

import React, { useEffect, useState } from "react";
import { Command as CommandPrimitive } from "cmdk";
import { Search, FolderGit, User, Briefcase, Code, GraduationCap, Mail, Github, Linkedin, ArrowRight, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface CommandPaletteProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export default function CommandPalette({ isOpen, setIsOpen }: CommandPaletteProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen(!isOpen);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, setIsOpen]);

  const runCommand = (action: () => void) => {
    action();
    setIsOpen(false);
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          {/* Overlay Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Dialog Panel */}
          <motion.div
            className="relative w-full max-w-lg mx-4 rounded-2xl glass-panel bg-[#0d0d0d]/90 border-white/10 shadow-2xl overflow-hidden z-10"
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <CommandPrimitive className="flex flex-col h-full w-full outline-none">
              {/* Search Input Bar */}
              <div className="flex items-center gap-3 px-4 border-b border-white/5 py-3">
                <Search className="w-4 h-4 text-text-secondary" />
                <CommandPrimitive.Input
                  placeholder="Type a command or search..."
                  className="w-full bg-transparent border-0 outline-none text-sm text-white placeholder-text-secondary py-1"
                  autoFocus
                />
                <kbd className="px-2 py-0.5 rounded bg-white/10 text-[9px] font-mono border border-white/10 text-text-secondary select-none">
                  ESC
                </kbd>
              </div>

              {/* Suggestions List */}
              <CommandPrimitive.List className="max-h-[300px] overflow-y-auto p-2 no-scrollbar">
                <CommandPrimitive.Empty className="py-6 text-center text-xs text-text-secondary">
                  No results found.
                </CommandPrimitive.Empty>

                {/* Section Navigation Group */}
                <CommandPrimitive.Group
                  heading={<span className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary/50 px-3 py-2 block">Navigation</span>}
                >
                  <CommandPrimitive.Item
                    value="home"
                    onSelect={() => runCommand(() => scrollTo("hero"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <User className="w-3.5 h-3.5" />
                      <span>Go to Home</span>
                    </div>
                    <span className="text-[10px] text-text-secondary/30">Nav</span>
                  </CommandPrimitive.Item>

                  <CommandPrimitive.Item
                    value="about"
                    onSelect={() => runCommand(() => scrollTo("about"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <User className="w-3.5 h-3.5" />
                      <span>Go to About</span>
                    </div>
                    <span className="text-[10px] text-text-secondary/30">Nav</span>
                  </CommandPrimitive.Item>

                  <CommandPrimitive.Item
                    value="experience"
                    onSelect={() => runCommand(() => scrollTo("experience"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-3.5 h-3.5" />
                      <span>Go to Experience</span>
                    </div>
                    <span className="text-[10px] text-text-secondary/30">Nav</span>
                  </CommandPrimitive.Item>

                  <CommandPrimitive.Item
                    value="projects"
                    onSelect={() => runCommand(() => scrollTo("projects"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <FolderGit className="w-3.5 h-3.5" />
                      <span>Go to Projects</span>
                    </div>
                    <span className="text-[10px] text-text-secondary/30">Nav</span>
                  </CommandPrimitive.Item>

                  <CommandPrimitive.Item
                    value="skills"
                    onSelect={() => runCommand(() => scrollTo("skills"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Code className="w-3.5 h-3.5" />
                      <span>Go to Skills & Technologies</span>
                    </div>
                    <span className="text-[10px] text-text-secondary/30">Nav</span>
                  </CommandPrimitive.Item>

                  <CommandPrimitive.Item
                    value="education"
                    onSelect={() => runCommand(() => scrollTo("education"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>Go to Education</span>
                    </div>
                    <span className="text-[10px] text-text-secondary/30">Nav</span>
                  </CommandPrimitive.Item>

                  <CommandPrimitive.Item
                    value="contact"
                    onSelect={() => runCommand(() => scrollTo("contact"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Go to Contact Form</span>
                    </div>
                    <span className="text-[10px] text-text-secondary/30">Nav</span>
                  </CommandPrimitive.Item>
                </CommandPrimitive.Group>

                <div className="h-[1px] bg-white/5 my-2" />

                {/* Social & Contact Group */}
                <CommandPrimitive.Group
                  heading={<span className="text-[10px] uppercase tracking-[0.2em] font-bold text-text-secondary/50 px-3 py-2 block">Socials & Actions</span>}
                >
                  <CommandPrimitive.Item
                    value="github"
                    onSelect={() => runCommand(() => window.open("https://github.com/erratus", "_blank"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Github className="w-3.5 h-3.5" />
                      <span>Open GitHub Profile</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                  </CommandPrimitive.Item>

                  <CommandPrimitive.Item
                    value="linkedin"
                    onSelect={() => runCommand(() => window.open("https://linkedin.com/in/suryabhaas-karmakar", "_blank"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Linkedin className="w-3.5 h-3.5" />
                      <span>Open LinkedIn Profile</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                  </CommandPrimitive.Item>

                  <CommandPrimitive.Item
                    value="resume"
                    onSelect={() => runCommand(() => window.open("/Suryabhaas_karmakar_resume.pdf", "_blank"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <GraduationCap className="w-3.5 h-3.5" />
                      <span>View & Download Resume</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                  </CommandPrimitive.Item>

                  <CommandPrimitive.Item
                    value="email"
                    onSelect={() => runCommand(() => window.open("mailto:suryabhaas.karmakar@gmail.com", "_self"))}
                    className="flex items-center justify-between px-3 py-2.5 rounded-lg text-xs text-text-secondary hover:text-white hover:bg-white/5 cursor-pointer transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Direct Email</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 opacity-50" />
                  </CommandPrimitive.Item>
                </CommandPrimitive.Group>
              </CommandPrimitive.List>

              {/* Status Bar */}
              <div className="flex items-center justify-between px-4 py-2 border-t border-white/5 text-[9px] text-text-secondary bg-[#090909]/80 select-none font-mono">
                <span>Tip: Use keys or mouse to navigate</span>
                <span className="flex items-center gap-1 font-sans">
                  Select <CornerDownLeft className="w-2.5 h-2.5" />
                </span>
              </div>
            </CommandPrimitive>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
