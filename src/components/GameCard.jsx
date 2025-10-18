export default function GameCard({ game, onPlay }) {
  return (
    <div className="relative group bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300">
      <img
        src={game.thumbnail}
        alt={game.title}
        className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white truncate">{game.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">{game.description}</p>
      </div>
      <button
        onClick={onPlay}
        className="absolute inset-0 bg-black bg-opacity-60 text-white flex items-center justify-center text-lg font-semibold opacity-0 group-hover:opacity-100 transition duration-300"
      >
        ▶ Play
      </button>
    </div>
  );
}
