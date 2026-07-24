import React, { useState, useEffect } from 'react';
import CustomCursor from './components/CustomCursor';
import GalaxyCanvas from './components/GalaxyCanvas';
import BootTerminal from './components/BootTerminal';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ArsenalSection from './components/ArsenalSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import AudioPlayer from './components/AudioPlayer';
import BackToTop from './components/BackToTop';

export default function App() {
  const [autoPlayTrigger, setAutoPlayTrigger] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSystemInitialize = () => {
    setAutoPlayTrigger(true);
  };

  return (
    <div className="app-container">
      <CustomCursor />
      <GalaxyCanvas />
      <div className="scanlines" />
      <div className="vignette-overlay" />
      <div className="blob blob1" />
      <div className="blob blob2" />
      <div className="blob blob3" />

      <BootTerminal onEnter={handleSystemInitialize} />
      <AudioPlayer autoPlayTrigger={autoPlayTrigger} />
      <BackToTop />

      <Navbar />

      <main className="content">
        <HeroSection />
        <AboutSection />
        <ArsenalSection />
        <ProjectsSection />
        <ContactSection />

        <footer>
          <div className="footer-content">
            <div className="footer-logo neon-text">HDN FLASH</div>
            <p>© 2026 HDN FLASH // REACT 18 POWERED // ALL RIGHTS RESERVED</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
