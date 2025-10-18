export default function GameCard({ title, genre, rating, image }) {
  return (
    <div className="group relative bg-[#1a1c25] rounded-2xl overflow-hidden shadow-lg transition-all hover:scale-[1.03] hover:shadow-violet-500/20">
      <img
        src={image}
        alt={title}
        className="w-full h-44 object-cover opacity-90 group-hover:opacity-100 transition"
      />
      <div className="p-4">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-400 text-sm">{genre}</p>
        <div className="flex justify-between items-center mt-3">
          <span className="text-yellow-400 font-medium">⭐ {rating}</span>
          <button className="bg-gradient-to-r from-violet-500 to-cyan-500 text-sm px-3 py-1 rounded-lg shadow-md hover:opacity-90 transition">
            Play
          </button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
    </div>
  );
}
