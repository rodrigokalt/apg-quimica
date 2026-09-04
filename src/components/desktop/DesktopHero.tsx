'use client';

import React from 'react';
import styles from '@/styles/DesktopHero.module.css';
import { siteData } from '@/data/siteData';

interface DesktopHeroProps {
  onOpenQuote: () => void;
}

export function DesktopHero({ onOpenQuote }: DesktopHeroProps) {
  return (
    <section id="inicio" className={styles.heroSection}>
      <div className={styles.heroGrid}>
        <div className={styles.leftCol}>
          <div className={styles.partnerPill}>
            <span className={styles.partnerDot} aria-hidden="true" />
            <span className={styles.partnerText}>Representante Oficial de Clariant en México</span>
          </div>

          <h1 className={styles.h1Title}>
            Especialidades Químicas y Formulación a la <span className={styles.titleHighlight}>Medida Industrial</span>
          </h1>

          <p className={styles.description}>
            Más de 20 años abasteciendo materias primas de alto rendimiento y asesoría técnica especializada a través de nuestro laboratorio propio en Querétaro. Calidad certificada y soluciones sustentables.
          </p>

          <div className={styles.ctaGroup}>
            <button type="button" onClick={onOpenQuote} className={styles.primaryBtn}>
              Solicitar Cotización Técnica
            </button>
            <a href="#mercados" className={styles.secondaryBtn}>
              Explorar los 12 Mercados
            </a>
          </div>

          <div className={styles.metricsBar}>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>20+</span>
              <span className={styles.metricLabel}>Años de Trayectoria</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>12</span>
              <span className={styles.metricLabel}>Sectores Clave</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>100%</span>
              <span className={styles.metricLabel}>Laboratorio Propio</span>
            </div>
            <div className={styles.metricItem}>
              <span className={styles.metricValue}>Non-CMR</span>
              <span className={styles.metricLabel}>Seguridad Certificada</span>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.visualCard}>
            <img
              src="/images/pexels-polina-tankilevitch-3735709_1-1024x682.jpg"
              alt="Laboratorio de formulación química APG Química"
              className={styles.mainHeroImg}
              width={640}
              height={480}
            />
            <div className={styles.overlayInfo}>
              <div className={styles.overlayTag}>Soporte y Control Fisicoquímico</div>
              <div className={styles.overlayTitle}>Ensayos de Estabilidad y Calidad por Lote</div>
            </div>
          </div>

          <div className={styles.floatingChip}>
            <span className={styles.chipIcon} aria-hidden="true">🔬</span>
            <div className={styles.chipText}>
              <div>Laboratorio de Soporte</div>
              <small className="tech-mono" style={{ color: 'var(--brand-teal-dark)', fontWeight: 600 }}>En Querétaro, México</small>
            </div>
          </div>

          <div className={styles.floatingChipRight}>
            <span className={styles.chipIcon} aria-hidden="true">🛡️</span>
            <div className={styles.chipText}>
              <div>Antifrogen® Clariant</div>
              <small className="tech-mono" style={{ color: 'var(--brand-teal-dark)', fontWeight: 600 }}>Cero Sustancias CMR</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
