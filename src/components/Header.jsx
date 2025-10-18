export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-surface text-white shadow-glow">
      <div className="text-2xl font-bold text-primary">CrazyGames</div>
      <nav className="flex gap-6">
        <a href="#" className="hover:text-glow">Trending</a>
        <a href="#" className="hover:text-glow">Baru</a>
        <a href="#" className="hover:text-glow">Kategori</a>
        <a href="#" className="hover:text-glow">Premium</a>
      </nav>
      <input type="text" placeholder="Cari game..." className="bg-[#1E293B] rounded-lg px-3 py-1 text-sm text-white focus:outline-none focus:ring focus:ring-primary" />
    </header>
  );
}
