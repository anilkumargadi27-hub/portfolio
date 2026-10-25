export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Multi-Agent AI' | 'Full Stack' | 'GenAI & Speech';
  badge: string;
  problem: string;
  overview: string;
  myContribution: string;
  techStack: string[];
  keyFeatures: string[];
  architectureSteps: { step: string; description: string; agent?: string }[];
  technicalChallenges: { challenge: string; solution: string }[];
  metrics: { label: string; value: string }[];
  githubUrl?: string;
  liveDemoUrl?: string;
  featured: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  programType: 'Internship' | 'Leadership' | 'Training / Certification';
  period: string;
  location: string;
  summary: string;
  responsibilities: string[];
  technologies: string[];
  credentialId?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: {
    name: string;
    level: string;
    description: string;
    projectsUsed: string[];
  }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badgeText: string;
  category: 'Generative AI' | 'Web & Programming' | 'Industry';
  verifiedId?: string;
}

export interface Achievement {
  id: string;
  title: string;
  organization: string;
  metric: string;
  description: string;
  badge: string;
}

export const PERSONAL_INFO = {
  name: "Gadi Anilkumar",
  formalName: "GADI ANILKUMAR",
  headline: "Full-Stack & AI Application Developer",
  subHeadline: "Building Intelligent Products at the Intersection of Full Stack Engineering and AI",
  degree: "B.Tech in Computer Science & Engineering (AI & ML)",
  university: "Mohan Babu University (MBU), Tirupati",
  cgpa: "8.90",
  graduationYear: "2027",
  location: "Tirupati, Andhra Pradesh, India",
  email: "anilkumargadi27@gmail.com",
  altEmail: "tolapumani@gmail.com",
  phone: "+91 9014516520",
  linkedIn: "https://www.linkedin.com/in/anilkumar-gadi/",
  github: "https://github.com/anilkumargadi27-hub",
  leetCode: "https://leetcode.com/u/dK631bPM9W/",
  hackerRank: "https://www.hackerrank.com/profile/anilkumargadi27",
  portfolioUrl: "https://portfolio-tan-nine-42.vercel.app/",
  resumePdf: "/Anilkumar_Gadi_Resume.pdf",
  profilePhoto: "/profile.png",
  openToRoles: "Open to SDE, Full-Stack & GenAI Internships | 2027 Full-Time Roles",
  summary: `I build full-stack web applications with autonomous AI agents inside them. Currently pursuing B.Tech in CSE (AI & ML) at Mohan Babu University (CGPA 8.90). I specialize in translating LLM concepts into dependable software architectures using React/Next.js frontends, Node.js/Express backends, MongoDB, and LangChain/LangGraph for multi-agent workflows. Completed an 8-week mentor-led Infosys Springboard internship and solved 200+ DSA problems with 5-Star HackerRank proficiency in Python & SQL.`
};

