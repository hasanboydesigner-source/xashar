import React from 'react';
import { Smartphone, Star, Shield, Zap } from 'lucide-react';

const QR_SVG = () => (
  <svg viewBox="0 0 200 200" width="170" height="170" xmlns="http://www.w3.org/2000/svg">
    <rect width="200" height="200" fill="#ffffff" rx="0"/>
    {/* Top-left finder */}
    <rect x="14" y="14" width="52" height="52" fill="#0a2fa8" rx="6"/>
    <rect x="22" y="22" width="36" height="36" fill="#ffffff" rx="3"/>
    <rect x="30" y="30" width="20" height="20" fill="#0a2fa8" rx="2"/>
    {/* Top-right finder */}
    <rect x="134" y="14" width="52" height="52" fill="#0a2fa8" rx="6"/>
    <rect x="142" y="22" width="36" height="36" fill="#ffffff" rx="3"/>
    <rect x="150" y="30" width="20" height="20" fill="#ff6b00" rx="2"/>
    {/* Bottom-left finder */}
    <rect x="14" y="134" width="52" height="52" fill="#0a2fa8" rx="6"/>
    <rect x="22" y="142" width="36" height="36" fill="#ffffff" rx="3"/>
    <rect x="30" y="150" width="20" height="20" fill="#0a2fa8" rx="2"/>
    {/* Data modules */}
    <rect x="80" y="14" width="8" height="8" fill="#0a2fa8"/>
    <rect x="92" y="14" width="8" height="8" fill="#ff6b00"/>
    <rect x="104" y="14" width="8" height="8" fill="#0a2fa8"/>
    <rect x="116" y="14" width="8" height="8" fill="#0a2fa8"/>
    <rect x="80" y="26" width="8" height="8" fill="#ff6b00"/>
    <rect x="104" y="26" width="8" height="8" fill="#ff6b00"/>
    <rect x="116" y="26" width="8" height="8" fill="#0a2fa8"/>
    <rect x="92" y="38" width="8" height="8" fill="#0a2fa8"/>
    <rect x="80" y="50" width="8" height="8" fill="#0a2fa8"/>
    <rect x="104" y="50" width="8" height="8" fill="#ff6b00"/>
    <rect x="116" y="50" width="8" height="8" fill="#0a2fa8"/>
    <rect x="80" y="62" width="8" height="8" fill="#ff6b00"/>
    <rect x="92" y="62" width="8" height="8" fill="#0a2fa8"/>
    <rect x="116" y="62" width="8" height="8" fill="#ff6b00"/>

    <rect x="14" y="80" width="8" height="8" fill="#0a2fa8"/>
    <rect x="26" y="80" width="8" height="8" fill="#ff6b00"/>
    <rect x="50" y="80" width="8" height="8" fill="#0a2fa8"/>
    <rect x="62" y="80" width="8" height="8" fill="#ff6b00"/>
    <rect x="80" y="80" width="8" height="8" fill="#0a2fa8"/>
    <rect x="92" y="80" width="8" height="8" fill="#0a2fa8"/>
    <rect x="104" y="80" width="8" height="8" fill="#ff6b00"/>
    <rect x="116" y="80" width="8" height="8" fill="#0a2fa8"/>
    <rect x="128" y="80" width="8" height="8" fill="#ff6b00"/>
    <rect x="140" y="80" width="8" height="8" fill="#0a2fa8"/>
    <rect x="152" y="80" width="8" height="8" fill="#0a2fa8"/>
    <rect x="164" y="80" width="8" height="8" fill="#ff6b00"/>
    <rect x="176" y="80" width="8" height="8" fill="#0a2fa8"/>

    <rect x="14" y="92" width="8" height="8" fill="#ff6b00"/>
    <rect x="38" y="92" width="8" height="8" fill="#0a2fa8"/>
    <rect x="62" y="92" width="8" height="8" fill="#0a2fa8"/>
    <rect x="80" y="92" width="8" height="8" fill="#ff6b00"/>
    <rect x="104" y="92" width="8" height="8" fill="#0a2fa8"/>
    <rect x="128" y="92" width="8" height="8" fill="#0a2fa8"/>
    <rect x="152" y="92" width="8" height="8" fill="#ff6b00"/>
    <rect x="176" y="92" width="8" height="8" fill="#0a2fa8"/>

    <rect x="26" y="104" width="8" height="8" fill="#0a2fa8"/>
    <rect x="50" y="104" width="8" height="8" fill="#ff6b00"/>
    <rect x="80" y="104" width="8" height="8" fill="#0a2fa8"/>
    <rect x="92" y="104" width="8" height="8" fill="#ff6b00"/>
    <rect x="116" y="104" width="8" height="8" fill="#0a2fa8"/>
    <rect x="140" y="104" width="8" height="8" fill="#ff6b00"/>
    <rect x="164" y="104" width="8" height="8" fill="#0a2fa8"/>

    <rect x="14" y="116" width="8" height="8" fill="#0a2fa8"/>
    <rect x="38" y="116" width="8" height="8" fill="#ff6b00"/>
    <rect x="62" y="116" width="8" height="8" fill="#0a2fa8"/>
    <rect x="80" y="116" width="8" height="8" fill="#ff6b00"/>
    <rect x="104" y="116" width="8" height="8" fill="#0a2fa8"/>
    <rect x="128" y="116" width="8" height="8" fill="#0a2fa8"/>
    <rect x="152" y="116" width="8" height="8" fill="#ff6b00"/>
    <rect x="176" y="116" width="8" height="8" fill="#0a2fa8"/>

    <rect x="80" y="128" width="8" height="8" fill="#0a2fa8"/>
    <rect x="92" y="128" width="8" height="8" fill="#ff6b00"/>
    <rect x="104" y="128" width="8" height="8" fill="#0a2fa8"/>
    <rect x="116" y="128" width="8" height="8" fill="#ff6b00"/>
    <rect x="128" y="128" width="8" height="8" fill="#0a2fa8"/>
    <rect x="140" y="128" width="8" height="8" fill="#0a2fa8"/>
    <rect x="164" y="128" width="8" height="8" fill="#ff6b00"/>
    <rect x="176" y="128" width="8" height="8" fill="#0a2fa8"/>

    <rect x="80" y="140" width="8" height="8" fill="#ff6b00"/>
    <rect x="104" y="140" width="8" height="8" fill="#0a2fa8"/>
    <rect x="128" y="140" width="8" height="8" fill="#ff6b00"/>
    <rect x="152" y="140" width="8" height="8" fill="#0a2fa8"/>
    <rect x="176" y="140" width="8" height="8" fill="#ff6b00"/>

    <rect x="80" y="152" width="8" height="8" fill="#0a2fa8"/>
    <rect x="92" y="152" width="8" height="8" fill="#0a2fa8"/>
    <rect x="116" y="152" width="8" height="8" fill="#ff6b00"/>
    <rect x="140" y="152" width="8" height="8" fill="#0a2fa8"/>
    <rect x="164" y="152" width="8" height="8" fill="#0a2fa8"/>

    <rect x="80" y="164" width="8" height="8" fill="#ff6b00"/>
    <rect x="104" y="164" width="8" height="8" fill="#0a2fa8"/>
    <rect x="128" y="164" width="8" height="8" fill="#ff6b00"/>
    <rect x="152" y="164" width="8" height="8" fill="#0a2fa8"/>
    <rect x="176" y="164" width="8" height="8" fill="#ff6b00"/>

    <rect x="80" y="176" width="8" height="8" fill="#0a2fa8"/>
    <rect x="92" y="176" width="8" height="8" fill="#ff6b00"/>
    <rect x="116" y="176" width="8" height="8" fill="#0a2fa8"/>
    <rect x="140" y="176" width="8" height="8" fill="#ff6b00"/>
    <rect x="164" y="176" width="8" height="8" fill="#0a2fa8"/>
    <rect x="176" y="176" width="8" height="8" fill="#0a2fa8"/>
  </svg>
);

