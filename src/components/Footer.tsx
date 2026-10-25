import React from 'react';
import { ArrowUp, Code, Award, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/sound';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    sounds.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(0, 245, 255, 0.15)',
        background: 'rgba(3, 7, 18, 0.98)',
        padding: '50px 0 30px 0',
        position: 'relative',
        zIndex: 10
      }}
    >
      <div className="container-custom">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '24px',
            marginBottom: '36px'
          }}
        >
          {/* Left: Monogram & Bio Summary */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '10px',
                background: 'linear-gradient(135deg, rgba(0, 245, 255, 0.15), rgba(168, 85, 247, 0.2))',
                border: '1px solid rgba(0, 245, 255, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 15px rgba(0, 245, 255, 0.25)'
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: '#00f5ff'
                }}
              >
                AG
              </span>
            </div>
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 800,
                  fontSize: '1.1rem',
                  letterSpacing: '0.04em',
                  color: '#ffffff'
                }}
              >
                GADI ANILKUMAR
              </div>
              <div
                style={{
                  fontSize: '0.78rem',
                  color: '#94a3b8',
                  fontFamily: 'var(--font-mono)'
                }}
              >
                B.Tech CSE (AI & ML) · Mohan Babu University (CGPA 8.90)
              </div>
            </div>
          </div>

          {/* Center: Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sounds.playHover()}
              title="GitHub"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
            >
              <GithubIcon size={17} />
            </a>

            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sounds.playHover()}
              title="LinkedIn"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(148, 163, 184, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#94a3b8',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
            >
              <LinkedinIcon size={17} />
            </a>

            <a
              href={PERSONAL_INFO.leetCode}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sounds.playHover()}
              title="LeetCode (200+ Solved)"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(245, 158, 11, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#f59e0b',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
            >
              <Code size={17} />
            </a>

            <a
              href={PERSONAL_INFO.hackerRank}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sounds.playHover()}
              title="HackerRank 5★ Coder"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1px solid rgba(16, 185, 129, 0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#10b981',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
            >
              <Award size={17} />
            </a>

            <a
              href="/Anilkumar_Gadi_Resume.pdf"
              download="Gadi_Anilkumar_Resume.pdf"
              onMouseEnter={() => sounds.playHover()}
              title="Download Resume"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: 'rgba(0, 245, 255, 0.1)',
                border: '1px solid rgba(0, 245, 255, 0.35)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#00f5ff',
                transition: 'all 0.2s ease',
                textDecoration: 'none'
              }}
            >
              <Download size={17} />
            </a>
          </div>

          {/* Right: Back to Top Button */}
          <button
            onClick={scrollToTop}
            onMouseEnter={() => sounds.playHover()}
            title="Scroll to top"
            className="btn-neon-ghost"
            style={{
              padding: '8px 14px',
              fontSize: '0.82rem',
              gap: '6px'
            }}
          >
            <span>Back to top</span>
            <ArrowUp size={15} color="#00f5ff" />
          </button>
        </div>

        {/* Bottom Attribution */}
        <div
          style={{
            paddingTop: '20px',
            borderTop: '1px solid rgba(148, 163, 184, 0.08)',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.78rem',
            color: '#64748b',
            fontFamily: 'var(--font-mono)',
            gap: '12px'
          }}
        >
          <div>
            © {currentYear} Gadi Anilkumar. Designed & Engineered with precision for tech recruiters.
          </div>
          <div>
            React · TypeScript · Vite · Multi-Agent AI
          </div>
        </div>
      </div>
    </footer>
  );
};
