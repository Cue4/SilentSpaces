import React, { useEffect, useState } from 'react';
import '../GlitchEffect/glitchEffect.css' // Create this CSS file for the glitch animation

const GlitchEffect = () => {
  const [isGlitching, setIsGlitching] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setIsGlitching(true);
      setTimeout(() => setIsGlitching(false), 2000); // Remove glitch after 500ms
    }, 5000); // Glitch every 5 seconds

    return () => clearInterval(glitchInterval);
  }, []);

  return (
    <div className={`container ${isGlitching ? 'glitch-bg' : ''}`}>
      <h1 className={`title ${isGlitching ? 'glitch' : ''}`}>Silent Spaces</h1>
      <p className={`description ${isGlitching ? 'glitch' : ''}`}>Sign in to continue...</p>
    </div>
  );
};

export default GlitchEffect;
