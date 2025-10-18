import Header from './components/Header';
import Hero from './components/Hero';
import GameGrid from './components/GameGrid';
import Footer from './components/Footer';
import './styles/theme.css';
import './styles/variables.css';
import './index.css';

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <Hero />
      <GameGrid />
      <Footer />
    </div>
  );
}
