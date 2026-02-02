import React, { useState, useEffect } from 'react';
import FloatingHearts from './FloatingHearts';
import LoveSurprise from './LoveSurprise';

interface Interface9Props {
  onComplete: () => void;
}

const Interface9: React.FC<Interface9Props> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [showSurprise, setShowSurprise] = useState(false);

  useEffect(() => {
    setShowSurprise(true);
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 2500),
      setTimeout(() => setStage(3), 4000),
      setTimeout(() => setStage(4), 5500),
      setTimeout(() => onComplete(), 9000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-romantic bg-hearts-pattern flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={30} />

      <LoveSurprise trigger={showSurprise}>
        <div className="z-10 text-center">
          {/* Big 18 */}
          <div className="relative mb-8">
            <span className="text-9xl md:text-[12rem] font-bold text-gradient-love animate-pulse-love">
              18
            </span>
            <div className="absolute -top-4 -right-4 text-5xl animate-float-heart">🎉</div>
            <div className="absolute -top-4 -left-4 text-5xl animate-float-heart" style={{ animationDelay: '0.5s' }}>🥳</div>
          </div>

          {/* Animated messages */}
          <div className="space-y-4">
            {stage >= 1 && (
              <h1 className="text-4xl md:text-5xl font-cursive text-gradient-love animate-fade-in-up">
                Once Again Happy Birthday! 🎂
              </h1>
            )}
            
            {stage >= 2 && (
              <h2 className="text-3xl md:text-4xl font-cursive text-gradient-gold animate-fade-in-up">
                To You My Lovee ❤️
              </h2>
            )}
            
            {stage >= 3 && (
              <div className="animate-fade-in-up">
                <p className="text-3xl font-cursive text-primary animate-pulse-love">
                  I Love You Sooo Much Nanna! 💕
                </p>
                <p className="text-2xl font-cursive text-muted-foreground mt-2">
                  My Everything! 💖
                </p>
              </div>
            )}
            
            {stage >= 4 && (
              <div className="mt-8 animate-fade-in-up">
                <p className="text-3xl font-cursive text-gradient-love animate-heartbeat">
                  Turning Into 18! 🥳🥳
                </p>
                <div className="flex justify-center gap-2 mt-4 text-4xl">
                  <span className="animate-float-heart">🎂</span>
                  <span className="animate-float-heart" style={{ animationDelay: '0.3s' }}>🎉</span>
                  <span className="animate-float-heart" style={{ animationDelay: '0.6s' }}>🎊</span>
                  <span className="animate-float-heart" style={{ animationDelay: '0.9s' }}>🥳</span>
                  <span className="animate-float-heart" style={{ animationDelay: '1.2s' }}>💕</span>
                </div>
              </div>
            )}
          </div>

          {/* Love animations around */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-4xl animate-float-heart"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {['❤️', '💕', '💖', '💗', '💝', '🥰'][i % 6]}
              </div>
            ))}
          </div>
        </div>
      </LoveSurprise>
    </div>
  );
};

export default Interface9;
