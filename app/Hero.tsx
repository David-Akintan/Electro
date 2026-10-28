"use client";
import Image from "next/image";
import { useState } from "react";

export type Slide = {
  label: string;
  title: string;
  text: string;
  img: string;
  alt: string;
  cta: string;
  more: string;
};

// Numbered slideshow with a pause control. Each slide's progress bar is the autoplay timer:
// when its CSS animation ends the next slide starts. With reduced motion the animation never runs, so nothing auto-advances.
export default function Hero({ slides }: { slides: Slide[] }) {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const n = slides.length;

  return (
    <section
      id="top"
      aria-roledescription="carousel"
      aria-label="Featured services"
      className="relative h-[100svh] min-h-[640px] snap-start overflow-hidden bg-ink text-white"
    >
      {slides.map((s, k) => {
        const Tag = k === 0 ? "h1" : "h2";
        const on = k === i;
        return (
          <div
            key={s.label}
            role="group"
            aria-roledescription="slide"
            aria-label={`${k + 1} of ${n}`}
            aria-hidden={!on}
            className={`absolute inset-0 transition-opacity duration-1000 ${on ? "opacity-100" : "pointer-events-none opacity-0"}`}
          >
            <Image
              src={s.img}
              alt={on ? s.alt : ""}
              fill
              priority={k === 0}
              sizes="100vw"
              className={`object-cover ${on ? "kenburns" : ""}`}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/35 to-ink/35" />
            <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-40 sm:pb-44">
              <div
                className={on ? "fade-up" : "opacity-0"}
                style={{ "--d": "0.15s" } as React.CSSProperties}
              >
                <p className="text-sm text-white/80">{s.label}</p>
                <Tag className="mt-3 max-w-3xl text-[2.6rem] leading-[1.04] sm:text-7xl">
                  {s.title}
                </Tag>
                <p className="mt-5 max-w-xl text-base text-white/85 sm:text-lg">
                  {s.text}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#contact"
                    tabIndex={on ? 0 : -1}
                    className="btn btn-light gap-4"
                  >
                    {s.cta}
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        d="M4 20 L20 4 M8 4 H20 V16"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.75"
                      />
                    </svg>
                  </a>
                  <a
                    href="#services"
                    tabIndex={on ? 0 : -1}
                    className="btn btn-glass"
                  >
                    {s.more}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      <div className="absolute inset-x-0 bottom-0 z-10">
        <div className="mx-auto flex max-w-7xl items-end gap-3 px-6 pb-8 sm:gap-6">
          {slides.map((s, k) => (
            <button
              key={s.label}
              onClick={() => setI(k)}
              aria-label={`Show slide ${k + 1}: ${s.label}`}
              aria-current={k === i}
              className="group flex-1 text-left"
            >
              <span
                className={`flex gap-2 pb-3 text-sm transition-opacity ${k === i ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}
              >
                <span className="tabular-nums">
                  {String(k + 1).padStart(2, "0")}
                </span>
                <span className="hidden sm:inline">{s.label}</span>
              </span>
              <span className="block h-[2px] overflow-hidden bg-white/30">
                {k === i ? (
                  <span
                    className="bar-fill"
                    style={{
                      animationPlayState: paused ? "paused" : "running",
                    }}
                    onAnimationEnd={() => setI((k + 1) % n)}
                  />
                ) : (
                  <span
                    className={`block h-full bg-white ${k < i ? "w-full" : "w-0"}`}
                  />
                )}
              </span>
            </button>
          ))}
          <button
            onClick={() => setPaused(!paused)}
            aria-label={paused ? "Play slideshow" : "Pause slideshow"}
            className="mb-[-6px] grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/40 transition-colors hover:bg-white hover:text-ink"
          >
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-4 w-4 fill-current"
            >
              {paused ? (
                <path d="M8 5v14l11-7z" />
              ) : (
                <path d="M7 5h4v14H7zm6 0h4v14h-4z" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
