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
            <div className={styles.sectionTag}>Portafolio B2B & Soluciones Técnicas</div>
            <h2 className={styles.sectionTitle}>12 Mercados Industriales Atendidos</h2>
          </div>
          <p className={styles.sectionSubtitle}>
            Abastecemos materias primas certificadas y formulaciones personalizadas para satisfacer requerimientos técnicos rigurosos en los principales sectores productivos de México.
          </p>
        </div>

        <div className={styles.filterTabs} role="tablist" aria-label="Filtrar mercados">
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === 'all' ? styles.activeTab : ''}`}
            onClick={() => setFilter('all')}
          >
            Todos los Mercados (12)
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
            Pinturas & Polímeros
          </button>
          <button
            type="button"
            className={`${styles.tabBtn} ${filter === 'cuidado' ? styles.activeTab : ''}`}
            onClick={() => setFilter('cuidado')}
          >
            Agro, Agua & Cuidado
          </button>
        </div>

        <div className={styles.marketsGrid}>
          {filteredMarkets.map((market: MarketIndustry) => (
            <article key={market.id} className={styles.card}>
              <div className={styles.imageWrap}>
                <img
                  src={market.image}
                  alt={`Materia prima y especialidad química para ${market.name}`}
                  className={styles.marketImg}
                  width={400}
                  height={200}
                  loading="lazy"
                />
                <span className={styles.marketBadge}>Sector Industrial</span>
              </div>

              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{market.name}</h3>
                <p className={styles.cardDesc}>{market.description}</p>

                <div className={styles.keywordsWrap}>
                  {market.keywords.map(kw => (
                    <span key={kw} className={styles.keywordChip}>{kw}</span>
                  ))}
                </div>

                <div className={styles.cardFooter}>
                  <button
                    type="button"
                    onClick={() => onSelectMarket(market.id)}
                    className={styles.consultBtn}
                  >
                    <span>Solicitar Asesoría Técnica</span>
                    <span aria-hidden="true">→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
