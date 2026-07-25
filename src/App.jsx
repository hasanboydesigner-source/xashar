import React, { useState } from 'react';
import { translations } from './data/translations';
import Header from './components/Header';
import Hero from './components/Hero';
import MuhimBanner from './components/MuhimBanner';
import WhatIsHasharchi from './components/WhatIsHasharchi';
import HowItWorks from './components/HowItWorks';
import WhyHasharchi from './components/WhyHasharchi';
import DownloadCTA from './components/DownloadCTA';
import AboutContact from './components/AboutContact';
import Footer from './components/Footer';
import Modals from './components/Modals';

export default function App() {
  const [lang, setLang] = useState('UZ');
  const [langLoading, setLangLoading] = useState(false);
  const [downloadOpen, setDownloadOpen] = useState(false);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const [termsOpen, setTermsOpen] = useState(false);

  const t = translations[lang] || translations.UZ;

  const handleLangChange = (newLang) => {
    if (newLang === lang) return;
    setLangLoading(true);
    setTimeout(() => {
      setLang(newLang);
      setLangLoading(false);
    }, 400);
  };

  return (
    <div className="app-root">
      <Header
        lang={lang}
        setLang={handleLangChange}
        t={t}
        onOpenDownload={() => setDownloadOpen(true)}
      />

      <div className={`lang-transition-wrapper ${langLoading ? 'is-switching' : ''}`}>
        {langLoading && (
          <div className="lang-loader-overlay">
            <div className="lang-spinner"></div>
          </div>
        )}
        <Hero t={t} onOpenDownload={() => setDownloadOpen(true)} />

        <MuhimBanner t={t} />

        <WhatIsHasharchi t={t} />

        <HowItWorks t={t} />

        <WhyHasharchi t={t} />

        <DownloadCTA t={t} onOpenDownload={() => setDownloadOpen(true)} />

        <AboutContact t={t} />

        <Footer
          t={t}
          onOpenPrivacy={() => setPrivacyOpen(true)}
          onOpenTerms={() => setTermsOpen(true)}
        />
      </div>

      <Modals
        t={t}
        downloadOpen={downloadOpen}
        setDownloadOpen={setDownloadOpen}
        privacyOpen={privacyOpen}
        setPrivacyOpen={setPrivacyOpen}
        termsOpen={termsOpen}
        setTermsOpen={setTermsOpen}
      />
    </div>
  );
}
