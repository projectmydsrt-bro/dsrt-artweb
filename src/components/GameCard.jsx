import React from 'react'
import { motion } from 'framer-motion'

export default function GameCard({ game, onClick }) {
  return (
    <motion.div
      layout
      whileHover={{ scale: 1.05 }}
      onClick={() => onClick(game)}
      className="cursor-pointer bg-neutral-800 hover:bg-neutral-700 rounded-xl overflow-hidden shadow-lg transition"
    >
      <img
        src={game.thumbnail_url}
        alt={game.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-3">
        <h3 className="font-semibold text-lg truncate">{game.title}</h3>
        <p className="text-sm text-gray-400 truncate">{game.category}</p>
      </div>
    </motion.div>
  )
}
