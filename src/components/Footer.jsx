import React from 'react';

export default function Footer() {
  return (
    <footer className="mt-12 py-8 text-sm text-cgm-200 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p>© {new Date().getFullYear()} DSRT GAMES</p>
      </div>
    </footer>
  );
}
