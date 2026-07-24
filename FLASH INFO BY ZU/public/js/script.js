// --- 1. Dynamic Animated Global HSL Colors ---
let hue = 260;
function animateColors() {
  hue = (hue + 0.25) % 360;
  document.documentElement.style.setProperty('--hue', hue);
  requestAnimationFrame(animateColors);
}
animateColors();

// --- 2. Custom Cyber Reticle Cursor ---
const cursorGlow = document.getElementById('cursor-glow');
const cursorReticle = document.getElementById('cursor-reticle');
const cursorCore = document.getElementById('cursor-core');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  cursorX += (mouseX - cursorX) * 0.18;
  cursorY += (mouseY - cursorY) * 0.18;
  
  if (cursorGlow) {
    cursorGlow.style.left = cursorX + 'px';
    cursorGlow.style.top = cursorY + 'px';
  }
  if (cursorReticle) {
    cursorReticle.style.left = cursorX + 'px';
    cursorReticle.style.top = cursorY + 'px';
  }
  if (cursorCore) {
    cursorCore.style.left = mouseX + 'px';
    cursorCore.style.top = mouseY + 'px';
  }
  requestAnimationFrame(animateCursor);
}
animateCursor();

// --- 3. Interactive Galaxy & Constellation Canvas ---
const canvas = document.getElementById('galaxy');
const ctx = canvas ? canvas.getContext('2d') : null;
let width, height;
const stars = [];
const shootingStars = [];
const STAR_COUNT = 950;

function resizeCanvas() {
  if (!canvas) return;
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Star {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * (width || window.innerWidth);
    this.y = Math.random() * (height || window.innerHeight);
    this.z = Math.random() * 2 + 0.5;
    this.size = Math.random() * 1.3 + 0.4;
    this.opacity = Math.random() * 0.8 + 0.2;
    this.offset = Math.random() * Math.PI * 2;
  }
}

if (canvas) {
  for (let i = 0; i < STAR_COUNT; i++) {
    stars.push(new Star());
  }
}

function spawnShootingStar() {
  if (!width) return;
  shootingStars.push({
    x: Math.random() * width * 0.8,
    y: Math.random() * height * 0.4,
    vx: 14 + Math.random() * 8,
    vy: 5 + Math.random() * 4,
    len: 12,
    life: 1 
  });
}
setInterval(spawnShootingStar, 2200);

