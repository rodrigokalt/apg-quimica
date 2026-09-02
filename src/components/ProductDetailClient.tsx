"use client";

import React, { useState } from "react";
import { ChemicalProduct } from "@/lib/schema";
import { QuoteModal } from "@/components/QuoteModal";
import {
  FileText,
  Copy,
  Check,
  Send,
  Download,
  AlertTriangle,
  Layers,
  Box,
  Thermometer,
  ShieldCheck,
  ExternalLink,
  Award,
} from "lucide-react";

interface ProductDetailClientProps {
  product: ChemicalProduct;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);
  const [copiedCas, setCopiedCas] = useState(false);
  const [sdsDownloading, setSdsDownloading] = useState(false);

  const handleCopyCas = () => {
    navigator.clipboard.writeText(product.casNumber);
    setCopiedCas(true);
    setTimeout(() => setCopiedCas(false), 2000);
  };

  const handleDownloadSds = () => {
    setSdsDownloading(true);
    setTimeout(() => {
      setSdsDownloading(false);
      alert(`Safety Data Sheet (SDS) for ${product.name} [CAS ${product.casNumber}] downloaded.`);
    }, 1000);
  };

  return (
    <>
      <div className="space-y-8">
        {/* Main Product Header Card */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-xs">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-slate-100">
            <div className="flex flex-wrap items-center gap-2.5">
              <span className="px-3 py-1 bg-[#e6f0fa] text-[#003366] font-semibold text-xs rounded-md uppercase tracking-wider border border-[#cce0f5]">
                {product.category.replace(/-/g, " ")}
              </span>

              {/* CAS Registry Badge */}
              <div className="cas-badge cas-number inline-flex items-center gap-1.5 px-3 py-1 bg-[#003366] text-white font-mono text-xs rounded-md shadow-2xs">
                <span className="text-[#99c2eb]">CAS:</span>
                <span className="font-bold tracking-wider">{product.casNumber}</span>
                <button
                  onClick={handleCopyCas}
                  type="button"
                  className="ml-1 p-0.5 hover:text-[#f5a800] transition"
                  title="Copy CAS Number"
                >
                  {copiedCas ? <Check className="w-3.5 h-3.5 text-[#54a81b]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>

              {product.unNumber && (
                <span className="chemical-badge px-2.5 py-1 bg-[#fef9e8] text-[#71460c] font-mono text-xs rounded-md border border-[#fbe28e] font-semibold">
                  {product.unNumber}
                </span>
              )}
            </div>

            <div className="packaging-spec text-xs font-mono text-slate-500">
              SKU: <span className="font-mono font-bold text-slate-800">{product.id}</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left 2 Cols: Details */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
                  {product.name}
                </h1>
                <p className="text-sm font-semibold text-cyan-700 mt-1">
                  Standard Specification: {product.purityGrade}
                </p>
                {product.description && (
                  <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                    {product.description}
                  </p>
                )}
              </div>

              {/* Key Technical Specifications Table */}
              <div className="rounded-xl border border-slate-200 overflow-hidden bg-slate-50/50">
                <div className="bg-slate-100/80 px-4 py-2.5 border-b border-slate-200 font-semibold text-xs uppercase tracking-wider text-slate-700 flex items-center justify-between">
                  <span>Certificate & Physicochemical Parameters</span>
                  <Award className="w-4 h-4 text-cyan-700" />
                </div>
                <div className="divide-y divide-slate-200/80 text-xs sm:text-sm">
                  {product.formula && (
                    <div className="grid grid-cols-2 px-4 py-2.5">
                      <span className="font-medium text-slate-500">Hill Formula</span>
                      <span className="font-mono font-bold text-slate-900">{product.formula}</span>
                    </div>
                  )}
                  {product.molecularWeight && (
                    <div className="grid grid-cols-2 px-4 py-2.5">
                      <span className="font-medium text-slate-500">Molecular Mass</span>
                      <span className="font-mono text-slate-900">{product.molecularWeight}</span>
                    </div>
                  )}
                  <div className="grid grid-cols-2 px-4 py-2.5">
                    <span className="font-medium text-slate-500">Certified Purity Grade</span>
                    <span className="chemical-badge font-mono font-bold text-[#003366]">{product.purityGrade}</span>
                  </div>
                  {product.storageTemp && (
                    <div className="grid grid-cols-2 px-4 py-2.5">
                      <span className="font-medium text-slate-500 flex items-center gap-1">
                        <Thermometer className="w-3.5 h-3.5 text-slate-400" />
                        Storage Condition
                      </span>
                      <span className="text-slate-800">{product.storageTemp}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Verified Industrial Applications */}
              <div>
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3 flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#003366]" />
                  Target Industrial Applications
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {product.applications.map((app, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#54a81b] mt-1.5 shrink-0" />
                      <span className="font-medium">{app}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: RFQ Action Card & SDS Download */}
            <div className="space-y-6">
              {/* Request Quote Box */}
              <div className="bg-[#001933] text-white rounded-2xl p-6 shadow-xl border border-slate-800">
                <div className="flex items-center gap-2 text-[#f5a800] text-xs font-semibold uppercase tracking-wider">
                  <ShieldCheck className="w-4 h-4" />
                  Wholesale Procurement
                </div>
                <h3 className="text-lg font-bold text-white mt-2">
                  Procure {product.name.split(" ")[0]} in Volume
                </h3>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                  Direct factory pricing, Certificate of Analysis (CoA) lot validation, and dedicated export logistics.
                </p>

                <div className="mt-4 pt-4 border-t border-slate-800 text-xs text-slate-300 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Available Packaging:</span>
                    <span className="packaging-spec font-mono font-bold text-[#f5a800]">Lab to IBC Tank</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Lead Time:</span>
                    <span>Ready to Dispatch (48h)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-400">Dispatch Ports:</span>
                    <span>US Gulf / EU / LATAM</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsQuoteOpen(true)}
                  className="mt-6 w-full py-3 px-4 bg-[#f5a800] hover:bg-[#d48e00] text-[#1c1402] font-bold rounded-xl text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  Request a Quote for this Product
                </button>
              </div>

              {/* Safety Data Sheet (SDS) Card */}
              <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-xs">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-red-50 text-red-700 rounded-lg shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-bold text-red-600 uppercase tracking-wider">
                      GHS Compliance Document
                    </div>
                    <h4 className="text-sm font-bold text-slate-900 mt-0.5">
                      Safety Data Sheet (SDS / MSDS)
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Full toxicological, handling, first aid, and transport safety profiles compliant with OSHA / GHS.
                    </p>

                    <button
                      type="button"
                      onClick={handleDownloadSds}
                      disabled={sdsDownloading}
                      className="mt-3 inline-flex items-center gap-2 px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg transition"
                    >
                      <Download className="w-3.5 h-3.5 text-slate-600" />
                      {sdsDownloading ? "Generating PDF..." : "Download Official SDS (PDF)"}
                    </button>
                  </div>
                </div>
              </div>

              {/* Packaging Options */}
              {product.packageSizes && (
                <div className="bg-slate-50 rounded-xl p-5 border border-slate-200">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2.5 flex items-center gap-1.5">
                    <Box className="w-3.5 h-3.5 text-slate-500" />
                    Available Pack Sizes & Specs
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700 font-mono packaging-spec">
                    {product.packageSizes.map((size, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#54a81b] rounded-full" />
                        <span className="font-mono">{size}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* GHS Hazard Statements */}
          {product.hazardStatements && product.hazardStatements.length > 0 && (
            <div className="mt-8 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-2 text-amber-700 text-xs font-bold uppercase tracking-wider mb-3">
                <AlertTriangle className="w-4 h-4" />
                GHS Hazard Statements & Safety Information
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {product.hazardStatements.map((hazard, i) => (
                  <div
                    key={i}
                    className="p-2.5 rounded-lg bg-amber-50/70 border border-amber-200/80 text-xs text-amber-950 font-mono"
                  >
                    {hazard}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Quote modal pre-populated with this chemical */}
      <QuoteModal
        isOpen={isQuoteOpen}
        onOpenChange={setIsQuoteOpen}
        defaultProduct={{
          name: product.name,
          casNumber: product.casNumber,
        }}
      />
    </>
  );
}