const features = [
  { icon: <Zap size={16} />, text: 'Daqiqalar ichida usta toping' },
  { icon: <Shield size={16} />, text: 'Tekshirilgan mutaxassislar' },
  { icon: <Star size={16} />, text: 'Reytinglar va sharhlar' },
];

export default function DownloadCTA({ t }) {
  return (
    <section className="cta-section-pro">
      {/* subtle grid overlay */}
      <div className="cta-grid-overlay" aria-hidden="true" />

      <div className="container">
        <div className="cta-inner-layout">

          {/* ─── LEFT COLUMN ─── */}
          <div className="cta-left">
            <div className="cta-eyebrow">
              <Smartphone size={15} />
              <span>Bepul yuklab oling</span>
            </div>

            <h2 className="cta-left-heading">
              Hasharchi — <br />
              Har doim yoningizda
            </h2>

            <p className="cta-left-body">
              {t.ctaRussianReminder}
            </p>

            <ul className="cta-feature-list">
              {features.map((f, i) => (
                <li key={i} className="cta-feature-item">
                  <span className="cta-feature-icon">{f.icon}</span>
                  <span>{f.text}</span>
                </li>
              ))}
            </ul>

            <div className="cta-store-row">
              <a
                href="https://play.google.com/store/apps/details?id=uz.developer.hasharchi"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-store-badge"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Google Play"
                  height="44"
                />
              </a>
              <a
                href="https://apps.apple.com/uz/app/hasharchi/id6755495405"
                target="_blank"
                rel="noopener noreferrer"
                className="cta-store-badge"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                  alt="App Store"
                  height="44"
                />
              </a>
            </div>
          </div>

          {/* ─── RIGHT COLUMN  ─── */}
          <div className="cta-right">
            <div className="cta-qr-card">
              <p className="cta-qr-label">Kamerangiz bilan skanerlang</p>
              <div className="cta-qr-frame">
                <QR_SVG />
              </div>
              <p className="cta-qr-hint">
                iOS va Android uchun mavjud
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
