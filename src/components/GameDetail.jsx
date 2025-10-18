import { useParams, Link } from 'react-router-dom';
import games from '../data/games';

export default function GameDetail() {
  const { id } = useParams();
  const game = games.find(g => g.id === parseInt(id));

  if (!game) {
    return (
      <div className="text-center text-gray-400 pt-32">
        <h2>Game tidak ditemukan 😢</h2>
        <Link to="/" className="text-violet-400 underline">Kembali ke beranda</Link>
      </div>
    );
  }

  return (
    <div className="pt-28 px-6 max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <img src={game.image} alt={game.title} className="rounded-2xl shadow-lg w-full md:w-1/2 object-cover" />
        <div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">{game.title}</h1>
          <p className="text-gray-400 mt-3">{game.genre} • ⭐ {game.rating}</p>
          <p className="mt-6 text-gray-300 leading-relaxed">{game.desc}</p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl font-semibold hover:scale-105 transition">
              ▶️ Mainkan Sekarang
            </button>
            <Link to="/" className="px-6 py-3 border border-white/20 rounded-xl text-gray-300 hover:border-violet-500 transition">
              ← Kembali
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
