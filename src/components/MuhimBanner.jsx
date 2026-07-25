import React from 'react';
import { AlertTriangle } from 'lucide-react';

export default function MuhimBanner({ t }) {
  return (
    <div className="muhim-strip">
      <div className="container muhim-strip-inner">
        <span className="muhim-strip-icon">
          <AlertTriangle size={16} />
        </span>
        <span className="muhim-strip-tag">{t.muhimTag}:</span>
        <span className="muhim-strip-text">{t.muhimText}</span>
      </div>
    </div>
  );
}
