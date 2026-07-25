import React, { useState } from 'react';
import { UserCheck, Briefcase, ArrowRight } from 'lucide-react';

export default function HowItWorks({ t }) {
  const [active, setActive] = useState('clients');

  const clientSteps = [
    { n: '01', text: t.clientStep1 },
    { n: '02', text: t.clientStep2 },
    { n: '03', text: t.clientStep3 },
  ];
  const workerSteps = [
    { n: '01', text: t.workerStep1 },
    { n: '02', text: t.workerStep2 },
    { n: '03', text: t.workerStep3 },
  ];

  const steps = active === 'clients' ? clientSteps : workerSteps;
  const accentColor = active === 'clients' ? '#ffd166' : '#5eead4';

  return (
    <section className="section-dark" id="how-it-works">
      <div className="container">

        <div className="section-eyebrow eyebrow-light">
          <span className="eyebrow-dot eyebrow-dot-light" />
          Qanday ishlaydi
        </div>

        <h2 className="how-heading">{t.howTitle}</h2>

        {/* Tab switcher */}
        <div className="how-tabs">
          <button
            className={`how-tab-btn${active === 'clients' ? ' how-tab-active' : ''}`}
            onClick={() => setActive('clients')}
          >
            <UserCheck size={16} />
            <span>{t.tabClients}</span>
          </button>
          <button
            className={`how-tab-btn${active === 'workers' ? ' how-tab-active' : ''}`}
            onClick={() => setActive('workers')}
          >
            <Briefcase size={16} />
            <span>{t.tabWorkers}</span>
          </button>
        </div>

        {/* Steps row */}
        <div className="how-steps-row">
          {steps.map((step, i) => (
            <React.Fragment key={i}>
              {/* Step card */}
              <div className="how-step-card">
                <span className="how-step-num" style={{ color: accentColor }}>
                  {step.n}
                </span>
                <div className="how-step-divider" style={{ background: accentColor }} />
                <p className="how-step-text">{step.text}</p>
              </div>

              {/* Connector arrow between steps */}
              {i < steps.length - 1 && (
                <div className="how-step-connector">
                  <ArrowRight size={20} style={{ color: accentColor, opacity: 0.6 }} />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
}