export const PROJECTS: Project[] = [
  {
    id: "agent-hire",
    title: "AgentHire",
    tagline: "AI-Powered Recruitment Automation Platform",
    category: "Multi-Agent AI",
    badge: "7-Agent LangGraph System",
    problem: "Recruiters spend countless manual hours reading mismatched resumes, filtering unstructured PDFs, and coordinating email feedback, resulting in slow hiring cycles and recruiter fatigue.",
    overview: "AgentHire automates end-to-end resume screening, semantic vector matching, human-in-the-loop candidate shortlisting, and candidate communication through a coordinated 7-agent AI pipeline.",
    myContribution: "Architected the full-stack system using Next.js and Express; engineered the 7-node LangGraph DAG with checkpoint persistence; implemented Qdrant vector retrieval with BAAI/bge-small-en-v1.5 embeddings; designed the interactive React Flow execution dashboard and Resend automated email dispatch.",
    techStack: ["Next.js", "React", "Express.js", "MongoDB", "LangGraph", "LangChain", "Qdrant", "JWT", "React Flow", "Resend API"],
    keyFeatures: [
      "7-agent sequential LangGraph pipeline: Resume Parsing → BAAI Embedding → Semantic Vector Matching → Shortlisting → Human Approval Checkpoint → Interview Scheduling → Email Automation",
      "Resumable state persistence allowing human recruiter intervention before email dispatch",
      "RAG pipeline using Qdrant vector database and BAAI/bge-small-en-v1.5 embeddings for precise candidate-to-job matching",
      "JWT-based recruiter authentication with role-protected dashboard routes",
      "Live workflow execution state visualizer built with React Flow"
    ],
    architectureSteps: [
      { step: "01. Resume Parsing", description: "Extracts structured metadata, skills, work history, and contact details from PDF resumes.", agent: "Parser Agent" },
      { step: "02. Vector Embedding", description: "Generates high-dimensional semantic vectors using BAAI/bge-small-en-v1.5.", agent: "Embedding Agent" },
      { step: "03. Vector RAG Search", description: "Performs cosine similarity search against job requirements in Qdrant Vector DB.", agent: "Matching Agent" },
      { step: "04. Candidate Scoring", description: "Evaluates required vs preferred skill weights and generates recruiter justification.", agent: "Shortlist Agent" },
      { step: "05. Human Approval", description: "Pauses graph execution for recruiter checkpoint review and confirmation.", agent: "Review Checkpoint" },
      { step: "06. Interview Coordinator", description: "Generates calendar availability invites based on recruiter slots.", agent: "Scheduler Agent" },
      { step: "07. Dispatch Automation", description: "Sends tailored acceptance or constructive rejection emails via Resend API.", agent: "Notification Agent" }
    ],
    technicalChallenges: [
      {
        challenge: "Handling complex PDF formats with non-standard column structures and missing sections.",
        solution: "Implemented hierarchical chunking and regex pre-cleaning before feeding text to the parsing agent with strict JSON schema validation."
      },
      {
        challenge: "Preventing autonomous agents from emailing candidates without recruiter verification.",
        solution: "Engineered a LangGraph human-in-the-loop checkpoint that serializes workflow state to MongoDB and resumes execution only upon authenticated recruiter signature."
      }
    ],
    metrics: [
      { label: "Coordinated Agents", value: "7 Agents" },
      { label: "Vector Search Engine", value: "Qdrant DB" },
      { label: "Workflow Engine", value: "LangGraph" },
      { label: "Embedding Model", value: "BAAI/bge-small" }
    ],
    githubUrl: "https://github.com/anilkumargadi27-hub/AGENTICHIRE-AI-1-",
    liveDemoUrl: "https://agentichire-ai-1.vercel.app/",
    featured: true
  },
  {
    id: "ai-venture-studio",
    title: "AI Venture Studio",
    tagline: "Multi-Agent AI Startup Blueprint Platform",
    category: "Multi-Agent AI",
    badge: "11-Agent Sequential Platform",
    problem: "Founders often struggle to turn raw concepts into rigorous PRDs, architecture designs, competitive moats, financial models, and pitch decks without expensive advisory teams.",
    overview: "A full-stack MERN platform running a sequential 11-agent AI workflow that transforms raw startup ideas into comprehensive, investor-ready blueprints with executive debate consensus.",
    myContribution: "Engineered the full-stack MERN architecture; built dual workflow execution modes (manual approval-gated vs auto); integrated local LLM generation via Ollama with deterministic fallback; created the React Flow pipeline canvas and Recharts health-score analytics.",
    techStack: ["React", "Vite", "Node.js", "Express.js", "MongoDB", "Mongoose", "JWT", "Ollama (Local LLM)", "React Flow", "Recharts", "Nodemailer"],
    keyFeatures: [
      "11-agent sequential workflow: Market Research → Competitor Analysis → PRD Generation → Architecture → Financials → GTM Strategy → Pitch Deck Synth",
      "Executive Boardroom module simulating multi-agent debate (CTO, CMO, CFO) to reach consensus",
      "Dual execution engine: Manual approval-gated mode and autonomous batch execution",
      "Local LLM inference via Ollama with zero cloud API costs and deterministic fallback for reliability",
      "Export to PDF, Markdown, and JSON with MongoDB report memory search and in-memory cache"
    ],
    architectureSteps: [
      { step: "01. Market Researcher", description: "Analyzes addressable market size (TAM/SAM/SOM) and target customer pain points.", agent: "Market Agent" },
      { step: "02. Competitor Analyst", description: "Performs SWOT analysis and maps existing direct/indirect competitors.", agent: "Intel Agent" },
      { step: "03. Product Spec (PRD)", description: "Drafts user personas, epics, user stories, and acceptance criteria.", agent: "PRD Agent" },
      { step: "04. System Architect", description: "Defines technology stack, data schemas, cloud infrastructure, and security.", agent: "Arch Agent" },
      { step: "05. Financial Modeler", description: "Projects unit economics, CAC, LTV, pricing tiers, and burn rate runway.", agent: "Finance Agent" },
      { step: "06. Boardroom Debate", description: "Simulates debate between virtual CTO, CFO, and CMO to reach consensus.", agent: "Consensus Agent" },
      { step: "07. Blueprint Synthesis", description: "Compiles investor pitch deck and exports formatted PDF/Markdown packages.", agent: "Export Agent" }
    ],
    technicalChallenges: [
      {
        challenge: "Local LLM latency and variability across 11 sequential generation stages.",
        solution: "Structured intermediate schema enforcement with structured JSON outputs and built a deterministic fallback engine to guarantee pipeline completion."
      },
      {
        challenge: "State loss during lengthy multi-agent generations.",
        solution: "Stored incremental agent artifacts in MongoDB with transactional checkpoints and an in-memory fallback layer for offline resilience."
      }
    ],
    metrics: [
      { label: "Sequential Agents", value: "11 Agents" },
      { label: "Local LLM Engine", value: "Ollama" },
      { label: "Boardroom Debate", value: "Consensus" },
      { label: "Export Formats", value: "PDF / MD / JSON" }
    ],
    githubUrl: "https://github.com/anilkumargadi27-hub/AI_Venture",
    liveDemoUrl: "https://ai-venture-nine.vercel.app/",
    featured: true
  },
  {
    id: "debate-coach",
    title: "Agentic AI Debate Coach",
    tagline: "Live Presentation & Speech Analysis Platform",
    category: "GenAI & Speech",
    badge: "Infosys Springboard Internship",
    problem: "Public speakers, students, and debaters lack objective, real-time feedback on pacing, filler words, tone, and rhetorical structure during rehearsal.",
    overview: "Built during an 8-week mentor-led virtual internship at Infosys Springboard. A 4-role single-page application integrating Google Gemini API and Web Speech API for real-time speech analytics and feedback.",
    myContribution: "Engineered the client-side SPA with vanilla JavaScript; built role-based route guarding for 4 user roles (Learner, Coach, Educator, Admin); implemented Web Speech API real-time processing; integrated Gemini API with token-budgeted multi-turn memory; added Chart.js visualizations, PDF/Excel export, and Docker containerization.",
    techStack: ["Vanilla JavaScript", "Google Gemini API", "Web Speech API", "Chart.js", "jsPDF", "SheetJS", "Docker", "GitHub Actions CI/CD"],
    keyFeatures: [
      "4-role architecture (Learner, Coach, Educator, Admin) with client-side authentication and role-based route guards",
      "Context-aware chatbot powered by Google Gemini API managing multi-turn conversation within strict token budgets",
      "Live speech analysis using browser Web Speech API calculating Words Per Minute (WPM), filler-word frequency, and grammatical accuracy",
      "Interactive Chart.js performance analytics dashboards with historical speech trends",
      "PDF and Excel report generation using jsPDF and SheetJS; Dockerized container and GitHub Actions deployment"
    ],
    architectureSteps: [
      { step: "01. Speech Capture", description: "Streams microphone audio into Web Speech API for real-time phrase transcription." },
      { step: "02. Acoustic & Text Metrics", description: "Computes WPM, hesitation pauses, and counts filler words ('um', 'uh', 'like')." },
      { step: "03. Gemini Evaluation", description: "Sends transcript chunks to Gemini API for rhetorical strength and counter-argument analysis." },
      { step: "04. Dashboard & Export", description: "Renders real-time Chart.js radar charts and compiles downloadable PDF/Excel reports." }
    ],
    technicalChallenges: [
      {
        challenge: "Managing Gemini API token exhaustion over long debate rehearsals.",
        solution: "Designed a sliding-window context compression buffer that summarizes early rounds into condensed prompt memory."
      },
      {
        challenge: "Cross-browser speech recognition latency and intermittent disconnects.",
        solution: "Built an auto-reconnecting stream wrapper with client-side transcript buffering and word timestamping."
      }
    ],
    metrics: [
      { label: "User Roles", value: "4 Roles" },
      { label: "Speech Engine", value: "Web Speech API" },
      { label: "AI Model", value: "Google Gemini" },
      { label: "DevOps", value: "Docker + CI/CD" }
    ],
    liveDemoUrl: "https://ai-debate-coach1-chi.vercel.app/",
    githubUrl: "https://github.com/anilkumargadi27-hub",
    featured: true
  },
  {
    id: "agentflow-ai",
    title: "Agentflow AI",
    tagline: "Natural-Language to Executable Multi-Agent Workflows",
    category: "Multi-Agent AI",
    badge: "Automation DAG Engine",
    problem: "Non-technical users find it difficult to orchestrate cross-platform enterprise automations without writing complex API integrations.",
    overview: "Converts natural language user prompts into validated, executable multi-agent workflows with automated retry/recovery mechanisms and third-party integrations.",
    myContribution: "Developed the workflow compilation engine that translates natural language intentions into directed acyclic graphs (DAGs), implemented multi-agent self-healing retry logic, and built OAuth connectors.",
    techStack: ["React", "Node.js", "Express", "LangChain", "OAuth (Gmail, Slack, Sheets)", "Socket.io", "MongoDB"],
    keyFeatures: [
      "Natural-language intent parsing into structured multi-node execution DAGs",
      "Autonomous error recovery with multi-agent fallback retry loops",
      "Secure OAuth 2.0 integration with Gmail, Slack, and Google Sheets",
      "Real-time WebSocket execution telemetry and node-by-node status tracking"
    ],
    architectureSteps: [
      { step: "01. Intent Deconstruction", description: "Extracts trigger, dependencies, and action targets from user prompt." },
      { step: "02. Graph Compilation", description: "Assembles DAG nodes with inputs, outputs, and validation contracts." },
      { step: "03. Execution & Telemetry", description: "Executes actions across OAuth services with live WebSocket progress streaming." },
      { step: "04. Self-Healing Loop", description: "Catches API rate limits or schema mismatches and invokes recovery agents." }
    ],
    technicalChallenges: [
      {
        challenge: "Third-party API rate limits and unexpected token expirations during automated execution.",
        solution: "Implemented exponential backoff with automated OAuth refresh token rotation and idempotency keys."
      }
    ],
    metrics: [
      { label: "Execution Engine", value: "DAG Directed" },
      { label: "Integrations", value: "Gmail/Slack/Sheets" },
      { label: "Telemetry", value: "Socket.io Live" },
      { label: "Resilience", value: "Self-Healing" }
    ],
    githubUrl: "https://github.com/anilkumargadi",
    featured: false
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "infosys-intern",
    role: "Frontend Developer Intern (AI Integration)",
    organization: "Infosys Springboard",
    programType: "Internship",
    period: "June 2026 – August 2026 (8 Weeks / 3 Months)",
    location: "Virtual Internship 7.0, Batch 1",
    summary: "Built the Agentic AI Debate Coach & Presentation Analysis Platform during an 8-week mentor-led virtual internship.",
    responsibilities: [
      "Built a 4-role (Learner, Coach, Educator, Admin) single-page application in vanilla JavaScript with client-side authentication and role-based route guarding.",
      "Integrated the Google Gemini API for a context-aware in-app chatbot, managing multi-turn conversation history within token limits.",
      "Implemented live speech analysis with the Web Speech API, computing WPM, filler-word frequency, and grammar issues from real-time audio transcripts.",
      "Shipped interactive Chart.js analytics dashboards and PDF/Excel report export functionality (jsPDF, SheetJS).",
      "Containerized the entire application with Docker and established automated deployment pipelines using GitHub Actions CI/CD."
    ],
    technologies: ["JavaScript (ES6+)", "Google Gemini API", "Web Speech API", "Chart.js", "jsPDF", "SheetJS", "Docker", "GitHub Actions"]
  },
  {
    id: "mbu-data-club",
    role: "Data Club Coordinator",
    organization: "Mohan Babu University (MBU), Tirupati",
    programType: "Leadership",
    period: "August 2025 – August 2026 (1 Year 1 Month)",
    location: "Tirupati, Andhra Pradesh, India",
    summary: "Coordinated university-wide technical activities for the student Data Club, collaborating with academic faculty and student developer teams.",
    responsibilities: [
      "Conducted hands-on technical workshops and bootcamps for club members on data structures, Python, AI, and modern web frameworks.",
      "Collaborated with student leadership to plan, organize, and execute technical hackathons and peer coding sessions across campus.",
      "Promoted hands-on problem solving, open-source collaboration, and peer knowledge-sharing across the campus engineering community."
    ],
    technologies: ["Python", "Data Science", "AI / ML Fundamentals", "Technical Mentorship", "Community Building"]
  },
  {
    id: "servicenow-intern",
    role: "ServiceNow Virtual Intern",
    organization: "ServiceNow (via SmartBridge)",
    programType: "Internship",
    period: "May 2026 – June 2026 (2 Months)",
    location: "AICTE-Affiliated Program",
    summary: "Completed the AICTE-affiliated ServiceNow Virtual Internship Program covering enterprise administration and agentic automation.",
    responsibilities: [
      "Covered ServiceNow Administration Fundamentals, Introduction to Agentic AI, Flow Designer, Automated Test Framework (ATF) Essentials, and Reporting.",
      "Built and validated automated enterprise workflows and business intelligence reports on the ServiceNow platform.",
      "Prepared rigorously for the Certified System Administrator (CSA) certification exam."
    ],
    technologies: ["ServiceNow Platform", "Flow Designer", "Automated Test Framework (ATF)", "Agentic AI in Enterprise", "Enterprise Reporting"],
    credentialId: "SNU2027297"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "AI, Agents & ML",
    iconName: "Bot",
    skills: [
      { name: "LangGraph", level: "Production Agent Workflows", description: "Directed graphs with state persistence, cyclic loops, and human-in-the-loop checkpoints", projectsUsed: ["AgentHire"] },
      { name: "LangChain", level: "Chains & Tool Calling", description: "Prompt templates, memory management, and structured output parsers", projectsUsed: ["AgentHire", "Agentflow AI"] },
      { name: "Qdrant Vector DB", level: "Semantic Search & RAG", description: "Dense vector indexing, cosine similarity, payload filtering, and high-performance retrieval", projectsUsed: ["AgentHire"] },
      { name: "Google Gemini API", level: "LLM Integration", description: "Multi-turn context management, token optimization, and structured response schemas", projectsUsed: ["Debate Coach"] },
      { name: "Ollama (Local LLMs)", level: "Edge Inference", description: "Zero-cost local LLM execution with deterministic fallback for resilient enterprise pipelines", projectsUsed: ["AI Venture Studio"] },
      { name: "RAG Pipelines", level: "Advanced Retrieval", description: "Semantic chunking, BAAI embeddings, similarity thresholding, and ground-truth validation", projectsUsed: ["AgentHire"] },
      { name: "Web Speech API", level: "Real-Time Audio", description: "In-browser live speech transcription, WPM computation, and acoustic metric derivation", projectsUsed: ["Debate Coach"] }
    ]
  },
  {
    category: "Programming Languages",
    iconName: "Code2",
    skills: [
      { name: "JavaScript (ES6+)", level: "Core Strength", description: "Asynchronous programming, closures, DOM manipulation, client-side auth & routing", projectsUsed: ["Debate Coach", "AgentHire", "AI Venture Studio"] },
      { name: "TypeScript", level: "Type-Safe Architecture", description: "Interfaces, generics, strict typing, and scalable frontend/backend contracts", projectsUsed: ["Portfolio", "AgentHire"] },
      { name: "Python", level: "5-Star HackerRank", description: "DSA problem solving, data manipulation, automation scripts, and ML fundamentals", projectsUsed: ["Problem Solving", "Data Club"] },
      { name: "SQL", level: "5-Star HackerRank", description: "Relational database schema design, complex joins, indexing, and aggregations", projectsUsed: ["Database Design"] }
    ]
  },
  {
    category: "Frontend Development",
    iconName: "Layout",
    skills: [
      { name: "React.js", level: "Component Engineering", description: "Hooks, custom state machines, Context API, component lifecycle, and virtual DOM", projectsUsed: ["AgentHire", "AI Venture Studio", "Portfolio"] },
      { name: "Next.js", level: "App Router & SSR", description: "Server components, API route guards, dynamic routing, and SEO optimization", projectsUsed: ["AgentHire"] },
      { name: "React Flow", level: "Workflow Canvas", description: "Interactive node-graph visualizers with custom node renderers and live state highlighting", projectsUsed: ["AgentHire", "AI Venture Studio"] },
      { name: "Chart.js & Recharts", level: "Data Visualization", description: "Radar charts, trend analytics, metric dashboards, and real-time audio telemetry", projectsUsed: ["Debate Coach", "AI Venture Studio"] },
      { name: "HTML5 & Modern CSS", level: "Semantic & Responsive", description: "Glassmorphism, CSS Custom Properties, Flexbox, Grid, and neon animations", projectsUsed: ["All Projects"] }
    ]
  },
  {
    category: "Backend Development",
    iconName: "Server",
    skills: [
      { name: "Node.js", level: "Server Runtime", description: "Event-driven asynchronous I/O, REST endpoints, and backend services", projectsUsed: ["AgentHire", "AI Venture Studio", "Agentflow AI"] },
      { name: "Express.js", level: "API Framework", description: "Middleware chains, route protection, error-handling pipelines, and JSON APIs", projectsUsed: ["AgentHire", "AI Venture Studio"] },
      { name: "JWT & Auth", level: "Security", description: "Stateless JSON Web Tokens, bcryptjs hashing, cookie handling, and RBAC", projectsUsed: ["AgentHire", "AI Venture Studio"] },
      { name: "REST APIs", level: "System Integration", description: "Clean endpoint contracts, idempotency, pagination, and status code standards", projectsUsed: ["All Projects"] }
    ]
  },
  {
    category: "Databases & Storage",
    iconName: "Database",
    skills: [
      { name: "MongoDB & Mongoose", level: "Document Store", description: "Schema validation, aggregation pipelines, indexed lookups, and session transactions", projectsUsed: ["AgentHire", "AI Venture Studio"] },
      { name: "Qdrant (Vector DB)", level: "High-Dim Vectors", description: "Collection management, HNSW indexing, and payload-filtered vector matching", projectsUsed: ["AgentHire"] },
      { name: "SQL (MySQL / Postgres)", level: "Relational", description: "Normalized schemas, ACID transactions, foreign keys, and query optimization", projectsUsed: ["NxtWave Academy"] }
    ]
  },
  {
    category: "Tools, DevOps & Fundamentals",
    iconName: "Cpu",
    skills: [
      { name: "Docker", level: "Containerization", description: "Multi-stage Dockerfiles, image optimization, and reproducible environments", projectsUsed: ["Debate Coach"] },
      { name: "Git & GitHub Actions", level: "CI/CD & Versioning", description: "Automated linting, testing, Docker image build, and continuous deployment workflows", projectsUsed: ["All Repositories"] },
      { name: "Linux", level: "OS & Shell", description: "Command-line administration, bash scripting, file permissions, and process management", projectsUsed: ["Development"] },
      { name: "CS Fundamentals (DSA)", level: "200+ Solved", description: "Data structures, algorithms, space/time complexity, OOPs, DBMS, Operating Systems", projectsUsed: ["Competitive Coding"] }
    ]
  }
];

