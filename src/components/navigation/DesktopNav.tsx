"use client";

import React, { useState } from "react";
import Link from "next/link";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ChevronDown, Beaker, ShieldCheck, ArrowRight, FileCheck, Layers } from "lucide-react";
import { QuoteModal } from "@/components/QuoteModal";

export function DesktopNav() {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex items-center gap-6" aria-label="Desktop Navigation">
        {/* Navigation Links */}
        <div className="flex items-center gap-5 text-sm font-medium text-slate-300">
          {/* Catalog Categories Dropdown using Radix UI */}
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <button
                className="flex items-center gap-1.5 py-2 hover:text-cyan-400 text-slate-200 transition focus:outline-none cursor-pointer"
                aria-label="Chemical Catalog Menu"
              >
                <span>Chemical Categories</span>
                <ChevronDown className="w-4 h-4 text-slate-400" />
              </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                align="start"
                sideOffset={12}
                className="z-50 w-72 rounded-xl bg-slate-900/95 backdrop-blur-xl p-2.5 shadow-2xl border border-slate-800 text-slate-200 animate-in fade-in-50 zoom-in-95"
              >
                <div className="px-2.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Core Divisions
                </div>

                <DropdownMenu.Item asChild>
                  <Link
                    href="/catalog/specialty-solvents"
                    className="flex items-start gap-3 rounded-lg p-2 hover:bg-slate-800/80 transition cursor-pointer group"
                  >
                    <div className="p-1.5 bg-cyan-950/80 text-cyan-400 border border-cyan-800/30 rounded-md group-hover:bg-cyan-900/60 transition">
                      <Beaker className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-cyan-300 transition">
                        Specialty Solvents
                      </div>
                      <div className="text-xs text-slate-400">HPLC, LC-MS & Anhydrous</div>
                    </div>
                  </Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item asChild>
                  <Link
                    href="/catalog/electronic-chemicals"
                    className="flex items-start gap-3 rounded-lg p-2 hover:bg-slate-800/80 transition cursor-pointer group"
                  >
                    <div className="p-1.5 bg-blue-950/80 text-blue-400 border border-blue-800/30 rounded-md group-hover:bg-blue-900/60 transition">
                      <Layers className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-blue-300 transition">
                        Electronic Grade
                      </div>
                      <div className="text-xs text-slate-400">VLSI & semiconductor grade</div>
                    </div>
                  </Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item asChild>
                  <Link
                    href="/catalog/pharma-intermediates"
                    className="flex items-start gap-3 rounded-lg p-2 hover:bg-slate-800/80 transition cursor-pointer group"
                  >
                    <div className="p-1.5 bg-emerald-950/80 text-emerald-400 border border-emerald-800/30 rounded-md group-hover:bg-emerald-900/60 transition">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-emerald-300 transition">
                        Pharma Intermediates
                      </div>
                      <div className="text-xs text-slate-400">API synthesis & protected reagents</div>
                    </div>
                  </Link>
                </DropdownMenu.Item>

                <DropdownMenu.Item asChild>
                  <Link
                    href="/catalog/catalysts-reagents"
                    className="flex items-start gap-3 rounded-lg p-2 hover:bg-slate-800/80 transition cursor-pointer group"
                  >
                    <div className="p-1.5 bg-amber-950/80 text-amber-400 border border-amber-800/30 rounded-md group-hover:bg-amber-900/60 transition">
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-white group-hover:text-amber-300 transition">
                        Catalysts & Reagents
                      </div>
                      <div className="text-xs text-slate-400">Precious metals & Lewis acids</div>
                    </div>
                  </Link>
                </DropdownMenu.Item>

                <div className="mt-1 pt-1.5 border-t border-slate-800 px-2 pb-1">
                  <Link
                    href="/catalog"
                    className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center justify-between"
                  >
                    <span>View all products & CAS numbers</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>

          <Link href="/compliance" className="hover:text-cyan-400 transition py-2 text-slate-300">
            Compliance & Standards
          </Link>
          <Link href="/global-supply" className="hover:text-cyan-400 transition py-2 text-slate-300">
            Global Supply Chain
          </Link>
        </div>

        {/* Action CTAs */}
        <div className="flex items-center gap-3 pl-2">
          {/* Secondary outline CTA: "Explore Product Catalog" */}
          <Link
            href="/catalog"
            id="desktop-explore-catalog-btn"
            className="px-4 py-2 border border-slate-700 hover:border-cyan-400/80 text-slate-200 hover:text-cyan-300 font-semibold text-sm rounded-lg transition-all flex items-center gap-1.5 bg-slate-900/60 hover:bg-slate-900/90 shadow-2xs"
          >
            <span>Explore Product Catalog</span>
          </Link>

          {/* Primary high-contrast CTA: "Request a Quote" */}
          <button
            type="button"
            id="desktop-request-quote-btn"
            onClick={() => setIsQuoteOpen(true)}
            className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-teal-400 hover:from-cyan-400 hover:to-teal-300 text-slate-950 font-bold text-sm rounded-lg transition-all shadow-md shadow-cyan-950/40 hover:shadow-cyan-500/20 cursor-pointer flex items-center gap-1.5"
          >
            <span>Request a Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </nav>

      {/* Quote Request Modal */}
      <QuoteModal isOpen={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </>
  );
}
