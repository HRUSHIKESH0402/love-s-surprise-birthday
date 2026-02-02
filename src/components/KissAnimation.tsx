import React, { useEffect, useState } from 'react';

interface KissAnimationProps {
  trigger?: boolean;
}

const KissAnimation: React.FC<KissAnimationProps> = ({ trigger = false }) => {
  const [kisses, setKisses] = useState<Array<{ id: number; left: string; delay: number }>>([]);

  useEffect(() => {
    if (trigger) {
      const newKisses = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${10 + Math.random() * 80}%`,
        delay: Math.random() * 2,
      }));
      setKisses(newKisses);
    }
  }, [trigger]);

  if (!trigger) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {kisses.map((kiss) => (
        <div
          key={kiss.id}
          className="absolute bottom-1/4 text-4xl animate-kiss-float"
          style={{
            left: kiss.left,
            animationDelay: `${kiss.delay}s`,
          }}
        >
          💋
        </div>
      ))}
    </div>
  );
};

export default KissAnimation;
