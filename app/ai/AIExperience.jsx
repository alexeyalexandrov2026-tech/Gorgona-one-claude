"use client";

import GorgonaOneAI from '../components/ai/GorgonaOneAI';
import { useAI } from '../components/ai/AIProvider';

// The AI-first experience for the standalone /ai entry point. It presents
// Gorgona One AI as the whole surface (as it would appear when launched from the
// installed "Gorgona One AI" home-screen icon) with immediate access to the
// Discovery Room.
export default function AIExperience() {
  const { openRoom } = useAI();

  return (
    <main className="flex-1">
      <section className="py-12 lg:py-20">
        <div className="text-center">
          <p className="lux-eyebrow justify-center">Gorgona One AI</p>
          <h1 className="lux-display mx-auto mt-5 max-w-3xl text-4xl sm:text-5xl">
            The intelligence layer of the ecosystem
          </h1>
          <p className="lux-lede mx-auto mt-5 max-w-xl">
            Ask by intent, in your language, by voice or text. Gorgona One AI finds the right place across travel, stays,
            yachts, cars, events, dining, shopping and more — you never need to know where it lives.
          </p>
          <div className="mt-7 flex justify-center">
            <button type="button" onClick={openRoom} className="lux-btn">
              Open Discovery Room
            </button>
          </div>
        </div>
        <div className="mt-10">
          <GorgonaOneAI />
        </div>
      </section>
    </main>
  );
}
