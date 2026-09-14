import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

const services = [
  [
    "01",
    "E-Hailing Access",
    "Self-service kiosks designed to connect commuters to licensed e-hailing services without a smartphone or data bundles",
  ],
  [
    "02",
    "Advertising",
    "Advertising space on each unit is designed to place double-sided, high-brightness digital screens at eye level, in places where people are already waiting. Space will become available once the kiosks launch.",
  ],
  [
    "03",
    "Secure Booking",
    "Bookings are routed to licensed e-hailing operators, who screen and licence their own drivers. The total, including the RideBox service charge, is shown before you confirm.",
  ],
  [
    "04",
    "Power Resilience",
    "Each unit is designed with a solar array and battery storage to keep taking bookings through load shedding and local outages.",
  ],
  [
    "05",
    "For Drivers",
    "RideBox does not employ drivers or run a driver network. The kiosk is designed to send additional trip requests to drivers already registered with licensed e-hailing operators.",
  ],
  [
    "06",
    "Site Hosting",
    "We are in discussion with transport companies, fuel forecourts, academic institutions and property owners about hosting RideBox units.",
  ],
];

const faqGroups = [
  {
    title: "Riders",
    items: [
      [
        "How do I book a ride with RideBox?",
        "Find a RideBox unit at a transport node, campus, shopping centre, fuel forecourt or airport. The kiosk is designed to let you choose a destination, select how you want to pay and see the total before you confirm. Your booking is then routed to a licensed e-hailing operator. No personal smartphone, data or bank card is required.",
      ],
      [
        "What happens during load shedding?",
        "Each unit is designed with a solar array and lithium battery storage, sized to keep the kiosk taking bookings through load shedding and local outages. The unit is grid-tied: solar and battery carry it through interruptions rather than replacing mains supply.",
      ],
      [
        "What will a ride cost?",
        "The fare is set by the e-hailing operator fulfilling your trip. RideBox adds a service charge for the booking. The kiosk shows the total before you confirm, and RideBox does not set fares or apply its own surge pricing.",
      ],
      [
        "What languages will RideBox support?",
        "The kiosk is designed to support South Africa's official languages. We are not publishing a fixed language count while the interface is still in development.",
      ],
      [
        "How is passenger safety supported?",
        "RideBox does not employ drivers or screen them. Each ride is fulfilled by a driver registered with a licensed e-hailing operator and subject to that operator's own vetting, licensing and compliance requirements. The kiosk is designed to show the driver, vehicle and registration number returned by the operator, and to carry an SOS button.",
      ],
      [
        "How can I pay?",
        "The kiosk is designed to accept card, contactless tap, mobile money and QR-based digital wallets. RideBox plans to sell vouchers for cash through retail partners near each site. The kiosk itself handles no cash.",
      ],
    ],
  },
  {
    title: "Drivers",
    items: [
      [
        "How do I become a RideBox driver?",
        "RideBox does not employ drivers or run a driver network. The kiosk is designed to send additional trip requests to drivers already registered with a licensed e-hailing operator. Contact us if you represent an operator and want to discuss integration.",
      ],
      [
        "How much do drivers earn per trip?",
        "RideBox does not set operator fares or publish commercial terms. Drivers should ask the licensed e-hailing operator they are registered with about fares, earnings and deductions.",
      ],
      [
        "Do drivers get training or support from RideBox?",
        "RideBox does not provide driver onboarding or operate driver support. Those responsibilities remain with the licensed e-hailing operator.",
      ],
    ],
  },
  {
    title: "Site Hosts, Advertisers and Operators",
    items: [
      [
        "Can I host a RideBox unit?",
        "We are in discussion with transport companies, fuel forecourts, academic institutions and property owners about hosting our first unit. Use the contact form and select Host a Kiosk.",
      ],
      [
        "Can I advertise on a RideBox unit?",
        "Each unit is designed to carry double-sided high-brightness digital screens at eye level, in places where people are already waiting. We are building our first advertiser relationships now.",
      ],
      [
        "Can an e-hailing operator integrate with RideBox?",
        "We are in conversation with licensed e-hailing operators about integrating their booking systems into RideBox kiosks. Use the contact form and select E-Hailing Operator.",
      ],
    ],
  },
  {
    title: "General",
    items: [
      [
        "Where can I find a RideBox kiosk?",
        "No RideBox kiosk is operating yet. We are preparing our first deployment and will announce the site once the host and operator agreements are concluded.",
      ],
      [
        "Does RideBox operate in my city?",
        "No RideBox kiosk is operating yet. The first deployment metro will be determined by which licensed operator integrates first.",
      ],
      [
        "How can I provide feedback or report an issue?",
        "Use the contact form on the website or email info@rideboxapp.com. Since no kiosk is operating yet, please describe the question, proposal or issue as clearly as possible.",
      ],
      [
        "Still have questions?",
        "Email info@rideboxapp.com or use the contact form. Tell us whether you are a site host, advertiser, licensed e-hailing operator or another partner.",
      ],
    ],
  },
];

export default function Services() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main>
      <Helmet>
        <title>Services | RIDEBOX</title>
        <meta name="description" content="Discover RideBox services including e-hailing access, digital advertising, and site hosting for our solar-powered kiosks." />
      </Helmet>
      <section className="px-8 lg:px-16 py-16 lg:py-28 border-b border-white/10">
        <div className="eyebrow mb-6">WHAT WE OFFER</div>
        <h1 className="page-title">
          THE RIDEBOX
          <br />
          PLATFORM
        </h1>
      </section>
      <section className="px-8 lg:px-16">
        {services.map(([number, title, description]) => (
          <article
            key={number}
            className="grid grid-cols-1 lg:grid-cols-[.9fr_1.2fr_.6fr] gap-8 lg:gap-16 py-10 lg:py-14 border-b border-white/10"
          >
            <div>
              <div className="eyebrow mb-5">{number}</div>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
                {title}
              </h2>
            </div>
            <p className="text-sm md:text-base text-white/55 leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="text-[10px] uppercase tracking-[.16em] text-white/35 self-end">
              RideBox service
            </div>
          </article>
        ))}
      </section>
      <section className="px-8 lg:px-16 py-20 lg:py-28 border-t border-white/10">
        <div className="max-w-5xl mx-auto">
          <div className="eyebrow mb-6 text-center">RIDEBOX FAQ</div>
          <h2 className="page-title mb-16 text-center">
            YOUR QUESTIONS
            <br />
            ANSWERED
          </h2>
          <div className="max-w-4xl mx-auto text-left">
            {faqGroups.map((group) => (
              <div key={group.title} className="mb-14 last:mb-0">
                <h3 className="text-xs font-bold tracking-[0.2em] text-white/50 mb-4">
                  {group.title.toUpperCase()}
                </h3>
                <div className="border-t border-white/10">
                  {group.items.map(([question, answer]) => (
                    <details
                      key={question}
                      className="border-b border-white/10 group"
                      open={openFaq === question}
                    >
                      <summary 
                        className="flex cursor-pointer list-none items-center justify-between gap-8 py-6 text-base font-bold text-white/85 [&::-webkit-details-marker]:hidden"
                        onClick={(e) => {
                          e.preventDefault();
                          setOpenFaq(openFaq === question ? null : question);
                        }}
                      >
                        {question}
                        <span className="text-xl font-normal text-white/40 transition-transform group-open:rotate-45">
                          +
                        </span>
                      </summary>
                      <p className="max-w-3xl pb-6 text-sm leading-relaxed text-white/55">
                        {Array.isArray(answer) ? answer[0] : answer}
                      </p>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
