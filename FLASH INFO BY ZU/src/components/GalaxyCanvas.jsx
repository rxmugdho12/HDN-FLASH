import React, { useEffect, useRef } from 'react';

export default function GalaxyCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const stars = Array.from({ length: 900 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      z: Math.random() * 2 + 0.5,
      size: Math.random() * 1.3 + 0.4,
      opacity: Math.random() * 0.8 + 0.2,
      offset: Math.random() * Math.PI * 2,
    }));

    const shootingStars = [];
    const spawnShootingStar = () => {
      shootingStars.push({
        x: Math.random() * width * 0.8,
        y: Math.random() * height * 0.4,
        vx: 14 + Math.random() * 8,
        vy: 5 + Math.random() * 4,
        life: 1,
      });
    };
    const spawnInterval = setInterval(spawnShootingStar, 2200);

    let animId;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      const mx = (mouseX - width / 2) * 0.035;
      const my = (mouseY - height / 2) * 0.035;

      stars.forEach((star) => {
        const twinkle = Math.sin(Date.now() * 0.0012 * star.z + star.offset) * 0.5 + 0.5;
        let drawX = (star.x + mx * star.z) % width;
        let drawY = (star.y + my * star.z) % height;
        if (drawX < 0) drawX += width;
        if (drawY < 0) drawY += height;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${star.opacity * twinkle})`;
        ctx.fill();

        const dist = Math.hypot(drawX - mouseX, drawY - mouseY);
        if (dist < 90) {
          ctx.beginPath();
          ctx.moveTo(drawX, drawY);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = `rgba(0, 240, 255, ${0.2 * (1 - dist / 90)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });

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
        ctx.stroke();
      }

      animId = requestAnimationFrame(draw);
    };

    animId = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(animId);
      clearInterval(spawnInterval);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} id="galaxy" />;
}
