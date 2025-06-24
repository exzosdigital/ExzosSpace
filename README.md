# 🚀 ExzosSpace

Hub central para desenvolvimento, documentação e gestão dos projetos SaaS da Exzos Digital.

## 📋 Visão Geral

ExzosSpace é o ponto central para todas as aplicações SaaS desenvolvidas pela Exzos. Este espaço serve como:

- **Repositório Central** - Hub para código, documentação e recursos compartilhados
- **Centro de Documentação** - Padrões, guias e melhores práticas de desenvolvimento
- **Sistema de Gestão** - Acompanhamento de projetos, issues e milestones
- **Colaboração** - Ambiente para trabalho em equipe e compartilhamento de conhecimento

## 🏗️ Arquitetura

Nossa arquitetura SaaS é baseada em:

- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js, NestJS, tRPC
- **Banco de Dados**: Supabase, PostgreSQL
- **Infraestrutura**: Vercel, Docker, GitHub Actions
- **Autenticação**: Supabase Auth, NextAuth.js
- **Monitoramento**: Sentry, LogRocket

## 🌐 Aplicações

| Aplicação | Descrição | Status | URL |
|-----------|-----------|--------|-----|
| Midday | Plataforma de gestão de negócios | Em desenvolvimento | [midday.ai](https://midday.ai) |
| ExzosAuth | Sistema de autenticação centralizado | Planejado | TBD |
| ExzosPayments | Processamento de pagamentos | Planejado | TBD |
| ExzosAnalytics | Análise de dados e relatórios | Planejado | TBD |

## 📁 Estrutura do Repositório

```
ExzosSpace/
├── apps/                  # Aplicações SaaS
│   ├── midday/            # Midday - Gestão de Negócios
│   ├── auth/              # ExzosAuth - Autenticação
│   └── ...                # Outras aplicações
├── packages/              # Pacotes compartilhados
│   ├── ui/                # Biblioteca de UI
│   ├── config/            # Configurações compartilhadas
│   ├── api/               # Clientes de API
│   └── ...
├── infrastructure/        # Configuração de infraestrutura
│   ├── docker/            # Configurações Docker
│   ├── github-actions/    # Workflows CI/CD
│   └── vercel/            # Configurações Vercel
├── docs/                  # Documentação
│   ├── architecture/      # Documentação de arquitetura
│   ├── api/               # Documentação de API
│   ├── guides/            # Guias para desenvolvedores
│   └── standards/         # Padrões de código
└── scripts/               # Scripts utilitários
```

## 🚀 Deploy Automático

Utilizamos GitHub Actions e Vercel para automação de deploy:

- **Ambientes de Desenvolvimento**: Previews automáticos para cada PR
- **Staging**: Deploy automático para branch `staging`
- **Produção**: Deploy após aprovação para branch `main`

## 🧩 Integração com Supabase

Nosso stack SaaS é profundamente integrado com o Supabase:

- **Autenticação**: Login social, MFA, gerenciamento de usuários
- **Banco de Dados**: PostgreSQL com Row Level Security (RLS)
- **Armazenamento**: Upload e gerenciamento de arquivos
- **Edge Functions**: Funções serverless para lógica de backend
- **Realtime**: Funcionalidades em tempo real via WebSockets

## 📊 Monitoramento e Análise

Utilizamos as seguintes ferramentas para monitoramento:

- **Sentry**: Rastreamento de erros e performance
- **LogRocket**: Reprodução de sessões de usuário
- **Vercel Analytics**: Métricas de performance web
- **PostgreSQL Insights**: Análise de performance do banco de dados

## 🧪 Testes

Nossa estratégia de testes inclui:

- **Testes Unitários**: Jest, React Testing Library
- **Testes E2E**: Playwright
- **Testes de Integração**: Supertest
- **Testes de API**: Insomnia, Postman

## 🔄 Fluxo de Trabalho

1. **Issues**: Todas as tarefas começam como issues no GitHub
2. **Branches**: Criar branch baseada na issue (`feature/123-nome-da-feature`)
3. **Pull Requests**: Abrir PR para `staging` com revisão de código
4. **CI/CD**: Testes automatizados e deploy de preview
5. **Merge**: Após aprovação, merge para `staging` e depois para `main`

## 📚 Documentação

Toda a documentação está disponível em:

- **Código**: Comentários JSDoc/TSDoc no código
- **README**: Documentação específica de cada pacote/app
- **Wiki**: Documentação mais detalhada na wiki do GitHub
- **Storybook**: Documentação interativa dos componentes de UI

## 👥 Contribuição

Para contribuir com este repositório:

1. Familiarize-se com nossos [padrões de código](./docs/standards/)
2. Verifique as [issues abertas](https://github.com/exzosdigital/ExzosSpace/issues)
3. Faça fork do repositório e crie uma branch para sua feature
4. Envie um PR com descrição clara das alterações

## 📞 Contato

- **Email**: [desenvolvimento@exzos.com.br](mailto:desenvolvimento@exzos.com.br)
- **Website**: [exzos.com.br](https://exzos.com.br)

---

© 2025 Exzos Digital. Todos os direitos reservados.