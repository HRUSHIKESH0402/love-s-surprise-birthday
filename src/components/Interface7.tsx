import React, { useState, useEffect } from 'react';
import FloatingHearts from './FloatingHearts';
import KissAnimation from './KissAnimation';
import lovePhotoMirror from '@/assets/love-photo-mirror.jpg';

interface Interface7Props {
  onComplete: () => void;
}

const Interface7: React.FC<Interface7Props> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [showKiss, setShowKiss] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 500),
      setTimeout(() => setStage(2), 1500),
      setTimeout(() => setStage(3), 2500),
      setTimeout(() => {
        setShowKiss(true);
        setStage(4);
      }, 3500),
      setTimeout(() => onComplete(), 7000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-romantic bg-hearts-pattern flex flex-col items-center justify-center relative overflow-hidden">
      <FloatingHearts count={25} />
      <KissAnimation trigger={showKiss} />

      <div className="z-10 text-center px-4">
        {/* Photo with love animation */}
        <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl mb-8 animate-glow-pulse">
          <img 
            src={lovePhotoMirror} 
            alt="My Love"
            className="w-full h-full object-cover"
          />
          
          {/* Floating hearts around photo */}
          {stage >= 2 && (
            <>
              <div className="absolute -top-4 -left-4 text-4xl animate-float-heart">❤️</div>
              <div className="absolute -top-4 -right-4 text-4xl animate-float-heart" style={{ animationDelay: '0.5s' }}>💕</div>
              <div className="absolute -bottom-4 -left-4 text-4xl animate-float-heart" style={{ animationDelay: '1s' }}>💖</div>
              <div className="absolute -bottom-4 -right-4 text-4xl animate-float-heart" style={{ animationDelay: '1.5s' }}>💗</div>
            </>
          )}
        </div>

        {/* Animated text */}
        <div className="space-y-4">
          {stage >= 1 && (
            <h2 className="text-3xl md:text-4xl font-cursive text-gradient-gold animate-fade-in-up">
              Hello Madam Garu! 🙏
            </h2>
          )}
          
          {stage >= 2 && (
            <h1 className="text-4xl md:text-6xl font-cursive text-gradient-love animate-fade-in-up animate-pulse-love">
              I LOVE YOU ❤️
            </h1>
          )}
          
          {stage >= 3 && (
            <div className="animate-fade-in-up">
              <p className="text-5xl md:text-6xl font-cursive text-gradient-love animate-heartbeat">
                Ummmmmmmah
              </p>
              <div className="flex justify-center gap-2 mt-4 text-4xl animate-lips-kiss">
                💋💋💋💋💋💋
              </div>
            </div>
          )}
          
          {stage >= 4 && (
            <div className="mt-8 animate-fade-in-up">
              <div className="text-6xl animate-heartbeat">❤️‍🔥</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interface7;
