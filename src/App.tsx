import React, { useState, useRef } from 'react';
import { Camera, ZoomIn, ZoomOut } from 'lucide-react';
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
  const [initialPinchDistance, setInitialPinchDistance] = useState<number | null>(null);
  const [initialZoom, setInitialZoom] = useState(1);
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

  const getDistance = (touch1: React.Touch, touch2: React.Touch) => {
    const dx = touch1.clientX - touch2.clientX;
    const dy = touch1.clientY - touch2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      e.preventDefault();
      const distance = getDistance(e.touches[0], e.touches[1]);
      setInitialPinchDistance(distance);
      setInitialZoom(zoom);
      setIsDragging(false);
    } else if (e.touches.length === 1) {
      const touch = e.touches[0];
      setIsDragging(true);
      setDragStart({ x: touch.clientX - position.x, y: touch.clientY - position.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialPinchDistance !== null) {
      e.preventDefault();
      const distance = getDistance(e.touches[0], e.touches[1]);
      const scale = distance / initialPinchDistance;
      const newZoom = Math.max(0.5, Math.min(3, initialZoom * scale));
      setZoom(newZoom);
    } else if (isDragging && e.touches.length === 1) {
      const touch = e.touches[0];
      setPosition({
        x: touch.clientX - dragStart.x,
        y: touch.clientY - dragStart.y
      });
    }
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    setInitialPinchDistance(null);
  };

  const progress = getTotalProgress();
  const allPhotos = getAllPhotos();
  const isAllCompleted = progress.completed === progress.total && progress.total > 0;

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{ backgroundColor: '#1ba1b8' }}>
      {/* Header */}
      <header className="bg-gradient-to-r from-red-500 via-pink-500 to-orange-400 text-white shadow-lg z-30">
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-xl sm:text-2xl">🗾</span>
              <h1 className="text-lg sm:text-2xl font-bold">Missió Japó Quest</h1>
              <span className="text-xl sm:text-2xl">🎌</span>
            </div>
            <div className="text-right">
              <div className="text-xs sm:text-sm opacity-90 mb-1">
                {progress.completed} / {progress.total}
              </div>
              <div className="w-20 sm:w-32 bg-white bg-opacity-30 rounded-full h-2">
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
      <main className="flex-1 relative overflow-hidden">
        {/* Zoom Controls */}
        <div className="absolute top-4 right-4 z-20 bg-white rounded-xl shadow-lg p-2 space-y-2">
          <button
            onClick={handleZoomIn}
            className="block p-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all active:scale-95 shadow-md"
            title="Zoom In"
          >
            <ZoomIn size={24} />
          </button>
          <button
            onClick={handleZoomOut}
            className="block p-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg hover:from-red-600 hover:to-pink-600 transition-all active:scale-95 shadow-md"
            title="Zoom Out"
          >
            <ZoomOut size={24} />
          </button>
        </div>

        {/* Collage Button */}
        {allPhotos.length > 0 && (
          <button
            onClick={() => setShowCollageViewer(true)}
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-medium hover:from-blue-600 hover:to-cyan-600 transition-all flex items-center space-x-2 shadow-xl active:scale-95"
          >
            <Camera size={20} />
            <span className="hidden sm:inline">Col·latge</span>
            <span className="font-bold">({allPhotos.length})</span>
          </button>
        )}

        {/* Interactive Map */}
        <div
          ref={mapRef}
          className="w-full h-full overflow-hidden touch-pan-x touch-pan-y"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="relative w-full h-full min-h-screen"
            style={{
              backgroundImage: 'url(/image.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
              transition: isDragging ? 'none' : 'transform 0.2s ease-out'
            }}
          >
            {cities.map((city) => {
              const regularMissions = city.missions.filter(m => !m.isSecret);
              const secretMissions = city.missions.filter(m => m.isSecret);
              const regularCompleted = regularMissions.filter(m => m.completed).length;
              const allRegularComplete = regularCompleted === regularMissions.length;

              const visibleMissions = allRegularComplete ? city.missions : regularMissions;
              const completedMissions = visibleMissions.filter(m => m.completed).length;
              const totalMissions = visibleMissions.length;
              const isCompleted = completedMissions === totalMissions;
              const hasSecretUnlocked = allRegularComplete && secretMissions.length > 0;

              const iconScale = 1 / zoom;
              const minScale = 0.5;
              const maxScale = 1;
              const finalScale = Math.max(minScale, Math.min(maxScale, iconScale));

              return (
                <button
                  key={city.id}
                  onClick={() => setSelectedCity(city)}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 hover:scale-110 active:scale-95 z-10`}
                  style={{
                    left: `${city.x}%`,
                    top: `${city.y}%`,
                    transform: `translate(-50%, -50%) scale(${finalScale})`
                  }}
                >
                  <div className="flex flex-col items-center relative">
                    {hasSecretUnlocked && !isCompleted && (
                      <div className="absolute -top-2 -right-2 bg-yellow-400 text-yellow-900 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold animate-bounce shadow-lg z-10">
                        !
                      </div>
                    )}
                    <div className={`p-3 sm:p-4 rounded-full shadow-xl border-2 border-white ${
                      isCompleted ? 'bg-gradient-to-r from-green-500 to-emerald-500 animate-pulse' : hasSecretUnlocked ? 'bg-gradient-to-r from-yellow-500 to-orange-500' : 'bg-gradient-to-r from-red-500 to-pink-500'
                    } text-white transition-all flex items-center justify-center`}>
                      <span className="text-2xl sm:text-3xl">{city.icon}</span>
                    </div>
                    <span className="mt-1 text-xs sm:text-sm font-bold bg-white px-2 sm:px-3 py-1 rounded-full shadow-lg border-2 border-red-200">
                      {city.name}
                    </span>
                    <span className="text-xs text-gray-700 font-medium bg-white/90 px-2 py-0.5 rounded-full mt-1">
                      {completedMissions}/{totalMissions}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
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