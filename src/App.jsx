import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GameCard from './components/GameCard';
import Footer from './components/Footer';
import GameDetail from './components/GameDetail';
import ThemeToggle from './components/ThemeToggle';
import games from './data/games';

export default function App() {
  const [selectedGenre, setSelectedGenre] = useState('All');
  const filtered = selectedGenre === 'All' ? games : games.filter(g => g.genre === selectedGenre);

  const genres = ['All', ...new Set(games.map(g => g.genre))];

  return (
    <div className="transition bg-gradient-to-b from-[#0a0b10] to-[#10121b] min-h-screen text-white font-sans dark:bg-[#f5f5f5] dark:text-black">
      <Navbar />
      <ThemeToggle />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <div className="max-w-7xl mx-auto mt-12 px-6">
                <h2 className="text-2xl font-bold mb-6 tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                  Rekomendasi Untukmu
                </h2>

                <div className="flex gap-3 mb-6 flex-wrap">
                  {genres.map((genre, i) => (
                    <button
                      key={i}
                      onClick={() => setSelectedGenre(genre)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                        selectedGenre === genre
                          ? 'bg-gradient-to-r from-violet-500 to-cyan-500'
                          : 'bg-[#1a1c25] hover:bg-[#262837]'
                      }`}
                    >
                      {genre}
                    </button>
                  ))}
                </div>

                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {filtered.map((game, i) => (
                    <GameCard key={i} {...game} />
                  ))}
                </div>
              </div>
            </>
          }
        />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>

      <Footer />
    </div>
  );
}
