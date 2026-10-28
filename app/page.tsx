import Image from "next/image";
import ContactForm from "./ContactForm";
import Effects from "./Effects";
import Header from "./Header";
import Hero, { type Slide } from "./Hero";
import MotionToggle from "./MotionToggle";
import RoomSystemsCarousel, { type RoomSystem } from "./RoomSystemsCarousel";

const d = (s: string) => ({ "--d": s }) as React.CSSProperties;

const groups = [
  {
    title: "Supply and installation",
    img: "/images/img-001.jpg",
    alt: "Blue SDMO generator with its canopy doors open on a concrete plinth",
    items: [
      "Generator procurement and installation",
      "Electrical installation and maintenance",
      "ATS, control panel and changeover systems",
      "Generator automation and synchronization",
    ],
  },
  {
    title: "Service and repair",
    img: "/images/img-006.jpg",
    alt: "White generator canopy with a digital control panel and emergency stop",
    items: [
      "Generator servicing and preventive maintenance",
      "Generator repairs and troubleshooting",
      "Generator management and maintenance",
      "Spare parts supply and replacement",
      "Generator inspection and performance testing",
      "Emergency breakdown response",
    ],
  },
  {
    title: "Noise, heat and exhaust",
    img: "/images/img-003.jpg",
    alt: "Rooftop SDMO generator with an insulated exhaust pipe running overhead",
    items: [
      "Noise management and control",
      "Generator soundproofing",
      "Thermal insulation and lagging",
      "Metal cladding works",
      "Exhaust manifold construction and installation",
      "Exhaust system fabrication and installation",
    ],
  },
];

const slides: Slide[] = [
  {
    label: "Electrical and control systems",
    title: "Reliable power, professionally engineered.",
    text: "Generator supply, installation, servicing and electrical systems for companies, hotels, hospitals, schools and estates.",
    img: "/images/img-002.jpg",
    alt: "Engineer in insulated gloves testing a generator control panel with a multimeter",
    cta: "Request a quote",
    more: "Explore services",
  },
  {
    label: "Installation",
    title: "Generators, supplied and installed.",
    text: "Procurement and installation, with the ATS, control panel and changeover systems that go with them.",
    img: "/images/img-000.jpg",
    alt: "Blue SDMO generator with its canopy doors open on a concrete plinth",
    cta: "Request a quote",
    more: "Installation services",
  },
  {
    label: "Service and repair",
    title: "Servicing, repairs and emergency response.",
    text: "Preventive maintenance, troubleshooting, spare parts and breakdown response for your generators.",
    img: "/images/img-004.jpg",
    alt: "White generator canopy with a digital control panel and emergency stop",
    cta: "Request a quote",
    more: "Service and repair",
  },
  {
    label: "Noise, heat and exhaust",
    title: "Exhaust, insulation and noise control.",
    text: "Exhaust systems, thermal insulation, cladding and soundproofing, fabricated and installed.",
    img: "/images/img-003.jpg",
    alt: "Rooftop SDMO generator with an insulated exhaust pipe running overhead",
    cta: "Request a quote",
    more: "Noise and exhaust",
  },
];

const goals = [
  {
    t: "Reduce downtime",
    p: "Preventive maintenance and emergency breakdown response.",
  },
  {
    t: "Improve generator efficiency",
    p: "Inspection, performance testing, automation and synchronization.",
  },
  {
    t: "Control noise and heat",
    p: "Soundproofing, thermal insulation and lagging.",
  },
  {
    t: "Extend equipment lifespan",
    p: "Servicing, spare parts supply and replacement.",
  },
];

const sectors = [
  "Companies",
  "Industries",
  "Offices",
  "Hotels",
  "Hospitals",
  "Schools",
  "Estates",
];
const values = [
  "Reliability",
  "Professionalism",
  "Quality",
  "Safety",
  "Integrity",
  "Customer satisfaction",
];

