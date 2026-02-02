import React, { useState, useEffect } from 'react';
import Balloon from './Balloon';
import birthdayImage from '@/assets/birthday-celebration.png';

interface Interface1Props {
  onComplete: () => void;
}

const Interface1: React.FC<Interface1Props> = ({ onComplete }) => {
  const [poppedBalloons, setPoppedBalloons] = useState<number[]>([]);
  const [showContent, setShowContent] = useState(false);

  const balloons = [
    { id: 1, color: 'pink', left: '10%', delay: 0 },
    { id: 2, color: 'gold', left: '25%', delay: 0.5 },
    { id: 3, color: 'red', left: '40%', delay: 1 },
    { id: 4, color: 'rose', left: '55%', delay: 1.5 },
    { id: 5, color: 'coral', left: '70%', delay: 2 },
    { id: 6, color: 'purple', left: '85%', delay: 2.5 },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleBalloonPop = (id: number) => {
    if (!poppedBalloons.includes(id)) {
      setPoppedBalloons([...poppedBalloons, id]);
      
      if (poppedBalloons.length === 5) {
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-romantic bg-hearts-pattern flex flex-col items-center justify-center relative overflow-hidden">
      {/* Floating balloons */}
      {balloons.map((balloon) => (
        <Balloon
          key={balloon.id}
          color={balloon.color}
          delay={balloon.delay}
          left={balloon.left}
          onClick={() => handleBalloonPop(balloon.id)}
          popped={poppedBalloons.includes(balloon.id)}
        />
      ))}

      {/* Main content */}
      {showContent && (
        <div className="z-10 text-center animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-cursive text-gradient-love mb-6 animate-pulse-love">
            Happy Birthday
          </h1>
          <h2 className="text-3xl md:text-5xl font-cursive text-primary mb-8">
            My Wife ❤️
          </h2>
          <p className="text-4xl md:text-6xl font-cursive text-gradient-gold animate-heartbeat mb-8">
            Chitti Talli
          </p>
          
          {/* Photo frame */}
          <div className="relative mx-auto w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary shadow-2xl animate-glow-pulse">
            <img 
              src={birthdayImage} 
              alt="Birthday Celebration" 
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mt-8 text-xl text-muted-foreground animate-pulse">
            🎈 Pop all balloons to continue! 🎈
          </p>
          <p className="text-lg text-primary font-medium">
            {poppedBalloons.length} / 6 popped
          </p>
        </div>
      )}
    </div>
  );
};

export default Interface1;
