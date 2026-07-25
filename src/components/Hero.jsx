import React from 'react';
import { Users, Flame, Zap, Droplet, Truck, Sparkles, Wrench } from 'lucide-react';
import heroImg from '../ChatGPT Image Jul 25, 2026, 11_16_46 AM-Photoroom.png';

// Left chips: slide-in from left, then continuous individual float loop
const leftChips = [
  {
    cls: 'chip-red',
    icon: <Flame size={13} />,
    label: 'Santexnik',
    // entrance delay | entrance dur | float delay (after entrance) | float dur | float Y
    entDelay: '0s',    entDur: '.5s',
    floatDelay: '.55s', floatDur: '2.8s', floatY: '-7px',
  },
  {
    cls: 'chip-yellow',
    icon: <Zap size={13} />,
    label: 'Elektrik',
    entDelay: '.14s',  entDur: '.5s',
    floatDelay: '.7s',  floatDur: '3.4s', floatY: '-6px',
  },
  {
    cls: 'chip-blue',
    icon: <Droplet size={13} />,
    label: 'Qurilish',
    entDelay: '.28s',  entDur: '.5s',
    floatDelay: '.85s', floatDur: '2.5s', floatY: '-8px',
  },
];

// Right chips: slide-in from right, then continuous individual float loop
const rightChips = [
  {
    cls: 'chip-orange',
    icon: <Wrench size={13} />,
    label: 'Duradgor',
    entDelay: '.08s',  entDur: '.5s',
    floatDelay: '.62s', floatDur: '3.1s', floatY: '-6px',
  },
  {
    cls: 'chip-cyan',
    icon: <Truck size={13} />,
    label: 'Yukchi',
    entDelay: '.22s',  entDur: '.5s',
    floatDelay: '.76s', floatDur: '2.6s', floatY: '-8px',
  },
  {
    cls: 'chip-green',
    icon: <Sparkles size={13} />,
    label: 'Tozalik',
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

export default function Hero({ t, onOpenDownload }) {
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
            <span>O'zbekistondagi №1 Kunlik ishchilar platformasi</span>
          </div>
          <h1 className="hero-headline">
            Usta va ishchi<br />
            <span className="hero-headline-accent">1 daqiqada</span> yoningizda
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

          {/* Phone image */}
          <div className="hero-phones-frame">
            <img
              src={heroImg}
              alt="HASHARCHI Mobil Ilova"
              className="hero-phones-img phones-levitate"
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
            <div className="stat-label">Ro'yxatdan o'tganlar</div>
            <div className="stat-number">50K+</div>
          </div>

          <div className="domo-qr-card" onClick={onOpenDownload}>
            <div className="qr-left-content">
              <h3 className="qr-title">Mobil ilovamizni yuklab oling</h3>
              <p className="qr-subtitle">
                Ushbu funksiyadan va ko'proq imkoniyatlardan foydalaning!
              </p>
              <div className="qr-store-badges-row">
                <span className="store-pill">App Store</span>
                <span className="store-pill">Google Play</span>
              </div>
            </div>
            <div className="qr-code-box">
              <svg viewBox="0 0 200 200" width="76" height="76">
                <rect width="200" height="200" fill="#ffffff" rx="8"/>
                <rect x="15" y="15" width="50" height="50" fill="#1251cc" rx="4"/>
                <rect x="25" y="25" width="30" height="30" fill="#ffffff" rx="2"/>
                <rect x="33" y="33" width="14" height="14" fill="#ff6b00" rx="1"/>
                <rect x="135" y="15" width="50" height="50" fill="#1251cc" rx="4"/>
                <rect x="145" y="25" width="30" height="30" fill="#ffffff" rx="2"/>
                <rect x="153" y="33" width="14" height="14" fill="#ff6b00" rx="1"/>
                <rect x="15" y="135" width="50" height="50" fill="#1251cc" rx="4"/>
                <rect x="25" y="145" width="30" height="30" fill="#ffffff" rx="2"/>
                <rect x="33" y="153" width="14" height="14" fill="#ff6b00" rx="1"/>
                <rect x="80" y="20" width="12" height="12" fill="#1251cc"/>
                <rect x="100" y="35" width="14" height="12" fill="#ff6b00"/>
                <rect x="75" y="55" width="18" height="12" fill="#1251cc"/>
                <rect x="20" y="80" width="12" height="14" fill="#1251cc"/>
                <rect x="45" y="90" width="15" height="15" fill="#ff6b00"/>
                <rect x="75" y="85" width="25" height="12" fill="#1251cc"/>
                <rect x="110" y="75" width="14" height="20" fill="#1251cc"/>
                <rect x="140" y="80" width="20" height="12" fill="#ff6b00"/>
                <rect x="170" y="95" width="15" height="15" fill="#1251cc"/>
                <rect x="80" y="115" width="20" height="15" fill="#1251cc"/>
                <rect x="110" y="120" width="15" height="25" fill="#ff6b00"/>
                <rect x="145" y="110" width="25" height="12" fill="#1251cc"/>
                <rect x="80" y="145" width="15" height="35" fill="#ff6b00"/>
                <rect x="105" y="155" width="30" height="14" fill="#1251cc"/>
                <rect x="145" y="145" width="20" height="25" fill="#1251cc"/>
                <rect x="170" y="170" width="15" height="15" fill="#ff6b00"/>
              </svg>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
