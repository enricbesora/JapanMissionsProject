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
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full px-4 py-3 text-left flex items-center justify-between transition-colors ${
          mission.completed ? 'bg-green-50 text-green-800' : 'bg-white hover:bg-gray-50'
        }`}
      >
        <div className="flex items-center space-x-3">
          {mission.completed && (
            <Check size={20} className="text-green-600" />
          )}
          <span className="font-medium">{mission.title}</span>
        </div>
        {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isExpanded && (
        <div className="px-4 py-4 bg-gray-50 border-t border-gray-200">
          <p className="text-gray-600 mb-4">{mission.description}</p>
          
          <PhotoUpload
            photo={mission.photo}
            onPhotoUpload={handlePhotoUpload}
            onRemovePhoto={handleRemovePhoto}
          />
          
          {mission.completed && (
            <div className="mt-3 text-sm text-green-600 font-medium">
              ✅ Mission completed!
            </div>
          )}
        </div>
      )}
    </div>
  );
};