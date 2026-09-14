import React from "react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="px-8 lg:px-16 py-24 border-t border-white/10 flex flex-col items-center text-center mt-auto">
    <div className="w-20 h-20 rounded-full border border-white/20 flex items-center justify-center mb-8 p-3 bg-white/5">
      <img
        src="/ridebox-logo.png"
        alt="RideBox Logo"
        title="RideBox Logo"
        className="w-full h-full object-contain"
      />
    </div>
    <p className="text-sm text-white/50 mb-12">
      © 2026 RideBox Technologies (Pty) Ltd | South Africa
    </p>

    <div className="flex gap-6 mb-16">
      <a
        href="https://www.linkedin.com/company/ridebox-technologies/posts/?feedView=all"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
        aria-label="LinkedIn"
        title="LinkedIn"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      </a>
      <a
        href="https://www.instagram.com/ridebox_technologies/"
        target="_blank"
        rel="noreferrer"
        className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
        aria-label="Instagram"
        title="Instagram"
      >
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      </a>
    </div>

    <div className="flex flex-wrap justify-center gap-8 text-[10px] tracking-widest text-white/40">
      <Link to="/privacy" className="hover:text-white transition-colors" title="Privacy Policy">
        PRIVACY POLICY
      </Link>
      <Link to="/terms" className="hover:text-white transition-colors" title="Terms of Service">
        TERMS OF SERVICE
      </Link>
      <Link to="/popia" className="hover:text-white transition-colors" title="POPIA Notice">
        POPIA NOTICE
      </Link>
      <a
        href="mailto:info@rideboxapp.com"
        className="hover:text-white transition-colors"
        title="Email Us"
      >
        INFO@RIDEBOXAPP.COM
      </a>
    </div>
  </footer>
);

export default Footer;
