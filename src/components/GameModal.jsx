import { useEffect } from 'react';

export default function GameModal({ game, onClose }) {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = 'auto');
  }, []);

  if (!game) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
      <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl w-full max-w-5xl h-[80vh]">
        <iframe
          src={game.embed_url}
          title={game.title}
          className="w-full h-full border-0"
          allowFullScreen
        ></iframe>

        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-600 hover:bg-red-700 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold shadow-lg"
        >
          ✕
        </button>
      </div>
    </div>
  );
}
