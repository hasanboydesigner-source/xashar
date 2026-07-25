import React from 'react';
import { Smartphone, Star, Shield, Zap } from 'lucide-react';
import qrCodeImg from '../qrcode.gif';

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
                <img src={qrCodeImg} alt="Hasharchi App QR Code" className="cta-qr-img" />
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