export const EDUCATION = [
  {
    institution: "Mohan Babu University (MBU)",
    degree: "Bachelor of Technology (B.Tech)",
    major: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)",
    period: "2023 – 2027",
    location: "Tirupati, Andhra Pradesh, India",
    grade: "CGPA: 8.90 / 10.0",
    highlights: [
      "Specialized in Artificial Intelligence, Machine Learning, and Intelligent Software Systems",
      "Selected as Data Club Coordinator (2025–2026), leading technical workshops on data and AI",
      "Active NSS Volunteer contributing to university social impact initiatives"
    ]
  },
  {
    institution: "NxtWave CCBP 4.0 Academy",
    degree: "CCBP 4.0 Academy – Genius",
    major: "Industry-Ready Full-Stack & Modern Software Engineering Program",
    period: "Nov 2024 – Nov 2027",
    location: "Online / Hybrid",
    grade: "Online Challenger & Offline Master Cleared",
    highlights: [
      "Rigorous hands-on training in MERN stack, Python, SQL, and Software Engineering Fundamentals",
      "Maintained an exceptional 448-day continuous learning streak",
      "Cleared competitive placement milestone evaluations: Online Challenger & Offline Master"
    ]
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-infosys-genai",
    title: "Principles of Generative AI",
    issuer: "Infosys Springboard",
    date: "March 2026",
    badgeText: "GenAI Core",
    category: "Generative AI"
  },
  {
    id: "cert-ms-linkedin-genai",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft & LinkedIn Learning",
    date: "December 2024",
    badgeText: "Microsoft Certified",
    category: "Generative AI"
  },
  {
    id: "cert-kaggle-google-agents",
    title: "AI Agents Intensive Course",
    issuer: "Kaggle × Google",
    date: "2025",
    badgeText: "Agentic Systems",
    category: "Generative AI"
  },
  {
    id: "cert-servicenow-intern",
    title: "ServiceNow Virtual Internship Program",
    issuer: "ServiceNow & SmartBridge (AICTE)",
    date: "June 2026",
    badgeText: "CSA Ready",
    category: "Industry",
    verifiedId: "SNU2027297"
  },
  {
    id: "cert-nxtwave-sql",
    title: "Introduction to Databases (SQL)",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "September 2026",
    badgeText: "SQL Mastery",
    category: "Web & Programming"
  },
  {
    id: "cert-nxtwave-python",
    title: "Programming Foundations with Python",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "September 2026",
    badgeText: "Python Core",
    category: "Web & Programming"
  },
  {
    id: "cert-nxtwave-responsive",
    title: "Build Your Own Responsive Website",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "April 2025",
    badgeText: "Responsive UI",
    category: "Web & Programming"
  },
  {
    id: "cert-nxtwave-static",
    title: "Build Your Own Static Website",
    issuer: "NxtWave CCBP 4.0 Academy",
    date: "February 2025",
    badgeText: "Web Foundations",
    category: "Web & Programming"
  }
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: "ach-dsa",
    title: "200+ DSA Problems Solved",
    organization: "LeetCode, HackerRank & NxtWave",
    metric: "200+ Problems",
    description: "Consistent problem solver across algorithmic patterns: arrays, two pointers, sliding window, trees, dynamic programming, and graphs.",
    badge: "Problem Solving"
  },
  {
    id: "ach-hackerrank",
    title: "HackerRank 5-Star Coder",
    organization: "HackerRank",
    metric: "5-Star Rating",
    description: "Earned prestigious 5-Star Badges in both Python and SQL through verified algorithmic and database querying challenges.",
    badge: "Python & SQL"
  },
  {
    id: "ach-nxtwave-placement",
    title: "NxtWave Placement Cleared",
    organization: "CCBP 4.0 Academy",
    metric: "Dual Cleared",
    description: "Successfully cleared both Online Challenger (DSA, Frontend, SE Fundamentals) and Offline Master (DSA, Frontend) placement milestones.",
    badge: "Placement Verified"
  },
  {
    id: "ach-streak",
    title: "448-Day Learning Streak",
    organization: "NxtWave Academy",
    metric: "448 Days",
    description: "Demonstrated relentless discipline and continuous growth by coding daily for 448+ consecutive days without interruption.",
    badge: "Consistency"
  },
  {
    id: "ach-xpm",
    title: "XPM 4.0 Fundamentals",
    organization: "CCBP 4.0 Academy",
    metric: "Certificate of Achievement",
    description: "Certified in extreme project management (XPM 4.0), mastering software engineering best practices and delivery cycles.",
    badge: "Engineering Standards"
  }
];
