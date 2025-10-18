import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GameCard from './components/GameCard';
import Footer from './components/Footer';
import GameDetail from './components/GameDetail';
import games from './data/games';

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#0a0b10] to-[#10121b] min-h-screen text-white font-sans">
      <Navbar />
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
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {games.map((game, i) => (
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
