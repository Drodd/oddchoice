import React, { useState } from 'react';
import { Game } from './types';
import { GAMES_LIST } from './constants';
import { GameCard } from './components/GameCard';
import { GamePlayer } from './components/GamePlayer';

const OddChoiceLogo = () => (
  <div className="flex flex-col items-center">
    {/* Icon */}
    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-2">
      {/* Black Circle with gap at bottom */}
      <path 
        d="M 85 80 A 45 45 0 1 0 15 80" 
        stroke="black" 
        strokeWidth="12" 
        strokeLinecap="butt"
      />
      {/* Red Keyhole Shape */}
      <path 
        d="M 50 40 A 12 12 0 1 0 50 64 L 60 90 L 40 90 L 50 64" 
        fill="#dc2626"
      />
      {/* Refined Keyhole top circle to ensure it looks solid */}
      <circle cx="50" cy="48" r="10" fill="#dc2626" /> 
      {/* Keyhole base/stand */}
      <path d="M 42 55 L 58 55 L 65 92 L 35 92 Z" fill="#dc2626" />
    </svg>
    
    {/* Text */}
    <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-black" style={{ fontFamily: 'Impact, sans-serif' }}>
      ODD <span className="text-stone-800">CHOICE</span>
    </h1>
    
    {/* Distress/Grunge Texture Overlay effect on text could go here, keeping it simple for CSS */}
    <div className="h-1 w-24 bg-[#dc2626] mt-2"></div>
  </div>
);

const App: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  return (
    <div className="min-h-screen bg-stone-100 bg-grain text-stone-900 font-sans selection:bg-[#dc2626] selection:text-white">
      
      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <header className="flex flex-col items-center mb-16 text-center">
          <OddChoiceLogo />
          <p className="mt-6 text-stone-500 font-mono text-sm max-w-md mx-auto border-y border-stone-300 py-2 uppercase tracking-wide">
            实验 • 复古 • 独立
          </p>
        </header>

        {/* Game Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 md:gap-8">
          {GAMES_LIST.map((game) => (
            <GameCard 
              key={game.id} 
              game={game} 
              onClick={(g) => setSelectedGame(g)} 
            />
          ))}
        </div>

        {/* Footer */}
        <footer className="mt-24 text-center pb-8">
            <div className="inline-block border-2 border-black p-4 bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-black font-bold uppercase text-xs tracking-widest">
                    &copy; {new Date().getFullYear()} Odd Choice.
                </p>
            </div>
        </footer>
      </div>

      {/* Game Player Modal */}
      {selectedGame && (
        <GamePlayer 
          game={selectedGame} 
          onClose={() => setSelectedGame(null)} 
        />
      )}
    </div>
  );
};

export default App;