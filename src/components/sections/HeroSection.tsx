"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { FileText, ChevronRight, MessageSquare } from "lucide-react";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activePhrase, setActivePhrase] = useState(0);

  const phrases = [
    "AI, Computer Vision & LLMs",
    "Multi-Agent RAG Architectures",
    "Modern Web Development",
    "Full-Stack Web Applications",
    "Generative AI Pipelines"
  ];

  // Rotate phrases
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhrase((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [phrases.length]);

  // Interactive Particle Grid Canvas Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);

    // Particle nodes definition
    const particleCount = 60;
    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2
      });
    }

    // Mouse coordinates tracker
    let mouse = { x: -1000, y: -1000, maxDist: 150 };
    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };
    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    let tick = 0;

    // Draw frame loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);
      tick += 0.005;

      // Draw dot grid background
      const gridSpacing = 50;
      ctx.fillStyle = "rgba(255, 255, 255, 0.03)";
      for (let x = 0; x < width; x += gridSpacing) {
        for (let y = 0; y < height; y += gridSpacing) {
          // Subtle wave movement on dot grid
          const shiftX = Math.sin(tick + y * 0.003) * 2;
          const shiftY = Math.cos(tick + x * 0.003) * 2;
          ctx.beginPath();
          ctx.arc(x + shiftX, y + shiftY, 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // Draw flowing gradient light beams in background
      const grad1 = ctx.createRadialGradient(
        width * 0.3 + Math.sin(tick * 0.5) * 100,
        height * 0.4 + Math.cos(tick * 0.7) * 100,
        0,
        width * 0.3 + Math.sin(tick * 0.5) * 100,
        height * 0.4 + Math.cos(tick * 0.7) * 100,
        width * 0.6
      );
      grad1.addColorStop(0, "rgba(6, 182, 212, 0.04)");
      grad1.addColorStop(0.5, "rgba(168, 85, 247, 0.02)");
      grad1.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad1;
      ctx.fillRect(0, 0, width, height);

      const grad2 = ctx.createRadialGradient(
        width * 0.7 + Math.cos(tick * 0.4) * 120,
        height * 0.6 + Math.sin(tick * 0.6) * 120,
        0,
        width * 0.7 + Math.cos(tick * 0.4) * 120,
        height * 0.6 + Math.sin(tick * 0.6) * 120,
        width * 0.5
      );
      grad2.addColorStop(0, "rgba(168, 85, 247, 0.03)");
      grad2.addColorStop(0.5, "rgba(37, 99, 235, 0.015)");
      grad2.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, width, height);

      // Render neural network nodes
      particles.forEach((p, idx) => {
        p.x += p.vx;
        p.y += p.vy;

        // Bounce nodes off screen edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        ctx.fillStyle = `rgba(6, 182, 212, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw connections
        for (let j = idx + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.15;
            ctx.strokeStyle = `rgba(168, 85, 247, ${alpha})`;
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Draw connection to cursor
        const cursorDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        if (cursorDist < mouse.maxDist) {
          const alpha = (1 - cursorDist / mouse.maxDist) * 0.35;
          ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();

          // Connect node slightly closer to mouse (magnetic force)
          p.x += (mouse.x - p.x) * 0.005;
          p.y += (mouse.y - p.y) * 0.005;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const nameTop = "SURYABHAAS".split("");
  const nameBottom = "KARMAKAR".split("");

  const scrollToSection = (id: string) => {
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
    <section
      id="hero"
      className="min-h-screen w-full relative flex items-center justify-center pt-24 pb-16 overflow-hidden bg-dark-bg z-10"
    >
      {/* Canvas background layer */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Floating blurred code snippets background decorations */}
      <motion.div
        className="absolute top-1/4 left-10 md:left-24 glass-panel px-4 py-3 rounded-lg border-white/5 opacity-20 pointer-events-none text-[10px] font-mono text-cyan-glow hidden sm:block filter blur-[1px]"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      >
        <p className="text-purple-glow">{"{"}</p>
        <p className="pl-3">RAG: "self-learning",</p>
        <p className="pl-3">status: "evaluating",</p>
        <p className="pl-3">avg_score: <span className="text-emerald-glow">8.0</span></p>
        <p>{"}"}</p>
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-10 md:right-24 glass-panel px-4 py-3 rounded-lg border-white/5 opacity-25 pointer-events-none text-[10px] font-mono text-purple-glow hidden sm:block filter blur-[0.5px]"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <p>{"@app.post('/review')"}</p>
        <p className="text-cyan-glow">{"async def local_review():"}</p>
        <p className="pl-3">res = await ollama.call()</p>
        <p className="pl-3">return res["review"]</p>
      </motion.div>

      {/* Main typographic content layout */}
      <div className="max-w-5xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
        
        {/* Editorial Subtitle */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] text-cyan-glow bg-cyan-glow/5 border border-cyan-glow/15 px-4 py-1.5 rounded-full inline-block">
            I Build Intelligent Systems
          </span>
        </motion.div>

        {/* GIANT ARCHITECTURAL NAME TYPOGRAPHY */}
        <h1 className="font-display font-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-[0.85] tracking-tighter text-white mb-2 select-none uppercase">
          {/* Top Line */}
          <div className="flex justify-center overflow-hidden">
            {nameTop.map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: idx * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
          {/* Bottom Line */}
          <div className="flex justify-center overflow-hidden mt-1 md:mt-3">
            {nameBottom.map((letter, idx) => (
              <motion.span
                key={idx}
                className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/40"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + idx * 0.04,
                  ease: [0.16, 1, 0.3, 1]
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </h1>

        {/* Rotating Core Capabilities Phrase */}
        <div className="h-8 md:h-12 overflow-hidden mt-4 mb-10 flex items-center justify-center">
          <span className="text-md sm:text-lg md:text-2xl font-display font-medium text-text-secondary">
            Powered by{" "}
            <span className="text-white font-bold border-b border-purple-glow/30 pb-0.5 relative inline-block transition-all duration-300">
              {phrases[activePhrase]}
            </span>
          </span>
        </div>

        {/* Call To Actions */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center max-w-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          {/* View Projects - Interactive Magnetic Pill */}
          <button
            onClick={() => scrollToSection("projects")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-white text-black font-semibold text-xs transition-all hover:bg-white/90 hover:scale-102 hover:shadow-xl hover:shadow-cyan-glow/10 active:scale-98 cursor-pointer"
          >
            <span>View My Work</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Download Resume Link */}
          <a
            href="/Suryabhaas_karmakar_resume.pdf"
            target="_blank"
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/8 hover:border-white/20 bg-white/2 hover:bg-white/5 transition-all text-xs text-text-secondary hover:text-white"
          >
            <FileText className="w-4 h-4" />
            <span>Download Resume</span>
          </a>

          {/* Contact Me Button */}
          <button
            onClick={() => scrollToSection("contact")}
            className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3.5 rounded-full border border-white/8 hover:border-white/20 bg-white/2 hover:bg-white/5 transition-all text-xs text-text-secondary hover:text-white cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Me</span>
          </button>
        </motion.div>

        {/* Floating Indicator */}
        <motion.div
          className="absolute bottom-6 flex flex-col items-center gap-1.5 opacity-40 hover:opacity-100 transition-opacity cursor-pointer hidden md:flex"
          onClick={() => scrollToSection("about")}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[9px] font-mono tracking-[0.2em] text-text-secondary uppercase">Scroll to explore</span>
          <div className="w-[1px] h-6 bg-text-secondary/40" />
        </motion.div>

      </div>
    </section>
  );
}
