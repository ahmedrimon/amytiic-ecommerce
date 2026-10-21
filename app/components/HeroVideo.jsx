"use client"

import React, { useRef } from "react";
export default function HeroVideo() {

    const videoRef = useRef(null);
    const hasInitialized = useRef(false); // Prevents infinite resetting

    // 2. Jump to 10 seconds before the end when metadata loads
  const handleCanPlay = () => {
    if (videoRef.current && !hasInitialized.current) {
      hasInitialized.current = true;
      const duration = videoRef.current.duration;
      if (duration > 10) {
        videoRef.current.currentTime = duration - 10;
      }
      videoRef.current.play().catch((err) => console.log("Playback error:", err));
    }
  };

  // 3. Loop back to the 10-second mark when it hits the end
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const duration = videoRef.current.duration;
      if (duration > 10 && videoRef.current.currentTime >= duration - 0.2) {
        videoRef.current.currentTime = duration - 10;
        videoRef.current.play().catch(() => {});
      }
    }
  };

  return (
    <section className="relative w-screen h-[calc(100vh-96px)] left-1/2 -translate-x-1/2 overflow-hidden bg-black">
      {/* Background Video Loop */}
      <video
      ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        onCanPlay={handleCanPlay}
        onTimeUpdate={handleTimeUpdate}
        className="absolute inset-0 w-full h-full object-cover object-center scale-150 m-0 p-0"
      >
        {/* Replace with your video file link or local path in public/ */}
        <source src="/hero-video.webm" type="video/webm" />
      </video>

      {/* Dark Overlay for Text Contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Centered Luxury Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <p className="text-xs sm:text-sm uppercase tracking-[0.3em] font-sans mb-3 text-zinc-300">
          Happier when they are free
        </p>
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif tracking-widest uppercase mb-8">
          Happy Diamonds
        </h1>
        <button className="border border-white text-white px-8 py-3 text-xs font-sans tracking-[0.25em] uppercase hover:bg-white hover:text-black transition-all duration-300">
          Discover Our Collection
        </button>
      </div>

    </section>
  );
}