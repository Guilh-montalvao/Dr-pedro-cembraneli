'use client';

import { useState } from 'react';
import { Share2, Check } from 'lucide-react';

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const shareData = {
      title: 'Dr. Pedro Cembraneli | Neurocirurgia',
      text: 'Dr. Pedro Cembraneli — Neurocirurgia de coluna e crânio em Goiânia e Aparecida de Goiânia.',
      url: typeof window !== 'undefined' ? window.location.href : '',
    };

    if (typeof navigator !== 'undefined' && navigator.share) {
      try {
        await navigator.share(shareData);
        return;
      } catch (err) {
        if ((err as Error)?.name === 'AbortError') return;
      }
    }

    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      } catch {
        // fallback
      }
    }
  };

  return (
    <button
      type="button"
      onClick={handleShare}
      className={`biolink-share-btn ${copied ? 'is-copied' : ''}`}
      aria-label={copied ? 'Link copiado!' : 'Compartilhar Bio Link'}
      title={copied ? 'Link copiado!' : 'Compartilhar Bio Link'}
    >
      {copied ? <Check size={18} aria-hidden="true" /> : <Share2 size={18} aria-hidden="true" />}
      <span className="biolink-share-tooltip">{copied ? 'Copiado!' : 'Compartilhar'}</span>
    </button>
  );
}
