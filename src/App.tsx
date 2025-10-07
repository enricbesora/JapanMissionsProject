import React, { useState, useRef } from 'react';
import { MapPin, Camera, Sparkles, ZoomIn, ZoomOut } from 'lucide-react';
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
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const mapRef = useRef<HTMLDivElement>(null);

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

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 0.25, 0.5));
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const progress = getTotalProgress();
  const allPhotos = getAllPhotos();
  const isAllCompleted = progress.completed === progress.total && progress.total > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-orange-50 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🗾</span>
              <h1 className="text-2xl font-bold">Missió Japó Quest</h1>
              <span className="text-2xl">🎌</span>
            </div>
            <div className="text-right">
              <div className="text-sm opacity-90 mb-1">
                Progrés: {progress.completed} / {progress.total}
              </div>
              <div className="w-48 bg-white bg-opacity-30 rounded-full h-2">
                <div
                  className="bg-white h-2 rounded-full transition-all duration-500"
                  style={{ width: `${(progress.completed / progress.total) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content - Map Focus */}
      <main className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Interactive Map */}
        <div className="flex-1 relative bg-gradient-to-br from-blue-50 to-green-50">
          <div className="absolute top-4 left-4 z-20 bg-white rounded-lg shadow-lg p-2 space-y-2">
            <button
              onClick={handleZoomIn}
              className="block p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              title="Zoom In"
            >
              <ZoomIn size={20} />
            </button>
            <button
              onClick={handleZoomOut}
              className="block p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              title="Zoom Out"
            >
              <ZoomOut size={20} />
            </button>
          </div>

          <div
            ref={mapRef}
            className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            <div
              className="relative w-full h-full min-h-screen"
              style={{
                backgroundImage: 'url(https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1920)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                transition: isDragging ? 'none' : 'transform 0.2s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-50/30 to-transparent" />

              {cities.map((city) => {
                const completedMissions = city.missions.filter(m => m.completed).length;
                const totalMissions = city.missions.length;
                const isCompleted = completedMissions === totalMissions;

                return (
                  <button
                    key={city.id}
                    onClick={() => setSelectedCity(city)}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-125 z-10 ${
                      isCompleted ? 'text-green-600' : 'text-red-600'
                    }`}
                    style={{ left: `${city.x}%`, top: `${city.y}%` }}
                  >
                    <div className="flex flex-col items-center">
                      <div className={`p-4 rounded-full shadow-2xl border-3 border-white ${
                        isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-pink-500'
                      } text-white hover:shadow-2xl transition-all hover:scale-110`}>
                        <MapPin size={28} />
                      </div>
                      <span className="mt-2 text-sm font-bold bg-white px-3 py-1.5 rounded-full shadow-lg border-2 border-red-200">
                        {city.name}
                      </span>
                      <span className="text-sm text-gray-700 font-medium bg-white/80 px-2 py-0.5 rounded-full mt-1">
                        {completedMissions}/{totalMissions}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="w-full lg:w-80 bg-white border-t lg:border-t-0 lg:border-l border-red-200 shadow-lg overflow-y-auto">
          <div className="p-4 space-y-4">
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-2 flex items-center">
                <span className="mr-2">🎯</span>
                Ciutats
              </h2>
              <p className="text-sm text-gray-600 mb-4">
                Selecciona una ciutat al mapa per veure les missions
              </p>

              {isAllCompleted && (
                <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white p-3 rounded-xl mb-4 text-center font-semibold">
                  🎉 Totes les missions completades! 🎉
                </div>
              )}

              <div className="space-y-2">
                {cities.map((city) => {
                  const completed = city.missions.filter(m => m.completed).length;
                  const total = city.missions.length;
                  const isCompleted = completed === total;

                  return (
                    <button
                      key={city.id}
                      onClick={() => setSelectedCity(city)}
                      className={`w-full bg-white rounded-lg p-3 text-left shadow-md cursor-pointer hover:shadow-lg transition-all duration-200 border-2 ${
                        isCompleted ? 'border-green-300 bg-green-50' : 'border-red-200'
                      } hover:scale-102`}
                    >
                      <div className="flex justify-between items-center">
                        <div className="font-medium text-gray-800">{city.name}</div>
                        <div className={`text-sm font-bold ${
                          isCompleted ? 'text-green-600' : 'text-red-600'
                        }`}>
                          {completed}/{total}
                        </div>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                        <div
                          className={`h-1.5 rounded-full transition-all ${
                            isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-500' : 'bg-gradient-to-r from-red-500 to-pink-500'
                          }`}
                          style={{ width: `${(completed / total) * 100}%` }}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {allPhotos.length > 0 && (
              <button
                onClick={() => setShowCollageViewer(true)}
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white py-3 rounded-xl font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
              >
                <Camera size={20} />
                <span>Col·latge ({allPhotos.length})</span>
                <Sparkles size={16} />
              </button>
            )}

            <div className="bg-red-50 rounded-xl p-4 border border-red-200">
              <h3 className="font-bold text-gray-800 mb-3 flex items-center">
                <span className="mr-2">📋</span>
                Com Jugar
              </h3>
              <ul className="text-sm text-gray-700 space-y-2">
                <li>• Utilitza els controls de zoom i arrossega el mapa</li>
                <li>• Clica les xinxetes per veure missions</li>
                <li>• Completa missions pujant fotos</li>
                <li>• Desbloqueja totes les ciutats del Japó!</li>
              </ul>
            </div>
          </div>
        </aside>
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