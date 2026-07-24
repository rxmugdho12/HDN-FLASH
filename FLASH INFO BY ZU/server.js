import express from 'express';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Serve built React app from 'dist' if available, else 'public'
const staticDir = path.join(__dirname, 'dist');
app.use(express.static(staticDir));
app.use(express.static(path.join(__dirname, 'public')));

// API Routes
app.get('/api/status', (req, res) => {
  res.json({
    status: 'ONLINE',
    system: 'HDN FLASH REACT CORE v3.0',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    metrics: {
      fps: '144+',
      precision: '99.9%',
      security: 'ACTIVE',
      framework: 'React.js 18'
    }
  });
});

app.get('/api/stats', (req, res) => {
  res.json({
    brand: 'HDN FLASH',
    combat_skills: [
      { name: 'Precision', level: 99 },
      { name: 'Ultra Speed', level: 100 },
      { name: 'Tactics', level: 98 },
      { name: 'Game Control', level: 96 },
      { name: 'Bot Automation', level: 97 },
      { name: 'VFX & Edit', level: 95 }
    ],
    projects: [
      { id: 1, name: 'SOCIAL SPAMMER', status: 'PRO' },
      { id: 2, name: 'DISCORD BOT SUITE', status: 'ACTIVE' },
      { id: 3, name: 'FREE FIRE PI CREATOR', status: 'FEATURED' }
    ]
  });
});

app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'), (err) => {
    if (err) {
      res.sendFile(path.join(__dirname, 'index.html'));
    }
  });
});

app.listen(PORT, () => {
  console.log(`===================================================`);
  console.log(` ⚡ HDN FLASH REACT NODE.JS SERVER IS LIVE! `);
  console.log(` 🌐 Server URL: http://localhost:${PORT}`);
  console.log(` 🛡️  Status: ACTIVE // Framework: React.js`);
  console.log(`===================================================`);
});
