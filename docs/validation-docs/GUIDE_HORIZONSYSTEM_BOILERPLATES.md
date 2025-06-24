# Guia de Desenvolvimento — ExzosHorizon System & Boilerplates

---

## Visão Geral

O **ExzosHorizon System & Boilerplates** é o núcleo estratégico do desenvolvimento ágil e padronizado de aplicações, soluções SaaS e integrações no ecossistema ExzosVerse.  
Padroniza a seleção, integração, automação e evolução de boilerplates open source, garantindo identidade visual, automação, documentação e interoperabilidade via ExNexus Agent (MCP).  
Cada novo sistema/app recebe o nome de uma constelação (ex: HorizonOrion, HorizonAries), promovendo identidade, reuso e governança.

---

## 1. **Seleção e Avaliação de Boilerplates**

- **Critérios de Seleção:**
  - Atividade no repositório (commits recentes, issues, releases)
  - Documentação clara e comunidade ativa
  - Licença permissiva (MIT, Apache, etc)
  - Arquitetura moderna (TypeScript, monorepo, modularidade, headless)
  - Compatibilidade com Next.js, Supabase, Vercel, automações CI/CD

- **Boilerplates Essenciais (com links):**
  - [exzosv1](https://github.com/exzosdigital/exzosv1) — Starter kit SaaS Exzos, base para HorizonAries
  - [midday-ai/v1](https://github.com/midday-ai/v1) — Open-source starter kit baseado no Midday
  - [midday-ai/midday](https://github.com/midday-ai/midday) — Base para integrações financeiras/empresariais
  - [supabase/supabase](https://github.com/supabase/supabase) — Backend e banco de dados
  - [vercel-labs/mcp-for-next.js](https://github.com/vercel-labs/mcp-for-next.js) — Base para ExzosNexus/MCP
  - [shadcn/ui](https://github.com/shadcn-ui/ui) — UI Kit moderno e reutilizável
  - [exzosdigital/exzosonlook](https://github.com/exzosdigital/exzosonlook) — Design System ExzosHorizon

---

## 2. **Padrões de Nomeação e Organização**

- **Nomeação:**  
  Cada boilerplate deve seguir o padrão `Horizon[Constellation]` (ex: HorizonOrion, HorizonAries).
- **Estrutura de Diretórios:**  
  ```
  /boilerplates/Horizon[Constellation]/
  /scripts/auto-integrate-boilerplate.js
  /docs/[constellation]-boilerplate.md
  ```
- **Documentação:**  
  README.md específico explicando stack, funcionalidades, integrações, automações e customizações.

---

## 3. **Automação de Setup e Integração**

- **Script/CLI Automatizado:**  
  - Lista e clona boilerplates disponíveis (internos/externos)
  - Executa prompts para personalização (nome, branding, configs)
  - Integra automaticamente com ExzosNexus (MCP), Supabase, Vercel, etc.
  - Gera documentação inicial do projeto
  - Registra o novo sistema em ExzosVerse

- **Exemplo de Fluxo:**
  ```bash
  npx exzos-horizon create --boilerplate orion
  # Automatiza:
  # - Clonagem e setup do HorizonOrion
  # - Configuração de envs, branding e integrações
  # - Integração com ExzosNexus/MCP
  # - Geração de documentação e exemplo de uso
  # - Registro no painel ExzosVerse
  ```

---

## 4. **Regras de Customização e Evolução**

- **Nunca altere o core original dos boilerplates.**  
  Sempre crie forks ou use scripts de extensão.
- **Documente toda customização (README, /docs).**
- **Padronize integração com Supabase, Vercel, CI/CD e ExzosNexus.**
- **Evite lock-in:** Estruture para fácil substituição e atualização dos boilerplates.
- **Mantenha compliance e cite fontes/origem.**

---

## 5. **Integração com ExNexus Agent (MCP)**

- **Todo boilerplate deve:**
  - Ser facilmente integrável a endpoints MCP/ExzosNexus
  - Permitir automação de skills, agentes AI e orquestração
  - Registrar webhooks, eventos e logs no painel ExzosVerse
  - Documentar endpoints, integrações e exemplos de uso

---

## 6. **Documentação e Compliance**

- **Documente:**
  - Stack e versões dos boilerplates
  - Passo a passo de setup e integração
  - Customizações realizadas
  - Fluxos de dados e automação
  - Limitações e pontos de atenção
- **Compliance:**  
  Siga a licença dos boilerplates, cite fontes e contribua com upstream.

---

## 7. **Checklist para Integração de um Novo Boilerplate**

- [ ] Avaliação do boilerplate (atividade, licença, docs)
- [ ] Nomeação conforme padrão (Horizon[Constellation])
- [ ] Criação de diretório e README.md detalhado
- [ ] Execução do script/CLI de criação/integração
- [ ] Branding e personalização visual
- [ ] Integração e exposição via ExNexus Agent/MCP
- [ ] Testes de integração (setup, APIs, automação)
- [ ] Documentação final em `/docs` e no painel ExzosVerse

---

## 8. **Evolução e Atualização**

- Avalie periodicamente novos boilerplates e stacks do ecossistema open source
- Automatize notificações de updates/upgrades via ExNexus Agent
- Documente breaking changes e comunique o time ExzosVerse

---

## 9. **Próximos Passos**

- Expandir CLI/scripts para suporte a múltiplos boilerplates
- Criar modelos de integração para os boilerplates mais usados
- Integrar monitoramento, testes e automação contínua via workflows
- Ampliar documentação e exemplos de casos de uso reais

---

> **Este guia garante automação, padronização e evolução contínua na criação de soluções ExzosVerse, acelerando o desenvolvimento e promovendo governança com a identidade Exzos em cada novo projeto.**