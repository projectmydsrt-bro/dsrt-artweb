import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Navbar() {
  const location = useLocation()
  const active = (path) =>
    location.pathname === path ? 'text-dsrt-500' : 'text-gray-400 hover:text-white'

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center justify-between px-6 py-3 bg-neutral-900 border-b border-neutral-800"
    >
      <Link to="/" className="text-xl font-bold text-dsrt-500 tracking-wide">
        DSRT<span className="text-white">Games</span>
      </Link>
      <div className="flex gap-6">
        <Link to="/" className={active('/')}>Home</Link>
        <Link to="/admin" className={active('/admin')}>Admin</Link>
      </div>
    </motion.nav>
  )
}
