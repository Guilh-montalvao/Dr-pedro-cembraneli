import type { Metadata } from 'next';
import {
  ArrowUpRight,
  Globe,
  MapPin,
  FileText,
} from 'lucide-react';
import ShareButton from './share-button';

export const metadata: Metadata = {
  title: 'Dr. Pedro Cembraneli | Links e Contato',
  description:
    'Canais diretos de atendimento, agendamento de consultas via WhatsApp e informações do Dr. Pedro Cembraneli — Neurocirurgia de coluna e crânio em Goiânia.',
  icons: {
    icon: '/images/logo-pedro-transparent.png',
  },
};

const WHATSAPP_NEURO_NUCLEO_URL =
  'https://wa.me/5562998361506?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento%20de%20consulta%20com%20o%20Dr.%20Pedro%20Cembraneli%20no%20Neuro%20N%C3%BAcleo%20Goi%C3%A2nia.';

const WHATSAPP_SANTA_MONICA_URL =
  'https://wa.me/5562999615559?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento%20de%20consulta%20com%20o%20Dr.%20Pedro%20Cembraneli%20no%20Hospital%20Santa%20M%C3%B4nica.';

function WhatsAppIcon({ size = 20, className = '' }: { size?: number; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.456 5.711 1.457h.004c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function LinksPage() {
  return (
    <>
      <main className="biolink-page">
        {/* Full-bleed Twitter Banner expanding to top, left, and right */}
        <div className="biolink-banner">
          <img
            src="/images/surgery.webp"
            alt="Dr. Pedro Cembraneli em procedimento cirúrgico"
            className="biolink-banner-img"
          />
          <div className="biolink-banner-overlay" />
          <ShareButton />
        </div>

        <div className="biolink-container">
          {/* Avatar overlapping banner on the left */}
          <div className="biolink-avatar-wrap">
            <img
              src="/images/hero.webp"
              alt="Dr. Pedro Nogarotto Cembraneli"
              className="biolink-avatar-img"
            />
          </div>

          {/* Header Typography */}
          <header className="biolink-header">
            <h1 className="biolink-title">
              Entre em contato com nossa equipe para consultar a agenda do Dr. Pedro.
            </h1>

            <p className="biolink-desc">
              Escolha a unidade mais conveniente para iniciar seu agendamento no WhatsApp:
            </p>
          </header>

          {/* Links List — Exact Hairline Rows */}
          <nav className="biolink-links" aria-label="Canais de atendimento e links diretos">
            {/* Unidade Neuro Núcleo Goiânia */}
            <div className="biolink-unit-item">
              <a
                href={WHATSAPP_NEURO_NUCLEO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="biolink-unit-main"
                aria-label="Agendar via WhatsApp no Neuro Núcleo Goiânia"
              >
                <WhatsAppIcon size={20} className="biolink-unit-icon" />
                <div className="biolink-unit-info">
                  <span className="biolink-unit-tag">GOIÂNIA, GO</span>
                  <h3 className="biolink-unit-title">Neuro Núcleo Goiânia</h3>
                  <span className="biolink-unit-meta">
                    (62) 99836-1506 · Agendar no WhatsApp
                  </span>
                </div>
                <ArrowUpRight size={18} className="biolink-unit-arrow" aria-hidden="true" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Neuro%20N%C3%BAcleo%20Goi%C3%A2nia"
                target="_blank"
                rel="noopener noreferrer"
                className="biolink-map-chip"
                title="Localizar Neuro Núcleo Goiânia no Google Maps"
                aria-label="Ver localização do Neuro Núcleo no Google Maps"
              >
                <MapPin size={13} aria-hidden="true" />
                <span>Mapa</span>
              </a>
            </div>

            {/* Unidade Hospital Santa Mônica */}
            <div className="biolink-unit-item">
              <a
                href={WHATSAPP_SANTA_MONICA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="biolink-unit-main"
                aria-label="Agendar via WhatsApp no Hospital Santa Mônica"
              >
                <WhatsAppIcon size={20} className="biolink-unit-icon" />
                <div className="biolink-unit-info">
                  <span className="biolink-unit-tag">APARECIDA DE GOIÂNIA, GO</span>
                  <h3 className="biolink-unit-title">Hospital Santa Mônica</h3>
                  <span className="biolink-unit-meta">
                    (62) 9961-5559 · Agendar no WhatsApp
                  </span>
                </div>
                <ArrowUpRight size={18} className="biolink-unit-arrow" aria-hidden="true" />
              </a>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Hospital%20Santa%20M%C3%B4nica%20Aparecida%20de%20Goi%C3%A2nia"
                target="_blank"
                rel="noopener noreferrer"
                className="biolink-map-chip"
                title="Localizar Hospital Santa Mônica no Google Maps"
                aria-label="Ver localização do Hospital Santa Mônica no Google Maps"
              >
                <MapPin size={13} aria-hidden="true" />
                <span>Mapa</span>
              </a>
            </div>

            {/* Site Oficial */}
            <a
              href="/"
              className="biolink-location-row"
            >
              <Globe size={20} aria-hidden="true" />
              <div>
                <h3>Conhecer o Site Oficial</h3>
                <span>Filosofia de cuidado, biografia e artigos</span>
              </div>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>

            {/* Publicação Científica */}
            <a
              href="https://jbnc.org.br/artigo/surgical-technique-for-olfactory-groove-meningioma-case-series-and-literature-revision/1716"
              target="_blank"
              rel="noopener noreferrer"
              className="biolink-location-row"
            >
              <FileText size={20} aria-hidden="true" />
              <div>
                <h3>Publicação Científica (JBNC)</h3>
                <span>Técnica cirúrgica em meningiomas</span>
              </div>
              <ArrowUpRight size={21} aria-hidden="true" />
            </a>
          </nav>

          {/* Footer — 100% Mirroring Site Footer */}
          <footer className="biolink-footer">
            <div className="biolink-footer-brand">
              <a className="wordmark" href="/">
                <img
                  className="official-logo biolink-footer-logo"
                  src="/images/logo-pedro-transparent.png"
                  alt="Dr. Pedro Cembraneli — CRM 26.326 | RQE 21.882"
                  width="218"
                  height="60"
                />
              </a>
            </div>
            <div className="biolink-footer-info">
              <p>
                Dr. Pedro Nogarotto Cembraneli
                <br />
                CRM-GO 26.326 | RQE 21.882
              </p>
              <a href="/" className="biolink-back-link">
                Voltar ao site <ArrowUpRight size={17} />
              </a>
            </div>
            <div className="biolink-footer-bottom">
              <span>© {new Date().getFullYear()} Dr. Pedro Cembraneli</span>
              <span>Conteúdo informativo. Não substitui uma avaliação médica individualizada.</span>
            </div>
          </footer>
        </div>
      </main>

      {/* Floating WhatsApp Action Button */}
      <a
        href={WHATSAPP_NEURO_NUCLEO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Falar no WhatsApp com a equipe do Dr. Pedro Cembraneli"
      >
        <WhatsAppIcon size={20} />
        <span className="floating-whatsapp-text">Agendar Consulta</span>
      </a>
    </>
  );
}
