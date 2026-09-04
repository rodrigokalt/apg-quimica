'use client';

import React from 'react';
import styles from '@/styles/DesktopAbout.module.css';
import { siteData } from '@/data/siteData';

export function DesktopAbout() {
  const { about, visionMission } = siteData;

  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div>
            <div className={styles.tag}>Compromiso & Trayectoria</div>
            <h2 className={styles.title}>{about.title}</h2>
            <p className={styles.lead}>{about.lead}</p>
            <p className={styles.paragraph}>{about.description}</p>
            <div className={styles.partnerHighlight}>
              <strong>Alianza Estratégica: </strong> {about.partner}
            </div>
          </div>

          <div className={styles.imgWrapper}>
            <img
              src={about.image}
              alt="Instalaciones y equipo de APG Química"
              className={styles.aboutImg}
              width={600}
              height={440}
              loading="lazy"
            />
          </div>
        </div>

        <div className={styles.vmGrid}>
          <div className={styles.vmCard}>
            <div className={styles.vmHeader}>
              <span className={styles.vmIcon} aria-hidden="true">🎯</span>
              <h3 className={styles.vmTitle}>Visión Sustentable</h3>
            </div>
            <p className={styles.vmText}>{visionMission.vision}</p>
          </div>

          <div className={styles.vmCard}>
            <div className={styles.vmHeader}>
              <span className={styles.vmIcon} aria-hidden="true">⚙️</span>
              <h3 className={styles.vmTitle}>Misión Técnica</h3>
            </div>
            <p className={styles.vmText}>{visionMission.mission}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
