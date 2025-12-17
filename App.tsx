import React, { useState } from 'react';
import { Game } from './types';
import { GAMES_LIST } from './constants';
import { GameCard } from './components/GameCard';
import { GamePlayer } from './components/GamePlayer';
import logoImage from './logo.png';

const OddChoiceLogo = () => (
  <div className="flex flex-col items-center">
    <img 
      src={logoImage} 
      alt="Odd Choice Logo" 
      className="w-48 md:w-64 h-auto"
    />
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