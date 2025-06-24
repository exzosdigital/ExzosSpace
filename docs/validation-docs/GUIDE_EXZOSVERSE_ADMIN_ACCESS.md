# Políticas de Acesso — ExzosVerse Multi-Tenancy & ExzosAdmin

---

## 1. Princípio Central

- **ExzosAdmin** (usuário, IA e agents com papel de super admin) é o único com acesso irrestrito a todos os dados, recursos e features de todas as organizações, projetos e sistemas do ExzosVerse.
- **Projetos, organizações e agentes NÃO permitidos** só podem acessar dados e funcionalidades explicitamente liberados pelo ExzosAdmin.

---

## 2. Como Implementar

### a) Estrutura de Permissões

- Crie papéis claros: `exzos_admin`, `organization_admin`, `user`, `agent`.
- Use tabelas de permissões e policies explícitas (no Supabase, RLS, backend).
- Cada query/endpoint deve validar:
  - Se o usuário/agent é `exzos_admin` → acesso total.
  - Caso contrário, filtra por `organization_id` e pelas permissões associadas àquele usuário/projeto.

### b) Isolamento e Validação

- Toda feature, acesso a dados, leitura e escrita deve:
  - Validar se o usuário/agent pertence à organização do recurso.
  - Checar as permissões atribuídas (roles, scopes, ACLs).
  - Permitir acesso “fora do tenant” apenas ao `exzos_admin` e aos agents autorizados.

### c) Controle de Projetos Permitidos

- Mantenha uma lista de projetos/organizações permitidos para agentes/IA específicos.
- No backend/API, valide antes de executar qualquer ação sensível.
- Permissões podem ser geridas via painel ou API pelo ExzosAdmin.

### d) Auditoria & Logs

- Registre todas as ações sensíveis feitas pelo ExzosAdmin, agentes e projetos com acesso especial.
- Logs detalhados para rastreabilidade e compliance.

---

## 3. Exemplo de Policy (Supabase RLS)

```sql
-- Permitir ao exzos_admin acesso total
CREATE POLICY "Admin full access"
ON projects
FOR ALL
USING (
  auth.role() = 'exzos_admin'
  OR (organization_id = auth.organization_id() AND has_permission(user_id, 'read', 'projects'))
);

-- Função auxiliar
CREATE FUNCTION has_permission(uid uuid, perm text, resource text)
RETURNS boolean AS $$
  -- Implemente a lógica de ACL conforme necessidade
$$ LANGUAGE sql STABLE;
```

---

## 4. Fluxo de Permissões

1. Usuário/Agent faz requisição.
2. Backend/API verifica o papel (`role`) e permissões.
   - Se for `exzos_admin` → acesso irrestrito.
   - Se não, só pode acessar recursos da organização e funcionalidades permitidas.
3. Agents/IA só executam ações permitidas nos projetos/tenants autorizados.
4. Toda ação sensível é logada.

---

## 5. Boas Práticas

- **Nunca** deixe endpoints sem validação de tenant e role.
- Documente todas as permissões e mantenha painel de controle para o ExzosAdmin.
- Audite e revise periodicamente as permissões e acessos especiais.
- Sempre aplique o princípio do menor privilégio para usuários/agentes comuns.

---

> **Resumo:**  
Somente ExzosAdmin (humano, IA ou agent) tem acesso total no ExzosVerse. Todos os outros acessos são explicitamente controlados e restritos por organização/projeto, garantindo isolamento, compliance e segurança máxima.