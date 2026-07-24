import React from 'react';
import { ArrowRight, Play } from 'lucide-react';

export default function ProjectsSection() {
  const projects = [
    {
      badge: 'SYSTEM 01',
      img: '/assets/images/p1.jpg',
      title: 'SOCIAL SPAMMER',
      desc: 'HDN FLASH Social Ecosystem & High-Speed Automation Suite',
      tags: ['META ENGINE', 'HDN PRO', 'AUTOMATION'],
      link: 'https://discord.gg/GTkQM8dZRp',
      btnText: 'EXPLORE TOOL',
      btnIcon: ArrowRight,
    },
    {
      badge: 'SYSTEM 02',
      img: '/assets/images/p2.jpg',
      title: 'DISCORD BOT SUITE',
      desc: 'Custom high-performance Discord bot architecture & command triggers',
      tags: ['DISCORD.JS', 'COMMUNITY', 'CUSTOM BOT'],
      link: 'https://discord.gg/GTkQM8dZRp',
      btnText: 'EXPLORE TOOL',
      btnIcon: ArrowRight,
    },
    {
      badge: 'SYSTEM 03',
      img: '/assets/images/p3.jpg',
      title: 'FREE FIRE PI CREATOR',
      desc: 'Gaming montage VFX, custom skins & high-end cinematic edits',
      tags: ['CINEMATIC', 'GAMING VFX', 'CREATIVE'],
      link: 'https://www.youtube.com/@hiddenoptimizer',
      btnText: 'WATCH DEMO',
      btnIcon: Play,
    },
  ];

  return (
    <section id="projects">
      <div className="section-header reveal">
        <span className="section-tag">// DEVELOPER ARCHIVE</span>
        <h2 className="neon-text section-title">GAME DEV ARCHIVE</h2>
        <p className="section-subtitle">HDN FLASH Specialized Systems & Tools</p>
      </div>

      <div className="project-grid reveal">
        {projects.map((proj, i) => {
          const BtnIcon = proj.btnIcon;
          return (
            <div key={i} className="project-card glass-card tilt-card">
              <div
                className="project-img"
                style={{ backgroundImage: `url('${proj.img}')` }}
              >
                <div className="img-badge">{proj.badge}</div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <div className="project-tags">
                  {proj.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="tag">{tag}</span>
                  ))}
                </div>
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-btn"
                >
                  <span>{proj.btnText}</span> <BtnIcon size={16} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
