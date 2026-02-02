import React from 'react';

interface SadEmojiProps {
  show: boolean;
}

const SadEmoji: React.FC<SadEmojiProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="flex flex-col items-center justify-center animate-fade-in-scale">
      <div className="relative animate-sad-shake">
        <div className="text-8xl">😢</div>
        {/* Tear drops */}
        <div className="absolute top-12 left-6 text-2xl animate-tear-drop">💧</div>
        <div 
          className="absolute top-12 right-6 text-2xl animate-tear-drop"
          style={{ animationDelay: '0.3s' }}
        >
          💧
        </div>
      </div>
      <p className="mt-4 text-xl text-muted-foreground font-cursive">
        Oh no! That's not right...
      </p>
    </div>
  );
};

export default SadEmoji;
