import React from 'react';

interface BalloonProps {
  color: string;
  delay: number;
  left: string;
  onClick?: () => void;
  popped?: boolean;
}

const Balloon: React.FC<BalloonProps> = ({ color, delay, left, onClick, popped }) => {
  const balloonColors: Record<string, string> = {
    pink: 'bg-pink-400',
    red: 'bg-red-500',
    gold: 'bg-yellow-500',
    rose: 'bg-rose-400',
    purple: 'bg-purple-400',
    coral: 'bg-orange-400',
  };

  return (
    <div
      className={`absolute bottom-0 cursor-pointer transition-all duration-300 ${
        popped ? 'animate-balloon-pop' : 'animate-balloon-float animate-balloon-wobble'
      }`}
      style={{
        left,
        animationDelay: `${delay}s`,
      }}
      onClick={onClick}
    >
      <div className="relative">
        {/* Balloon body */}
        <div
          className={`w-16 h-20 ${balloonColors[color] || 'bg-pink-400'} rounded-full relative shadow-lg`}
          style={{
            borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%',
          }}
        >
          {/* Shine effect */}
          <div className="absolute top-3 left-3 w-4 h-6 bg-white/40 rounded-full transform rotate-45" />
        </div>
        
        {/* Balloon knot */}
        <div
          className={`w-3 h-3 ${balloonColors[color] || 'bg-pink-400'} mx-auto -mt-1`}
          style={{
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
        />
        
        {/* String */}
        <div className="w-px h-24 bg-gray-400 mx-auto" />
      </div>
    </div>
  );
};

export default Balloon;
