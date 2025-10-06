import React, { useEffect, useState } from 'react';
import { Sparkles, Star, Camera } from 'lucide-react';

interface CompletionAnimationProps {
  photos: string[];
  onClose: () => void;
}

export const CompletionAnimation: React.FC<CompletionAnimationProps> = ({
  photos,
  onClose
}) => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [showCollage, setShowCollage] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(false);
      setShowCollage(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (showAnimation) {
    return (
      <div className="fixed inset-0 bg-gradient-to-br from-red-600 via-pink-500 to-orange-400 flex items-center justify-center z-50">
        <div className="text-center text-white animate-pulse">
          <div className="mb-8 relative">
            <div className="text-8xl animate-bounce">🎌</div>
            <div className="absolute -top-4 -right-4 animate-spin">
              <Sparkles size={32} className="text-yellow-300" />
            </div>
            <div className="absolute -bottom-4 -left-4 animate-ping">
              <Star size={24} className="text-yellow-200" />
            </div>
          </div>
          
          <h1 className="text-4xl font-bold mb-4 animate-fade-in">
            おめでとうございます！
          </h1>
          <h2 className="text-2xl mb-2">Felicitacions!</h2>
          <p className="text-lg opacity-90">
            Has completat totes les missions al Japó! 🗾
          </p>
          
          <div className="mt-8 flex justify-center space-x-2">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 bg-yellow-300 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (showCollage) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 z-50">
        <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-hidden">
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-4 text-center">
            <Camera className="mx-auto mb-2" size={32} />
            <h2 className="text-xl font-bold">El teu Viatge pel Japó</h2>
            <p className="text-sm opacity-90">Col·latge de Fotos de Missions</p>
          </div>
          
          <div className="p-4 max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-2">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className="relative aspect-square rounded-lg overflow-hidden shadow-md animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={photo}
                    alt={`Mission ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    #{index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="p-4 border-t border-gray-200">
            <button
              onClick={onClose}
              className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-3 rounded-lg font-medium hover:from-red-600 hover:to-pink-600 transition-all duration-200"
            >
              Continuar Explorant el Japó 🗾
            </button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};