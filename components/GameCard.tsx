import React from 'react';
import { Play } from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  return (
    <div 
      onClick={() => onClick(game)}
      className="group relative bg-white border-2 border-black cursor-pointer transition-all duration-200 
                 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 active:translate-y-0 active:shadow-none"
    >
      {/* Image Container */}
      <div className="aspect-[3/4] w-full overflow-hidden relative border-b-2 border-black">
        <img 
          src={game.coverUrl} 
          alt={game.title} 
          className="w-full h-full object-cover filter sepia-[0.3] group-hover:sepia-0 transition-all duration-300"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-200 bg-[#e11d48] border-2 border-black p-3">
                <Play className="w-6 h-6 text-white fill-white" />
            </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 bg-white">
        <h3 className="text-lg font-black text-black uppercase tracking-tighter leading-tight mb-2">
          {game.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-2">
          {game.tags.slice(0, 2).map(tag => (
            <span key={tag} className="text-[10px] font-bold uppercase border border-black px-1.5 py-0.5 text-black hover:bg-black hover:text-white transition-colors">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="text-[10px] font-mono text-stone-400 mb-3">
          {game.releaseDate}
        </div>
        
        <p className="text-stone-600 text-xs font-mono leading-tight line-clamp-3 border-t border-stone-200 pt-2">
            {game.description}
        </p>
      </div>
    </div>
  );
};