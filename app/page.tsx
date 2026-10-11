'use client';

import { useEffect, useRef, useState } from 'react';
import {
  ArrowUpRight,
  ArrowDown,
  Plus,
  Minus,
  Menu,
  X,
  MapPin,
} from 'lucide-react';

const WHATSAPP_URL =
  'https://wa.me/5562999615559?text=Ol%C3%A1%2C%20Dr.%20Pedro!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20agendamento%20de%20consulta.';

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

const fields = {
  coluna: {
    name: 'Coluna',
    tag: 'MOVIMENTO / AUTONOMIA',
    headline: 'Voltar a olhar para as possibilidades.',
    text: 'A avaliação da coluna começa pela relação entre seus sintomas, seus movimentos e sua rotina. O exame de imagem é uma parte dessa investigação.',
    conditions: [
      'Hérnia de disco',
      'Estenose do canal lombar',
      'Dor lombar crônica',
      'Alterações degenerativas da coluna',
    ],
    procedures:
      'Avaliação para tratamento conservador, bloqueios e procedimentos cirúrgicos, conforme a indicação individual.',
  },
  cranio: {
    name: 'Crânio & nervos',
    tag: 'PRECISÃO / INDIVIDUALIDADE',
    headline: 'Entender o diagnóstico. Planejar o cuidado.',
    text: 'Uma conversa clara sobre condições que afetam o cérebro e os nervos, com atenção às dúvidas de quem recebe um diagnóstico e de sua família.',
    conditions: [
      'Tumores cerebrais e lesões da hipófise',
      'Hidrocefalia',
      'Neuralgia do trigêmeo',
      'Hematomas intracranianos',
    ],
    procedures:
      'Investigação e avaliação das possibilidades de tratamento, incluindo procedimentos neurocirúrgicos quando indicados.',
  },
};

const scenes = [
  {
    title: 'Você fala.',
    second: 'Eu escuto.',
    text: 'Como começou? O que mudou na sua rotina? O que você deixou de fazer? Antes do laudo, existe uma história que precisa ser ouvida.',
    image: 'portrait',
    alt: 'Dr. Pedro Cembraneli de jaleco',
    label: 'A SUA HISTÓRIA',
  },
  {
    title: 'O exame ajuda.',
    second: 'O contexto decide.',
    text: 'Os achados de imagem são avaliados junto aos sintomas e ao exame físico. Uma alteração no laudo, sozinha, não determina o tratamento.',
    image: 'care',
    alt: 'Dr. Pedro analisando exames',
    label: 'O RACIOCÍNIO CLÍNICO',
  },
  {
    title: 'Operar?',
    second: 'Só com indicação.',
    text: 'Consultar um neurocirurgião não significa necessariamente operar. As alternativas, os benefícios e os riscos precisam fazer sentido para o seu caso.',
    image: 'surgery',
    alt: 'Dr. Pedro em atuação no centro cirúrgico',
    label: 'A DECISÃO COMPARTILHADA',
  },
];

const faqs = [
  [
    'Vou precisar de cirurgia?',
    'Essa resposta depende da avaliação individual. A consulta permite entender o diagnóstico e discutir as opções de tratamento. A cirurgia é considerada quando há indicação clínica, levando em conta alternativas, benefícios e riscos.',
  ],
  [
    'O que levar à consulta?',
    'Leve os exames e laudos disponíveis, a lista de medicamentos em uso e informações sobre tratamentos anteriores. Anotar a evolução dos sintomas e as suas dúvidas também pode ajudar.',
  ],
  [
    'E se o laudo mostrar desgaste na coluna?',
    'O laudo precisa ser interpretado em conjunto com seus sintomas e com o exame físico. Uma alteração na imagem não determina, isoladamente, a necessidade de cirurgia.',
  ],
  [
    'Onde posso ser atendido?',
    'O Dr. Pedro atua na região de Goiânia e Aparecida de Goiânia, no Neuro Núcleo Goiânia e no Hospital Santa Mônica. Consulte diretamente a unidade para confirmar o local e a disponibilidade de agenda.',
  ],
];

