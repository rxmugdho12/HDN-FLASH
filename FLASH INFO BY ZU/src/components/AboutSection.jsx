import React from 'react';
import { Quote, Zap, ShieldAlert, Sparkles } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about">
      <div className="section-header reveal">
        <span className="section-tag">// SYSTEM OVERVIEW</span>
        <h2 className="neon-text section-title">ABOUT HDN FLASH</h2>
        <p className="section-subtitle">Bridging High-Speed Gaming, Automation & Cyber Aesthetics</p>
      </div>

      <div className="about-grid reveal">
        {/* Main Quote Card */}
        <div className="glass-card about-card main-quote-card">
          <div className="card-glow-bg"></div>
          <div className="quote-icon"><Quote size={36} /></div>
          <p className="quote-text">
            Those who do not understand true pain can never understand true peace. HDN FLASH is built on precision, relentless speed, and unyielding code execution.
          </p>
          <div className="quote-author">— HDN FLASH CORE PHILOSOPHY</div>
        </div>

        {/* Terminal Diagnostic Screen */}
        <div className="glass-card about-card terminal-card">
          <div className="terminal-header">
            <div className="terminal-dots">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
            </div>
            <div className="terminal-title">hdn-flash-core ~ bash</div>
          </div>
          <div className="terminal-body">
            <div className="term-line"><span className="term-prompt">$</span> <span className="term-cmd">hdnflash --init-system</span></div>
            <div class="term-line text-cyan">[INFO] Loading React 18 & HDN FLASH Kernel v3.0...</div>
            <div className="term-line text-green">[OK] Neural Precision Engine Connected.</div>
            <div className="term-line text-purple">[OK] Game Spammer & Automation Modules Ready.</div>
            <div className="term-line text-gold">[OK] 144Hz Cyber Visual Interface Engaged.</div>
            <div className="term-line"><span class="term-prompt">$</span> <span className="term-cmd typing-log">awaiting user command...</span><span className="typing-cursor">_</span></div>
          </div>
        </div>
      </div>

      {/* 3 Feature Pillars */}
      <div className="pillars-grid reveal">
        <div className="pillar-card glass-card">
          <div className="pillar-icon"><Zap size={36} /></div>
          <h3>ULTRA SPEED</h3>
          <p>Instantaneous automation and rapid response scripts optimized for peak performance.</p>
        </div>
        <div className="pillar-card glass-card">
          <div className="pillar-icon"><ShieldAlert size={36} /></div>
          <h3>BOT ARCHITECTURE</h3>
          <p>Custom Discord bots and automated tools built for gaming communities and social platforms.</p>
        </div>
        <div className="pillar-card glass-card">
          <div className="pillar-icon"><Sparkles size={36} /></div>
          <h3>VFX & MEDIA</h3>
          <p>High-end cinematic video editing, gaming montage production, and visual art creation.</p>
        </div>
      </div>
    </section>
  );
}
