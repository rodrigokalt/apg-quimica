import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllCategories, getProductsByCategory } from "@/lib/schema";
import { ChevronRight, ArrowLeft, ArrowRight, ShieldCheck, FileText, CheckCircle2 } from "lucide-react";
import { Metadata } from "next";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const categories = getAllCategories();
  return categories.map((cat) => ({
    category: cat.id,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categories = getAllCategories();
  const catMeta = categories.find((c) => c.id === category);

  if (!catMeta) {
    return {
      title: "Category Not Found | APG Química",
    };
  }

  return {
    title: `${catMeta.name} Distributor | APG Química`,
    description: `High-spec ${catMeta.name}. Browse certified products, CAS numbers, and bulk delivery specifications from APG Química.`,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categories = getAllCategories();
  const currentCategory = categories.find((c) => c.id === category);

  if (!currentCategory) {
    notFound();
  }

  const products = getProductsByCategory(category);

  return (
    <div className="min-h-screen bg-slate-50 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-cyan-700 transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/catalog" className="hover:text-cyan-700 transition">
            Catalog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800">{currentCategory.name}</span>
        </nav>

        {/* Category Header */}
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-10 mb-10 shadow-lg border border-slate-800 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="relative z-10 max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
              Chemical Division
            </span>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-white mt-1">
              {currentCategory.name}
            </h1>
            <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
              {currentCategory.description}
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                {products.length} Certified Formulations
              </span>
              <span>•</span>
              <span>Full Lot Traceability & CoA</span>
              <span>•</span>
              <span>Global Port Dispatch</span>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Available Compounds & Specifications
          </h2>
          <Link
            href="/catalog"
            className="text-xs font-semibold text-cyan-700 hover:text-cyan-800 flex items-center gap-1"
          >
            <span>Browse All Divisions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-cyan-600 transition-all flex flex-col justify-between chemical-card-hover group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="font-mono text-xs font-bold text-slate-900 bg-slate-100 border border-slate-200 px-2.5 py-1 rounded-md">
                    CAS {product.casNumber}
                  </span>
                  {product.unNumber && (
                    <span className="text-[11px] font-mono text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                      {product.unNumber}
                    </span>
                  )}
                </div>

                <h3 className="text-base font-bold text-slate-950 group-hover:text-cyan-700 transition">
                  <Link href={`/catalog/${product.category}/${product.slug}`}>
                    {product.name}
                  </Link>
                </h3>

                <div className="mt-2 text-xs font-medium text-cyan-700">
                  {product.purityGrade}
                </div>

                {product.description && (
                  <p className="mt-3 text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {product.description}
                  </p>
                )}

                {/* Applications Pill Preview */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {product.applications.slice(0, 2).map((app, i) => (
                    <span
                      key={i}
                      className="text-[11px] bg-slate-50 text-slate-600 px-2 py-0.5 rounded border border-slate-200 truncate max-w-[200px]"
                    >
                      {app}
                    </span>
                  ))}
                  {product.applications.length > 2 && (
                    <span className="text-[11px] text-slate-400 py-0.5">
                      +{product.applications.length - 2} more
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">{product.id}</span>
                <Link
                  href={`/catalog/${product.category}/${product.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-cyan-700 transition"
                >
                  <span>Full Tech Sheet & RFQ</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
