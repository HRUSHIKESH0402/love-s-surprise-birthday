import React, { useState, useRef, useEffect } from 'react';
import FloatingHearts from './FloatingHearts';
import KissAnimation from './KissAnimation';
import lovePhotoCouple from '@/assets/love-photo-couple.jpg';
import birthdaySong from '@/assets/birthday-song.mp3';

interface Interface5Props {
  onComplete: () => void;
}

const loveEmojis = ['❤️', '💕', '💖', '💗', '💓', '💞', '💘', '💝', '🥰', '😍', '💋', '🌹', '✨', '💫', '🎂', '🎉', '🎈', '🥳'];

const Interface5: React.FC<Interface5Props> = ({ onComplete }) => {
  const [stage, setStage] = useState<'earphones' | 'playing' | 'finished' | 'enjoyed'>('earphones');
  const [showKiss, setShowKiss] = useState(false);
  const [floatingEmojis, setFloatingEmojis] = useState<Array<{ id: number; emoji: string; left: number; delay: number }>>([]);
  const [ageTransition, setAgeTransition] = useState(false);
  const [currentAge, setCurrentAge] = useState(17);
  const audioRef = useRef<HTMLAudioElement>(null);
  const emojiIntervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleEarphonesYes = () => {
    setStage('playing');
    if (audioRef.current) {
      audioRef.current.play().catch(console.log);
    }
    // Start emoji animations
    startEmojiAnimation();
    // Start age transition after 3 seconds
    setTimeout(() => {
      setAgeTransition(true);
      setTimeout(() => setCurrentAge(18), 1000);
    }, 3000);
  };

  const startEmojiAnimation = () => {
    emojiIntervalRef.current = setInterval(() => {
      const newEmoji = {
        id: Date.now() + Math.random(),
        emoji: loveEmojis[Math.floor(Math.random() * loveEmojis.length)],
        left: Math.random() * 100,
        delay: Math.random() * 0.5,
      };
      setFloatingEmojis(prev => [...prev.slice(-20), newEmoji]);
    }, 400);
  };

  const stopEmojiAnimation = () => {
    if (emojiIntervalRef.current) {
      clearInterval(emojiIntervalRef.current);
      emojiIntervalRef.current = null;
    }
  };

  useEffect(() => {
    return () => stopEmojiAnimation();
  }, []);

  const handleSongEnd = () => {
    stopEmojiAnimation();
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

  const handleSkip = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    stopEmojiAnimation();
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

      {/* Floating love emojis during playback */}
      {stage === 'playing' && floatingEmojis.map((item) => (
        <div
          key={item.id}
          className="absolute text-4xl md:text-5xl animate-float-up pointer-events-none z-20"
          style={{
            left: `${item.left}%`,
            bottom: '-50px',
            animationDelay: `${item.delay}s`,
            animationDuration: '4s',
          }}
        >
          {item.emoji}
        </div>
      ))}

      {/* Photo */}
      <div className={`relative mx-auto w-48 h-48 rounded-full overflow-hidden border-4 border-primary shadow-xl mb-6 z-10 ${stage === 'playing' ? 'animate-pulse-love' : 'animate-glow-pulse'}`}>
        <img 
          src={lovePhotoCouple} 
          alt="Our Love" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* Age transition display */}
      {stage === 'playing' && (
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className={`text-center transition-all duration-1000 ${ageTransition ? 'scale-110' : 'scale-100'}`}>
            <div className="text-2xl font-cursive text-primary mb-2">Turning into</div>
            <div className="relative">
              <span 
                className={`text-7xl md:text-8xl font-bold transition-all duration-1000 ${
                  currentAge === 18 
                    ? 'text-transparent bg-gradient-love bg-clip-text animate-pulse' 
                    : 'text-primary/50'
                }`}
              >
                {currentAge}
              </span>
              {currentAge === 18 && (
                <>
                  <span className="absolute -top-4 -right-6 text-4xl animate-bounce">🎉</span>
                  <span className="absolute -top-4 -left-6 text-4xl animate-bounce" style={{ animationDelay: '0.2s' }}>🥳</span>
                  <span className="absolute -bottom-2 right-0 text-3xl animate-pulse">✨</span>
                </>
              )}
            </div>
            {currentAge === 18 && (
              <p className="text-xl font-cursive text-gradient-gold mt-2 animate-fade-in">
                Happy 18th Birthday! 🎂
              </p>
            )}
          </div>
        </div>
      )}

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
          <div className="animate-fade-in-up mt-16">
            <div className="text-6xl mb-4 animate-pulse-love">🎵</div>
            <h2 className="text-3xl font-cursive text-gradient-love mb-2">
              Enjoy your birthday song...
            </h2>
            <p className="text-xl font-cursive text-muted-foreground mb-4">
              Close your eyes and feel the love 💕
            </p>
            
            {/* Enhanced music visualization */}
            <div className="flex justify-center items-end gap-1 h-20 mb-6">
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 bg-gradient-love rounded-full"
                  style={{
                    animation: 'musicBar 0.5s ease-in-out infinite alternate',
                    height: `${15 + Math.random() * 50}px`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ))}
            </div>

            {/* Love beat indicators */}
            <div className="flex justify-center gap-4 mb-6">
              {['❤️', '💕', '💖', '💗', '💕', '❤️'].map((emoji, i) => (
                <span
                  key={i}
                  className="text-3xl"
                  style={{
                    animation: 'heartbeat 1s ease-in-out infinite',
                    animationDelay: `${i * 0.15}s`,
                  }}
                >
                  {emoji}
                </span>
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

      {/* Custom styles for music bars and floating emojis */}
      <style>{`
        @keyframes musicBar {
          0% { height: 15px; }
          100% { height: 60px; }
        }
        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg) scale(1);
            opacity: 1;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg) scale(0.5);
            opacity: 0;
          }
        }
        .animate-float-up {
          animation: float-up 4s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Interface5;
