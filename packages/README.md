# 📦 Pacotes Compartilhados

Este diretório contém todos os pacotes compartilhados entre as aplicações SaaS da Exzos. Usamos uma estrutura de monorepo para facilitar o desenvolvimento, teste e manutenção desses pacotes.

## 📋 Pacotes Disponíveis

### UI
Biblioteca de componentes de interface compartilhados, seguindo o design system da Exzos.
- **Diretório**: [/ui](./ui)
- **Tecnologias**: React, Tailwind CSS, Radix UI, Framer Motion
- **Uso**: `import { Button, Card } from '@exzos/ui'`

### Config
Configurações compartilhadas para ferramentas de desenvolvimento.
- **Diretório**: [/config](./config)
- **Conteúdo**: ESLint, TypeScript, Prettier, Tailwind, etc.
- **Uso**: Extensão de configurações base nos projetos

### API
Clientes e utilitários para interação com APIs.
- **Diretório**: [/api](./api)
- **Tecnologias**: Axios, tRPC, SWR
- **Uso**: `import { createApiClient } from '@exzos/api'`

### Utils
Funções utilitárias e helpers compartilhados.
- **Diretório**: [/utils](./utils)
- **Tecnologias**: TypeScript
- **Uso**: `import { formatDate, slugify } from '@exzos/utils'`

### Supabase
Integrações e utilitários para Supabase.
- **Diretório**: [/supabase](./supabase)
- **Tecnologias**: Supabase JS, PostgreSQL
- **Uso**: `import { createSupabaseClient } from '@exzos/supabase'`

### Auth
Utilitários e componentes para autenticação.
- **Diretório**: [/auth](./auth)
- **Tecnologias**: NextAuth.js, Supabase Auth
- **Uso**: `import { useAuth, SignInForm } from '@exzos/auth'`

## 🚀 Como Usar

Cada pacote pode ser instalado como uma dependência interna em qualquer aplicação dentro do monorepo:

```json
// package.json de uma aplicação
{
  "dependencies": {
    "@exzos/ui": "workspace:*",
    "@exzos/utils": "workspace:*"
  }
}
```

## 📦 Estrutura de um Pacote

Cada pacote segue esta estrutura básica:

```
pacote/
├── src/           # Código-fonte
├── dist/          # Build compilado (gerado automaticamente)
├── tests/         # Testes
├── package.json   # Dependências e configuração
├── tsconfig.json  # Configuração TypeScript
└── README.md      # Documentação específica do pacote
```

## 🔨 Desenvolvimento

Para desenvolver um pacote:

```bash
# Entrar no diretório do pacote
cd packages/[nome-do-pacote]

# Instalar dependências
npm install

# Executar testes
npm test

# Build do pacote
npm run build

# Desenvolvimento com watch mode
npm run dev
```

## 🧪 Testes

Todos os pacotes devem ter testes adequados:

```bash
# Executar testes para todos os pacotes
cd packages && npm run test

# Executar testes para um pacote específico
cd packages/[nome-do-pacote] && npm test
```

## 📋 Criação de Novos Pacotes

Para criar um novo pacote:

1. Use o template em `packages/_template`
2. Copie o template para um novo diretório: `cp -r _template my-package`
3. Atualize o `package.json` com nome, versão e descrição
4. Adicione a documentação específica no `README.md`
5. Desenvolva suas funcionalidades na pasta `src/`

## 📚 Documentação

Cada pacote deve conter:

- Um `README.md` com documentação de uso
- Exemplos de código
- Tipos TypeScript bem definidos
- Comentários JSDoc para todas as funções públicas

## 🔄 Versionamento

Usamos versionamento semântico (SemVer) para todos os pacotes:

- **Major (1.0.0)**: Mudanças incompatíveis com versões anteriores
- **Minor (0.1.0)**: Novas funcionalidades de forma compatível
- **Patch (0.0.1)**: Correções de bugs de forma compatível