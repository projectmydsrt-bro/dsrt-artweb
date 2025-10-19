import React from 'react';

export default function Hero() {
  return (
    <section className="pt-24 pb-12 fullscreen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl card-glass p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -right-40 -top-24 w-96 h-96 bg-gradient-to-br from-[#7C3AED]/30 to-[#06b6d4]/20 rounded-full blur-3xl pointer-events-none"></div>
          <div className="md:flex md:items-center md:justify-between gap-6">
            <div className="max-w-2xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Mainkan ribuan game gratis
              </h1>
              <p className="mt-4 text-gray-300 max-w-xl">
                Temukan game populer, multiplayer trending, dan exclusive titles langsung di browser kamu. Tanpa instalasi, langsung main.
              </p>
              <div className="mt-6 flex gap-3">
                <button className="px-5 py-3 rounded-full bg-gradient-to-r from-[#7C3AED] to-[#06b6d4] text-white shadow-dsrt-glow font-semibold hover:scale-105 transition">
                  🎮 Main Sekarang
                </button>
                <button className="px-5 py-3 rounded-full border border-white/10 text-gray-200 hover:border-[#7C3AED] transition">
                  🔎 Lihat Genre Populer
                </button>
              </div>
            </div>
            <div className="mt-6 md:mt-0 w-full md:w-1/3">
              <div className="bg-[#0e1118] rounded-xl border border-white/6 p-3">
                <img src="https://picsum.photos/seed/hero/800/450" alt="hero" className="w-full rounded-md object-cover" />
                <div className="mt-2 text-xs text-gray-400">Featured: Nebula Runner</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
