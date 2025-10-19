import GameCard from './GameCard';
import gamesData from '../data/games';
import { useState } from 'react';

export default function GameGrid({ search }) {
  const [games] = useState(gamesData);

  const filtered = games.filter(g =>
    g.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6 transition-all">
      {filtered.length > 0 ? (
        filtered.map((game, i) => <GameCard key={i} game={game} />)
      ) : (
        <p className="text-gray-400 text-center col-span-full">Tidak ada game ditemukan 😢</p>
      )}
    </section>
  );
}
