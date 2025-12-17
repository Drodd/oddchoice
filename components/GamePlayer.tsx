import React, { useState, useEffect } from 'react';
import { X, Smartphone, Maximize2, Minimize2, RotateCcw } from 'lucide-react';
import { Game } from '../types';

interface GamePlayerProps {
  game: Game;
  onClose: () => void;
}

export const GamePlayer: React.FC<GamePlayerProps> = ({ game, onClose }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  const handleReload = () => {
    setIframeKey(prev => prev + 1);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#f5f5f4]/90 backdrop-blur-sm p-4 animate-in fade-in duration-200">
      
      {/* 
        Main Card Container
        - Windowed: fits content (defined by inner width calculation)
        - Fullscreen: fixed inset-0
      */}
      <div 
        className={`relative bg-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,0.2)] flex flex-col transition-all duration-300 overflow-hidden
          ${isFullscreen 
            ? 'fixed inset-0 w-full h-full' 
            : 'rounded-sm'
          }
        `}
      >
        
        {/* Header (Fixed Height: 3rem / 48px) */}
        <div className="h-12 bg-white border-b-2 border-black flex items-center justify-between px-3 shrink-0 z-10 relative">
            <span className="font-black text-sm uppercase tracking-wider truncate mr-4">
                {game.title}
            </span>

            <div className="flex gap-2">
                 <button 
                    onClick={handleReload}
                    className="p-1.5 hover:bg-stone-200 text-black border border-transparent hover:border-black transition-all"
                    title="重新开始"
                >
                    <RotateCcw size={18} />
                </button>
                <button 
                    onClick={() => setIsFullscreen(!isFullscreen)}
                    className="p-1.5 hover:bg-stone-200 text-black border border-transparent hover:border-black transition-all hidden md:block"
                    title={isFullscreen ? "退出全屏" : "全屏"}
                >
                    {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                </button>
                <button 
                    onClick={onClose}
                    className="p-1.5 bg-[#e11d48] hover:bg-red-700 text-white border border-black transition-all"
                    title="关闭"
                >
                    <X size={18} />
                </button>
            </div>
        </div>

        {/* 
          Game Viewport Container 
          - Fullscreen: flex-1 to take remaining height, center content
          - Windowed: Wraps the explicitly sized content
        */}
        <div className={`relative bg-stone-900 flex items-center justify-center overflow-hidden
             ${isFullscreen ? 'flex-1 w-full h-full' : ''}
        `}>
           
           {/* 
             Strict 9:16 Wrapper 
             - Defines the actual size of the game area.
           */}
           <div 
             className={`relative bg-black transition-all duration-300 ${isFullscreen ? 'shadow-2xl' : ''}`}
             style={{
                aspectRatio: '9/16',
                // Fullscreen: maximize height, aspect ratio determines width.
                // Windowed: Calculate specific width that ensures the resulting height (W * 16/9) + Header (48px) <= 90vh
                height: isFullscreen ? '100%' : undefined,
                width: isFullscreen ? undefined : 'min(450px, 90vw, calc((90vh - 48px) * 9 / 16))'
             }}
           >
               <iframe
                key={iframeKey}
                title={game.title}
                src={game.path}
                className="w-full h-full border-0 block bg-white"
                allow="autoplay; fullscreen; accelerometer; gyroscope"
                sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-modals"
               />
               
               {/* Loader behind iframe */}
               <div className="absolute inset-0 flex items-center justify-center -z-10 text-stone-700 pointer-events-none">
                    <Loader />
               </div>
           </div>
        </div>
      </div>
      
    </div>
  );
};

const Loader = () => (
    <div className="flex flex-col items-center gap-2">
        <Smartphone size={48} className="animate-pulse" />
        <span className="text-xs font-mono uppercase tracking-widest opacity-50">正在读取卡带...</span>
    </div>
);