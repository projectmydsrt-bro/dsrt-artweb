import { Search, Play } from "lucide-react";
import { useState } from "react";

export default function Header({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-surface/80 backdrop-blur-lg shadow-glow border-b border-[#2E2E4A] sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <div className="text-2xl font-bold text-primary">CrazyGames</div>
        <span className="text-xs text-gray-400">Play instantly • No install</span>
      </div>

      <nav className="hidden md:flex gap-6 text-gray-300 text-sm">
        <a href="#" className="hover:text-glow transition">Home</a>
        <a href="#" className="hover:text-glow transition">Trending</a>
        <a href="#" className="hover:text-glow transition">Categories</a>
        <a href="#" className="hover:text-glow transition">Premium</a>
      </nav>

      <div className="flex items-center gap-3">
        <div className="relative">
          <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
          <input
            type="text"
            placeholder="Cari game..."
            value={query}
            onChange={handleChange}
            className="pl-8 pr-3 py-2 bg-[#1E293B]/60 rounded-xl text-sm text-white focus:outline-none focus:ring focus:ring-primary/50 placeholder:text-gray-400"
          />
        </div>
        <button className="px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-xl text-sm font-medium flex items-center gap-1 hover:scale-105 transition">
          <Play size={14} /> Play Now
        </button>
      </div>
    </header>
  );
}
