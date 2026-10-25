import React, { useState, useEffect } from 'react';
import { Cinematic3DScene } from './components/Cinematic3DScene';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CommandCenter } from './components/CommandCenter';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { EducationCertifications } from './components/EducationCertifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { initScrollChoreography } from './utils/scrollAnimations';

export function App() {
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);

  useEffect(() => {
    // Initialize GSAP ScrollTrigger Section Choreography
    const timer = setTimeout(() => {
      initScrollChoreography();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh', backgroundColor: '#030712' }}>
      {/* Cinematic 3D WebGL Scene: Scroll-Synchronized Camera Dolly, Holographic Portal, Cyber Tunnel & Constellation */}
      <Cinematic3DScene />

      {/* Cyber Grid Depth Overlay */}
      <div
        className="cyber-grid cyber-grid-radial"
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 1,
          opacity: 0.45
        }}
      />

      {/* Sticky Glassmorphic Navbar */}
      <Navbar onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Main Content Sections with 3D Spatial Transitions */}
      <main style={{ position: 'relative', zIndex: 10 }}>
        {/* 1. Hero Section: Dimensional Holographic Portal Entry */}
        <Hero
          onExploreProjects={() => scrollToSection('projects')}
          onOpenContact={() => scrollToSection('contact')}
        />

        {/* 2. About Section: Portal Pass-Through & Speech Telemetry Demo */}
        <About />

        {/* 3. Signature Interactive Feature: Engineering Command Center */}
        <CommandCenter />

        {/* 4. Featured Projects with 3D Spatial Tilt Cards & Case Studies */}
        <Projects />

        {/* 5. Technical Capabilities: Technology Constellation Matrix */}
        <Skills />

        {/* 6. Professional Experience & Leadership Timeline */}
        <Experience />

        {/* 7. Education, Certifications & Verified Achievements */}
        <EducationCertifications />

        {/* 8. Recruiter Conversion & Contact Section: Cinematic Resolution */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Quick Action Command Palette (Ctrl+K / ⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={() => setCommandPaletteOpen(false)}
      />
    </div>
  );
}

export default App;
