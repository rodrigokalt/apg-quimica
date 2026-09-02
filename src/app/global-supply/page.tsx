import React from "react";
import Link from "next/link";
import { Globe2, Truck, ShieldCheck, ArrowRight, Anchor } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Global Chemical Logistics & Maritime Terminals | APG Química",
  description: "Learn about APG Química's chemical distribution infrastructure spanning port terminals in Houston, Rotterdam, Santos, and Singapore.",
};

export default function GlobalSupplyPage() {
  const terminals = [
    {
      city: "Houston, Texas (USA)",
      port: "Port of Houston Chemical Terminal",
      capabilities: "Bulk solvent tank farm, drumming lines, railcar transloading, North American dispatch.",
    },
    {
      city: "Rotterdam (Netherlands)",
      port: "Port of Rotterdam Botlek Hub",
      capabilities: "European distribution, REACH bonded warehouse, cryogenic & cold-chain storage.",
    },
    {
      city: "Santos / São Paulo (Brazil)",
      port: "Port of Santos Maritime Facility",
      capabilities: "Latin America regional distribution, IBC decanting, Mercosur regulatory customs clearance.",
    },
    {
      city: "Singapore (Jurong Island)",
      port: "Jurong Island Petrochemical Hub",
      capabilities: "Asia-Pacific semiconductor ultra-pure storage, cleanroom repackaging.",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-md border border-cyan-100">
            Supply Chain Infrastructure
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3">
            Global Logistics & Chemical Terminals
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            Operating specialized bulk liquid storage, dry warehousing, and cleanroom repackaging at primary global maritime gateways to ensure uncompromised chemical purity and guaranteed lead times.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {terminals.map((term, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-slate-900 text-cyan-400 rounded-lg">
                  <Anchor className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-base font-bold text-slate-900">{term.city}</h2>
                  <div className="text-xs text-cyan-700 font-medium">{term.port}</div>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed mt-2">
                {term.capabilities}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 text-white rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg font-bold">Have Specific Packaging or Freight Requirements?</h3>
            <p className="text-xs text-slate-400 mt-1">
              Our dangerous goods logistics experts manage ISO-tanks, returnable canisters, and custom delivery routes.
            </p>
          </div>
          <Link
            href="/catalog"
            className="px-5 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-bold rounded-lg transition"
          >
            Explore Chemical Inventory
          </Link>
        </div>
      </div>
    </div>
  );
}
