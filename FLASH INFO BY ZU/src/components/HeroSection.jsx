import React, { useState, useEffect } from 'react';
import { Gauge, Crosshair, Bot, Youtube, Disc as Discord, Github, Boxes, Headset, Sparkles, Instagram } from 'lucide-react';

export default function HeroSection() {
  const [titleText, setTitleText] = useState('');
  const [quoteText, setQuoteText] = useState('');
  const [quoteIdx, setQuoteIdx] = useState(0);

  const fullTitle = 'HDN FLASH';
  const quotes = [
    'Engineered for Gaming Dominance',
    'High Speed Bot Architecture',
    'Those who do not give up win',
    'True pain brings true peace.',
    'HDN FLASH React Core Active',
  ];

  // Title Typewriter
  useEffect(() => {
    let timeout;
    let charIdx = 0;
    let isDeleting = false;

    const typeTitle = () => {
      if (!isDeleting) {
        setTitleText(fullTitle.substring(0, charIdx + 1));
        charIdx++;
        if (charIdx === fullTitle.length) {
          isDeleting = true;
          timeout = setTimeout(typeTitle, 3000);
          return;
        }
      } else {
        setTitleText(fullTitle.substring(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
        }
      }
      timeout = setTimeout(typeTitle, isDeleting ? 60 : 120);
    };

    typeTitle();
    return () => clearTimeout(timeout);
  }, []);

  // Quote Typewriter
  useEffect(() => {
    let timeout;
    let charIdx = 0;
    let isDeleting = false;
    let currentQuote = quotes[quoteIdx];

    const typeQuote = () => {
      if (!isDeleting) {
        setQuoteText(currentQuote.substring(0, charIdx + 1));
        charIdx++;
        if (charIdx === currentQuote.length) {
          isDeleting = true;
          timeout = setTimeout(typeQuote, 2200);
          return;
        }
      } else {
        setQuoteText(currentQuote.substring(0, charIdx - 1));
        charIdx--;
        if (charIdx === 0) {
          isDeleting = false;
          setQuoteIdx((prev) => (prev + 1) % quotes.length);
          return;
        }
      }
      timeout = setTimeout(typeQuote, isDeleting ? 35 : 75);
    };

    typeQuote();
    return () => clearTimeout(timeout);
  }, [quoteIdx]);

  return (
    <section id="hero">
      <div className="perspective-container">
        <div className="glass-card tilt-card hero-glass-card">
          {/* Hologram Avatar Logo Container */}
          <div className="hologram-wrapper tilt-content">
            <div className="holo-ring outer"></div>
            <div className="holo-ring inner"></div>
            <div className="avatar-wrap">
              <img src="/assets/images/logo.png" alt="HDN FLASH Logo" />
            </div>
          </div>

          <div className="hero-body">
            {/* Status Pill */}
            <div className="cyber-pill-badge">
              <span className="pulse-dot"></span>
              <span>HDN FLASH OFFICIAL REACT SYSTEM // ACTIVE</span>
            </div>

            {/* Title Badge */}
            <div className="title-badge-wrapper">
              <div className="title-glass-badge">
                <h1 className="hero-title neon-text">
                  <span>{titleText}</span>
                  <span className="typing-cursor">|</span>
                </h1>
              </div>
            </div>

            {/* Subtitle Quote Box */}
            <div className="hero-quote-box">
              <p className="hero-sub">
                “ <span>{quoteText}</span>
                <span className="typing-cursor">|</span> ”
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="hero-stats-grid">
              <div className="stat-pill">
                <Gauge size={22} className="text-cyan" />
                <div className="stat-info">
                  <span className="stat-val">MAX</span>
                  <span class="stat-lbl">SPEED</span>
                </div>
              </div>
              <div className="stat-pill">
                <Crosshair size={22} className="text-cyan" />
                <div className="stat-info">
                  <span className="stat-val">99.9%</span>
                  <span className="stat-lbl">PRECISION</span>
                </div>
              </div>
              <div className="stat-pill">
                <Bot size={22} className="text-cyan" />
                <div className="stat-info">
                  <span className="stat-val">PRO</span>
                  <span className="stat-lbl">AUTOMATION</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="social-links">
              <a
                href="https://www.youtube.com/@hiddenoptimizer"
                target="_blank"
                rel="noreferrer"
                className="social-btn youtube"
                title="YouTube Channel"
              >
                <Youtube size={22} />
                <span className="btn-tooltip">YouTube</span>
              </a>
              <a
                href="https://discord.gg/GTkQM8dZRp"
                target="_blank"
                rel="noreferrer"
                className="social-btn discord"
                title="Discord Community"
              >
                <Discord size={22} />
                <span className="btn-tooltip">Discord</span>
              </a>
              <a
                href="https://github.com/rxmugdho12"
                target="_blank"
                rel="noreferrer"
                className="social-btn github"
                title="GitHub Repository"
              >
                <Github size={22} />
                <span className="btn-tooltip">GitHub</span>
              </a>
            </div>

            {/* CTA Buttons */}
            <div className="hero-cta-row">
              <a href="#projects" className="cta-btn cta-primary">
                <Boxes size={18} /> View Projects
              </a>
              <a href="#contact" className="cta-btn cta-secondary">
                <Headset size={18} /> Get in Touch
              </a>
            </div>

            {/* Creator Badge */}
            <div className="creator-badge">
              <Sparkles size={16} className="text-gold" />
              <span>
                DESIGNED & DEVELOPED BY{' '}
                <strong className="highlight-text">HDN FLASH</strong>
              </span>
              <span className="badge-divider">|</span>
              <span>
                <Instagram size={14} style={{ verticalAlign: 'middle', marginRight: '4px' }} />
                @hdnflash.official
              </span>
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section">
        <span className="scroll-text">SCROLL</span>
        <span className="scroll-mouse">
          <span className="scroll-wheel"></span>
        </span>
      </a>
    </section>
  );
}
