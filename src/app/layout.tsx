import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import AnimatedCursor from "@/components/AnimatedCursor";
import ScrollProgress from "@/components/ScrollProgress";

const geist = Geist({
  variable: "--font-geist",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suryabhaas Karmakar | AI Engineer & Full Stack Developer",
  description: "Portfolio of Suryabhaas Karmakar. Specialized in Retrieval-Augmented Generation (RAG) systems, Multi-Agent AI architectures, Computer Vision pipelines, and premium full-stack web application development.",
  keywords: ["AI Engineer", "Generative AI", "RAG", "Multi-Agent AI", "Full Stack Developer", "Web Developer", "Three.js", "Ollama", "FastAPI", "Next.js", "Computer Vision", "Python"],
  authors: [{ name: "Suryabhaas Karmakar" }],
  openGraph: {
    title: "Suryabhaas Karmakar | AI Engineer & Full Stack Developer",
    description: "Portfolio showcasing advanced RAG architectures, local developer tools, computer vision microservices, and premium full-stack web applications.",
    url: "https://github.com/erratus",
    siteName: "Suryabhaas Karmakar Portfolio",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth h-full antialiased no-scrollbar">
      <body className={`${geist.variable} ${inter.variable} min-h-full bg-dark-bg text-text-primary selection:bg-cyan-glow/20 selection:text-white font-sans antialiased overflow-x-hidden relative`}>
        {/* Global Noise Layer Overlay */}
        <div className="noise-overlay" />
        
        {/* Custom cursor overlay */}
        <AnimatedCursor />

        {/* Scroll Progress Bar at top */}
        <ScrollProgress />

        {children}
      </body>
    </html>
  );
}
