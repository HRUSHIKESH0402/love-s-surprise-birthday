import React, { useState, useRef } from 'react';
import FloatingHearts from './FloatingHearts';
import KissAnimation from './KissAnimation';
import lovePhotoCouple from '@/assets/love-photo-couple.jpg';
import birthdaySong from '@/assets/birthday-song.mp3';

interface Interface5Props {
  onComplete: () => void;
}

const Interface5: React.FC<Interface5Props> = ({ onComplete }) => {
  const [stage, setStage] = useState<'earphones' | 'playing' | 'finished' | 'enjoyed'>('earphones');
  const [answer, setAnswer] = useState('');
  const [showKiss, setShowKiss] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleEarphonesYes = () => {
    setStage('playing');
    // Start playing music (using a romantic song URL)
    if (audioRef.current) {
      audioRef.current.play().catch(console.log);
    }
  };

  const handleSongEnd = () => {
    setStage('finished');
  };

  const handleEnjoyed = (enjoyed: boolean) => {
    if (enjoyed) {
      setShowKiss(true);
      setStage('enjoyed');
      setTimeout(() => {
        onComplete();
      }, 4000);
    }
  };

  // Skip after 30 seconds for demo purposes
  const handleSkip = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setStage('finished');
  };

  return (
    <div className="min-h-screen bg-gradient-romantic bg-hearts-pattern flex flex-col items-center justify-center relative overflow-hidden px-4">
      <FloatingHearts count={15} />
      <KissAnimation trigger={showKiss} />

      {/* Birthday song */}
      <audio
        ref={audioRef}
        onEnded={handleSongEnd}
        src={birthdaySong}
      />

      {/* Photo */}
      <div className="relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl mb-8 animate-glow-pulse z-10">
        <img 
          src={lovePhotoCouple} 
          alt="Our Love" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="z-10 text-center max-w-md w-full">
        {stage === 'earphones' && (
          <div className="animate-fade-in-up">
            <div className="text-6xl mb-6 animate-pulse-love">🎧</div>
            <h2 className="text-3xl md:text-4xl font-cursive text-gradient-love mb-4">
              Put your earphones
            </h2>
            <p className="text-xl font-cursive text-muted-foreground mb-8">
              Please do not think anything, listen this peacefully 🎵
            </p>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
              <p className="text-2xl font-cursive text-primary mb-6">
                Did you put your earphones? 🎧
              </p>
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleEarphonesYes}
                  className="px-8 py-4 text-xl font-cursive text-white bg-gradient-love rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                >
                  Yes! 🎵
                </button>
              </div>
            </div>
          </div>
        )}

        {stage === 'playing' && (
          <div className="animate-fade-in-up">
            <div className="text-6xl mb-6 animate-pulse-love">🎵</div>
            <h2 className="text-3xl font-cursive text-gradient-love mb-4">
              Now playing...
            </h2>
            <p className="text-xl font-cursive text-muted-foreground mb-4">
              Listen peacefully with your eyes closed 💕
            </p>
            
            {/* Music visualization */}
            <div className="flex justify-center items-end gap-1 h-16 mb-8">
              {[...Array(10)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 bg-gradient-love rounded-full animate-pulse"
                  style={{
                    height: `${20 + Math.random() * 40}px`,
                    animationDelay: `${i * 0.1}s`,
                    animationDuration: '0.5s',
                  }}
                />
              ))}
            </div>
            
            <button
              onClick={handleSkip}
              className="px-6 py-3 text-lg font-cursive text-primary border-2 border-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
              Song finished? Continue →
            </button>
          </div>
        )}

        {stage === 'finished' && (
          <div className="animate-fade-in-up">
            <div className="text-6xl mb-6">🎵❤️</div>
            <h2 className="text-3xl font-cursive text-gradient-love mb-8">
              Did you enjoy the song? 💕
            </h2>
            
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => handleEnjoyed(true)}
                className="px-8 py-4 text-xl font-cursive text-white bg-gradient-love rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Yes, I loved it! 💕
              </button>
            </div>
            
            <p className="mt-6 text-lg font-cursive text-muted-foreground">
              If you enjoyed, please give me a kiss! 💋
            </p>
          </div>
        )}

        {stage === 'enjoyed' && (
          <div className="animate-fade-in-up">
            <div className="text-8xl mb-6 animate-lips-kiss">💋</div>
            <h2 className="text-4xl font-cursive text-gradient-love">
              Thank you for the kiss!
            </h2>
            <p className="text-2xl font-cursive text-primary mt-4 animate-heartbeat">
              ❤️ I love you ❤️
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interface5;
