import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="fixed right-6 top-6 bg-[#1a1c25] p-3 rounded-full shadow-md hover:scale-110 transition"
    >
      {dark ? <Sun size={20} /> : <Moon size={20} />}
    </button>
  );
}
