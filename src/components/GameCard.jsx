import React from 'react';
import { Star } from 'lucide-react';
import { Howl } from 'howler';
import hoverSfx from '../../public/sounds/hover.mp3'; // optional - if you add sounds in public/sounds/
import clickSfx from '../../public/sounds/click.mp3';
import { Link } from 'react-router-dom';

// Note: If you don't add sounds, Howl will throw — either remove sound code or place sound files in public/sounds/
export default function GameCard({ game }) {
  const playHover = () => {
    try { new Howl({ src: [hoverSfx], volume: 0.12 }).play(); } catch {}
  };
  const playClick = () => {
    try { new Howl({ src: [clickSfx], volume: 0.2 }).play(); } catch {}
  };

  return (
    <Link to={`/game/${game.id}`} onClick={playClick} className="block">
      <article onMouseEnter={playHover} className="group bg-[#0e1118] rounded-2xl overflow-hidden border border-white/6 hover:shadow-dsrt-glow transition transform hover:-translate-y-1 hover:scale-[1.02]">
        <div className="w-full aspect-[16/9] overflow-hidden">
          <img src={game.image} alt={game.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        </div>
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-white">{game.title}</h3>
            <div className="text-sm text-yellow-400 flex items-center gap-1">
              <Star size={14} /> {game.rating}
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-1">{game.genre}</p>
          <div className="mt-4 flex items-center justify-between">
            <button className="px-3 py-1 rounded-md bg-gradient-to-r from-[#7C3AED] to-[#06b6d4] text-xs font-semibold">Play</button>
            <button className="p-2 rounded-md bg-white/5 text-gray-300 hover:bg-white/8">❤</button>
          </div>
        </div>
      </article>
    </Link>
  );
}