function drawGalaxy() {
  if (!ctx) return;
  ctx.clearRect(0, 0, width, height);
  const hueVal = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hue')) || 260;

  // Center Radial Glow
  const gradient = ctx.createRadialGradient(width / 2, height / 2, 0, width / 2, height / 2, width * 0.75);
  gradient.addColorStop(0, `hsla(${hueVal}, 70%, 15%, 0.12)`);
  gradient.addColorStop(1, 'transparent');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const mx = (mouseX - width / 2) * 0.035;
  const my = (mouseY - height / 2) * 0.035;

  // Render Stars & Subtle Constellation Lines
  for (let i = 0; i < stars.length; i++) {
    const star = stars[i];
    const twinkle = Math.sin(Date.now() * 0.0012 * star.z + star.offset) * 0.5 + 0.5;
    let drawX = (star.x + mx * star.z) % width;
    let drawY = (star.y + my * star.z) % height;
    if (drawX < 0) drawX += width;
    if (drawY < 0) drawY += height;

    ctx.beginPath();
    ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255,255,255,${star.opacity * twinkle})`;
    ctx.shadowBlur = star.size * 4;
    ctx.shadowColor = `hsla(${hueVal}, 100%, 70%, ${twinkle})`;
    ctx.fill();
    ctx.shadowBlur = 0;

    // Connect stars near mouse
    const distToMouse = Math.hypot(drawX - mouseX, drawY - mouseY);
    if (distToMouse < 100) {
      ctx.beginPath();
      ctx.moveTo(drawX, drawY);
      ctx.lineTo(mouseX, mouseY);
      ctx.strokeStyle = `hsla(${hueVal}, 100%, 70%, ${0.25 * (1 - distToMouse / 100)})`;
      ctx.lineWidth = 0.5;
      ctx.stroke();
    }
  }

  // Shooting Stars
  for (let i = shootingStars.length - 1; i >= 0; i--) {
    const s = shootingStars[i];
    s.x += s.vx;
    s.y += s.vy;
    s.life -= 0.018;
    if (s.life <= 0) {
      shootingStars.splice(i, 1);
      continue;
    }
    ctx.beginPath();
    ctx.moveTo(s.x, s.y);
    ctx.lineTo(s.x - s.vx * 3.5, s.y - s.vy * 3.5);
    ctx.strokeStyle = `rgba(0, 240, 255, ${s.life})`;
    ctx.lineWidth = 2;
    ctx.shadowBlur = 12;
    ctx.shadowColor = `hsla(${hueVal}, 100%, 80%, ${s.life})`;
    ctx.stroke();
    ctx.shadowBlur = 0;
  }

  requestAnimationFrame(drawGalaxy);
}
if (canvas) drawGalaxy();

// --- 4. 3D Tilt Effect ---
function initTilt() {
  const cards = document.querySelectorAll('.tilt-card, .glass-card');
  cards.forEach((card) => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1,1,1)';
    });
  });
}
initTilt();

// --- 5. Scroll Reveal & Skill Bar Animation ---
const observerOptions = { threshold: 0.15 };
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger skill progress bars
      const skillFills = entry.target.querySelectorAll('.skill-bar-fill');
      skillFills.forEach((fill) => {
        const parentCube = fill.closest('.skill-cube');
        if (parentCube) {
          const level = parentCube.getAttribute('data-level') || '90';
          fill.style.width = level + '%';
        }
      });
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

// --- 6. Web Audio Synthesizer & Audio Control ---
class CyberAudioEngine {
  constructor() {
    this.ctx = null;
    this.masterGain = null;
  }

  init() {
    if (this.ctx) return;
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.value = 0.2;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.value = 600;

      this.masterGain.connect(filter);
      filter.connect(this.ctx.destination);
    } catch (e) {}
  }

  playClickSound() {
    if (!this.ctx) this.init();
    if (!this.ctx) return;
    try {
      this.ctx.resume();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(800, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(200, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.09);
    } catch (e) {}
  }
}

const cyberAudio = new CyberAudioEngine();

// --- 7. Boot Sequence Simulation & Enter Access ---
document.addEventListener("DOMContentLoaded", () => {
  const bootProgressFill = document.getElementById('boot-progress-fill');
  const bootPercent = document.getElementById('boot-percent');
  const enterBtn = document.getElementById('enter-btn');
  const bgAudio = document.getElementById('bg-music');
  const enterScreen = document.getElementById('enter-screen');
  const audioToggle = document.getElementById('audio-toggle');
  const backToTop = document.getElementById('back-to-top');

  // Simulated Boot Sequence
  if (bootProgressFill && bootPercent && enterBtn) {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      if (progress >= 100) {
        progress = 100;
        clearInterval(interval);
        enterBtn.disabled = false;
      }
      bootProgressFill.style.width = progress + '%';
      bootPercent.textContent = progress + '%';
    }, 120);
  }

  if (enterBtn && enterScreen) {
    enterBtn.addEventListener('click', () => {
      cyberAudio.playClickSound();
      enterScreen.classList.add('hidden');
      if (bgAudio) {
        bgAudio.play().then(() => {
          if (audioToggle) audioToggle.classList.add('active');
        }).catch((err) => console.log('Autoplay restricted:', err));
      }
    });
  }

  if (audioToggle && bgAudio) {
    audioToggle.addEventListener('click', () => {
      cyberAudio.playClickSound();
      if (bgAudio.paused) {
        bgAudio.play();
        audioToggle.classList.add('active');
      } else {
        bgAudio.pause();
        audioToggle.classList.remove('active');
      }
    });
  }

  // Back to Top Button
  if (backToTop) {
    window.addEventListener('scroll', () => {
      if (window.pageYOffset > 400) {
        backToTop.classList.add('show');
      } else {
        backToTop.classList.remove('show');
      }
    });
    backToTop.addEventListener('click', () => {
      cyberAudio.playClickSound();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Mobile Burger Navigation
  const burger = document.getElementById('nav-burger');
  const navLinks = document.getElementById('nav-links');
  const backdrop = document.getElementById('nav-backdrop');

  if (burger && navLinks && backdrop) {
    const toggleMenu = () => {
      navLinks.classList.toggle('open');
      backdrop.classList.toggle('open');
    };
    burger.addEventListener('click', toggleMenu);
    backdrop.addEventListener('click', toggleMenu);
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        backdrop.classList.remove('open');
      });
    });
  }

  // Click audio feedback for interactive elements
  document.querySelectorAll('a, button, .social-btn').forEach((btn) => {
    btn.addEventListener('click', () => cyberAudio.playClickSound());
  });
});

// --- 8. Typewriter Effect for Title & Quotes ---
const typingTitleElement = document.getElementById('typing-title');
const typingTextElement = document.getElementById('typing-text');

const titleText = "HDN FLASH";
let titleCharIndex = 0;
let isTitleDeleting = false;

const words = [
  "Engineered for Gaming Dominance",
  "High Speed Bot Architecture",
  "Those who do not give up win",
  "True pain brings true peace.",
  "HDN FLASH Systems Active"
];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeTitleEffect() {
  if (!typingTitleElement) return;

  if (isTitleDeleting) {
    typingTitleElement.textContent = titleText.substring(0, titleCharIndex - 1);
    titleCharIndex--;
  } else {
    typingTitleElement.textContent = titleText.substring(0, titleCharIndex + 1);
    titleCharIndex++;
  }

  let typeSpeed = isTitleDeleting ? 50 : 110;

  if (!isTitleDeleting && titleCharIndex === titleText.length) {
    typeSpeed = 3200;
    isTitleDeleting = true;
  } else if (isTitleDeleting && titleCharIndex === 0) {
    isTitleDeleting = false;
    typeSpeed = 500;
  }

  setTimeout(typeTitleEffect, typeSpeed);
}

function typeSubEffect() {
  if (!typingTextElement) return;

  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    typingTextElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingTextElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let typeSpeed = isDeleting ? 35 : 75;

  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2200;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 400;
  }

  setTimeout(typeSubEffect, typeSpeed);
}

document.addEventListener("DOMContentLoaded", () => {
  typeTitleEffect();
  typeSubEffect();
});

// --- 9. Navigation Active Link Highlighting on Scroll ---
const sections = document.querySelectorAll('section');
const navItems = document.querySelectorAll('.nav-item');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute('id');
    }
  });

  navItems.forEach((item) => {
    item.classList.remove('active');
    if (item.getAttribute('href').includes(current)) {
      item.classList.add('active');
    }
  });
});