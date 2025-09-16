import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { CityPopup } from './components/CityPopup';
import { cities as initialCities } from './data/cities';
import { useLocalStorage } from './hooks/useLocalStorage';
import { City } from './types/Mission';

function App() {
  const [cities, setCities] = useLocalStorage<City[]>('japan-missions', initialCities);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const handleUpdateCity = (updatedCity: City) => {
    const updatedCities = cities.map(city =>
      city.id === updatedCity.id ? updatedCity : city
    );
    setCities(updatedCities);
    setSelectedCity(updatedCity);
  };

  const getTotalProgress = () => {
    const totalMissions = cities.reduce((acc, city) => acc + city.missions.length, 0);
    const completedMissions = cities.reduce(
      (acc, city) => acc + city.missions.filter(m => m.completed).length,
      0
    );
    return { completed: completedMissions, total: totalMissions };
  };

  const progress = getTotalProgress();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-md mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-gray-800 text-center">
            Japan Mission Quest
          </h1>
          <div className="mt-3">
            <div className="flex justify-between text-sm text-gray-600 mb-1">
              <span>Overall Progress</span>
              <span>{progress.completed} / {progress.total}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(progress.completed / progress.total) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Japan Map Simulation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Select a City to Start Your Adventure
          </h2>
          
          {/* Simplified Map View */}
          <div className="relative bg-gradient-to-b from-green-100 to-blue-100 rounded-lg h-64 overflow-hidden">
            {cities.map((city) => {
              const completedMissions = city.missions.filter(m => m.completed).length;
              const totalMissions = city.missions.length;
              const isCompleted = completedMissions === totalMissions;
              
              return (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 ${
                    isCompleted ? 'text-green-600' : 'text-blue-600'
                  }`}
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`p-2 rounded-full shadow-lg ${
                      isCompleted ? 'bg-green-500' : 'bg-blue-500'
                    } text-white`}>
                      <MapPin size={20} />
                    </div>
                    <span className="mt-1 text-xs font-medium bg-white px-2 py-1 rounded shadow">
                      {city.name}
                    </span>
                    <span className="text-xs text-gray-600">
                      {completedMissions}/{totalMissions}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {cities.map((city) => {
            const completed = city.missions.filter(m => m.completed).length;
            const total = city.missions.length;
            
            return (
              <div
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className="bg-white rounded-lg p-3 text-center shadow cursor-pointer hover:shadow-md transition-shadow"
              >
                <div className="text-lg font-bold text-gray-800">
                  {completed}/{total}
                </div>
                <div className="text-xs text-gray-600">{city.name}</div>
              </div>
            );
          })}
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-lg p-4 shadow">
          <h3 className="font-semibold text-gray-800 mb-2">How to Play</h3>
          <ul className="text-sm text-gray-600 space-y-1">
            <li>• Tap on a city pin to see available missions</li>
            <li>• Complete photo missions to earn progress</li>
            <li>• Use your camera or upload photos from gallery</li>
            <li>• Track your progress across all cities</li>
          </ul>
        </div>
      </main>

      {/* City Popup */}
      {selectedCity && (
        <CityPopup
          city={selectedCity}
          onClose={() => setSelectedCity(null)}
          onUpdateCity={handleUpdateCity}
        />
      )}
    </div>
  );
}

export default App;