function Neural({ kind }: { kind: 'coluna' | 'cranio' }) {
  return (
    <svg viewBox="0 0 400 440" className={'neural-art ' + kind} fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={'line-' + kind} x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#e59848" />
          <stop offset="1" stopColor="#fff0da" />
        </linearGradient>
      </defs>
      {kind === 'coluna' ? (
        <>
          {Array.from({ length: 15 }, (_, i) => {
            const y = 45 + i * 25,
              x = 200 + Math.sin(i * 0.36) * 22;
            return (
              <g key={i} style={{ animationDelay: `${i * 80}ms` }}>
                <path
                  d={`M ${x - 43} ${y - 7} Q ${x} ${y - 24} ${x + 43} ${y - 7} L ${x + 36} ${y + 9} Q ${x} ${y + 22} ${x - 36} ${y + 9} Z`}
                  stroke="url(#line-coluna)"
                  strokeWidth="1"
                />
                <path
                  d={`M ${x - 43} ${y} L ${x - 67} ${y + 8} M ${x + 43} ${y} L ${x + 67} ${y + 8}`}
                  stroke="#d1a273"
                  strokeWidth=".6"
                />
                <circle cx={x} cy={y} r="2" fill="#f5ae62" />
              </g>
            );
          })}
          <path d="M200 30C260 135 180 250 189 418" stroke="#ffd6a6" strokeDasharray="3 7" strokeWidth=".8" />
        </>
      ) : (
        <>
          {Array.from({ length: 10 }, (_, i) => (
            <ellipse
              key={i}
              cx="200"
              cy="202"
              rx={65 + i * 8}
              ry={150 - i * 9}
              transform={`rotate(${i * 18} 200 202)`}
              stroke="url(#line-cranio)"
              strokeWidth=".7"
              opacity={0.3 + i * 0.06}
            />
          ))}
          <path d="M200 50V355M200 355L214 408" stroke="#f5ae62" strokeWidth="1" />
          {[
            [124, 130],
            [250, 180],
            [168, 280],
            [275, 265],
            [200, 90],
            [114, 238],
            [223, 320],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="3" fill="#f2efe6" />
              <circle cx={x} cy={y} r="12" stroke="#e59848" strokeWidth=".6" />
            </g>
          ))}
        </>
      )}
      <path
        d="M22 22h15M22 22v15M378 22h-15M378 22v15M22 418h15M22 418v-15M378 418h-15M378 418v-15"
        stroke="#a59a89"
        strokeWidth=".6"
      />
    </svg>
  );
}

