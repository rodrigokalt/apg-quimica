'use client';

import React, { useState } from 'react';
import styles from '@/styles/DesktopFooter.module.css';
import { siteData } from '@/data/siteData';

export function DesktopFooter() {
  const [formSent, setFormSent] = useState(false);
  const [footerForm, setFooterForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleFooterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <footer id="contacto" className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.topGrid}>
          <div className={styles.brandCol}>
            <div className={styles.footerLogo}>
              <img
                src="/images/APG-quimica.png"
                alt="APG Química Logotipo"
                height={38}
                width={150}
              />
            </div>

            <p className={styles.companyDesc}>
              {siteData.company.fullName}. {siteData.company.experience} Especialistas en soluciones químicas formuladas sobre medida y distribución autorizada Clariant en México.
            </p>

            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <span aria-hidden="true">📍</span>
                <span>{siteData.contact.address}</span>
              </li>
              <li className={styles.contactItem}>
                <span aria-hidden="true">📞</span>
                <span className="tech-mono">
                  {siteData.contact.phones.map((phone, idx) => (
                    <span key={phone}>
                      <a href={`tel:${phone.replace(/\s+/g, '')}`}>{phone}</a>
                      {idx < siteData.contact.phones.length - 1 ? ' / ' : ''}
                    </span>
                  ))}
                </span>
              </li>
              <li className={styles.contactItem}>
                <span aria-hidden="true">✉️</span>
                <a href={`mailto:${siteData.contact.email}`}>{siteData.contact.email}</a>
              </li>
            </ul>

            <div className={styles.socialRow}>
              <a href={siteData.contact.social.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn}>
                <span>WhatsApp Directo</span>
              </a>
              <a href={siteData.contact.social.linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn}>
                <span>LinkedIn</span>
              </a>
              <a href={siteData.contact.googleMapsUrl} target="_blank" rel="noopener noreferrer" className={styles.socialIconBtn}>
                <span>Ver Mapa</span>
              </a>
            </div>
          </div>

          <div className={styles.formCard}>
            <h3 className={styles.formTitle}>Contacto Rápido con Planta</h3>
            <p className={styles.formSubtitle}>Envíe su requerimiento y un ingeniero de soporte le contactará hoy mismo.</p>

            {formSent ? (
              <p style={{ color: 'var(--brand-accent-blue)', fontWeight: 600 }}>
                ✓ Mensaje enviado. Nos comunicaremos a la brevedad.
              </p>
            ) : (
              <form className={styles.form} onSubmit={handleFooterSubmit}>
                <input
                  type="text"
                  required
                  placeholder="Nombre y Apellido *"
                  className={styles.input}
                  value={footerForm.name}
                  onChange={e => setFooterForm({ ...footerForm, name: e.target.value })}
                />
                <input
                  type="tel"
                  required
                  placeholder="Teléfono / Celular *"
                  className={styles.input}
                  value={footerForm.phone}
                  onChange={e => setFooterForm({ ...footerForm, phone: e.target.value })}
                />
                <input
                  type="email"
                  required
                  placeholder="Correo Corporativo *"
                  className={styles.input}
                  value={footerForm.email}
                  onChange={e => setFooterForm({ ...footerForm, email: e.target.value })}
                />
                <textarea
                  rows={3}
                  required
                  placeholder="Mensaje o Producto Químico Requerido *"
                  className={styles.textarea}
                  value={footerForm.message}
                  onChange={e => setFooterForm({ ...footerForm, message: e.target.value })}
                />
                <button type="submit" className={styles.submitBtn}>
                  Enviar Mensaje Técnico
                </button>
              </form>
            )}
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className="tech-mono">
            © {new Date().getFullYear()} {siteData.company.fullName}. Todos los derechos reservados.
          </div>
          <div className="tech-mono">
            Santiago de Querétaro, México | Especialidades Químicas Industriales
          </div>
        </div>
      </div>
    </footer>
  );
}
