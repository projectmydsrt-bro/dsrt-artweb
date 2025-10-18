import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function GameModal({ game, onClose }) {
  if (!game) return null

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="relative bg-neutral-900 rounded-2xl overflow-hidden w-[90vw] h-[85vh]"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          exit={{ scale: 0.8 }}
        >
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-md"
          >
            ✕
          </button>
          <iframe
            src={game.game_url}
            title={game.title}
            className="w-full h-full border-none rounded-lg"
            allowFullScreen
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}
