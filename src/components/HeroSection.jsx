export default function HeroSection() {
  return (
    <div className="pt-32 pb-20 text-center bg-gradient-to-b from-[#12141f] via-[#10121a] to-[#0a0b10]">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
        Mainkan Ribuan Game Gratis
      </h1>
      <p className="text-gray-400 mt-4 max-w-lg mx-auto">
        Temukan game populer, multiplayer trending, dan exclusive titles langsung di browser kamu.
      </p>
      <div className="flex justify-center mt-8 gap-4">
        <button className="px-6 py-3 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
          🎮 Main Sekarang
        </button>
        <button className="px-6 py-3 border border-white/20 text-gray-300 rounded-xl hover:border-violet-500 transition">
          🔍 Lihat Genre Populer
        </button>
      </div>
    </div>
  );
}
