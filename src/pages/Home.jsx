import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Hero = () => (
  <section className="px-8 lg:px-16 py-16 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
      <div className="text-xs font-bold tracking-[0.15em] text-white/50 mb-8 border-b border-white/20 inline-block pb-2">
        PRE-LAUNCH - FIRST UNIT IN PREPARATION
      </div>
      <h1 className="hero-title mb-6">RIDEBOX</h1>
      <p className="text-lg md:text-xl text-white/70 mb-10 max-w-xl leading-relaxed">
        Solar-assisted self-service kiosks connecting commuters to licensed
        e-hailing services without a smartphone or data bundles.
      </p>
      <div className="flex flex-col sm:flex-row gap-6">
        <Link
          to="/kiosk"
          className="bg-white text-black text-center font-bold text-sm tracking-widest py-4 px-8 hover:bg-white/90 transition-colors"
        >
          EXPLORE THE KIOSK
        </Link>
        <Link
          to="/contact"
          className="border border-white/30 text-white text-center font-bold text-sm tracking-widest py-4 px-8 hover:bg-white/10 transition-colors"
        >
          GET IN TOUCH
        </Link>
      </div>
    </div>
    <div className="w-full aspect-video bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center">
      <iframe
        className="absolute inset-0 w-full h-full"
        src="https://www.youtube.com/embed/O2RltgcBMiQ"
        title="Ridebox Video Presentation"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </section>
);

const KioskPreview = () => (
  <section className="px-8 lg:px-16 py-24 border-t border-white/10">
    <div className="mb-12">
      <div className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 border-b border-white/20 inline-block pb-2">
        THE FIRST UNIT
      </div>
      <h2 className="text-3xl md:text-5xl font-black uppercase leading-none">
        RIDEBOX KIOSK<br />CONCEPT
      </h2>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-white/10 mb-8">
      {[
        { i: 1, src: "/Front of Kiosk.png" },
        { i: 2, src: "/Back of Kiosk.png" },
      ].map(({ i, src }) => (
        <div
          key={i}
          className="aspect-square flex items-center justify-center border-b md:border-b-0 md:border-r last:border-r-0 border-white/10 bg-white/5 relative overflow-hidden group"
        >
          <img
            src={src}
            alt={`RideBox kiosk concept render ${i}`}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent"></div>
          <span className="text-xs tracking-widest text-white uppercase relative z-10 font-medium opacity-0 group-hover:opacity-100 transition-opacity">
            PREVIEW {i}
          </span>
        </div>
      ))}
    </div>
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
      <p className="text-sm text-white/60">
        Concept renders. Final unit design is in development with our
        manufacturing partner.
      </p>
      <Link
        to="/kiosk"
        className="text-xs font-bold tracking-[0.2em] hover:text-white/70 transition-colors flex items-center gap-2"
      >
        VIEW HARDWARE <span>&rarr;</span>
      </Link>
    </div>
  </section>
);

const Advertising = () => (
  <section className="px-8 lg:px-16 py-28 lg:py-36 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-end">
    <div>
      <div className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 border-b border-white/20 inline-block pb-2">
        ADVERTISING
      </div>
      <h2 className="text-4xl md:text-6xl font-black uppercase leading-none">
        Put your brand
        <br />
        in the queue.
      </h2>
    </div>
    <div className="flex flex-col gap-8 lg:pb-1">
      <p className="max-w-xl text-lg leading-relaxed text-white/60">
        Reach commuters on high-brightness digital screens in the places where
        they are already waiting. Tell us about your brand and register your
        interest in upcoming RideBox advertising opportunities.
      </p>
      <Link
        to="/contact"
        className="text-xs font-bold tracking-[0.2em] hover:text-white/70 transition-colors flex items-center gap-2"
      >
        CONTACT US ABOUT ADVERTISING <span>&rarr;</span>
      </Link>
    </div>
  </section>
);

const ServicesPreview = () => (
  <section className="px-8 lg:px-16 py-20 lg:py-28 border-t border-white/10">
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
      <div>
        <div className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-6 border-b border-white/20 inline-block pb-2">
          WHAT WE OFFER
        </div>
        <h2 className="text-3xl md:text-5xl font-black uppercase leading-none">
          Services designed
          <br />
          around access.
        </h2>
      </div>
      <Link
        to="/services"
        className="text-xs font-bold tracking-[0.2em] hover:text-white/70 transition-colors flex items-center gap-2"
      >
        VIEW ALL SERVICES <span>&rarr;</span>
      </Link>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-t border-white/10">
      {[
        [
          "01",
          "E-Hailing Access",
          "Book through a kiosk without a smartphone or data bundles",
        ],
        [
          "02",
          "Advertising",
          "Register interest in digital advertising space for when kiosks launch.",
        ],
        [
          "03",
          "Secure Booking",
          "See the total before you confirm, including the RideBox service charge.",
        ],
        [
          "04",
          "Site Hosting",
          "Host a unit at a transport node, campus, forecourt or precinct.",
        ],
      ].map(([number, title, description]) => (
        <article
          key={number}
          className="border-b lg:border-r last:lg:border-r-0 border-white/10 px-0 sm:px-6 lg:px-5 py-8 first:sm:pl-0"
        >
          <div className="text-xs text-white/35 font-mono mb-8">{number}</div>
          <h3 className="text-lg font-bold mb-3">{title}</h3>
          <p className="text-sm leading-relaxed text-white/50">{description}</p>
        </article>
      ))}
    </div>
  </section>
);

const Mission = () => (
  <section className="px-8 lg:px-16 py-32 lg:py-40 border-t border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32">
    <div>
      <div className="text-[10px] font-bold tracking-[0.2em] text-white/50 mb-8 border-b border-white/20 inline-block pb-2">
        OUR MISSION
      </div>
      <h2 className="text-4xl md:text-5xl font-medium leading-tight text-white/90">
        Access to a ride, without a smartphone.
      </h2>
    </div>
    <div className="flex flex-col justify-center gap-8">
      <p className="text-lg text-white/60 leading-relaxed">
        RideBox builds access infrastructure for licensed e-hailing services,
        putting the screen, connection and payment terminal on the pavement for
        people who are not carrying a smartphone, data or a bank card.
      </p>
      <div>
        <Link
          to="/about"
          className="text-xs font-bold tracking-[0.2em] hover:text-white/70 transition-colors flex items-center gap-2 uppercase"
        >
          READ OUR STORY <span>&rarr;</span>
        </Link>
      </div>
    </div>
  </section>
);

const MeetTheTeam = () => (
  <section className="px-8 lg:px-16 py-20 lg:py-28 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-10">
    <div>
      <div className="eyebrow mb-4">THE PEOPLE</div>
      <h2 className="text-3xl md:text-4xl font-bold">MEET THE TEAM</h2>
    </div>
    <Link
      to="/team"
      className="text-xs font-bold tracking-[0.2em] hover:text-white/70 transition-colors flex items-center gap-2"
    >
      MEET THE TEAM <span>&rarr;</span>
    </Link>
  </section>
);

const Home = () => {
  return (
    <main>
      <Helmet>
        <title>RIDEBOX | Kiosks For E-hailing</title>
        <meta name="description" content="RideBox Technologies builds solar-assisted self-service kiosks that connect commuters to licensed e-hailing services without a smartphone, data or a bank card." />
      </Helmet>
      <Hero />
      <KioskPreview />
      <ServicesPreview />
      <Advertising />
      <Mission />
      <MeetTheTeam />
    </main>
  );
};

export default Home;
