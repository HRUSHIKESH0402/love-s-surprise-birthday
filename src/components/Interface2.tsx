import React, { useState } from 'react';
import FloatingHearts from './FloatingHearts';
import SadEmoji from './SadEmoji';
import LoveSurprise from './LoveSurprise';
import lovePhotoSaree from '@/assets/love-photo-saree.jpg';

interface Interface2Props {
  onComplete: () => void;
}

const Interface2: React.FC<Interface2Props> = ({ onComplete }) => {
  const [answer, setAnswer] = useState('');
  const [showSad, setShowSad] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const normalizedAnswer = answer.toLowerCase().trim();
    const correctAnswers = ['wife of hrushikesh', 'hrushikesh wife', 'hrushikesh\'s wife'];
    
    if (correctAnswers.some(correct => normalizedAnswer.includes(correct.toLowerCase()) || 
        normalizedAnswer.includes('wife') && normalizedAnswer.includes('hrushikesh'))) {
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
              src={lovePhotoSaree} 
              alt="My Beautiful Wife" 
              className="w-full h-full object-cover object-top"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-cursive text-gradient-love mb-8 animate-pulse-love">
            Who are you? 💕
          </h2>
          
          {showSad ? (
            <SadEmoji show={showSad} />
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                value={answer}
                onChange={(e) => setAnswer(e.target.value)}
                placeholder="Enter your answer..."
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
          
          {attempts > 0 && !showSad && (
            <p className="mt-4 text-muted-foreground font-cursive text-lg">
              Hint: You are the _____ of Hrushikesh 💑
            </p>
          )}
        </div>
      ) : (
        <LoveSurprise trigger={showSuccess}>
          <div className="text-center">
            <div className="relative mx-auto w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-2xl mb-6">
              <img 
                src={lovePhotoSaree} 
                alt="My Beautiful Wife"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-4xl font-cursive text-gradient-love">
              Yes! My Beautiful Wife! 💕
            </h2>
            <div className="text-6xl mt-4 animate-heartbeat">❤️</div>
          </div>
        </LoveSurprise>
      )}
    </div>
  );
};

export default Interface2;
