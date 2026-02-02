import React, { useEffect, useState } from 'react';

interface LoveSurpriseProps {
  trigger: boolean;
  children?: React.ReactNode;
}

const LoveSurprise: React.FC<LoveSurpriseProps> = ({ trigger, children }) => {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: string; color: string; delay: number }>>([]);
  const [hearts, setHearts] = useState<Array<{ id: number; left: string; delay: number }>>([]);

  useEffect(() => {
    if (trigger) {
      const colors = ['#ff6b9d', '#ff85a2', '#ffa8c5', '#ffd700', '#ff69b4', '#ff1493'];
      
      const newConfetti = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
      }));
      
      const newHearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        delay: Math.random() * 1.5,
      }));

      setConfetti(newConfetti);
      setHearts(newHearts);
    }
  }, [trigger]);

  if (!trigger) return null;

  return (
    <div className="relative">
      {/* Confetti */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
        {confetti.map((piece) => (
          <div
            key={piece.id}
            className="absolute top-0 w-3 h-3 animate-confetti"
            style={{
              left: piece.left,
              backgroundColor: piece.color,
              animationDelay: `${piece.delay}s`,
              borderRadius: Math.random() > 0.5 ? '50%' : '0%',
            }}
          />
        ))}
      </div>

      {/* Hearts burst */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-40">
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="absolute text-3xl animate-kiss-float"
            style={{
              left: heart.left,
              top: '50%',
              animationDelay: `${heart.delay}s`,
            }}
          >
            ❤️
          </div>
        ))}
      </div>

      {/* Love burst effect */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-30">
        <div className="w-40 h-40 rounded-full bg-primary/20 animate-love-burst" />
      </div>

      {/* Content with surprise animation */}
      <div className="animate-surprise-zoom z-50 relative">
        {children}
      </div>
    </div>
  );
};

export default LoveSurprise;
