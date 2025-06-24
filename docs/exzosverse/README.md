# 🌐 ExzosVerse

Documentação para o desenvolvimento do ecossistema ExzosVerse, a plataforma integrada de aplicações SaaS da Exzos Digital.

## 📋 Visão Geral

ExzosVerse é o ecossistema completo de aplicações SaaS da Exzos, oferecendo uma experiência unificada e integrada para usuários. Esta plataforma combina diversos produtos sob uma mesma interface e sistema de autenticação, facilitando a utilização e gestão dos serviços.

## 🏗️ Arquitetura do ExzosVerse

### Componentes Principais

1. **ExzosHub** - Portal central de acesso a todas as aplicações
2. **ExzosAuth** - Sistema unificado de autenticação e autorização
3. **ExzosOnlook** - Design system e componentes de UI
4. **ExzosConnect** - API Gateway e sistema de integração
5. **Aplicações de Negócio** - Midday, ExzosPayments, ExzosAnalytics, etc.

### Diagrama de Integração

```
┌───────────────────────────────────────────────────────────────┐
│                         ExzosHub                               │
│                  (Portal Centralizado)                         │
└───────────┬───────────────┬────────────────┬─────────────────┘
            │               │                │
┌───────────▼───┐   ┌───────▼────────┐   ┌──▼─────────────┐
│   Midday      │   │  ExzosPayments │   │  ExzosAnalytics│
│ (Gestão de    │   │ (Processamento │   │  (Análise de   │
│  Negócios)    │   │  de Pagamentos)│   │     Dados)     │
└───────┬───────┘   └───────┬────────┘   └──────┬─────────┘
        │                   │                    │
┌───────▼───────────────────▼────────────────────▼─────────────┐
│                         ExzosAuth                             │
│              (Autenticação e Autorização)                     │
└───────────────────────────┬───────────────────────────────────┘
                            │
┌───────────────────────────▼───────────────────────────────────┐
│                        ExzosOnlook                             │
│                 (Design System e UI Components)                │
└───────────────────────────┬───────────────────────────────────┘
                            │
┌───────────────────────────▼───────────────────────────────────┐
│                       ExzosConnect                             │
│                  (API Gateway e Integrações)                   │
└───────────────────────────────────────────────────────────────┘
```

## 🚀 Implementação e Integração

### 1. ExzosOnlook

