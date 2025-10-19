import { Heart, Star } from "lucide-react";
import { Howl } from "howler";
import hoverSound from "../assets/hover.mp3";
import clickSound from "../assets/click.mp3";

export default function GameCard({ game }) {
  const playHover = () => new Howl({ src: [hoverSound], volume: 0.2 }).play();
  const playClick = () => new Howl({ src: [clickSound], volume: 0.3 }).play();

  return (
    <div
      onMouseEnter={playHover}
      className="bg-surface rounded-2xl overflow-hidden shadow hover:shadow-glow transition-transform hover:-translate-y-1 hover:scale-[1.03]"
    >
      <img src={game.image} alt={game.title} className="w-full h-40 object-cover" />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-lg text-white">{game.title}</h3>
          <Star size={16} className="text-yellow-400" />
        </div>
        <p className="text-sm text-blue-300">{game.genre}</p>
        <div className="flex justify-between mt-2">
          <button
            onClick={playClick}
            className="px-3 py-1 bg-primary rounded-md text-sm text-white hover:scale-105 transition"
          >
            Play
          </button>
          <Heart size={16} className="text-gray-400 hover:text-glow transition" />
        </div>
      </div>
    </div>
  );
}
