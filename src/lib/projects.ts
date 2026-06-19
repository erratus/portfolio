export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  oneLiner: string;
  category: string;
  status: string;
  techStack: string[];
  timeline: string;
  metrics: ProjectMetric[];
  githubUrl: string;
  liveUrl: string;
  problemStatement: string;
  architectureDescription: string;
  technicalOverview: string;
  implementationDetails: string[];
  keyFeatures: string[];
  challengesSolved: string;
  performanceMetrics: string[];
  lessonsLearned: string;
  futureImprovements: string[];
  codeSnippet: {
    language: string;
    filename: string;
    code: string;
  };
  image?: string;
}

export const projectsData: ProjectDetail[] = [
  {
    id: "indramala-yoga",
    image: "/indramala.png",
    title: "Indramala Yoga",
    oneLiner: "A premium static web platform for yoga training, featuring scroll-linked animations and WhatsApp-driven conversions.",
    category: "Web Development",
    status: "Completed",
    techStack: ["HTML5", "CSS3", "JavaScript (ES6)", "Flickity", "ScrollReveal", "Vercel"],
    timeline: "6 Weeks",
    metrics: [
      { label: "Page Load Time", value: "<0.3s" },
      { label: "Lighthouse Performance", value: "99/100" },
      { label: "Direct Booking Conversion", value: "+35%" }
    ],
    githubUrl: "None",
    liveUrl: "https://indramalayoga.com",
    problemStatement: "A local yoga institute needed an elegant, fast, and SEO-friendly landing page to display courses and programs. The client wanted to eliminate the complexity and cost of maintaining a backend server (previously Python/Flask) while retaining an interactive experience and a smooth registration funnel.",
    architectureDescription: "A lightweight, frontend-only static website architecture. Page routing is handled client-side or mapped via Vercel configurations (vercel.json) to keep URLs clean. Animations are managed via ScrollReveal and standard CSS transitions, while UI carousel interactions utilize Flickity and custom CSS transformations.",
    technicalOverview: "The project represents a complete migration of a legacy Python/Flask system to a pure frontend-only layout. Real-time actions (enrollments, trainer applications) are handled via custom-tailored WhatsApp redirection URLs carrying pre-filled user messages. Assets are structured statically and optimized for quick rendering with standard browser caching.",
    implementationDetails: [
      "Created custom CSS keyframe animations for horizontal marquee text banners and responsive parallax-like grid layouts.",
      "Integrated Flickity to build a touch-friendly carousel for team members that dynamically switches to a grid view on desktop sizes.",
      "Engineered a promotional overlay/modal dialog with a forced 5-second exit countdown timer to ensure user attention to key announcements.",
      "Configured custom Vercel rewrite rules to preserve SEO paths and map friendly URLs (e.g., /ttc to /knowabtcourses.html)."
    ],
    keyFeatures: [
      "Custom interactive 3D-styled class selection carousel built with CSS variables",
      "Announcement overlay with countdown-enforced call-to-action visibility",
      "Clean-routing system utilizing vercel.json configurations",
      "Zero-friction WhatsApp booking integration templates"
    ],
    challengesSolved: "Replacing the Python/Flask backend's registration flow required a zero-cost solution that didn't compromise user convenience. We developed customized, context-aware WhatsApp URL generation scripts that pass pre-filled messages mapping specific courses and roles directly to the administration contact, resulting in a friction-free intake process.",
    performanceMetrics: [
      "Sub-300ms core web vitals visual load on standard broadband connections",
      "100% server uptime by completely removing server runtime dependencies",
      "Zero database maintenance overhead"
    ],
    lessonsLearned: "Simplifying tech stacks by migrating backend databases to user-directed integrations (like WhatsApp links) works exceptionally well for small business sites, reducing hosting costs to zero while preserving core marketing functions.",
    futureImprovements: [
      "Implement client-side localized search for classes and workshops",
      "Build a lightweight static calendar generation script using the Google Calendar API",
      "Add full offline support using a service worker cache"
    ],
    codeSnippet: {
      language: "javascript",
      filename: "main.js",
      code: `document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav');
  let lastScrollTop = 0;

  window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
      navbar.classList.add('hide');
    } else {
      navbar.classList.remove('hide');
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});`
    }
  },
  {
    id: "vitespace",
    image: "/vitespace.png",
    title: "Vitespace",
    oneLiner: "A Service based Company Website, that serves as a digital workspace for the company and showcase their services.",
    category: "Full-Stack Web Dev",
    status: "Live & Production-Ready",
    techStack: ["Next.js", "React", "Tailwind CSS", "Three.js", "Vercel", "Framer"],
    timeline: "4 Weeks",
    metrics: [
      { label: "Interactive Nodes", value: "100+" },
      { label: "User Engagement", value: "+60%" }
    ],
    githubUrl: "None",
    liveUrl: "https://www.vitespace.com/",
    problemStatement: "Creative tech organizations need digital workspaces that go beyond standard grids. Vitespace wanted an interactive, immersive, and premium digital portfolio space to showcase collaborative assets.",
    architectureDescription: "Engineered with Next.js and Three.js elements. Displays floating interactive models, connected to a Markdown-powered static blog directory. Powered by Tailwind CSS for clean layout alignments.",
    technicalOverview: "Integrates lightweight 3D scenes (WebGL) with standard React states. Ensures assets are lazily compiled to minimize blocking runtime processes.",
    implementationDetails: [
      "Configured custom WebGL canvases rendering responsive particle systems.",
      "Engineered dynamic MDX blog loader compiling post directories in build steps.",
      "Integrated custom client layouts using nested CSS themes."
    ],
    keyFeatures: [
      "Interactive 3D WebGL scenes using lightweight Three.js components",
      "Responsive portfolio bento alignment maps",
      "Fully-gated MDX blog editor parser"
    ],
    challengesSolved: "Three.js models could cause frame rate drops on mobile devices. We built dynamic model level-of-detail (LOD) triggers that scale down particle counts and disable heavy calculations on mobile CPU browsers.",
    performanceMetrics: [
      "Maintains 60 FPS rendering on desktop systems and modern mobile browsers",
      "Maintains a Lighthouse accessibility score of 100/100",
      "+60% average session duration due to interactive visual nodes"
    ],
    lessonsLearned: "WebGL and 3D layers can be introduced to business designs without sacrificing page accessibility if coupled with fallback overlays and media gates.",
    futureImprovements: [
      "Build real-time multiplayer cursor sharing via WebSockets",
      "Add audio spatial feedback to 3D node clicks",
      "Create dynamic editor template systems"
    ],
    codeSnippet: {
      language: "typescript",
      filename: "scene.ts",
      code: `import * as THREE from 'three';

export function init3DScene(container: HTMLDivElement) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  
  // Create animated floating elements
  const geo = new THREE.IcosahedronGeometry(1, 1);
  const mat = new THREE.MeshNormalMaterial({ wireframe: true });
  const mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);
  
  return { scene, camera, renderer, mesh };
}`
    }
  },
  {
    id: "self-learning-rag",
    title: "Self-Learning RAG",
    oneLiner: "A self-improving retrieval-augmented generation system that tunes its retrieval parameters using MongoDB feedback loops.",
    category: "Generative AI / LLMs",
    status: "Production-Ready",
    techStack: ["Python", "FastAPI", "MongoDB Atlas", "ChromaDB", "SentenceTransformers", "Ollama", "Streamlit"],
    timeline: "3 Months",
    metrics: [
      { label: "Answer Quality", value: "8.0/10" },
      { label: "Rewrite Latency", value: "-2.3s" },
      { label: "Docs Indexed", value: "400K+" }
    ],
    githubUrl: "https://github.com/erratus/Self_learning_rag",
    liveUrl: "None",
    problemStatement: "Traditional RAG systems are static. They apply the same top-K retrieve-and-generate logic to every query, leading to severe issues: query ambiguity results in poor search, missing context causes hallucinations, and repetitive rewriting adds unnecessary LLM latency without self-correction.",
    architectureDescription: "An end-to-end multi-stage pipeline: User Query -> Smart Gated Rewrite -> Hybrid Dense Vector & BM25 Sparse Search -> Cross-Encoder Reranking -> LLM Answer Generation -> LLM-as-Judge Evaluation -> MongoDB Feedback Logs -> Async Learning Loop (dynamically updates Top-K, caches rewrites, generates synthetic recovery guide embeddings, flags bad chunks).",
    technicalOverview: "The core system leverages a dual-loop framework. Loop 1 handles real-time execution (sub-second retrieval and LLM response generation). Loop 2 is an asynchronous background loop that aggregates MongoDB logs to perform cluster evaluation and automatically tune parameters.",
    implementationDetails: [
      "Dynamic Top-K: If a query cluster consistently scores low (< 5.0), the system increases top-K retrieval depth for similar future queries.",
      "Synthetic Re-embeddings: On failure type 'BAD_RETRIEVAL', the LLM generates a synthetic ideal chunk that is indexed into ChromaDB to bridge the semantic gap.",
      "Rewrite Caching: Direct caching of successful original-to-rewritten query mappings in MongoDB, bypassing the LLM rewrite step and saving 2-3 seconds per query.",
      "Adaptive Chunk Flags: Automatic analysis of file sources in failures. Files flagged multiple times are marked for administrator re-chunking."
    ],
    keyFeatures: [
      "Hybrid Search (Dense SentenceTransformers + Sparse BM25)",
      "LLM-as-Judge Evaluation metrics for Relevance, Correctness, and Completeness",
      "Streamlit metrics visualization and admin tuning dashboard",
      "Query-rewriting gate bypassing LLM for long/unambiguous inputs"
    ],
    challengesSolved: "Bypassing the LLM for long queries was hard to gate. We built a classifier based on token lengths and semantic density to ensure only simple, ambiguous queries (e.g. 'how does it work') trigger LLM query expansion, while structured queries bypass the LLM rewrite step, dropping API latency significantly.",
    performanceMetrics: [
      "Average answer quality score increased from 5.5 to 8.0 over a 14-day simulated run",
      "p95 latency reduced by 40% for recurring query patterns",
      "Zero-hallucination rate improved to 96% based on LLM-as-Judge grounding evaluations"
    ],
    lessonsLearned: "Static parameters in AI pipelines are inherently fragile. Continuous feedback collection combined with automated feedback loops can make pipelines resilient to diverse user query patterns without manual retuning.",
    futureImprovements: [
      "Integrate LangGraph for stateful Multi-Agent conversation tracking",
      "Support dynamic hybrid weighting (learning optimal alpha coefficients per query type)",
      "Implement real-time vector database collection merging during runtime"
    ],
    codeSnippet: {
      language: "python",
      filename: "learning.py",
      code: `def trigger_self_learning(feedback_collection, chroma_client):
    """Analyze low-performing query clusters and adjust RAG parameters."""
    low_scores = feedback_collection.find({"eval_score": {"$lt": 5.0}})
    
    # 1. Dynamic Top-K Overrides
    for query in low_scores:
        cluster_id = get_semantic_cluster(query["original_query"])
        feedback_collection.update_many(
            {"cluster_id": cluster_id},
            {"$set": {"top_k_override": 20}}
        )
        
    # 2. Synthetic Re-embedding for BAD_RETRIEVAL
    bad_retrievals = feedback_collection.find({"failure_type": "BAD_RETRIEVAL"})
    for fail in bad_retrievals:
        synthetic_doc = generate_synthetic_context(fail["original_query"])
        chroma_client.add_documents(
            documents=[synthetic_doc],
            metadatas=[{"source": "synthetic_recovery", "query": fail["original_query"]}]
        )`
    }
  },
  {
    id: "codelens",
    image: "/codelens.png",
    title: "CodeLens",
    oneLiner: "Privacy-first offline code reviewer powered by local LLMs (Ollama) and a FastAPI + React stack.",
    category: "Developer Tooling",
    status: "Completed",
    techStack: ["React", "FastAPI", "Ollama", "Tailwind CSS", "Uvicorn", "TypeScript", "highlight.js"],
    timeline: "2 Weeks",
    metrics: [
      { label: "Data Shared", value: "0% (Local)" },
      { label: "Review Time", value: "Sub-5s" },
      { label: "API Endpoints", value: "4 Core" }
    ],
    githubUrl: "https://github.com/erratus/CodeLens",
    liveUrl: "None",
    problemStatement: "Reviewing proprietary code via public cloud models exposes company Intellectual Property to external servers. Developers need a fast, privacy-preserving, local code review tool that fits into their workspace offline.",
    architectureDescription: "FastAPI Backend (serving tools for reading files, directories, and executing review hooks) paired with a Vite + React + Tailwind frontend. The backend calls Ollama locally via WebSocket/HTTP, ensuring no external network requests are made.",
    technicalOverview: "The backend is structured to execute system-level operations locally (like parsing file content and directories) and wrap them into a Model Context Protocol (MCP) compatible schema. Code reviews are structured to analyze style, logic, security bugs, and complexity.",
    implementationDetails: [
      "Completely offline operation by enforcing Ollama API bindings to localhost.",
      "FastAPI endpoint exposes JSON payloads for directory tree parsing and syntax verification.",
      "React UI with customizable review rules and syntax-highlighted side-by-side diff views."
    ],
    keyFeatures: [
      "One-click file and directory listing for workspace ingestion",
      "Offline code reviews powered by Llama 3.1: 8b",
      "Interactive suggestions panel with click-to-copy code improvements",
      "Strict network isolation (zero telemetry or cloud analytics)"
    ],
    challengesSolved: "Tailwind UI elements rendering complex markdown strings from LLMs could overflow. We integrated markdown-it and custom Tailwind layout styles to wrap reviews, tables, and nested structures smoothly inside responsive panels.",
    performanceMetrics: [
      "100% of reviews executed entirely on the local machine",
      "Reviews completed in under 5 seconds utilizing consumer-grade GPU hardware (RTX 3060)",
      "Zero network bytes leaked outside localhost during active analysis sessions"
    ],
    lessonsLearned: "Local models like Llama 3.1: 8b are highly capable of syntax analysis and identifying basic security flaws if prompted with precise role contexts.",
    futureImprovements: [
      "Build a custom VS Code Extension wrapping the local API directly inside the IDE",
      "Add fine-grained support for Git diff comparisons on branch commits",
      "Implement multi-file context tracking to review relationships between modules"
    ],
    codeSnippet: {
      language: "python",
      filename: "server.py",
      code: `@app.post("/review")
async def run_review(payload: CodeReviewPayload):
    """Run code review locally using Ollama."""
    prompt = f"Analyze the following {payload.language} code for bugs, logic errors, and security issues:\\n\\n{payload.code}"
    try:
        response = await call_local_ollama(
            model=settings.OLLAMA_MODEL, 
            prompt=prompt
        )
        return {
            "review": response["response"],
            "model": settings.OLLAMA_MODEL,
            "timestamp": datetime.utcnow()
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))`
    }
  },
  {
    id: "visudocai",
    image: "/visudoc.png",
    title: "VisuDocAI",
    oneLiner: "Full-stack AI document analysis app using OCR and LLMs to parse scanned documents into structured datasets.",
    category: "Computer Vision / NLP",
    status: "MVP Completed",
    techStack: ["Flask", "Tesseract OCR", "pdf2image", "OpenRouter API", "React", "Pillow", "Webpack"],
    timeline: "1 Month",
    metrics: [
      { label: "Extraction Acc.", value: "94.2%" },
      { label: "Max File Size", value: "16MB" },
      { label: "Avg Processing", value: "2.8s" }
    ],
    githubUrl: "https://github.com/erratus/VisudocAI",
    liveUrl: "None",
    problemStatement: "Scanned receipts, bills, and PDFs are unstructured. Standard OCR tools only extract raw text, leaving the data hard to parse. Layout changes render traditional template-based regex parsers useless.",
    architectureDescription: "User uploads PDF/Image -> Poppler converts PDF pages to images -> Tesseract OCR extracts raw texts and bounding boxes -> Text is fed to OpenRouter LLMs with layout-preserving prompts -> LLM returns structured JSON data matching custom schemas.",
    technicalOverview: "The system merges computer vision (Tesseract) with LLM parsing. By passing the raw text alongside spatial information to a highly capable LLM, the LLM infers the relationships of values in table layouts (e.g. invoice items, quantities, and rates).",
    implementationDetails: [
      "React-dropzone UI allows seamless drag-and-drop file imports.",
      "Backend PDF conversion using pdf2image (Poppler bindings) to handle multi-page layout rendering.",
      "Zero-shot parsing prompt templates designed for OpenRouter APIs to minimize token overhead."
    ],
    keyFeatures: [
      "Custom JSON schema configuration for flexible data extractions",
      "Visual OCR output showing matched text regions",
      "Invoice and receipt parser with built-in date and currency normalizers",
      "CSV and JSON dataset export options"
    ],
    challengesSolved: "Low-resolution scanned documents caused high OCR character error rates. We implemented Pillow-based pre-processing (binarization, thresholding, and contrast enhancements) to increase OCR accuracy, which raised structured data match rates from 78% to 94.2%.",
    performanceMetrics: [
      "Average processing time of 2.8 seconds including OCR and LLM roundtrips",
      "94.2% structural extraction accuracy on messy, rotated thermal receipts",
      "Successfully handles documents up to 16MB"
    ],
    lessonsLearned: "LLMs are incredibly robust at interpreting garbled OCR text that would completely break standard regular expression matchers.",
    futureImprovements: [
      "Migrate OCR engine to Microsoft LayoutLM for unified multi-modal document understanding",
      "Implement client-side WASM OCR to reduce server-side document rasterization latency",
      "Add batch processing queues for multi-document asynchronous workloads"
    ],
    codeSnippet: {
      language: "javascript",
      filename: "App.jsx",
      code: `const handleUpload = async (files) => {
  const formData = new FormData();
  formData.append("file", files[0]);
  
  setLoading(true);
  try {
    const response = await axios.post("/api/analyze", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    setExtractionResults(response.data.structured_data);
    setOcrText(response.data.raw_text);
  } catch (err) {
    setError("Failed to parse document. Check API keys and OCR settings.");
  } finally {
    setLoading(false);
  }
};`
    }
  },
  {
    id: "chatapp",
    image: "/chatapp.png",
    title: "💬 CHAT_APP",
    oneLiner: "Real-time chat client and server utilizing Socket.io WebSockets for cross-device instant messaging over LAN.",
    category: "Full Stack Development",
    status: "Completed",
    techStack: ["React", "Node.js", "Express", "Socket.io", "Bootstrap", "Local Storage"],
    timeline: "3 Weeks",
    metrics: [
      { label: "Message Latency", value: "<5ms" },
      { label: "Client Setup", value: "No DB" },
      { label: "Connection", value: "LAN/WiFi" }
    ],
    githubUrl: "https://github.com/erratus/CHAT_APP",
    liveUrl: "None",
    problemStatement: "Instant text messaging over local networks typically requires complicated registration, setup, or cloud reliance. Users need a lightweight, real-time message carrier that runs over standard WiFi without setup.",
    architectureDescription: "Node.js + Express backend serving Socket.io WebSocket servers to manage client handshakes and rooms. The frontend is a React app styled with Bootstrap, featuring local-storage persistence to save chat history offline.",
    technicalOverview: "Clients connect to the server's local IP address over the common LAN port. The server facilitates immediate event broadcasts for incoming messages, user typing statuses, and presence tracking without database overhead.",
    implementationDetails: [
      "Socket.io WebSockets bind communication threads between mobile and desktop devices.",
      "No centralized DB required; state is maintained in LocalStorage on individual client browsers.",
      "Custom unique ID login and contact mapping system."
    ],
    keyFeatures: [
      "Real-time message synchronization with instant feedback",
      "Custom contact list creation using unique identifier strings",
      "Responsive, touch-friendly UI for phone and tablet browsers",
      "Offline message preservation via Browser LocalStorage"
    ],
    challengesSolved: "Cross-origin request blocks and mobile browser restrictions on LAN connections were bypassed by configuring explicit CORS allowances on the Express server and setting the client connection configuration dynamically based on the window.location properties.",
    performanceMetrics: [
      "WebSocket message dispatch-to-receive latency of under 5 milliseconds",
      "Requires less than 15MB server memory under active connection loads",
      "100% of conversations stored securely and locally on user devices"
    ],
    lessonsLearned: "WebSockets and browser storage are extremely powerful for building zero-infrastructure tools that work instantly over local networks without server costs.",
    futureImprovements: [
      "Implement End-to-End Encryption (E2EE) using Web Crypto APIs",
      "Add local file sharing support (images, PDFs) over WebRTC datachannels",
      "Implement multi-device synchronization using mesh P2P networks"
    ],
    codeSnippet: {
      language: "javascript",
      filename: "SocketProvider.js",
      code: `import React, { useContext, useEffect, useState } from 'react';
import io from 'socket.io-client';

const SocketContext = React.createContext();

export function useSocket() { return useContext(SocketContext); }

export function SocketProvider({ id, children }) {
  const [socket, setSocket] = useState();

  useEffect(() => {
    const newSocket = io(
      process.env.VITE_API_URL || 'http://localhost:5000',
      { query: { id } }
    );
    setSocket(newSocket);
    return () => newSocket.close();
  }, [id]);

  return (
    <SocketContext.Provider value={socket}>
      {children}
    </SocketContext.Provider>
  );
}`
    }
  }
];
