"use client";

import React, { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import Footer from "@/components/Footer";

// Sections
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExpertiseSection from "@/components/sections/ExpertiseSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  return (
    <>
      <LoadingScreen onComplete={() => setIsLoading(false)} />
      
      {!isLoading && (
        <div className="flex flex-col min-h-screen">
          {/* Navigation bar overlay */}
          <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
          
          <main className="flex-1 w-full">
            {/* 00. Hero Banner (Three.js & Canvas background) */}
            <HeroSection />

            {/* 01. About Editorial Profile */}
            <AboutSection />

            {/* 02. Timeline Work History */}
            <ExperienceSection />

            {/* 03. Selected Bento Grid Operations */}
            <ProjectsSection />

            {/* 04. Skill Clusters Infrastructure */}
            <SkillsSection />

            {/* 05. Horizontal Scrolling Expertise Strips */}
            <ExpertiseSection />

            {/* 06. Academic Background */}
            <EducationSection />

            {/* 07. Animated Contact Protocol */}
            <ContactSection />
          </main>

          {/* Footer Editorial Branding */}
          <Footer />

          {/* System search Command Palette (Ctrl+K overlay) */}
          <CommandPalette
            isOpen={commandPaletteOpen}
            setIsOpen={setCommandPaletteOpen}
          />
        </div>
      )}
    </>
  );
}
