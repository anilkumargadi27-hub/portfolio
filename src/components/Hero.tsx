import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Download, 
  Send, 
  Code, 
  Sparkles, 
  ChevronDown,
  Terminal,
  Activity,
  Award,
  Layers
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/sound';
import { use3DTilt } from '../utils/scrollAnimations';
import confetti from 'canvas-confetti';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreProjects, onOpenContact }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [audioWaveActive, setAudioWaveActive] = useState(false);

  const profile3DRef = useRef<HTMLDivElement | null>(null);
  use3DTilt(profile3DRef, 12);

  const roles = [
    "Full-Stack & AI Application Developer",
    "Multi-Agent LangGraph Architect",
    "RAG & Vector Pipeline Engineer",
    "MERN & Next.js Specialist",
    "200+ DSA & 5★ HackerRank Coder"
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length + 1));
      }, 50);
    } else if (!isDeleting && displayText.length === currentRole.length) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.substring(0, displayText.length - 1));
      }, 30);
    } else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, roleIndex]);

  const handleResumeDownload = () => {
    sounds.playSuccess();
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#00f5ff', '#38bdf8', '#a855f7', '#ec4899']
    });
  };

  const toggleAudioWave = () => {
    sounds.playAction();
    setAudioWaveActive(!audioWaveActive);
  };

  return (
    <section
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '90px',
        paddingBottom: '60px',
        overflow: 'hidden'
      }}
    >
      {/* Background Decorative Cyber Rings & Glows */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '8%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 245, 255, 0.12) 0%, rgba(168, 85, 247, 0.06) 50%, transparent 70%)',
          filter: 'blur(60px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.1) 0%, transparent 70%)',
          filter: 'blur(70px)',
          pointerEvents: 'none',
          zIndex: 0
        }}
      />

      <div className="container-custom" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}
        >
          {/* Left Column: Headline, Bio & CTAs */}
          <div>
            {/* Availability Badge */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                borderRadius: '9999px',
                background: 'rgba(15, 23, 42, 0.85)',
                border: '1px solid rgba(16, 185, 129, 0.4)',
                boxShadow: '0 0 15px rgba(16, 185, 129, 0.18)',
                marginBottom: '20px'
              }}
            >
              <span
                className="status-beacon"
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#10b981'
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  color: '#34d399'
                }}
              >
                AVAILABLE: SDE & GenAI INTERNSHIPS | CLASS OF 2027
              </span>
            </div>

            {/* Candidate Name */}
            <h1
              className="font-display"
              style={{
                fontSize: 'clamp(2.4rem, 5vw, 3.8rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                marginBottom: '16px',
                letterSpacing: '-0.02em'
              }}
            >
              Hi, I'm <span className="gradient-text-cyan">{PERSONAL_INFO.name}</span>
            </h1>

            {/* Dynamic Typing Title Subhead */}
            <div
              style={{
                minHeight: '36px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '22px'
              }}
            >
              <Terminal size={20} color="#00f5ff" />
              <span
                className="font-mono"
                style={{
                  fontSize: 'clamp(1rem, 2.2vw, 1.3rem)',
                  fontWeight: 600,
                  color: '#e2e8f0'
                }}
              >
                {displayText}
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '8px',
                  height: '20px',
                  backgroundColor: '#00f5ff',
                  animation: 'pulse-subtle 1s infinite'
                }}
              />
            </div>

            {/* Compelling Value Proposition */}
            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.7,
                color: '#94a3b8',
                marginBottom: '32px',
                maxWidth: '580px'
              }}
            >
              {PERSONAL_INFO.subHeadline}. Computer Science (AI & ML) student at{' '}
              <span style={{ color: '#f8fafc', fontWeight: 600 }}>Mohan Babu University</span> (CGPA 8.90).
              Former <span style={{ color: '#00f5ff' }}>Infosys Springboard</span> AI intern. Architect of autonomous
              multi-agent pipelines on <span style={{ color: '#c084fc' }}>LangGraph</span>, Qdrant vector databases, and
              production MERN/Next.js systems.
            </p>

            {/* Action CTAs */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '14px',
                alignItems: 'center',
                marginBottom: '36px'
              }}
            >
              <button
                onClick={() => {
                  sounds.playClick();
                  onExploreProjects();
                }}
                onMouseEnter={() => sounds.playHover()}
                className="btn-neon-primary"
              >
                <span>Explore My Projects</span>
                <ArrowRight size={17} />
              </button>

              <a
                href="/Anilkumar_Gadi_Resume.pdf"
                download="Gadi_Anilkumar_Resume.pdf"
                onClick={handleResumeDownload}
                onMouseEnter={() => sounds.playHover()}
                className="btn-neon-secondary"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>

              <button
                onClick={() => {
                  sounds.playClick();
                  onOpenContact();
                }}
                onMouseEnter={() => sounds.playHover()}
                className="btn-neon-ghost"
              >
                <Send size={15} />
                <span>Let's Connect</span>
              </button>
            </div>

            {/* Social Proof & Platform Links */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(148, 163, 184, 0.12)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  color: '#64748b',
                  letterSpacing: '0.04em'
                }}
              >
                DIRECT PROFILES:
              </span>

              <div style={{ display: 'flex', gap: '12px' }}>
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  title="GitHub Profile"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#00f5ff';
                    e.currentTarget.style.borderColor = '#00f5ff';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.15)';
                  }}
                >
                  <GithubIcon size={18} />
                </a>

                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  title="LinkedIn Profile"
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(56, 189, 248, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8',
                    transition: 'all 0.2s ease',
                    textDecoration: 'none'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = '#38bdf8';
                    e.currentTarget.style.borderColor = '#38bdf8';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = '#94a3b8';
                    e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.15)';
                  }}
                >
                  <LinkedinIcon size={18} />
                </a>

                <a
                  href={PERSONAL_INFO.leetCode}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  title="LeetCode (200+ Solved)"
                  style={{
                    padding: '0 10px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(245, 158, 11, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#f59e0b',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <Code size={16} />
                  <span>LeetCode</span>
                </a>

                <a
                  href={PERSONAL_INFO.hackerRank}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sounds.playHover()}
                  title="HackerRank 5-Star Coder in Python & SQL"
                  style={{
                    padding: '0 10px',
                    height: '38px',
                    borderRadius: '8px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid rgba(16, 185, 129, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: '#10b981',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 600,
                    textDecoration: 'none'
                  }}
                >
                  <Award size={16} />
                  <span>5★ HackerRank</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Profile Photo in Neon Orbital Composition with 3D Spatial Tilt */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              perspective: '1200px'
            }}
          >
            {/* Dimensional Neon Composition Frame with 3D Tilt */}
            <div
              ref={profile3DRef}
              style={{
                position: 'relative',
                width: '320px',
                height: '380px',
                maxWidth: '100%',
                transformStyle: 'preserve-3d',
                cursor: 'pointer'
              }}
            >
              {/* Outer Orbital Rotating Ring */}
              <div
                className="animate-spin-slow"
                style={{
                  position: 'absolute',
                  inset: '-20px',
                  borderRadius: '28px',
                  border: '1.5px dashed rgba(0, 245, 255, 0.35)',
                  pointerEvents: 'none',
                  transform: 'translateZ(-10px)'
                }}
              />

              {/* Counter-rotating Inner Ring */}
              <div
                className="animate-spin-reverse"
                style={{
                  position: 'absolute',
                  inset: '-10px',
                  borderRadius: '24px',
                  border: '1px solid rgba(168, 85, 247, 0.25)',
                  pointerEvents: 'none',
                  transform: 'translateZ(-5px)'
                }}
              />

              {/* Ambient Glow Backdrop */}
              <div
                style={{
                  position: 'absolute',
                  inset: '0',
                  borderRadius: '20px',
                  background: 'linear-gradient(145deg, rgba(0, 245, 255, 0.2), rgba(168, 85, 247, 0.25))',
                  filter: 'blur(20px)',
                  opacity: 0.8,
                  transform: 'translateZ(-20px)'
                }}
              />

              {/* Profile Photo Card */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(0, 245, 255, 0.5)',
                  boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8), 0 0 30px rgba(0, 245, 255, 0.25)',
                  backgroundColor: '#070d1d',
                  transform: 'translateZ(10px)'
                }}
              >
                {/* Genuine Photo of User */}
                <img
                  src={PERSONAL_INFO.profilePhoto}
                  alt="Gadi Anilkumar - Full Stack & AI Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top'
                  }}
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = '/profile-photo.png';
                  }}
                />

                {/* Subtle Neon Scanline Overlay */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(180deg, transparent 60%, rgba(3, 7, 18, 0.85) 100%)',
                    pointerEvents: 'none'
                  }}
                />

                {/* Verified Badge on Photo */}
                <div
                  style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    padding: '4px 10px',
                    borderRadius: '8px',
                    background: 'rgba(3, 7, 18, 0.85)',
                    border: '1px solid rgba(0, 245, 255, 0.4)',
                    backdropFilter: 'blur(8px)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    transform: 'translateZ(20px)'
                  }}
                >
                  <Sparkles size={12} color="#00f5ff" />
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      fontWeight: 700,
                      color: '#00f5ff'
                    }}
                  >
                    AI AGENT DEV
                  </span>
                </div>

                {/* Bottom Overlay Label */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    padding: '10px 14px',
                    borderRadius: '12px',
                    background: 'rgba(3, 7, 18, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    transform: 'translateZ(25px)'
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.9rem',
                      fontWeight: 700,
                      color: '#ffffff'
                    }}
                  >
                    GADI ANILKUMAR
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: '#00f5ff'
                    }}
                  >
                    Mohan Babu University · Class of 2027
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Feature Pill: 8.90 CGPA */}
              <div
                style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '-25px',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: 'rgba(10, 18, 36, 0.95)',
                  border: '1px solid rgba(0, 245, 255, 0.4)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(0, 245, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transform: 'translateZ(35px)'
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: 'rgba(0, 245, 255, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00f5ff'
                  }}
                >
                  <Activity size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    ACADEMIC MERIT
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', fontFamily: 'var(--font-display)' }}>
                    8.90 CGPA
                  </div>
                </div>
              </div>

              {/* Floating Orbiting Feature Pill: 7 & 11 Agent Systems */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '-15px',
                  right: '-25px',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: 'rgba(10, 18, 36, 0.95)',
                  border: '1px solid rgba(168, 85, 247, 0.4)',
                  boxShadow: '0 10px 25px rgba(0, 0, 0, 0.6), 0 0 15px rgba(168, 85, 247, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transform: 'translateZ(35px)'
                }}
              >
                <div
                  style={{
                    width: '28px',
                    height: '28px',
                    borderRadius: '6px',
                    background: 'rgba(168, 85, 247, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c084fc'
                  }}
                >
                  <Layers size={16} />
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    LANGGRAPH
                  </div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', fontFamily: 'var(--font-display)' }}>
                    7 & 11 Agents
                  </div>
                </div>
              </div>
            </div>

            {/* Audio Synthesis / Agent Wave Visualizer Widget */}
            <div
              onClick={toggleAudioWave}
              style={{
                marginTop: '36px',
                padding: '10px 18px',
                borderRadius: '12px',
                background: 'rgba(15, 23, 42, 0.75)',
                border: '1px solid rgba(0, 245, 255, 0.25)',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
                boxShadow: audioWaveActive ? '0 0 20px rgba(0, 245, 255, 0.3)' : 'none'
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-end',
                  gap: '3px',
                  height: '18px'
                }}
              >
                {[12, 18, 8, 16, 10, 14, 6].map((h, i) => (
                  <span
                    key={i}
                    style={{
                      width: '3px',
                      height: audioWaveActive ? `${Math.floor(Math.random() * 16) + 4}px` : `${h}px`,
                      backgroundColor: i % 2 === 0 ? '#00f5ff' : '#a855f7',
                      borderRadius: '2px',
                      transition: 'height 0.2s ease'
                    }}
                  />
                ))}
              </div>
              <div style={{ fontSize: '0.78rem', fontFamily: 'var(--font-mono)', color: '#cbd5e1' }}>
                {audioWaveActive ? 'AGENT TELEMETRY: ACTIVE' : 'TAP TO TEST AUDIO TELEMETRY'}
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '40px',
            opacity: 0.6
          }}
        >
          <span style={{ fontSize: '0.72rem', fontFamily: 'var(--font-mono)', color: '#94a3b8', letterSpacing: '0.1em' }}>
            SCROLL TO EXPLORE 3D ARCHITECTURE
          </span>
          <ChevronDown size={18} color="#00f5ff" style={{ marginTop: '4px', animation: 'float-gentle 2s infinite' }} />
        </div>
      </div>
    </section>
  );
};
