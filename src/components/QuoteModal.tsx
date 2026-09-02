"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { X, Send, CheckCircle2, ShieldAlert } from "lucide-react";

interface QuoteModalProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  defaultProduct?: {
    name: string;
    casNumber: string;
  };
}

export function QuoteModal({ isOpen, onOpenChange, defaultProduct }: QuoteModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    phone: "",
    productName: defaultProduct?.name || "",
    casNumber: defaultProduct?.casNumber || "",
    volumeRequirement: "Bulk Drum (200L / 25kg)",
    deliveryCountry: "United States / North America",
    notes: "",
  });

  // Sync if defaultProduct updates
  React.useEffect(() => {
    if (defaultProduct) {
      setFormData((prev) => ({
        ...prev,
        productName: defaultProduct.name,
        casNumber: defaultProduct.casNumber,
      }));
    }
  }, [defaultProduct]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in" />
        <Dialog.Content className="fixed left-1/2 top-1/2 z-50 w-full max-w-xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white p-6 md:p-8 shadow-2xl border border-slate-200 transition-all animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between pb-4 border-b border-slate-100">
            <div>
              <span className="text-xs font-semibold tracking-wider uppercase text-cyan-700 bg-cyan-50 px-2.5 py-0.5 rounded-full">
                Enterprise Sourcing
              </span>
              <Dialog.Title className="text-xl font-bold text-slate-900 mt-1">
                Request an Official Commercial Quote
              </Dialog.Title>
              <Dialog.Description className="text-xs text-slate-500 mt-0.5">
                Direct quote from APG Química regulatory & sales engineering desk. Response within 4 business hours.
              </Dialog.Description>
            </div>
            <Dialog.Close asChild>
              <button
                type="button"
                className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
                aria-label="Close quote modal"
              >
                <X className="w-5 h-5" />
              </button>
            </Dialog.Close>
          </div>

          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto w-14 h-14 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Quotation Ingestion Confirmed</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <span className="font-semibold text-slate-800">{formData.fullName || "Representative"}</span>. Your RFQ inquiry for{" "}
                <span className="font-semibold text-cyan-700">{formData.productName || "Chemical Product"}</span> has been routed to our technical supply desk.
              </p>
              <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-500 border border-slate-200 max-w-sm mx-auto">
                Reference ID: <span className="font-mono font-bold text-slate-800">APG-RFQ-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              <button
                type="button"
                onClick={handleReset}
                className="mt-4 px-6 py-2.5 bg-slate-900 text-white rounded-lg font-medium text-sm hover:bg-slate-800 transition"
              >
                Done
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-5 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Contact Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Robert Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Company / Laboratory *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. SynthaBio Labs Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Corporate Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="procurement@organization.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Phone / Extension
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 019-2834"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Chemical Product / CAS *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Acetonitrile (75-05-8)"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Required Volume / Packaging
                  </label>
                  <select
                    value={formData.volumeRequirement}
                    onChange={(e) => setFormData({ ...formData, volumeRequirement: e.target.value })}
                    className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                  >
                    <option>Bench Scale (1L - 25L Bottles)</option>
                    <option>Bulk Drum (200L / 25kg)</option>
                    <option>Intermediate Bulk Container (1000L IBC / Tote)</option>
                    <option>Full ISO Tanker Container (20,000L+)</option>
                    <option>Custom Pilot Batch Synthesis</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Delivery Destination & Quality Specification Notes
                </label>
                <textarea
                  rows={3}
                  placeholder="Specify purity requirements, target delivery port or facility zip code, target lead time, or required documentation (CoA, TSE/BSE, DMF)..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-600 bg-white"
                />
              </div>

              <div className="flex items-start gap-2 p-3 bg-amber-50 rounded-lg border border-amber-200/80 text-amber-900 text-xs">
                <ShieldAlert className="w-4 h-4 shrink-0 text-amber-700 mt-0.5" />
                <p>
                  APG Química only supplies verified research facilities, industrial manufacturing plants, and verified universities. Due diligence verification is performed before chemical dispatch.
                </p>
              </div>

              <div className="flex justify-end gap-3 pt-3 border-t border-slate-100">
                <Dialog.Close asChild>
                  <button
                    type="button"
                    className="px-4 py-2 border border-slate-300 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition"
                  >
                    Cancel
                  </button>
                </Dialog.Close>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 bg-cyan-700 hover:bg-cyan-800 text-white rounded-lg text-sm font-semibold shadow-xs transition"
                >
                  <Send className="w-4 h-4" />
                  Submit RFQ
                </button>
              </div>
            </form>
          )}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
