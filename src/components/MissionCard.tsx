import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Mission } from '../types/Mission';
import { PhotoUpload } from './PhotoUpload';

interface MissionCardProps {
  mission: Mission;
  onUpdateMission: (mission: Mission) => void;
}

export const MissionCard: React.FC<MissionCardProps> = ({
  mission,
  onUpdateMission
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePhotoUpload = (photo: string) => {
    onUpdateMission({
      ...mission,
      photo,
      completed: true
    });
  };

  const handleRemovePhoto = () => {
    onUpdateMission({
      ...mission,
      photo: undefined,
      completed: false
    });
  };

  return (
    <div className="border-2 border-red-200 rounded-xl overflow-hidden shadow-sm bg-white">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full px-4 py-4 text-left flex items-center justify-between transition-colors ${
          mission.completed ? 'bg-green-50 text-green-800 border-b-2 border-green-200' : 'bg-white hover:bg-red-50 border-b-2 border-red-100'
        }`}
      >
        <div className="flex items-center space-x-3">
          {mission.completed && (
            <div className="bg-green-500 rounded-full p-1">
              <Check size={16} className="text-white" />
            </div>
          )}
          <span className="font-semibold">{mission.title}</span>
        </div>
        <div className={`transition-transform duration-200 ${
          mission.completed ? 'text-green-600' : 'text-red-500'
        }`}>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </div>
      </button>
      
      {isExpanded && (
        <div className="px-4 py-4 bg-red-25 border-t-2 border-red-100">
          <p className="text-gray-700 mb-4 leading-relaxed">{mission.description}</p>
          
          <PhotoUpload
            photo={mission.photo}
            onPhotoUpload={handlePhotoUpload}
            onRemovePhoto={handleRemovePhoto}
          />
          
          {mission.completed && (
            <div className="mt-3 text-sm text-green-600 font-bold bg-green-100 px-3 py-2 rounded-lg text-center">
              🎉 ¡Misión completada! ¡Excelente trabajo! 🎉
            </div>
          )}
        </div>
      )}
    </div>
  );
};