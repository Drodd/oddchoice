import React, { useState } from 'react';
import { Search, Sparkles, Loader2 } from 'lucide-react';
import { getGameRecommendation } from '../services/geminiService';
import { GAMES_LIST } from '../constants';

interface AISearchProps {
  onSelectGame: (gameId: string) => void;
}

export const AISearch: React.FC<AISearchProps> = ({ onSelectGame }) => {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setError('');

    // Local filter first (simple text match)
    const localMatch = GAMES_LIST.find(g => g.title.toLowerCase().includes(query.toLowerCase()));
    
    // If exact match found locally, use it immediately
    if (localMatch) {
        onSelectGame(localMatch.id);
        setIsSearching(false);
        setQuery('');
        return;
    }

    // Otherwise, ask Gemini for a smart recommendation (semantic search)
    const recommendedId = await getGameRecommendation(query);
    
    setIsSearching(false);
    
    if (recommendedId) {
        onSelectGame(recommendedId);
        setQuery('');
    } else {
        setError('未找到匹配的游戏。尝试搜索“赛车”或“解谜”。');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8 relative z-10">
        <form onSubmit={handleSearch} className="relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                {isSearching ? (
                    <Loader2 className="h-5 w-5 text-indigo-400 animate-spin" />
                ) : (
                    <Sparkles className="h-5 w-5 text-indigo-400" />
                )}
            </div>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="查找游戏（例如：‘快节奏’ 或 ‘太空游戏’）..."
                className="block w-full pl-12 pr-12 py-4 bg-slate-800/80 backdrop-blur-xl border border-slate-700 rounded-full text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent shadow-lg transition-all"
                disabled={isSearching}
            />
            <button 
                type="submit"
                className="absolute inset-y-1 right-1 px-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full transition-colors flex items-center justify-center"
            >
                <Search size={18} />
            </button>
        </form>
        {error && (
            <p className="absolute -bottom-6 left-4 text-xs text-red-400 animate-pulse">
                {error}
            </p>
        )}
    </div>
  );
};