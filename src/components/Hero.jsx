// src/components/Hero.jsx
import React from "react";

export default function Hero() {
  return (
    <section className="hero-section flex flex-col items-center justify-center py-24 bg-gradient-to-b from-gray-900 to-black text-white text-center">
      <h1 className="text-5xl font-bold mb-4">Welcome to DSRT Artweb</h1>
      <p className="text-lg text-gray-300 mb-6">
        Explore, Create, and Showcase Digital Art.
      </p>
      <button className="px-6 py-3 bg-white text-black rounded-xl font-semibold hover:bg-gray-200 transition">
        Get Started
      </button>
    </section>
  );
}
