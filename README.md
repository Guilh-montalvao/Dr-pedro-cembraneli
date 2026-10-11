# Site do Dr. Pedro Cembraneli

Código-fonte da versão publicada com paleta azul-petróleo, marfim e âmbar, logo transparente e animações de entrada e saída.

## Executar localmente

Requisitos: Node.js 22.13 ou superior e pnpm 11.25.0.

1. Extraia o ZIP e abra o terminal dentro da pasta dr-pedro-cembraneli.
2. Instale as dependências: `pnpm install`.
3. Inicie: `pnpm dev`.
4. Abra http://localhost:5173.

## Build

`pnpm build`

O projeto usa React, TypeScript e Tailwind, com estrutura App Router do Next.js e execução/build via Vinext. A publicação atual utiliza Cloudflare Workers. Não é um conjunto de páginas HTML para abrir por duplo clique.

## Arquivos principais

- app/page.tsx: página principal do site (conteúdo, biografia, especialidades e contato).
- app/links/page.tsx: página de bio link (/links) com cabeçalho full-bleed, avatar e canais de contato.
- app/globals.css: estilos, paleta e animações do site e do bio link.
- app/layout.tsx: metadados e estrutura raiz.
- public/images/: fotografias e logo PNG transparente.
- scripts/inline-styles.mjs: gera os estilos incorporados ao HTML, executado automaticamente no início do desenvolvimento e do build.
- app/styles.generated.ts: estilos críticos gerados automaticamente.
- pnpm-lock.yaml: versões das dependências.

O ZIP não inclui node_modules, credenciais, histórico Git nem caches locais. O manifesto .openai/hosting.json identifica o site já existente; não o use para substituir outro projeto.

## Contato

WhatsApp informado pelo cliente: https://wa.me/5562999615559
Na versão exportada os links de atendimento ainda levam à seção de contato e aos mapas; a integração direta ao WhatsApp não foi incluída nas últimas alterações, limitadas a cores, logo e animações.

## Validação

TypeScript, build e renderização do servidor verificados. Revisão visual automatizada em navegador não realizada neste ambiente.
