import React, { useRef, useState } from 'react';
import { Camera, Upload, X } from 'lucide-react';

interface PhotoUploadProps {
  photo?: string;
  onPhotoUpload: (photo: string) => void;
  onRemovePhoto: () => void;
}

export const PhotoUpload: React.FC<PhotoUploadProps> = ({
  photo,
  onPhotoUpload,
  onRemovePhoto
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const cameraInputRef = useRef<HTMLInputElement>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleCameraCapture = () => {
    if (cameraInputRef.current) {
      cameraInputRef.current.click();
    }
  };

  const handleGalleryUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const processFile = (file: File) => {
    setIsLoading(true);
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      onPhotoUpload(result);
      setIsLoading(false);
    };
    reader.readAsDataURL(file);
  };

  if (photo) {
    return (
      <div className="relative">
        <img 
          src={photo} 
          alt="Mission photo" 
          className="w-full h-48 object-cover rounded-xl border-2 border-red-200 shadow-md"
        />
        <button
          onClick={onRemovePhoto}
          className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors shadow-lg"
        >
          <X size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className="border-2 border-dashed border-red-300 rounded-xl p-6 text-center bg-red-25">
      <input
        ref={cameraInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileSelect}
        className="hidden"
      />
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {isLoading ? (
        <div className="text-red-500 font-medium">📸 Procesando foto...</div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleCameraCapture}
              className="flex flex-col items-center space-y-2 px-6 py-4 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-xl hover:from-red-600 hover:to-pink-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Camera size={24} />
              <span className="text-sm font-medium">Tomar Foto</span>
            </button>

            <button
              onClick={handleGalleryUpload}
              className="flex flex-col items-center space-y-2 px-6 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 transition-all duration-200 shadow-md hover:shadow-lg"
            >
              <Upload size={24} />
              <span className="text-sm font-medium">Subir</span>
            </button>
          </div>

          <p className="text-sm text-gray-600 font-medium">
            📱 Toma una foto o sube desde la galería
          </p>
        </div>
      )}
    </div>
  );
};