import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCatalog, getProductBySlug, getProductsByCategory } from "@/lib/schema";
import { ProductDetailClient } from "@/components/ProductDetailClient";
import { ChevronRight, ArrowLeft, Beaker } from "lucide-react";
import { Metadata } from "next";

interface PageProps {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

/**
 * Generate static paths at build time for all catalog products
 */
export async function generateStaticParams() {
  const products = getCatalog();
  return products.map((product) => ({
    category: product.category,
    slug: product.slug,
  }));
}

/**
 * Dynamic metadata for enterprise SEO
 */
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);

  if (!product) {
    return {
      title: "Chemical Product Not Found | APG Química",
    };
  }

  return {
    title: `${product.name} (CAS ${product.casNumber}) | APG Química Distributor`,
    description: `High purity ${product.name} [CAS ${product.casNumber}]. Grade: ${product.purityGrade}. Supplied by APG Química for industrial and research applications.`,
    keywords: [
      product.name,
      product.casNumber,
      product.category,
      product.purityGrade,
      "chemical distributor",
      "bulk chemical supply",
      "APG Química",
    ],
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { category, slug } = await params;
  const product = getProductBySlug(category, slug);

  if (!product) {
    notFound();
  }

  // Get related products in same category (excluding current)
  const related = getProductsByCategory(category)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6 flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-cyan-700 transition">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href="/catalog" className="hover:text-cyan-700 transition">
            Catalog
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <Link href={`/catalog/${product.category}`} className="hover:text-cyan-700 transition capitalize">
            {product.category.replace(/-/g, " ")}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <span className="font-semibold text-slate-800 truncate max-w-xs">{product.name}</span>
        </nav>

        {/* Back Link */}
        <div className="mb-6">
          <Link
            href={`/catalog/${product.category}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-cyan-700 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to {product.category.replace(/-/g, " ")}</span>
          </Link>
        </div>

        {/* Product Details Section */}
        <ProductDetailClient product={product} />

        {/* Related Products in the same category */}
        {related.length > 0 && (
          <div className="mt-16 pt-10 border-t border-slate-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Related Chemicals in {product.category.replace(/-/g, " ")}
                </h3>
                <p className="text-xs text-slate-500">Complementary purity grades and reagents</p>
              </div>
              <Link
                href={`/catalog/${product.category}`}
                className="text-xs font-semibold text-cyan-700 hover:text-cyan-800"
              >
                View Category Portfolio &rarr;
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((item) => (
                <Link
                  key={item.id}
                  href={`/catalog/${item.category}/${item.slug}`}
                  className="group bg-white rounded-xl p-5 border border-slate-200 hover:border-cyan-600 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="font-mono text-xs font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">
                        CAS {item.casNumber}
                      </span>
                      <span className="text-[11px] text-cyan-700 font-semibold">{item.purityGrade.split("(")[0]}</span>
                    </div>
                    <h4 className="font-bold text-sm text-slate-900 group-hover:text-cyan-700 transition">
                      {item.name}
                    </h4>
                    {item.formula && (
                      <div className="text-xs font-mono text-slate-500 mt-1">Formula: {item.formula}</div>
                    )}
                  </div>
                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 group-hover:text-cyan-700">
                    <span>View Specifications</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
