import React, { useState, useEffect } from 'react';
import { Home, Terminal, Crosshair, Boxes, Headset, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.clientHeight;
          if (window.pageYOffset >= top - height / 3) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'hero', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: Terminal },
    { id: 'skills', label: 'Arsenal', icon: Crosshair },
    { id: 'projects', label: 'Projects', icon: Boxes },
    { id: 'contact', label: 'Contact', icon: Headset },
  ];

  return (
    <>
      <nav className="hud-nav">
        <div className="nav-brand">
          <img src="/assets/images/logo.png" alt="HDN FLASH" className="nav-logo" />
          <span className="nav-title neon-text">HDN FLASH</span>
        </div>

        <div className={`nav-links ${mobileOpen ? 'open' : ''}`}>
          {navLinks.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={16} />
                <span>{item.label}</span>
              </a>
            );
          })}
        </div>

        <div className="nav-right">
          <div className="nav-status">
            <span className="status-indicator"></span>
            <span className="status-text">v3.0 REACT</span>
          </div>
          <button
            className="nav-burger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Navigation"
          >
            {mobileOpen ? <X size={24} color="#00f0ff" /> : <Menu size={24} color="#00f0ff" />}
          </button>
        </div>
      </nav>
      <div
        className={`nav-backdrop ${mobileOpen ? 'open' : ''}`}
        onClick={() => setMobileOpen(false)}
      />
    </>
  );
}
