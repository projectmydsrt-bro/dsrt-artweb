import React from 'react';
import GameCard from './GameCard';

export default function GameGrid({ games }) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </section>
  );
}
