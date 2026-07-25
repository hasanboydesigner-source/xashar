import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Check, Download } from 'lucide-react';

const LANGUAGES = [
  { code: 'UZ', label: "O'zbekcha", flag: '🇺🇿' },
  { code: 'RU', label: 'Русский',   flag: '🇷🇺' },
  { code: 'ЎЗ', label: 'Ўзбекча',  flag: '🇺🇿' },
];

export default function Header({ lang, setLang, t, onOpenDownload }) {
  const [scrolled, setScrolled]           = useState(false);
  const [langOpen,  setLangOpen]          = useState(false);
  const dropRef                           = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onOutside = (e) => {
      if (dropRef.current && !dropRef.current.contains(e.target)) setLangOpen(false);
    };
    window.addEventListener('scroll', onScroll);
    document.addEventListener('mousedown', onOutside);
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousedown', onOutside);
    };
  }, []);

  const current = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0];

  return (
    <header className={`hdr${scrolled ? ' hdr--scrolled' : ''}`}>
      <div className="container hdr-inner">

        {/* ── Brand wordmark (no image) ── */}
        <a href="#" className="hdr-brand">
          {/* Geometric monogram */}
          <span className="hdr-monogram" aria-hidden="true">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="9" fill="#ffffff" fillOpacity=".15"/>
              <rect x="1" y="1" width="30" height="30" rx="8" stroke="white" strokeOpacity=".25" strokeWidth="1"/>
              {/* Stylised H shape */}
              <rect x="7"  y="8"  width="4" height="16" rx="2" fill="white"/>
              <rect x="21" y="8"  width="4" height="16" rx="2" fill="white"/>
              <rect x="7"  y="14" width="18" height="4"  rx="2" fill="white" fillOpacity=".75"/>
            </svg>
          </span>
          <span className="hdr-wordmark">HASHARCHI</span>
        </a>

        {/* ── Centre nav ── */}
        <nav className="hdr-nav" aria-label="Asosiy menyu">
          <a href="#about"        className="hdr-link">{t.navAbout}</a>
          <a href="#how-it-works" className="hdr-link">{t.navHowItWorks}</a>
          <a href="#why-us"       className="hdr-link">{t.navWhyUs}</a>
          <a href="#contact"      className="hdr-link">{t.navContact}</a>
        </nav>

        {/* ── Right controls ── */}
        <div className="hdr-controls">

          {/* Language picker */}
          <div className="hdr-lang" ref={dropRef}>
            <button
              className="hdr-lang-btn"
              onClick={() => setLangOpen(o => !o)}
              aria-expanded={langOpen}
              aria-label="Tilni tanlang"
            >
              <span className="hdr-lang-code">{current.code}</span>
              <ChevronDown
                size={12}
                className={`hdr-lang-chevron${langOpen ? ' open' : ''}`}
              />
            </button>

            {langOpen && (
              <div className="hdr-lang-menu" role="menu">
                {LANGUAGES.map(l => (
                  <button
                    key={l.code}
                    role="menuitem"
                    className={`hdr-lang-item${lang === l.code ? ' selected' : ''}`}
                    onClick={() => { setLang(l.code); setLangOpen(false); }}
                  >
                    <span className="hdr-lang-item-code">{l.code}</span>
                    <span className="hdr-lang-item-name">{l.label}</span>
                    {lang === l.code && <Check size={13} className="hdr-lang-check" />}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Download CTA */}
          <button className="hdr-cta" onClick={onOpenDownload}>
            <Download size={14} strokeWidth={2.5} />
            <span>{t.downloadAppShort}</span>
          </button>
        </div>

      </div>
    </header>
  );
}
