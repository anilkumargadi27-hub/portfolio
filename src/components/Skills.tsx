import React, { useState } from 'react';
import { 
  Bot, 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cpu, 
  Sparkles, 
  Search, 
  Check, 
  Layers,
  ArrowUpRight
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { sounds } from '../utils/sound';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Bot': return <Bot size={18} />;
      case 'Code2': return <Code2 size={18} />;
      case 'Layout': return <Layout size={18} />;
      case 'Server': return <Server size={18} />;
      case 'Database': return <Database size={18} />;
      default: return <Cpu size={18} />;
    }
  };

  const categories = ['All', ...SKILL_CATEGORIES.map((c) => c.category)];

  const allSkills = SKILL_CATEGORIES.flatMap((c) => 
    c.skills.map((s) => ({ ...s, categoryName: c.category }))
  );

  const filteredSkills = allSkills.filter((s) => {
    const matchesCategory = selectedCategory === 'All' || s.categoryName === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.projectsUsed.some((p) => p.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" style={{ padding: '90px 0', position: 'relative' }}>
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
            <span>04 // TECHNICAL CAPABILITIES</span>
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
            Interactive <span className="gradient-text-cyan">Engineering Dashboard</span>
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
            Verified technical proficiencies across autonomous agent orchestration, full-stack systems,
            vector databases, and computer science foundations.
          </p>

          {/* Search & Category Filter Controls */}
          <div
            style={{
              marginTop: '36px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            {/* Search Input */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                maxWidth: '420px'
              }}
            >
              <Search
                size={16}
                color="#00f5ff"
                style={{
                  position: 'absolute',
                  left: '14px',
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              />
              <input
                type="text"
                placeholder="Search technology, pattern, or project..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '11px 16px 11px 40px',
                  borderRadius: '12px',
                  background: 'rgba(15, 23, 42, 0.8)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  color: '#ffffff',
                  fontSize: '0.88rem',
                  fontFamily: 'var(--font-sans)',
                  outline: 'none',
                  transition: 'border-color 0.2s ease'
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = '#00f5ff';
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(56, 189, 248, 0.25)';
                }}
              />
            </div>

            {/* Category Pills */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '8px',
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
                    padding: '7px 16px',
                    borderRadius: '8px',
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.84rem',
                    fontWeight: selectedCategory === cat ? 700 : 500,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: selectedCategory === cat ? 'rgba(0, 245, 255, 0.15)' : 'rgba(15, 23, 42, 0.55)',
                    border: '1px solid',
                    borderColor: selectedCategory === cat ? '#00f5ff' : 'rgba(148, 163, 184, 0.15)',
                    color: selectedCategory === cat ? '#00f5ff' : '#94a3b8'
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '20px'
          }}
        >
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="glass-card"
              style={{
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div>
                {/* Top Badge: Name + Proficiency Tier */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '10px'
                  }}
                >
                  <h3
                    className="font-display"
                    style={{
                      fontSize: '1.15rem',
                      fontWeight: 700,
                      color: '#ffffff'
                    }}
                  >
                    {skill.name}
                  </h3>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      padding: '3px 8px',
                      borderRadius: '4px',
                      background: 'rgba(0, 245, 255, 0.1)',
                      border: '1px solid rgba(0, 245, 255, 0.3)',
                      color: '#00f5ff',
                      fontWeight: 600
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                {/* Description */}
                <p
                  style={{
                    fontSize: '0.88rem',
                    color: '#94a3b8',
                    lineHeight: 1.55,
                    marginBottom: '16px'
                  }}
                >
                  {skill.description}
                </p>
              </div>

              {/* Verified Project Associations */}
              <div
                style={{
                  paddingTop: '14px',
                  borderTop: '1px solid rgba(148, 163, 184, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  flexWrap: 'wrap'
                }}
              >
                <span
                  style={{
                    fontSize: '0.72rem',
                    color: '#64748b',
                    fontFamily: 'var(--font-mono)'
                  }}
                >
                  Used in:
                </span>
                {skill.projectsUsed.map((proj, pi) => (
                  <span
                    key={pi}
                    style={{
                      fontSize: '0.74rem',
                      fontFamily: 'var(--font-mono)',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      background: 'rgba(168, 85, 247, 0.12)',
                      border: '1px solid rgba(168, 85, 247, 0.25)',
                      color: '#c084fc'
                    }}
                  >
                    {proj}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
