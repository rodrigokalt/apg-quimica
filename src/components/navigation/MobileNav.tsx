"use client";

import React, { useState } from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, X, ArrowRight, Beaker, Layers, ShieldCheck, FileCheck, PhoneCall } from "lucide-react";
import { QuoteModal } from "@/components/QuoteModal";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const handleOpenQuote = () => {
    setIsOpen(false);
    setIsQuoteOpen(true);
  };

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="flex md:hidden items-center">
        <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
          <Dialog.Trigger asChild>
            <button
              type="button"
              id="mobile-nav-toggle-btn"
              className="p-2 rounded-lg text-slate-200 hover:text-white hover:bg-slate-800/80 transition focus:outline-none"
              aria-label="Open Mobile Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs transition-opacity animate-in fade-in" />
            <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-full max-w-xs sm:max-w-sm bg-white p-6 shadow-2xl flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
              {/* Header */}
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-slate-900 text-cyan-400 flex items-center justify-center font-bold text-sm">
                      APG
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">APG Química</div>
                      <div className="text-[10px] text-slate-500 uppercase tracking-wider">Enterprise Chemicals</div>
                    </div>
                  </div>

                  <Dialog.Close asChild>
                    <button
                      type="button"
                      className="p-2 rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                      aria-label="Close Mobile Menu"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </Dialog.Close>
                </div>

                {/* Mobile Navigation Links */}
                <div className="mt-6 space-y-5">
                  <div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Chemical Divisions
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/catalog/specialty-solvents"
                        onClick={handleNavClick}
                        className="flex items-center gap-3 p-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
                      >
                        <Beaker className="w-4 h-4 text-cyan-600" />
                        <span>Specialty Solvents</span>
                      </Link>
                      <Link
                        href="/catalog/electronic-chemicals"
                        onClick={handleNavClick}
                        className="flex items-center gap-3 p-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
                      >
                        <Layers className="w-4 h-4 text-blue-600" />
                        <span>Electronic Grade Chemicals</span>
                      </Link>
                      <Link
                        href="/catalog/pharma-intermediates"
                        onClick={handleNavClick}
                        className="flex items-center gap-3 p-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
                      >
                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                        <span>Pharma & API Intermediates</span>
                      </Link>
                      <Link
                        href="/catalog/catalysts-reagents"
                        onClick={handleNavClick}
                        className="flex items-center gap-3 p-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-50 transition"
                      >
                        <FileCheck className="w-4 h-4 text-amber-600" />
                        <span>Catalysts & Reagents</span>
                      </Link>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                      Company & Verification
                    </div>
                    <div className="space-y-1">
                      <Link
                        href="/compliance"
                        onClick={handleNavClick}
                        className="block p-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                      >
                        Quality & Compliance (ISO / REACH)
                      </Link>
                      <Link
                        href="/global-supply"
                        onClick={handleNavClick}
                        className="block p-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-50 transition"
                      >
                        Global Logistics & Terminals
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom CTAs: Decoupled & Dedicated Mobile Touch Targets */}
              <div className="pt-6 border-t border-slate-100 space-y-3">
                {/* Secondary outline CTA */}
                <Link
                  href="/catalog"
                  id="mobile-explore-catalog-btn"
                  onClick={handleNavClick}
                  className="w-full py-2.5 px-4 border-2 border-slate-900 hover:border-cyan-700 text-slate-900 hover:text-cyan-700 font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2"
                >
                  <span>Explore Product Catalog</span>
                </Link>

                {/* Primary high-contrast CTA */}
                <button
                  type="button"
                  id="mobile-request-quote-btn"
                  onClick={handleOpenQuote}
                  className="w-full py-2.5 px-4 bg-slate-950 hover:bg-cyan-700 text-white font-semibold text-sm rounded-lg transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Request a Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-2">
                  <PhoneCall className="w-3.5 h-3.5 text-cyan-600" />
                  <span>Direct Desk: +1 (800) 555-CHEM</span>
                </div>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      {/* Reusable Quote Modal for Mobile */}
      <QuoteModal isOpen={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
}
