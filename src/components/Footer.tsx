import React from "react";
import Link from "next/link";
import { ShieldCheck, Mail, Phone, MapPin, Globe2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Col 1 & 2: Brand & Regulatory */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center font-black text-sm">
                APG
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                APG Química
              </span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Global chemical distribution partner delivering high-compliance specialty solvents, semiconductor grade reagents, and active pharmaceutical intermediates to verified institutions worldwide.
            </p>
            <div className="flex items-center gap-3 pt-2 text-[11px] text-slate-500">
              <span className="flex items-center gap-1 text-slate-300">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                ISO 9001:2015 Registered
              </span>
              <span>•</span>
              <span>REACH Authorized</span>
              <span>•</span>
              <span>cGMP Compliant</span>
            </div>
          </div>

          {/* Col 3: Chemical Divisions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Chemical Divisions
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/catalog/specialty-solvents" className="hover:text-cyan-400 transition">
                  Specialty Solvents (HPLC/MS)
                </Link>
              </li>
              <li>
                <Link href="/catalog/electronic-chemicals" className="hover:text-cyan-400 transition">
                  Electronic Grade (VLSI)
                </Link>
              </li>
              <li>
                <Link href="/catalog/pharma-intermediates" className="hover:text-cyan-400 transition">
                  Pharma & API Intermediates
                </Link>
              </li>
              <li>
                <Link href="/catalog/catalysts-reagents" className="hover:text-cyan-400 transition">
                  Catalysts & Analytical Reagents
                </Link>
              </li>
              <li>
                <Link href="/catalog" className="text-cyan-400 hover:underline font-semibold pt-1 inline-block">
                  Full Catalog & CAS Lookup &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Quality & Compliance */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Quality & Regulatory
            </h4>
            <ul className="space-y-2">
              <li>
                <Link href="/compliance" className="hover:text-cyan-400 transition">
                  Certificate of Analysis (CoA)
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-cyan-400 transition">
                  Safety Data Sheets (SDS / MSDS)
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-cyan-400 transition">
                  REACH & GHS Classifications
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-cyan-400 transition">
                  Conflict Minerals Declarations
                </Link>
              </li>
              <li>
                <Link href="/compliance" className="hover:text-cyan-400 transition">
                  Export Control Compliance
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 5: Global Terminals & Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Logistics & Commercial Desk
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <span>Houston Terminal • Rotterdam • Santos Port</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>procurement@apgquimica.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>+1 (800) 555-CHEM / +55 (11) 3450-8000</span>
              </div>
              <div className="pt-2 text-[11px] text-amber-400/90 font-mono">
                24/7 CHEMTREC Hotline: 1-800-424-9300
              </div>
            </div>
          </div>
        </div>

        {/* Legal & Copyright */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© {new Date().getFullYear()} APG Química S.A. All rights reserved. Registered Enterprise Chemical Distributor.</p>
          <div className="flex items-center gap-4">
            <Link href="/compliance" className="hover:text-slate-300 transition">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/compliance" className="hover:text-slate-300 transition">
              Terms of Chemical Supply
            </Link>
            <span>•</span>
            <Link href="/compliance" className="hover:text-slate-300 transition">
              Hazmat Transport Safety
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
