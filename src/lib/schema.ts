import { z } from "zod";
import rawCatalog from "../../data/catalog.json";

// CAS Number regex validation: 2 to 7 digits, hyphen, 2 digits, hyphen, 1 digit
const casNumberRegex = /^\d{2,7}-\d{2}-\d$/;

export const ChemicalProductSchema = z.object({
  id: z.string().min(1, "Product ID is required"),
  name: z.string().min(1, "Product chemical name is required"),
  slug: z.string().min(1, "Slug is required for URL routing"),
  casNumber: z.string().regex(casNumberRegex, "Must be a valid CAS registry number format (e.g. 75-05-8)"),
  category: z.string().min(1, "Category is required"),
  purityGrade: z.string().min(1, "Purity grade is required"),
  applications: z.array(z.string()).min(1, "At least one application must be specified"),
  safetySheetUrl: z.string().min(1, "Safety Data Sheet (SDS) URL is required"),
  // Enterprise chemical attributes
  formula: z.string().optional(),
  molecularWeight: z.union([z.string(), z.number()]).optional(),
  description: z.string().optional(),
  unNumber: z.string().optional(),
  hazardStatements: z.array(z.string()).optional(),
  storageTemp: z.string().optional(),
  packageSizes: z.array(z.string()).optional(),
  complianceStandards: z.array(z.string()).optional(),
});

export const CatalogSchema = z.array(ChemicalProductSchema);

export type ChemicalProduct = z.infer<typeof ChemicalProductSchema>;

/**
 * Validates and retrieves the full chemical catalog data
 */
export function getCatalog(): ChemicalProduct[] {
  const result = CatalogSchema.safeParse(rawCatalog);
  if (!result.success) {
    console.error("Chemical catalog validation failed:", result.error.format());
    throw new Error("Invalid chemical catalog data schema");
  }
  return result.data;
}

/**
 * Get distinct categories with friendly metadata
 */
export interface CategoryMeta {
  id: string;
  name: string;
  description: string;
  itemCount: number;
}

export function getAllCategories(): CategoryMeta[] {
  const products = getCatalog();
  const categoryMap = new Map<string, number>();

  products.forEach((p) => {
    categoryMap.set(p.category, (categoryMap.get(p.category) || 0) + 1);
  });

  const categoryDescriptions: Record<string, { name: string; description: string }> = {
    "specialty-solvents": {
      name: "Specialty Solvents",
      description: "Ultra-pure chromatographic, spectroscopic, and anhydrous grade solvents for mission-critical manufacturing.",
    },
    "electronic-chemicals": {
      name: "Electronic Grade Chemicals",
      description: "VLSI and semiconductor ultra-trace metal grade reagents for etching, lithography, and wafer cleaning.",
    },
    "pharma-intermediates": {
      name: "Pharma & API Intermediates",
      description: "High-compliance chemical intermediates adhering to stringent cGMP and EP/USP pharmacopeial standards.",
    },
    "catalysts-reagents": {
      name: "Catalysts & Analytical Reagents",
      description: "Transition metal catalysts, high-selectivity ligands, and ACS grade analytical standard reagents.",
    },
  };

  return Array.from(categoryMap.entries()).map(([catId, count]) => ({
    id: catId,
    name: categoryDescriptions[catId]?.name || catId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
    description: categoryDescriptions[catId]?.description || "High-specification enterprise chemical formulations.",
    itemCount: count,
  }));
}

/**
 * Retrieve products filtered by category
 */
export function getProductsByCategory(category: string): ChemicalProduct[] {
  const catalog = getCatalog();
  return catalog.filter((product) => product.category.toLowerCase() === category.toLowerCase());
}

/**
 * Retrieve a specific product by category and slug
 */
export function getProductBySlug(category: string, slug: string): ChemicalProduct | undefined {
  const catalog = getCatalog();
  return catalog.find(
    (product) =>
      product.category.toLowerCase() === category.toLowerCase() &&
      product.slug.toLowerCase() === slug.toLowerCase()
  );
}
