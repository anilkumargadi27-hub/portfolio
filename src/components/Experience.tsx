import React from 'react';
import { Briefcase, Calendar, MapPin, Sparkles, CheckCircle2, ShieldCheck, Award } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" style={{ padding: '90px 0', position: 'relative' }}>
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
            <span>05 // PROFESSIONAL TRACK RECORD</span>
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
            Experience & <span className="gradient-text-cyan">Leadership</span>
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
            Documented internships, technical leadership appointments, and certified industry programs.
          </p>
        </div>

        {/* Experience Timeline */}
        <div
          style={{
            position: 'relative',
            maxWidth: '920px',
            margin: '0 auto'
          }}
        >
          {/* Vertical Glowing Timeline Bar */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '20px',
              width: '2px',
              background: 'linear-gradient(180deg, #00f5ff, #3b82f6, #a855f7)',
              boxShadow: '0 0 12px rgba(0, 245, 255, 0.4)',
              zIndex: 0
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            {EXPERIENCES.map((exp, index) => (
              <div
                key={exp.id}
                style={{
                  position: 'relative',
                  paddingLeft: '60px'
                }}
              >
                {/* Timeline Node Point */}
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    left: '11px',
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: '#030712',
                    border: '2.5px solid #00f5ff',
                    boxShadow: '0 0 15px rgba(0, 245, 255, 0.8)',
                    zIndex: 2,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#00f5ff' }} />
                </div>

                {/* Experience Card */}
                <div
                  className="glass-card"
                  style={{
                    padding: '32px',
                    border: '1px solid rgba(56, 189, 248, 0.2)'
                  }}
                >
                  {/* Top Header: Role, Organization & Program Type */}
                  <div
                    style={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      alignItems: 'flex-start',
                      gap: '12px',
                      marginBottom: '14px'
                    }}
                  >
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
                        <h3
                          className="font-display"
                          style={{ fontSize: '1.35rem', fontWeight: 700, color: '#ffffff' }}
                        >
                          {exp.role}
                        </h3>
                        <span
                          style={{
                            fontSize: '0.72rem',
                            fontFamily: 'var(--font-mono)',
                            padding: '3px 8px',
                            borderRadius: '4px',
                            background: exp.programType === 'Internship' ? 'rgba(0, 245, 255, 0.15)' : 'rgba(168, 85, 247, 0.15)',
                            border: '1px solid',
                            borderColor: exp.programType === 'Internship' ? 'rgba(0, 245, 255, 0.4)' : 'rgba(168, 85, 247, 0.4)',
                            color: exp.programType === 'Internship' ? '#00f5ff' : '#c084fc'
                          }}
                        >
                          {exp.programType}
                        </span>
                      </div>

                      <div
                        style={{
                          fontSize: '1.05rem',
                          fontWeight: 600,
                          color: '#38bdf8'
                        }}
                      >
                        {exp.organization}
                      </div>
                    </div>

                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-end',
                        gap: '4px',
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.8rem',
                        color: '#94a3b8'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Calendar size={14} color="#00f5ff" />
                        <span>{exp.period}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#64748b' }}>
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary */}
                  <p style={{ fontSize: '0.94rem', color: '#cbd5e1', lineHeight: 1.65, marginBottom: '20px' }}>
                    {exp.summary}
                  </p>

                  {/* Responsibilities Bullets */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '22px' }}>
                    {exp.responsibilities.map((r, ri) => (
                      <div key={ri} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                        <CheckCircle2 size={16} color="#00f5ff" style={{ flexShrink: 0, marginTop: '3px' }} />
                        <span style={{ fontSize: '0.9rem', color: '#94a3b8', lineHeight: 1.55 }}>{r}</span>
                      </div>
                    ))}
                  </div>

                  {/* Verified Credential ID if present */}
                  {exp.credentialId && (
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 14px',
                        borderRadius: '8px',
                        background: 'rgba(16, 185, 129, 0.1)',
                        border: '1px solid rgba(16, 185, 129, 0.3)',
                        color: '#34d399',
                        fontSize: '0.8rem',
                        fontFamily: 'var(--font-mono)',
                        marginBottom: '18px'
                      }}
                    >
                      <ShieldCheck size={16} />
                      <span>Verified Certificate ID: {exp.credentialId}</span>
                    </div>
                  )}

                  {/* Tech Stack Chips */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="tech-chip">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
