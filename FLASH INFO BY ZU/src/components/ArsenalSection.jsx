import React from 'react';

export default function ArsenalSection() {
  const skills = [
    { icon: '🎯', label: 'Precision', level: 99 },
    { icon: '⚡', label: 'Ultra Speed', level: 100 },
    { icon: '🧠', label: 'Tactics', level: 98 },
    { icon: '🎮', label: 'Game Control', level: 96 },
    { icon: '🤖', label: 'Bot Automation', level: 97 },
    { icon: '✂️', label: 'VFX & Edit', level: 95 },
  ];

  return (
    <section id="skills">
      <div className="section-header reveal">
        <span className="section-tag">// PERFORMANCE METRICS</span>
        <h2 className="neon-text section-title">COMBAT ARSENAL</h2>
        <p className="section-subtitle">Hover to reveal dimensional metrics & masteries</p>
      </div>

      <div className="skill-grid reveal">
        {skills.map((skill, i) => (
          <div key={i} className="skill-cube glass-card tilt-card" data-level={skill.level}>
            <div className="skill-icon-wrap">{skill.icon}</div>
            <div className="skill-label">{skill.label}</div>
            <div className="skill-bar-container">
              <div className="skill-bar-fill" style={{ width: `${skill.level}%` }}></div>
            </div>
            <span className="skill-percentage">{skill.level}%</span>
          </div>
        ))}
      </div>
    </section>
  );
}
