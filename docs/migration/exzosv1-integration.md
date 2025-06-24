# 🔄 Guia de Migração e Integração do ExzosV1

Este documento detalha o processo de migração e integração do repositório [ExzosV1](https://github.com/exzosdigital/exzosv1) para o ecossistema ExzosSpace, adaptando sua arquitetura e recursos para as novas plataformas do ExzosVerse.

## 📋 Visão Geral do ExzosV1

O ExzosV1 é baseado no projeto Midday e oferece:

- **Estrutura de Monorepo** usando Turborepo
- **Stack Tecnológica** moderna com Next.js, Supabase, TailwindCSS
- **Componentes de UI** baseados em Shadcn
- **Serviços Integrados** como Upstash, Resend, Trigger.dev, OpenPanel

### Estrutura Original

```
v1/
├── apps/                         # Aplicações
│   ├── api/                      # Supabase (API, Auth, Storage)
│   ├── app/                      # Aplicação principal
│   └── web/                      # Site de marketing
├── packages/                     # Pacotes compartilhados
│   ├── analytics/                # OpenPanel analytics
│   ├── email/                    # React email library
│   ├── jobs/                     # Trigger.dev background jobs
│   ├── kv/                       # Upstash rate-limited key-value storage
│   ├── logger/                   # Logger library
│   ├── supabase/                 # Queries, Mutations, Clients
│   └── ui/                       # Componentes UI (Shadcn)
└── tooling/                      # Configurações compartilhadas
```

## 🔄 Estratégia de Migração

A migração do ExzosV1 para o ExzosSpace segue uma abordagem modular e incremental:

### 1. Análise de Componentes

**Componentes a serem migrados:**

| Componente | Destino no ExzosSpace | Prioridade |
|------------|------------------------|------------|
| UI (Shadcn) | Adaptação para ExzosOnlook | Alta |
| Autenticação | Evolução para ExzosAuth | Alta |
| API/Supabase | Base para ExzosMidday | Alta |
| Jobs (Trigger.dev) | Serviços no ExzosMidday | Média |
| Emails (React Email) | Pacote compartilhado | Média |
| KV Storage (Upstash) | Serviço compartilhado | Média |
| Analytics (OpenPanel) | Migração para ExzosAnalytics | Baixa |

### 2. Plano de Migração por Fases

#### Fase 1: Fundação (Q2 2025)

- **Estrutura Base**
  - Configuração do monorepo ExzosSpace
  - Migração da estrutura de pacotes e aplicações
  - Configuração de CI/CD e ambientes

- **Componentes Visuais**
  - Adaptação dos componentes Shadcn para ExzosOnlook
  - Implementação do tema Exzos
  - Padronização de interfaces

- **Autenticação**
  - Migração da lógica de autenticação do Supabase
  - Expansão para suporte multi-tenant
  - Implementação de RBAC avançado

#### Fase 2: Aplicações Core (Q3 2025)

- **ExzosMidday**
  - Migração das funcionalidades principais da aplicação
  - Implementação da dashboard e módulos core
  - Integração com ExzosAuth e ExzosOnlook

- **Serviços Compartilhados**
  - Migração dos jobs e workers
  - Implementação dos serviços de email
  - Adaptação do storage e KV

#### Fase 3: Evolução (Q4 2025)

- **APIs e Integrações**
  - Desenvolvimento do ExzosConnect
  - Exposição de APIs públicas
  - Integrações com serviços de terceiros

- **Análise e Monitoramento**
  - Migração do analytics
  - Implementação de telemetria avançada
  - Dashboards de monitoramento

## 📝 Guia Técnico de Migração

### Migração de Componentes UI

O ExzosV1 utiliza componentes baseados em Shadcn que precisam ser adaptados para o ExzosOnlook:

```typescript
// Componente original no ExzosV1
// packages/ui/src/button.tsx
import { cva } from "class-variance-authority";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        // ...outros variantes
      },
      // ...outras propriedades
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

// Versão migrada para ExzosOnlook
// apps/exzosonlook/src/components/ui/Button/Button.tsx
import { cva } from "class-variance-authority";
import { tokens } from "../../../styles/tokens";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2",
  {
    variants: {
      variant: {
        primary: `bg-primary-500 text-white hover:bg-primary-600`,
        secondary: `bg-secondary-500 text-white hover:bg-secondary-600`,
        destructive: `bg-error-500 text-white hover:bg-error-600`,
        // ...outros variantes adaptados
      },
      // ...outras propriedades com tokens Exzos
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);
```

### Migração da Autenticação

```typescript
// Autenticação original no ExzosV1
// packages/supabase/src/auth.ts
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const signIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  return { data, error };
};

// Versão migrada para ExzosAuth
// apps/exzosauth/src/lib/auth.ts
import { createClient } from "@supabase/supabase-js";
import { createTenantContext } from "./tenant";

export const createAuthClient = (config: AuthConfig) => {
  const supabase = createClient(
    config.supabaseUrl,
    config.supabaseKey
  );

  const tenantContext = createTenantContext(config.tenantId);

  return {
    signIn: async (email: string, password: string) => {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      
      if (data?.user) {
        await tenantContext.setCurrentTenant(data.user.id);
      }
      
      return { data, error };
    },
    // Métodos expandidos...
  };
};
```

### Migração de APIs e Endpoints

```typescript
// API route original no ExzosV1
// apps/app/src/app/api/users/route.ts
import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = createRouteHandlerClient({ cookies });
  const { data, error } = await supabase.from("users").select("*");
  
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json(data);
}

// Versão migrada para ExzosMidday com tRPC
// apps/exzosmidday/src/server/api/routers/users.ts
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "../trpc";
import { db } from "../../db";

export const usersRouter = createTRPCRouter({
  getAll: protectedProcedure
    .query(async ({ ctx }) => {
      const { userId, tenantId } = ctx;
      
      const users = await db.query.users.findMany({
        where: { tenantId },
      });
      
      return users;
    }),
  // Outros procedimentos...
});
```

## 🔌 Integrações de Serviços

### Upstash (Redis/KV)

```typescript
// Uso original no ExzosV1
// packages/kv/src/index.ts
import { Redis } from "@upstash/redis";

const redis = new Redis({
  url: process.env.UPSTASH_REDIS_REST_URL!,
  token: process.env.UPSTASH_REDIS_REST_TOKEN!,
});

// Versão migrada para serviço compartilhado no ExzosSpace
// packages/cache/src/redis.ts
import { Redis } from "@upstash/redis";

export const createRedisClient = (config: RedisConfig) => {
  const redis = new Redis({
    url: config.url,
    token: config.token,
  });

  return {
    get: async <T>(key: string): Promise<T | null> => {
      return redis.get<T>(key);
    },
    set: async <T>(key: string, value: T, ttl?: number): Promise<void> => {
      if (ttl) {
        await redis.set(key, value, { ex: ttl });
      } else {
        await redis.set(key, value);
      }
    },
    // Métodos adicionais...
  };
};
```

### Trigger.dev (Jobs)

```typescript
// Uso original no ExzosV1
// packages/jobs/src/index.ts
import { TriggerClient } from "@trigger.dev/sdk";

export const client = new TriggerClient({
  id: "v1",
  apiKey: process.env.TRIGGER_API_KEY!,
});

// Job original
export const dailyReportJob = client.defineJob({
  id: "daily-report",
  name: "Daily Report",
  version: "0.0.1",
  trigger: client.scheduled({ cron: "0 9 * * *" }),
  run: async (payload, io) => {
    // Lógica do job...
  },
});

// Versão migrada para ExzosMidday
// apps/exzosmidday/src/server/jobs/reports.ts
import { TriggerClient } from "@trigger.dev/sdk";
import { db } from "../db";
import { sendEmail } from "../../lib/email";

export const client = new TriggerClient({
  id: "exzos-midday",
  apiKey: process.env.TRIGGER_API_KEY!,
});

export const dailyReportJob = client.defineJob({
  id: "tenant-daily-report",
  name: "Tenant Daily Report",
  version: "1.0.0",
  trigger: client.scheduled({ cron: "0 9 * * *" }),
  run: async (payload, io, ctx) => {
    const tenants = await db.query.tenants.findMany();
    
    for (const tenant of tenants) {
      await io.runTask(`process-tenant-${tenant.id}`, async () => {
        const reports = await generateTenantReport(tenant.id);
        await sendEmail({
          to: tenant.adminEmail,
          subject: "Relatório Diário",
          content: {
            type: "daily-report",
            data: reports,
          },
        });
      });
    }
    
    return { processed: tenants.length };
  },
});
```

## 🧪 Testes e Validação

Para cada componente migrado, são necessários testes para garantir a compatibilidade:

1. **Testes Unitários** para componentes individuais
2. **Testes de Integração** para fluxos completos
3. **Testes E2E** para validar a experiência do usuário

Exemplo de script de teste migrado:

```typescript
// Teste original no ExzosV1
// packages/ui/src/button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./button";

describe("Button", () => {
  it("renders correctly", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
});

// Teste migrado para ExzosOnlook
// apps/exzosonlook/src/components/ui/Button/Button.test.tsx
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";
import { ThemeProvider } from "../../../provider";

describe("Button", () => {
  it("renders correctly", () => {
    render(
      <ThemeProvider>
        <Button>Click me</Button>
      </ThemeProvider>
    );
    
    expect(screen.getByText("Click me")).toBeInTheDocument();
  });
  
  it("applies correct styles for primary variant", () => {
    render(
      <ThemeProvider>
        <Button variant="primary">Primary</Button>
      </ThemeProvider>
    );
    
    const button = screen.getByText("Primary");
    expect(button).toHaveClass("bg-primary-500");
  });
});
```

## 📊 Métricas de Sucesso

Para medir o sucesso da migração, utilizaremos as seguintes métricas:

1. **Cobertura de Código** - Percentual de código migrado
2. **Performance** - Comparação de métricas de desempenho antes/depois
3. **Complexidade** - Redução na complexidade do código
4. **Reutilização** - Aumento no compartilhamento de componentes
5. **Tempo de Desenvolvimento** - Redução no tempo para novas features

## 🚀 Próximos Passos

1. **Criar branches de migração** para cada componente principal
2. **Implementar CI/CD** específico para validação de componentes migrados
3. **Documentar APIs** e interfaces dos componentes migrados
4. **Treinar a equipe** nas novas estruturas e padrões
5. **Implementar feature flags** para transição gradual

## 📚 Recursos Adicionais

- [Repositório ExzosV1](https://github.com/exzosdigital/exzosv1)
- [Arquitetura do ExzosSpace](../architecture/overview.md)
- [Padrões de Componentes](../standards/components.md)
- [Guia de Estilo do ExzosOnlook](../exzosverse/design-system.md)

## 📝 Notas de Implementação

- Manter compatibilidade com APIs existentes durante a transição
- Priorizar migração de componentes core antes de funcionalidades específicas
- Implementar testes automatizados para cada componente migrado
- Documentar decisões de arquitetura e trade-offs