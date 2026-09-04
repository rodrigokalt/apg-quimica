import React from 'react';
import { siteData } from '@/data/siteData';

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": siteData.company.fullName,
    "alternateName": siteData.company.name,
    "url": "https://apgquimica.com.mx/",
    "logo": "https://apgquimica.com.mx/images/APG-quimica.png",
    "image": "https://apgquimica.com.mx/images/APG-quimica.png",
    "description": siteData.company.experience,
    "telephone": siteData.contact.phones[0],
    "email": siteData.contact.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pedro Escobedo",
      "addressLocality": "Santiago de Querétaro",
      "addressRegion": "Querétaro",
      "postalCode": "76240",
      "addressCountry": "MX"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 20.5888,
      "longitude": -100.3899
    },
    "sameAs": [
      siteData.contact.social.linkedin,
      siteData.contact.social.facebook,
      siteData.contact.social.instagram
    ],
    "brand": {
      "@type": "Brand",
      "name": "Clariant",
      "description": "Líder mundial en especialidades químicas representada por APG Química en México"
    }
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Antifrogen® N & L Clariant",
    "image": "https://apgquimica.com.mx/images/antifrogen.jpg",
    "description": siteData.flagshipProduct.description,
    "brand": {
      "@type": "Brand",
      "name": "Clariant"
    },
    "category": "Especialidades Químicas Industriales / Fluidos Caloportadores",
    "offers": {
      "@type": "AggregateOffer",
      "priceCurrency": "MXN",
      "availability": "https://schema.org/InStock",
      "itemCondition": "https://schema.org/NewCondition",
      "url": "https://apgquimica.com.mx/#antifrogen",
      "seller": {
        "@type": "Organization",
        "name": siteData.company.fullName
      }
    }
  };

  const marketsSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": siteData.markets.map((m, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": m.name,
      "description": m.description,
      "url": `https://apgquimica.com.mx/#mercados`
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(marketsSchema) }}
      />
    </>
  );
}
