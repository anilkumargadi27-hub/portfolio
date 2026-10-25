import React, { useState, useEffect } from 'react';
import { Terminal, Volume2, VolumeX, Menu, X, Download, Command } from 'lucide-react';
import { sounds } from '../utils/sound';
import confetti from 'canvas-confetti';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenCommandPalette }) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(sounds.isMuted());

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;
      setScrollProgress(progress);
      setScrolled(totalScroll > 40);

      // Section spy
      const sections = ['hero', 'about', 'command-center', 'projects', 'skills', 'experience', 'credentials', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 150) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSound = () => {
    const nextState = sounds.toggleMute();
    setIsMuted(nextState);
  };

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'command-center', label: 'Command Center', isBadge: true },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'credentials', label: 'Credentials' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (id: string) => {
    sounds.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleResumeClick = () => {
    sounds.playSuccess();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.15 },
      colors: ['#00f5ff', '#38bdf8', '#a855f7', '#10b981']
    });
  };

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          height: '2.5px',
          width: `${scrollProgress}%`,
          background: 'linear-gradient(90deg, #00f5ff, #38bdf8, #a855f7)',
          zIndex: 100,
          boxShadow: '0 0 10px rgba(0, 245, 255, 0.8)'
        }}
      />

      <nav
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
          transition: 'all 0.3s ease',
          backgroundColor: scrolled ? 'rgba(3, 7, 18, 0.88)' : 'rgba(3, 7, 18, 0.45)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(0, 245, 255, 0.18)' : '1px solid rgba(255, 255, 255, 0.05)',
          boxShadow: scrolled ? '0 10px 30px rgba(0, 0, 0, 0.5)' : 'none'
        }}
      >
        <div
          className="container-custom"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '74px'
          }}
        >
          {/* Logo / Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            onMouseEnter={() => sounds.playHover()}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
              cursor: 'pointer'
            }}
          >
            <div
              style={{
                width: '40px',
                height: '40px',
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
                  fontWeight: 700,
                  fontSize: '1.05rem',
                  letterSpacing: '0.04em',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}
              >
                ANILKUMAR <span style={{ color: '#00f5ff' }}>GADI</span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.68rem',
                  color: '#94a3b8',
                  letterSpacing: '0.08em'
                }}
              >
                AI & FULL STACK DEV
              </div>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}
            className="hidden md:flex"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  onMouseEnter={() => sounds.playHover()}
                  style={{
                    position: 'relative',
                    padding: '8px 14px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.88rem',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#00f5ff' : '#94a3b8',
                    backgroundColor: isActive ? 'rgba(0, 245, 255, 0.08)' : 'transparent',
                    border: '1px solid',
                    borderColor: isActive ? 'rgba(0, 245, 255, 0.3)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  {link.label}
                  {link.isBadge && (
                    <span
                      style={{
                        fontSize: '0.65rem',
                        padding: '2px 6px',
                        borderRadius: '9999px',
                        background: 'linear-gradient(90deg, rgba(0, 245, 255, 0.2), rgba(168, 85, 247, 0.25))',
                        border: '1px solid rgba(0, 245, 255, 0.5)',
                        color: '#00f5ff',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      LIVE
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Action Controls */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            {/* Command Palette Button */}
            <button
              onClick={() => {
                sounds.playAction();
                onOpenCommandPalette();
              }}
              onMouseEnter={() => sounds.playHover()}
              title="Open Command Palette (Ctrl+K / ⌘K)"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 12px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.65)',
                border: '1px solid rgba(148, 163, 184, 0.18)',
                color: '#cbd5e1',
                fontSize: '0.78rem',
                fontFamily: 'var(--font-mono)',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <Command size={14} color="#00f5ff" />
              <span className="hidden sm:inline">Cmd</span>
              <kbd
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  padding: '1px 5px',
                  borderRadius: '4px',
                  fontSize: '0.7rem'
                }}
              >
                K
              </kbd>
            </button>

            {/* Sound Synthesizer Toggle */}
            <button
              onClick={toggleSound}
              onMouseEnter={() => sounds.playHover()}
              title={isMuted ? 'Unmute UI Audio Synthesizer' : 'Mute UI Audio Synthesizer'}
              aria-label="Toggle UI Audio"
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '8px',
                background: isMuted ? 'rgba(15, 23, 42, 0.6)' : 'rgba(0, 245, 255, 0.1)',
                border: '1px solid',
                borderColor: isMuted ? 'rgba(148, 163, 184, 0.2)' : 'rgba(0, 245, 255, 0.4)',
                color: isMuted ? '#64748b' : '#00f5ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {isMuted ? <VolumeX size={17} /> : <Volume2 size={17} />}
            </button>

            {/* Resume Download CTA Button */}
            <a
              href="/Anilkumar_Gadi_Resume.pdf"
              download="Gadi_Anilkumar_Resume.pdf"
              onClick={handleResumeClick}
              onMouseEnter={() => sounds.playHover()}
              className="btn-neon-primary hidden lg:inline-flex"
              style={{
                padding: '9px 18px',
                fontSize: '0.85rem'
              }}
            >
              <Download size={15} />
              <span>Resume</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => {
                sounds.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              className="md:hidden"
              aria-label="Toggle Navigation Menu"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1px solid rgba(0, 245, 255, 0.3)',
                color: '#00f5ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '74px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(3, 7, 18, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 49,
            padding: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            borderTop: '1px solid rgba(0, 245, 255, 0.2)'
          }}
          className="md:hidden"
        >
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNavClick(link.id)}
              style={{
                width: '100%',
                textAlign: 'left',
                padding: '14px 18px',
                borderRadius: '12px',
                fontFamily: 'var(--font-display)',
                fontSize: '1.1rem',
                fontWeight: activeSection === link.id ? 700 : 500,
                color: activeSection === link.id ? '#00f5ff' : '#f8fafc',
                backgroundColor: activeSection === link.id ? 'rgba(0, 245, 255, 0.12)' : 'rgba(15, 23, 42, 0.6)',
                border: '1px solid',
                borderColor: activeSection === link.id ? 'rgba(0, 245, 255, 0.4)' : 'rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}
            >
              <span>{link.label}</span>
              {link.isBadge && (
                <span
                  style={{
                    fontSize: '0.7rem',
                    padding: '3px 8px',
                    borderRadius: '9999px',
                    background: 'rgba(0, 245, 255, 0.2)',
                    color: '#00f5ff'
                  }}
                >
                  LIVE SIM
                </span>
              )}
            </button>
          ))}

          <a
            href="/Anilkumar_Gadi_Resume.pdf"
            download="Gadi_Anilkumar_Resume.pdf"
            onClick={handleResumeClick}
            className="btn-neon-primary"
            style={{
              marginTop: '16px',
              padding: '14px',
              fontSize: '1rem',
              width: '100%'
            }}
          >
            <Download size={18} />
            <span>Download Official Resume (PDF)</span>
          </a>
        </div>
      )}
    </>
  );
};
