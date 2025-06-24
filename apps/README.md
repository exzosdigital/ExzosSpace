# 🚀 Aplicações SaaS Exzos

Este diretório contém todas as aplicações SaaS desenvolvidas pela Exzos Digital. Cada aplicação está em seu próprio subdiretório e segue uma estrutura monorepo para facilitar o compartilhamento de código e dependências.

## 📋 Aplicações Disponíveis

### Midday
Plataforma de gestão de negócios com recursos de produtividade, análise financeira e automação.
- **Diretório**: [/midday](./midday)
- **Status**: Em desenvolvimento
- **Tech Stack**: Next.js, React, Supabase
- **URL**: [midday.ai](https://midday.ai)

### ExzosAuth
Sistema centralizado de autenticação e autorização para todas as aplicações Exzos.
- **Diretório**: [/auth](./auth)
- **Status**: Planejado
- **Tech Stack**: Next.js, NextAuth.js, Supabase Auth
- **URL**: TBD

### ExzosPayments
Processamento e gestão de pagamentos para todos os produtos Exzos.
- **Diretório**: [/payments](./payments)
- **Status**: Planejado
- **Tech Stack**: Node.js, Stripe API, PostgreSQL
- **URL**: TBD

### ExzosAnalytics
Sistema de análise de dados e relatórios para insights de negócios.
- **Diretório**: [/analytics](./analytics)
- **Status**: Planejado
- **Tech Stack**: React, D3.js, Python, Apache Superset
- **URL**: TBD

## 🔧 Configuração

Cada aplicação possui seu próprio arquivo README com instruções detalhadas de configuração. Geralmente, o processo inclui:

```bash
# Entrar no diretório da aplicação
cd apps/[nome-da-aplicacao]

# Instalar dependências
npm install

# Configurar variáveis de ambiente
cp .env.example .env.local

# Executar servidor de desenvolvimento
npm run dev
```

## 🏗️ Estrutura Comum

Cada aplicação segue uma estrutura similar:

```
app/
├── public/              # Ativos estáticos
├── src/                 # Código-fonte
│   ├── app/             # Rotas da aplicação (Next.js App Router)
│   ├── components/      # Componentes React
│   ├── lib/             # Bibliotecas e utilitários
│   ├── hooks/           # Hooks React personalizados
│   ├── types/           # Definições de tipos TypeScript
│   └── utils/           # Funções utilitárias
├── .env.example         # Exemplo de variáveis de ambiente
├── package.json         # Dependências e scripts
└── README.md            # Documentação específica da aplicação
```

## 🚀 Deploy

Todas as aplicações são automaticamente implantadas na Vercel através de nosso pipeline CI/CD. Para mais detalhes, consulte o [guia de deploy](../docs/guides/deployment.md).

## 👥 Contribuição

Para contribuir com qualquer aplicação, siga nosso [fluxo de trabalho padrão](../docs/guides/workflow.md) e certifique-se de ler a documentação específica da aplicação.

## 📚 Documentação Detalhada

Para documentação detalhada de cada aplicação, consulte:

- [Documentação Midday](./midday/README.md)
- [Documentação ExzosAuth](./auth/README.md)
- [Documentação ExzosPayments](./payments/README.md)
- [Documentação ExzosAnalytics](./analytics/README.md)