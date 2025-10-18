export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center py-20 bg-gradient-to-br from-surface to-primary text-white">
      <h1 className="text-5xl font-bold mb-4">Mainkan Ribuan Game Gratis</h1>
      <p className="text-lg text-blue-200 mb-8">Cepat, Modern, dan Langsung di Browser</p>
      <div className="flex gap-4">
        <button className="px-6 py-3 bg-primary rounded-xl shadow-glow hover:scale-105 transition">Main Sekarang</button>
        <button className="px-6 py-3 bg-secondary rounded-xl hover:scale-105 transition">Jelajahi</button>
      </div>
    </section>
  );
}
