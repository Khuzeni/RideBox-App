import React, { useState } from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `RideBox contact form - ${formData.get("inquiryType")}`;
    const body = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Organisation: ${formData.get("organisation") || "Not provided"}`,
      `Inquiry type: ${formData.get("inquiryType")}`,
      "",
      "Message:",
      formData.get("message"),
    ].join("\n");
    window.location.href = `mailto:zikalaladumisane@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };
  return (
    <main>
      <Helmet>
        <title>Contact Us | RIDEBOX</title>
        <meta name="description" content="Get in touch with RideBox to host a kiosk, advertise on our screens, or integrate your e-hailing operation." />
      </Helmet>
      <section className="px-8 lg:px-16 py-16 lg:py-28 border-b border-white/10">
        <div className="eyebrow mb-6">LET&apos;S TALK</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div>
            <h1 className="page-title">
              GET IN
              <br />
              TOUCH
            </h1>
            <p className="mt-8 max-w-sm text-sm leading-relaxed text-white/55">
              Host a RideBox unit at your transport node, campus, forecourt or
              precinct. Advertise on the screens. Or talk to us about
              integrating your e-hailing operation.
            </p>
          </div>
          <div className="contact-info flex flex-col gap-8 text-sm">
            <Info label="LOCATION">Cape Town, Western Cape</Info>
            <Info label="STAGE">Pre-Launch - First Unit in Preparation</Info>
            <Info label="PARTNERSHIPS">
              <a href="mailto:info@rideboxapp.com" title="Email Partnerships">
                info@rideboxapp.com
              </a>
            </Info>
            <Info label="GENERAL">
              <a href="mailto:info@rideboxapp.com" title="Email General">info@rideboxapp.com</a>
            </Info>
          </div>
        </div>
      </section>
      <section className="contact-form-section px-8 lg:px-16 py-12 lg:py-20">
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[.7fr_1.3fr] gap-12 lg:gap-24">
          <div>
            <div className="eyebrow mb-5">SEND A MESSAGE</div>
            <p className="text-sm text-white/45">
              Tell us which of those applies to you.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <Field label="NAME" name="name" required />
              <Field label="EMAIL" name="email" type="email" required />
            </div>
            <Field label="ORGANISATION" name="organisation" />
            <label className="form-field">
              INQUIRY TYPE
              <select name="inquiryType" defaultValue="General Inquiry">
                <option>General Inquiry</option>
                <option>Host a Kiosk</option>
                <option>Advertising</option>
                <option>E-Hailing Operator</option>
                <option>Press &amp; Media</option>
              </select>
            </label>
            <label className="form-field">
              MESSAGE
              <textarea name="message" required rows="4" />
            </label>
            <button className="button-primary" type="submit">
              {sent ? "MESSAGE SENT" : "SEND MESSAGE"} <span>-&gt;</span>
            </button>
            {sent && (
              <span className="ml-4 text-xs text-white/50">
                Your email app has been opened.
              </span>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}

function Info({ label, children }) {
  return (
    <div className="min-w-0">
      <div className="eyebrow mb-3">{label}</div>
      <div className="text-white/70 break-words">{children}</div>
    </div>
  );
}
function Field({ label, name, type = "text", required = false }) {
  return (
    <label className="form-field">
      {label}
      <input name={name} type={type} required={required} />
    </label>
  );
}
