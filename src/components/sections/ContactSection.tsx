"use client";

import React, { useState, FormEvent } from "react";
import { Mail, Github, Linkedin, MapPin, Send, Loader2, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
      return;
    }

    setStatus("loading");
    // Simulate API delay
    setTimeout(() => {
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1800);
  };

  const handleFocus = (field: string) => setFocusedField(field);
  const handleBlur = (field: string, value: string) => {
    if (!value) {
      setFocusedField(null);
    }
  };

  const socialLinks = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Direct Email",
      value: "suryabhaas.karmakar@gmail.com",
      href: "mailto:suryabhaas.karmakar@gmail.com"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn Professional",
      value: "linkedin.com/in/suryabhaas-karmakar",
      href: "https://linkedin.com/in/suryabhaas-karmakar"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub Source",
      value: "github.com/erratus",
      href: "https://github.com/erratus"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Current Coordinates",
      value: "Pune, Maharashtra, India",
      href: "https://maps.google.com/?q=Pune,India"
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 w-full relative bg-dark-bg z-10 px-6 md:px-8 border-t border-white/5"
    >
      {/* Glow blobs */}
      <div className="glow-blob w-[600px] h-[600px] bg-cyan-glow/5 top-1/4 left-1/4" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Large Typographic CTA */}
        <div className="mb-16 md:mb-24">
          <span className="text-[10px] font-mono tracking-[0.25em] text-text-secondary uppercase">
            07 // Engagement Protocol
          </span>
          <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95] tracking-tighter text-white uppercase mt-4 select-none">
            Let's build something <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-glow via-purple-glow to-electric-blue">
              intelligent.
            </span>
          </h2>
        </div>

        {/* Contact layout Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels list */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-[10px] font-mono text-text-secondary tracking-widest uppercase block mb-4">
              Direct Channels
            </span>

            <div className="flex flex-col gap-4">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="glass-panel p-5 rounded-2xl border-white/5 hover:border-white/10 hover:bg-white/3 transition-all flex gap-4 items-center group cursor-pointer"
                >
                  <div className="p-3 rounded-xl bg-white/5 border border-white/5 text-cyan-glow group-hover:text-purple-glow transition-colors">
                    {link.icon}
                  </div>
                  <div>
                    <p className="text-[9px] font-mono text-text-secondary uppercase tracking-wider">
                      {link.label}
                    </p>
                    <p className="text-sm font-display font-semibold text-white mt-0.5 group-hover:text-cyan-glow transition-colors break-all">
                      {link.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column: Animated Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border-white/8 relative">
              <span className="text-[10px] font-mono text-text-secondary tracking-widest uppercase block mb-6">
                Transmit Secure Message
              </span>

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name Input */}
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    onFocus={() => handleFocus("name")}
                    onBlur={(e) => handleBlur("name", e.target.value)}
                    className="w-full bg-white/2 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-glow/50 focus:bg-white/5 transition-all"
                  />
                  <label
                    htmlFor="name"
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs text-text-secondary pointer-events-none transition-all duration-300 ${
                      focusedField === "name" || formData.name
                        ? "top-0 -translate-y-1/2 scale-90 px-1.5 bg-dark-bg text-cyan-glow"
                        : ""
                    }`}
                  >
                    Your Identity / Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    onFocus={() => handleFocus("email")}
                    onBlur={(e) => handleBlur("email", e.target.value)}
                    className="w-full bg-white/2 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-glow/50 focus:bg-white/5 transition-all"
                  />
                  <label
                    htmlFor="email"
                    className={`absolute left-4 top-1/2 -translate-y-1/2 text-xs text-text-secondary pointer-events-none transition-all duration-300 ${
                      focusedField === "email" || formData.email
                        ? "top-0 -translate-y-1/2 scale-90 px-1.5 bg-dark-bg text-cyan-glow"
                        : ""
                    }`}
                  >
                    Email Address Endpoint
                  </label>
                </div>

                {/* Message Input */}
                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    onFocus={() => handleFocus("message")}
                    onBlur={(e) => handleBlur("message", e.target.value)}
                    className="w-full bg-white/2 border border-white/8 rounded-xl px-4 py-3.5 text-sm text-white focus:outline-none focus:border-cyan-glow/50 focus:bg-white/5 transition-all resize-none no-scrollbar"
                  />
                  <label
                    htmlFor="message"
                    className={`absolute left-4 top-5 -translate-y-1/2 text-xs text-text-secondary pointer-events-none transition-all duration-300 ${
                      focusedField === "message" || formData.message
                        ? "top-0 -translate-y-1/2 scale-90 px-1.5 bg-dark-bg text-cyan-glow"
                        : ""
                    }`}
                  >
                    Message Payload
                  </label>
                </div>

                {/* Submit Action Block */}
                <div className="flex items-center gap-4 justify-between pt-2">
                  <AnimatePresence mode="wait">
                    {status === "success" && (
                      <motion.p
                        className="text-xs font-mono text-emerald-glow flex items-center gap-1.5"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        <Check className="w-4 h-4" /> Message successfully queued.
                      </motion.p>
                    )}
                    {status === "error" && (
                      <motion.p
                        className="text-xs font-mono text-orange-glow"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                      >
                        Invalid fields. Try again.
                      </motion.p>
                    )}
                  </AnimatePresence>

                  <button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className="ml-auto flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold text-xs transition-all hover:bg-white/90 active:scale-95 disabled:opacity-50 disabled:scale-100 cursor-pointer"
                  >
                    {status === "loading" ? (
                      <>
                        <span>Transmitting</span>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                      </>
                    ) : status === "success" ? (
                      <>
                        <span>Delivered</span>
                        <Check className="w-3.5 h-3.5" />
                      </>
                    ) : (
                      <>
                        <span>Transmit</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
