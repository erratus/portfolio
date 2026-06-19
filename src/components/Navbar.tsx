"use client";

import React, { useState, useEffect } from "react";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { Terminal, Menu, X, Command } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "experience", label: "Experience" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "expertise", label: "Expertise" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" }
  ];

  const sectionIds = navItems.map((item) => item.id);
  const activeSection = useScrollSpy(sectionIds, 250);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // height of floating navbar / offset
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
    <header className="fixed top-0 left-0 w-full z-40 px-4 md:px-8 py-4 transition-all duration-300">
      <div
        className={`max-w-6xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
          scrolled
            ? "glass-panel bg-dark-bg/80 border-white/10 shadow-lg shadow-black/50"
            : "border-transparent bg-transparent"
        }`}
      >
        {/* Logo / Console Icon */}
        <div
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 cursor-pointer select-none group"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-glow to-purple-glow flex items-center justify-center p-[1px]">
            <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
              <Terminal className="w-4.5 h-4.5 text-cyan-glow group-hover:text-purple-glow transition-colors" />
            </div>
          </div>
          <span className="font-display font-bold text-sm tracking-widest text-white uppercase group-hover:text-cyan-glow transition-colors">
            SK.DEV
          </span>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-300 hover:text-white ${
                activeSection === item.id ? "text-white" : "text-text-secondary"
              }`}
            >
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-white/5 border border-white/10 rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {item.label}
            </button>
          ))}
        </nav>

        {/* CTA + Command Palette Hint */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Command Palette Trigger */}
          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-white/8 hover:border-white/20 bg-white/5 transition-all text-xs text-text-secondary hover:text-white"
          >
            <Command className="w-3.5 h-3.5" />
            <span>Search</span>
            <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[9px] font-mono border border-white/10">
              Ctrl+K
            </kbd>
          </button>

          {/* Contact Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="relative overflow-hidden px-4 py-1.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-white/90 transition-all shadow-md active:scale-95 cursor-pointer"
          >
            Deploy Project
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={onOpenCommandPalette}
            className="p-2 rounded-full border border-white/5 bg-white/5 text-text-secondary hover:text-white"
          >
            <Command className="w-4 h-4" />
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full border border-white/5 bg-white/5 text-text-secondary hover:text-white"
          >
            {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden absolute top-20 left-4 right-4 rounded-3xl glass-panel p-6 shadow-2xl border-white/15"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-left py-2.5 px-4 rounded-xl text-sm font-medium transition-all ${
                    activeSection === item.id
                      ? "bg-white/10 text-white border border-white/10"
                      : "text-text-secondary hover:text-white hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </button>
              ))}
              <div className="h-[1px] bg-white/5 my-2" />
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-3 rounded-full text-center text-sm font-semibold bg-white text-black hover:bg-white/95"
              >
                Let's Build
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
