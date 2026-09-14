import React from "react";
import { Helmet } from "react-helmet-async";

const values = [
  {
    number: "01",
    title: "Safety First",
    text: "Every ride should feel secure. Our infrastructure is designed around visibility, verification, and support.",
  },
  {
    number: "02",
    title: "Energy Independence",
    text: "Solar-powered kiosks keep access open when the grid goes down and reduce our footprint while doing it.",
  },
  {
    number: "03",
    title: "Community Impact",
    text: "We build with the places we serve, creating practical access and opportunity where it matters most.",
  },
  {
    number: "04",
    title: "Radical Accessibility",
    text: "No smartphone, data bundle, or technical confidence should be a barrier to getting home safely.",
  },
];

const About = () => (
  <main>
    <Helmet>
      <title>About Us | RIDEBOX</title>
      <meta name="description" content="Learn about RideBox's mission to deliver safe, affordable, and energy-independent e-hailing access to every South African." />
    </Helmet>
    <section className="about-intro px-8 lg:px-16 py-16 lg:py-28 border-b border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
      <div className="flex flex-col">
        <div className="eyebrow mb-6">OUR STORY</div>
        <h1 className="page-title mb-12">
          WHO WE ARE &amp;
          <br />
          WHAT WE STAND FOR
        </h1>
        <p className="max-w-xl text-sm md:text-base leading-relaxed text-white/60">
          RideBox started from a simple observation: getting a ride in South
          Africa quietly assumes you are carrying a smartphone with data bundles loaded. The people who are not carrying those things
          are often the same people with the fewest safe alternatives when it
          gets dark. Two founders, a graduate and a final-year student at the
          Cape Peninsula University of Technology, decided to move that
          requirement off the person and into the infrastructure. Instead of
          trying to put a smartphone in every hand, RideBox puts the screen, the
          connection and the payment terminal on the pavement, and connects
          people to the licensed operators already driving past them.
        </p>
        <p className="mt-8 max-w-xs text-[10px] leading-relaxed text-white/35">
          Founded by CPUT students. First unit in preparation.
        </p>
      </div>
      <div className="flex justify-center lg:justify-end">
        <img
          src="/Logos/RideboxLogo_1000%20X%201000.png"
          alt="RideBox logo"
          className="w-56 h-56 lg:w-96 lg:h-96 object-contain"
        />
      </div>
    </section>

    <section className="about-principles grid grid-cols-1 sm:grid-cols-2 gap-4 px-8 lg:px-16 py-12 lg:py-16 border-b border-white/10">
      <article className="border border-white/10 bg-white/[.025] px-6 lg:px-8 py-8 lg:py-10">
        <div className="eyebrow mb-5">MISSION</div>
        <p className="text-base md:text-lg leading-relaxed text-white/80">
          To deliver safe, affordable, and energy-independent e-hailing access
          to every South African, ensuring that a lack of smartphone access,
          data, or power never leaves you stranded.
        </p>
      </article>
      <article className="border border-white/10 bg-white/[.025] px-6 lg:px-8 py-8 lg:py-10">
        <div className="eyebrow mb-5">VISION</div>
        <p className="text-base md:text-lg leading-relaxed text-white/80">
          A South Africa where clean, connected mobility is a right, not a
          privilege. Powered entirely by renewable energy.
        </p>
      </article>
    </section>

    <section className="px-8 lg:px-16 py-16 lg:py-24">
      <div className="eyebrow mb-10">CORE VALUES</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-white/10">
        {values.map((value) => (
          <article
            key={value.number}
            className="border-b sm:border-r last:border-r-0 border-white/10 px-0 sm:px-6 lg:px-5 py-8 first:sm:pl-0"
          >
            <div className="text-xs text-white/35 font-mono mb-8">
              {value.number}
            </div>
            <h2 className="text-lg font-bold mb-3">{value.title}</h2>
            <p className="text-sm leading-relaxed text-white/50">
              {value.text}
            </p>
          </article>
        ))}
      </div>
    </section>
  </main>
);

export default About;
