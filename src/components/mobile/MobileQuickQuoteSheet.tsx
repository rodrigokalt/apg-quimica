'use client';

import React, { useState } from 'react';
import styles from '@/styles/MobileLayout.module.css';
import { siteData } from '@/data/siteData';

interface MobileQuickQuoteSheetProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedSector?: string;
}

export function MobileQuickQuoteSheet({ isOpen, onClose, preselectedSector }: MobileQuickQuoteSheetProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [sector, setSector] = useState(preselectedSector || 'antifrogen');
  const [done, setDone] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
  };

  const handleWhatsAppQuick = () => {
    const msg = `Hola APG Química, requiero cotización técnica rápida para: ${sector}. Nombre: ${name || 'Cliente'} - Tel: ${phone || 'No especificado'}.`;
    window.open(`https://wa.me/524423952609?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <div className={styles.sheetOverlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.sheetContent} onClick={e => e.stopPropagation()}>
        <div className={styles.sheetHeader}>
          <h3 className={styles.sheetTitle}>Cotización en 30 Segundos</h3>
          <button type="button" className={styles.closeSheetBtn} onClick={onClose} aria-label="Cerrar">
            &times;
          </button>
        </div>

        {done ? (
          <div style={{ textAlign: 'center', padding: '24px 0' }}>
            <div style={{ fontSize: '2rem', marginBottom: '8px' }}>✓</div>
            <h4 style={{ color: 'var(--brand-slate)', marginBottom: '8px' }}>Solicitud Enviada</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '16px' }}>
              Un ingeniero especialista de APG Química se pondrá en contacto al {phone}.
            </p>
            <button type="button" className={styles.primaryQuoteBtn} onClick={onClose}>
              Aceptar
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-slate)', display: 'block', marginBottom: '4px' }}>
                Tu Nombre *
              </label>
              <input
                type="text"
                required
                placeholder="Ej. Ing. Carlos Soto"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '0.95rem' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-slate)', display: 'block', marginBottom: '4px' }}>
                WhatsApp o Teléfono *
              </label>
              <input
                type="tel"
                required
                placeholder="+52 442 000 0000"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '0.95rem' }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--brand-slate)', display: 'block', marginBottom: '4px' }}>
                Solución o Mercado *
              </label>
              <select
                value={sector}
                onChange={e => setSector(e.target.value)}
                style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '0.95rem', background: '#fff' }}
              >
                <option value="antifrogen">Antifrogen® Clariant (Fluidos Caloportadores)</option>
                {siteData.markets.map(m => (
                  <option key={m.id} value={m.name}>{m.name}</option>
                ))}
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              <button type="submit" className={styles.primaryQuoteBtn}>
                Enviar Requerimiento
              </button>
              <button type="button" onClick={handleWhatsAppQuick} className={styles.whatsappDirectLink}>
                <span>Enviar Directo a WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
