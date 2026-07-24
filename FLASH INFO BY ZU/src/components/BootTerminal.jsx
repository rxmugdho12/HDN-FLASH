import React, { useState, useEffect } from 'react';
import { Check, Bolt, ShieldCheck, Cpu, Power } from 'lucide-react';

export default function BootTerminal({ onEnter }) {
  const [progress, setProgress] = useState(0);
  const [isReady, setIsReady] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.floor(Math.random() * 15) + 8;
        if (next >= 100) {
          clearInterval(interval);
          setIsReady(true);
          return 100;
        }
        return next;
      });
    }, 90);
    return () => clearInterval(interval);
  }, []);

  const handleEnterClick = () => {
    if (!isReady) return;
    setIsHidden(true);
    if (onEnter) onEnter();
  };

  if (isHidden) return null;

  return (
    <div id="enter-screen" className={isHidden ? 'hidden' : ''}>
      <div className="enter-card glow-border">
        <div className="cyber-badge-container">
          <span className="cyber-status-dot"></span>
          <span className="enter-badge">SYSTEM SECURITY ACCESS</span>
        </div>
        <h1 className="enter-title neon-text">HDN FLASH</h1>
        <p className="enter-subtitle">REACT 18 POWERED // CYBERNETIC EXPERIENCE</p>

        <div className="boot-sequence">
          <div className="boot-line">
            <span className="boot-check"><Check size={14} /></span> Loading React 18 & Kernel modules...
          </div>
          <div className="boot-line">
            <span className="boot-check"><Check size={14} /></span> Verifying 60FPS render pipeline...
          </div>
          <div className="boot-line">
            <span className="boot-check"><Check size={14} /></span> Establishing neural uplink...
          </div>
          <div className="boot-progress-track">
            <div className="boot-progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <div className="boot-percent">{progress}%</div>
        </div>

        <div className="enter-metrics">
          <div className="metric-item"><Bolt size={14} className="text-cyan" /> <span>FPS: 144+</span></div>
          <div className="metric-item"><ShieldCheck size={14} className="text-purple" /> <span>SECURITY: ACTIVE</span></div>
          <div className="metric-item"><Cpu size={14} className="text-gold" /> <span>REACT 18: READY</span></div>
        </div>

        <button
          className="enter-btn"
          disabled={!isReady}
          onClick={handleEnterClick}
        >
          <span className="btn-glow"></span>
          <span className="btn-text">
            <Power size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
            INITIALIZE SYSTEM
          </span>
        </button>

        <div className="enter-footnote">
          <i className="fa-solid fa-volume-high text-cyan"></i> Sound enabled by default • Immersion active
        </div>
      </div>
    </div>
  );
}
