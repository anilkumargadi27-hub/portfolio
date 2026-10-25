import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Terminal, 
  Layers, 
  User, 
  Briefcase, 
  GraduationCap, 
  Mail, 
  Download, 
  X, 
  ArrowRight,
  Code
} from 'lucide-react';
import { sounds } from '../utils/sound';
import confetti from 'canvas-confetti';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const actions = [
    { id: 'hero', title: 'Go to Hero / Home', category: 'Navigation', icon: <User size={16} /> },
    { id: 'about', title: 'Read Engineering Story & Philosophy', category: 'Navigation', icon: <User size={16} /> },
    { id: 'command-center', title: 'Open Engineering Command Center', category: 'Signature Feature', icon: <Terminal size={16} /> },
    { id: 'projects', title: 'Explore Featured Projects', category: 'Projects', icon: <Layers size={16} /> },
    { id: 'skills', title: 'View Technical Skills Matrix', category: 'Skills', icon: <Code size={16} /> },
    { id: 'experience', title: 'Review Experience & Internships', category: 'Experience', icon: <Briefcase size={16} /> },
    { id: 'credentials', title: 'Inspect Education & Certifications', category: 'Credentials', icon: <GraduationCap size={16} /> },
    { id: 'contact', title: 'Connect / Send Message', category: 'Contact', icon: <Mail size={16} /> },
    { id: 'resume', title: 'Download Official Resume PDF', category: 'Action', icon: <Download size={16} /> }
  ];

  const filteredActions = actions.filter((a) =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else {
          sounds.playAction();
          // Open triggered by parent
        }
      }

      if (!isOpen) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredActions.length));
        sounds.playHover();
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % Math.max(1, filteredActions.length));
        sounds.playHover();
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          executeAction(filteredActions[selectedIndex]);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex]);

  const executeAction = (action: typeof actions[0]) => {
    sounds.playClick();
    onClose();

    if (action.id === 'resume') {
      confetti({ particleCount: 75, spread: 60 });
      sounds.playSuccess();
      window.open('/Anilkumar_Gadi_Resume.pdf', '_blank');
      return;
    }

    const element = document.getElementById(action.id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(3, 7, 18, 0.85)',
        backdropFilter: 'blur(16px)',
        zIndex: 120,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingTop: '15vh',
        paddingLeft: '16px',
        paddingRight: '16px'
      }}
      onClick={onClose}
    >
      <div
        className="glass-card"
        style={{
          width: '100%',
          maxWidth: '560px',
          backgroundColor: 'rgba(7, 13, 29, 0.98)',
          border: '1.5px solid rgba(0, 245, 255, 0.5)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.9), 0 0 30px rgba(0, 245, 255, 0.25)',
          borderRadius: '16px',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            padding: '16px 20px',
            borderBottom: '1px solid rgba(148, 163, 184, 0.12)',
            gap: '12px'
          }}
        >
          <Search size={18} color="#00f5ff" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or jump to section..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#ffffff',
              fontSize: '0.98rem',
              fontFamily: 'var(--font-sans)'
            }}
          />
          <kbd
            style={{
              padding: '2px 6px',
              borderRadius: '4px',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#94a3b8',
              fontSize: '0.72rem',
              fontFamily: 'var(--font-mono)'
            }}
          >
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div
          style={{
            maxHeight: '340px',
            overflowY: 'auto',
            padding: '10px'
          }}
        >
          {filteredActions.length === 0 ? (
            <div style={{ padding: '24px', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
              No matching actions found.
            </div>
          ) : (
            filteredActions.map((action, idx) => {
              const isSelected = selectedIndex === idx;
              return (
                <div
                  key={action.id}
                  onClick={() => executeAction(action)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '12px 14px',
                    borderRadius: '10px',
                    backgroundColor: isSelected ? 'rgba(0, 245, 255, 0.12)' : 'transparent',
                    border: '1px solid',
                    borderColor: isSelected ? 'rgba(0, 245, 255, 0.35)' : 'transparent',
                    cursor: 'pointer',
                    transition: 'all 0.15s ease'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div
                      style={{
                        color: isSelected ? '#00f5ff' : '#94a3b8',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {action.icon}
                    </div>
                    <span
                      style={{
                        fontSize: '0.92rem',
                        fontWeight: isSelected ? 600 : 500,
                        color: isSelected ? '#ffffff' : '#cbd5e1'
                      }}
                    >
                      {action.title}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span
                      style={{
                        fontSize: '0.7rem',
                        fontFamily: 'var(--font-mono)',
                        color: '#64748b'
                      }}
                    >
                      {action.category}
                    </span>
                    {isSelected && <ArrowRight size={14} color="#00f5ff" />}
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer Navigation Hints */}
        <div
          style={{
            padding: '10px 18px',
            background: 'rgba(3, 7, 18, 0.95)',
            borderTop: '1px solid rgba(148, 163, 184, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            fontSize: '0.72rem',
            fontFamily: 'var(--font-mono)',
            color: '#64748b'
          }}
        >
          <span>Navigate with ↑ / ↓</span>
          <span>Select with Enter</span>
        </div>
      </div>
    </div>
  );
};
