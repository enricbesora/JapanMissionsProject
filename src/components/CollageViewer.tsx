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
  // 📌 Generar variaciones aleatorias para rotación / desplazamiento
  const variations = useMemo(
    () =>
      photos.map(() => ({
        rotation: Math.random() * 10 - 5, // -5° a +5°
        offsetX: Math.random() * 10 - 5, // -5px a +5px
        offsetY: Math.random() * 10 - 5,
        zIndex: Math.floor(Math.random() * 5) + 1,
      })),
    [photos]
  );

  // 📌 breakpoints para masonry
  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1,
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-6xl h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Camera size={24} />
              <div>
                <h2 className="text-lg font-bold">Japan Journey Collage</h2>
                <p className="text-sm opacity-90">
                  {photos.length} memories captured
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white hover:bg-opacity-20 rounded-lg transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Collage area */}
        <div className="flex-1 overflow-y-auto p-4 bg-neutral-100">
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex gap-4"
            columnClassName="flex flex-col gap-4"
          >
            {photos.map((photo, index) => {
              const { rotation, offsetX, offsetY, zIndex } = variations[index];
              return (
                <div
                  key={index}
                  className="bg-white p-2 pb-6 shadow-lg border border-gray-300 rounded-sm relative transition-transform"
                  style={{
                    transform: `rotate(${rotation}deg) translate(${offsetX}px, ${offsetY}px)`,
                    zIndex,
                  }}
                >
                  <img
                    src={photo}
                    alt={`Mission ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  <p className="text-center text-xs text-gray-700 mt-1">
                    #{index + 1}
                  </p>
                </div>
              );
            })}
          </Masonry>
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button
            // de momento dejamos solo en pantalla, más adelante podemos enganchar el downloadCollage con html2canvas
            onClick={() => alert("Download collage coming soon!")}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <span>Download Collage</span>
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
