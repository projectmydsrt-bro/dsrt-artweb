'use client'

import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabaseClient'
import Link from 'next/link'

export default function HomePage() {
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [search, setSearch] = useState('')

  useEffect(() => {
    const loadData = async () => {
      // Ambil kategori
      const { data: catData } = await supabase
        .from('categories')
        .select('*')
        .order('name', { ascending: true })

      setCategories(catData || [])

      // Ambil game
      const { data: gameData, error } = await supabase
        .from('games')
        .select('*')
        .eq('status', 'published')
        .order('created_at', { ascending: false })

      if (error) console.error(error)
      setGames(gameData || [])
      setLoading(false)
    }

    loadData()
  }, [])

  // Filter berdasarkan kategori & pencarian
  const filteredGames = games.filter((g) => {
    const matchCategory = selectedCategory === 'all' || g.category === selectedCategory
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-blue-700 tracking-wide">
            DSRT Game Platform
          </h1>

          <input
            type="text"
            placeholder="Cari game..."
            className="border border-gray-300 rounded-xl px-3 py-1.5 text-sm w-40 md:w-60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </header>

      <section className="max-w-7xl mx-auto px-6 py-8">
        {/* FILTER KATEGORI */}
        <div className="flex flex-wrap gap-2 mb-6 justify-center">
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-4 py-1.5 rounded-full border text-sm transition ${
              selectedCategory === 'all'
                ? 'bg-blue-600 text-white border-blue-600'
                : 'bg-white hover:bg-gray-100 border-gray-300'
            }`}
          >
            Semua
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-4 py-1.5 rounded-full border text-sm transition ${
                selectedCategory === cat.name
                  ? 'bg-blue-600 text-white border-blue-600'
                  : 'bg-white hover:bg-gray-100 border-gray-300'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* GRID GAME */}
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin w-10 h-10 border-4 border-blue-400 border-t-transparent rounded-full"></div>
          </div>
        ) : filteredGames.length === 0 ? (
          <p className="text-center text-gray-500">Game tidak ditemukan.</p>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
            {filteredGames.map((game) => (
              <div
                key={game.id}
                className="bg-white rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transform transition-all duration-200 flex flex-col overflow-hidden"
              >
                {/* Thumbnail */}
                <div className="relative">
                  <img
                    src={game.thumbnail_url}
                    alt={game.title}
                    className="w-full h-36 md:h-40 object-cover"
                  />
                  <div className="absolute top-2 right-2 bg-white/80 text-xs px-2 py-0.5 rounded-full text-gray-600">
                    {game.category}
                  </div>
                </div>

                {/* Info */}
                <div className="p-3 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-semibold text-sm line-clamp-1 text-gray-800">
                      {game.title}
                    </h3>
                    <p className="text-xs text-gray-500 line-clamp-2">
                      {game.description?.slice(0, 60) || ''}
                    </p>
                  </div>

                  {/* Tombol Play */}
                  <Link
                    href={`/game/${game.slug}`}
                    className="mt-3 inline-block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-1.5 rounded-xl transition-all duration-150"
                  >
                    ▶️ Mainkan
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="mt-12 py-6 bg-white text-center text-gray-500 text-sm border-t">
        © {new Date().getFullYear()} DSRT Game Platform — Semua Hak Dilindungi
      </footer>
    </main>
  )
}
