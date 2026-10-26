"use client";

import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PRODUCTS = [
  {
    id: "1",
    collection: "HAPPY DIAMONDS ICONS",
    title: "PENDANT, ETHICAL WHITE GOLD, DIAMONDS",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    collection: "HAPPY DIAMONDS ICONS",
    title: "PENDANT, ETHICAL YELLOW GOLD, DIAMONDS",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    collection: "HAPPY DIAMONDS ICONS",
    title: "PENDANT, ETHICAL WHITE GOLD, DIAMONDS",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "4",
    collection: "HAPPY DIAMONDS ICONS",
    title: "BANGLE, ETHICAL YELLOW GOLD, DIAMONDS",
    image: "https://images.unsplash.com/photo-1611591475824-286153be30dd?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "5",
    collection: "HAPPY DIAMONDS ICONS",
    title: "PENDANT, ETHICAL ROSE GOLD, DIAMONDS",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "6",
    collection: "HAPPY DIAMONDS ICONS",
    title: "EARRINGS, ETHICAL ROSE GOLD, DIAMONDS",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800",
  },
];

export default function ProductCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = useCallback((api) => {
    const progress = Math.max(0, Math.min(1, api.scrollProgress()));
    setScrollProgress(progress * 100);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onScroll(emblaApi);
    emblaApi.on("scroll", onScroll);
    emblaApi.on("reInit", onScroll);
  }, [emblaApi, onScroll]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white text-zinc-900 py-20 w-full relative select-none">
      {/* Full width container with subtle padding for arrows */}
      <div className="w-full px-8 md:px-16 relative">
        
        {/* Carousel Viewport */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {PRODUCTS.map((product) => (
              <div
                key={product.id}
                className="flex-[0_0_100%] sm:flex-[0_0_calc(50%-12px)] lg:flex-[0_0_calc(25%-18px)] min-w-0"
              >
                {/* Product Card Container */}
                <div className="group relative flex flex-col items-center bg-white cursor-pointer h-full">
                  
                  {/* Image Box with Soft Luxury Neutral Background */}
                  <div className="relative w-full aspect-square bg-[#f8f8f6] flex items-center justify-center p-8 mb-6 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-contain mix-blend-multiply transform group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>

                  {/* Product Typography */}
                  <div className="flex flex-col items-center text-center px-2 flex-grow w-full">
                    <h3 className="font-serif text-[12px] tracking-[0.25em] uppercase text-zinc-900 mb-2 font-medium">
                      {product.collection}
                    </h3>
                    <div className="w-8 h-[1px] bg-zinc-300 mb-3" />
                    <p className="font-sans text-[10px] tracking-[0.15em] text-zinc-500 uppercase leading-relaxed max-w-[260px] mb-6">
                      {product.title}
                    </p>
                  </div>

                  {/* Discover Button (Appears on Hover) */}
                  <div className="w-full mt-auto pt-2">
                    <button className="w-full bg-black text-white py-3.5 text-[10px] font-sans tracking-[0.3em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-zinc-800">
                      Discover
                    </button>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Side Navigation Arrows */}
        <button
          onClick={scrollPrev}
          className="absolute left-2 lg:left-4 top-[38%] -translate-y-1/2 bg-white border border-zinc-200 text-zinc-700 p-3 shadow-md hover:bg-black hover:text-white transition-all duration-300 z-10 hidden md:flex items-center justify-center rounded-full"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-5 h-5 stroke-[1.5]" />
        </button>

        <button
          onClick={scrollNext}
          className="absolute right-2 lg:right-4 top-[38%] -translate-y-1/2 bg-white border border-zinc-200 text-zinc-700 p-3 shadow-md hover:bg-black hover:text-white transition-all duration-300 z-10 hidden md:flex items-center justify-center rounded-full"
          aria-label="Next slide"
        >
          <ChevronRight className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Bottom Interactive Scroll Progress Bar */}
        <div className="mt-16 w-full max-w-sm mx-auto flex items-center justify-center">
          <div className="w-full h-[2px] bg-zinc-200 relative overflow-hidden rounded-full">
            <div
              className="absolute top-0 bottom-0 bg-zinc-900 transition-all duration-75 ease-out rounded-full"
              style={{
                width: "25%",
                left: `${scrollProgress * 0.75}%`,
              }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}