export default function Home() {
  const [menu, setMenu] = useState(false);
  const [field, setField] = useState<'coluna' | 'cranio'>('coluna');
  const [faq, setFaq] = useState<number | null>(null);
  const [scene, setScene] = useState(0);
  const [activeSection, setActiveSection] = useState('inicio');

  const story = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const active = fields[field];

  // Story Scene Switcher & Active Section Observer
  useEffect(() => {
    let ticking = false;
    const update = () => {
      if (story.current) {
        const r = story.current.getBoundingClientRect();
        const scrollDist = Math.max(1, r.height - window.innerHeight);
        const p = Math.min(1, Math.max(0, -r.top / scrollDist));
        story.current.style.setProperty('--story-progress', String(p));

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          const s = Math.min(2, Math.max(0, Math.floor(p * 3)));
          setScene(s);
        }
      }
      ticking = false;
    };

    const scroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', update, { passive: true });

    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        }),
      { rootMargin: '-20% 0px -60% 0px' }
    );
    document.querySelectorAll('section[id]').forEach((el) => io.observe(el));

    return () => {
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', update);
      io.disconnect();
    };
  }, []);

  // Directional Entry and Exit Animations Observer
  useEffect(() => {
    const animatedEls = document.querySelectorAll<HTMLElement>('[data-anim]');
    if (!animatedEls.length) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      animatedEls.forEach((el) => el.classList.add('anim-in'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target as HTMLElement;
          if (entry.isIntersecting) {
            el.classList.add('anim-in');
            el.classList.remove('anim-out');
          } else {
            // Exit animation when element scrolls out of view
            if (el.classList.contains('anim-in')) {
              el.classList.remove('anim-in');
              el.classList.add('anim-out');
            }
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '-30px 0px -30px 0px',
      }
    );

    animatedEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [field]);

  // Menu Lock Body Scroll & Keyboard Escape
  useEffect(() => {
    if (!menu) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenu(false);
    };
    window.addEventListener('keydown', close);
    return () => {
      document.body.style.overflow = old;
      window.removeEventListener('keydown', close);
    };
  }, [menu]);

  function goScene(i: number) {
    setScene(i);
    if (!story.current) return;
    const top = story.current.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: top + (story.current.offsetHeight - window.innerHeight) * (i / 3 + 0.04),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  }

  return (
    <>
      <a className="skip" href="#main">
        Ir para o conteúdo
      </a>

      {/* Header */}
      <header>
        <a href="#inicio" className="wordmark" aria-label="Dr. Pedro Cembraneli, início">
          <img
            className="official-logo"
            src="/images/logo-pedro-transparent.png"
            alt="Dr. Pedro Cembraneli — CRM 26.326 | RQE 21.882"
            width="218"
            height="60"
          />
        </a>
        <div className="header-right">
          <span className="header-location">
            GOIÂNIA, GO <i />
          </span>
          <a
            className="header-contact"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Atendimento rápido pelo WhatsApp"
          >
            <WhatsAppIcon size={16} />
            <span>WhatsApp</span>
            <ArrowUpRight size={14} />
          </a>
          <button
            onClick={() => setMenu(!menu)}
            aria-expanded={menu}
            aria-controls="menu"
            aria-label={menu ? 'Fechar navegação' : 'Abrir navegação'}
            className="menu-button"
          >
            {menu ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Fullscreen Navigation Menu */}
      <nav
        id="menu"
        className={'menu-overlay ' + (menu ? 'is-open' : '')}
        inert={!menu}
        aria-hidden={!menu}
        aria-label="Navegação principal"
      >
        <div className="menu-caption">EXPLORE</div>
        {[
          ['Início', 'inicio'],
          ['Coluna & crânio', 'atuacao'],
          ['Minha abordagem', 'abordagem'],
          ['Sobre mim', 'medico'],
          ['Atendimento', 'contato'],
        ].map(([label, id], i) => (
          <a
            href={'#' + id}
            key={id}
            style={{ '--menu-order': i } as React.CSSProperties}
            onClick={() => setMenu(false)}
          >
            <span>0{i + 1}</span>
            {label}
            <ArrowUpRight />
          </a>
        ))}
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="menu-whatsapp-link"
          onClick={() => setMenu(false)}
        >
          <WhatsAppIcon size={18} />
          <span>Falar no WhatsApp</span>
          <ArrowUpRight size={15} />
        </a>
        <p>
          Dr. Pedro Nogarotto Cembraneli
          <br />
          CRM-GO 26.326 | RQE 21.882
        </p>
      </nav>

      {/* Fullscreen Navigation Menu */}

      <main id="main">
        {/* Hero Section */}
        <section id="inicio" className="hero">
          <div className="hero-top" data-anim="down">
            <p>
              NEUROCIRURGIA
              <br />
              DE COLUNA E CRÂNIO
            </p>
            <span className="hero-status">
              <i /> CIÊNCIA, COM UM OLHAR HUMANO.
            </span>
          </div>

          <div className="hero-stage">
            <div className="hero-message">
              <h1 data-anim="left">
                Você não é<br />
                o seu <span>laudo.</span>
              </h1>
              <p data-anim="left" data-delay="120">
                Sou o Dr. Pedro Cembraneli.
                <br />
                Meu trabalho começa por entender
                <br />o que está acontecendo com <b>você.</b>
              </p>
              <div data-anim="left" data-delay="200">
                <a href="#abordagem" className="circle-link">
                  <span className="circle">
                    <ArrowDown size={21} />
                  </span>
                  Conheça meu jeito de cuidar
                </a>
              </div>
            </div>

            <div className="hero-visual" data-anim="right" data-delay="100">
              <img
                src="/images/hero.webp"
                alt="Dr. Pedro Cembraneli em seu consultório"
                fetchPriority="high"
              />
              <div className="image-index">
                <span>DR. PEDRO NOGAROTTO CEMBRANELI</span>
                <span>CRM-GO 26.326 / RQE 21.882</span>
              </div>
              <div className="image-cross">+</div>
            </div>
          </div>

          <div className="hero-name" data-anim="up" data-delay="160" aria-hidden="true">
            PEDRO<span>CEMBRANELI</span>
            <i>↗</i>
          </div>

          <div className="hero-bottom" data-anim="up" data-delay="220">
            <span>ESCUTA. INVESTIGAÇÃO. DECISÃO.</span>
            <a href="#atuacao">
              Explore as áreas de atuação <ArrowDown size={14} />
            </a>
          </div>
        </section>

        {/* Áreas de Atuação */}
        <section id="atuacao" className="specialties">
          <div className="specialty-intro">
            <span className="label" data-anim="down">
              <i /> ÁREAS DE ATUAÇÃO
            </span>
            <h2 data-anim="left" data-delay="100">
              Conexões que
              <br />
              fazem a vida <span>acontecer.</span>
            </h2>
            <p data-anim="right" data-delay="140">
              Movimento. Sensibilidade. Autonomia.
              <br />
              O cuidado com o sistema nervoso
              <br />
              começa pelo que importa para você.
            </p>
          </div>

          <div className="explorer">
            <div className="explorer-left" data-anim="left" data-delay="160">
              <div className="field-tabs" role="tablist" aria-label="Selecione a área de atuação">
                {(['coluna', 'cranio'] as const).map((k) => (
                  <button
                    key={k}
                    id={'tab-' + k}
                    aria-controls="field-content"
                    aria-selected={field === k}
                    role="tab"
                    onClick={() => setField(k)}
                    className={field === k ? 'selected' : ''}
                  >
                    {fields[k].name}
                    <ArrowUpRight size={18} />
                  </button>
                ))}
              </div>
              <div className="field-visual" key={field}>
                <Neural kind={field} />
                <div className="visual-meta">
                  <span>NEUROCIRURGIA</span>
                  <span>{active.tag}</span>
                </div>
              </div>
            </div>

            <div
              id="field-content"
              className="field-content"
              role="tabpanel"
              aria-labelledby={'tab-' + field}
              key={'content-' + field}
              data-anim="right"
              data-delay="200"
            >
              <span className="field-caption">{active.name}</span>
              <h3>{active.headline}</h3>
              <p>{active.text}</p>
              <div className="conditions">
                {active.conditions.map((x, i) => (
                  <div key={x} data-anim="right" data-delay={String(120 + i * 60)}>
                    <span>0{i + 1}</span>
                    {x}
                  </div>
                ))}
              </div>
              <p className="procedure-note">{active.procedures}</p>
              <a
                href={`https://wa.me/5562999615559?text=${encodeURIComponent(
                  `Olá, Dr. Pedro! Gostaria de conversar sobre o meu caso na área de ${active.name}.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="blue-link"
                data-anim="up"
                data-delay="360"
              >
                <WhatsAppIcon size={16} />
                Conversar sobre meu caso no WhatsApp <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </section>

        {/* Storytelling / Abordagem */}
        <section id="abordagem" ref={story} className="story">
          <div className="story-sticky">
            <div className="story-images">
              {scenes.map((s, i) => (
                <img
                  key={s.image}
                  src={'/images/' + s.image + '.webp'}
                  alt={s.alt}
                  loading="lazy"
                  className={scene === i ? 'active' : ''}
                />
              ))}
            </div>
            <div className="story-shade" />
            <div className="story-header">
              <span className="label">COMO EU CUIDO</span>
              <span className="story-hint">
                CONTINUE A ROLAR <ArrowDown size={15} />
              </span>
            </div>
            {scenes.map((item, i) => (
              <div
                className={'story-copy ' + (scene === i ? 'is-active' : '')}
                key={item.label}
                aria-hidden={scene !== i}
              >
                <span className="story-label">{item.label}</span>
                <h2>
                  {item.title}
                  <br />
                  <span>{item.second}</span>
                </h2>
                <p>{item.text}</p>
              </div>
            ))}
            <div className="story-controls" ref={track}>
              {scenes.map((s, i) => (
                <button
                  key={s.label}
                  className={scene === i ? 'active' : ''}
                  onClick={() => goScene(i)}
                  aria-pressed={scene === i}
                >
                  <span>0{i + 1}</span>
                  <b>{['Escutar', 'Investigar', 'Decidir juntos'][i]}</b>
                  <div />
                </button>
              ))}
            </div>
            <div className="story-progress" />
          </div>
        </section>

        {/* O Médico */}
        <section id="medico" className="doctor">
          <div className="doctor-heading">
            <span className="label" data-anim="down">
              <i /> QUEM ESTÁ DO OUTRO LADO
            </span>
            <h2 data-anim="left" data-delay="100">
              Pedro.
              <br />
              <span>Médico, antes de tudo.</span>
            </h2>
          </div>

          <div className="doctor-grid">
            <div className="doctor-photo" data-anim="left" data-delay="140">
              <img src="/images/portrait.webp" alt="Dr. Pedro Cembraneli" loading="lazy" />
              <span>DR. PEDRO NOGAROTTO CEMBRANELI</span>
            </div>

            <div className="doctor-info" data-anim="right" data-delay="180">
              <p className="doctor-lead">
                A técnica é fundamental.
                <br />
                A forma de cuidar, também.
              </p>
              <p>
                Minha atuação em neurocirurgia de coluna e crânio une avaliação clínica, escuta e
                atenção às necessidades de cada paciente. Atendo em Goiânia e Aparecida de Goiânia.
              </p>
              <p>
                Acredito em explicar com clareza, acolher dúvidas e construir as decisões de
                tratamento junto com quem está sob meus cuidados.
              </p>

              <div className="education">
                <span>FORMAÇÃO</span>
                <article data-anim="up" data-delay="220">
                  <h3>FACERES</h3>
                  <p>
                    Graduação em Medicina
                    <br />
                    São José do Rio Preto, SP
                  </p>
                  <ArrowUpRight size={20} />
                </article>
                <article data-anim="up" data-delay="280">
                  <h3>Hospital Santa Mônica</h3>
                  <p>Residência Médica em Neurocirurgia</p>
                  <ArrowUpRight size={20} />
                </article>
              </div>

              <div className="registration" data-anim="up" data-delay="320">
                CRM-GO 26.326 <span /> RQE 21.882
              </div>
            </div>
          </div>

          <a
            className="research"
            href="https://jbnc.org.br/artigo/surgical-technique-for-olfactory-groove-meningioma-case-series-and-literature-revision/1716"
            target="_blank"
            rel="noopener noreferrer"
            data-anim="scale"
            data-delay="160"
          >
            <div>
              <span className="label">DA PRÁTICA À PESQUISA</span>
              <h3>
                Conhecimento que continua
                <br />
                em construção.
              </h3>
            </div>
            <p>
              Conheça uma publicação do Dr. Pedro sobre técnicas cirúrgicas para meningiomas, no
              Jornal Brasileiro de Neurocirurgia.
            </p>
            <span className="research-arrow">
              <ArrowUpRight size={34} />
              <small>LER PUBLICAÇÃO</small>
            </span>
          </a>
        </section>

        {/* Dúvidas Frequentes */}
        <section id="duvidas" className="questions">
          <div className="questions-intro" data-anim="left">
            <span className="label">
              <i /> ANTES DA CONSULTA
            </span>
            <h2>
              É normal
              <br />
              ter <span>dúvidas.</span>
            </h2>
            <p>Podemos começar por aqui.</p>
            <span className="question-mark" aria-hidden="true" data-anim="down" data-delay="180">
              ?
            </span>
          </div>

          <div className="questions-list" data-anim="right" data-delay="160">
            {faqs.map(([q, a], i) => (
              <article
                className={faq === i ? 'open' : ''}
                key={q}
              >
                <h3>
                  <button
                    type="button"
                    aria-expanded={faq === i}
                    aria-controls={'answer-' + i}
                    onClick={() => setFaq(faq === i ? null : i)}
                  >
                    <span>{q}</span>
                    {faq === i ? <Minus size={20} /> : <Plus size={20} />}
                  </button>
                </h3>
                <div id={'answer-' + i} hidden={faq !== i} className="faq-answer">
                  <p>{a}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Contato & Unidades */}
        <section id="contato" className="contact">
          <div className="contact-top" data-anim="down">
            <span className="label">VAMOS CONVERSAR</span>
            <span>GOIÂNIA, GO</span>
          </div>

          <h2 data-anim="left" data-delay="100">
            Seu próximo
            <br />
            passo <span>começa aqui.</span>
            <ArrowUpRight aria-hidden="true" />
          </h2>

          <div className="contact-bottom">
            <div className="contact-cta-col" data-anim="left" data-delay="160">
              <p>
                Entre em contato com nossa equipe para
                <br />
                consultar a agenda do Dr. Pedro.
                <small>
                  Confirme diretamente o endereço, os horários
                  <br />e a disponibilidade de atendimento.
                </small>
              </p>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-direct-link"
                data-anim="up"
                data-delay="220"
              >
                <div className="contact-direct-content">
                  <span className="contact-direct-tag">
                    <WhatsAppIcon size={14} />
                    CANAL DE AGENDAMENTO
                  </span>
                  <strong className="contact-direct-title">Falar pelo WhatsApp</strong>
                  <span className="contact-direct-meta">(62) 99961-5559 · Consultas e dúvidas</span>
                </div>
                <ArrowUpRight size={22} className="contact-direct-arrow" />
              </a>
            </div>

            <div className="locations" data-anim="right" data-delay="200">
              {[
                ['Neuro Núcleo Goiânia', 'Goiânia, GO', 'Neuro Núcleo Goiânia'],
              ].map(([name, city, query], i) => (
                <a
                  key={name}
                  href={'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(query)}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-anim="right"
                  data-delay={String(240 + i * 80)}
                >
                  <MapPin size={20} />
                  <div>
                    <h3>{name}</h3>
                    <span>{city} · Localizar unidade</span>
                  </div>
                  <ArrowUpRight size={21} />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Floating WhatsApp Action Button */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-whatsapp"
        aria-label="Falar no WhatsApp com a equipe do Dr. Pedro Cembraneli"
      >
        <WhatsAppIcon size={20} />
        <span className="floating-whatsapp-text">Agendar Consulta</span>
      </a>

      {/* Footer */}
      <footer data-anim="up" data-delay="100">
        <a className="wordmark" href="#inicio">
          <img
            className="official-logo"
            src="/images/logo-pedro-transparent.png"
            alt="Dr. Pedro Cembraneli — CRM 26.326 | RQE 21.882"
            width="218"
            height="60"
          />
        </a>
        <p>
          Dr. Pedro Nogarotto Cembraneli
          <br />
          CRM-GO 26.326 | RQE 21.882
        </p>
        <a href="#inicio">
          Voltar ao topo <ArrowUpRight size={17} />
        </a>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Dr. Pedro Cembraneli</span>
          <span>Conteúdo informativo. Não substitui uma avaliação médica individualizada.</span>
        </div>
      </footer>
    </>
  );
}
