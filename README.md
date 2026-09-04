# APG Química – Plataforma Web B2B & Catálogo Técnico

Plataforma web corporativa y catálogo industrial para **APG Química (Química, S.A. de C.V.)**, desarrollada en **Next.js 15, React 19 y TypeScript** con arquitectura modular y CSS Modules bespoke (sin Tailwind ni Bootstrap).

---

## 🚀 Características Principales

1. **Desacoplamiento Estricto Desktop / Mobile:**
   - **Desktop:** Grillas asimétricas de 12 mercados industriales, catálogo técnico comparativo en tipografía monospace (`JetBrains Mono`), teardown de **Antifrogen® Clariant**, vitrina fotográfica del laboratorio de soporte y microinteracciones con curva `cubic-bezier(0.25, 1, 0.5, 1)`.
   - **Mobile:** Árbol de renderizado táctil ligero, sin sobrecarga en el DOM, barra persistente inferior con WhatsApp directo y modal bottom-sheet de **"Cotización en 30 Segundos"**.

2. **Detección de Ahorro de Batería y Bajo Consumo Energético:**
   - Monitoreo en tiempo real de `navigator.getBattery()`, `navigator.connection.saveData` y `@media (prefers-reduced-motion: reduce)`.
   - Si la batería es $\le 20\%$ o el usuario tiene activado el ahorro del sistema, la web conmuta automáticamente a la versión ligera `<MobileLayout>` y muestra un banner informativo con opción de alternar a vista completa.

3. **Optimización SEO Industrial:**
   - Datos estructurados **JSON-LD (`schema.org`)** integrando `LocalBusiness`, `ItemList` (12 mercados) y `Product` (Antifrogen®).
   - Metadatos enriquecidos, Open Graph, Twitter Cards, `robots.txt` y `sitemap.xml`.

4. **Orientación Comercial B2B:**
   - Eliminación total de dependencias y elementos de tienda/e-commerce.
   - Enfoque 100% en captación de leads industriales, cotizaciones de volumen y asesoría técnica especializada.

---

## 🛠️ Stack Tecnológico

- **Framework:** Next.js 15.1.7 (App Router)
- **UI & Runtime:** React 19
- **Tipado:** TypeScript 5.7
- **Estilos:** CSS Modules puros (`.module.css`) y CSS Variables
- **Tipografía:** Inter (autoridad clínica) + JetBrains Mono (precisión ingenieril)

---

## 📦 Instalación y Ejecución Local

```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm run start
```

---

## 🏢 Datos Corporativos

- **Empresa:** APG Química – Química, S.A. de C.V.
- **Ubicación:** Pedro Escobedo - Santiago de Querétaro, C.P. 76240, Querétaro, México.
- **Teléfonos:** +52 442 218 1700 / +52 442 395 2609
- **Email:** apgquimica@prodigy.net.mx
- **Alianza Oficial:** Representante autorizado de Clariant en México.
