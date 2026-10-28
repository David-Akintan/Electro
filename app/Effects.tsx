"use client";
import { useEffect, useRef, useState } from "react";

// Scroll progress bar, parallax photos, reveal-on-scroll and the emergency button.
// One rAF-batched scroll listener drives all of it.
export default function Effects() {
  const bar = useRef<HTMLDivElement>(null);
  const [fab, setFab] = useState(false);

  useEffect(() => {
    const parallax = Array.from(
      document.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let raf = 0;
    const update = () => {
      raf = 0;
      const y = window.scrollY;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (bar.current)
        bar.current.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
      setFab(y > window.innerHeight * 0.7);
      const reduce =
        matchMedia("(prefers-reduced-motion: reduce)").matches ||
        document.documentElement.dataset.motion === "reduce";
      for (const el of parallax) {
        if (reduce) {
          el.style.transform = "";
          continue;
        }
        const box = el.parentElement!.getBoundingClientRect();
        if (box.bottom < 0 || box.top > window.innerHeight) continue;
        const t =
          (box.top + box.height / 2 - window.innerHeight / 2) /
          window.innerHeight;
        el.style.transform = `translate3d(0, ${t * -70}px, 0) scale(1.18)`;
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.setAttribute("data-in", "");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => io.observe(el));
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      io.disconnect();
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div
        ref={bar}
        aria-hidden
        className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left scale-x-0 bg-volt"
      />
      {/* <a
        href="#contact"
        tabIndex={fab ? 0 : -1}
        className={`fab-pulse fixed bottom-5 right-5 z-40 rounded-full bg-volt px-5 py-3 text-sm font-medium text-ink shadow-lg transition-all duration-300 hover:bg-white ${fab ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"}`}
      >
        Request Quote
      </a> */}
    </>
  );
}
