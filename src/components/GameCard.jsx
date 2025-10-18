export default function GameCard({ game }) {
  return (
    <div className="bg-surface rounded-2xl overflow-hidden shadow hover:shadow-glow transition-transform hover:scale-105">
      <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <h3 className="font-semibold text-lg text-white">{game.title}</h3>
        <span className="text-sm text-blue-300">{game.genre}</span>
      </div>
    </div>
  );
