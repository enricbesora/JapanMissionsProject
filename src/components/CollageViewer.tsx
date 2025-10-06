import React, { useMemo } from "react";
import { X, Camera, Download } from "lucide-react";
import Masonry from "react-masonry-css";

interface CollageViewerProps {
  photos: string[];
  onClose: () => void;
}

export const CollageViewer: React.FC<CollageViewerProps> = ({
  photos,
  onClose,
}) => {
  const variations = useMemo(
    () =>
      photos.map(() => ({
        rotation: Math.random() * 20 - 10,
        scale: 0.85 + Math.random() * 0.3,
      })),
    [photos]
  );

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-amber-100 via-orange-50 to-yellow-100 flex items-center justify-center p-2 sm:p-4 z-50 overflow-hidden">
      <div className="bg-white/80 backdrop-blur-sm rounded-xl w-full max-w-6xl h-[95vh] overflow-hidden flex flex-col shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white p-3 sm:p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Camera size={20} className="sm:w-6 sm:h-6" />
              <div>
                <h2 className="text-base sm:text-lg font-bold">Col·latge del Viatge per Japó</h2>
                <p className="text-xs sm:text-sm opacity-90">
                  {photos.length} records capturats
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <X size={18} className="sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>

        {/* Collage area - Polaroid style */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-8">
          <div className="relative min-h-full flex flex-wrap justify-center items-center gap-2 sm:gap-4">
            {photos.map((photo, index) => {
              const { rotation, scale } = variations[index];
              return (
                <div
                  key={index}
                  className="bg-white p-2 pb-8 sm:p-3 sm:pb-12 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 hover:z-50 cursor-pointer"
                  style={{
                    transform: `rotate(${rotation}deg) scale(${scale})`,
                    width: 'clamp(120px, 28vw, 200px)',
                    maxWidth: '200px',
                  }}
                >
                  <img
                    src={photo}
                    alt={`Missió ${index + 1}`}
                    className="w-full aspect-square object-cover"
                  />
                  <p className="text-center text-xs sm:text-sm text-gray-700 mt-2 font-handwriting">
                    #{index + 1}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="p-3 sm:p-4 border-t border-gray-200 space-y-2">
          <button
            onClick={() => alert("Descàrrega de col·latge pròximament!")}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-2 sm:py-3 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base"
          >
            <span>Descarregar Col·latge</span>
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-700 py-2 sm:py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors text-sm sm:text-base"
          >
            Tancar
          </button>
        </div>
      </div>
    </div>
  );
};
