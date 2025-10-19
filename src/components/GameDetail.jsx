import React from 'react';
import { useParams, Link } from 'react-router-dom';
import games from '../data/games';

export default function GameDetail() {
  const { id } = useParams();
  const game = games.find((g) => String(g.id) === String(id));

  if (!game) {
    return (
      <div className="pt-32 text-center">
        <h2 className="text-xl text-gray-300">Game tidak ditemukan</h2>
        <Link to="/" className="text-[#7C3AED] mt-4 inline-block">Kembali ke beranda</Link>
      </div>
    );
  }

  return (
    <main className="pt-28 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#7C3AED] to-[#06b6d4]">
          {game.title}
        </h1>
        <p className="text-sm text-gray-400 mt-2">{game.genre} • ⭐ {game.rating}</p>
        <p className="mt-4 text-gray-300">{game.desc}</p>

        <div className="mt-6">
          <div className="relative w-full aspect-[16/9] border border-white/5 rounded-2xl overflow-hidden bg-black">
            <iframe src={game.path} title={game.title} className="w-full h-full" allowFullScreen sandbox="allow-scripts allow-same-origin"></iframe>
          </div>
        </div>

        <Link to="/" className="inline-block mt-6 text-[#7C3AED] hover:underline">← Kembali</Link>
      </div>
    </main>
  );
}
