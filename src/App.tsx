import React, { useState } from 'react';
import { MapPin, Camera, Sparkles } from 'lucide-react';
import { CityPopup } from './components/CityPopup';
import { CompletionAnimation } from './components/CompletionAnimation';
import { CollageViewer } from './components/CollageViewer';
import { cities as initialCities } from './data/cities';
import { useLocalStorage } from './hooks/useLocalStorage';
import { City } from './types/Mission';

function App() {
  const [cities, setCities] = useLocalStorage<City[]>('japan-missions', initialCities);
  const [selectedCity, setSelectedCity] = useState<City | null>(null);
  const [showCompletionAnimation, setShowCompletionAnimation] = useState(false);
  const [showCollageViewer, setShowCollageViewer] = useState(false);
  const [hasSeenCompletion, setHasSeenCompletion] = useLocalStorage('has-seen-completion', false);

  const handleUpdateCity = (updatedCity: City) => {
    const updatedCities = cities.map(city =>
      city.id === updatedCity.id ? updatedCity : city
    );
    setCities(updatedCities);
    setSelectedCity(updatedCity);
    
    // Check if all missions are completed
    const allCompleted = updatedCities.every(city => 
      city.missions.every(mission => mission.completed)
    );
    
    if (allCompleted && !hasSeenCompletion) {
      setShowCompletionAnimation(true);
      setHasSeenCompletion(true);
    }
  };

  const getTotalProgress = () => {
    const totalMissions = cities.reduce((acc, city) => acc + city.missions.length, 0);
    const completedMissions = cities.reduce(
      (acc, city) => acc + city.missions.filter(m => m.completed).length,
      0
    );
    return { completed: completedMissions, total: totalMissions };
  };

  const getAllPhotos = () => {
    return cities.flatMap(city => 
      city.missions
        .filter(mission => mission.photo)
        .map(mission => mission.photo!)
    );
  };

  const progress = getTotalProgress();
  const allPhotos = getAllPhotos();
  const isAllCompleted = progress.completed === progress.total && progress.total > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white shadow-lg">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-center space-x-2 mb-3">
            <span className="text-2xl">🗾</span>
            <h1 className="text-2xl font-bold">
              Japan Mission Quest
            </h1>
            <span className="text-2xl">🎌</span>
          </div>
          <div className="text-center text-sm opacity-90 mb-3">
            Discover Japan through photo missions
          </div>
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Overall Progress</span>
              <span>{progress.completed} / {progress.total}</span>
            </div>
            <div className="w-full bg-white bg-opacity-30 rounded-full h-3">
              <div
                className="bg-white h-3 rounded-full transition-all duration-500 shadow-sm"
                style={{ width: `${(progress.completed / progress.total) * 100}%` }}
              />
            </div>
            {isAllCompleted && (
              <div className="mt-2 text-center">
                <span className="text-sm font-medium">🎉 All missions completed! 🎉</span>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-md mx-auto px-4 py-6">
        {/* Japan Map Simulation */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-red-100">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Select a City to Start Your Adventure
          </h2>
          
          {/* Simplified Map View */}
          <div className="relative bg-gradient-to-b from-green-100 via-yellow-50 to-blue-100 rounded-lg h-64 overflow-hidden border-2 border-red-200">
            {/* Decorative elements */}
            <div className="absolute top-2 right-2 text-2xl animate-pulse">🌸</div>
            <div className="absolute bottom-2 left-2 text-2xl animate-pulse">⛩️</div>
            <div className="absolute top-1/2 left-1/4 text-lg animate-bounce">🗻</div>
            
            {cities.map((city) => {
              const completedMissions = city.missions.filter(m => m.completed).length;
              const totalMissions = city.missions.length;
              const isCompleted = completedMissions === totalMissions;
              
              return (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-110 z-10 ${
                    isCompleted ? 'text-green-600' : 'text-red-600'
                  }`}
                  style={{ left: `${city.x}%`, top: `${city.y}%` }}
                >
                  <div className="flex flex-col items-center">
                    <div className={`p-3 rounded-full shadow-lg border-2 border-white ${
                      isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-pink-500'
                    } text-white hover:shadow-xl transition-shadow`}>
                      <MapPin size={20} />
                    </div>
                    <span className="mt-2 text-xs font-bold bg-white px-3 py-1 rounded-full shadow-md border border-red-200">
                      {city.name}
                    </span>
                    <span className="text-xs text-gray-700 font-medium">
                      {completedMissions}/{totalMissions}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {cities.map((city) => {
            const completed = city.missions.filter(m => m.completed).length;
            const total = city.missions.length;
            const isCompleted = completed === total;
            
            return (
              <div
                key={city.id}
                onClick={() => setSelectedCity(city)}
                className={`bg-white rounded-xl p-4 text-center shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 border-2 ${
                  isCompleted ? 'border-green-200 bg-green-50' : 'border-red-200'
                } hover:scale-105`}
              >
                <div className={`text-xl font-bold ${
                  isCompleted ? 'text-green-600' : 'text-red-600'
                }`}>
                  {completed}/{total}
                </div>
                <div className="text-sm font-medium text-gray-700 mt-1">{city.name}</div>
                {isCompleted && (
                  <div className="text-xs text-green-600 mt-1">✅ Complete</div>
                )}
              </div>
            );
          })}
        </div>

        {/* View Collage Button */}
        {allPhotos.length > 0 && (
          <div className="mb-6">
            <button
              onClick={() => setShowCollageViewer(true)}
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-4 rounded-xl font-medium hover:from-purple-600 hover:to-indigo-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Camera size={20} />
              <span>View Photo Collage ({allPhotos.length} photos)</span>
              <Sparkles size={16} />
            </button>
          </div>
        )}

        {/* Instructions */}
        <div className="bg-white rounded-xl p-5 shadow-md border border-red-100">
          <h3 className="font-bold text-gray-800 mb-3 flex items-center">
            <span className="mr-2">📋</span>
            How to Play
          </h3>
          <ul className="text-sm text-gray-700 space-y-2">
            <li>• Tap on a city pin to see available missions</li>
            <li>• Complete photo missions to earn progress</li>
            <li>• Use your camera or upload photos from gallery</li>
            <li>• Complete all missions for a special surprise! 🎉</li>
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

      {/* Completion Animation */}
      {showCompletionAnimation && (
        <CompletionAnimation
          photos={allPhotos}
          onClose={() => setShowCompletionAnimation(false)}
        />
      )}

      {/* Collage Viewer */}
      {showCollageViewer && (
        <CollageViewer
          photos={allPhotos}
          onClose={() => setShowCollageViewer(false)}
        />
      )}
    </div>
  );
}

export default App;