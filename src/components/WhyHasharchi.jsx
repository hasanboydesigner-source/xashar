import React from 'react';
import { Zap, MapPin, Smartphone, Star, ShieldCheck } from 'lucide-react';

const whyItems = [
  { icon: <Zap size={20} />, key: 'why1', accent: '#f59e0b', bg: 'rgba(245,158,11,.12)' },
  { icon: <MapPin size={20} />, key: 'why2', accent: '#ef4444', bg: 'rgba(239,68,68,.12)' },
  { icon: <Smartphone size={20} />, key: 'why3', accent: '#3b82f6', bg: 'rgba(59,130,246,.12)' },
  { icon: <Star size={20} />, key: 'why4', accent: '#8b5cf6', bg: 'rgba(139,92,246,.12)' },
  { icon: <ShieldCheck size={20} />, key: 'why5', accent: '#10b981', bg: 'rgba(16,185,129,.12)' },
];

export default function WhyHasharchi({ t }) {
  return (
    <section className="section-light" id="why-us">
      <div className="container">

        <div className="section-eyebrow">
          <span className="eyebrow-dot" />
          {t.whyEyebrow}
        </div>

        <div className="why-layout">
          
          <div className="why-left">
            <h2 className="why-heading">{t.whyTitle}</h2>
            <p className="why-subtext">
              {t.whySubtext}
            </p>
          </div>

          <div className="why-list">
            {whyItems.map((item, i) => (
              <div className="why-row" key={i}>
                <span className="why-row-icon" style={{ background: item.bg, color: item.accent }}>
                  {item.icon}
                </span>
                <span className="why-row-text">{t[item.key]}</span>
                <span className="why-row-num">{String(i + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
