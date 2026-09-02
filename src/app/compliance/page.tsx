import React from "react";
import Link from "next/link";
import { ShieldCheck, Award, FileCheck, CheckCircle2, ArrowRight, Download } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality, Regulatory & Safety Compliance | APG Química",
  description: "Review APG Química's ISO 9001:2015 certifications, REACH dossiers, cGMP quality protocols, and SDS safety documentation.",
};

export default function CompliancePage() {
  return (
    <div className="min-h-screen bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-md border border-cyan-100">
            Enterprise Quality Systems
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3">
            Quality Assurance & Regulatory Compliance
          </h1>
          <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">
            At APG Química, strict adherence to international chemical directives, environmental standards, and quality management systems governs every drum, tote, and tank we dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-cyan-100 text-cyan-800 flex items-center justify-center mb-4">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">ISO 9001:2015 Certified</h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Our quality management system is audited annually by independent certification bodies to guarantee consistent product conformity, rigorous supplier auditing, and end-to-end trace documentation.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              Certificate Reg: <span className="font-mono font-bold text-slate-800">ISO-9001-APGQ-2024-B</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">REACH & GHS Directives</h2>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              We maintain active EU REACH registration dossiers and adhere to GHS Rev. 9 for safety data sheets, container labeling, toxicological alerts, and secondary containment transport safety.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500">
              ECHA Regulatory Desk: Active Compliance
            </div>
          </div>
        </div>

        <div className="bg-slate-950 text-white rounded-2xl p-8 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white">Need Batch Lot Certificates (CoA) or SDS?</h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xl">
              Enter your purchase order or lot number to retrieve certified analysis records or contact our regulatory team directly.
            </p>
          </div>
          <Link
            href="/catalog"
            className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs rounded-xl transition shrink-0"
          >
            Explore Catalog & Download SDS
          </Link>
        </div>
      </div>
    </div>
  );
}
