import GameCard from './GameCard';
import games from '../data/games';

export default function GameGrid() {
  return (
    <section className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 p-6">
      {games.map((game, i) => <GameCard key={i} game={game} />)}
    </section>
  );
}
