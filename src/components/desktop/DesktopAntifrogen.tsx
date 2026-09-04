'use client';

import React from 'react';
import styles from '@/styles/DesktopAntifrogen.module.css';
import { siteData } from '@/data/siteData';

interface DesktopAntifrogenProps {
  onOpenQuote: () => void;
}

export function DesktopAntifrogen({ onOpenQuote }: DesktopAntifrogenProps) {
  const { flagshipProduct } = siteData;

  return (
    <section id="antifrogen" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topBadgeRow}>
          <span className={styles.brandBadge}>Especialidad Insignia Clariant</span>
          <span className={styles.cmrBadge}>Libre de Sustancias CMR</span>
        </div>

        <div className={styles.mainGrid}>
          <div className={styles.leftCol}>
            <h2 className={styles.title}>{flagshipProduct.title}</h2>
            <div className={styles.subtitle}>{flagshipProduct.subtitle}</div>
            <p className={styles.description}>{flagshipProduct.description}</p>

            <ul className={styles.featuresList}>
              {flagshipProduct.features.map((feat, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <span className={styles.featureCheck} aria-hidden="true">✓</span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className={styles.actionRow}>
              <button type="button" onClick={onOpenQuote} className={styles.quoteBtn}>
                Solicitar Ficha Técnica y Cotización
              </button>
            </div>
          </div>

          <div className={styles.rightCol}>
            <div className={styles.tableHeader}>
              <span className={styles.tableTitle}>Especificaciones Técnicas Comparativas</span>
              <span className={styles.tableTag}>Norma ASTM / DIN</span>
            </div>

            <table className={styles.specsTable}>
              <thead>
                <tr>
                  <th>Parámetro</th>
                  <th>Antifrogen® N</th>
                  <th>Antifrogen® L</th>
                </tr>
              </thead>
              <tbody>
                {flagshipProduct.specsTable.map((row, idx) => (
                  <tr key={idx}>
                    <td className={styles.paramCol}>{row.parameter}</td>
                    <td className={styles.valNCol}>{row.valueN}</td>
                    <td className={styles.valLCol}>{row.valueL}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className={styles.productImgCard}>
              <img
                src={flagshipProduct.image}
                alt="Antifrogen Clariant fluido caloportador industrial"
                className={styles.productImg}
                width={500}
                height={180}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
