# APG Química — Project Dependencies

Overview of all runtime and development packages configured in [`package.json`](./package.json), organized by architectural domain.

---

## 1. Framework & Core Runtime

| Package | Version | Purpose |
| :--- | :---: | :--- |
| **`next`** | `16.3.4` | The foundational React framework. Handles the App Router, Server Components, dynamic catalog routing (`/catalog/[category]/[slug]`), SEO metadata generation, and Turbopack dev server. |
| **`react`** & **`react-dom`** | `19.2.8` | Core UI rendering library and DOM bindings powering both Server Components and interactive client components (`"use client"`). |

---

## 2. 3D Graphics & Visual Experience

| Package | Version | Purpose |
| :--- | :---: | :--- |
| **`three`** | `^0.185.1` | WebGL 3D graphics engine powering the hero scene in [`MolecularHeroScene.tsx`](./src/components/MolecularHeroScene.tsx). Renders the transmissive frosted glass nodes, metallic coordination sites, electric cyan struts, depth fog, and clamped mouse inertia physics. |
| **`@types/three`** | `^0.185.4` | TypeScript definitions for Three.js geometries, materials (`MeshPhysicalMaterial`), lighting, vectors, and WebGL renderers. |

---

## 3. Accessible UI Primitives & Icons

| Package | Version | Purpose |
| :--- | :---: | :--- |
| **`@radix-ui/react-dialog`** | `^1.1.23` | Accessible, unstyled modal primitive that powers the commercial quote request modal ([`QuoteModal.tsx`](./src/components/QuoteModal.tsx)). Handles focus trapping, keyboard navigation (`Escape`), backdrop overlay, and screen-reader ARIA states. |
| **`@radix-ui/react-dropdown-menu`** | `^2.1.24` | Accessible dropdown menu primitive used in [`DesktopNav.tsx`](./src/components/navigation/DesktopNav.tsx) for the chemical divisions navigation menu. |
| **`@radix-ui/react-slot`** | `^1.3.3` | Utility for polymorphic component composition (`asChild`), allowing Radix primitives to pass attributes and event handlers down to custom elements. |
| **`lucide-react`** | `^1.39.0` | Comprehensive icon library for technical chemical badges, safety shields, search bars, ISO certificates, and navigation chevrons. |

---

## 4. Data Validation & Type Safety

| Package | Version | Purpose |
| :--- | :---: | :--- |
| **`zod`** | `^4.5.4` | Schema validation library used in [`schema.ts`](./src/lib/schema.ts) to strictly validate [`catalog.json`](./data/catalog.json) at build and runtime, enforcing CAS registry number regex formatting (`/^\d{2,7}-\d{2}-\d$/`), required purity grades, and SDS safety links. |
| **`typescript`** | `^5` | Type-checks the entire codebase, ensuring end-to-end type safety between data schemas, Three.js objects, and component props. |
| **`@types/node`**, **`@types/react`**, **`@types/react-dom`** | `^20` / `^19` | Official TypeScript definitions for Node.js runtime APIs, React hooks, and JSX element trees. |

---

## 5. Styling & Utility Functions

| Package | Version | Purpose |
| :--- | :---: | :--- |
| **`tailwindcss`** & **`@tailwindcss/postcss`** | `^4.3.3` | Tailwind CSS v4 styling engine providing utility classes, design tokens (APG navy, amber, green), glassmorphism backdrops, and responsive breakpoint styles. |
| **`postcss`** | `^8.5.26` | CSS transformation pipeline required by Tailwind CSS to compile styles during Next.js builds. |
| **`clsx`** | `^2.1.1` | Utility for conditionally joining class names together without string concatenation bugs. |
| **`tailwind-merge`** | `^3.6.0` | Intelligently merges conflicting Tailwind utility classes (e.g. overriding padding or colors without specificity conflicts). |

---

## 6. Linting & Code Quality

| Package | Version | Purpose |
| :--- | :---: | :--- |
| **`eslint`** & **`eslint-config-next`** | `^9` / `16.3.4` | Static code analysis to enforce Next.js best practices, Core Web Vitals checks, and React hooks rules. |
