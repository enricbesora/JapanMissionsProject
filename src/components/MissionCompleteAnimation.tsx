import React, { useEffect, useState } from 'react';
import { Sparkles, Star, Award } from 'lucide-react';

interface MissionCompleteAnimationProps {
  missionTitle: string;
  onComplete: () => void;
}

export const MissionCompleteAnimation: React.FC<MissionCompleteAnimationProps> = ({
  missionTitle,
  onComplete
}) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
      setTimeout(onComplete, 300);
    }, 2500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
      <div className="relative animate-bounce-in">
        <div className="absolute inset-0 animate-ping">
          <div className="w-32 h-32 bg-yellow-400 rounded-full opacity-75"></div>
        </div>

        <div className="relative bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-400 rounded-full w-32 h-32 flex items-center justify-center shadow-2xl animate-scale-in border-4 border-white">
          <Award size={64} className="text-white animate-wiggle" />
        </div>

        <div className="absolute -top-4 -right-4 animate-spin-slow">
          <Star size={32} className="text-yellow-400 fill-yellow-400" />
        </div>
        <div className="absolute -bottom-4 -left-4 animate-spin-slow-reverse">
          <Star size={24} className="text-orange-400 fill-orange-400" />
        </div>
        <div className="absolute -top-2 -left-6 animate-bounce-slow">
          <Sparkles size={28} className="text-pink-400" />
        </div>
        <div className="absolute -bottom-2 -right-6 animate-bounce-slow-reverse">
          <Sparkles size={28} className="text-cyan-400" />
        </div>

        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-confetti"
            style={{
              left: '50%',
              top: '50%',
              transform: `rotate(${i * 30}deg) translate(60px)`,
              animationDelay: `${i * 0.1}s`
            }}
          >
            <div
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: ['#ef4444', '#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#ec4899'][i % 6]
              }}
            />
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-24 animate-fade-in-up">
        <div className="bg-white rounded-2xl shadow-2xl px-8 py-4 border-4 border-yellow-400">
          <div className="text-center">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600 mb-1">
              Missió Completada!
            </div>
            <div className="text-sm text-gray-600 max-w-xs">
              {missionTitle}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
