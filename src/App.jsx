import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import GameCard from './components/GameCard';
import Footer from './components/Footer';

const games = [
  { title: "Battle Arena", genre: "Action", rating: 4.5, image: "/assets/games/battlearena.jpg" },
  { title: "Puzzle Flow", genre: "Puzzle", rating: 4.3, image: "/assets/games/puzzleflow.jpg" },
  { title: "City Racer", genre: "Racing", rating: 4.4, image: "/assets/games/cityracer.jpg" },
  { title: "Zombie Attack", genre: "Shooter", rating: 4.2, image: "/assets/games/zombieattack.jpg" },
  { title: "Nebula Runner", genre: "Arcade", rating: 4.6, image: "/assets/games/nebularunner.jpg" },
  { title: "Island Rescue", genre: "Adventure", rating: 4.1, image: "/assets/games/islandrescue.jpg" },
  { title: "Bubble Pop", genre: "Casual", rating: 4.0, image: "/assets/games/bubblepop.jpg" },
  { title: "Space IO", genre: "IO", rating: 4.3, image: "/assets/games/nebularunner.jpg" }
];

export default function App() {
  return (
    <div className="bg-gradient-to-b from-[#0a0b10] to-[#10121b] min-h-screen text-white font-sans">
      <Navbar />
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
      <Footer />
    </div>
  );
}
