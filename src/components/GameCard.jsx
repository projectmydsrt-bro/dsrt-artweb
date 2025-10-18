import React from 'react';

export default function GameCard({ game }) {
  return (
    <article className="rounded-2xl overflow-hidden border border-white/6 bg-white/3 hover:scale-[1.02] transition-transform duration-200">
      <img src={game.image} alt={game.title} className="w-full aspect-[16/9] object-cover" />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div>
            <h4 className="text-sm font-semibold text-white">{game.title}</h4>
            <div className="text-xs text-cgm-200">{game.genre}</div>
          </div>
          <div className="text-xs text-cgm-300">⭐ {game.rating ?? '4.2'}</div>
        </div>
        <div className="mt-3 flex gap-2">
          <button className="flex-1 py-2 rounded-md bg-white/6 border border-white/6">Play</button>
          <button className="w-10 h-10 rounded-md bg-white/5">❤</button>
        </div>
      </div>
    </article>
  );
}
