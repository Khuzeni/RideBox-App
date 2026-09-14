import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-[70vh] px-8 py-20 text-center border-b border-white/10">
      <Helmet>
        <title>Page Not Found | RIDEBOX</title>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="eyebrow mb-6 text-white/50">404 ERROR</div>
      <h1 className="page-title mb-8">
        PAGE NOT
        <br />
        FOUND
      </h1>
      <p className="max-w-md text-sm leading-relaxed text-white/55 mb-12">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link
        to="/"
        className="bg-white text-black font-bold text-xs tracking-[0.2em] py-4 px-8 hover:bg-white/90 transition-colors uppercase inline-flex items-center"
      >
        RETURN TO HOME
      </Link>
    </main>
  );
}
