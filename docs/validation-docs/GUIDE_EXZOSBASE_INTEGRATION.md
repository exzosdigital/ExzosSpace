# Guia de Integração — ExzosBase (Supabase OpenSource) no ExzosVerse

---

## O que é ExzosBase?

**ExzosBase** é a feature oficial do ExzosVerse para backend open source, autenticação, banco de dados, storage, funções serverless e automação em tempo real, baseada no [Supabase](https://github.com/supabase/supabase).  
Está integrada nativamente ao dashboard, podendo ser provisionada, gerida e conectada a qualquer projeto, organização ou agent do ecossistema Exzos.

---

## Principais Funcionalidades

- **Administração visual** dos recursos Supabase (DB, Auth, Storage, Functions) direto no dashboard ExzosVerse.
- **Provisionamento automatizado** por organização/projeto, já multi-tenancy.
- **Integração contínua com ExzosNexus, ExzosGen, ExzosVision e agents.**
- **Monitoramento, logs, backups e auditoria centralizados.**
- **Templates de schemas, automação de policies e exemplos de integração.**
- **APIs e eventos expostos para automações AI-ready.**

---

## Como funciona no ExzosVerse

1. **Ao criar um novo projeto/org:**  
   Usuário pode optar por provisionar um ambiente ExzosBase dedicado, com schemas e policies padrão.
2. **Gerenciamento unificado:**  
   Painel central para banco, storage, users, funções edge, policies e integrações.
3. **Automação & agentes:**  
   Agents podem ler, gerar e integrar dados via ExzosBase, com contexto seguro por organização.
4. **Segurança:**  
   Uso obrigatório de Row Level Security (RLS), roles, logs e auditoria.
5. **Documentação atualizada:**  
   Todos os boilerplates, guias e exemplos do ExzosVerse trazem integração ExzosBase como padrão.

---

## Links Úteis

- [Supabase Repo](https://github.com/supabase/supabase)
- [Documentação Supabase](https://supabase.com/docs)
- [Guia Multi-Tenancy Supabase](https://supabase.com/docs/guides/auth/row-level-security)
- [ExzosVerse Monorepo](https://github.com/exzosdigital/exzosverse)

---

> **Resumo:**  
ExzosBase torna o Supabase parte nativa do ExzosVerse, elevando o padrão de backend open source, automação, multi-tenancy e integração AI-ready para todo o ecossistema.