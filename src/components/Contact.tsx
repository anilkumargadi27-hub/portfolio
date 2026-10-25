import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  Sparkles
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './BrandIcons';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/sound';
import confetti from 'canvas-confetti';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Internship / Full-Time Opportunity (Class of 2027)',
    message: ''
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    sounds.playSuccess();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sounds.playSuccess();
    confetti({
      particleCount: 90,
      spread: 70,
      origin: { y: 0.7 }
    });

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formData.subject} - from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Hi Anilkumar,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\nSent from Portfolio Website`
    )}`;

    window.open(mailtoUrl, '_blank');
    setFormSubmitted(true);
  };

  return (
    <section id="contact" style={{ padding: '100px 0 60px 0', position: 'relative', overflow: 'hidden' }}>
      {/* Giant Stylized Typographic Backdrop */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '50%',
          transform: 'translateX(-50%)',
          fontSize: 'clamp(5rem, 16vw, 15rem)',
          fontWeight: 900,
          fontFamily: 'var(--font-display)',
          color: 'rgba(255, 255, 255, 0.02)',
          userSelect: 'none',
          pointerEvents: 'none',
          whiteSpace: 'nowrap',
          zIndex: 0
        }}
      >
        CONNECT
      </div>

      <div className="container-custom" style={{ position: 'relative', zIndex: 1 }}>
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
            <span>07 // GET IN TOUCH</span>
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
            Let's Build <span className="gradient-text-cyan">Something Extraordinary</span>
          </h2>
          <p
            style={{
              fontSize: '1.05rem',
              color: '#94a3b8',
              maxWidth: '640px',
              margin: '0 auto',
              lineHeight: 1.6
            }}
          >
            Available for SDE, Full-Stack, and Generative AI internships as well as Class of 2027 full-time roles.
            Reach out directly or send a message below.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '36px',
            maxWidth: '1060px',
            margin: '0 auto'
          }}
        >
          {/* Left Column: Direct Recruiter Touchpoints */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Direct Email Card with 1-Click Copy */}
            <div
              className="glass-card"
              style={{
                padding: '24px',
                border: '1px solid rgba(0, 245, 255, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '8px',
                      background: 'rgba(0, 245, 255, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#00f5ff'
                    }}
                  >
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                      PRIMARY EMAIL
                    </div>
                    <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#f8fafc' }}>
                      {PERSONAL_INFO.email}
                    </div>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => sounds.playHover()}
                  title="Copy email to clipboard"
                  style={{
                    padding: '8px 12px',
                    borderRadius: '8px',
                    background: copiedEmail ? 'rgba(16, 185, 129, 0.2)' : 'rgba(15, 23, 42, 0.8)',
                    border: '1px solid',
                    borderColor: copiedEmail ? '#10b981' : 'rgba(56, 189, 248, 0.3)',
                    color: copiedEmail ? '#10b981' : '#00f5ff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '0.78rem',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  {copiedEmail ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedEmail ? 'Copied!' : 'Copy'}</span>
                </button>
              </div>

              <div style={{ fontSize: '0.8rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                Alternative: {PERSONAL_INFO.altEmail}
              </div>
            </div>

            {/* Direct Phone / Location Card */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(56, 189, 248, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#38bdf8'
                  }}
                >
                  <Phone size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    PHONE & WHATSAPP
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 700, color: '#f8fafc' }}>
                    {PERSONAL_INFO.phone}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div
                  style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(168, 85, 247, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#c084fc'
                  }}
                >
                  <MapPin size={18} />
                </div>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    CURRENT LOCATION
                  </div>
                  <div style={{ fontSize: '0.96rem', fontWeight: 600, color: '#f8fafc' }}>
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Verified Social Profiles */}
            <div className="glass-card" style={{ padding: '24px' }}>
              <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#ffffff', marginBottom: '14px' }}>
                Verified Engineering Profiles:
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-ghost"
                  style={{ justifyContent: 'flex-start', padding: '10px 14px' }}
                >
                  <LinkedinIcon size={16} color="#38bdf8" />
                  <span style={{ color: '#cbd5e1' }}>LinkedIn Profile: /in/anilkumar-gadi/</span>
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-neon-ghost"
                  style={{ justifyContent: 'flex-start', padding: '10px 14px' }}
                >
                  <GithubIcon size={16} color="#00f5ff" />
                  <span style={{ color: '#cbd5e1' }}>GitHub Repositories: /anilkumargadi27-hub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Recruiter Message Form */}
          <div
            className="glass-card"
            style={{
              padding: '36px',
              border: '1px solid rgba(0, 245, 255, 0.35)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.8)'
            }}
          >
            <h3
              className="font-display"
              style={{
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '8px'
              }}
            >
              Send Direct Message
            </h3>
            <p style={{ fontSize: '0.88rem', color: '#94a3b8', marginBottom: '24px' }}>
              Submitting triggers your preferred email client pre-addressed to Anilkumar.
            </p>

            <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  YOUR NAME / RECRUITER NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Jenkins (Tech Recruiter)"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    background: 'rgba(3, 7, 18, 0.8)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#00f5ff')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  YOUR EMAIL ADDRESS *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. sjenkins@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    background: 'rgba(3, 7, 18, 0.8)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#00f5ff')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)')}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  SUBJECT / ROLE TYPE
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    background: 'rgba(3, 7, 18, 0.95)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  <option value="SDE Internship (2026/2027)">SDE Internship Opportunity</option>
                  <option value="Full-Stack Engineer Role">Full-Stack Engineer Role</option>
                  <option value="GenAI / AI Application Engineer">GenAI / AI Application Engineer</option>
                  <option value="Technical Collaboration">Technical Collaboration / Freelance</option>
                  <option value="General Engineering Inquiry">General Engineering Inquiry</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.78rem', color: '#cbd5e1', marginBottom: '6px', fontFamily: 'var(--font-mono)' }}>
                  MESSAGE DETAILS *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Share details about the role, technical team, or collaboration opportunity..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    padding: '11px 14px',
                    borderRadius: '8px',
                    background: 'rgba(3, 7, 18, 0.8)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    color: '#ffffff',
                    fontSize: '0.9rem',
                    outline: 'none',
                    resize: 'vertical'
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#00f5ff')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = 'rgba(148, 163, 184, 0.2)')}
                />
              </div>

              <button
                type="submit"
                onMouseEnter={() => sounds.playHover()}
                className="btn-neon-primary"
                style={{ width: '100%', padding: '12px', fontSize: '0.95rem', marginTop: '6px' }}
              >
                <Send size={16} />
                <span>Dispatch Email Message</span>
              </button>

              {formSubmitted && (
                <div
                  style={{
                    padding: '12px',
                    borderRadius: '8px',
                    background: 'rgba(16, 185, 129, 0.15)',
                    border: '1px solid #10b981',
                    color: '#34d399',
                    fontSize: '0.85rem',
                    textAlign: 'center'
                  }}
                >
                  ✓ Prepared email draft addressed to anilkumargadi27@gmail.com!
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
