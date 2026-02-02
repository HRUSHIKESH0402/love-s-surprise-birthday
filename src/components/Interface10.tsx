import React, { useState } from 'react';
import FloatingHearts from './FloatingHearts';
import TypingAnimation from './TypingAnimation';

interface Interface10Props {
  onComplete: () => void;
}

const Interface10: React.FC<Interface10Props> = ({ onComplete }) => {
  const [isOpened, setIsOpened] = useState(false);
  const [showTyping, setShowTyping] = useState(false);

  const letterContent = `Thanks for coming into my life nanna

Ne valla na life chala change ayindi
Enno edurukunav na kosam
Ninnu a lotu rakunda chusukunta nanna

Naa pranam nanna nuvvu
I love you maaa

Normal ga undey na life ni chala happy ga chesav nanna
Neku nen todu ga unta nanna
Niku avvar unna lekunna nen unta nanna

Naa sontham kuthur laga chusukunta nanna
Happy ga undey la chusukunta nanna
Naa bangaramey nuv chitti talli

Enni struggles ochina eddaram
Kalisi edurukundam nanna
Mana prema ela ney undali strong ga undali

Once again happy birthday
Kannamma

                    - Yours Husband ❤️`;

  const handleOpenLetter = () => {
    setIsOpened(true);
    setTimeout(() => {
      setShowTyping(true);
    }, 500);
  };

  return (
    <div className="min-h-screen bg-gradient-romantic bg-hearts-pattern flex flex-col items-center justify-center relative overflow-hidden px-4 py-8">
      <FloatingHearts count={20} />

      <div className="z-10 text-center max-w-2xl w-full">
        {!isOpened ? (
          <div className="animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-cursive text-gradient-love mb-8">
              A Special Letter For You 💌
            </h2>
            
            {/* Animated envelope/letter */}
            <button
              onClick={handleOpenLetter}
              className="relative group mx-auto block"
            >
              <div className="relative w-64 h-48 bg-cream border-4 border-primary/30 rounded-lg shadow-2xl transform hover:scale-105 transition-all duration-300 animate-glow-pulse overflow-hidden">
                {/* Envelope flap */}
                <div 
                  className="absolute top-0 left-0 right-0 h-24 bg-rose-200 origin-top transition-transform duration-500 group-hover:-rotate-12"
                  style={{
                    clipPath: 'polygon(0 0, 50% 100%, 100% 0)',
                  }}
                />
                
                {/* Heart seal */}
                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-5xl animate-heartbeat z-10">
                  ❤️
                </div>
                
                {/* Envelope body */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-rose-100" />
                
                {/* Decorative elements */}
                <div className="absolute bottom-4 left-4 text-2xl">💕</div>
                <div className="absolute bottom-4 right-4 text-2xl">💕</div>
              </div>
              
              <p className="mt-6 text-xl font-cursive text-primary animate-pulse">
                Tap to open the letter 💌
              </p>
            </button>
          </div>
        ) : (
          <div className="animate-fade-in-up">
            <h2 className="text-3xl font-cursive text-gradient-love mb-6">
              💌 My Letter To You 💌
            </h2>
            
            {/* Letter paper */}
            <div className="bg-cream/95 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-2xl border-2 border-primary/20 max-h-[70vh] overflow-y-auto">
              {showTyping && (
                <TypingAnimation 
                  text={letterContent}
                  speed={30}
                  className="text-lg md:text-xl text-foreground leading-relaxed whitespace-pre-line text-left"
                />
              )}
            </div>
            
            {/* Bottom decoration */}
            <div className="mt-8 flex justify-center gap-4 text-4xl">
              <span className="animate-float-heart">❤️</span>
              <span className="animate-float-heart" style={{ animationDelay: '0.3s' }}>💕</span>
              <span className="animate-float-heart" style={{ animationDelay: '0.6s' }}>💖</span>
              <span className="animate-float-heart" style={{ animationDelay: '0.9s' }}>💗</span>
              <span className="animate-float-heart" style={{ animationDelay: '1.2s' }}>💝</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Interface10;
