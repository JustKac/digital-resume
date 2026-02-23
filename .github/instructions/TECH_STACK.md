# Stack Tecnológica e Ferramentas

## Core
- **Framework:** [Next.js](https://nextjs.org/) (App Router) - Escolhido pela integração nativa com Vercel.
- **Linguagem:** TypeScript (Strict Mode).
- **Estilização:** Tailwind CSS + [Shadcn/ui](https://ui.shadcn.com/) (Componentes acessíveis e customizáveis).

## Backend & Infra (Vercel Ecosystem)
- **Deployment:**
  - **main:** Vercel (CI/CD via GitHub).
  - **develop** github.io (GitHub Actions)
- **Serverless/Edge:** Next.js Route Handlers.
- **Database & Auth:** [Supabase](https://supabase.com/).
- **Storage:** [Vercel Blob](https://vercel.com/docs/storage/vercel-blob).

## Padrões de Código
- **Componentes:** Preferencialmente Server Components (RSC). Use Client Components (`'use client'`) apenas quando houver interatividade.
- **Data Fetching:** Utilizar o padrão `fetch` com cache e revalidação nativa do Next.js.
- **Arquitetura:** Clean Architecture adaptada para Next.js (separação de lógica de negócio em `/lib` ou `/services`).