# ExzosSpace

ExzosSpace é o componente central de documentação, memória e base de conhecimento do ecossistema ExzosVerse. Ele funciona como o "cérebro" do sistema, conectando todos os módulos e fornecendo contexto, memória e validação.

## Visão Geral

O ExzosSpace integra cinco pilares fundamentais:

1. **Base de Conhecimento Estruturada** - Ontologia MECE com vetorização semântica
2. **Sistema de Memória Dinâmica** - Blocos de memória para agentes com capacidade de reflexão
3. **Biblioteca de Contexto** - Framework RAG com reranking contextual
4. **Motor de Documentação** - Formato ReadMe.LLM otimizado para LLMs
5. **Camada de Integração** - Conectores universais e APIs bidirecionais

## Estrutura do Repositório

```
exzosspace/
├── docs/
│   ├── architecture/       # Documentos de arquitetura e visão geral
│   ├── implementation/     # Guias técnicos de implementação
│   ├── modules/            # Documentação de módulos específicos
│   │   ├── horizon/        # ExzosHorizon (copilot e automação)
│   │   ├── nebula/         # ExzosNebula (infraestrutura)
│   │   ├── ui-ux/          # Design system e UI
│   │   └── exzosgen/       # Automação e agentes
│   └── agents/             # Documentação de agentes
├── examples/               # Exemplos de código e integrações
└── schemas/                # Esquemas e modelos de dados
```

## Componentes Relacionados

ExzosSpace integra-se com todos os outros componentes do ecossistema ExzosVerse:

- **ExzosHorizon** - Copilot de desenvolvimento frontend/backend
- **ExzosNebula** - Backend seguro multi-tenant baseado em Supabase
- **ExzosNexus** - Camada universal de integração MCP
- **ExzosVision** - UI Kit premium e componentes visuais
- **ExzosCloud** - Plataforma de infraestrutura e deploy

## Integração e Uso

Para utilizar o ExzosSpace em seus projetos:

```typescript
import { ExzosSpace } from '@exzos/space';

// Criar contexto para desenvolvimento
const context = await ExzosSpace.createContext({
  technologies: ['react', 'next.js', 'tailwind'],
  patterns: ['atomic-design', 'custom-hooks'],
  projectId: 'customer-portal'
});

// Recuperar documentação relevante
const docs = await ExzosSpace.search('autenticação OAuth com Supabase');

// Armazenar informação importante
await ExzosSpace.store({
  type: 'archival',
  content: {
    topic: "Implementação de autenticação",
    solution: "Uso de OAuth com GitHub e Google",
    context: "Projeto ExzosCommerce"
  },
  tags: ['auth', 'oauth', 'security']
});
```

## Documentação

Para mais informações, consulte:

- [Visão Geral da Arquitetura](docs/architecture/exzosverse-ecosystem.md)
- [Guia de Implementação](docs/implementation/exzosspace-guide.md)
- [Integração com Agentes](docs/modules/horizon/boilerplates.md)

## Licença

MIT © ExzosDigital