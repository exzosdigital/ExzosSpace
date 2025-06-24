# 🚀 ExzosMidday

Plataforma central de gestão empresarial e produtividade da Exzos, baseada na tecnologia Midday e adaptada para o ecossistema ExzosVerse.

## 📋 Visão Geral

ExzosMidday é a aplicação core do ecossistema ExzosVerse, oferecendo um conjunto completo de ferramentas para gestão de negócios:

- **Dashboard Inteligente** - Visão centralizada dos KPIs e métricas de negócio
- **Gestão Financeira** - Controle completo de receitas, despesas e projeções
- **CRM** - Gerenciamento de clientes, oportunidades e relacionamentos
- **Automação** - Workflows e processos automatizados
- **Projetos** - Gestão de projetos, tarefas e recursos
- **Documentos** - Armazenamento e colaboração em documentos
- **Integrações** - Conexão com diversos serviços e plataformas

## 🔧 Tecnologias

A plataforma ExzosMidday é construída utilizando uma stack moderna e robusta:

- **Frontend**: Next.js 14+, React 18+, App Router
- **UI**: ExzosOnlook Design System, Tailwind CSS, Radix UI
- **Backend**: Next.js API Routes, tRPC, Server Components
- **Banco de Dados**: Supabase (PostgreSQL), Drizzle ORM
- **Autenticação**: ExzosAuth (baseado em Supabase Auth, NextAuth.js)
- **Cache/Performance**: Upstash Redis, React Query
- **Monitoramento**: Sentry, OpenPanel Analytics
- **Emails**: React Email, Resend
- **Internacionalização**: next-intl
- **Background Jobs**: Trigger.dev
- **Pagamentos**: ExzosPayments (baseado em Stripe)

## 🏗️ Arquitetura

ExzosMidday segue uma arquitetura moderna baseada em microsserviços e componentes reutilizáveis:

```
exzosmidday/
├── src/
│   ├── app/                      # Next.js App Router
│   │   ├── api/                  # API Routes
│   │   ├── (auth)/               # Rotas autenticadas
│   │   │   ├── dashboard/        # Dashboard central
│   │   │   ├── finances/         # Gestão financeira
│   │   │   ├── customers/        # CRM
│   │   │   ├── projects/         # Gestão de projetos
│   │   │   ├── documents/        # Gestão de documentos
│   │   │   └── settings/         # Configurações
│   │   └── (public)/             # Rotas públicas
│   ├── components/               # Componentes React
│   │   ├── modules/              # Componentes específicos de módulos
│   │   ├── layout/               # Componentes de layout
│   │   └── shared/               # Componentes compartilhados
│   ├── lib/                      # Bibliotecas e utilidades
│   │   ├── auth.ts               # Configuração de autenticação
│   │   ├── db.ts                 # Cliente de banco de dados
│   │   └── api.ts                # Clientes de API
│   ├── hooks/                    # Hooks personalizados
│   ├── server/                   # Lógica de servidor
│   │   ├── actions/              # Server Actions
│   │   ├── api/                  # API handlers
│   │   └── db/                   # Queries e mutações
│   └── types/                    # Definições de tipos
└── public/                       # Arquivos estáticos
```

## 🔄 Fluxo de Trabalho

O ExzosMidday é integrado ao ecossistema ExzosVerse da seguinte forma:

1. **Autenticação** - Utiliza o ExzosAuth para autenticação unificada
2. **UI/UX** - Utiliza o ExzosOnlook para componentes visuais e experiência
3. **API** - Oferece e consome APIs do ExzosConnect
4. **Pagamentos** - Integra com o ExzosPayments para processamento financeiro
5. **Analytics** - Fornece dados para o ExzosAnalytics

## 🚀 Começando

### Pré-requisitos

- Node.js 18+
- Bun 1.0+ ou npm/pnpm
- Docker (para desenvolvimento local)
- Conta Supabase (banco de dados)

### Instalação

```bash
# No diretório raiz do ExzosSpace
cd apps/exzosmidday

# Instalar dependências
bun install

# Configurar variáveis de ambiente
cp .env.example .env.local
# Editar .env.local com suas credenciais

# Iniciar servidor de desenvolvimento
bun dev
```

### Banco de Dados

O ExzosMidday utiliza Supabase como banco de dados principal:

```bash
# Executar migrações
bun migrate

# Seed de dados iniciais
bun seed
```

## 📦 Módulos Principais

### Dashboard

O dashboard central oferece uma visão geral do negócio com widgets personalizáveis:
- KPIs financeiros
- Atividades recentes
- Projetos em andamento
- Tarefas pendentes
- Oportunidades de vendas

### Finanças

