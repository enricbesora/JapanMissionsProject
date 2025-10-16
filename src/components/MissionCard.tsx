import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Check } from 'lucide-react';
import { Mission } from '../types/Mission';
import { PhotoUpload } from './PhotoUpload';
import { MissionCompleteAnimation } from './MissionCompleteAnimation';

interface MissionCardProps {
  mission: Mission;
  onUpdateMission: (mission: Mission) => void;
}

export const MissionCard: React.FC<MissionCardProps> = ({
  mission,
  onUpdateMission
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);

  const handlePhotoUpload = async (photo: string) => {
    setShowAnimation(true);

    // Send email with photo
    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-mission-email`;

      await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cityName: mission.location,
          missionTitle: mission.title,
          photo: photo,
        }),
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Continue even if email fails
    }

    setTimeout(() => {
      onUpdateMission({
        ...mission,
        photo,
        completed: true
      });
    }, 100);
  };

  const handleRemovePhoto = () => {
    onUpdateMission({
      ...mission,
      photo: undefined,
      completed: false
    });
  };

  return (
    <>
      {showAnimation && (
        <MissionCompleteAnimation
          missionTitle={mission.title}
          onComplete={() => setShowAnimation(false)}
        />
      )}
      <div className={`border-2 rounded-xl overflow-hidden shadow-sm bg-white ${
        mission.isSecret ? 'border-yellow-400 bg-gradient-to-r from-yellow-50 to-orange-50' : 'border-red-200'
      }`}>
        {mission.isSecret && (
          <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-white text-xs font-bold px-4 py-1 text-center">
            MISSIÓ SECRETA DESBLOCADA!
          </div>
        )}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`w-full px-4 py-4 text-left flex items-center justify-between transition-colors ${
            mission.completed
              ? 'bg-green-50 text-green-800 border-b-2 border-green-200'
              : mission.isSecret
                ? 'bg-gradient-to-r from-yellow-50 to-orange-50 hover:from-yellow-100 hover:to-orange-100 border-b-2 border-yellow-200'
                : 'bg-white hover:bg-red-50 border-b-2 border-red-100'
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
            mission.completed ? 'text-green-600' : mission.isSecret ? 'text-orange-500' : 'text-red-500'
          }`}>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </button>

        {isExpanded && (
          <div className={`px-4 py-4 border-t-2 ${
            mission.isSecret ? 'bg-gradient-to-r from-yellow-50/50 to-orange-50/50 border-yellow-200' : 'bg-red-25 border-red-100'
          }`}>
            <p className="text-gray-700 mb-4 leading-relaxed">{mission.description}</p>

            <PhotoUpload
              photo={mission.photo}
              onPhotoUpload={handlePhotoUpload}
              onRemovePhoto={handleRemovePhoto}
            />

            {mission.completed && (
              <div className="mt-3 text-sm text-green-600 font-bold bg-green-100 px-3 py-2 rounded-lg text-center">
                Missió completada! Excel·lent treball!
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
};