---
title: "Guia de Implementação do ExzosSpace"
created_date: "2025-06-24"
last_updated: "2025-06-24"
language: "pt-BR"
---

# Guia de Implementação do ExzosSpace

Este guia descreve os passos necessários para implementar e integrar o ExzosSpace em projetos do ecossistema ExzosVerse.

## Visão Geral

O ExzosSpace é o componente central de documentação, memória e base de conhecimento do ecossistema ExzosVerse. Ele funciona como o "cérebro" do sistema, conectando todos os módulos e fornecendo contexto, memória e validação.

## Requisitos

- Node.js 18+
- PostgreSQL 15+ com PG Vector
- Redis (opcional, para cache)
- Conta no ExzosVerse

## Instalação

### 1. Instalação do Pacote

```bash
# Usando npm
npm install @exzos/space

# Usando yarn
yarn add @exzos/space

# Usando pnpm
pnpm add @exzos/space
```

### 2. Configuração Básica

Crie um arquivo `exzosspace.config.js` na raiz do seu projeto:

```javascript
module.exports = {
  // Configuração da conexão com banco de dados
  database: {
    type: 'postgres',
    url: process.env.DATABASE_URL,
    pgVector: true,
    schema: 'exzosspace'
  },
  
  // Configuração de memória
  memory: {
    blockTypes: ['core', 'archival', 'task'],
    contextWindowSize: 8000,
    reflectionEnabled: true
  },
  
  // Configuração de integração
  integration: {
    // Outros módulos do ExzosVerse para integrar
    modules: ['horizon', 'nebula', 'nexus'],
    
    // Configuração específica de espaço
    projectId: process.env.EXZOS_PROJECT_ID,
    apiKey: process.env.EXZOS_API_KEY
  }
};
```

### 3. Inicialização

Em seu arquivo principal:

```typescript
import { ExzosSpace } from '@exzos/space';

// Inicializar o ExzosSpace
const space = await ExzosSpace.init({
  configPath: './exzosspace.config.js',
  // Opções adicionais
  logLevel: 'info',
  autoMigrate: true
});

// Exportar para uso em outros módulos
export default space;
```

## Uso Básico

### Criação de Contexto

```typescript
import { ExzosSpace } from '@exzos/space';

// Criar contexto para desenvolvimento
const context = await ExzosSpace.createContext({
  technologies: ['react', 'next.js', 'tailwind'],
  patterns: ['atomic-design', 'custom-hooks'],
  projectId: 'customer-portal'
});

// Usar o contexto em outro componente
import { CodeGenerator } from '@exzos/horizon';

const generator = new CodeGenerator({
  spaceContext: context
});

const component = await generator.createComponent({
  name: 'UserProfileCard',
  description: 'Card component showing user profile with avatar and stats'
});
```

### Busca de Documentação

```typescript
// Busca simples
const docs = await ExzosSpace.search('autenticação OAuth com Supabase');

// Busca avançada com filtros
const securityDocs = await ExzosSpace.search({
  query: 'implementação de autenticação',
  filters: {
    tags: ['auth', 'security'],
    type: 'implementation',
    recency: 0.7 // Prioriza conteúdo mais recente (0-1)
  },
  limit: 5
});
```

### Armazenamento de Informação

```typescript
// Armazenar informação importante
await ExzosSpace.store({
  type: 'archival',
  content: {
    topic: "Implementação de autenticação",
    solution: "Uso de OAuth com GitHub e Google",
    context: "Projeto ExzosCommerce"
  },
  tags: ['auth', 'oauth', 'security'],
  priority: 80 // Alta prioridade (0-100)
});
```

## Integração com Agentes

### Configuração de Memória para Agentes

```typescript
import { ExzosSpace } from '@exzos/space';
import { OnboardingAgent } from '@exzos/agents';

const agent = new OnboardingAgent({
  memoryManager: ExzosSpace.createMemoryManager({
    coreMemory: {
      identity: "Sou o agente de onboarding da ExzosVerse",
      purpose: "Auxiliar novos usuários no setup de projetos",
      constraints: ["Nunca pular etapas de segurança", "Verificar permissões"]
    },
    // Configuração de blocos de memória
    blockTypes: ['core', 'archival', 'task'],
    contextWindowSize: 8000,
    // Capacidade de reflexão
    reflectionEnabled: true
  })
});
```

### Recuperação de Memória

```typescript
// Recuperar memória relevante para uma tarefa
const memories = await agent.memory.retrieve({
  query: "Como configurar autenticação OAuth?",
  relevanceThreshold: 0.7,
  maxResults: 5
});

// Usar na resposta
const response = await agent.generateResponse({
  prompt: "Como configurar autenticação OAuth?",
  context: memories.join("\n")
});
```

