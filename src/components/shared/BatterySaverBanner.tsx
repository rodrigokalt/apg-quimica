'use client';

import React from 'react';
import styles from '@/styles/BatterySaverBanner.module.css';

interface BatterySaverBannerProps {
  batteryLevel: number | null;
  onOverride: () => void;
}

export function BatterySaverBanner({ batteryLevel, onOverride }: BatterySaverBannerProps) {
  return (
    <div className={styles.banner} role="status">
      <div className={styles.content}>
        <span className={styles.icon} aria-hidden="true">⚡</span>
        <div>
          <span className={styles.text}>Modo de Bajo Consumo Activo</span>{' '}
          <span className={styles.subtext}>
            {batteryLevel !== null ? `(Batería al ${batteryLevel}%)` : ''} Navegando en versión ligera para ahorrar energía.
          </span>
        </div>
      </div>
      <button 
        type="button" 
        onClick={onOverride}
        className={styles.toggleBtn}
        aria-label="Cambiar a vista completa"
      >
        Cambiar a Vista Completa
      </button>
    </div>
  );
}