Módulo completo de gestão financeira:
- Controle de receitas e despesas
- Contas a pagar e receber
- Fluxo de caixa e projeções
- Relatórios financeiros
- Integração com bancos e sistemas de pagamento

### CRM

Gerenciamento completo de relacionamento com clientes:
- Cadastro de clientes e contatos
- Pipeline de vendas
- Gestão de oportunidades
- Histórico de interações
- Automação de follow-ups

### Projetos

Gerenciamento eficiente de projetos e tarefas:
- Criação e gestão de projetos
- Kanban de tarefas
- Gestão de equipes e recursos
- Timesheets e controle de horas
- Relatórios de progresso

### Documentos

Sistema completo de gestão de documentos:
- Armazenamento em nuvem
- Versionamento de documentos
- Colaboração em tempo real
- Templates e modelos
- Assinatura digital

## 🔌 Integrações

O ExzosMidday oferece integrações nativas com:

- **ExzosPayments** - Processamento de pagamentos
- **ExzosAnalytics** - Analytics avançado
- **ExzosAuth** - Autenticação e autorização
- **Serviços Externos** - Google Workspace, Microsoft 365, Slack, etc.
- **APIs Bancárias** - Integração com PIX, boletos e transferências
- **Sistemas Fiscais** - Emissão de notas fiscais e controle tributário

## 🧪 Testes

```bash
# Executar todos os testes
bun test

# Testes unitários
bun test:unit

# Testes de integração
bun test:integration

# Testes e2e
bun test:e2e
```

## 🚀 Deploy

O deploy do ExzosMidday é automatizado via GitHub Actions:

```bash
# Build para produção
bun build

# Preview local da versão de produção
bun start
```

## 🧩 Migração do ExzosV1

O ExzosMidday incorpora recursos do projeto ExzosV1, aproveitando:

1. **Estrutura de Monorepo** - Adaptada para o ExzosSpace
2. **Tecnologias Core** - Next.js, Supabase, TailwindCSS
3. **Componentes de UI** - Adaptados para o ExzosOnlook
4. **Fluxos de Autenticação** - Expandidos no ExzosAuth
5. **Integrações** - Resend, Trigger.dev, OpenPanel

### Processo de Migração

A migração do ExzosV1 para o ExzosMidday segue estas etapas:

1. **Análise de Código** - Identificação de componentes e lógicas reutilizáveis
2. **Refatoração** - Adaptação para a arquitetura ExzosVerse
3. **Extensão** - Adição de funcionalidades específicas da Exzos
4. **Testes** - Garantia de compatibilidade e performance
5. **Integração** - Conexão com outros serviços do ExzosVerse

## 📊 Comparação com ExzosV1

| Aspecto | ExzosV1 | ExzosMidday |
|---------|---------|-------------|
| Arquitetura | Monorepo básico | Monorepo avançado integrado ao ExzosVerse |
| UI | Shadcn/UI | ExzosOnlook Design System |
| Autenticação | Supabase Auth | ExzosAuth (expandido) |
| Backend | Next.js API Routes | Next.js + tRPC + Server Actions |
| Banco de Dados | Supabase | Supabase + Drizzle ORM |
| Integrações | Limitadas | Extensivas com o ecossistema Exzos |
| Personalização | Básica | Avançada por tenant/cliente |
| Escalabilidade | Média | Alta com microsserviços |

## 🗓️ Roadmap

### Fase 1: Fundação (Q2 2025)
- ✅ Implementação base do ExzosMidday
- ✅ Integração com ExzosOnlook
- ⬜ Módulos core (Dashboard, Finanças, CRM)
- ⬜ Migração de recursos do ExzosV1

### Fase 2: Expansão (Q3 2025)
- ⬜ Módulos avançados (Projetos, Documentos)
- ⬜ Integração completa com ExzosAuth
- ⬜ API pública via ExzosConnect
- ⬜ Sistema de extensões e plugins

### Fase 3: Especialização (Q4 2025)
- ⬜ Soluções específicas por indústria
- ⬜ IA avançada para análise e recomendações
- ⬜ Marketplace de integrações
- ⬜ Mobile app nativo

## 📚 Recursos Adicionais

- [Arquitetura Detalhada](./docs/architecture.md)
- [Guia de API](./docs/api.md)
- [Esquema do Banco de Dados](./docs/database.md)
- [Fluxos de Autenticação](./docs/auth.md)
- [Guia de Personalização](./docs/customization.md)

## 📞 Suporte

Para suporte e dúvidas:
- Email: [desenvolvimento@exzos.com.br](mailto:desenvolvimento@exzos.com.br)
- [Criar Issue](https://github.com/exzosdigital/ExzosSpace/issues/new)