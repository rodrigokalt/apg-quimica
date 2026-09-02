import React from "react";
import { getCatalog, getAllCategories } from "@/lib/schema";
import { CatalogClient } from "@/components/CatalogClient";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chemical Product Catalog | APG Química Distributor",
  description:
    "Explore our complete enterprise inventory of specialty solvents, semiconductor grade chemicals, active pharmaceutical intermediates, and catalysts. CAS numbers and CoA certificates available.",
};

export default function CatalogPage() {
  const products = getCatalog();
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-md border border-cyan-100">
            Enterprise Chemical Portfolio
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight mt-3">
            Product Catalog & CAS Registry
          </h1>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl">
            Browse our global distribution portfolio of verified chemical compounds. All products feature full CoA traceability, REACH/OSHA documentation, and secure bulk logistics dispatch.
          </p>
        </div>

        {/* Client filter & search UI */}
        <CatalogClient products={products} categories={categories} />
      </div>
    </div>
  );
}
