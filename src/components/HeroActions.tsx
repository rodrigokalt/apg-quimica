"use client";

import React, { useState } from "react";
import Link from "next/link";
import { QuoteModal } from "@/components/QuoteModal";

export function HeroActions() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
        {/* Primary Action: Request a Quote with modal trigger */}
        <button
          type="button"
          id="hero-request-quote-btn"
          onClick={() => setIsQuoteOpen(true)}
          className="px-6 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-sm rounded-xl transition shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/25 flex items-center justify-center gap-2 group cursor-pointer"
        >
          <span>Request a Quote →</span>
        </button>

        {/* Secondary Action: Explore Product Catalog linking to /catalog */}
        <Link
          href="/catalog"
          id="hero-explore-catalog-btn"
          className="px-6 py-3.5 bg-slate-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-cyan-400/50 font-semibold text-sm rounded-xl transition flex items-center justify-center gap-2"
        >
          <span>Explore Product Catalog</span>
        </Link>
      </div>

      {/* Quote Request Modal */}
      <QuoteModal isOpen={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
}
