'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '@/styles/DesktopLaboratory.module.css';
import { siteData } from '@/data/siteData';

export function DesktopLaboratory() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const el = wrapperRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how far we've scrolled inside the wrapper
      const totalScrollable = rect.height - windowHeight;
      if (totalScrollable <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      if (progress < 0.33) {
        setActiveStep(0);
      } else if (progress < 0.66) {
        setActiveStep(1);
      } else {
        setActiveStep(2);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const { laboratory } = siteData;

  return (
    <section id="laboratorio" ref={wrapperRef} className={styles.scrollWrapper}>
      <div className={styles.stickyContainer}>
        <div className={styles.dashboardFrame}>
          {/* Left Column: Fixed Clinical Anchor */}
          <div className={styles.leftCol}>
            <div className={styles.terminalHeader}>
              <span className={styles.terminalTag}>Módulo de Aseguramiento de Calidad</span>
              <div className={styles.terminalStatus}>
                <span className={styles.liveDot} aria-hidden="true" />
                <span>ONLINE // QUERÉTARO</span>
              </div>
            </div>

            <h2 className={styles.mainTitle}>
              Laboratorio de Soporte <span className={styles.accentWord}>Técnico Interno</span>
            </h2>

            <p className={styles.description}>
              Mitigamos riesgos de producción mediante validaciones previas al suministro. Pruebas piloto sobre muestra del cliente, control acelerado de vida útil y análisis fisicoquímico por lote.
            </p>

            <div className={styles.stepsNav} role="tablist">
              <button
                type="button"
                className={`${styles.stepBtn} ${activeStep === 0 ? styles.activeStepBtn : ''}`}
                onClick={() => setActiveStep(0)}
              >
                <span className={styles.stepNum}>01</span>
                <div className={styles.stepInfo}>
                  <span className={styles.stepTitle}>Pruebas de Aplicación</span>
                  <span className={styles.stepDesc}>Batch testing & validación en matriz final</span>
                </div>
              </button>

              <button
                type="button"
                className={`${styles.stepBtn} ${activeStep === 1 ? styles.activeStepBtn : ''}`}
                onClick={() => setActiveStep(1)}
              >
                <span className={styles.stepNum}>02</span>
                <div className={styles.stepInfo}>
                  <span className={styles.stepTitle}>Pruebas de Estabilidad</span>
                  <span className={styles.stepDesc}>Envejecimiento térmico acelerado (45°C/90d)</span>
                </div>
              </button>

              <button
                type="button"
                className={`${styles.stepBtn} ${activeStep === 2 ? styles.activeStepBtn : ''}`}
                onClick={() => setActiveStep(2)}
              >
                <span className={styles.stepNum}>03</span>
                <div className={styles.stepInfo}>
                  <span className={styles.stepTitle}>Análisis Fisicoquímico</span>
                  <span className={styles.stepDesc}>Mediciones instrumentales & tolerancias</span>
                </div>
              </button>
            </div>

            <div className={styles.scrollHint}>
              <span>↓ Scroll para transicionar fases analíticas</span>
            </div>
          </div>

          {/* Right Column: 3 Data-Driven Dashboard Panes */}
          <div className={styles.rightCol}>
            {/* Visual 1: Pruebas de Aplicación (Batch testing) */}
            <div className={`${styles.visualPane} ${activeStep === 0 ? styles.activeVisualPane : ''}`}>
              <div className={styles.paneHeader}>
                <span className={styles.paneTag}>Fase 1: Batch Testing & Homogeneidad</span>
                <span className={styles.paneMetric}>Delta E &lt; 0.28</span>
              </div>
              <div className={styles.paneMediaWrap}>
                <img
                  src={laboratory.images[0]}
                  alt="Equipo de pruebas de aplicación de formulaciones"
                  className={styles.panePhoto}
                  width={560}
                  height={240}
                />
              </div>
              <div className={styles.paneBody}>
                <div className={styles.dataGrid}>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>Índice de Dispersión</span>
                    <span className={styles.dataVal}>99.4 %</span>
                  </div>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>Capacidad Batch Piloto</span>
                    <span className={styles.dataVal}>5 kg a 50 kg</span>
                  </div>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>Compatibilidad de Matriz</span>
                    <span className={styles.dataVal}>100% Verificada</span>
                  </div>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>Tiempo de Homogenización</span>
                    <span className={styles.dataVal}>18 min @ 1,200 rpm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual 2: Pruebas de Estabilidad (Accelerated Aging Graphs) */}
            <div className={`${styles.visualPane} ${activeStep === 1 ? styles.activeVisualPane : ''}`}>
              <div className={styles.paneHeader}>
                <span className={styles.paneTag}>Fase 2: Estabilidad Acelerada (Aging)</span>
                <span className={styles.paneMetric}>Simulación 2 Años OK</span>
              </div>
              <div className={styles.paneMediaWrap}>
                <img
                  src={laboratory.images[2]}
                  alt="Cámara de envejecimiento y estabilidad térmica"
                  className={styles.panePhoto}
                  width={560}
                  height={240}
                />
              </div>
              <div className={styles.paneBody}>
                <div className={styles.graphContainer}>
                  <div className={styles.graphBarRow}>
                    <span className={styles.graphLabel}>T = 0 Días</span>
                    <div className={styles.graphTrack}>
                      <div className={styles.graphFillTeal} style={{ width: '100%' }} />
                    </div>
                    <span>100%</span>
                  </div>
                  <div className={styles.graphBarRow}>
                    <span className={styles.graphLabel}>T = 30 Días (45°C)</span>
                    <div className={styles.graphTrack}>
                      <div className={styles.graphFillTeal} style={{ width: '98.5%' }} />
                    </div>
                    <span>98.5%</span>
                  </div>
                  <div className={styles.graphBarRow}>
                    <span className={styles.graphLabel}>T = 60 Días (45°C)</span>
                    <div className={styles.graphTrack}>
                      <div className={styles.graphFillTeal} style={{ width: '97.2%' }} />
                    </div>
                    <span>97.2%</span>
                  </div>
                  <div className={styles.graphBarRow}>
                    <span className={styles.graphLabel}>T = 90 Días (45°C)</span>
                    <div className={styles.graphTrack}>
                      <div className={styles.graphFillTeal} style={{ width: '96.8%' }} />
                    </div>
                    <span>96.8%</span>
                  </div>
                </div>
                <div className={styles.dataGrid} style={{ marginTop: '4px' }}>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>Separación de Fases</span>
                    <span className={styles.dataVal} style={{ color: '#25d366' }}>0.00 % (Nula)</span>
                  </div>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>Deriva de Viscosidad</span>
                    <span className={styles.dataVal}>&lt; 1.8 %</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual 3: Análisis Fisicoquímico */}
            <div className={`${styles.visualPane} ${activeStep === 2 ? styles.activeVisualPane : ''}`}>
              <div className={styles.paneHeader}>
                <span className={styles.paneTag}>Fase 3: Telemetría Fisicoquímica de Precisión</span>
                <span className={styles.paneMetric}>Certificado COA Listo</span>
              </div>
              <div className={styles.paneMediaWrap}>
                <img
                  src={laboratory.images[1]}
                  alt="Instrumentación de control analítico y mediciones fisicoquímicas"
                  className={styles.panePhoto}
                  width={560}
                  height={240}
                />
              </div>
              <div className={styles.paneBody}>
                <div className={styles.dataGrid}>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>pH Digital @ 25°C</span>
                    <span className={styles.dataVal}>8.45 ± 0.05</span>
                  </div>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>Viscosidad Brookfield</span>
                    <span className={styles.dataVal}>1,450 cPs (Sp. 3)</span>
                  </div>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>Densidad Picnometría</span>
                    <span className={styles.dataVal}>1.042 g/cm³</span>
                  </div>
                  <div className={styles.dataBox}>
                    <span className={styles.dataKey}>Punto de Turbidez</span>
                    <span className={styles.dataVal}>68.2 °C</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
