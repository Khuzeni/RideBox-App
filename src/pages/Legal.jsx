import React from "react";

const legalContent = {
  privacy: {
    eyebrow: "LEGAL",
    title: "PRIVACY POLICY",
    intro:
      "RideBox respects your privacy and is committed to protecting the personal information you share with us.",
    sections: [
      [
        "Information we collect",
        "We collect information that is necessary to respond to enquiries, provide RideBox services, support bookings, and improve our platform. This may include your name, contact details, booking information, device information, and messages you send to us.",
      ],
      [
        "How we use information",
        "We use personal information to provide and support our services, communicate with you, maintain safety and security, improve our products, and meet our legal obligations.",
      ],
      [
        "How we protect information",
        "We take reasonable technical and organisational measures to keep personal information secure and limit access to people who need it for legitimate RideBox purposes.",
      ],
      [
        "Sharing information",
        "We do not sell your personal information. We only share information when needed to provide a requested service, work with an authorised service provider, protect safety, or comply with the law.",
      ],
      [
        "Your choices",
        "You may ask us to access, correct, or delete your personal information, subject to applicable legal requirements. Contact us at info@rideboxapp.com to make a request.",
      ],
    ],
  },
  terms: {
    eyebrow: "LEGAL",
    title: "TERMS OF SERVICE",
    intro:
      "These terms describe the conditions for using RideBox websites, kiosks, applications, and related services.",
    sections: [
      [
        "Using RideBox",
        "You agree to use RideBox services lawfully, honestly, and in a way that does not compromise the safety, privacy, or access of other users.",
      ],
      [
        "Bookings and fares",
        "Ride details, availability, and fares are presented through the relevant RideBox service. You are responsible for reviewing the details of a booking before confirming it.",
      ],
      [
        "Safety and conduct",
        "Users must follow applicable laws and reasonable safety instructions. RideBox may restrict or suspend access where conduct creates a safety, security, or operational risk.",
      ],
      [
        "Service availability",
        "RideBox is developing solar-powered access hubs and related mobility services for South African conditions. Services, locations, features, and availability may change as the platform and pilot programme develop.",
      ],
      [
        "Contact",
        "Questions about these terms can be sent to info@rideboxapp.com.",
      ],
    ],
  },
  popia: {
    eyebrow: "LEGAL",
    title: "POPIA NOTICE",
    intro:
      "This notice explains how RideBox approaches personal information in line with South Africa's Protection of Personal Information Act (POPIA).",
    sections: [
      [
        "Responsible party",
        "RideBox is responsible for personal information processed through its websites, kiosks, applications, and related services.",
      ],
      [
        "Purpose of processing",
        "We process only the information reasonably needed to operate and support the service, communicate with users, maintain safety, improve the platform, and comply with legal obligations.",
      ],
      [
        "Your rights",
        "Subject to POPIA and other applicable law, you may request access to your personal information, ask for correction or deletion, object to certain processing, or withdraw consent where processing is based on consent.",
      ],
      [
        "Security and retention",
        "RideBox uses reasonable safeguards to protect personal information and keeps it only for as long as reasonably necessary for the purpose for which it was collected or as required by law.",
      ],
      [
        "Requests and complaints",
        "To exercise your rights or ask a POPIA question, contact info@rideboxapp.com. You may also contact the Information Regulator of South Africa if you are not satisfied with how a concern is handled.",
      ],
    ],
  },
};

export default function Legal({ type }) {
  const page = legalContent[type];

  return (
    <main>
      <section className="px-8 lg:px-16 py-16 lg:py-28 border-b border-white/10">
        <div className="eyebrow mb-6">{page.eyebrow}</div>
        <h1 className="page-title">{page.title}</h1>
      </section>
      <section className="px-8 lg:px-16 py-12 lg:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10 border border-amber-300/30 bg-amber-300/[.06] px-5 py-4 text-sm leading-relaxed text-amber-100/80">
            <strong className="block mb-1 text-amber-100">
              DOCUMENT UNDER REVIEW
            </strong>
            This document currently reflects RideBox&apos;s policies and
            practices, but is still under review by our legal team. It may be
            subject to updates and adjustments in the future.
          </div>
          <p className="text-base md:text-lg leading-relaxed text-white/70 mb-12">
            {page.intro}
          </p>
          <div className="border-t border-white/10">
            {page.sections.map(([heading, text]) => (
              <article key={heading} className="py-8 border-b border-white/10">
                <h2 className="text-lg font-bold mb-3">{heading}</h2>
                <p className="text-sm leading-relaxed text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
