import React, { useState, useEffect } from 'react';
import FloatingHearts from './FloatingHearts';
import KissAnimation from './KissAnimation';

interface Interface8Props {
  onComplete: () => void;
}

const Interface8: React.FC<Interface8Props> = ({ onComplete }) => {
  const [showKiss, setShowKiss] = useState(false);
  const [poppedBalloon, setPoppedBalloon] = useState(false);

  const handleBalloonClick = () => {
    setPoppedBalloon(true);
    setShowKiss(true);
    setTimeout(() => {
      onComplete();
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-gradient-romantic bg-hearts-pattern flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={15} />
      <KissAnimation trigger={showKiss} />

      <div className="z-10 text-center">
        <h2 className="text-3xl md:text-4xl font-cursive text-gradient-love mb-8 animate-fade-in-up">
          Did you enjoy this? 💕
        </h2>

        {!poppedBalloon ? (
          <button
            onClick={handleBalloonClick}
            className="relative group animate-balloon-wobble"
          >
            {/* Poop balloon */}
            <div className="w-32 h-36 bg-gradient-love rounded-full flex items-center justify-center shadow-2xl transform hover:scale-110 transition-all duration-300"
                 style={{ borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%' }}>
              <div className="text-center">
                <span className="text-5xl">💩</span>
                <p className="text-white font-cursive text-lg mt-1">Pop me!</p>
              </div>
              {/* Shine effect */}
              <div className="absolute top-4 left-4 w-6 h-8 bg-white/30 rounded-full transform rotate-45" />
            </div>
            <div className="w-px h-20 bg-gray-400 mx-auto" />
            
            {/* Floating kiss emojis around balloon */}
            <div className="absolute -top-2 -right-2 text-2xl animate-pulse-love">💋</div>
            <div className="absolute -top-2 -left-2 text-2xl animate-pulse-love" style={{ animationDelay: '0.3s' }}>💋</div>
          </button>
        ) : (
          <div className="animate-surprise-zoom">
            <div className="text-8xl mb-4 animate-lips-kiss">💋</div>
            <p className="text-3xl font-cursive text-gradient-love">
              Mwaaaah! 💕
            </p>
            <div className="flex justify-center gap-2 mt-4 text-3xl">
              💋💋💋💋💋
            </div>
          </div>
        )}

        <p className="mt-8 text-xl font-cursive text-muted-foreground animate-pulse">
          {!poppedBalloon ? 'Pop the balloon for a kiss! 💋' : 'Getting more kisses...'}
        </p>
      </div>
    </div>
  );
};

export default Interface8;
