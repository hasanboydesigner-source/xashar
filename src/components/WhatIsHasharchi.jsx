import React from 'react';
import { Users, ClipboardList, PhoneCall } from 'lucide-react';

const cards = [
  {
    icon: <Users size={24} />,
    accent: '#f97316',
    bg: 'rgba(249,115,22,.1)',
    labelKey: 'feat1Title',
    descKey: 'feat1Desc',
  },
  {
    icon: <ClipboardList size={24} />,
    accent: '#8b5cf6',
    bg: 'rgba(139,92,246,.1)',
    labelKey: 'feat2Title',
    descKey: 'feat2Desc',
  },
  {
    icon: <PhoneCall size={24} />,
    accent: '#14b8a6',
    bg: 'rgba(20,184,166,.1)',
    labelKey: 'feat3Title',
    descKey: 'feat3Desc',
  },
];

export default function WhatIsHasharchi({ t }) {
  return (
    <section className="section-light" id="about">
      <div className="container">

        <div className="section-eyebrow">
          <span className="eyebrow-dot" />
          Platforma haqida
        </div>

        <div className="what-layout">
          
          <div className="what-left">
            <h2 className="what-heading">{t.whatTitle}</h2>
            <p className="what-body">{t.whatDesc}</p>
          </div>

          <div className="what-cards">
            {cards.map((c, i) => (
              <div className="what-card" key={i}>
                <span
                  className="what-card-icon"
                  style={{ background: c.bg, color: c.accent }}
                >
                  {c.icon}
                </span>
                <div className="what-card-body">
                  <div className="what-card-title">{t[c.labelKey]}</div>
                  <div className="what-card-desc">{t[c.descKey]}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
