import React from 'react';

export default function Header() {
  return (
    <header className="w-full bg-transparent max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <img src="/logo.svg" alt="logo" className="w-10 h-10 rounded-2xl" />
        <div className="hidden sm:block">
          <div className="text-lg font-semibold">CrazyGames</div>
          <div className="text-xs text-cgm-300">Play instantly • No install</div>
        </div>

        <nav className="hidden md:flex items-center gap-4 ml-6 text-sm text-cgm-300">
          <a href="#" className="hover:text-white">Home</a>
          <a href="#" className="hover:text-white">Trending</a>
          <a href="#" className="hover:text-white">Categories</a>
          <a href="#" className="hover:text-white">Premium</a>
        </nav>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:block">
          <input
            className="w-64 rounded-full py-2 px-3 bg-white/6 placeholder:text-cgm-300 focus:outline-none focus:ring-2 focus:ring-cgm-500"
            placeholder="Cari game..."
          />
        </div>
        <button className="px-4 py-2 rounded-lg bg-cgm-500 text-white hidden sm:block">Play Now</button>
      </div>
    </header>
  );
}
