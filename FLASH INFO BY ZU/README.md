# ⚡ HDN FLASH | React.js + Node.js Cyber Gaming Portal

Welcome to **HDN FLASH**, an ultra-premium, interactive 3D Web Application rewritten from scratch using **React 18, Vite, Lucide Icons, and Node.js Express**.

---

## 📁 React Project Folder Architecture

```
FLASH INFO BY ZU/
│
├── ⚡ server.js                # Node.js Express Backend Server (Serves React dist)
├── 📦 package.json             # React 18, Vite, Lucide Icons & Express dependencies
├── ⚙️ vite.config.js           # Vite React Compiler Configuration
├── ⚙️ .env                     # Environment variables (PORT=3000)
├── 📄 README.md                # Documentation & Developer Guide
├── 📄 index.html               # React Root Mount HTML Entry Point
│
├── 🌐 public/                  # Static Media Assets
│   └── assets/
│       ├── images/             # Logo, Background, Project Thumbnails
│       └── audio/              # Background ambient track
│
└── ⚛️ src/                      # React Components Architecture
    ├── main.jsx                # React DOM render entry
    ├── App.jsx                 # Main Application Layout & Intersection Observer
    ├── App.css                 # Cyberpunk Glassmorphism Styling System
    │
    └── components/             # Modular React 18 Components
        ├── CustomCursor.jsx    # Target Reticle Pointer & Lerp Mouse Tracker
        ├── GalaxyCanvas.jsx    # 950+ Star Canvas & Constellation Force Field
        ├── BootTerminal.jsx    # 0%-100% Boot Sequence Security Access Terminal
        ├── Navbar.jsx          # HUD Glass Navigation Bar with Status & Mobile Drawer
        ├── HeroSection.jsx     # Rotating Hologram Ring, Typewriter, Stats & CTA
        ├── AboutSection.jsx    # Bash Terminal Diagnostics & Feature Pillars
        ├── ArsenalSection.jsx  # 3D Skill Cubes & Animated Progress Bars
        ├── ProjectsSection.jsx # Developer Archive Cards with Badges & CTA
        ├── ContactSection.jsx  # Radar Broadcasting Pulse & Social Connections
        ├── AudioPlayer.jsx     # Audio Control & Equalizer Animation Bars
        └── BackToTop.jsx       # Smooth Scroll Return Button
```

---

## 🚀 Running the React App

### 1. Install Dependencies
```bash
npm install
```

### 2. Development Mode (Vite HMR React Server)
```bash
npm run dev
```
Runs Vite React development server on **http://localhost:3000** with instant hot-reloading!

### 3. Build & Run Production Node.js Server
```bash
# Build React bundle
npm run build

# Start Node.js Express server
npm start
```
Express server serves the production-ready React app at **http://localhost:3000** with API routes `/api/status` and `/api/stats`.

---
*© 2026 HDN FLASH — Rewritten in React 18 & Node.js for Absolute Dominance.*
