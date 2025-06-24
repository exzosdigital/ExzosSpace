# Checklist de Integração e Rebranding ExzosVerse

## 1. Repositório Base e Estrutura

- [ ] Renomear e migrar o projeto principal **exzosmidday** para ser o core do **exzosverse**
  - ExzosMidday → ExzosVerse
- [ ] Certificar que toda a documentação, variáveis, domínios e branding refletem **ExzosVerse** em vez de Midday, MiddayAI, etc.

## 2. Integração de Features e Design System

- [ ] Integrar os recursos do **exzosonlook** como **ExzosHorizon**
  - ExzosOnlook → ExzosHorizon (Copilot de desenvolvimento web e SaaS, design system e interface AI)
  - Garantir que os componentes do design system estejam disponíveis como pacote/monorepo em `apps/exzoshorizon` ou `packages/horizon`
  - Atualizar todas as referências e imports nos apps para usar ExzosHorizon

## 3. Integração de Infraestrutura IA

- [ ] Integrar o pacote **@vercel/mcp-adapter** como **ExzosNexus**
  - @vercel/mcp-adapter → ExzosNexus (Ponte universal para MCP, abstração de multi-provider AI)
  - Certificar que exista um pacote/serviço em `packages/nexus` ou equivalente no monorepo
  - Adaptar a página `/ai-providers` para gerenciar os MCPs via ExzosNexus

## 4. Integração de Boilerplates SaaS

- [ ] Integrar o starter kit **exzosv1** como boilerplate chamado **HorizonAries**
  - exzosv1 → HorizonAries (nome correto em inglês para a constelação Áries)
  - Colocar o boilerplate em uma pasta dedicada, ex: `boilerplates/horizonaries`
  - Atualizar README e documentação para explicar como iniciar novos projetos SaaS baseados em HorizonAries

## 5. Organização no Monorepo exzosverse

- [ ] Estruturar o repositório **exzosverse** como monorepo central, contendo:
  - `apps/exzosverse` (core/business)
  - `apps/exzoshorizon` (copilot/design system)
  - `packages/nexus` (ExzosNexus/MCP)
  - `boilerplates/horizonaries` (starter kit SaaS)
  - `docs/` (documentação central e onboarding)
  - `infrastructure/` (scripts de deploy, CI/CD, supabase, etc.)
- [ ] Atualizar workspaces no package.json/yarn/npm para reconhecer todos os subprojetos

## 6. Identidade Visual e Branding

- [ ] Garantir que todas as logos, favicons e assets estejam atualizadas para ExzosVerse/ExzosHorizon
- [ ] Atualizar temas, cores e assets globais para refletir a nova identidade
- [ ] Revisar todos os README.md, documentação, e metadados

## 7. Automação e CI/CD

- [ ] Configurar workflows do GitHub Actions para build, testes e deploy de todos os apps/packages
- [ ] Sincronizar variáveis de ambiente entre Supabase, Vercel e os apps
- [ ] Automatizar o deploy do monorepo na Vercel e demais provedores

## 8. Checklist de Testes Finais

- [ ] Testar onboarding de novos usuários/projetos via ExzosVerse
- [ ] Testar o funcionamento do copiloto ExzosHorizon em apps frontend e backend
- [ ] Testar ativação e configuração de MCPs via ExzosNexus e página `/ai-providers`
- [ ] Testar a criação de novos projetos a partir do boilerplate HorizonAries
- [ ] Testar integração de autenticação, banco e serviços third-party

## 9. Documentação e Comunicação

- [ ] Atualizar e centralizar documentação do ecossistema ExzosVerse (README.md, docs, guides)
- [ ] Documentar processos de rebranding, integração e uso de cada componente
- [ ] Incluir roadmap e próximos passos para evolução do monorepo

---

**Observação:**  
O nome correto para o boilerplate baseado em Áries é **HorizonAries** (não “Horizonaries”).

---

## Ação Recomendada

Peça para o responsável pelo repositório **exzosverse** organizar tudo conforme o checklist acima, garantindo rebranding total, integração completa dos módulos e documentação clara para onboarding de novos devs e projetos.

```diff
> Por favor, organize o monorepo exzosverse seguindo este checklist, garantindo que:
> - exzosmidday → apps/exzosverse
> - exzosonlook → apps/exzoshorizon
> - @vercel/mcp-adapter → packages/nexus
> - exzosv1 → boilerplates/horizonaries
> - Todo o branding, documentação e automações estejam atualizadas para ExzosVerse!
```