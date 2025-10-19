import React from 'react';
import { Search, Play } from 'lucide-react';

export default function Header({ onSearch }) {
  return (
    <header className="fixed w-full z-40 top-0 left-0 backdrop-blur bg-[#0b0d14]/60 border-b border-white/6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl flex items-center justify-center bg-gradient-to-br from-[#7C3AED] to-[#06b6d4] text-white font-bold">DS</div>
            <div className="hidden sm:block">
              <div className="text-lg font-semibold text-white">DSRT Games</div>
              <div className="text-xs text-gray-400">Play instantly • No install</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            <a href="#" className="hover:text-white transition">Home</a>
            <a href="#" className="hover:text-white transition">Trending</a>
            <a href="#" className="hover:text-white transition">Categories</a>
            <a href="#" className="hover:text-white transition">Premium</a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative hidden sm:block">
              <Search className="absolute left-3 top-2.5 text-gray-400" size={16} />
              <input
                onChange={(e) => onSearch?.(e.target.value)}
                className="pl-9 pr-3 py-2 rounded-full bg-[#0f1220]/60 placeholder:text-gray-400 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                placeholder="Cari game..."
              />
            </div>

            <button className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06b6d4] text-sm font-semibold shadow-dsrt-glow hover:scale-[1.03] transition">
              <Play size={14} /> Play Now
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
