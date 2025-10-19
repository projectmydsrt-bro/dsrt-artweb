import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 py-8 border-t border-white/6 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} DSRT Games — Playable
      </div>
    </footer>
  );
}
