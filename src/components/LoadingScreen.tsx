"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [percent, setPercent] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsFinished(true);
            setTimeout(onComplete, 600); // Wait for fade-out exit transition
          }, 400);
          return 100;
        }
        return prev + 2;
      });
    }, 20);

    return () => clearInterval(interval);
  }, [onComplete]);

  const nameLetters = "SURYABHAAS KARMAKAR".split("");

  return (
    <AnimatePresence>
      {!isFinished && (
        <motion.div
          className="fixed inset-0 bg-dark-bg z-9999 flex flex-col items-center justify-center font-display"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        >
          {/* Neon background blur grid */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.08),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(168,85,247,0.05),transparent_40%)]" />

          {/* Letter reveal */}
          <div className="text-3xl md:text-5xl font-extrabold tracking-[0.25em] flex justify-center text-white z-10 mb-8 relative">
            {nameLetters.map((letter, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: idx * 0.05,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className={letter === " " ? "mx-2" : ""}
              >
                {letter}
              </motion.span>
            ))}
          </div>

          {/* Progress bar container */}
          <div className="w-[200px] h-[1px] bg-white/10 relative overflow-hidden rounded-full">
            <motion.div
              className="h-full bg-cyan-glow"
              initial={{ width: 0 }}
              animate={{ width: `${percent}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>

          {/* Dynamic Percentage */}
          <motion.div
            className="text-[10px] tracking-[0.4em] font-mono text-text-secondary mt-3 uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
          >
            Initializing System // {percent}%
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
