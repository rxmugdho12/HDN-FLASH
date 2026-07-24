import React, { useState, useEffect, useRef } from 'react';
import { Music } from 'lucide-react';

export default function AudioPlayer({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const startAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = 0.6;
    audio
      .play()
      .then(() => setIsPlaying(true))
      .catch((err) => console.log('Autoplay blocked by browser policy:', err));
  };

  useEffect(() => {
    if (autoPlayTrigger) {
      startAudio();
    }
  }, [autoPlayTrigger]);

  // Global user interaction listener to ensure audio plays by default as requested
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (!isPlaying) {
        startAudio();
      }
    };
    window.addEventListener('click', handleFirstInteraction, { once: true });
    return () => window.removeEventListener('click', handleFirstInteraction);
  }, [isPlaying]);

  const toggleAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      startAudio();
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <>
      <button
        id="audio-toggle"
        className={isPlaying ? 'active' : ''}
        onClick={toggleAudio}
        title="Toggle Audio Experience"
      >
        <div className="eq-bars">
          <span className="bar bar1"></span>
          <span className="bar bar2"></span>
          <span className="bar bar3"></span>
          <span className="bar bar4"></span>
        </div>
        <Music size={20} className="music-icon" />
      </button>

      <audio ref={audioRef} id="bg-music" src="/assets/audio/music.mp3" loop />
    </>
  );
}
