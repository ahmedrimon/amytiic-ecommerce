"use client";

import React, { useState } from "react";
import { ArrowRight, Globe } from "lucide-react";

const SERVICES = [
  {
    id: "boutiques",
    title: "OUR BOUTIQUES",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=1000",
    link: "#boutiques",
  },
  {
    id: "warranty",
    title: "EXTEND YOUR WARRANTY",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&q=80&w=1000",
    link: "#warranty",
  },
  {
    id: "care",
    title: "PRODUCT CARE",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&q=80&w=1000",
    link: "#care",
  },
];

export default function ServicesAndNewsletter() {
  const [email, setEmail] = useState("");
  const [highContrast, setHighContrast] = useState(false);
  const [disableAnimations, setDisableAnimations] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed successfully with ${email}`);
      setEmail("");
    }
  };

  return (
    <section className="bg-black text-white w-full select-none pt-20">
      {/* ---------------- SERVICES SECTION ---------------- */}
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-16 mb-24">
        <h2 className="font-serif text-3xl md:text-4xl tracking-[0.3em] uppercase text-center text-white font-normal mb-16">
          Services
        </h2>

        {/* 3-Column Services Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <a
              key={service.id}
              href={service.link}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Box */}
              <div className="relative w-full aspect-[16/10] overflow-hidden mb-6 bg-zinc-900">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover:opacity-100"
                />
              </div>

              {/* Title */}
              <h3 className="font-serif text-lg tracking-[0.2em] uppercase text-white mb-3">
                {service.title}
              </h3>

              {/* Learn More Arrow CTA */}
              <div className="flex items-center gap-2 text-zinc-400 group-hover:text-white transition-colors duration-300">
                <span className="text-[11px] font-sans tracking-[0.2em] uppercase">
                  Learn More
                </span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300 stroke-[1.5]" />
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* ---------------- NEWSLETTER SECTION ---------------- */}
      <div className="border-t border-zinc-800 py-20 px-6">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-serif text-2xl sm:text-3xl tracking-[0.25em] uppercase text-white mb-10 font-normal">
            Subscribe to Our Newsletter
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email *"
                  className="w-full bg-black border border-zinc-700 text-white px-4 py-3 text-sm focus:outline-none focus:border-white placeholder-zinc-400 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-white text-black px-8 py-3 text-xs font-sans tracking-[0.25em] uppercase font-medium hover:bg-zinc-200 transition-colors"
              >
                Sign Up
              </button>
            </div>

            <p className="text-left text-[11px] text-zinc-500 font-sans mt-1">
              Format: example@email.com
            </p>
          </form>
        </div>
      </div>

      {/* ---------------- BOTTOM ACCESSIBILITY TOOLBAR ---------------- */}
      <div className="border-t border-zinc-800/80 py-4 px-6 md:px-12 bg-black">
        <div className="max-w-[1600px] mx-auto flex flex-wrap items-center justify-between gap-6 text-xs text-zinc-400 font-sans tracking-widest uppercase">
          
          {/* International Selector */}
          <button className="flex items-center gap-2 hover:text-white transition-colors">
            <Globe className="w-4 h-4" />
            <span>International</span>
          </button>

          {/* Toggle Switches */}
          <div className="flex items-center gap-8">
            {/* High Contrast Toggle */}
            <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors">
              <span>Enable High Contrast</span>
              <input
                type="checkbox"
                checked={highContrast}
                onChange={() => setHighContrast(!highContrast)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-500 relative" />
            </label>

            {/* Disable Animations Toggle */}
            <label className="flex items-center gap-3 cursor-pointer hover:text-white transition-colors">
              <span>Disable Animations</span>
              <input
                type="checkbox"
                checked={disableAnimations}
                onChange={() => setDisableAnimations(!disableAnimations)}
                className="sr-only peer"
              />
              <div className="w-9 h-5 bg-zinc-800 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-zinc-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-zinc-500 relative" />
            </label>
          </div>

        </div>
      </div>
    </section>
  );
}