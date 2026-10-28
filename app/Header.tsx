"use client";
import { useEffect, useRef, useState } from "react";

type Group = { title: string; items: string[] };
type Key = "services" | "company";

const company = [
  { label: "Our mission", href: "#about" },
  { label: "Our vision", href: "#about" },
  { label: "Core values", href: "#about" },
];

export default function Header({ groups }: { groups: Group[] }) {
  const [open, setOpen] = useState<Key | null>(null);
  const [menu, setMenu] = useState(false);
  const [solid, setSolid] = useState(false);
  const timer = useRef(0);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(null);
        setMenu(false);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);
  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "";
  }, [menu]);

  const light = open !== null || menu;
  const enter = (k: Key) => {
    clearTimeout(timer.current);
    setOpen(k);
  };
  const leave = () => {
    timer.current = window.setTimeout(() => setOpen(null), 140);
  };
  const close = () => {
    setOpen(null);
    setMenu(false);
  };

  const trigger =
    "flex items-center gap-1 rounded px-3 py-2 text-sm font-medium transition-colors";
  const hover = light ? "hover:bg-ink/5" : "hover:bg-white/15";

  const Chevron = ({ up }: { up: boolean }) => (
    <svg
      aria-hidden
      viewBox="0 0 12 12"
      className={`h-3 w-3 transition-transform duration-200 ${up ? "rotate-180" : ""}`}
    >
      <path
        d="m2 4 4 4 4-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${light ? "bg-white text-ink" : solid ? "bg-ink/85 text-white backdrop-blur" : "bg-transparent text-white"}`}
    >
      <div className="mx-auto grid h-16 max-w-7xl grid-cols-[1fr_auto_1fr] items-center justify-between flex px-6 dis">
        <a
          href="#top"
          className="flex items-center  gap-1 text-base font-semibold tracking-tight"
        >
          <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-volt">
            <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
          </svg>
          electro
        </a>

        <nav aria-label="Main" className="hidden items-center md:flex ">
          {(["services", "company"] as Key[]).map((k) => (
            <div
              key={k}
              onMouseEnter={() => enter(k)}
              onMouseLeave={leave}
              onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget as Node))
                  setOpen(null);
              }}
            >
              <button
                className={`${trigger} ${hover}`}
                aria-expanded={open === k}
                aria-controls={`panel-${k}`}
                onClick={() => setOpen(open === k ? null : k)}
              >
                {k === "services" ? "Services" : "Company"}
                <Chevron up={open === k} />
              </button>
              {open === k && (
                <div
                  id={`panel-${k}`}
                  className="drop absolute inset-x-0 top-full border-t border-ink/10 bg-white text-ink shadow-xl"
                >
                  <div className="mx-auto max-w-7xl px-6 py-10">
                    {k === "services" ? (
                      <div className="grid grid-cols-3 gap-10">
                        {groups.map((g) => (
                          <div key={g.title}>
                            <p className="text-sm text-ink/55">{g.title}</p>
                            <ul className="mt-4 space-y-1">
                              {g.items.map((s) => (
                                <li key={s}>
                                  <a
                                    href="#services"
                                    onClick={close}
                                    className="-mx-2 block rounded px-2 py-1.5 text-[15px] transition-colors hover:bg-ink/5"
                                  >
                                    {s}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ul className="max-w-sm space-y-1">
                        {company.map((c) => (
                          <li key={c.label}>
                            <a
                              href={c.href}
                              onClick={close}
                              className="-mx-2 block rounded px-2 py-2 text-2xl font-medium transition-colors hover:bg-ink/5"
                            >
                              {c.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
          ))}
          <a href="#sectors" onClick={close} className={`${trigger} ${hover}`}>
            Sectors
          </a>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <a
            href="#contact"
            onClick={close}
            className="hidden rounded bg-volt px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-ink hover:text-white sm:block"
          >
            Request a quote
          </a>
          <button
            className={`${trigger} ${hover} md:hidden`}
            aria-expanded={menu}
            aria-controls="mobile-menu"
            onClick={() => setMenu(!menu)}
          >
            {menu ? (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
            {/* <button
              type="button"
              aria-label="Open menu"
              aria-expanded="false"
              aria-controls="mobile-navigation-drawer"
              className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-default bg-surface text-fg hover:border-[var(--color-foreground)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-foreground)] focus-visible:ring-offset-2"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button> */}
          </button>
        </div>
      </div>

      {menu && (
        <div
          id="mobile-menu"
          className="drop fixed inset-x-0 bottom-0 top-16 overflow-y-auto bg-white px-6 pb-12 pt-4 text-ink md:hidden"
        >
          <details className="border-b border-ink/10">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium">
              Services <Chevron up={false} />
            </summary>
            <div className="pb-4">
              {groups.map((g) => (
                <div key={g.title} className="mb-4">
                  <p className="text-sm text-ink/55">{g.title}</p>
                  <ul className="mt-2">
                    {g.items.map((s) => (
                      <li key={s}>
                        <a
                          href="#services"
                          onClick={close}
                          className="block py-1.5 text-[15px]"
                        >
                          {s}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </details>
          <details className="border-b border-ink/10">
            <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-2xl font-medium">
              Company <Chevron up={false} />
            </summary>
            <ul className="pb-4">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    onClick={close}
                    className="block py-1.5 text-[15px]"
                  >
                    {c.label}
                  </a>
                </li>
              ))}
            </ul>
          </details>
          <a
            href="#sectors"
            onClick={close}
            className="block border-b border-ink/10 py-4 text-2xl font-medium"
          >
            Sectors
          </a>
          <a
            href="#contact"
            onClick={close}
            className="btn btn-dark mt-8 w-full"
          >
            Request a quote
          </a>
        </div>
      )}
    </header>
  );
}
