import React, { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

/* ─── scroll-reveal hook ─── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

/* ─── Reusable placeholder / image box ─── */
const KioskImage = ({ src, alt }) => (
  <div className="relative w-full h-full bg-white/5 border border-white/10 overflow-hidden group">
    <img
      src={src}
      alt={alt}
      title={alt}
      className="kiosk-render absolute inset-0 w-full h-full object-contain transition-all duration-700"
    />
    <span className="absolute bottom-4 left-0 right-0 text-center text-[10px] tracking-widest text-white/25 uppercase select-none">
      Concept Render
    </span>
  </div>
);

/* ─── HERO — same 2-col structure as Home hero ─── */
const Hero = () => {
  const [ref, inView] = useInView(0.05);
  return (
    <section
      ref={ref}
      className="px-8 lg:px-16 py-16 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-white/10"
      style={{
        transition: "opacity 0.8s, transform 0.8s",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(28px)",
      }}
    >
      {/* Left col — text */}
      <div>
        <div className="text-xs font-bold tracking-[0.15em] text-white/50 mb-8 border-b border-white/20 inline-block pb-2">
          THE HARDWARE
        </div>
        <h1 className="hero-title mb-6">Engineered For South Africa</h1>
        <p className="text-lg md:text-xl text-white/70 max-w-xl leading-relaxed">
          This concept design is intended to be durable, energy resilient and
          accessible. The proposed kiosk is designed to keep taking bookings
          through load shedding and local outages.
        </p>
      </div>
      {/* Right col — intentionally empty (mirrors wireframe) */}
      <div />
    </section>
  );
};

/* ─── Feature list ─── */
const FeatureList = ({ items }) => (
  <ul className="space-y-3 mt-8">
    {items.map((f, i) => (
      <li key={i} className="flex items-start gap-4 text-sm text-white/70">
        <span className="mt-[9px] shrink-0 w-6 h-px bg-white/40" />
        {f}
      </li>
    ))}
  </ul>
);

/* ─── PHASE 01 — text LEFT, image RIGHT ─── */
const Phase01 = () => {
  const [ref, inView] = useInView();
  return (
    <section
      ref={ref}
      className="px-8 lg:px-16 py-32 lg:py-48 border-b border-white/10"
      style={{
        transition: "opacity 0.8s 0.05s, transform 0.8s 0.05s",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left — text */}
        <div>
          <div className="text-[10px] font-bold tracking-[0.2em] text-white/40 mb-4 border-b border-white/15 inline-block pb-1">
            THE FIRST UNIT
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase leading-none mb-6">
            Self-Service
            <br />
            Kiosk
          </h2>
          <p className="text-white/60 leading-relaxed">
            This is the first-unit concept design. It is intended to be compact
            and tough, to sit in busy areas like transport nodes, campuses and
            shopping-centre entrances, and to give people a safe way to book a
            ride without taking up much pavement.
          </p>
          <FeatureList
            items={[
              "Touchscreen e-hailing interface",
              "Connection to licensed e-hailing operators",
              "Driver, vehicle and registration details designed to be shown before travel",
              "SOS panic button",
              "Solar Powered with battery backup",
            ]}
          />
        </div>

        {/* Right — front and back views */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-[1360px] sm:h-[680px]">
          <KioskImage
            src="/Front of Kiosk.png"
            alt="RideBox self-service kiosk concept render, front view"
          />
          <KioskImage
            src="/Back of Kiosk.png"
            alt="RideBox self-service kiosk concept render, back view"
          />
        </div>
      </div>
    </section>
  );
};

/* ─── TECH SPECS ─── */
const specs = [
  { label: "Power Source", value: "Solar + Battery Backup" },
  { label: "Power System", value: "Solar-Assisted, Grid-Tied" },
  { label: "Languages", value: "South Africa's Official Languages" },
  { label: "Operators", value: "Licensed E-Hailing Operators" },
  { label: "Safety", value: "SOS Button + Booking Details" },
  { label: "Connectivity", value: "4G LTE + Offline Mode" },
];

const TechSpecs = () => {
  const [ref, inView] = useInView();
  return (
    <section
      ref={ref}
      className="px-8 lg:px-16 py-24"
      style={{
        transition: "opacity 0.8s, transform 0.8s",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(40px)",
      }}
    >
      <div className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-12 border-b border-white/20 inline-block pb-2">
        TECHNICAL SPECIFICATIONS
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border-t border-l border-white/10">
        {specs.map((s, i) => (
          <div
            key={i}
            className="border-b border-r border-white/10 px-8 py-10 hover:bg-white/[0.04] transition-colors"
          >
            <div className="text-[10px] tracking-[0.2em] text-white/40 uppercase mb-3">
              {s.label}
            </div>
            <div className="text-xl font-bold text-white">{s.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

/* ─── PAGE ─── */
const Kiosk = () => (
  <main>
    <Helmet>
      <title>Hardware | RIDEBOX Kiosks</title>
      <meta name="description" content="Explore the RideBox kiosk hardware. A compact, tough, solar-powered self-service kiosk connecting commuters to licensed e-hailing operators." />
    </Helmet>
    <Hero />
    <Phase01 />
    <TechSpecs />
  </main>
);

export default Kiosk;
