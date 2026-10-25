import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal as TerminalIcon, 
  Cpu, 
  Workflow, 
  Play, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Layers, 
  Search, 
  ArrowRight,
  Database,
  Code2
} from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';
import { sounds } from '../utils/sound';
import confetti from 'canvas-confetti';

export const CommandCenter: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terminal' | 'agents' | 'dsa'>('terminal');

  // Terminal State
  const [commandInput, setCommandInput] = useState('');
  const [history, setHistory] = useState<Array<{ text: string; isUser?: boolean; isError?: boolean }>>([
    { text: 'ANILKUMAR GADI // ENGINEERING COMMAND CENTER v2.4.0 [READY]' },
    { text: 'Type "help" to display accessible system commands, or test the live agent simulator.' }
  ]);
  const terminalBottomRef = useRef<HTMLDivElement | null>(null);

  // Agent Pipeline Simulator State
  const [selectedAgentProject, setSelectedAgentProject] = useState<'agent-hire' | 'ai-venture'>('agent-hire');
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [activeStepIndex, setActiveStepIndex] = useState(-1);
  const [waitingForHumanApproval, setWaitingForHumanApproval] = useState(false);
  const [simLogs, setSimLogs] = useState<string[]>([]);

  // DSA Filter State
  const [dsaCategory, setDsaCategory] = useState<'All' | 'DSA' | 'Python' | 'SQL' | 'System Design'>('All');

  useEffect(() => {
    if (activeTab === 'terminal') {
      terminalBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [history, activeTab]);

  // Handle Terminal Execution
  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = commandInput.trim().toLowerCase();
    if (!cmd) return;

    sounds.playAction();
    const newHistory = [...history, { text: `user@anilkumar:~$ ${commandInput}`, isUser: true }];

    switch (cmd) {
      case 'help':
        newHistory.push({
          text: `AVAILABLE COMMANDS:
  about        - View engineering background and academic profile (MBU CGPA 8.90)
  skills       - View full-stack & AI agent technical stack
  projects     - List verified projects (AgentHire, AI Venture Studio, Debate Coach)
  agenthire    - Inspect 7-agent LangGraph recruitment architecture
  aiventure    - Inspect 11-agent startup blueprint platform with Ollama
  dsa          - View DSA problem solving statistics & 5★ ratings
  experience   - View Infosys Springboard & ServiceNow internship history
  contact      - Display verified recruiter contact points & links
  resume       - Trigger official resume PDF download with confetti
  clear        - Clear terminal log`
        });
        break;

      case 'about':
        newHistory.push({
          text: `GADI ANILKUMAR - B.Tech CSE (AI & ML) @ Mohan Babu University (CGPA 8.90).
Specializing in production multi-agent systems (LangGraph), vector search (Qdrant), and scalable web architectures (MERN/Next.js). Completed 8-week Infosys Springboard internship.`
        });
        break;

      case 'skills':
        newHistory.push({
          text: `TECHNICAL SKILLS:
  Languages:  JavaScript (ES6+), TypeScript, Python (5★), SQL (5★)
  AI & Agents: LangGraph, LangChain, Qdrant Vector DB, RAG, Google Gemini API, Ollama
  Frontend:    React.js, Next.js, React Flow, Chart.js, Recharts, Modern CSS
  Backend:     Node.js, Express.js, JWT, RESTful APIs, Web Speech API
  Databases:   MongoDB, Mongoose, Qdrant, SQL (MySQL)
  DevOps/CS:   Docker, GitHub Actions CI/CD, Linux, 200+ DSA Solved`
        });
        break;

      case 'projects':
        newHistory.push({
          text: `FEATURED PROJECTS:
  1. AgentHire          - 7-Agent LangGraph recruiting pipeline with Qdrant RAG matching
  2. AI Venture Studio  - 11-Agent startup blueprint platform with Ollama & boardroom debate
  3. Debate Coach       - 4-Role SPA with Google Gemini & Web Speech API (Infosys Springboard)
  4. Agentflow AI       - Natural language prompt to executable DAG automation`
        });
        break;

      case 'agenthire':
        newHistory.push({
          text: `[AgentHire Architecture]:
  Pipeline: PDF Parser -> BAAI Embedder -> Qdrant Vector Matcher -> Candidate Shortlister
           -> [HUMAN APPROVAL CHECKPOINT] -> Interview Coordinator -> Resend Email Dispatch
  Stack:    Next.js, Express, MongoDB, LangGraph, Qdrant, React Flow, Resend`
        });
        break;

      case 'aiventure':
        newHistory.push({
          text: `[AI Venture Studio Architecture]:
  Pipeline: Market Research -> Competitor Intel -> PRD Spec -> System Arch -> Financials
           -> Boardroom Multi-Agent Consensus Debate -> Pitch Deck Synthesis
  Stack:    React, Node.js, Express, MongoDB, Ollama (Local LLM with fallback), React Flow`
        });
        break;

      case 'dsa':
        newHistory.push({
          text: `DSA PROFILE:
  - 200+ Problems Solved across LeetCode, HackerRank, and NxtWave
  - HackerRank 5-Star Coder in Python
  - HackerRank 5-Star Coder in SQL
  - NxtWave Online Challenger & Offline Master Placement Cleared
  - 448-Day Continuous Daily Learning Streak`
        });
        break;

      case 'experience':
        newHistory.push({
          text: `WORK EXPERIENCE & INTERNSHIPS:
  1. Infosys Springboard - Frontend Developer Intern (AI Integration), Jun-Aug 2026 (8 Weeks)
  2. Mohan Babu University - Data Club Coordinator, Aug 2025-Aug 2026 (1 Year 1 Month)
  3. ServiceNow - Virtual Internship (AICTE/SmartBridge), May-Jun 2026 (Cert: SNU2027297)`
        });
        break;

      case 'contact':
        newHistory.push({
          text: `RECRUITER CONTACT DETAILS:
  Email:    ${PERSONAL_INFO.email} / ${PERSONAL_INFO.altEmail}
  Phone:    ${PERSONAL_INFO.phone}
  Location: ${PERSONAL_INFO.location}
  LinkedIn: ${PERSONAL_INFO.linkedIn}
  GitHub:   ${PERSONAL_INFO.github}`
        });
        break;

      case 'resume':
        confetti({ particleCount: 70, spread: 60 });
        sounds.playSuccess();
        window.open('/Anilkumar_Gadi_Resume.pdf', '_blank');
        newHistory.push({ text: `Downloading official resume: Gadi_Anilkumar_Resume.pdf...` });
        break;

      case 'clear':
        setHistory([]);
        setCommandInput('');
        return;

      default:
        newHistory.push({
          text: `Command not recognized: "${cmd}". Type "help" for a list of available commands.`,
          isError: true
        });
    }

    setHistory(newHistory);
    setCommandInput('');
  };

  // Run Agent Simulation
  const agentSteps = selectedAgentProject === 'agent-hire'
    ? [
        { name: 'Resume Parsing Agent', role: 'Extracts structured skills, work history, and education from candidate PDF.' },
        { name: 'BAAI Vector Embedder', role: 'Generates dense 384-dim semantic embeddings via bge-small-en-v1.5.' },
        { name: 'Qdrant Vector Matcher', role: 'Executes cosine similarity search against job criteria with payload filters.' },
        { name: 'Shortlisting Evaluator', role: 'Calculates skill weights and generates recruiter justification score.' },
        { name: 'Human Approval Checkpoint', role: 'Pauses LangGraph execution for recruiter verification before email trigger.', isCheckpoint: true },
        { name: 'Interview Coordinator', role: 'Queries recruiter availability and provisions calendar invites.' },
        { name: 'Resend Email Dispatch', role: 'Dispatches personalized acceptance invitation or constructive feedback.' }
      ]
    : [
        { name: 'Market Research Agent', role: 'Calculates addressable market size (TAM/SAM/SOM) and customer persona.' },
        { name: 'Competitor Intel Agent', role: 'Compiles direct and indirect competitor SWOT matrix.' },
        { name: 'Product Spec (PRD) Agent', role: 'Drafts user stories, features, and engineering acceptance criteria.' },
        { name: 'System Architect Agent', role: 'Defines microservices, MongoDB schemas, and API contracts.' },
        { name: 'Financial Modeler Agent', role: 'Projects unit economics, CAC, LTV, and monthly burn rate.' },
        { name: 'Boardroom Debate Agent', role: 'Simulates consensus debate between virtual CTO, CFO, and CMO personas.' },
        { name: 'Blueprint Synthesis Agent', role: 'Compiles investor-ready package and formats PDF/Markdown exports.' }
      ];

  const startAgentSimulation = () => {
    sounds.playAction();
    setSimulationRunning(true);
    setActiveStepIndex(0);
    setWaitingForHumanApproval(false);
    setSimLogs([`[0.00s] Initializing ${selectedAgentProject === 'agent-hire' ? 'AgentHire 7-Agent DAG' : 'AI Venture Studio 11-Agent DAG'}...`]);
    executeSimulationStep(0);
  };

  const executeSimulationStep = (stepIdx: number) => {
    if (stepIdx >= agentSteps.length) {
      setSimulationRunning(false);
      setActiveStepIndex(agentSteps.length);
      setSimLogs((prev) => [...prev, `[SUCCESS] Pipeline completed all stages. State saved to database.`]);
      sounds.playSuccess();
      confetti({ particleCount: 50, spread: 50 });
      return;
    }

    const currentStep = agentSteps[stepIdx];
    setActiveStepIndex(stepIdx);
    setSimLogs((prev) => [...prev, `[Step ${stepIdx + 1}/${agentSteps.length}] Executing: ${currentStep.name}...`]);

    if (currentStep.isCheckpoint) {
      // Pause for human approval
      setTimeout(() => {
        setWaitingForHumanApproval(true);
        setSimLogs((prev) => [
          ...prev,
          `[HUMAN-IN-THE-LOOP CHECKPOINT]: Execution paused. Waiting for recruiter sign-off before dispatching external emails...`
        ]);
      }, 1200);
      return;
    }

    setTimeout(() => {
      executeSimulationStep(stepIdx + 1);
    }, 1400);
  };

  const handleApproveCheckpoint = () => {
    sounds.playSuccess();
    setWaitingForHumanApproval(false);
    setSimLogs((prev) => [...prev, `[RECRUITER APPROVED]: Authorization granted. Resuming LangGraph state machine...`]);
    executeSimulationStep(activeStepIndex + 1);
  };

  const resetAgentSimulation = () => {
    sounds.playClick();
    setSimulationRunning(false);
    setActiveStepIndex(-1);
    setWaitingForHumanApproval(false);
    setSimLogs([]);
  };

  return (
    <section id="command-center" style={{ padding: '80px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(168, 85, 247, 0.1)',
              border: '1px solid rgba(168, 85, 247, 0.4)',
              color: '#c084fc',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              marginBottom: '14px'
            }}
          >
            <Sparkles size={13} />
            <span>02 // SIGNATURE INTERACTIVE FEATURE</span>
          </div>

          <h2
            className="font-display"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 2.8rem)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              marginBottom: '14px'
            }}
          >
            Engineering <span className="gradient-text-purple">Command Center</span>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#94a3b8',
              maxWidth: '680px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            An interactive developer console to inspect multi-agent DAG architectures,
            execute CLI queries, and explore problem-solving credentials.
          </p>
        </div>

        {/* Command Center Tabs */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '32px',
            flexWrap: 'wrap'
          }}
        >
          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('terminal');
            }}
            onMouseEnter={() => sounds.playHover()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '10px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeTab === 'terminal' ? 'rgba(0, 245, 255, 0.15)' : 'rgba(15, 23, 42, 0.7)',
              border: '1px solid',
              borderColor: activeTab === 'terminal' ? '#00f5ff' : 'rgba(148, 163, 184, 0.2)',
              color: activeTab === 'terminal' ? '#00f5ff' : '#94a3b8',
              boxShadow: activeTab === 'terminal' ? '0 0 15px rgba(0, 245, 255, 0.25)' : 'none'
            }}
          >
            <TerminalIcon size={16} />
            <span>Interactive Terminal</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('agents');
            }}
            onMouseEnter={() => sounds.playHover()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '10px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeTab === 'agents' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(15, 23, 42, 0.7)',
              border: '1px solid',
              borderColor: activeTab === 'agents' ? '#a855f7' : 'rgba(148, 163, 184, 0.2)',
              color: activeTab === 'agents' ? '#c084fc' : '#94a3b8',
              boxShadow: activeTab === 'agents' ? '0 0 15px rgba(168, 85, 247, 0.25)' : 'none'
            }}
          >
            <Workflow size={16} />
            <span>Multi-Agent DAG Simulator</span>
          </button>

          <button
            onClick={() => {
              sounds.playClick();
              setActiveTab('dsa');
            }}
            onMouseEnter={() => sounds.playHover()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '10px 22px',
              borderRadius: '10px',
              fontFamily: 'var(--font-display)',
              fontWeight: 600,
              fontSize: '0.9rem',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              background: activeTab === 'dsa' ? 'rgba(56, 189, 248, 0.15)' : 'rgba(15, 23, 42, 0.7)',
              border: '1px solid',
              borderColor: activeTab === 'dsa' ? '#38bdf8' : 'rgba(148, 163, 184, 0.2)',
              color: activeTab === 'dsa' ? '#38bdf8' : '#94a3b8',
              boxShadow: activeTab === 'dsa' ? '0 0 15px rgba(56, 189, 248, 0.25)' : 'none'
            }}
          >
            <Code2 size={16} />
            <span>DSA & Problem Solving Matrix</span>
          </button>
        </div>

        {/* TAB 1: INTERACTIVE TERMINAL */}
        {activeTab === 'terminal' && (
          <div
            className="glass-card"
            style={{
              borderRadius: '16px',
              border: '1px solid rgba(0, 245, 255, 0.35)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(0, 245, 255, 0.15)',
              overflow: 'hidden'
            }}
          >
            {/* Terminal Window Header Bar */}
            <div
              style={{
                padding: '12px 18px',
                background: 'rgba(7, 13, 29, 0.95)',
                borderBottom: '1px solid rgba(0, 245, 255, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#f59e0b' }} />
                <span style={{ width: '11px', height: '11px', borderRadius: '50%', backgroundColor: '#10b981' }} />
                <span
                  style={{
                    marginLeft: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: '#94a3b8'
                  }}
                >
                  anilkumar@portfolio-terminal:~
                </span>
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#00f5ff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00f5ff' }} />
                <span>SHELL CONNECTED</span>
              </div>
            </div>

            {/* Terminal Body */}
            <div
              style={{
                height: '340px',
                overflowY: 'auto',
                padding: '20px',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.86rem',
                lineHeight: 1.6,
                backgroundColor: 'rgba(3, 7, 18, 0.92)'
              }}
            >
              {history.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    marginBottom: '10px',
                    color: item.isError ? '#f43f5e' : item.isUser ? '#00f5ff' : '#cbd5e1',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {item.text}
                </div>
              ))}
              <div ref={terminalBottomRef} />
            </div>

            {/* Terminal Input Form */}
            <form
              onSubmit={handleCommandSubmit}
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '12px 18px',
                background: 'rgba(7, 13, 29, 0.95)',
                borderTop: '1px solid rgba(0, 245, 255, 0.15)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  color: '#00f5ff',
                  marginRight: '10px',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                user@anilkumar:~$
              </span>
              <input
                type="text"
                value={commandInput}
                onChange={(e) => setCommandInput(e.target.value)}
                placeholder="Type 'help', 'skills', 'projects', 'agenthire', 'resume'..."
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.88rem'
                }}
                autoFocus
              />
              <button
                type="submit"
                style={{
                  padding: '6px 14px',
                  borderRadius: '6px',
                  background: 'rgba(0, 245, 255, 0.15)',
                  border: '1px solid rgba(0, 245, 255, 0.4)',
                  color: '#00f5ff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  cursor: 'pointer'
                }}
              >
                Execute
              </button>
            </form>

            {/* Quick Command Pills for Recruiters */}
            <div
              style={{
                padding: '10px 18px',
                background: 'rgba(4, 9, 20, 0.95)',
                borderTop: '1px solid rgba(148, 163, 184, 0.08)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                flexWrap: 'wrap'
              }}
            >
              <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                Click to run:
              </span>
              {['help', 'about', 'skills', 'projects', 'agenthire', 'aiventure', 'dsa', 'resume'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => {
                    setCommandInput(cmd);
                    sounds.playHover();
                  }}
                  style={{
                    padding: '2px 8px',
                    borderRadius: '4px',
                    background: 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid rgba(56, 189, 248, 0.2)',
                    color: '#94a3b8',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#00f5ff';
                    e.currentTarget.style.borderColor = '#00f5ff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.2)';
                  }}
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: MULTI-AGENT DAG SIMULATOR */}
        {activeTab === 'agents' && (
          <div
            className="glass-card"
            style={{
              padding: '30px',
              border: '1px solid rgba(168, 85, 247, 0.35)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(168, 85, 247, 0.15)'
            }}
          >
            {/* Simulator Controls */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '28px'
              }}
            >
              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={() => {
                    setSelectedAgentProject('agent-hire');
                    resetAgentSimulation();
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    background: selectedAgentProject === 'agent-hire' ? 'rgba(0, 245, 255, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid',
                    borderColor: selectedAgentProject === 'agent-hire' ? '#00f5ff' : 'rgba(148, 163, 184, 0.2)',
                    color: selectedAgentProject === 'agent-hire' ? '#00f5ff' : '#94a3b8'
                  }}
                >
                  AgentHire (7-Agent LangGraph)
                </button>

                <button
                  onClick={() => {
                    setSelectedAgentProject('ai-venture');
                    resetAgentSimulation();
                  }}
                  style={{
                    padding: '8px 16px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-display)',
                    fontWeight: 600,
                    fontSize: '0.85rem',
                    cursor: 'pointer',
                    background: selectedAgentProject === 'ai-venture' ? 'rgba(168, 85, 247, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid',
                    borderColor: selectedAgentProject === 'ai-venture' ? '#a855f7' : 'rgba(148, 163, 184, 0.2)',
                    color: selectedAgentProject === 'ai-venture' ? '#c084fc' : '#94a3b8'
                  }}
                >
                  AI Venture Studio (11-Agent Sequential)
                </button>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button
                  onClick={startAgentSimulation}
                  disabled={simulationRunning && !waitingForHumanApproval}
                  className="btn-neon-primary"
                  style={{ padding: '8px 18px', fontSize: '0.85rem' }}
                >
                  <Play size={15} />
                  <span>{simulationRunning ? 'Simulation In Progress...' : 'Run Simulation'}</span>
                </button>

                <button
                  onClick={resetAgentSimulation}
                  className="btn-neon-ghost"
                  style={{ padding: '8px 14px', fontSize: '0.85rem' }}
                >
                  <RotateCcw size={15} />
                  <span>Reset</span>
                </button>
              </div>
            </div>

            {/* Pipeline Step Cards Visualization */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
                gap: '14px',
                marginBottom: '24px'
              }}
            >
              {agentSteps.map((step, idx) => {
                const isCurrent = activeStepIndex === idx;
                const isCompleted = activeStepIndex > idx;
                const isPending = activeStepIndex < idx;

                return (
                  <div
                    key={idx}
                    style={{
                      padding: '16px',
                      borderRadius: '12px',
                      backgroundColor: isCurrent
                        ? 'rgba(0, 245, 255, 0.1)'
                        : isCompleted
                        ? 'rgba(16, 185, 129, 0.08)'
                        : 'rgba(15, 23, 42, 0.65)',
                      border: '1px solid',
                      borderColor: isCurrent
                        ? '#00f5ff'
                        : isCompleted
                        ? 'rgba(16, 185, 129, 0.4)'
                        : 'rgba(148, 163, 184, 0.12)',
                      boxShadow: isCurrent ? '0 0 20px rgba(0, 245, 255, 0.25)' : 'none',
                      transition: 'all 0.3s ease',
                      position: 'relative'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: isCurrent ? '#00f5ff' : isCompleted ? '#34d399' : '#64748b',
                          fontWeight: 700
                        }}
                      >
                        NODE 0{idx + 1}
                      </span>

                      {isCompleted ? (
                        <CheckCircle2 size={16} color="#10b981" />
                      ) : isCurrent ? (
                        <span
                          className="status-beacon"
                          style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#00f5ff' }}
                        />
                      ) : (
                        <span style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>PENDING</span>
                      )}
                    </div>

                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.92rem',
                        fontWeight: 700,
                        color: isCurrent ? '#ffffff' : isCompleted ? '#e2e8f0' : '#94a3b8',
                        marginBottom: '4px'
                      }}
                    >
                      {step.name}
                    </h4>

                    <p style={{ fontSize: '0.78rem', color: '#94a3b8', lineHeight: 1.4 }}>
                      {step.role}
                    </p>

                    {step.isCheckpoint && (
                      <div
                        style={{
                          marginTop: '8px',
                          display: 'inline-block',
                          padding: '2px 6px',
                          borderRadius: '4px',
                          background: 'rgba(245, 158, 11, 0.15)',
                          border: '1px solid rgba(245, 158, 11, 0.4)',
                          color: '#f59e0b',
                          fontSize: '0.68rem',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        HUMAN CHECKPOINT
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Human-In-The-Loop Approval Banner */}
            {waitingForHumanApproval && (
              <div
                style={{
                  padding: '16px 20px',
                  borderRadius: '12px',
                  background: 'rgba(245, 158, 11, 0.12)',
                  border: '1.5px solid #f59e0b',
                  boxShadow: '0 0 25px rgba(245, 158, 11, 0.25)',
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '14px',
                  marginBottom: '20px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <AlertCircle size={24} color="#f59e0b" />
                  <div>
                    <div style={{ fontWeight: 700, color: '#fef3c7', fontSize: '0.92rem' }}>
                      Human Recruiter Verification Required
                    </div>
                    <div style={{ fontSize: '0.8rem', color: '#fde68a' }}>
                      Candidate matched at 94.2% cosine similarity. Confirm shortlist to trigger automated interview dispatch?
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleApproveCheckpoint}
                  className="btn-neon-primary"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #d97706)',
                    borderColor: '#f59e0b',
                    boxShadow: '0 0 15px rgba(245, 158, 11, 0.5)'
                  }}
                >
                  <CheckCircle2 size={16} />
                  <span>Authorize & Continue Execution</span>
                </button>
              </div>
            )}

            {/* Execution Telemetry Log */}
            <div
              style={{
                padding: '14px 18px',
                borderRadius: '10px',
                background: 'rgba(3, 7, 18, 0.9)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                maxHeight: '120px',
                overflowY: 'auto'
              }}
            >
              <div style={{ color: '#64748b', marginBottom: '6px' }}>// EXECUTION TELEMETRY LOG:</div>
              {simLogs.length === 0 ? (
                <div style={{ color: '#64748b' }}>Click "Run Simulation" to observe agent state progression...</div>
              ) : (
                simLogs.map((log, i) => (
                  <div key={i} style={{ color: log.includes('SUCCESS') ? '#10b981' : log.includes('HUMAN') ? '#f59e0b' : '#38bdf8' }}>
                    {log}
                  </div>
                ))
              )}
            </div>
          </div>
        )}

        {/* TAB 3: DSA & PROBLEM SOLVING MATRIX */}
        {activeTab === 'dsa' && (
          <div
            className="glass-card"
            style={{
              padding: '32px',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.8), 0 0 25px rgba(56, 189, 248, 0.15)'
            }}
          >
            {/* Verified Credentials Highlights */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: '16px',
                marginBottom: '28px'
              }}
            >
              <div
                style={{
                  padding: '18px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(0, 245, 255, 0.3)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  TOTAL PROBLEMS SOLVED
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#00f5ff', fontFamily: 'var(--font-display)' }}>
                  200+
                </div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>LeetCode, HackerRank, NxtWave</div>
              </div>

              <div
                style={{
                  padding: '18px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  HACKERRANK RATINGS
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#10b981', fontFamily: 'var(--font-display)' }}>
                  5★ Coder
                </div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Python & SQL Badges</div>
              </div>

              <div
                style={{
                  padding: '18px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(168, 85, 247, 0.3)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  NXTWAVE EVALUATIONS
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#c084fc', fontFamily: 'var(--font-display)' }}>
                  Master
                </div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Online Challenger & Offline Master</div>
              </div>

              <div
                style={{
                  padding: '18px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(245, 158, 11, 0.3)'
                }}
              >
                <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  LEARNING DISCIPLINE
                </div>
                <div style={{ fontSize: '1.8rem', fontWeight: 800, color: '#f59e0b', fontFamily: 'var(--font-display)' }}>
                  448 Days
                </div>
                <div style={{ fontSize: '0.78rem', color: '#cbd5e1' }}>Continuous Daily Streak</div>
              </div>
            </div>

            {/* Categorized Problem Matrix */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px' }}>
              {[
                { topic: 'Arrays, Two Pointers & Sliding Window', count: '65+ Solved', platform: 'LeetCode / NxtWave', keyPatterns: 'Subarrays, Kadane\'s, Prefix Sums, Dutch National Flag' },
                { topic: 'Binary Trees & Graph Traversals', count: '45+ Solved', platform: 'LeetCode / HackerRank', keyPatterns: 'DFS, BFS, Binary Search Trees, LCA, Path Sums' },
                { topic: 'Dynamic Programming & Recursion', count: '35+ Solved', platform: 'LeetCode / NxtWave', keyPatterns: '0/1 Knapsack, Coin Change, Memoization vs Tabulation' },
                { topic: 'SQL & Relational Querying', count: '5★ Badge', platform: 'HackerRank (5 Stars)', keyPatterns: 'Window Functions, Aggregations, Complex Multi-Joins, Subqueries' },
                { topic: 'Object-Oriented Programming & Python', count: '5★ Badge', platform: 'HackerRank (5 Stars)', keyPatterns: 'Inheritance, Polymorphism, Encapsulation, Fast I/O' },
                { topic: 'Full-Stack Software Engineering', count: 'Placement Cleared', platform: 'NxtWave Genius', keyPatterns: 'System Design, RESTful Architecture, State Management, CI/CD' }
              ].map((item, i) => (
                <div
                  key={i}
                  style={{
                    padding: '16px',
                    borderRadius: '10px',
                    background: 'rgba(3, 7, 18, 0.7)',
                    border: '1px solid rgba(148, 163, 184, 0.12)'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>{item.topic}</span>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        fontFamily: 'var(--font-mono)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(0, 245, 255, 0.1)',
                        color: '#00f5ff'
                      }}
                    >
                      {item.count}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'var(--font-mono)', marginBottom: '6px' }}>
                    Platform: {item.platform}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b' }}>
                    <strong style={{ color: '#cbd5e1' }}>Patterns:</strong> {item.keyPatterns}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
