'use client';

import React from 'react';
import styles from '@/styles/DesktopNavbar.module.css';
import { siteData } from '@/data/siteData';

interface DesktopNavbarProps {
  onOpenQuote: () => void;
}

export function DesktopNavbar({ onOpenQuote }: DesktopNavbarProps) {
  return (
    <header className={styles.header}>
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <span className={styles.badgePartner}>Representante Oficial Clariant</span>
          <span className="tech-mono">Querétaro, Qro. | Cobertura Nacional</span>
        </div>
        <div className={styles.topBarContent}>
          <a href={`tel:${siteData.contact.phones[0].replace(/\s+/g, '')}`} className={styles.topBarLink}>
            <span aria-hidden="true">📞</span>
            <span className="tech-mono">{siteData.contact.phones[0]}</span>
          </a>
          <a href={siteData.contact.social.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.topBarLink}>
            <span aria-hidden="true">💬</span> WhatsApp Especialistas
          </a>
        </div>
      </div>

      <nav className={styles.navContainer} aria-label="Navegación principal">
        <a href="#inicio" className={styles.brandLink}>
          <img
            src="/images/APG-quimica.png"
            alt="APG Química – Soluciones Químicas Especializadas"
            className={styles.logoImg}
            width={180}
            height={46}
          />
        </a>

        <ul className={styles.navList}>
          {siteData.navigation.map(item => (
            <li key={item.href} className={styles.navItem}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className={styles.navActions}>
          <button type="button" onClick={onOpenQuote} className={styles.ctaQuote}>
            Solicitar Cotización
          </button>
        </div>
      </nav>
    </header>
  );
}
