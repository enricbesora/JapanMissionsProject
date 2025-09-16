import React from 'react';
import { X } from 'lucide-react';
import { City } from '../types/Mission';
import { MissionCard } from './MissionCard';

interface CityPopupProps {
  city: City;
  onClose: () => void;
  onUpdateCity: (city: City) => void;
}

export const CityPopup: React.FC<CityPopupProps> = ({
  city,
  onClose,
  onUpdateCity
}) => {
  const handleUpdateMission = (updatedMission: any) => {
    const updatedMissions = city.missions.map(mission =>
      mission.id === updatedMission.id ? updatedMission : mission
    );
    
    onUpdateCity({
      ...city,
      missions: updatedMissions
    });
  };

  const completedMissions = city.missions.filter(m => m.completed).length;
  const totalMissions = city.missions.length;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200">
          <div>
            <h2 className="text-xl font-bold">{city.name}</h2>
            <p className="text-sm text-gray-500">
              {completedMissions} of {totalMissions} missions completed
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-4 py-2">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(completedMissions / totalMissions) * 100}%` }}
            />
          </div>
        </div>

        {/* Missions List */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-3">
          {city.missions.map((mission) => (
            <MissionCard
              key={mission.id}
              mission={mission}
              onUpdateMission={handleUpdateMission}
            />
          ))}
        </div>
      </div>
    </div>
  );
};