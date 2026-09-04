'use client';

import React from 'react';
import styles from '@/styles/DesktopLaboratory.module.css';
import { siteData } from '@/data/siteData';

export function DesktopLaboratory() {
  const { laboratory } = siteData;

  return (
    <section id="laboratorio" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.headerRow}>
          <div className={styles.tag}>Soporte Técnico & Control Fisicoquímico</div>
          <h2 className={styles.title}>{laboratory.title}</h2>
          <p className={styles.description}>{laboratory.description}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.photosGallery}>
            <div className={styles.largePhotoCard}>
              <img
                src={laboratory.images[0]}
                alt="Laboratorio de pruebas APG Química"
                className={styles.labImg}
                width={400}
                height={496}
                loading="lazy"
              />
              <span className={styles.photoBadge}>Equipo de Aplicación</span>
            </div>

            <div className={styles.smallPhotoCard}>
              <img
                src={laboratory.images[1]}
                alt="Mediciones fisicoquímicas APG Química"
                className={styles.labImg}
                width={300}
                height={240}
                loading="lazy"
              />
              <span className={styles.photoBadge}>Control Analítico</span>
            </div>

            <div className={styles.smallPhotoCard}>
              <img
                src={laboratory.images[2]}
                alt="Ensayos de estabilidad química APG Química"
                className={styles.labImg}
                width={300}
                height={240}
                loading="lazy"
              />
              <span className={styles.photoBadge}>Pruebas de Estabilidad</span>
            </div>
          </div>

          <div className={styles.capabilitiesCol}>
            {laboratory.capabilities.map((cap, idx) => (
              <div key={idx} className={styles.capCard}>
                <span className={styles.capIndex}>0{idx + 1}</span>
                <span className={styles.capText}>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
