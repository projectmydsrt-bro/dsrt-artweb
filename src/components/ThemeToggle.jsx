import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(true);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', !dark);
  }, [dark]);

  return (
    <button onClick={() => setDark(s => !s)} className="fixed right-6 bottom-6 p-3 rounded-full bg-[#0f1220]/80 shadow-dsrt-glow z-50">
      {dark ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}
