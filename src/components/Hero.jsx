import React, { useState } from 'react';
import { Users, Flame, Zap, Droplet, Truck, Sparkles, Wrench } from 'lucide-react';
import heroImg from '../ChatGPT Image Jul 25, 2026, 11_16_46 AM-Photoroom.png';
import qrCodeImg from '../qrcode.gif';

export default function Hero({ t, onOpenDownload }) {
  const [imgLoaded, setImgLoaded] = useState(false);

  // Left chips: slide-in from left, then continuous individual float loop
  const leftChips = [
    {
      cls: 'chip-red',
      icon: <Flame size={13} />,
      label: t.chipPlumber,
      entDelay: '0s',    entDur: '.5s',
      floatDelay: '.55s', floatDur: '2.8s', floatY: '-7px',
    },
    {
      cls: 'chip-yellow',
      icon: <Zap size={13} />,
      label: t.chipElectrician,
      entDelay: '.14s',  entDur: '.5s',
      floatDelay: '.7s',  floatDur: '3.4s', floatY: '-6px',
    },
    {
      cls: 'chip-blue',
      icon: <Droplet size={13} />,
      label: t.chipConstruction,
      entDelay: '.28s',  entDur: '.5s',
      floatDelay: '.85s', floatDur: '2.5s', floatY: '-8px',
    },
  ];

  // Right chips: slide-in from right, then continuous individual float loop
  const rightChips = [
    {
      cls: 'chip-orange',
      icon: <Wrench size={13} />,
      label: t.chipCarpenter,
      entDelay: '.08s',  entDur: '.5s',
      floatDelay: '.62s', floatDur: '3.1s', floatY: '-6px',
    },
    {
      cls: 'chip-cyan',
      icon: <Truck size={13} />,
      label: t.chipLoader,
      entDelay: '.22s',  entDur: '.5s',
      floatDelay: '.76s', floatDur: '2.6s', floatY: '-8px',
    },
    {
      cls: 'chip-green',
      icon: <Sparkles size={13} />,
      label: t.chipCleaner,
      entDelay: '.36s',  entDur: '.5s',
      floatDelay: '.94s', floatDur: '3.6s', floatY: '-5px',
    },
  ];

  const statPills = [
    { cls: 'pillar-3', val: '50K+', delay: '0s',   dur: '3.2s' },
    { cls: 'pillar-4', val: '345',  delay: '0.8s',  dur: '2.7s' },
    { cls: 'pillar-5', val: '146',  delay: '1.4s',  dur: '3.6s' },
    { cls: 'pillar-6', val: '50',   delay: '0.4s',  dur: '2.9s' },
  ];

  return (
    <section className="domo-hero-exact">

      {/* Animated stat pills */}
      {statPills.map((p, i) => (
        <div
          key={i}
          className={`chart-bg-pillar ${p.cls} pillar-float`}
          style={{ animationDelay: p.delay, animationDuration: p.dur }}
        >
          {p.val}
        </div>
      ))}

      <div className="container domo-hero-container">

        {/* ── TOP ── */}
        <div className="hero-top-block">
          <div className="notice-chip">
            <span className="notice-chip-dot" />
            <span>{t.heroTopNotice}</span>
          </div>
          <h1 className="hero-headline">
            {t.heroTitleMain1}<br />
            <span className="hero-headline-accent">{t.heroTitleHighlight}</span> {t.heroTitleMain2}
          </h1>
        </div>

        {/* ── CENTER ── */}
        <div className="hero-phones-row">

          {/* Left chips */}
          <div className="hero-side-chips left-chips">
            {leftChips.map((c, i) => (
              <span
                key={i}
                className={`domo-chip ${c.cls} chip-animated`}
                style={{
                  '--chip-float-y': c.floatY,
                  animation: [
                    `chip-from-left ${c.entDur} cubic-bezier(.22,.68,0,1.2) ${c.entDelay} both`,
                    `chip-float      ${c.floatDur} ease-in-out              ${c.floatDelay} infinite`,
                  ].join(', '),
                }}
              >
                <span className="chip-icon-wrap">{c.icon}</span>
                {c.label}
              </span>
            ))}
          </div>

          {/* Phone image with skeleton loader */}
          <div className="hero-phones-frame">
            {!imgLoaded && <div className="img-skeleton" />}
            <img
              src={heroImg}
              alt="HASHARCHI Mobil Ilova"
              className={`hero-phones-img phones-levitate ${imgLoaded ? 'img-loaded' : ''}`}
              onLoad={() => setImgLoaded(true)}
              fetchpriority="high"
            />
          </div>

          {/* Right chips */}
          <div className="hero-side-chips right-chips">
            {rightChips.map((c, i) => (
              <span
                key={i}
                className={`domo-chip ${c.cls} chip-animated`}
                style={{
                  '--chip-float-y': c.floatY,
                  animation: [
                    `chip-from-right ${c.entDur} cubic-bezier(.22,.68,0,1.2) ${c.entDelay} both`,
                    `chip-float       ${c.floatDur} ease-in-out              ${c.floatDelay} infinite`,
                  ].join(', '),
                }}
              >
                <span className="chip-icon-wrap">{c.icon}</span>
                {c.label}
              </span>
            ))}
          </div>
        </div>

        {/* ── BOTTOM ── */}
        <div className="domo-bottom-row">
          <div className="domo-stat-card">
            <div className="stat-icon-circle">
              <Users size={22} color="#ffffff" />
            </div>
            <div className="stat-label">{t.statRegistered}</div>
            <div className="stat-number">50K+</div>
          </div>

          <div className="domo-qr-card" onClick={onOpenDownload}>
            <div className="qr-left-content">
              <h3 className="qr-title">{t.qrTitle}</h3>
              <p className="qr-subtitle">
                {t.qrSubtitle}
              </p>
              <div className="qr-store-badges-row">
                <span className="store-pill">App Store</span>
                <span className="store-pill">Google Play</span>
              </div>
            </div>
            <div className="qr-code-box">
              <img src={qrCodeImg} alt="Hasharchi QR Code" className="domo-qr-img" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
