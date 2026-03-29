'use client';

import React, { useState, useEffect } from 'react';

const STORAGE_KEY = 'cookie-consent';

const CookieConsent: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Don't show inside the preview iframe
    if (window !== window.top) return;
    if (!localStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted');
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem(STORAGE_KEY, 'rejected');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-accent/10 shadow-2xl"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-text-muted leading-relaxed max-w-2xl">
          Usamos cookies para melhorar sua experiência e coletar dados analíticos conforme nossa{' '}
          <a href="/privacidade" className="underline hover:text-primary transition-colors">
            Política de Privacidade
          </a>{' '}
          e a{' '}
          <a href="/lgpd" className="underline hover:text-primary transition-colors">
            LGPD
          </a>
          .
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="px-4 py-2 text-sm font-semibold text-text-muted hover:text-accent border border-accent/20 rounded-full transition-colors"
          >
            Rejeitar
          </button>
          <button
            onClick={accept}
            className="px-5 py-2 text-sm font-bold text-white bg-primary hover:bg-primary-hover rounded-full transition-colors"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
