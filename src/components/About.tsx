import React, { useState } from 'react';
import { 
  Bot, 
  Layers, 
  Cpu, 
  Mic, 
  CheckCircle2, 
  Sparkles, 
  Terminal, 
  TrendingUp, 
  BookOpen,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/sound';

export const About: React.FC = () => {
  // Interactive Speech Analyzer Simulator (Demonstrating Infosys Springboard Internship work)
  const [testSpeechText, setTestSpeechText] = useState(
    "Um, so basically, our recruitment pipeline uses, like, LangGraph to parse resumes and match vectors on Qdrant with human approval."
  );
  const [analyzed, setAnalyzed] = useState(false);
  const [wpm, setWpm] = useState(135);
  const [fillerCount, setFillerCount] = useState(3);
  const [detectedFillers, setDetectedFillers] = useState<string[]>(['um', 'basically', 'like']);

  const handleAnalyzeSpeech = () => {
    sounds.playAction();
    const words = testSpeechText.trim().split(/\s+/).filter(Boolean);
    const fillers = ['um', 'uh', 'like', 'basically', 'literally', 'you know', 'actually'];
    const found: string[] = [];

    words.forEach((w) => {
      const clean = w.toLowerCase().replace(/[^a-z]/g, '');
      if (fillers.includes(clean)) {
        found.push(clean);
      }
    });

    const calculatedWpm = Math.max(90, Math.min(185, Math.floor(words.length * 15)));
    setWpm(calculatedWpm);
    setFillerCount(found.length);
    setDetectedFillers(found);
    setAnalyzed(true);
  };

  return (
    <section id="about" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 12px',
              borderRadius: '9999px',
              background: 'rgba(0, 245, 255, 0.08)',
              border: '1px solid rgba(0, 245, 255, 0.3)',
              color: '#00f5ff',
              fontSize: '0.75rem',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              letterSpacing: '0.08em',
              marginBottom: '14px'
            }}
          >
            <Sparkles size={13} />
            <span>01 // PROFESSIONAL BACKGROUND</span>
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
            Engineering With Purpose & <span className="gradient-text-cyan">Autonomous AI</span>
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
            Moving beyond simple prompt wrappers to engineer deterministic, multi-agent systems
            with resilient state checkpoints, vector search, and production web architectures.
          </p>
        </div>

        {/* Narrative & Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            marginBottom: '48px'
          }}
        >
          {/* Main Narrative Card */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 245, 255, 0.12)',
                    border: '1px solid rgba(0, 245, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00f5ff'
                  }}
                >
                  <Cpu size={22} />
                </div>
                <div>
                  <h3
                    className="font-display"
                    style={{ fontSize: '1.25rem', fontWeight: 700, color: '#f8fafc' }}
                  >
                    B.Tech CSE (AI & ML) Student & Developer
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.8rem',
                      color: '#00f5ff'
                    }}
                  >
                    Mohan Babu University · Class of 2027 (CGPA 8.90)
                  </span>
                </div>
              </div>

              <p style={{ color: '#cbd5e1', lineHeight: 1.75, marginBottom: '18px', fontSize: '0.98rem' }}>
                I am a passionate software developer specializing in building full-stack web applications
                that embed autonomous AI workflows. While many developers rely on fragile single-prompt
                APIs, I construct multi-agent directed graphs using <strong>LangGraph</strong> and{' '}
                <strong>LangChain</strong>, integrating RAG retrieval pipelines over dense vector stores like{' '}
                <strong>Qdrant</strong>.
              </p>

              <p style={{ color: '#94a3b8', lineHeight: 1.75, marginBottom: '22px', fontSize: '0.95rem' }}>
                My engineering approach combines rigorous computer science fundamentals—having solved{' '}
                <strong>200+ DSA problems</strong> and earned <strong>5-Star HackerRank</strong> ratings in
                Python and SQL—with real-world project delivery. During my internship at{' '}
                <strong>Infosys Springboard</strong>, I delivered a Dockerized, CI/CD-deployed 4-role
                speech analysis platform with the Google Gemini API.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '8px'
                }}
              >
                {[
                  'Multi-Agent Systems',
                  'LangGraph State Machines',
                  'Qdrant Vector DB',
                  'MERN / Next.js',
                  'Google Gemini API',
                  'Docker & CI/CD',
                  '200+ DSA Problems'
                ].map((tag) => (
                  <span key={tag} className="tech-chip">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div
              style={{
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(148, 163, 184, 0.12)',
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
                textAlign: 'center'
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#00f5ff' }}>
                  8.90
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  CGPA at MBU
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#a855f7' }}>
                  200+
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  DSA Solved
                </div>
              </div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 800, color: '#38bdf8' }}>
                  448
                </div>
                <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  Day Streak
                </div>
              </div>
            </div>
          </div>

          {/* 4 Core Engineering Focus Areas */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {/* Pillar 1 */}
            <div className="glass-card" style={{ padding: '22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(0, 245, 255, 0.12)',
                    border: '1px solid rgba(0, 245, 255, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00f5ff',
                    flexShrink: 0
                  }}
                >
                  <Bot size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                    Multi-Agent Orchestration (LangGraph)
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '4px', lineHeight: 1.5 }}>
                    Designing cyclic graphs with state persistence, autonomous self-healing retries, and
                    human-in-the-loop review checkpoints before external action execution.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="glass-card" style={{ padding: '22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(168, 85, 247, 0.12)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c084fc',
                    flexShrink: 0
                  }}
                >
                  <Layers size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                    Full-Stack MERN & Next.js Platforms
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '4px', lineHeight: 1.5 }}>
                    Building secure REST APIs with Node.js/Express, JWT auth, MongoDB schemas, and reactive
                    frontends with React Flow node visualization and Recharts analytics.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="glass-card" style={{ padding: '22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8',
                    flexShrink: 0
                  }}
                >
                  <TrendingUp size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                    Vector Search & RAG Pipelines
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '4px', lineHeight: 1.5 }}>
                    Employing Qdrant Vector DB with dense embeddings (BAAI/bge-small) to achieve accurate
                    semantic matching between unstructured candidate resumes and job criteria.
                  </p>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="glass-card" style={{ padding: '22px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.12)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                    flexShrink: 0
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 700, color: '#ffffff' }}>
                    Production DevOps & Fundamentals
                  </h4>
                  <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginTop: '4px', lineHeight: 1.5 }}>
                    Containerizing web applications with multi-stage Docker builds, automating deployments
                    with GitHub Actions CI/CD, and grounding code in strict DSA principles.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Feature Spotlight: Infosys Springboard Speech Analytics Demonstration */}
        <div
          className="glass-card"
          style={{
            padding: '32px',
            border: '1px solid rgba(0, 245, 255, 0.3)',
            boxShadow: '0 0 25px rgba(0, 245, 255, 0.08)'
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '20px'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #00f5ff22, #a855f722)',
                  border: '1px solid rgba(0, 245, 255, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00f5ff'
                }}
              >
                <Mic size={18} />
              </div>
              <div>
                <h3
                  className="font-display"
                  style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc' }}
                >
                  Interactive Innovation Demo: Real-Time Speech Analytics Engine
                </h3>
                <span style={{ fontSize: '0.78rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                  Live architectural replica of the Infosys Springboard Internship Project
                </span>
              </div>
            </div>

            <span
              style={{
                fontSize: '0.72rem',
                padding: '4px 10px',
                borderRadius: '6px',
                background: 'rgba(0, 245, 255, 0.1)',
                border: '1px solid rgba(0, 245, 255, 0.3)',
                color: '#00f5ff',
                fontFamily: 'var(--font-mono)'
              }}
            >
              Web Speech API + Gemini Concept
            </span>
          </div>

          <p style={{ fontSize: '0.9rem', color: '#cbd5e1', marginBottom: '16px' }}>
            In my 8-week internship at Infosys Springboard, I engineered real-time speech analytics that
            transcribes speech, measures pacing (WPM), flags hesitation filler words, and generates AI coaching reports.
            Try testing a sample phrase below:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <textarea
              value={testSpeechText}
              onChange={(e) => setTestSpeechText(e.target.value)}
              rows={3}
              style={{
                width: '100%',
                padding: '12px 16px',
                borderRadius: '10px',
                background: 'rgba(3, 7, 18, 0.8)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                color: '#f8fafc',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.88rem',
                resize: 'vertical',
                outline: 'none'
              }}
              onFocus={(e) => {
                e.currentTarget.style.borderColor = '#00f5ff';
              }}
              onBlur={(e) => {
                e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.25)';
              }}
            />

            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '12px'
              }}
            >
              <button
                onClick={handleAnalyzeSpeech}
                onMouseEnter={() => sounds.playHover()}
                className="btn-neon-primary"
                style={{ padding: '8px 18px', fontSize: '0.85rem' }}
              >
                <Zap size={15} />
                <span>Run Real-Time Telemetry Analysis</span>
              </button>

              <div
                style={{
                  display: 'flex',
                  gap: '16px',
                  alignItems: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem'
                }}
              >
                <div>
                  <span style={{ color: '#94a3b8' }}>Pacing: </span>
                  <span style={{ color: '#00f5ff', fontWeight: 700 }}>{wpm} WPM</span>
                  <span style={{ color: '#64748b', fontSize: '0.72rem' }}> (Optimal: 120-150)</span>
                </div>
                <div>
                  <span style={{ color: '#94a3b8' }}>Filler Count: </span>
                  <span style={{ color: fillerCount > 2 ? '#ec4899' : '#10b981', fontWeight: 700 }}>
                    {fillerCount}
                  </span>
                </div>
              </div>
            </div>

            {analyzed && (
              <div
                style={{
                  marginTop: '10px',
                  padding: '14px 18px',
                  borderRadius: '10px',
                  background: 'rgba(0, 245, 255, 0.05)',
                  border: '1px solid rgba(0, 245, 255, 0.2)',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#00f5ff', fontSize: '0.85rem', fontWeight: 600 }}>
                  <CheckCircle2 size={16} />
                  <span>Telemetry Computation Succeeded</span>
                </div>
                <div style={{ fontSize: '0.82rem', color: '#cbd5e1' }}>
                  <strong>Detected Filler Keywords:</strong>{' '}
                  {detectedFillers.length > 0 ? (
                    detectedFillers.map((f, i) => (
                      <span
                        key={i}
                        style={{
                          display: 'inline-block',
                          padding: '1px 8px',
                          borderRadius: '4px',
                          background: 'rgba(236, 72, 153, 0.2)',
                          color: '#f43f5e',
                          margin: '0 4px',
                          fontFamily: 'var(--font-mono)'
                        }}
                      >
                        "{f}"
                      </span>
                    ))
                  ) : (
                    <span style={{ color: '#10b981' }}>None detected (crisp rhetorical cadence)</span>
                  )}
                </div>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                  <strong>Gemini Feedback Simulation:</strong> Your articulation shows strong technical clarity.
                  Pacing is well-balanced ({wpm} WPM). Pausing instead of verbal fillers will elevate boardroom delivery.
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
