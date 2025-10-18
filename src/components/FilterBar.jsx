export default function FilterBar({ search, setSearch, category, setCategory, categories }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4 px-6 py-4 bg-gray-900/80 sticky top-0 z-40 backdrop-blur-lg">
      <input
        type="text"
        placeholder="Cari game..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
      >
        <option value="">Semua Kategori</option>
        {categories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>
    </div>
  );
}
