import React from 'react';
import { Send, Headphones, Instagram, Youtube } from 'lucide-react';

export default function Footer({ t, onOpenTerms, onOpenPrivacy }) {
  return (
    <footer className="ftr">
      <div className="container">

        {/* ── Top row: brand + nav + socials ── */}
        <div className="ftr-top">

          {/* Brand */}
          <div className="ftr-brand">
            <div className="ftr-monogram" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 32 32" fill="none">
                <rect width="32" height="32" rx="9" fill="white" fillOpacity=".12"/>
                <rect x="7"  y="8"  width="4" height="16" rx="2" fill="white"/>
                <rect x="21" y="8"  width="4" height="16" rx="2" fill="white"/>
                <rect x="7"  y="14" width="18" height="4"  rx="2" fill="white" fillOpacity=".7"/>
              </svg>
            </div>
            <span className="ftr-wordmark">HASHARCHI</span>
          </div>

          {/* Nav links */}
          <nav className="ftr-nav">
            <a href="#about"        className="ftr-link">{t.navAbout}</a>
            <a href="#how-it-works" className="ftr-link">{t.navHowItWorks}</a>
            <a href="#why-us"       className="ftr-link">{t.navWhyUs}</a>
            <a href="#contact"      className="ftr-link">{t.navContact}</a>
          </nav>

          {/* Socials */}
          <div className="ftr-socials">
            <a href="https://t.me/hasharchiuz"               target="_blank" rel="noopener noreferrer" className="ftr-social-btn" aria-label="Telegram"><Send size={16}/></a>
            <a href="https://t.me/hasharchiadmin"            target="_blank" rel="noopener noreferrer" className="ftr-social-btn" aria-label="Support"><Headphones size={16}/></a>
            <a href="https://www.instagram.com/hasharchi"    target="_blank" rel="noopener noreferrer" className="ftr-social-btn" aria-label="Instagram"><Instagram size={16}/></a>
            <a href="https://www.youtube.com/@hasharchi"     target="_blank" rel="noopener noreferrer" className="ftr-social-btn" aria-label="YouTube"><Youtube size={16}/></a>
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="ftr-divider" />

        {/* ── Bottom row: copyright + legal ── */}
        <div className="ftr-bottom">
          <span className="ftr-copy">{t.footerRights}</span>
          <div className="ftr-legal">
            <button className="ftr-legal-btn" onClick={onOpenTerms}>{t.footerOffer}</button>
            <span className="ftr-legal-dot" />
            <button className="ftr-legal-btn" onClick={onOpenPrivacy}>{t.footerPrivacy}</button>
          </div>
        </div>

      </div>
    </footer>
  );
}
