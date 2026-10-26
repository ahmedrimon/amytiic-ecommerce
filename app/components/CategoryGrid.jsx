"use client";

import React from "react";

const CATEGORIES = [
  {
    id: "watches",
    title: "WATCHES",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
    link: "#watches",
  },
  {
    id: "jewellery",
    title: "JEWELLERY",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000",
    link: "#jewellery",
  },
  {
    id: "accessories",
    title: "ACCESSORIES",
    image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?auto=format&fit=crop&q=80&w=1000",
    link: "#accessories",
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-white text-zinc-900 py-24 px-6 md:px-12 lg:px-16 w-full select-none">
      <div className="max-w-[1600px] mx-auto">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl tracking-[0.25em] uppercase text-zinc-900 font-normal">
            Explore Chopard's Creations
          </h2>
        </div>

        {/* 3-Column Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {CATEGORIES.map((category) => (
            <a
              key={category.id}
              href={category.link}
              className="group relative flex flex-col bg-[#f8f8f6] overflow-hidden cursor-pointer border border-transparent hover:border-zinc-200 transition-all duration-500"
            >
              {/* Image Container with Hover Scale */}
              <div className="relative w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] flex items-center justify-center p-8 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Title & CTA Button Wrapper */}
              <div className="flex flex-col items-center justify-center pb-10 pt-2 px-6 text-center mt-auto">
                {/* Category Title */}
                <h3 className="font-serif text-xl sm:text-2xl tracking-[0.2em] uppercase text-zinc-900 mb-6 group-hover:text-black transition-colors">
                  {category.title}
                </h3>

                {/* DISCOVER CTA Button (Slides up / smooth fade on hover) */}
                <button className="bg-black text-white px-10 py-3.5 text-[11px] font-sans tracking-[0.3em] uppercase opacity-90 group-hover:opacity-100 group-hover:bg-zinc-800 transform group-hover:-translate-y-1 transition-all duration-300 shadow-sm">
                  Discover
                </button>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
}