"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ChemicalProduct, CategoryMeta } from "@/lib/schema";
import { QuoteModal } from "@/components/QuoteModal";
import { Search, Filter, ArrowRight, Beaker, FileText, Send, Check } from "lucide-react";

interface CatalogClientProps {
  products: ChemicalProduct[];
  categories: CategoryMeta[];
}

export function CatalogClient({ products, categories }: CatalogClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [isQuoteOpen, setIsQuoteOpen] = useState(false);

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
    const query = searchQuery.toLowerCase().trim();
    if (!query) return matchesCategory;

    const matchesName = p.name.toLowerCase().includes(query);
    const matchesCas = p.casNumber.toLowerCase().includes(query);
    const matchesFormula = p.formula?.toLowerCase().includes(query);
    const matchesApplications = p.applications.some((app) => app.toLowerCase().includes(query));

    return matchesCategory && (matchesName || matchesCas || matchesFormula || matchesApplications);
  });

  return (
    <div>
      {/* Search & Filter Bar */}
      <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-xs mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search by chemical name, CAS registry number (e.g. 75-05-8), or formula..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 text-sm bg-slate-50 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-600 focus:bg-white transition"
            />
          </div>

          {/* Quick CTA */}
          <button
            type="button"
            onClick={() => setIsQuoteOpen(true)}
            className="px-5 py-3 bg-slate-950 hover:bg-cyan-700 text-white rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-xs transition"
          >
            <Send className="w-4 h-4" />
            <span>Custom Batch RFQ</span>
          </button>
        </div>

        {/* Category Pills */}
        <div className="mt-5 pt-5 border-t border-slate-100 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> Filter Division:
          </span>

          <button
            type="button"
            onClick={() => setSelectedCategory("all")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
              selectedCategory === "all"
                ? "bg-slate-900 text-white shadow-xs"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            All Chemicals ({products.length})
          </button>

          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-cyan-700 text-white shadow-xs"
                  : "bg-slate-100 text-slate-700 hover:bg-slate-200"
              }`}
            >
              {cat.name} ({cat.itemCount})
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <div className="flex items-center justify-between text-xs text-slate-500 mb-4 px-1">
        <span>Showing <strong className="text-slate-800">{filteredProducts.length}</strong> verified chemical formulations</span>
        {searchQuery && (
          <button
            onClick={() => setSearchQuery("")}
            className="text-cyan-700 hover:underline font-medium"
          >
            Clear search filters
          </button>
        )}
      </div>

      {/* Chemical Grid */}
      {filteredProducts.length === 0 ? (
        <div className="bg-white rounded-2xl p-12 text-center border border-slate-200">
          <Beaker className="w-12 h-12 text-slate-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-slate-800">No chemical products match your filter</h3>
          <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
            Try searching with a broader CAS number or chemical alias, or request custom synthesis from our technical team.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("all");
            }}
            className="mt-4 px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-semibold"
          >
            Reset All Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-xl hover:border-[#003366] transition-all flex flex-col justify-between chemical-card-hover group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="cas-number font-mono text-xs font-bold text-[#003366] bg-[#e6f0fa] border border-[#cce0f5] px-2.5 py-1 rounded-md shadow-2xs">
                    CAS {product.casNumber}
                  </span>
                  <span className="text-[11px] font-semibold text-[#003366] bg-slate-100 px-2 py-0.5 rounded">
                    {product.category.replace(/-/g, " ")}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-950 group-hover:text-[#003366] transition">
                  <Link href={`/catalog/${product.category}/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>

                <div className="mt-2 text-xs font-medium text-slate-700 flex items-center gap-1.5">
                  <span className="text-slate-400">Purity: </span>
                  <span className="chemical-badge font-mono font-bold text-[#003366] bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200">
                    {product.purityGrade}
                  </span>
                </div>

                {product.formula && (
                  <div className="mt-1 text-xs font-mono text-slate-500">
                    Formula: <span className="font-mono font-bold text-slate-800">{product.formula}</span>
                  </div>
                )}

                {product.description && (
                  <p className="mt-3 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {product.description}
                  </p>
                )}

                {/* Applications Pill Preview */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.applications.slice(0, 2).map((app, i) => (
                    <span
                      key={i}
                      className="text-[10px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200 truncate max-w-[180px]"
                    >
                      {app}
                    </span>
                  ))}
                  {product.applications.length > 2 && (
                    <span className="text-[10px] text-slate-400 py-0.5">
                      +{product.applications.length - 2}
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="packaging-spec text-xs font-mono font-semibold text-slate-500">{product.id}</span>
                <Link
                  href={`/catalog/${product.category}/${product.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-bold text-[#003366] hover:text-[#00264d] transition"
                >
                  <span>Specifications</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Quote Modal */}
      <QuoteModal isOpen={isQuoteOpen} onOpenChange={setIsQuoteOpen} />
    </div>
  );
}
