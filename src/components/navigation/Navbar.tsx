import React from "react";
import Link from "next/link";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import { ShieldCheck, Globe2 } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/50 transition-all shadow-lg shadow-black/20">
      {/* Top enterprise regulatory ribbon */}
      <div className="bg-slate-950 text-slate-300 text-[11px] py-1 px-4 sm:px-6 hidden sm:block border-b border-slate-850/60">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
              <ShieldCheck className="w-3.5 h-3.5" />
              ISO 9001:2015 & cGMP Certified Chemical Distribution
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">REACH Authorized • OSHA PSM Compliant</span>
          </div>
          <div className="flex items-center gap-4 text-slate-400">
            <span className="flex items-center gap-1">
              <Globe2 className="w-3.5 h-3.5 text-cyan-400" />
              Global Port Terminals: Houston • Rotterdam • Santos • Singapore
            </span>
            <span className="text-slate-700">|</span>
            <span className="font-mono text-cyan-300">24/7 SDS Emergency Hotline</span>
          </div>
        </div>
      </div>

      {/* Main navigation container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-cyan-400 flex items-center justify-center font-black text-xl tracking-tight shadow-md group-hover:scale-105 transition-transform border border-slate-700/60">
              <span className="relative">
                APG
                <span className="absolute -top-1 -right-1.5 w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              </span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-extrabold tracking-tight text-white font-sans group-hover:text-cyan-400 transition-colors">
                  APG Química
                </span>
                <span className="text-[10px] bg-cyan-950/80 text-cyan-300 font-bold px-1.5 py-0.5 rounded tracking-wide border border-cyan-800/40">
                  GLOBAL
                </span>
              </div>
              <p className="text-[11px] font-medium text-slate-400 tracking-wide">
                Specialty & Industrial Chemical Distribution
              </p>
            </div>
          </Link>

          {/* Desktop Navigation (Decoupled) */}
          <DesktopNav />

          {/* Mobile Navigation (Decoupled) */}
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
