import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [lerpPos, setLerpPos] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animId;
    const animate = () => {
      setLerpPos((prev) => ({
        x: prev.x + (pos.x - prev.x) * 0.2,
        y: prev.y + (pos.y - prev.y) * 0.2,
      }));
      animId = requestAnimationFrame(animate);
    };
    animId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animId);
  }, [pos]);

  return (
    <>
      <div
        id="cursor-glow"
        style={{ left: `${lerpPos.x}px`, top: `${lerpPos.y}px` }}
      />
      <div
        id="cursor-reticle"
        style={{ left: `${lerpPos.x}px`, top: `${lerpPos.y}px` }}
      />
      <div
        id="cursor-core"
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
      />
    </>
  );
}
