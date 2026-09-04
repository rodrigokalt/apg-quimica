'use client';

import React, { useState } from 'react';
import styles from '@/styles/MobileLayout.module.css';
import { siteData } from '@/data/siteData';
import { MobileQuickQuoteSheet } from '@/components/mobile/MobileQuickQuoteSheet';

export function MobileLayout() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [selectedSector, setSelectedSector] = useState<string | undefined>(undefined);

  const handleOpenSheet = (sector?: string) => {
    setSelectedSector(sector);
    setSheetOpen(true);
  };

  return (
    <div className={styles.mobileContainer}>
      {/* Mobile Sticky Header */}
      <header className={styles.header}>
        <img
          src="/images/APG-quimica.png"
          alt="APG Química"
          className={styles.logo}
          width={140}
          height={38}
        />
        <div className={styles.headerActions}>
          <a
            href={`tel:${siteData.contact.phones[0].replace(/\s+/g, '')}`}
            className={styles.callDirectBtn}
            aria-label="Llamar a APG Química"
          >
            <span>📞</span>
            <span>Llamar</span>
          </a>
        </div>
      </header>

      {/* Mobile Hero */}
      <section className={styles.hero}>
        <span className={styles.partnerBadge}>Distribuidor Oficial Clariant</span>
        <h1 className={styles.heroTitle}>Especialidades Químicas Industriales</h1>
        <p className={styles.heroDesc}>
          Más de 20 años formulando materias primas a la medida y soporte técnico directo en nuestro laboratorio en Querétaro.
        </p>

        <div className={styles.heroMetrics}>
          <div>
            <div className={styles.metricNum}>20+</div>
            <div className={styles.metricDesc}>Años Exp.</div>
          </div>
          <div>
            <div className={styles.metricNum}>12</div>
            <div className={styles.metricDesc}>Mercados</div>
          </div>
          <div>
            <div className={styles.metricNum}>Lab</div>
            <div className={styles.metricDesc}>Propio</div>
          </div>
        </div>

        <div className={styles.heroCtas}>
          <button type="button" onClick={() => handleOpenSheet()} className={styles.primaryQuoteBtn}>
            Solicitar Cotización Inmediata
          </button>
          <a
            href={siteData.contact.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappDirectLink}
          >
            <span>💬 WhatsApp con Ingeniero</span>
          </a>
        </div>
      </section>

      {/* Mobile Antifrogen Spotlight */}
      <section className={styles.section} id="antifrogen">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Producto Insignia Clariant</div>
          <h2 className={styles.sectionTitle}>Antifrogen® N & L</h2>
        </div>

        <div className={styles.antifrogenCard}>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
            {siteData.flagshipProduct.description}
          </p>

          <div style={{ background: 'rgba(48, 175, 184, 0.08)', padding: '10px', borderRadius: '6px', marginBottom: '14px' }}>
            <strong style={{ color: 'var(--brand-teal-dark)', fontSize: '0.85rem' }}>✓ Libre de Sustancias CMR</strong>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-dark)', marginTop: '2px' }}>
              Seguridad para circuitos industriales, intercambiadores y grado alimenticio (Antifrogen L).
            </div>
          </div>

          <div className={styles.tableWrap}>
            <table className={styles.mobileTable}>
              <thead>
                <tr>
                  <th>Propiedad</th>
                  <th>Antifrogen® N</th>
                  <th>Antifrogen® L</th>
                </tr>
              </thead>
              <tbody>
                {siteData.flagshipProduct.specsTable.map((s, idx) => (
                  <tr key={idx}>
                    <td>{s.parameter}</td>
                    <td style={{ color: 'var(--brand-teal-dark)' }}>{s.valueN}</td>
                    <td>{s.valueL}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <button
            type="button"
            onClick={() => handleOpenSheet('Antifrogen® Clariant')}
            className={styles.quoteSpecificBtn}
          >
            Cotizar Antifrogen®
          </button>
        </div>
      </section>

      {/* Mobile Markets List */}
      <section className={styles.section} id="mercados">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Catálogo B2B</div>
          <h2 className={styles.sectionTitle}>12 Mercados Industriales</h2>
        </div>

        <div className={styles.marketsList}>
          {siteData.markets.map(m => (
            <article key={m.id} className={styles.marketCard}>
              <div className={styles.marketImgWrap}>
                <img
                  src={m.image}
                  alt={m.name}
                  className={styles.marketImg}
                  loading="lazy"
                />
              </div>
              <div className={styles.marketContent}>
                <h3 className={styles.marketName}>{m.name}</h3>
                <p className={styles.marketDesc}>{m.description}</p>
                <div className={styles.keywordsWrap}>
                  {m.keywords.map(kw => (
                    <span key={kw} className={styles.keywordChip}>{kw}</span>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => handleOpenSheet(m.name)}
                  className={styles.quoteSpecificBtn}
                >
                  Cotizar {m.name}
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Mobile Laboratory */}
      <section className={styles.section} id="laboratorio">
        <div className={styles.sectionHeader}>
          <div className={styles.sectionTag}>Control & Certificación</div>
          <h2 className={styles.sectionTitle}>Laboratorio de Soporte</h2>
        </div>

        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '16px' }}>
          Realizamos pruebas de aplicación, estabilidad fisicoquímica y formulación a la medida en nuestras instalaciones de Querétaro.
        </p>

        <div className={styles.labScrollRow}>
          {siteData.laboratory.images.map((img, idx) => (
            <div key={idx} className={styles.labThumb}>
              <img src={img} alt={`Laboratorio APG Química ${idx + 1}`} loading="lazy" />
            </div>
          ))}
        </div>

        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {siteData.laboratory.capabilities.map((c, idx) => (
            <li key={idx} style={{ fontSize: '0.85rem', color: 'var(--text-dark)', display: 'flex', gap: '8px' }}>
              <span style={{ color: 'var(--brand-teal)', fontWeight: 800 }}>•</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Mobile Footer & Contact */}
      <footer className={styles.section} id="contacto" style={{ background: 'var(--brand-slate)', color: '#ffffff' }}>
        <h2 style={{ fontSize: '1.3rem', color: '#ffffff', marginBottom: '12px' }}>APG Química</h2>
        <p style={{ fontSize: '0.85rem', color: 'rgba(255, 255, 255, 0.8)', marginBottom: '16px' }}>
          {siteData.contact.address}
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
          <a
            href={`tel:${siteData.contact.phones[0].replace(/\s+/g, '')}`}
            style={{ color: 'var(--brand-accent-blue)', fontSize: '0.9rem', fontWeight: 600 }}
          >
            📞 {siteData.contact.phones[0]}
          </a>
          <a
            href={`tel:${siteData.contact.phones[1].replace(/\s+/g, '')}`}
            style={{ color: 'var(--brand-accent-blue)', fontSize: '0.9rem', fontWeight: 600 }}
          >
            📞 {siteData.contact.phones[1]}
          </a>
          <a
            href={`mailto:${siteData.contact.email}`}
            style={{ color: '#ffffff', fontSize: '0.85rem' }}
          >
            ✉️ {siteData.contact.email}
          </a>
        </div>

        <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '16px' }}>
          © {new Date().getFullYear()} {siteData.company.fullName}. Todos los derechos reservados.
        </div>
      </footer>

      {/* Persistent Bottom Action Bar */}
      <div className={styles.bottomBar}>
        <a
          href={siteData.contact.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.barBtnWhatsApp}
        >
          <span>💬 WhatsApp</span>
        </a>
        <button
          type="button"
          onClick={() => handleOpenSheet()}
          className={styles.barBtnQuote}
        >
          <span>⚡ Cotizar</span>
        </button>
      </div>

      {/* 30s Quick Quote Bottom Sheet */}
      <MobileQuickQuoteSheet
        isOpen={sheetOpen}
        onClose={() => setSheetOpen(false)}
        preselectedSector={selectedSector}
      />
    </div>
  );
}