const roomSystems: RoomSystem[] = [
  {
    label: "Noise control",
    title: "A quieter environment around essential power.",
    text: "We manage generator noise so the equipment can support your operation without overwhelming the surrounding space.",
    image: "/images/img-002.jpg",
    alt: "Row of soundproofed generator canopies in a workshop",
    services: ["Noise management and control", "Generator soundproofing"],
  },
  {
    label: "Heat management",
    title: "Protect equipment from excess operating heat.",
    text: "Insulation, lagging and cladding help manage heat in generator rooms and support longer equipment life.",
    image: "/images/img-004.jpg",
    alt: "Blue generator with its canopy doors open during installation work",
    services: ["Thermal insulation and lagging", "Metal cladding works"],
  },
  {
    label: "Exhaust systems",
    title: "Built around the realities of your site.",
    text: "We fabricate and install exhaust systems that move heat and emissions safely away from generator spaces.",
    image: "/images/img-003.jpg",
    alt: "Generator installation with an insulated exhaust pipe overhead",
    services: [
      "Exhaust manifold construction",
      "Exhaust system fabrication and installation",
    ],
  },
];

const Arrow = () => (
  <svg
    aria-hidden
    viewBox="0 0 24 24"
    className="h-7 w-7 shrink-0 transition-transform duration-300 group-hover:translate-x-2"
  >
    <path
      d="M4 12h15m-6-6 6 6-6 6"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
    />
  </svg>
);

