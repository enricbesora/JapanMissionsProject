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
  const [isLoading, setIsLoading] = useState(false);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleCameraCapture = () => {
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
          className="w-full h-48 object-cover rounded-lg"
        />
        <button
          onClick={onRemovePhoto}
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    );
  }

  return (
    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleFileSelect}
        className="hidden"
      />
      
      {isLoading ? (
        <div className="text-gray-500">Loading...</div>
      ) : (
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <button
              onClick={handleCameraCapture}
              className="flex flex-col items-center space-y-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              <Camera size={24} />
              <span className="text-sm">Take Photo</span>
            </button>
            
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex flex-col items-center space-y-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
            >
              <Upload size={24} />
              <span className="text-sm">Upload</span>
            </button>
          </div>
          
          <p className="text-sm text-gray-500">
            Take a photo or upload from gallery
          </p>
        </div>
      )}
    </div>
  );
};