export interface Skill {
  name: string;
  category: string;
  glowColor: string; // Tailwind class or hex color code
}

export const skillCategories = [
  { id: "ai-ml", name: "AI & Machine Learning" },
  { id: "programming", name: "Programming" },
  { id: "frameworks", name: "Frameworks & Backend" },
  { id: "web-dev", name: "Web Development" },
  { id: "dev-tools", name: "Developer Tools" },
  { id: "databases", name: "Databases & Cloud" }
];

export const skillsData: Skill[] = [
  // Programming Languages
  { name: "Python", category: "programming", glowColor: "from-blue-500 to-cyan-500" },
  { name: "C++", category: "programming", glowColor: "from-blue-600 to-indigo-500" },
  { name: "JavaScript", category: "programming", glowColor: "from-yellow-400 to-amber-500" },
  { name: "TypeScript", category: "programming", glowColor: "from-blue-400 to-indigo-600" },

  // AI & ML
  { name: "Retrieval Augmented Generation (RAG)", category: "ai-ml", glowColor: "from-purple-500 to-indigo-500" },
  { name: "Multi-Agent AI Systems", category: "ai-ml", glowColor: "from-emerald-400 to-teal-500" },
  { name: "Large Language Models (LLMs)", category: "ai-ml", glowColor: "from-pink-500 to-purple-600" },
  { name: "Small Language Models (SLMs)", category: "ai-ml", glowColor: "from-rose-400 to-pink-500" },
  { name: "Computer Vision", category: "ai-ml", glowColor: "from-cyan-400 to-blue-500" },
  { name: "YOLOv5", category: "ai-ml", glowColor: "from-green-400 to-emerald-500" },
  { name: "LangChain", category: "ai-ml", glowColor: "from-emerald-500 to-teal-600" },
  { name: "LangGraph", category: "ai-ml", glowColor: "from-teal-400 to-cyan-600" },
  { name: "BERT", category: "ai-ml", glowColor: "from-indigo-400 to-violet-500" },
  { name: "LSTM", category: "ai-ml", glowColor: "from-violet-400 to-fuchsia-500" },

  // Frameworks & Backend
  { name: "FastAPI", category: "frameworks", glowColor: "from-teal-500 to-emerald-400" },
  { name: "Flask", category: "frameworks", glowColor: "from-gray-500 to-slate-400" },
  { name: "Node.js", category: "frameworks", glowColor: "from-green-500 to-emerald-600" },
  { name: "Express", category: "frameworks", glowColor: "from-gray-600 to-slate-500" },

  // Web Development
  { name: "React", category: "web-dev", glowColor: "from-cyan-400 to-blue-600" },
  { name: "Next.js", category: "web-dev", glowColor: "from-neutral-200 to-neutral-400" },
  { name: "Tailwind CSS", category: "web-dev", glowColor: "from-sky-400 to-teal-400" },
  { name: "Three.js", category: "web-dev", glowColor: "from-amber-400 to-orange-500" },
  { name: "Framer Motion", category: "web-dev", glowColor: "from-fuchsia-500 to-pink-500" },

  // Developer Tools
  { name: "Ollama", category: "dev-tools", glowColor: "from-neutral-400 to-neutral-200" },
  { name: "OpenRouter", category: "dev-tools", glowColor: "from-orange-500 to-red-500" },
  { name: "Model Context Protocol (MCP)", category: "dev-tools", glowColor: "from-blue-500 to-purple-500" },
  { name: "n8n", category: "dev-tools", glowColor: "from-rose-500 to-orange-500" },
  { name: "Zapier", category: "dev-tools", glowColor: "from-orange-500 to-amber-600" },

  // Databases & Cloud
  { name: "MongoDB", category: "databases", glowColor: "from-green-600 to-emerald-500" },
  { name: "ChromaDB (Vector DB)", category: "databases", glowColor: "from-blue-400 to-cyan-500" },
  { name: "Git & GitHub", category: "databases", glowColor: "from-neutral-500 to-neutral-700" }
];
