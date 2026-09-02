import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "APG Química | Global Enterprise Chemical Distributor",
  description:
    "Leading global distributor of specialty solvents, semiconductor electronic chemicals, active pharmaceutical intermediates, and high-performance catalysts. ISO 9001:2015 certified.",
  keywords: [
    "chemical distributor",
    "specialty solvents",
    "APG Química",
    "electronic chemicals",
    "pharma intermediates",
    "CAS numbers",
    "bulk chemicals",
    "ISO 9001 chemicals",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased bg-slate-50 text-slate-900 selection:bg-[#003366] selection:text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
