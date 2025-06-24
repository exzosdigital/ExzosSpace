---
title: "Guia de Integração — ExzosNebula (Supabase OpenSource) no ExzosVerse"
den_id: "59ca2f9e-7882-48ff-8c5a-624dabf1b162"
created_date: "2025-06-15"
last_updated: "2025-06-24"
language: "pt-BR"
---

# Guia de Integração — ExzosNebula (Supabase OpenSource) no ExzosVerse

---

## O que é ExzosNebula?

**ExzosNebula** é a feature oficial de backend open source do ExzosVerse, baseada no [Supabase](https://github.com/supabase/supabase).
Ela centraliza autenticação, banco de dados, storage, funções e automação em tempo real, com administração visual e integração nativa com todas as features do ExzosVerse.

---

## Principais Funcionalidades

* **Administração visual** dos recursos Supabase, totalmente integrada ao dashboard ExzosVerse.
* **Provisionamento automatizado** por organização/projeto (multi-tenancy).
* **Integração contínua com ExzosNexus, ExzosGen, ExzosVision e agents.**
* **Monitoramento, logs, backups e auditoria centralizados.**
* **APIs, eventos e automações AI-ready, expostos para todo o ecossistema ExzosVerse.**

---

## Fluxo no ExzosVerse

1. **Criação de projeto/organização:**
   Usuário pode provisionar uma instância ExzosNebula dedicada.

2. **Gerenciamento centralizado:**
   Painel único para DB, Auth, Storage, Policies, Functions e integrações.

3. **Automação & agents:**
   Agents leem, documentam e atualizam dados via ExzosNebula, sempre respeitando o contexto multi-org.

4. **Segurança:**
   Uso obrigatório de Row Level Security (RLS), roles e auditoria.

5. **Documentação:**
   Todos os boilerplates, guias e exemplos já incluem integração ExzosNebula.

---

## Referências

* [Supabase Repo](https://github.com/supabase/supabase)
* [Supabase Docs](https://supabase.com/docs)
* [Guia Multi-Tenancy Supabase](https://supabase.com/docs/guides/auth/row-level-security)
* [ExzosVerse Monorepo](https://github.com/exzosdigital/exzosverse)

---

> **Resumo:**
> ExzosNebula é a base cósmica de dados, autenticação e automação do ExzosVerse, perfeita para um ecossistema open, seguro e AI-ready.