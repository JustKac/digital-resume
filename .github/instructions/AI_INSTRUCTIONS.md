# Instruções para o Agente de IA

Ao atuar neste projeto, siga estas diretrizes rigorosamente:

## 1. Antes de Codificar
- Verifique se a funcionalidade exige estado no cliente. Se não, utilize **Server Components**.
- Considere a escalabilidade: o código deve ser modular o suficiente para suportar a migração de um mock estático para uma chamada ao Supabase.

## 2. Estrutura de Pastas Esperada
Siga este padrão para novos arquivos:
- `app/`: Rotas, layouts e logic de página.
- `components/ui/`: Componentes atômicos (shadcn).
- `components/shared/`: Componentes complexos reutilizáveis.
- `lib/`: Configurações de clientes (supabaseClient.ts, vercelBlob.ts).
- `types/`: Definições globais de interfaces.

## 3. Integração Vercel + Supabase
- Utilize Variáveis de Ambiente (`.env.local`) para chaves de API.
- Para uploads, priorize o uso de **Server Actions** com o SDK do Vercel Blob para manter a lógica no servidor.

## 4. Estilo de Resposta
- Seja conciso e direto.
- Forneça exemplos de código em TypeScript.
- Explique o "porquê" de escolhas arquiteturais relacionadas à performance.