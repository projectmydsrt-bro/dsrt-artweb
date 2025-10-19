import React, { useState, useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';
import GameDetail from './components/GameDetail';
import ThemeToggle from './components/ThemeToggle';
import games from './data/games';

export default function App() {
  const [search, setSearch] = useState('');
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return games;
    return games.filter(
      (g) => g.title.toLowerCase().includes(q) || g.genre.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="min-h-screen">
      <Header onSearch={setSearch} />
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<><Hero /><GameGrid games={filtered} /></>} />
        <Route path="/game/:id" element={<GameDetail />} />
      </Routes>
      <Footer />
    </div>
  );
      }
