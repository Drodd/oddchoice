import React, { useState } from 'react';
import { 
  Play, RotateCcw, BookOpen,
  Monitor, Sparkles, Camera, UtensilsCrossed, Search, 
  GitBranch, Heart, Drama, Gamepad2, Wine,
  Swords, Scissors, Train, Bus, CloudRain,
  Radio, Send, Building2, Music, Package, Coffee
} from 'lucide-react';
import { Game } from '../types';

interface GameCardProps {
  game: Game;
  onClick: (game: Game) => void;
}

// 游戏图标映射
const gameIcons: Record<string, React.FC<{ className?: string; strokeWidth?: number }>> = {
  'ppt-master': Monitor,
  'wudao': Sparkles,
  'kiss-camera': Camera,
  'dish-battle': UtensilsCrossed,
  'detective': Search,
  'key-choice': GitBranch,
  'perfect-date': Heart,
  'mask-shop': Drama,
  'indie-dev': Gamepad2,
  'dinner-sim': Wine,
  'light-shadow': Swords,
  'tony': Scissors,
  'subway': Train,
  'bus': Bus,
  'raining': CloudRain,
  'stream': Radio,
  'flyer': Send,
  'elevator': Building2,
  'rhythm': Music,
  'delivery': Package,
  'coffee': Coffee,
};

// 从 placehold.co URL 中提取背景色
const extractColorFromUrl = (url: string): string => {
  const match = url.match(/placehold\.co\/\d+x\d+\/([a-fA-F0-9]+|[a-z]+)\//);
  if (match) {
    const color = match[1];
    if (/^[a-fA-F0-9]+$/.test(color)) {
      return `#${color}`;
    }
    return color;
  }
  return '#1a1a1a';
};

// 判断背景色是否为深色
const isDarkColor = (color: string): boolean => {
  const darkColors = ['black', 'navy', 'darkblue', 'darkgreen', 'maroon', 'purple'];
  if (darkColors.includes(color.toLowerCase())) return true;
  if (color.toLowerCase() === 'pink' || color.toLowerCase() === 'white') return false;
  
  const hex = color.replace('#', '');
  if (hex.length === 6) {
    const r = parseInt(hex.slice(0, 2), 16);
    const g = parseInt(hex.slice(2, 4), 16);
    const b = parseInt(hex.slice(4, 6), 16);
    const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return luminance < 0.5;
  }
  return true;
};

// 格式化日期为简短中文格式
const formatDateShort = (dateStr: string): string => {
  const [year, month, day] = dateStr.split('-');
  // 去掉前导零
  const shortYear = year.slice(2);
  const shortMonth = parseInt(month, 10);
  const shortDay = parseInt(day, 10);
  return `${shortYear}年${shortMonth}月${shortDay}日`;
};

export const GameCard: React.FC<GameCardProps> = ({ game, onClick }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const bgColor = extractColorFromUrl(game.coverUrl);
  const isDark = isDarkColor(bgColor);
  const textColor = isDark ? 'text-white' : 'text-black';
  const textColorSecondary = isDark ? 'text-white/60' : 'text-black/50';
  const silhouetteColor = isDark ? 'text-white/10' : 'text-black/10';

  const IconComponent = gameIcons[game.id] || Gamepad2;

  const handleFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const handlePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClick(game);
  };

  return (
    <div className="relative" style={{ perspective: '1000px' }}>
      {/* Front Side */}
      <div 
        className={`relative bg-white border-2 border-black transition-all duration-500 ${
          isFlipped ? 'opacity-0 invisible' : 'opacity-100 visible'
        }`}
        style={{ 
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* Cover with Title */}
        <div 
          className="aspect-[3/4] w-full overflow-hidden relative border-b-2 border-black flex flex-col items-center justify-center p-4"
          style={{ backgroundColor: bgColor }}
        >
          {/* Silhouette Icon - Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <IconComponent className={`w-32 h-32 ${silhouetteColor}`} strokeWidth={1} />
          </div>

          {/* Title as Cover */}
          <div className="relative z-[1] flex flex-col items-center">
            <h3 
              className={`text-2xl font-black ${textColor} leading-tight text-center mb-2`}
              style={{ fontFamily: "'Noto Serif SC', 'Georgia', serif" }}
            >
              {game.title}
            </h3>
            <p 
              className={`text-xs ${textColorSecondary} uppercase tracking-widest text-center`}
              style={{ fontFamily: "'Space Mono', monospace" }}
            >
              {game.titleEn}
            </p>
          </div>

          {/* Flip Button - Top Right */}
          <button
            onClick={handleFlip}
            className="absolute top-2 right-2 z-10 bg-white/90 border-2 border-black p-1.5 
                       hover:bg-black hover:text-white transition-colors"
            title="查看创作故事"
          >
            <BookOpen className="w-4 h-4" />
          </button>

          {/* Tags - Bottom Left */}
          <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5 z-10">
            {game.tags.slice(0, 2).map(tag => (
              <span key={tag} className="text-[10px] font-bold uppercase bg-white/90 border border-black px-1.5 py-0.5 text-black">
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="p-4 bg-white">
          <p className="text-stone-600 text-xs font-mono leading-relaxed line-clamp-3 mb-3">
            {game.description}
          </p>
          
          <div className="text-[10px] font-mono text-stone-400 mb-4">
            {game.releaseDate}
          </div>

          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="w-full bg-[#e11d48] border-2 border-black py-2 px-4 
                       font-bold uppercase text-white text-sm tracking-wider
                       hover:bg-[#be123c] transition-colors
                       shadow-[3px_3px_0px_0px_rgba(0,0,0,1)]
                       active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
                       flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" />
            开始游戏
          </button>
        </div>
      </div>

      {/* Back Side */}
      <div 
        className={`absolute inset-0 bg-stone-900 border-2 border-black transition-all duration-500 ${
          isFlipped ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{ 
          transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(-180deg)',
          transformStyle: 'preserve-3d',
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        {/* Flip Back Button */}
        <button
          onClick={handleFlip}
          className="absolute top-2 right-2 z-10 bg-white border-2 border-black p-1.5 
                     hover:bg-[#e11d48] hover:text-white transition-colors"
          title="返回"
        >
          <RotateCcw className="w-4 h-4" />
        </button>

        <div className="h-full flex flex-col p-4">
          {/* Title */}
          <div className="border-b border-stone-700 pb-3 mb-4">
            <h3 className="text-sm font-bold text-white leading-tight font-mono">
              {formatDateShort(game.releaseDate)}
            </h3>
            <p className="text-[10px] font-mono text-stone-500 mt-1">创作记录</p>
          </div>
          
          {/* Story Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar">
            <p className="text-stone-300 text-sm leading-relaxed font-mono">
              {game.story}
            </p>
          </div>

          {/* Play Button */}
          <button
            onClick={handlePlay}
            className="mt-4 w-full bg-[#e11d48] border-2 border-black py-2 px-4 
                       font-bold uppercase text-white text-sm tracking-wider
                       hover:bg-[#be123c] transition-colors
                       shadow-[3px_3px_0px_0px_rgba(255,255,255,0.2)]
                       active:shadow-none active:translate-x-[3px] active:translate-y-[3px]
                       flex items-center justify-center gap-2"
          >
            <Play className="w-4 h-4 fill-white" />
            开始游戏
          </button>
        </div>
      </div>
    </div>
  );
};
