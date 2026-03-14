import React from 'react';

export default function GrainOverlay() {
  return (
    <div 
      className="fixed inset-0 opacity-[0.08] pointer-events-none mix-blend-overlay z-[9999]" 
      style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}
    ></div>
  );
}
