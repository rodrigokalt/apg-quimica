'use client';

import React, { useEffect, useRef } from 'react';
import styles from '@/styles/DesktopHero.module.css';
import { siteData } from '@/data/siteData';

interface DesktopHeroProps {
  onOpenQuote: () => void;
}

export function DesktopHero({ onOpenQuote }: DesktopHeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle nodes simulating chemical molecular dispersion
    const particleCount = 42;
    const particles = Array.from({ length: particleCount }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      radius: Math.random() * 2.2 + 1.2,
      baseAlpha: Math.random() * 0.4 + 0.2
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        // Draw particle node
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(95, 187, 244, ${p.baseAlpha})`;
        ctx.fill();

        // Connect nearby particles to simulate chemical bonds
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const lineAlpha = (1 - dist / 150) * 0.18;
            ctx.strokeStyle = `rgba(95, 187, 244, ${lineAlpha})`;
            ctx.lineWidth = 0.85;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section id="inicio" className={styles.heroSection}>
      <canvas ref={canvasRef} className={styles.canvasBackground} aria-hidden="true" />

      <div className={styles.heroContent}>
        <div className={styles.leftCol}>
          <div className={styles.kickerPill}>
            <span className={styles.kickerDot} aria-hidden="true" />
            <span className={styles.kickerText}>Especialidades Químicas & Distribución Industrial</span>
          </div>

          <h1 className={styles.h1Title}>
            Formulación de Alto Rendimiento.{' '}
            <span className={styles.titleAccent}>Respaldo Técnico Absoluto.</span>
          </h1>

          <p className={styles.leadText}>
            Abastecemos a las industrias más exigentes con materias primas certificadas, fluidos caloportadores <strong>Antifrogen®</strong> y ensayos rigurosos en nuestro laboratorio propio de soporte técnico en Querétaro.
          </p>

          <div className={styles.ctaGroup}>
            <button type="button" onClick={onOpenQuote} className={styles.primaryBtn}>
              Solicitar Asesoría de Formulación
            </button>
            <a href="#mercados" className={styles.secondaryBtn}>
              Explorar los 12 Mercados
            </a>
          </div>

          {/* Trust Badges: Monochrome High-Contrast */}
          <div className={styles.trustBadgesRow}>
            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon} aria-hidden="true">⏱️</span>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>20+ Años</span>
                <span className={styles.badgeSub}>De Experiencia</span>
              </div>
            </div>

            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon} aria-hidden="true">🌐</span>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Clariant</span>
                <span className={styles.badgeSub}>Representante Oficial</span>
              </div>
            </div>

            <div className={styles.trustBadge}>
              <span className={styles.badgeIcon} aria-hidden="true">🛡️</span>
              <div className={styles.badgeContent}>
                <span className={styles.badgeTitle}>Libre de CMR</span>
                <span className={styles.badgeSub}>Certificación Oficial</span>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.labTelemetryCard}>
            <div className={styles.cardHeader}>
              <div className={styles.statusIndicator}>
                <span className={styles.liveDot} aria-hidden="true" />
                <span>LABORATORIO ACTIVO</span>
              </div>
              <span className="tech-mono" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)' }}>
                QUERÉTARO, MX
              </span>
            </div>

            <div className={styles.specsList}>
              <div className={styles.specRow}>
                <span className={styles.specKey}>Línea Caloportadora:</span>
                <span className={styles.specVal}>Antifrogen® N & L</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specKey}>Perfil Toxicológico:</span>
                <span className={styles.specVal}>Cero Sustancias CMR</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specKey}>Sectores de Aplicación:</span>
                <span className={styles.specVal}>12 Industrias Clave</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specKey}>Control Analítico:</span>
                <span className={styles.specVal}>pH / Viscosidad / Estabilidad</span>
              </div>
            </div>
          </div>

          <div className={styles.labPhotoContainer}>
            <img
              src="/images/nuestro-laboratorio-1.jpg"
              alt="Equipo de medición y soporte técnico APG Química"
              className={styles.labHeroImg}
              width={500}
              height={190}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
