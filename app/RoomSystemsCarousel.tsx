"use client";

import Image from "next/image";
import { useState } from "react";

export type RoomSystem = {
  label: string;
  title: string;
  text: string;
  image: string;
  alt: string;
  services: string[];
};

function ControlArrow({ direction }: { direction: "previous" | "next" }) {
  const previous = direction === "previous";

  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4">
      <path
        d={previous ? "M14 5 7 12l7 7" : "m10 5 7 7-7 7"}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export default function RoomSystemsCarousel({
  systems,
}: {
  systems: RoomSystem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeSystem = systems[activeIndex];
  const previous = () =>
    setActiveIndex((index) => (index - 1 + systems.length) % systems.length);
  const next = () => setActiveIndex((index) => (index + 1) % systems.length);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Generator room systems"
      className="w-full text-left"
    >
      <div className="overflow-hidden border border-white/30 bg-ink/80">
        <article
          key={activeSystem.label}
          role="group"
          aria-roledescription="slide"
          aria-label={`${activeIndex + 1} of ${systems.length}: ${activeSystem.label}`}
          className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
        >
          <div className="relative min-h-56 overflow-hidden md:min-h-[19rem]">
            <Image
              src={activeSystem.image}
              alt={activeSystem.alt}
              fill
              sizes="(min-width: 768px) 38vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent md:bg-gradient-to-r" />
          </div>

          <div className="flex flex-col justify-between p-6 sm:p-8">
            <div>
              <p className="text-sm font-medium text-volt">
                {String(activeIndex + 1).padStart(2, "0")} / {activeSystem.label}
              </p>
              <h3 className="mt-3 max-w-lg text-3xl leading-[1.08] sm:text-4xl">
                {activeSystem.title}
              </h3>
              <p className="mt-4 max-w-xl leading-7 text-white/80">
                {activeSystem.text}
              </p>
            </div>

            <ul className="mt-7 grid gap-2 text-sm text-white/90 sm:grid-cols-2">
              {activeSystem.services.map((service) => (
                <li key={service} className="border-l-2 border-volt pl-3">
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>

      <div className="mt-4 flex items-center justify-between gap-4">
        <div className="flex gap-2" aria-label="Choose a generator room system">
          {systems.map((system, index) => (
            <button
              key={system.label}
              type="button"
              onClick={() => setActiveIndex(index)}
              aria-label={`Show ${system.label}`}
              aria-current={index === activeIndex}
              className={`h-2 rounded-full transition-all ${index === activeIndex ? "w-8 bg-volt" : "w-2 bg-white/45 hover:bg-white"}`}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={previous}
            className="grid h-10 w-10 place-items-center border border-white/35 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            aria-label="Previous generator room system"
          >
            <ControlArrow direction="previous" />
          </button>
          <button
            type="button"
            onClick={next}
            className="grid h-10 w-10 place-items-center border border-white/35 text-white transition-colors hover:border-white hover:bg-white hover:text-ink"
            aria-label="Next generator room system"
          >
            <ControlArrow direction="next" />
          </button>
        </div>
      </div>
    </section>
  );
}
