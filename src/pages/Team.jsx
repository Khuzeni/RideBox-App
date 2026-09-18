import React from "react";
import { Helmet } from "react-helmet-async";

const people = [
  [
    "Regan",
    "PROJECT MANAGER",
    "As our dedicated Project Manager, Regan is responsible for meticulously managing our deployment timelines and overseeing critical technical vendor partnerships to ensure timely kiosk installations.",
    "regan@rideboxapp.com",
    "/RideBox Team Photos/Regan.jpeg",
  ],
  [
    "Jonathan",
    "SUPERVISOR",
    "Jonathan supervises operations, bridging company strategy and the practical work of getting the first kiosk specified, built and installed.",
    "jonathan@rideboxapp.com",
    "/RideBox Team Photos/Jonathan.jpeg",
  ],
  [
    "Tebogo Pii",
    "WEB DEVELOPER",
    "Tebogo designs, develops, and publishes the complete web platform for RideBox, delivering a seamless digital experience from concept to launch.",
    "tebogo@rideboxapp.com",
    "/RideBox Team Photos/Tebogo.jpg",
  ],
  [
    "Kyle",
    "HEAD OF MARKETING",
    "As Head of Marketing, Kyle is the driving force behind the RideBox brand identity. He manages all public communications, partnership outreach, and user acquisition strategies.",
    "kyle@rideboxapp.com",
    "/RideBox Team Photos/Kyle.jpeg",
  ],

];

const founders = [
  [
    "Dumisane Zikalala",
    "CO-FOUNDER & TECH LEAD",
    "Soweto, GP",
    "Born in Soweto, Dumisane overcame early environmental challenges to eventually graduate from the Cape Peninsula University of Technology. He co-founded RideBox with a clear vision to leverage modern technology for measurable social good, focusing on sustainable and accessible infrastructure.",
    "dumisane.zikalala@rideboxapp.com",
    "/RideBox Team Photos/Dumisani.jpeg",
  ],
  [
    "Alulutho Mbangela",
    "CO-FOUNDER & STRATEGY",
    "Port Elizabeth, EC",
    "Born in KwaZakhele, eBhayi. Built RideBox while studying at Cape Peninsula University of Technology (CPUT) and is currently completing his final year. Focused on bridging access gaps in transport, payments, and connectivity.",
    "alulutho@rideboxapp.com",
    "/RideBox Team Photos/Alulutho.jpeg",
  ],
];

const Portrait = ({ src, alt, contain = false }) => (
  <div className="relative aspect-square border border-white/10 bg-white/[.03] overflow-hidden">
    {src ? (
      <img
        src={src}
        alt={alt}
        title={alt}
        className={`absolute inset-0 w-full h-full ${contain ? "object-contain object-center" : "object-cover"}`}
      />
    ) : (
      <span className="absolute inset-0 grid place-items-center text-[10px] uppercase tracking-[.2em] text-white/20">
        Team Photo
      </span>
    )}
  </div>
);

export default function Team() {
  return (
    <main>
      <Helmet>
        <title>Our Team | RIDEBOX</title>
        <meta name="description" content="Meet the team behind RideBox, building access infrastructure for licensed e-hailing services in South Africa." />
      </Helmet>
      <section className="px-8 lg:px-16 py-16 lg:py-28 border-b border-white/10">
        <div className="eyebrow mb-6">OUR PEOPLE</div>
        <h1 className="page-title">
          THE TEAM
          <br />
          BEHIND RIDEBOX
        </h1>
      </section>
      <section className="px-8 lg:px-16 pt-12 lg:pt-16 pb-8 lg:pb-10 border-b border-white/10">
        <div className="max-w-6xl mx-auto eyebrow mb-8">CO-FOUNDERS</div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 border border-white/10">
          {founders.map(([name, role, location, text, email, image]) => (
            <article
              key={name}
              className="border-b md:border-b-0 md:border-r last:border-r-0 border-white/10"
            >
              <Portrait src={image} alt={`${name} portrait`} contain />
              <div className="p-6 lg:p-8">
                <div className="eyebrow mb-2">{role}</div>
                <h2 className="text-2xl font-bold mb-1">{name}</h2>
                <div className="text-xs text-white/25 mb-5">{location}</div>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {text}
                </p>
                <a
                  href={`mailto:${email}`}
                  title={`Email ${name}`}
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  {email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="px-8 lg:px-16 pt-12 lg:pt-16 pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto eyebrow mb-8">THE CREW</div>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 border border-white/10">
          {people.map(([name, role, text, email, image]) => (
            <article
              key={name}
              className="border-b sm:border-r sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0 border-white/10"
            >
              <Portrait src={image} alt={`${name} portrait`} />
              <div className="p-6 lg:p-8">
                <div className="eyebrow mb-2">{role}</div>
                <h2 className="text-2xl font-bold mb-1">{name}</h2>
                <div className="text-xs text-white/25 mb-5">Cape Town, WC</div>
                <p className="text-sm text-white/50 leading-relaxed mb-6">
                  {text}
                </p>
                <a
                  href={`mailto:${email}`}
                  title={`Email ${name}`}
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  {email}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
