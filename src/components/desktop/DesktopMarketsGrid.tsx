'use client';

import React, { useState } from 'react';
import styles from '@/styles/DesktopMarketsGrid.module.css';
import { siteData, MarketIndustry } from '@/data/siteData';

interface DesktopMarketsGridProps {
  onSelectMarket: (marketId: string) => void;
}

export function DesktopMarketsGrid({ onSelectMarket }: DesktopMarketsGridProps) {
  const [filter, setFilter] = useState<'all' | 'manufactura' | 'recubrimientos' | 'cuidado'>('all');

  const filteredMarkets = siteData.markets.filter(m => {
    if (filter === 'all') return true;
    if (filter === 'manufactura') {
      return ['metalurgia', 'aditivos', 'ceramica', 'construccion'].includes(m.id);
    }
    if (filter === 'recubrimientos') {
      return ['revestimientos', 'pigmentos', 'ceras', 'cuero-calzado'].includes(m.id);
    }
    if (filter === 'cuidado') {
      return ['cultivos', 'tratamiento-agua', 'cuidado-hogar', 'cuidado-personal'].includes(m.id);
    }
    return true;
  });

  return (
    <section id="mercados" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div>
            <div className={styles.sectionTag}>Matriz de Soluciones Químicas</div>
            <h2 className={styles.sectionTitle}>12 Sectores Industriales</h2>
          </div>
          <p className={styles.sectionSubtitle}>
            Catálogo técnico de formulaciones especializadas. Pase el cursor sobre cada ficha técnica para inspeccionar aplicaciones específicas por sector.
          </p>
        </div>

        <div className={styles.filterTabs} role="tablist" aria-label="Filtrar sectores industriales">
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === 'all' ? styles.activeTab : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos los Sectores (12)
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === 'manufactura' ? styles.activeTab : ''}`}
            onClick={() => setFilter('manufactura')}
          >
            Manufactura & Metales
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === 'recubrimientos' ? styles.activeTab : ''}`}
            onClick={() => setFilter('recubrimientos')}
          >
            Pinturas, Ceras & Cuero
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === 'cuidado' ? styles.activeTab : ''}`}
            onClick={() => setFilter('cuidado')}
          >
            Agroquímica, Agua & Personal Care
          </button>
        </div>

        <div className={styles.masonryGrid}>
          {filteredMarkets.map((market: MarketIndustry, idx: number) => {
            // Asymmetric masonry span for first and sixth card
            const isSpan2 = filter === 'all' && (idx === 0 || idx === 6);

            return (
              <article
                key={market.id}
                className={`${styles.card} ${isSpan2 ? styles.cardSpan2 : ''}`}
                onClick={() => onSelectMarket(market.id)}
              >
                <div className={styles.imageWrap}>
                  <img
                    src={market.image}
                    alt={`Materia prima y especialidad química para ${market.name}`}
                    className={styles.marketImg}
                    width={isSpan2 ? 800 : 400}
                    height={180}
                    loading="lazy"
                  />
                  <span className={styles.sectorBadge}>{market.id}</span>
                  <span className={styles.crosshairHint}>Target [⌖]</span>
                </div>

                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>{market.name}</h3>
                  <p className={styles.cardDesc}>{market.description}</p>

                  <div className={styles.applicationsWrap}>
                    <span className={styles.appLabel}>Aplicaciones Industriales Clave:</span>
                    <ul className={styles.applicationsList}>
                      {market.applications.map((app, appIdx) => (
                        <li key={appIdx} className={styles.appItem}>
                          <span className={styles.appDot} aria-hidden="true" />
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={styles.cardFooter}>
                    <span className="tech-mono" style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                      Ficha Técnica: APG-{market.id.substring(0, 4).toUpperCase()}
                    </span>
                    <button
                      type="button"
                      className={styles.quoteTriggerBtn}
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectMarket(market.id);
                      }}
                    >
                      <span>Cotizar Sector</span>
                      <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
