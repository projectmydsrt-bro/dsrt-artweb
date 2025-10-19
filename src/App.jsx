import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';
import './styles/theme.css';
import './styles/variables.css';
import './index.css';

export default function App() {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-background text-white">
      <Header onSearch={setSearch} />
      <Hero />
      <GameGrid search={search} />
      <Footer />
    </div>
  );
}
