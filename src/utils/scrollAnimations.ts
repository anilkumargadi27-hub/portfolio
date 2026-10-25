import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const initScrollChoreography = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) return;

  // 1. Hero Exit & Portal Transition
  const heroSection = document.getElementById('hero');
  if (heroSection) {
    gsap.to(heroSection, {
      scrollTrigger: {
        trigger: heroSection,
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      scale: 0.94,
      opacity: 0.25,
      y: 100,
      ease: 'power2.inOut'
    });
  }

  // 2. Section Staggered Reveals & 3D Perspective Depth
  const sections = ['about', 'command-center', 'projects', 'skills', 'experience', 'credentials', 'contact'];

  sections.forEach((id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Header reveal
    const header = el.querySelector('h2');
    const badge = el.querySelector('div[style*="border-radius: 9999px"]');
    const desc = el.querySelector('p');

    if (header) {
      gsap.fromTo(
        header,
        { opacity: 0, y: 40, rotateX: 12 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'top 45%',
            scrub: 0.8
          },
          opacity: 1,
          y: 0,
          rotateX: 0,
          ease: 'power3.out'
        }
      );
    }

    if (badge) {
      gsap.fromTo(
        badge,
        { opacity: 0, scale: 0.85 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            end: 'top 60%',
            scrub: 0.8
          },
          opacity: 1,
          scale: 1,
          ease: 'back.out(1.5)'
        }
      );
    }

    if (desc) {
      gsap.fromTo(
        desc,
        { opacity: 0, y: 30 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 75%',
            end: 'top 50%',
            scrub: 0.8
          },
          opacity: 1,
          y: 0,
          ease: 'power2.out'
        }
      );
    }

    // Glass cards entrance with 3D depth stagger
    const cards = el.querySelectorAll('.glass-card');
    if (cards && cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 50, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: el,
            start: 'top 70%',
            end: 'top 30%',
            scrub: 1
          },
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.1,
          ease: 'power3.out'
        }
      );
    }
  });
};

/**
 * Hook for smooth 3D mouse tilt with perspective and glare
 */
export const use3DTilt = <T extends HTMLElement>(ref: React.RefObject<T | null>, maxTilt = 10) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion || 'ontouchstart' in window) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      el.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale3d(1.015, 1.015, 1.015)`;
      el.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = () => {
      el.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px) scale3d(1, 1, 1)';
      el.style.transition = 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)';
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, maxTilt]);
};
