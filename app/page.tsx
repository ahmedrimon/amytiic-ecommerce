"use client"

import Image from "next/image";

import HeroVideo from './components/HeroVideo';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <div className="w-full">
          <HeroVideo />
        </div>
        
      </main>
    </div>
  );
}
