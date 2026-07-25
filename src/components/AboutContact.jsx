import React from 'react';
import { Send, Headphones, Instagram, Youtube } from 'lucide-react';

const socials = [
  {
    href: 'https://t.me/hasharchiuz',
    icon: <Send size={20} />,
    label: 'Telegram kanal',
    handle: '@hasharchiuz',
    accent: '#2563eb',
    bg: 'rgba(37,99,235,.1)',
  },
  {
    href: 'https://t.me/hasharchiadmin',
    icon: <Headphones size={20} />,
    label: 'Qo\'llab-quvvatlash',
    handle: '@hasharchiadmin',
    accent: '#f97316',
    bg: 'rgba(249,115,22,.1)',
  },
  {
    href: 'https://www.instagram.com/hasharchi',
    icon: <Instagram size={20} />,
    label: 'Instagram',
    handle: '@hasharchi',
    accent: '#e1306c',
    bg: 'rgba(225,48,108,.1)',
  },
  {
    href: 'https://www.youtube.com/@hasharchi',
    icon: <Youtube size={20} />,
    label: 'YouTube',
    handle: '@hasharchi',
    accent: '#ef4444',
    bg: 'rgba(239,68,68,.1)',
  },
];

export default function AboutContact({ t }) {
  return (
    <section className="section-light" id="contact">
      <div className="container">

        <div className="section-eyebrow">
          <span className="eyebrow-dot" />
          Biz haqimizda & Aloqa
        </div>

        <div className="about-layout">

          {/* Left: About */}
          <div className="about-left">
            <h2 className="about-heading">{t.aboutTitle}</h2>
            <p className="about-body">{t.aboutText}</p>
          </div>

          {/* Right: Contact cards */}
          <div className="about-right">
            <div className="contact-heading">{t.contactTitle}</div>
            <div className="social-grid">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-card"
                  style={{ '--card-accent': s.accent, '--card-bg': s.bg }}
                >
                  <span className="social-card-icon" style={{ background: s.bg, color: s.accent }}>
                    {s.icon}
                  </span>
                  <div className="social-card-info">
                    <div className="social-card-label">{s.label}</div>
                    <div className="social-card-handle">{s.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
