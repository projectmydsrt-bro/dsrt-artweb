export default function Navbar() {
  return (
    <nav className="fixed w-full top-0 backdrop-blur-md bg-[#0d0f17]/70 border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <div className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-violet-400 to-cyan-400 text-transparent bg-clip-text">
          DSRT Games
        </div>
        <div className="hidden md:flex gap-8 text-gray-300 text-sm">
          <a href="#" className="hover:text-white transition">Home</a>
          <a href="#" className="hover:text-white transition">Trending</a>
          <a href="#" className="hover:text-white transition">Categories</a>
          <a href="#" className="hover:text-white transition">Premium</a>
        </div>
        <input
          type="text"
          placeholder="Cari game..."
          className="bg-[#1a1c25] border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500"
        />
      </div>
    </nav>
  );
}
