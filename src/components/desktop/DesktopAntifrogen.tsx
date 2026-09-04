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
        <div className={styles.headerRow}>
          <div className={styles.topPill}>
            <span className={styles.pillDot} aria-hidden="true" />
            <span className={styles.pillText}>Especialidad Caloportadora // Clariant Oficial</span>
          </div>

          <h2 className={styles.title}>Antifrogen®: Desglose Técnico & Cumplimiento Normativo</h2>
          <p className={styles.subtitle}>
            Fluido de transferencia térmica de alta ingeniería con inhibidores de corrosión de ciclo extendido. Formulado para eliminar riesgos operativos, incrustaciones y toxicidad en circuitos industriales cerrados.
          </p>
        </div>

        {/* Regulatory Alert Banner: Red/Green Highlights */}
        <div className={styles.regulatoryCallout}>
          <div className={styles.alertLeft}>
            <span className={styles.alertShield} aria-hidden="true">🛡️</span>
            <div>
              <div className={styles.alertTitle}>Conformidad Regulatoria Ambiental y Laboral</div>
              <div className={styles.alertText}>
                A diferencia de glicoles genéricos que contienen nitritos, boratos o aminas, Antifrogen® está 100% libre de sustancias CMR.
              </div>
            </div>
          </div>
          <span className={styles.badgeCmrFree}>✓ CERTIFICADO CERO CMR</span>
        </div>

        <div className={styles.teardownGrid}>
          {/* Left: Animated Industrial Cooling Loop Schematic */}
          <div className={styles.schematicCard}>
            <div className={styles.schematicHeader}>
              <span className={styles.schematicTitle}>Diagrama de Circuito Caloportador</span>
              <span className={styles.schematicStatus}>FLUIDO EN RECIRCULACIÓN</span>
            </div>

            <div className={styles.svgWrap}>
              <svg viewBox="0 0 520 250" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                {/* Circuit Piping Path Base */}
                <rect x="50" y="40" width="420" height="170" rx="16" fill="none" stroke="rgba(255,255,255,0.15)" strokeWidth="8" />

                {/* Animated Flow Lines */}
                <rect
                  x="50"
                  y="40"
                  width="420"
                  height="170"
                  rx="16"
                  fill="none"
                  stroke="#5fbbf4"
                  strokeWidth="4"
                  className={styles.fluidFlowPath}
                />

                {/* Equipment Unit 1: Chiller / Heat Exchanger */}
                <g transform="translate(60, 85)">
                  <rect width="90" height="80" rx="8" fill="#313b48" stroke="#30afb8" strokeWidth="2" />
                  <text x="45" y="38" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    CHILLER
                  </text>
                  <text x="45" y="52" fill="#5fbbf4" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    INTERCAMBIADOR
                  </text>
                  <circle cx="45" cy="65" r="4" fill="#30afb8" />
                </g>

                {/* Equipment Unit 2: Recirculation Pump */}
                <g transform="translate(235, 175)">
                  <circle cx="25" cy="25" r="24" fill="#313b48" stroke="#5fbbf4" strokeWidth="2" />
                  <text x="25" y="24" fill="#ffffff" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    BOMBA
                  </text>
                  <text x="25" y="36" fill="#25d366" fontSize="7" fontFamily="monospace" textAnchor="middle">
                    ACTIVA
                  </text>
                </g>

                {/* Equipment Unit 3: Industrial Load / Reactor */}
                <g transform="translate(370, 85)">
                  <rect width="90" height="80" rx="8" fill="#313b48" stroke="#30afb8" strokeWidth="2" />
                  <text x="45" y="38" fill="#ffffff" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle">
                    PROCESO
                  </text>
                  <text x="45" y="52" fill="#30afb8" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    CARGA TÉRMICA
                  </text>
                  <circle cx="45" cy="65" r="4" fill="#5fbbf4" />
                </g>

                {/* Expansion Tank */}
                <g transform="translate(235, 15)">
                  <rect width="50" height="30" rx="4" fill="#1e2530" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
                  <text x="25" y="19" fill="#ffffff" fontSize="8" fontFamily="monospace" textAnchor="middle">
                    EXPANSIÓN
                  </text>
                </g>

                {/* Flow arrows */}
                <path d="M 280 40 L 290 35 L 290 45 Z" fill="#5fbbf4" />
                <path d="M 470 120 L 465 110 L 475 110 Z" fill="#5fbbf4" />
                <path d="M 230 210 L 220 205 L 220 215 Z" fill="#30afb8" />
                <path d="M 50 130 L 45 140 L 55 140 Z" fill="#30afb8" />

                {/* Temperature readouts */}
                <text x="260" y="65" fill="#5fbbf4" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Suministro Frío: -10°C
                </text>
                <text x="260" y="155" fill="#30afb8" fontSize="9" fontFamily="monospace" textAnchor="middle">
                  Retorno Térmico: +35°C
                </text>
              </svg>
            </div>

            <div className={styles.circuitLegend}>
              <div className={styles.legendItem}>
                <span className={styles.legendDotCold} aria-hidden="true" />
                <span>Línea Fría (-50°C a +20°C)</span>
              </div>
              <div className={styles.legendItem}>
                <span className={styles.legendDotHot} aria-hidden="true" />
                <span>Inhibición Multimetálica ASTM</span>
              </div>
            </div>
          </div>

          {/* Right: Technical Comparison Table (Antifrogen N vs L vs Generic) */}
          <div className={styles.tableCard}>
            <div className={styles.tableTitle}>Matriz Comparativa de Ingeniería Química</div>

            <table className={styles.teardownTable}>
              <thead>
                <tr>
                  <th>Parámetro</th>
                  <th>Antifrogen® N</th>
                  <th>Antifrogen® L</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className={styles.paramName}>Base Glicólica</td>
                  <td className={styles.colN}>Monoetilenglicol Técnico</td>
                  <td className={styles.colL}>Monopropilenglicol Puro</td>
                </tr>
                <tr>
                  <td className={styles.paramName}>Perfil CMR</td>
                  <td className={styles.colN}>
                    <span className={styles.statusGood}>✓ Cero Sustancias CMR</span>
                  </td>
                  <td className={styles.colL}>
                    <span className={styles.statusGood}>✓ Cero Sustancias CMR</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.paramName}>Grado Sanitario</td>
                  <td className={styles.colN}>Industrial / HVAC</td>
                  <td className={styles.colL}>
                    <span className={styles.statusGood}>✓ Grado Alimentos & Farma</span>
                  </td>
                </tr>
                <tr>
                  <td className={styles.paramName}>Rango Térmico</td>
                  <td className={styles.colN}>-50°C a +150°C</td>
                  <td className={styles.colL}>-48°C a +140°C</td>
                </tr>
                <tr>
                  <td className={styles.paramName}>Protección Metales</td>
                  <td className={styles.colN}>Cobre, Latón, Acero, Soldaduras</td>
                  <td className={styles.colL}>Aleaciones Industriales Higiénicas</td>
                </tr>
                <tr>
                  <td className={styles.paramName}>Monitoreo APG</td>
                  <td className={styles.colN}>Ensayos periódicos de reserva alcalina</td>
                  <td className={styles.colL}>Control analítico de pH y pureza</td>
                </tr>
              </tbody>
            </table>

            <div className={styles.teardownActions}>
              <button type="button" onClick={onOpenQuote} className={styles.quoteBtn}>
                Solicitar Cotización de Volumen
              </button>
              <button
                type="button"
                className={styles.sampleLink}
                onClick={onOpenQuote}
              >
                Solicitar Muestra para Ensayos en Planta →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
