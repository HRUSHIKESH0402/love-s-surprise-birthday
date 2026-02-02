import React, { useState, useEffect } from 'react';
import FloatingHearts from './FloatingHearts';
import KissAnimation from './KissAnimation';
import lovePhotoTemple from '@/assets/love-photo-temple.jpg';

interface Interface4Props {
  onComplete: () => void;
}

const Interface4: React.FC<Interface4Props> = ({ onComplete }) => {
  const [stage, setStage] = useState(0);
  const [showKiss, setShowKiss] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000),
      setTimeout(() => setStage(2), 2500),
      setTimeout(() => setStage(3), 4000),
      setTimeout(() => {
        setShowKiss(true);
        setStage(4);
      }, 5500),
      setTimeout(() => onComplete(), 9000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  return (
    <div className="min-h-screen bg-gradient-romantic bg-hearts-pattern flex flex-col items-center justify-center relative overflow-hidden">
      <FloatingHearts count={20} />
      <KissAnimation trigger={showKiss} />

      <div className="z-10 text-center">
        {/* Animated photo with zoom */}
        <div 
          className={`relative mx-auto rounded-full overflow-hidden border-4 border-primary shadow-2xl transition-all duration-1000 ${
            stage >= 2 ? 'w-80 h-80 md:w-96 md:h-96' : 'w-48 h-48'
          } ${stage >= 3 ? 'animate-glow-pulse' : ''}`}
        >
          <img 
            src={lovePhotoTemple}
            alt="Our Love" 
            className={`w-full h-full object-cover transition-transform duration-1000 ${
              stage >= 2 ? 'scale-110' : 'scale-100'
            }`}
          />
          
          {/* Heart overlay */}
          {stage >= 1 && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-6xl animate-pulse-love opacity-80">❤️</div>
            </div>
          )}
        </div>

        {/* Text animations */}
        <div className="mt-8 space-y-4">
          {stage >= 1 && (
            <p className="text-3xl font-cursive text-gradient-love animate-fade-in-up">
              Surprise! ✨
            </p>
          )}
          {stage >= 2 && (
            <p className="text-4xl font-cursive text-gradient-gold animate-fade-in-up">
              My Love 💕
            </p>
          )}
          {stage >= 3 && (
            <div className="flex items-center justify-center gap-4 animate-fade-in-up">
              <span className="text-5xl animate-heartbeat">❤️</span>
              <span className="text-3xl font-cursive text-primary">Forever Yours</span>
              <span className="text-5xl animate-heartbeat">❤️</span>
            </div>
          )}
          {stage >= 4 && (
            <div className="animate-fade-in-up">
              <p className="text-5xl animate-lips-kiss">💋</p>
              <p className="text-2xl font-cursive text-primary mt-2">Mwah!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Interface4;
