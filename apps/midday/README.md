# 🚀 Midday

Plataforma de gestão de negócios com recursos de produtividade, análise financeira e automação.

## 📋 Visão Geral

Midday é uma aplicação SaaS completa para gestão de negócios, oferecendo:

- **Dashboard Inteligente** - Visão centralizada dos KPIs de negócio
- **Gestão Financeira** - Controle de receitas, despesas e projeções
- **CRM** - Gerenciamento de clientes e oportunidades
- **Automação de Tarefas** - Workflows automatizados para processos repetitivos
- **Integrações** - Conexão com diversas plataformas e serviços
- **Relatórios** - Análises detalhadas e insights de negócio

## 🔧 Tecnologias

- **Frontend**: Next.js, React, Tailwind CSS, Radix UI
- **Backend**: Next.js API Routes, tRPC
- **Banco de Dados**: Supabase (PostgreSQL)
- **Autenticação**: Supabase Auth, NextAuth.js
- **Infraestrutura**: Vercel, GitHub Actions
- **Análise**: Supabase Analytics, PostgREST
- **IA**: OpenAI, MCP (Multi-provider Communication Protocol)

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- npm ou pnpm
- Conta no Supabase (para banco de dados)
- Conta na Vercel (para deploy)

### Instalação

```bash
# Clonar o repositório
git clone https://github.com/exzosdigital/ExzosSpace.git
cd ExzosSpace/apps/midday

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com suas credenciais

# Iniciar servidor de desenvolvimento
npm run dev
```

### Configuração do Supabase

1. Crie um projeto no [Supabase](https://supabase.com)
2. Execute as migrações do banco de dados:
   ```bash
   npm run supabase:migrate
   ```
3. Copie as credenciais do projeto para o `.env.local`

## 📁 Estrutura do Projeto

```
midday/
├── public/              # Ativos estáticos
├── src/
│   ├── app/             # Rotas da aplicação (Next.js App Router)
│   │   ├── api/         # API Routes
│   │   ├── auth/        # Rotas de autenticação
│   │   ├── dashboard/   # Dashboard principal
│   │   ├── finances/    # Gestão financeira
│   │   ├── customers/   # CRM
│   │   └── settings/    # Configurações
│   ├── components/      # Componentes React
│   │   ├── ui/          # Componentes de UI
│   │   ├── dashboard/   # Componentes do dashboard
│   │   ├── forms/       # Formulários
│   │   └── charts/      # Gráficos e visualizações
│   ├── lib/             # Bibliotecas e utilitários
│   │   ├── supabase.ts  # Cliente Supabase
│   │   ├── trpc.ts      # Configuração tRPC
│   │   └── auth.ts      # Utilitários de autenticação
│   ├── hooks/           # Hooks React personalizados
│   ├── types/           # Definições de tipos TypeScript
│   └── utils/           # Funções utilitárias
├── supabase/            # Configurações Supabase
│   ├── migrations/      # Migrações do banco de dados
│   └── seed.sql         # Dados iniciais
├── tests/               # Testes
│   ├── unit/            # Testes unitários
│   └── e2e/             # Testes end-to-end
├── .env.example         # Exemplo de variáveis de ambiente
├── package.json         # Dependências e scripts
└── next.config.js       # Configuração do Next.js
```

## 🧪 Testes

```bash
# Executar todos os testes
npm test

# Executar testes unitários
npm run test:unit

# Executar testes e2e
npm run test:e2e
```

## 🚀 Deploy

O deploy é automatizado via GitHub Actions:

- **Preview**: Cada PR gera um ambiente de preview
- **Staging**: Merges para `staging` são deployados em staging
- **Produção**: Merges para `main` são deployados em produção

Para deploy manual:

```bash
# Deploy para preview
npm run vercel:preview

# Deploy para produção
npm run vercel:deploy
```

## 📦 Dependências Principais

- **Framework**: Next.js, React
- **Estilo**: Tailwind CSS, Radix UI
- **Estado**: Zustand, React Query
- **Formulários**: React Hook Form, Zod
- **API**: tRPC, Axios
- **Banco de Dados**: Supabase
- **Autenticação**: NextAuth.js
- **Internacionalização**: next-intl
- **Gráficos**: Recharts, D3.js
- **Testes**: Jest, Playwright

## 🔄 Workflow de Desenvolvimento

1. Crie uma branch a partir de `staging`
2. Desenvolva e teste localmente
3. Envie um PR para `staging`
4. Após revisão e testes no ambiente de preview, faça merge para `staging`
5. Teste em staging e então faça um PR para `main`

## 📚 Documentação Adicional

- [API Documentation](./docs/api.md)
- [Database Schema](./docs/schema.md)
- [Authentication Flow](./docs/auth.md)
- [Component Library](./docs/components.md)

## 🧩 Integrações

- **Stripe**: Processamento de pagamentos
- **Google Analytics**: Análise de uso
- **SendGrid**: Envio de emails
- **Slack**: Notificações
- **Zapier**: Automações

## 📞 Suporte

Para suporte e dúvidas:
- Email: [desenvolvimento@exzos.com.br](mailto:desenvolvimento@exzos.com.br)
- [Criar Issue](https://github.com/exzosdigital/ExzosSpace/issues/new)