O repositório [exzosonlook](https://github.com/exzosdigital/exzosonlook) foi integrado ao ExzosSpace e serve como a base visual para todas as aplicações do ExzosVerse. Para implementar corretamente:

1. **Instale as dependências**:
   ```bash
   npm install @exzos/onlook
   ```

2. **Configure o tema**:
   ```jsx
   // Em _app.jsx ou layout.jsx
   import { ExzosProvider, defaultTheme } from '@exzos/onlook';
   
   function App({ Component, pageProps }) {
     return (
       <ExzosProvider theme={defaultTheme}>
         <Component {...pageProps} />
       </ExzosProvider>
     );
   }
   ```

3. **Use os componentes**:
   ```jsx
   import { Button, Card, Input } from '@exzos/onlook';
   
   function MyComponent() {
     return (
       <Card>
         <Card.Header>Formulário ExzosVerse</Card.Header>
         <Card.Body>
           <Input label="Nome" placeholder="Digite seu nome" />
         </Card.Body>
         <Card.Footer>
           <Button variant="primary">Enviar</Button>
         </Card.Footer>
       </Card>
     );
   }
   ```

### 2. Identidade Visual

Para manter a consistência da marca Exzos em todas as aplicações:

1. **Cores**: Use apenas as cores definidas no design system
   ```jsx
   import { colors } from '@exzos/onlook';
   // Primary: colors.primary[500]
   // Secondary: colors.secondary[500]
   ```

2. **Tipografia**: Use os componentes de tipografia para garantir consistência
   ```jsx
   import { Typography } from '@exzos/onlook';
   
   <Typography variant="h1">Título Principal</Typography>
   <Typography variant="body1">Texto de parágrafo</Typography>
   ```

3. **Logos**: Todas as logos estão disponíveis no pacote
   ```jsx
   import { ExzosLogo, MiddayLogo } from '@exzos/onlook/logos';
   
   <ExzosLogo size="md" variant="full" />
   ```

### 3. Navegação entre Aplicações

O ExzosVerse permite navegação fluida entre aplicações:

1. **AppSwitcher**: Componente para alternar entre aplicações
   ```jsx
   import { AppSwitcher } from '@exzos/onlook';
   
   <AppSwitcher 
     apps={[
       { id: 'midday', name: 'Midday', icon: <MiddayIcon /> },
       { id: 'payments', name: 'Payments', icon: <PaymentsIcon /> }
     ]} 
   />
   ```

2. **Navbar Unificada**: Implementação da barra de navegação global
   ```jsx
   import { ExzosNavbar } from '@exzos/onlook';
   
   <ExzosNavbar 
     currentApp="midday"
     user={currentUser}
     onLogout={handleLogout}
   />
   ```

## 📝 Guia de Desenvolvimento

### Estrutura de Aplicações

Cada aplicação no ExzosVerse deve seguir esta estrutura base:

```
app/
├── src/
│   ├── app/                  # Rotas (Next.js App Router)
│   │   ├── layout.tsx        # Layout global com ExzosOnlook
│   │   ├── (auth)/           # Rotas autenticadas
│   │   │   ├── dashboard/    # Dashboard da aplicação
│   │   │   └── settings/     # Configurações
│   │   └── (public)/         # Rotas públicas
│   │       ├── login/        # Login (redirecionado para ExzosAuth)
│   │       └── register/     # Registro (redirecionado para ExzosAuth)
│   ├── components/           # Componentes específicos da aplicação
│   │   ├── ui/               # Extensões de UI específicas
│   │   └── features/         # Componentes de features
│   ├── lib/                  # Bibliotecas e integrações
│   │   ├── exzos-auth.ts     # Cliente de autenticação
│   │   └── exzos-connect.ts  # Cliente de API
│   └── types/                # Definições de tipos TypeScript
└── public/                   # Ativos estáticos
```

### Autenticação

Todas as aplicações devem utilizar o ExzosAuth para autenticação:

```jsx
// Em lib/exzos-auth.ts
import { createAuthClient } from '@exzos/auth';

export const authClient = createAuthClient({
  appId: 'midday',
  authEndpoint: 'https://auth.exzos.com.br'
});

// Em um componente
import { useAuth } from '@exzos/auth';

function ProtectedComponent() {
  const { user, isLoading, logout } = useAuth();
  
  if (isLoading) return <Spinner />;
  if (!user) return <Redirect to="/login" />;
  
  return (
    <div>
      <p>Olá, {user.name}</p>
      <Button onClick={logout}>Sair</Button>
    </div>
  );
}
```

### API e Integração de Dados

Utilize o ExzosConnect para comunicação entre serviços:

```jsx
// Em lib/exzos-connect.ts
import { createApiClient } from '@exzos/connect';

export const api = createApiClient({
  baseUrl: 'https://api.exzos.com.br',
  appId: 'midday'
});

// Em um componente
import { api } from '@/lib/exzos-connect';
import { useQuery } from '@tanstack/react-query';

function DataComponent() {
  const { data, isLoading } = useQuery({
    queryKey: ['customers'],
    queryFn: () => api.get('/customers')
  });
  
  if (isLoading) return <Spinner />;
  
  return (
    <Table data={data} columns={columns} />
  );
}
```

## 🔄 Workflow de Desenvolvimento

1. **Início**: Crie issues no repositório ExzosSpace
2. **Desenvolvimento**: Trabalhe em uma branch específica
3. **UI**: Utilize os componentes do ExzosOnlook
4. **Integração**: Conecte com ExzosAuth e ExzosConnect
5. **Testes**: Garanta testes adequados para UI e integrações
6. **Review**: Envie PR para revisão
7. **Deploy**: Após aprovação, deploy via CI/CD

## 📚 Documentação Adicional

- [Guia Completo de Branding](./branding-guide.md)
- [Fluxos de Autenticação](./auth-flows.md)
- [Integração entre Aplicações](./app-integration.md)
- [Arquitetura de Microsserviços](./microservices.md)

## 🧪 Ambiente de Desenvolvimento

Para executar o ambiente de desenvolvimento completo:

```bash
# No diretório raiz do ExzosSpace
npm run dev:exzosverse
```

Este comando inicia:
1. ExzosHub em http://localhost:3000
2. ExzosAuth em http://localhost:3001
3. Midday em http://localhost:3002
4. Outros serviços conforme necessário

## 📅 Roadmap do ExzosVerse

### Fase 1: Fundação (Q2 2025)
- ✅ Implementação do ExzosOnlook
- ✅ Estrutura base do ExzosSpace
- ⬜ Desenvolvimento do ExzosAuth
- ⬜ Configuração inicial do ExzosHub

### Fase 2: Integração (Q3 2025)
- ⬜ Implementação do ExzosConnect
- ⬜ Integração do Midday ao ExzosVerse
- ⬜ Desenvolvimento do sistema de permissões
- ⬜ Hub centralizado de notificações

### Fase 3: Expansão (Q4 2025)
- ⬜ Lançamento do ExzosPayments
- ⬜ Integração do ExzosAnalytics
- ⬜ Sistema de marketplace de plugins
- ⬜ APIs públicas para desenvolvedores