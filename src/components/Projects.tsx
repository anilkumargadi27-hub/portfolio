import React, { useState, useRef } from 'react';
import { 
  ExternalLink, 
  Sparkles, 
  CheckCircle2, 
  AlertTriangle, 
  X,
  ArrowUpRight,
  Workflow
} from 'lucide-react';
import { GithubIcon } from './BrandIcons';
import { PROJECTS, type Project } from '../data/portfolioData';
import { sounds } from '../utils/sound';
import { use3DTilt } from '../utils/scrollAnimations';

// 3D Spatial Tilt Project Card
const ProjectCard3D: React.FC<{
  project: Project;
  index: number;
  onOpenCaseStudy: (p: Project) => void;
}> = ({ project, index, onOpenCaseStudy }) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  use3DTilt(cardRef, 8);

  return (
    <div
      ref={cardRef}
      className="glass-card"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '32px',
        border: project.featured ? '1.5px solid rgba(0, 245, 255, 0.4)' : '1px solid rgba(148, 163, 184, 0.15)',
        boxShadow: project.featured ? '0 15px 40px rgba(0, 0, 0, 0.7), 0 0 30px rgba(0, 245, 255, 0.15)' : 'none',
        transformStyle: 'preserve-3d',
        willChange: 'transform'
      }}
    >
      <div style={{ transform: 'translateZ(15px)' }}>
        {/* Project Header Bar: Index, Badge & Links */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: '18px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '1rem',
                fontWeight: 800,
                color: '#00f5ff'
              }}
            >
              0{index + 1}
            </span>
            <span
              style={{
                fontSize: '0.72rem',
                padding: '3px 10px',
                borderRadius: '9999px',
                background: 'rgba(0, 245, 255, 0.12)',
                border: '1px solid rgba(0, 245, 255, 0.35)',
                color: '#00f5ff',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600
              }}
            >
              {project.badge}
            </span>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                title="View GitHub Repository"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#94a3b8',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sounds.playHover()}
                title="View Live Application"
                style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '8px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(0, 245, 255, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#00f5ff',
                  transition: 'all 0.2s ease',
                  textDecoration: 'none'
                }}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <h3
          className="font-display"
          style={{
            fontSize: '1.45rem',
            fontWeight: 700,
            color: '#ffffff',
            marginBottom: '6px'
          }}
        >
          {project.title}
        </h3>
        <div
          style={{
            fontSize: '0.86rem',
            color: '#38bdf8',
            fontFamily: 'var(--font-mono)',
            marginBottom: '16px'
          }}
        >
          {project.tagline}
        </div>

        {/* Overview Text */}
        <p
          style={{
            fontSize: '0.92rem',
            color: '#94a3b8',
            lineHeight: 1.6,
            marginBottom: '20px'
          }}
        >
          {project.overview}
        </p>

        {/* Key Metrics / Highlights Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px',
            padding: '12px',
            borderRadius: '10px',
            background: 'rgba(7, 13, 29, 0.8)',
            border: '1px solid rgba(148, 163, 184, 0.1)',
            marginBottom: '22px'
          }}
        >
          {project.metrics.map((m, mi) => (
            <div key={mi}>
              <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                {m.label.toUpperCase()}
              </div>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#f8fafc', fontFamily: 'var(--font-display)' }}>
                {m.value}
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Chips */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '6px',
            marginBottom: '24px'
          }}
        >
          {project.techStack.map((tech) => (
            <span key={tech} className="tech-chip">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Card Footer: Deep-Dive Case Study Button with translateZ */}
      <div style={{ transform: 'translateZ(25px)' }}>
        <button
          onClick={() => onOpenCaseStudy(project)}
          onMouseEnter={() => sounds.playHover()}
          className="btn-neon-secondary"
          style={{
            width: '100%',
            padding: '11px',
            fontSize: '0.88rem',
            justifyContent: 'space-between'
          }}
        >
          <span>View Full Architecture & Case Study</span>
          <ArrowUpRight size={17} />
        </button>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = ['All', 'Multi-Agent AI', 'Full Stack', 'GenAI & Speech'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory || (selectedCategory === 'Full Stack' && p.category === 'Multi-Agent AI'));

  const openCaseStudy = (proj: Project) => {
    sounds.playAction();
    setActiveModalProject(proj);
    document.body.style.overflow = 'hidden';
  };

  const closeCaseStudy = () => {
    sounds.playClick();
    setActiveModalProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projects" style={{ padding: '90px 0', position: 'relative' }}>
      <div className="container-custom">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
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
            <span>03 // FEATURED ENGINEERING WORK</span>
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
            Work That <span className="gradient-text-cyan">Speaks For Itself</span>
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
            Production-grade systems featuring multi-agent orchestration, RAG vector pipelines,
            real-time speech intelligence, and robust full-stack architectures.
          </p>

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
              marginTop: '32px',
              flexWrap: 'wrap'
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  sounds.playClick();
                  setSelectedCategory(cat);
                }}
                onMouseEnter={() => sounds.playHover()}
                style={{
                  padding: '8px 18px',
                  borderRadius: '10px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.86rem',
                  fontWeight: selectedCategory === cat ? 700 : 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  background: selectedCategory === cat ? 'rgba(0, 245, 255, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? '#00f5ff' : 'rgba(148, 163, 184, 0.18)',
                  color: selectedCategory === cat ? '#00f5ff' : '#94a3b8',
                  boxShadow: selectedCategory === cat ? '0 0 15px rgba(0, 245, 255, 0.25)' : 'none'
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects 3D Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
            gap: '32px'
          }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard3D
              key={project.id}
              project={project}
              index={index}
              onOpenCaseStudy={openCaseStudy}
            />
          ))}
        </div>

        {/* DEEP-DIVE CASE STUDY MODAL */}
        {activeModalProject && (
          <div
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(3, 7, 18, 0.85)',
              backdropFilter: 'blur(20px)',
              zIndex: 100,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '20px'
            }}
            onClick={closeCaseStudy}
          >
            <div
              className="glass-card"
              style={{
                width: '100%',
                maxWidth: '920px',
                maxHeight: '90vh',
                overflowY: 'auto',
                backgroundColor: 'rgba(7, 13, 29, 0.98)',
                border: '1.5px solid rgba(0, 245, 255, 0.5)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 40px rgba(0, 245, 255, 0.25)',
                padding: '36px',
                borderRadius: '20px',
                position: 'relative'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeCaseStudy}
                style={{
                  position: 'absolute',
                  top: '20px',
                  right: '20px',
                  width: '38px',
                  height: '38px',
                  borderRadius: '10px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(148, 163, 184, 0.2)',
                  color: '#94a3b8',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div style={{ marginBottom: '24px' }}>
                <span
                  style={{
                    fontSize: '0.75rem',
                    padding: '3px 10px',
                    borderRadius: '9999px',
                    background: 'rgba(0, 245, 255, 0.15)',
                    border: '1px solid rgba(0, 245, 255, 0.4)',
                    color: '#00f5ff',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {activeModalProject.badge}
                </span>

                <h2
                  className="font-display"
                  style={{
                    fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    marginTop: '10px',
                    marginBottom: '6px'
                  }}
                >
                  {activeModalProject.title}
                </h2>
                <div style={{ color: '#38bdf8', fontFamily: 'var(--font-mono)', fontSize: '0.95rem' }}>
                  {activeModalProject.tagline}
                </div>
              </div>

              {/* Problem Solved */}
              <div
                style={{
                  padding: '18px 22px',
                  borderRadius: '12px',
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.25)',
                  marginBottom: '28px'
                }}
              >
                <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f87171', marginBottom: '6px' }}>
                  THE PROBLEM SOLVED:
                </div>
                <p style={{ fontSize: '0.92rem', color: '#fecaca', lineHeight: 1.6 }}>
                  {activeModalProject.problem}
                </p>
              </div>

              {/* My Verified Engineering Contribution */}
              <div style={{ marginBottom: '28px' }}>
                <h3
                  className="font-display"
                  style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}
                >
                  My Engineering Contribution:
                </h3>
                <p style={{ fontSize: '0.95rem', color: '#cbd5e1', lineHeight: 1.7 }}>
                  {activeModalProject.myContribution}
                </p>
              </div>

              {/* Architecture & Workflow Steps */}
              <div style={{ marginBottom: '32px' }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    marginBottom: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <Workflow size={18} color="#00f5ff" />
                  <span>System Architecture & Multi-Stage Workflow</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {activeModalProject.architectureSteps.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '14px 18px',
                        borderRadius: '10px',
                        background: 'rgba(15, 23, 42, 0.7)',
                        border: '1px solid rgba(56, 189, 248, 0.15)',
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '14px'
                      }}
                    >
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: '#00f5ff',
                          minWidth: '150px'
                        }}
                      >
                        {step.step}
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                        {step.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges & Solutions */}
              <div style={{ marginBottom: '32px' }}>
                <h3
                  className="font-display"
                  style={{
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#f8fafc',
                    marginBottom: '14px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}
                >
                  <AlertTriangle size={18} color="#f59e0b" />
                  <span>Key Technical Challenges & Solutions</span>
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {activeModalProject.technicalChallenges.map((tc, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: '16px 20px',
                        borderRadius: '12px',
                        background: 'rgba(3, 7, 18, 0.7)',
                        border: '1px solid rgba(148, 163, 184, 0.15)'
                      }}
                    >
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fef3c7', marginBottom: '6px' }}>
                        Challenge: {tc.challenge}
                      </div>
                      <div style={{ fontSize: '0.88rem', color: '#38bdf8', lineHeight: 1.5 }}>
                        <strong>Solution:</strong> {tc.solution}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features Bullet List */}
              <div style={{ marginBottom: '32px' }}>
                <h3
                  className="font-display"
                  style={{ fontSize: '1.15rem', fontWeight: 700, color: '#f8fafc', marginBottom: '12px' }}
                >
                  Engineered Feature Set:
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {activeModalProject.keyFeatures.map((kf, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <CheckCircle2 size={16} color="#00f5ff" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>{kf}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div
                style={{
                  display: 'flex',
                  gap: '14px',
                  paddingTop: '20px',
                  borderTop: '1px solid rgba(148, 163, 184, 0.15)',
                  flexWrap: 'wrap'
                }}
              >
                {activeModalProject.githubUrl && (
                  <a
                    href={activeModalProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon-primary"
                    style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                  >
                    <GithubIcon size={16} />
                    <span>View GitHub Repository</span>
                  </a>
                )}
                {activeModalProject.liveDemoUrl && (
                  <a
                    href={activeModalProject.liveDemoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon-secondary"
                    style={{ padding: '10px 20px', fontSize: '0.88rem' }}
                  >
                    <ExternalLink size={16} />
                    <span>Open Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
