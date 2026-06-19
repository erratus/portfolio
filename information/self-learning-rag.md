# 🧠 Self-Learning RAG (Retrieval-Augmented Generation)

A production-ready, self-improving Retrieval-Augmented Generation (RAG) system. This system is designed not just to answer queries, but to **measure, diagnose, and learn** from every single user interaction. Over time, it tunes its own retrieval and rewriting parameters using MongoDB feedback loops to minimize hallucinations, optimize latency, and maximize response quality.

---

## 🏗️ Architecture & Query Flow

When a user query is received, it flows through a multi-stage pipeline designed for both execution and evaluation:

```
                  User Query
                      │
                      ▼
[ PHASE 1: ANSWER ] ──────────────────────────────────────────────┐
  1. Smart Gated Rewrite (Bypasses LLM for specific queries)      │
  2. Retrieval (Hybrid Dense Vector + BM25 Sparse Search)         │
  3. Cross-Encoder Reranking (Scores top documents)               │
  4. Context Construction (Includes source relevance scores)      │
  5. Answer Generation (Grounded on context)                      │
  6. LLM-as-Judge Evaluation (Scores Relevance, Correctness, ...)  │
                      │                                           │
                      ▼                                           │
[ PHASE 2: FEEDBACK ] ────────────────────────────────────────────┼─ MongoDB Atlas
  • Log query, rewrite details, retrieved chunks, score details  │
                      │                                           │
                      ▼                                           │
[ PHASE 3: LEARNING ] ────────────────────────────────────────────┘
  • Adjust parameters dynamically based on failures:
    - Top-K Overrides (Boosts retrieval depth for hard queries)
    - Synthetic Re-embeddings (Creates guides for BAD_RETRIEVALs)
    - Caching Successful Rewrites (Zero-latency rewrite replay)
    - Chunk Tuning Flags (Flags files for re-chunking)
```

---

## 📁 Repository Structure

```filepath
├── metrics/                        # Metrics Collection & Visualization Dashboard
│   ├── collect_metrics.py          # Aggregates MongoDB feedback logs and generates reports
│   ├── dashboard.py                # Sleek, dark-mode Streamlit metrics visualization
│   ├── metrics_report.txt          # Exported text representation of the latest metrics report
│   ├── requirements.txt            # Dashboard-specific dependencies (plotly, streamlit, pandas)
│   └── seed_demo_data.py           # Populates MongoDB with mock data to simulate improvement
│
├── rag_mvp/                        # Core MVP Implementation
│   ├── api.py                      # FastAPI Backend (Endpoints for /query, /metrics, /trigger-learning)
│   ├── config.py                   # Centralized Configuration (Thresholds, model names, DB collections)
│   ├── feedback.py                 # MongoDB interface to save/read queries and feedback logs
│   ├── ingest.py                   # Document ingestion CLI (Chops files, embeds with SentenceTransformers, writes to Chroma)
│   ├── learning.py                 # Runs the background/async self-improvement algorithms
│   ├── pipeline.py                 # RAG pipeline logic (Rewrite → Retrieve → Rerank → Generate → Evaluate)
│   ├── ui.py                       # User-facing Chat Interface (Streamlit)
│   ├── QUERY_FLOW_AND_LEARNING.md  # Detailed technical walkthrough of the pipeline operations
│   ├── INTERVIEW_PREP.md           # Engineering decision rationale, design trade-offs, and FAQ
│   └── requirements.txt            # Core RAG dependencies (fastapi, chromadb, sentence-transformers, torch, pymongo)
│
└── venv/                           # Python Virtual Environment
```

---

## ⚡ The Four Self-Learning Strategies

Unlike static RAG pipelines, this system leverages historical feedback to adaptively auto-tune:

1. **Dynamic Top-K Override**  
   If a semantic query cluster consistently fails to meet quality standards (`avg_score < 5.0`), the learning loop flags its vector space. On subsequent similar queries, the system dynamically boosts the number of retrieved chunks (e.g., `top-k` is doubled from `10` to `20`), broadening context retrieval.
   
