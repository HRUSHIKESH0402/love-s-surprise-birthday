import React, { useState } from 'react';
import Interface1 from '@/components/Interface1';
import Interface2 from '@/components/Interface2';
import Interface3 from '@/components/Interface3';
import Interface4 from '@/components/Interface4';
import Interface5 from '@/components/Interface5';
import Interface6 from '@/components/Interface6';
import Interface7 from '@/components/Interface7';
import Interface8 from '@/components/Interface8';
import Interface9 from '@/components/Interface9';
import Interface10 from '@/components/Interface10';

const Index = () => {
  const [currentInterface, setCurrentInterface] = useState(1);

  const goToNext = () => {
    setCurrentInterface((prev) => Math.min(prev + 1, 10));
  };

  const renderInterface = () => {
    switch (currentInterface) {
      case 1:
        return <Interface1 onComplete={goToNext} />;
      case 2:
        return <Interface2 onComplete={goToNext} />;
      case 3:
        return <Interface3 onComplete={goToNext} />;
      case 4:
        return <Interface4 onComplete={goToNext} />;
      case 5:
        return <Interface5 onComplete={goToNext} />;
      case 6:
        return <Interface6 onComplete={goToNext} />;
      case 7:
        return <Interface7 onComplete={goToNext} />;
      case 8:
        return <Interface8 onComplete={goToNext} />;
      case 9:
        return <Interface9 onComplete={goToNext} />;
      case 10:
        return <Interface10 onComplete={() => {}} />;
      default:
        return <Interface1 onComplete={goToNext} />;
    }
  };

  return (
    <div className="min-h-screen overflow-hidden">
      {renderInterface()}
      
      {/* Progress indicator */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex gap-2">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i + 1 === currentInterface
                  ? 'bg-primary w-4'
                  : i + 1 < currentInterface
                  ? 'bg-primary/50'
                  : 'bg-primary/20'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
