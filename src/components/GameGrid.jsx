import React from 'react';
import GameCard from './GameCard';
import games from '../data/games';

export default function GameGrid() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-lg font-semibold text-white mb-4">Rekomendasi Untukmu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {games.map((g, i) => (
          <GameCard key={i} game={g} />
        ))}
      </div>
    </section>
  );
}