export default function Home() {
  return (
    <>
      <Header groups={groups.map(({ title, items }) => ({ title, items }))} />
      {/* <Effects /> */}

      <main id="main">
        <Hero slides={slides} />

        <section className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-24">
            <h2 data-reveal className="text-4xl leading-[1.05] sm:text-6xl">
              Power that keeps your operation running.
            </h2>
            <p
              data-reveal
              style={d("0.1s")}
              className="max-w-xl text-lg text-ink/75 lg:pt-3"
            >
              Plus Electro Engineering Services Limited supplies, installs,
              maintains, manages, repairs and services power generators and
              electrical systems for organizations that need stable,
              uninterrupted power.
            </p>
          </div>
          <ul className="mt-20 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map((g, n) => (
              <li
                key={g.t}
                data-reveal
                style={d(`${n * 0.08}s`)}
                className="border-t border-ink/20 pt-5"
              >
                <h3 className="text-xl">{g.t}</h3>
                <p className="mt-2 text-[15px] text-ink/65">{g.p}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="services" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <div
              data-reveal
              className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end"
            >
              <h2 className="text-4xl leading-[1.05] sm:text-6xl">
                Our services
              </h2>
              <p className="max-w-sm text-ink/65">
                Hover or focus a card to see everything we do in that area.
              </p>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {groups.map((g, n) => (
                <article
                  key={g.title}
                  data-reveal
                  style={d(`${n * 0.1}s`)}
                  className="tile group relative flex min-h-[30rem] items-end overflow-hidden bg-ink text-white"
                >
                  <Image
                    src={g.img}
                    alt=""
                    fill
                    sizes="(min-width:1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-ink/10" />
                  <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/60 group-focus-within:bg-ink/60" />
                  <div className="relative w-full p-7">
                    <h3 className="text-3xl leading-tight">
                      <a
                        href="#contact"
                        className="after:absolute after:inset-0"
                      >
                        {g.title}
                      </a>
                    </h3>
                    <ul className="tile-list mt-4 text-[15px] text-white/85">
                      {g.items.map((s) => (
                        <li key={s} className="border-t border-white/20 py-2.5">
                          {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="relative flex min-h-[100svh] snap-start justify-center overflow-hidden text-center text-white">
          <Image
            src="/images/img-002.jpg"
            alt="Row of white soundproofed generator canopies in a workshop"
            fill
            sizes="100vw"
            data-parallax
            className="object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/20 to-ink/70" />
          <div className="relative flex flex-col items-center px-6 pt-[22vh]">
            <h2
              data-reveal
              className="max-w-3xl text-4xl leading-[1.05] sm:text-6xl"
            >
              Quieter, cooler generator rooms.
            </h2>
            <p
              data-reveal
              style={d("0.1s")}
              className="mt-4 max-w-md text-white/85"
            >
              Soundproofing, cladding and thermal insulation control noise and
              heat, and help equipment last longer.
            </p>
            <div
              data-reveal
              style={d("0.2s")}
              className="mt-10 w-full max-w-5xl"
            >
              <RoomSystemsCarousel systems={roomSystems} />
            </div>
            {/* <div
              data-reveal
              style={d("0.3s")}
              className="mt-8 flex flex-col gap-3 sm:flex-row"
            >
              <a href="#contact" className="btn btn-light">
                Request a quote <Arrow />
              </a>
              <a href="#services" className="btn btn-glass">
                See all services
              </a>
            </div> */}
          </div>
        </section>

        <section id="sectors" className="bg-ink py-24 text-white sm:py-32">
          <div className="mx-auto max-w-7xl px-6">
            <h2
              data-reveal
              className="max-w-3xl text-4xl leading-[1.05] sm:text-6xl"
            >
              Built for operations that can&apos;t lose power.
            </h2>
            <ul className="mt-16 grid gap-x-20 border-t border-white/20 md:grid-cols-2">
              {sectors.map((s, n) => (
                <li key={s} data-reveal style={d(`${(n % 4) * 0.06}s`)}>
                  <a
                    href="#contact"
                    className="group flex items-center justify-between border-b border-white/20 py-6 text-3xl transition-colors hover:text-volt sm:text-4xl"
                  >
                    {s}
                    <Arrow />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
          <div className="grid gap-12 md:grid-cols-3 md:gap-0">
            {[
              {
                t: "Our mission",
                p: "To provide dependable, professional and cost-effective electrical and power-generation solutions that support our clients' operations.",
              },
              {
                t: "Our vision",
                p: "To become a trusted provider of electrical and power-generation services through quality, reliability, technical expertise and professionalism.",
              },
            ].map((c, n) => (
              <div
                key={c.t}
                data-reveal
                style={d(`${n * 0.1}s`)}
                className="md:border-l md:border-ink/20 md:px-10 md:first:border-l-0 md:first:pl-0"
              >
                <h2 className="text-3xl">{c.t}</h2>
                <p className="mt-4 text-lg text-ink/75">{c.p}</p>
              </div>
            ))}
            <div
              data-reveal
              style={d("0.2s")}
              className="md:border-l md:border-ink/20 md:px-10"
            >
              <h2 className="text-3xl">Our core values</h2>
              <ul className="mt-4 text-lg text-ink/75">
                {values.map((v) => (
                  <li
                    key={v}
                    className="border-b border-ink/10 py-2 last:border-0"
                  >
                    {v}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-concrete">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:py-32 lg:grid-cols-2 lg:gap-24">
            <div data-reveal>
              <h2 className="text-4xl leading-[1.05] sm:text-6xl">
                Tell us what you need.
              </h2>
              <p className="mt-5 max-w-md text-lg text-ink/75">
                Describe the generator or electrical job, and we will get back
                to you with next steps.
              </p>
            </div>
            <div data-reveal style={d("0.1s")}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink px-6 pb-8 pt-16 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="lg:col-span-2">
              <p className="flex items-center gap-2 text-lg font-semibold">
                <svg
                  aria-hidden
                  viewBox="0 0 24 24"
                  className="h-5 w-5 fill-volt"
                >
                  <path d="M13 2 4 14h6l-1 8 9-12h-6z" />
                </svg>
                Plus Electro Engineering Services Limited
              </p>
              <p className="mt-3 max-w-sm text-sm text-white/70">
                Reliable Power. Professional Engineering. Quality Service.
              </p>
            </div>
            <nav aria-label="Services">
              <p className="text-sm text-white/55">Services</p>
              <ul className="mt-3 space-y-2 text-sm">
                {groups.map((g) => (
                  <li key={g.title}>
                    <a href="#services" className="hover:text-volt">
                      {g.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company">
              <p className="text-sm text-white/55">Company</p>
              <ul className="mt-3 space-y-2 text-sm">
                <li>
                  <a href="#about" className="hover:text-volt">
                    Mission and vision
                  </a>
                </li>
                <li>
                  <a href="#sectors" className="hover:text-volt">
                    Sectors we serve
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-volt">
                    Request a quote
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
            <p className="text-xs text-white/60">
              Site developed by <a href="https://dayve.vercel.app">David</a>
              {/* &copy; {new Date().getFullYear()} Plus Electro Engineering
              Services Limited */}
            </p>
            {/* <MotionToggle /> */}
          </div>
        </div>
      </footer>
    </>
  );
}
