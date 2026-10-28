"use client";
import { useEffect, useState } from "react";

export default function MotionToggle() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => { setReduced(document.documentElement.dataset.motion === "reduce"); }, []);
  const toggle = () => {
    const next = !reduced;
    setReduced(next);
    if (next) document.documentElement.dataset.motion = "reduce";
    else delete document.documentElement.dataset.motion;
    try { localStorage.setItem("motion", next ? "reduce" : "full"); } catch {}
  };
  return (
    <button onClick={toggle} aria-pressed={reduced} className="rounded border border-white/30 px-3 py-1.5 text-xs text-white/80 transition-colors hover:bg-white hover:text-ink">
      Reduce motion: {reduced ? "on" : "off"}
    </button>
  );
}