## Integração com ExzosNexus (MCP)

```typescript
import { ExzosSpace } from '@exzos/space';
import { MCPClient } from '@exzos/nexus';

// Enriquecer prompts com contexto do Space
const mcp = new MCPClient({
  middleware: {
    pre: async (request) => {
      // Recuperar contexto relevante do Space
      const context = await ExzosSpace.retrieveContext(request.prompt, {
        maxTokens: 2000,
        recency: 0.7
      });
      
      // Adicionar ao prompt original
      request.enrichedPrompt = `${context}\n\n${request.prompt}`;
      return request;
    },
    post: async (response) => {
      // Validar resposta usando o sistema de validação
      const validation = await ExzosSpace.validate(response.text);
      if (validation.issues.length > 0) {
        // Corrigir ou sinalizar problemas
        response.metadata.validation = validation;
      }
      return response;
    }
  }
});
```

## Documentação Automática

O ExzosSpace pode gerar documentação automaticamente a partir do código:

```typescript
// Gerar documentação para um módulo
await ExzosSpace.generateDocs({
  sourcePath: './src/features/auth',
  outputPath: './docs/auth',
  format: 'markdown',
  options: {
    includeExamples: true,
    linkToSource: true
  }
});
```

## Gestão de Documentação

O ExzosSpace fornece uma API para gerenciar documentação:

```typescript
// Criar um novo documento
const docId = await ExzosSpace.createDocument({
  title: 'Guia de Implementação de OAuth',
  content: '# Guia de OAuth\n\nEste guia explica...',
  tags: ['auth', 'oauth', 'security'],
  path: '/implementation/auth/oauth-guide'
});

// Atualizar um documento existente
await ExzosSpace.updateDocument(docId, {
  content: '# Guia Atualizado de OAuth\n\nEste guia explica...',
  tags: ['auth', 'oauth', 'security', 'updated']
});

// Buscar um documento
const doc = await ExzosSpace.getDocument(docId);

// Listar documentos
const docs = await ExzosSpace.listDocuments({
  tags: ['auth'],
  limit: 10,
  offset: 0
});
```

## Monitoramento e Logs

O ExzosSpace fornece ferramentas para monitoramento:

```typescript
// Obter métricas de uso
const metrics = await ExzosSpace.getMetrics({
  period: 'last-30-days',
  type: 'all'
});

// Visualizar logs
const logs = await ExzosSpace.getLogs({
  level: 'error',
  limit: 100,
  module: 'memory'
});
```

## Segurança e Permissões

O ExzosSpace implementa um sistema de permissões granular:

```typescript
// Definir permissões para um documento
await ExzosSpace.setPermissions(docId, {
  roles: {
    admin: ['read', 'write', 'delete'],
    developer: ['read', 'write'],
    viewer: ['read']
  },
  users: {
    'user-123': ['read', 'write']
  }
});

// Verificar permissões
const hasPermission = await ExzosSpace.checkPermission(docId, 'user-123', 'write');
```

## Migração de Dados

Para migrar dados de outros sistemas:

```typescript
// Importar documentação de outro sistema
await ExzosSpace.import({
  source: 'github',
  sourceConfig: {
    repo: 'exzosdigital/old-docs',
    branch: 'main',
    path: '/docs'
  },
  mapping: {
    // Mapeamento de campos
  },
  options: {
    generateEmbeddings: true,
    preserveHistory: true
  }
});
```

## Troubleshooting

### Problemas Comuns

1. **Erro de Conexão com Banco de Dados**
   - Verifique se o PostgreSQL está rodando
   - Confirme que a extensão pg_vector está instalada
   - Verifique a string de conexão

2. **Erros de Permissão**
   - Verifique as credenciais de API
   - Confirme as permissões do usuário no ExzosVerse

3. **Problemas de Performance**
   - Considere adicionar Redis para cache
   - Otimize consultas de embedding

### Suporte

Para suporte adicional:
- Documentação completa: https://docs.exzosverse.com/space
- Comunidade Discord: https://discord.gg/exzosverse
- Email de suporte: support@exzosverse.com

## Próximos Passos

1. Explore os exemplos em `/examples` no repositório
2. Configure integrações com outros módulos do ExzosVerse
3. Participe da comunidade para compartilhar extensões e plugins

---

## Referências

- [Documentação Completa](https://docs.exzosverse.com/space)
- [API Reference](https://docs.exzosverse.com/space/api)
- [Exemplos](https://github.com/exzosdigital/exzosspace/tree/main/examples)
- [Changelog](https://github.com/exzosdigital/exzosspace/blob/main/CHANGELOG.md)