"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function AnimatedCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  // Position trackers
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 40, stiffness: 400, mass: 0.4 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Only enable cursor on devices that support hover (not mobile/touch)
    const mediaQuery = window.matchMedia("(any-hover: hover)");
    if (!mediaQuery.matches) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    // Event listeners to detect clickable targets
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[role='button']") ||
        target.classList.contains("interactive") ||
        target.closest(".interactive");
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-glow/40 pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          scale: isClicked ? 0.8 : isHovered ? 1.6 : 1,
          backgroundColor: isHovered ? "rgba(6, 182, 212, 0.15)" : "rgba(6, 182, 212, 0)",
          borderColor: isHovered ? "rgba(168, 85, 247, 0.8)" : "rgba(6, 182, 212, 0.4)",
          boxShadow: isHovered ? "0 0 15px rgba(168, 85, 247, 0.4)" : "none",
        }}
        transition={{ type: "tween", ease: "backOut" }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2.5 h-2.5 bg-cyan-glow rounded-full pointer-events-none z-50 -translate-x-1/2 -translate-y-1/2 mix-blend-screen"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
    </>
  );
}
