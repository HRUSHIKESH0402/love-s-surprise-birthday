import React, { useState } from 'react';
import FloatingHearts from './FloatingHearts';
import SadEmoji from './SadEmoji';
import LoveSurprise from './LoveSurprise';
import lovePhoto1 from '@/assets/love-photo-1.jpg';

interface Interface3Props {
  onComplete: () => void;
}

const Interface3: React.FC<Interface3Props> = ({ onComplete }) => {
  const [answer, setAnswer] = useState('');
  const [showSad, setShowSad] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const normalizedAnswer = answer.replace(/[^0-9]/g, '');
    
    // Accept 4-1-2024, 04-01-2024, 4/1/2024, etc.
    if (normalizedAnswer.includes('412024') || 
        normalizedAnswer.includes('4012024') ||
        normalizedAnswer.includes('142024') ||
        answer.includes('4-1-2024') ||
        answer.includes('4/1/2024') ||
        answer.includes('04-01-2024') ||
        answer.includes('january 4') ||
        answer.includes('4 january')) {
      setShowSuccess(true);
      setShowSad(false);
      setTimeout(() => {
        onComplete();
      }, 3000);
    } else {
      setShowSad(true);
      setAttempts(attempts + 1);
      setTimeout(() => {
        setShowSad(false);
      }, 2000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-romantic bg-hearts-pattern flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={10} />
      
      {!showSuccess ? (
        <div className="z-10 text-center max-w-md w-full animate-fade-in-up">
          {/* Photo */}
          <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl mb-8 animate-glow-pulse">
            <img 
              src={lovePhoto1} 
              alt="My Beautiful Wife" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h2 className="text-3xl md:text-4xl font-cursive text-gradient-love mb-4 animate-pulse-love">
            When is our anniversary day,
          </h2>
          <h3 className="text-4xl md:text-5xl font-cursive text-gradient-gold mb-8">
            Bangaram? 💍
          </h3>
          
          {showSad ? (
            <SadEmoji show={showSad} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="DD-MM-YYYY"
                className="w-full px-6 py-4 text-xl text-center font-cursive rounded-full border-2 border-primary/50 bg-white/80 backdrop-blur-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30 shadow-lg"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 text-xl font-cursive text-white bg-gradient-love rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse-love"
              >
                Submit 💝
              </button>
            </form>
          )}
          
          {attempts > 1 && !showSad && (
            <p className="mt-4 text-muted-foreground font-cursive text-lg">
              Hint: It's in January 2024... 📅
            </p>
          )}
        </div>
      ) : (
        <LoveSurprise trigger={showSuccess}>
          <div className="text-center">
            <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl mb-6">
              <img 
                src={lovePhoto1} 
                alt="My Beautiful Wife"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl font-cursive text-gradient-love">
              4th January 2024! 🎉
            </h2>
            <p className="text-2xl font-cursive text-primary mt-4">
              Our Special Day! 💕
            </p>
            <div className="text-6xl mt-4 animate-heartbeat">💍❤️</div>
          </div>
        </LoveSurprise>
      )}
    </div>
  );
};

export default Interface3;
