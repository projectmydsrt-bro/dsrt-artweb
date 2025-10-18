import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import GameCard from '../components/GameCard';
import GameModal from '../components/GameModal';
import FilterBar from '../components/FilterBar';

export default function Home() {
  const [games, setGames] = useState([]);
  const [selectedGame, setSelectedGame] = useState(null);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');

  useEffect(() => {
    const fetchGames = async () => {
      const { data, error } = await supabase.from('games').select('*');
      if (!error && data) setGames(data);
    };
    fetchGames();
  }, []);

  const categories = [...new Set(games.map((g) => g.category))];

  const filteredGames = games.filter((game) =>
    (category ? game.category === category : true) &&
    (search ? game.title.toLowerCase().includes(search.toLowerCase()) : true)
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold mb-2">🎮 DSRT Arcade Portal</h1>
        <p className="text-gray-400">Mainkan ratusan game langsung dari browsermu</p>
      </header>

      <FilterBar
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        categories={categories}
      />

      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-6 pb-10 pt-6">
        {filteredGames.map((game) => (
          <GameCard key={game.id} game={game} onPlay={() => setSelectedGame(game)} />
        ))}
      </main>

      <footer className="text-center py-4 text-gray-500 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} DSRT Arcade Portal — Powered by Supabase
      </footer>

      {selectedGame && <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />}
    </div>
  );
}