2. **Synthetic Re-Embedding (BAD_RETRIEVAL Recovery)**  
   When retrieval yields zero helpful documents (`failure_type == "BAD_RETRIEVAL"`), the system asks the LLM to generate a synthetic ideal document describing the information that *should* exist. This placeholder is embedded and indexed in Chroma to steer future queries to the correct semantic region.

3. **Learned Rewrite Patterns**  
   Short or ambiguous queries (e.g., "How does it work?") are rewritten using an LLM to be more retrieval-friendly. However, blind rewriting on long queries degrades scores and adds latency. The system gates rewrites by length and builds a database of high-scoring original-to-rewritten pairs. Future similar queries fetch the rewrite directly from MongoDB, bypassing the LLM call and saving 2–3 seconds.

4. **Adaptive Chunk Tuning Flags**  
   If a particular source document (e.g., a specific PDF guide) is referenced in three or more `MISSING_CONTEXT` failures, it is flagged in MongoDB. This warns administrators that the document was poorly chunked and requires re-ingestion with smaller, more precise chunk sizes.

---

## ⚙️ Prerequisites & Setup

### 1. Requirements & Core Services
Ensure you have the following installed and running:
* **Python 3.10+**
* **MongoDB** (Local instance or MongoDB Atlas cluster connection string)
* **Ollama** running locally with the configured model (default: `llama3.1:8b` or `llama3:8b`)
  ```bash
  # Check if Ollama is running and download the model
  ollama pull llama3.1:8b
  ```

### 2. Install Dependencies
Initialize the virtual environment and install dependencies:
```bash
source venv/bin/activate
pip install -r rag_mvp/requirements.txt
pip install -r metrics/requirements.txt
```

### 3. Environment Configuration
Create a `.env` file in `rag_mvp/` folder containing your local/Atlas credentials:
```env
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=llama3.1:8b
MONGO_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?retryWrites=true&w=majority
CHROMA_PERSIST_DIR=./chroma_data
```

---

## 🚀 Running the Project

Follow these steps to run the self-learning pipeline:

### Step 1: Ingest Data
Place your source files (`.txt` or `.pdf` formats) in the target directory (e.g. `rag_mvp/data/`) and run the ingestion pipeline:
```bash
python rag_mvp/ingest.py rag_mvp/data
```

### Step 2: Start the FastAPI Backend API
Start the server that coordinates pipeline executions, logs feedback, and runs learning triggers:
```bash
python rag_mvp/api.py
```
The API is exposed at `http://localhost:8000`. You can inspect endpoints by visiting `http://localhost:8000/docs`.

### Step 3: Launch the Chat Client
Open the Streamlit-based UI to send queries to the pipeline and view real-time LLM-as-judge scores:
```bash
streamlit run rag_mvp/ui.py
```
Access the dashboard in your browser (typically `http://localhost:8501`).

---

## 📊 Evaluation & Metrics Dashboard

The system includes tools to audit evaluation trends and visualize performance over time.

### Seeding Demo Data
To view the dashboard with populated statistics before driving real query traffic, seed the database:
```bash
python metrics/seed_demo_data.py --wipe --count 50
```
This simulates 50 queries across 14 days, demonstrating a clear learning curve where scores gradually climb from `~5.5` to `~8.0` as top-k and query rewrite caches accumulate.

### Collecting Metrics (Text Report)
Generate a command-line textual performance report:
```bash
python metrics/collect_metrics.py --out metrics/metrics_report.txt
```
This logs a summary detailing answer quality trends, retrieval pass/fail rates, latency percentiles, and dynamic overrides.

### Visual Metrics Dashboard
Launch the dedicated metrics visualizer:
```bash
streamlit run metrics/dashboard.py
```
This displays a dark-themed UI reporting:
* **Answer Quality (LLM-as-Judge):** Relevance, correctness, and completeness metrics.
* **Before vs. After Analysis:** Quantifiable proof of improvement (e.g., pass rate gains).
* **Failure Analysis:** Breakdowns of issues (e.g., `MISSING_CONTEXT` vs. `BAD_RETRIEVAL`).
* **Rewrite Gate Metrics:** Gated passthrough vs. LLM-rewritten score and latency differences.
* **End-to-End Latency:** Mean, p50, and p95 benchmarks.
