---
title: "Guia de Desenvolvimento — ExzosHorizon System & Boilerplates"
den_id: "90c847cf-5c0f-4956-ae39-daeb3ef3f6d0"
created_date: "2025-06-18"
last_updated: "2025-06-24"
language: "pt-BR"
---

# Guia de Desenvolvimento — ExzosHorizon System & Boilerplates

## Visão Geral

O **ExzosHorizon System** é o núcleo de desenvolvimento de produtos SaaS, apps e integrações do ecossistema ExzosVerse. Ele centraliza o uso de boilerplates open-source (como exzosv1), frameworks headless e integrações, automatizando o setup e padronizando a UI/UX, arquitetura e práticas de desenvolvimento.
Cada novo sistema/app criado recebe o nome de uma constelação (ex: HorizonOrion, HorizonAries), criando uma identidade clara e escalável para os projetos desenvolvidos.

---

## 1. **Regras de Nomeação e Organização**

* **Boilerplates:**
  Todo boilerplate, template ou integração deve ser nomeado como `Horizon[Constellation]` (ex: HorizonLyra, HorizonOrion, HorizonAries).

* **Framework e Scripts de Integração:**
  Crie scripts/frameworks que automatizem: 
  * Clonagem de boilerplates ("headless" ou fullstack)
  * Setup de ambiente (env, keys, branding)
  * Integração com ExzosNexus (MCP), Supabase, Vercel, etc.
  * Geração de documentação inicial automática

* **Repositório Central:**
  Todos os boilerplates e integrações devem estar organizados no monorepo exzosverse, em: 
  * `/boilerplates/Horizon[Constellation]`
  * `/framework`
  * `/scripts/auto-integrate.js` (exemplo)

---

## 2. **Guia de Desenvolvimento de Boilerplates e Apps**

### 2.1. Setup Automático

* Use scripts para: 
  * Clonar boilerplate selecionado
  * Rodar prompts para customização (nome, branding, etc.)
  * Integrar com o ExNexus Agent para automação de MCP/server
  * Aplicar temas, logos e variáveis do projeto

### 2.2. Framework de Integração

* Crie um framework ou CLI (ex: `exzos-horizon create`) que: 
  * Lista boilerplates disponíveis (busca no repo e em fontes open-source)
  * Permite setup via wizard interativo (CLI ou web)
  * Integra automaticamente com Supabase, Vercel, Sentry, etc.
  * Gere documentação inicial e arquivos de configuração
  * Registre o projeto no painel do ExzosVerse

### 2.3. UI/UX

* Siga o guia visual do GUIDE_UIUX_EXZOSVERSE.md
* Sempre utilize componentes do ExzosHorizon Design System
* Documente qualquer customização exclusiva no README do boilerplate/app

### 2.4. Integração com ExNexus Agent (MCP)

* O ExNexus Agent deve: 
  * Criar um MCP server dedicado a cada novo Horizon[Constellation]
  * Integrar provedores AI via ExzosNexus
  * Gerenciar autenticação, webhooks, logs e métricas do MCP
  * Documentar endpoints e integração no projeto

* Cada boilerplate/app já nasce com o MCP server integrado, pronto para ampliação

---

## 3. **Automação e Script de Integração**

### Exemplo de Script CLI (pseudo-código):

```bash
npx exzos-horizon create
# Prompt:
# > Qual constelação? [Orion, Lyra, Aries...]
# > Nome do projeto?
# > Deseja integrar Supabase? [Y/n]
# > Deseja integrar AI (ExzosNexus)? [Y/n]
# > Deseja integração com Vercel? [Y/n]
# > ...

# Automatiza:
# - Clonagem e renomeio do boilerplate
# - Setup de variáveis de ambiente
# - Integração ExNexus (MCP)
# - Geração de documentação
# - Registro no ExzosVerse
```

---

## 4. **Padronização de Documentação**

* Todo boilerplate/app deve conter: 
  * README.md detalhado (objetivo, stack, integrações)
  * Changelog
  * Guia de setup rápido ("Getting Started")
  * Estrutura de pastas comentada
  * Exemplo de uso dos principais componentes
  * Documentação dos endpoints MCP e integrações externas

* Atualize o `/docs` central no exzosverse para cada novo Horizon[Constellation] criado

---

## 5. **Regras de Desenvolvimento**

* Não alterar boilerplates originais, sempre criar forks nomeados corretamente
* Toda alteração ou novo componente deve ser documentado
* Siga o padrão UI/UX do ExzosHorizon
* Scripts e CLI devem ser testados cross-platform (Mac, Linux, Windows)
* Código limpo, tipado (TypeScript), modular e testável
* Integrações com IA sempre via ExzosNexus/MCP para padronização
* Automatize deploys e integrações via workflows GitHub Actions

---

## 6. **Integração e Evolução com Open Source**

* Analise periodicamente novos recursos em repositórios open-source (Midday, Vercel, Shadcn, etc.)
* Avalie a integração de frameworks headless, ferramentas AI, e UI Kits
* Priorize projetos ativos e com documentação sólida
* Sempre cite fontes e mantenha compliance de licenças

---

## 7. **ExNexus Agent (MCP Automation)**

* O ExNexus Agent é responsável por: 
  * Gerar e configurar MCP servers para cada Horizon[Constellation]
  * Manter catálogo de provedores AI integrados
  * Automatizar setup de webhooks, autenticação, logs, etc.
  * Gerar documentação de API MCP
  * Notificar o ExVerse Agent sobre novos servidores e integrações

---

## 8. **Checklist de Integração de um Novo Horizon**

- [ ] Nomear corretamente: Horizon[Constellation]
- [ ] Rodar script/framework de integração
- [ ] Setup de branding e variáveis
- [ ] Integração automática com MCP via ExNexus Agent
- [ ] Testar deploy e integração Supabase, Vercel, etc.
- [ ] Gerar documentação inicial
- [ ] Registrar no painel do ExzosVerse
- [ ] Validar UI/UX e compliance
- [ ] Atualizar documentação central

---

## 9. **Onde documentar**

* Todos os guias, changelogs e integrações devem ir para `/docs` do monorepo ExzosVerse
* Cada boilerplate deve ter sua própria documentação e linkar para o guia principal
* O ExNexus Agent deve manter logs e histórico de integrações/migrações

---

## 10. **Próximos Passos**

* Criar o CLI do ExzosHorizon para automação
* Configurar o ExNexus Agent e registrar MCP servers
* Migrar e nomear boilerplates existentes
* Padronizar documentação e UI/UX
* Evoluir scripts para integração contínua de novas stacks/boilerplates

---

> **Este guia deve ser seguido rigorosamente para garantir a padronização, automação e evolução contínua de todo o ecossistema ExzosVerse.**