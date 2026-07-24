import React from 'react';
import { Radio, ShieldCheck, Disc as Discord, Github, Youtube } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact">
      <div className="section-header reveal">
        <span className="section-tag">// COMMUNICATE</span>
        <h2 className="neon-text section-title">CONNECT WITH HDN FLASH</h2>
        <p className="section-subtitle">Establish direct neural connection & join community</p>
      </div>

      <div className="glass-card contact-card reveal">
        <div className="contact-header">
          <div className="pulse-radar">
            <span className="radar-ring"></span>
            <Radio size={32} className="text-cyan" />
          </div>
          <h3 className="contact-brand neon-text">HDN FLASH NETWORK</h3>
          <p className="contact-desc">Open for scrims, bot custom builds, and collaborations.</p>
        </div>

        <div className="social-links contact-socials">
          <a
            href="https://discord.gg/GTkQM8dZRp"
            target="_blank"
            rel="noreferrer"
            className="social-btn discord"
            title="Join Discord Server"
          >
            <Discord size={20} />
            <span className="btn-label">Discord</span>
          </a>
          <a
            href="https://github.com/rxmugdho12"
            target="_blank"
            rel="noreferrer"
            className="social-btn github"
            title="Visit GitHub Profile"
          >
            <Github size={20} />
            <span className="btn-label">GitHub</span>
          </a>
          <a
            href="https://www.youtube.com/@hiddenoptimizer"
            target="_blank"
            rel="noreferrer"
            className="social-btn youtube"
            title="Subscribe YouTube"
          >
            <Youtube size={20} />
            <span className="btn-label">YouTube</span>
          </a>
        </div>

        <div className="contact-footer-note">
          <ShieldCheck size={16} className="text-cyan" style={{ verticalAlign: 'middle', marginRight: '6px' }} />
          HDN FLASH OFFICIAL COMMUNITY & SYSTEM
        </div>
      </div>
    </section>
  );
}
