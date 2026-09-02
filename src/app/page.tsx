import React from "react";
import Link from "next/link";
import { getAllCategories, getCatalog } from "@/lib/schema";
import { MolecularHeroScene } from "@/components/MolecularHeroScene";
import { HeroActions } from "@/components/HeroActions";
import {
  ShieldCheck,
  Beaker,
  Layers,
  FileCheck,
  ArrowRight,
  Globe2,
  CheckCircle2,
  Lock,
  Search,
  Truck,
  FlaskConical,
  Award,
} from "lucide-react";

export default function HomePage() {
  const categories = getAllCategories();
  const featuredProducts = getCatalog().slice(0, 6);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative isolate bg-[#020617] text-white overflow-hidden py-16 lg:py-24 border-b border-slate-800">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Left Column (w-full lg:w-1/2): Headline, copy, CTA buttons, and stat metrics */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-700/80 text-xs font-semibold text-cyan-400 mb-6 w-fit">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                <span>Enterprise Distribution Network • ISO 9001:2015 Certified</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
                Precision Chemistry. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">
                  Global Compliance.
                </span>{" "}
                Reliable Supply.
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-xl">
                <strong>APG Química</strong> is an enterprise distributor of ultra-high purity solvents, electronic semiconductor reagents, and pharmaceutical intermediates for advanced industrial synthesis.
              </p>

              {/* Quick Actions (Primary: Quote Modal, Secondary: Catalog) */}
              <HeroActions />

              {/* Metrics Ribbon */}
              <div className="mt-12 pt-8 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">99.99%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Assay Purity Guarantee</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">48 Hours</div>
                  <div className="text-xs text-slate-400 mt-0.5">Terminal Dispatch Time</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">100%</div>
                  <div className="text-xs text-slate-400 mt-0.5">Lot CoA Traceability</div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black text-white">40+</div>
                  <div className="text-xs text-slate-400 mt-0.5">Countries Served</div>
                </div>
              </div>
            </div>

            {/* Right Column (hidden lg:flex w-1/2 h-[550px] relative items-center justify-center): Three.js Canvas */}
            <div className="hidden lg:flex w-1/2 h-[550px] relative items-center justify-center">
              {/* Dedicated HTML/CSS Radial Backlight Glow element directly behind canvas */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none -z-10">
                <div className="w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,#0284c7_0%,#0369a1_25%,#0f172a_55%,transparent_75%)] opacity-50 blur-[75px]" />
              </div>

              {/* Interactive WebGL Molecular Lattice */}
              <MolecularHeroScene />
            </div>
          </div>
        </div>
      </section>

      {/* Core Divisions Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-md border border-cyan-100">
              Supply Capabilities
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-3">
              Strategic Chemical Divisions
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-xl">
              Structured supply lines engineered for high-throughput manufacturing, semiconductor fabs, and GMP pharmaceutical labs.
            </p>
          </div>
          <Link
            href="/catalog"
            className="mt-4 md:mt-0 text-sm font-bold text-cyan-700 hover:text-cyan-800 inline-flex items-center gap-1"
          >
            <span>View all products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/catalog/${cat.id}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-xl hover:border-cyan-600 transition-all flex flex-col justify-between chemical-card-hover group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-900 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {cat.id === "specialty-solvents" && <Beaker className="w-6 h-6" />}
                  {cat.id === "electronic-chemicals" && <Layers className="w-6 h-6" />}
                  {cat.id === "pharma-intermediates" && <ShieldCheck className="w-6 h-6" />}
                  {cat.id === "catalysts-reagents" && <FileCheck className="w-6 h-6" />}
                </div>

                <h3 className="text-base font-bold text-slate-900 group-hover:text-cyan-700 transition">
                  {cat.name}
                </h3>
                <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                  {cat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-600">{cat.itemCount} Formulations</span>
                <span className="font-bold text-cyan-700 flex items-center gap-0.5 group-hover:translate-x-1 transition-transform">
                  Explore &rarr;
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Chemical Compounds */}
      <section className="py-16 bg-slate-100/70 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500">
                Key Sourcing Reagents
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight mt-1">
                Featured Chemicals In Stock
              </h2>
              <p className="mt-1 text-xs text-slate-600">
                Ready for immediate terminal dispatch with complete Certificate of Analysis
              </p>
            </div>
            <Link
              href="/catalog"
              className="mt-3 sm:mt-0 text-xs font-bold text-cyan-700 hover:underline inline-flex items-center gap-1"
            >
              See complete catalog inventory &rarr;
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-2xs hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="cas-number font-mono text-xs font-bold text-[#003366] bg-[#e6f0fa] px-2.5 py-1 rounded-md border border-[#cce0f5] shadow-2xs">
                      CAS {product.casNumber}
                    </span>
                    <span className="chemical-badge font-mono text-[11px] font-bold text-[#003366] bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                      {product.purityGrade.split("(")[0]}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 hover:text-[#003366] transition">
                    <Link href={`/catalog/${product.category}/${product.slug}`}>
                      {product.name}
                    </Link>
                  </h3>

                  {product.description && (
                    <p className="mt-2 text-xs text-slate-500 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="packaging-spec text-xs font-mono font-semibold text-slate-500">{product.id}</span>
                  <Link
                    href={`/catalog/${product.category}/${product.slug}`}
                    className="text-xs font-bold text-[#003366] hover:text-[#00264d] flex items-center gap-1"
                  >
                    <span>Full Specs & RFQ</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Trust & Compliance Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-700 bg-cyan-50 px-3 py-1 rounded-md border border-cyan-100">
            Institutional Rigor
          </span>
          <h2 className="text-3xl font-black text-slate-950 tracking-tight mt-3">
            Built for Regulated Enterprise Supply Chains
          </h2>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            Every shipment processed through APG Química complies with global regulatory frameworks, strict packaging hermeticity, and multi-tier quality testing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center mb-6">
              <Award className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Certified Quality (ISO & cGMP)</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Certified under ISO 9001:2015. Lot-specific Certificate of Analysis (CoA) provided with quantitative assay purity, trace metal analysis, and Karl Fischer water content testing.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>ICP-MS trace metal verification</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Gas Chromatography (GC) profiling</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center mb-6">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">Multimodal Global Logistics</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Bonded chemical storage and bulk decanting across key international maritime hubs. Temperature-controlled refrigerated containers and inerted returnable pressure vessels.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>UN-rated drums, totes & ISO tanks</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>Hazmat Dangerous Goods certified handlers</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-2xs">
            <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-800 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900">REACH & GHS Compliance</h3>
            <p className="mt-2 text-xs text-slate-600 leading-relaxed">
              Standardized SDS dossiers maintained in 16 languages. Dual-verified export control screening, TSCA compliance, and full supply chain chain-of-custody documentation.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-slate-600">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>EU REACH registration documentation</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                <span>OSHA Hazard Communication 2024 compliance</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="bg-slate-950 text-white py-16 border-t border-slate-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Enterprise Procurement
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mt-2">
            Secure Bulk Chemical Allocation for Your Facility
          </h2>
          <p className="mt-3 text-sm text-slate-300 max-w-xl mx-auto">
            Speak directly with our chemical engineering desk for multi-ton contracts, specialized purity packaging, or custom synthesis inquiries.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/catalog"
              className="w-full sm:w-auto px-6 py-3.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm rounded-xl transition shadow-md"
            >
              Explore Product Catalog
            </Link>
            <a
              href="mailto:procurement@apgquimica.com"
              className="w-full sm:w-auto px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white border border-slate-700 font-semibold text-sm rounded-xl transition"
            >
              Contact Sales Engineering Desk
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
