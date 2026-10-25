import React, { useState } from 'react';
import { 
  GraduationCap, 
  Award, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Calendar, 
  MapPin, 
  ExternalLink,
  Flame,
  Star
} from 'lucide-react';
import { EDUCATION, CERTIFICATIONS, ACHIEVEMENTS } from '../data/portfolioData';
import { sounds } from '../utils/sound';

export const EducationCertifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Generative AI' | 'Web & Programming' | 'Industry'>('All');

  const filteredCerts = activeCategory === 'All'
    ? CERTIFICATIONS
    : CERTIFICATIONS.filter((c) => c.category === activeCategory);

  return (
    <section id="credentials" style={{ padding: '90px 0', position: 'relative' }}>
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
            <span>06 // CREDENTIALS & ACHIEVEMENTS</span>
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
            Education & <span className="gradient-text-cyan">Verified Certifications</span>
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
            Rigorous academic foundation, competitive milestones, and industry credentials.
          </p>
        </div>

        {/* Education Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '24px',
            marginBottom: '48px'
          }}
        >
          {EDUCATION.map((edu, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                padding: '32px',
                border: '1px solid rgba(0, 245, 255, 0.3)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '14px' }}>
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '10px',
                    background: 'rgba(0, 245, 255, 0.12)',
                    border: '1px solid rgba(0, 245, 255, 0.35)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00f5ff'
                  }}
                >
                  <GraduationCap size={22} />
                </div>
                <div>
                  <h3
                    className="font-display"
                    style={{ fontSize: '1.2rem', fontWeight: 700, color: '#ffffff' }}
                  >
                    {edu.institution}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#94a3b8', fontFamily: 'var(--font-mono)' }}>
                    {edu.period} · {edu.location}
                  </div>
                </div>
              </div>

              <div style={{ fontSize: '1rem', fontWeight: 600, color: '#38bdf8', marginBottom: '6px' }}>
                {edu.degree}
              </div>
              <div style={{ fontSize: '0.86rem', color: '#cbd5e1', marginBottom: '14px' }}>
                {edu.major}
              </div>

              <div
                style={{
                  display: 'inline-block',
                  padding: '4px 12px',
                  borderRadius: '6px',
                  background: 'rgba(0, 245, 255, 0.12)',
                  border: '1px solid rgba(0, 245, 255, 0.4)',
                  color: '#00f5ff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  marginBottom: '18px'
                }}
              >
                {edu.grade}
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {edu.highlights.map((h, hi) => (
                  <div key={hi} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                    <CheckCircle2 size={15} color="#00f5ff" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.86rem', color: '#94a3b8', lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Achievements Row */}
        <div style={{ marginBottom: '56px' }}>
          <h3
            className="font-display"
            style={{
              fontSize: '1.4rem',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <Award size={20} color="#f59e0b" />
            <span>Key Verified Achievements & Milestones</span>
          </h3>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px'
            }}
          >
            {ACHIEVEMENTS.map((ach) => (
              <div
                key={ach.id}
                className="glass-card"
                style={{
                  padding: '20px',
                  border: '1px solid rgba(245, 158, 11, 0.25)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: 'rgba(245, 158, 11, 0.15)',
                      color: '#f59e0b',
                      fontWeight: 600
                    }}
                  >
                    {ach.badge}
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                    {ach.organization}
                  </span>
                </div>

                <div
                  className="font-display"
                  style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fef3c7', marginBottom: '4px' }}
                >
                  {ach.metric}
                </div>

                <div style={{ fontSize: '0.92rem', fontWeight: 600, color: '#ffffff', marginBottom: '8px' }}>
                  {ach.title}
                </div>

                <p style={{ fontSize: '0.82rem', color: '#94a3b8', lineHeight: 1.5 }}>
                  {ach.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Industry Certifications Grid */}
        <div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px'
            }}
          >
            <h3
              className="font-display"
              style={{
                fontSize: '1.4rem',
                fontWeight: 700,
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <ShieldCheck size={20} color="#00f5ff" />
              <span>Industry & Academy Certifications</span>
            </h3>

            {/* Cert Filters */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {(['All', 'Generative AI', 'Web & Programming', 'Industry'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    sounds.playClick();
                    setActiveCategory(cat);
                  }}
                  style={{
                    padding: '5px 14px',
                    borderRadius: '6px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    cursor: 'pointer',
                    background: activeCategory === cat ? 'rgba(0, 245, 255, 0.15)' : 'rgba(15, 23, 42, 0.6)',
                    border: '1px solid',
                    borderColor: activeCategory === cat ? '#00f5ff' : 'rgba(148, 163, 184, 0.15)',
                    color: activeCategory === cat ? '#00f5ff' : '#94a3b8'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}
          >
            {filteredCerts.map((cert) => (
              <div
                key={cert.id}
                className="glass-card"
                style={{
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.7rem',
                        padding: '2px 8px',
                        borderRadius: '4px',
                        background: 'rgba(0, 245, 255, 0.1)',
                        color: '#00f5ff'
                      }}
                    >
                      {cert.badgeText}
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#64748b', fontFamily: 'var(--font-mono)' }}>
                      {cert.date}
                    </span>
                  </div>

                  <h4 style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>
                    {cert.title}
                  </h4>
                  <div style={{ fontSize: '0.84rem', color: '#38bdf8' }}>
                    {cert.issuer}
                  </div>
                </div>

                {cert.verifiedId && (
                  <div
                    style={{
                      marginTop: '12px',
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      color: '#34d399'
                    }}
                  >
                    ID: {cert.verifiedId}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
