import React from "react";

const cards = [
  {
    title: "A",
    desc: "contoh produk.",
    img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800",
  },
  {
    title: "B",
    desc: "contoh produk.",
    img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800",
  },
  {
    title: "C",
    desc: "contoh produk.",
    img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?w=800",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-16 
      bg-gradient-to-br from-gray-900 via-[#0f172a] to-[#1e293b] overflow-hidden">

      {/* Backgroundnya */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.05)_1px,_transparent_1px)] bg-[length:24px_24px]"></div>

      {/* Ini Card Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 z-10">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-xl overflow-hidden w-80 
              transition-transform transform hover:-translate-y-2 hover:shadow-2xl"
          >
            {/* Ini Card Image */}
            <img
              src={card.img}
              alt={card.title}
              className="h-48 w-full object-cover"
            />

            {/* Card Contentnya */}
            <div className="p-5">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-gray-600 mb-4">{card.desc}</p>
              <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700">
                VIEW MORE
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
