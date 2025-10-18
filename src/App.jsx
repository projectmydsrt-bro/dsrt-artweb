import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import AdminUpload from './pages/AdminUpload'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white flex flex-col">
      <Navbar />
      <div className="flex-1 p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminUpload />} />
        </Routes>
      </div>
    </div>
  )
  }
