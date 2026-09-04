'use client';

import React, { useState } from 'react';
import styles from '@/styles/QuoteModal.module.css';
import { siteData } from '@/data/siteData';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedMarket?: string;
}

export function QuoteModal({ isOpen, onClose, preselectedMarket }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    sector: preselectedMarket || 'metalurgia',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hola APG Química, solicito información técnica y cotización para el sector ${formData.sector}. Mi nombre es ${formData.name || 'un cliente industrial'}${formData.company ? ` de la empresa ${formData.company}` : ''}.`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/524423952609?text=${encoded}`, '_blank');
  };

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div className={styles.modal} onClick={e => e.stopPropagation()}>
        <div className={styles.header}>
          <div>
            <h3 className={styles.title}>Solicitud de Cotización y Asesoría Técnica</h3>
            <p className={styles.subtitle}>Atención directa de ingenieros químicos especialistas de APG Química.</p>
          </div>
          <button type="button" className={styles.closeBtn} onClick={onClose} aria-label="Cerrar modal">
            &times;
          </button>
        </div>

        {submitted ? (
          <div className={styles.successMessage}>
            <div className={styles.successIcon}>✓</div>
            <h4 className={styles.successTitle}>Solicitud Recibida con Éxito</h4>
            <p className={styles.successText}>
              Un asesor técnico de APG Química revisará sus requerimientos y se comunicará a la brevedad.
            </p>
            <button type="button" className={styles.submitBtn} onClick={onClose}>
              Cerrar Ventana
            </button>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="quote-name">Nombre y Apellido *</label>
                <input
                  id="quote-name"
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Ing. Juan Pérez"
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="quote-company">Empresa / Razón Social</label>
                <input
                  id="quote-company"
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Industrias Químicas S.A."
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="quote-phone">Teléfono de Contacto *</label>
                <input
                  id="quote-phone"
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+52 442 000 0000"
                  className={styles.input}
                />
              </div>
              <div className={styles.field}>
                <label className={styles.label} htmlFor="quote-email">Correo Corporativo *</label>
                <input
                  id="quote-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contacto@empresa.com"
                  className={styles.input}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="quote-sector">Mercado / Solución de Interés *</label>
              <select
                id="quote-sector"
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                className={styles.select}
              >
                <option value="antifrogen">Antifrogen® N / L (Fluidos Caloportadores Clariant)</option>
                {siteData.markets.map(m => (
                  <option key={m.id} value={m.id}>{m.name}</option>
                ))}
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="quote-message">Detalles del Requerimiento / Volumen Estimado</label>
              <textarea
                id="quote-message"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
                placeholder="Indique volumen requerido, especificaciones técnicas o parámetros fisicoquímicos deseados..."
                className={styles.textarea}
              />
            </div>

            <div className={styles.actions}>
              <button type="submit" className={styles.submitBtn}>
                Enviar Requerimiento
              </button>
              <button type="button" onClick={handleWhatsAppDirect} className={styles.whatsappBtn}>
                <span>Cotizar vía WhatsApp</span>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
