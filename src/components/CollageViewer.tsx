import React, { useMemo } from "react";
import { X, Camera, Download } from "lucide-react";

interface CollageViewerProps {
  photos: string[];
  onClose: () => void;
}

interface PolaroidLayout {
  x: number;
  y: number;
  rotation: number;
}

export const CollageViewer: React.FC<CollageViewerProps> = ({
  photos,
  onClose,
}) => {
  // 📌 Tamaño base polaroid
  const polaroidSize = 200;

  // 📌 Generar layout con reglas
  const layout: PolaroidLayout[] = useMemo(() => {
    const placed: PolaroidLayout[] = [];
    const maxAttempts = 100;

    const getRandomLayout = (): PolaroidLayout => ({
      x: Math.random() * 70, // % dentro del área visible
      y: Math.random() * 70,
      rotation: Math.random() * 16 - 8, // -8 a +8 grados
    });

    const tooClose = (a: PolaroidLayout, b: PolaroidLayout): boolean => {
      const dx = a.x - b.x;
      const dy = a.y - b.y;
      return Math.sqrt(dx * dx + dy * dy) < 20; // evitar que se solapen demasiado
    };

    photos.forEach(() => {
      let candidate: PolaroidLayout;
      let attempts = 0;
      do {
        candidate = getRandomLayout();
        attempts++;
      } while (
        placed.some((p) => tooClose(candidate, p)) &&
        attempts < maxAttempts
      );
      placed.push(candidate);
    });

    return placed;
  }, [photos]);

  // 📌 Canvas dinámico según nº de fotos
  const getCanvasSize = (count: number) => {
    const minWidth = 600;
    const minHeight = 400;
    const scaleFactor = Math.ceil(Math.sqrt(count / 4)); // crece por bloques
    return {
      width: minWidth * scaleFactor,
      height: minHeight * scaleFactor,
    };
  };

  const downloadCollage = () => {
    const { width, height } = getCanvasSize(photos.length);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = width;
    canvas.height = height;

    // Fondo pared suave
    ctx.fillStyle = "#f8f5f0";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let loaded = 0;

    photos.forEach((photo, index) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => {
        const size = polaroidSize;
        const { x, y, rotation } = layout[index];

        // convertir % a píxeles
        const px = (x / 100) * (canvas.width - size - 50) + 25;
        const py = (y / 100) * (canvas.height - size - 80) + 25;

        ctx.save();
        ctx.translate(px + size / 2, py + size / 2);
        ctx.rotate((rotation * Math.PI) / 180);

        // Marco polaroid
        ctx.fillStyle = "white";
        ctx.fillRect(-size / 2 - 10, -size / 2 - 10, size + 20, size + 40);

        // Foto
        ctx.drawImage(img, -size / 2, -size / 2, size, size);

        // Número
        ctx.fillStyle = "black";
        ctx.font = "16px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(`#${index + 1}`, 0, size / 2 + 20);

        ctx.restore();

        loaded++;
        if (loaded === photos.length) {
          const link = document.createElement("a");
          link.download = "polaroid-collage.png";
          link.href = canvas.toDataURL();
          link.click();
        }
      };
      img.src = photo;
    });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl w-full max-w-5xl h-[90vh] overflow-hidden flex flex-col">
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
        <div className="relative flex-1 bg-neutral-100 rounded-lg overflow-hidden">
          {photos.map((photo, index) => {
            const { x, y, rotation } = layout[index];
            return (
              <div
                key={index}
                className="absolute"
                style={{
                  top: `${y}%`,
                  left: `${x}%`,
                  transform: `rotate(${rotation}deg)`,
                }}
              >
                <div className="bg-white p-2 pb-6 shadow-lg border border-gray-300 rounded-sm w-40">
                  <img
                    src={photo}
                    alt={`Mission ${index + 1}`}
                    className="w-full h-40 object-cover"
                  />
                  <p className="text-center text-xs text-gray-700 mt-1">
                    #{index + 1}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
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
