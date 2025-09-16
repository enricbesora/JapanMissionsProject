import React from 'react';
import { X, Camera, Download } from 'lucide-react';

interface CollageViewerProps {
  photos: string[];
  onClose: () => void;
}

export const CollageViewer: React.FC<CollageViewerProps> = ({
  photos,
  onClose
}) => {
  const downloadCollage = () => {
    // Create a canvas to combine all photos
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const cols = 2;
    const rows = Math.ceil(photos.length / cols);
    const photoSize = 200;
    
    canvas.width = cols * photoSize;
    canvas.height = rows * photoSize;
    
    // Fill background with Japanese-inspired gradient
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, '#fef7f0');
    gradient.addColorStop(1, '#fde2e4');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let loadedImages = 0;
    photos.forEach((photo, index) => {
      const img = new Image();
      img.onload = () => {
        const col = index % cols;
        const row = Math.floor(index / cols);
        const x = col * photoSize;
        const y = row * photoSize;
        
        ctx.drawImage(img, x, y, photoSize, photoSize);
        loadedImages++;
        
        if (loadedImages === photos.length) {
          // Download the canvas as image
          const link = document.createElement('a');
          link.download = 'japan-mission-collage.png';
          link.href = canvas.toDataURL();
          link.click();
        }
      };
      img.src = photo;
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-hidden">
        <div className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Camera size={24} />
              <div>
                <h2 className="text-lg font-bold">Japan Journey Collage</h2>
                <p className="text-sm opacity-90">{photos.length} memories captured</p>
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
        
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2">
            {photos.map((photo, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-lg overflow-hidden shadow-md border-2 border-red-100"
              >
                <img
                  src={photo}
                  alt={`Mission ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                  #{index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="p-4 border-t border-gray-200 space-y-2">
          <button
            onClick={downloadCollage}
            className="w-full bg-gradient-to-r from-green-500 to-teal-500 text-white py-3 rounded-lg font-medium hover:from-green-600 hover:to-teal-600 transition-all duration-200 flex items-center justify-center space-x-2"
          >
            <Download size={20} />
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