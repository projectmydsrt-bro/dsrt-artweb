import React from 'react';

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 mt-6">
      <div className="relative rounded-2xl p-8 min-h-[220px] card-glass">
        <div>
          <h1 className="text-3xl sm:text-4xl font-bold">Mainkan ribuan game gratis</h1>
          <p className="mt-2 text-cgm-300 max-w-xl">Discover curated picks, trending multiplayer, and exclusive originals — all in your browser.</p>

          <div className="mt-6 flex gap-3">
            <button className="px-5 py-3 rounded-full bg-cgm-500 text-white shadow-cgm-glow">▶️ Main Sekarang</button>
            <button className="px-4 py-3 rounded-full bg-white/6 border border-white/6 text-cgm-50">🔎 Lihat Genre Populer</button>
          </div>
        </div>
      </div>
    </section>
  );
}
