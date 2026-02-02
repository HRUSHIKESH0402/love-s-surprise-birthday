import React, { useState } from 'react';
import FloatingHearts from './FloatingHearts';
import LoveSurprise from './LoveSurprise';
import lovePhotoCouple from '@/assets/love-photo-couple.jpg';

interface Interface6Props {
  onComplete: () => void;
}

const Interface6: React.FC<Interface6Props> = ({ onComplete }) => {
  const [answer, setAnswer] = useState('');
  const [showPhoto, setShowPhoto] = useState(false);
  const [showBalloons, setShowBalloons] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (answer.toLowerCase().trim().includes('hrushikesh')) {
      setShowPhoto(true);
      setTimeout(() => {
        setShowBalloons(true);
      }, 1500);
    }
  };

  const handleBalloonClick = (isYes: boolean) => {
    if (isYes) {
      onComplete();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-romantic bg-hearts-pattern flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={15} />

      <div className="z-10 text-center max-w-md w-full">
        {!showPhoto ? (
          <div className="animate-fade-in-up">
            <div className="text-6xl mb-6 animate-heartbeat">💕</div>
            <h2 className="text-3xl md:text-4xl font-cursive text-gradient-love mb-8">
              Whom do you belong to? 💝
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter the name..."
                className="w-full px-6 py-4 text-xl text-center font-cursive rounded-full border-2 border-primary/50 bg-white/80 backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 shadow-lg"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 text-xl font-cursive text-white bg-gradient-love rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-love"
              >
                Submit 💝
              </button>
            </form>
          </div>
        ) : (
          <LoveSurprise trigger={showPhoto}>
            <div className="text-center">
            {/* Photo */}
              <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl mb-6 animate-glow-pulse">
                <img 
                  src={lovePhotoCouple} 
                  alt="Hrushikesh" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <h2 className="text-3xl font-cursive text-gradient-love mb-6">
                Is he the Hrushikesh you are saying about? 💕
              </h2>

              {/* Balloon options */}
              {showBalloons && (
                <div className="flex justify-center gap-8 animate-fade-in-up">
                  <button
                    onClick={() => handleBalloonClick(true)}
                    className="relative group"
                  >
                    <div className="w-24 h-28 bg-green-400 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 animate-balloon-wobble"
                         style={{ borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%' }}>
                      <span className="text-2xl font-bold text-white">Yes! 💕</span>
                    </div>
                    <div className="w-px h-16 bg-gray-400 mx-auto" />
                  </button>
                  
                  <button
                    onClick={() => handleBalloonClick(false)}
                    className="relative group"
                  >
                    <div className="w-24 h-28 bg-red-400 rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-all duration-300 animate-balloon-wobble"
                         style={{ borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%', animationDelay: '0.5s' }}>
                      <span className="text-2xl font-bold text-white">No</span>
                    </div>
                    <div className="w-px h-16 bg-gray-400 mx-auto" />
                  </button>
                </div>
              )}
            </div>
          </LoveSurprise>
        )}
      </div>
    </div>
  );
};

export default Interface6;
