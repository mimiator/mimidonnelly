import React from "react";

export default function HomePage() {
  const images = [
    "/images/Personal Website Timeline 6.jpg",
    "/images/Personal Website Timeline 5.jpg",
    "/images/Personal Website Timeline 4.jpg",
    "/images/Personal Website Timeline 3.jpg",
    "/images/Personal Website Timeline 2.jpg",
    "/images/Personal Website Timeline 1.jpg",
  ];

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          MIMI DILARA <br /> ATOR DONNELLY
        </h1>
      </header>

      {/* Top Description */}
      <section className="text-center px-6 max-w-4xl mx-auto">
        <p className="mb-8 text-lg">
          Storyteller. Strategist. Creative force behind some of the most
          memorable moments in marketing.
        </p>
      </section>

      {/* Scrollable Timeline Images */}
      <section className="overflow-x-auto whitespace-nowrap py-10 px-4">
        <div className="flex gap-4">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Timeline ${6 - idx}`}
              className="w-[90vw] md:w-[60vw] h-auto rounded-xl shadow-md inline-block"
            />
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-12">
        <h2 className="text-2xl font-semibold mb-2">Consultancy Contact</h2>
        <a
          href="https://www.linkedin.com/in/YOURPROFILE"
          target="_blank_

