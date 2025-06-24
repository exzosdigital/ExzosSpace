# 🎨 ExzosOnlook

Plataforma de design system e componentes visuais para o ExzosVerse, fornecendo todos os elementos de UI necessários para manter a consistência visual em todas as aplicações do ecossistema Exzos.

## 📋 Visão Geral

ExzosOnlook é a plataforma central para todos os recursos de design, componentes e diretrizes visuais do ecossistema Exzos. Este pacote serve como:

- **Design System Completo** - Componentes, tokens, ícones e tipografia
- **Biblioteca de Implementação** - Componentes React prontos para uso
- **Documentação Visual** - Guias de estilo e diretrizes de branding
- **Assets e Recursos** - Logos, imagens e recursos visuais

## 🏗️ Integração com ExzosVerse

Este repositório fornece todos os componentes e recursos visuais para as plataformas do ExzosVerse, garantindo:

- **Consistência Visual** - Interface unificada em todas as aplicações
- **Eficiência de Desenvolvimento** - Componentes reutilizáveis e pré-estilizados
- **Branding Consistente** - Aplicação uniforme da identidade visual da Exzos
- **Experiência do Usuário** - Interações e comportamentos padronizados

## 🔧 Tecnologias

- **Framework**: React, Next.js
- **Estilos**: Tailwind CSS, CSS Modules, Styled Components
- **Documentação**: Storybook
- **Testes**: Jest, React Testing Library
- **Build**: Rollup, TypeScript
- **Design**: Figma

## 🚀 Como Usar

### Instalação

```bash
# Dentro de qualquer aplicação do ExzosSpace
npm install @exzos/onlook
```

### Uso Básico

```jsx
import { Button, Card, Avatar } from '@exzos/onlook';

function MyComponent() {
  return (
    <Card>
      <Card.Header>
        <Avatar src="/avatar.png" size="md" />
        <h2>Título do Card</h2>
      </Card.Header>
      <Card.Body>
        Conteúdo do card com componentes do ExzosOnlook
      </Card.Body>
      <Card.Footer>
        <Button variant="primary">Ação Principal</Button>
        <Button variant="secondary">Ação Secundária</Button>
      </Card.Footer>
    </Card>
  );
}
```

## 📁 Estrutura do Pacote

```
exzosonlook/
├── src/
│   ├── components/       # Componentes React
│   │   ├── Button/
│   │   ├── Card/
│   │   ├── Input/
│   │   └── ...
│   ├── hooks/            # Hooks relacionados a UI
│   ├── icons/            # Ícones SVG otimizados
│   ├── layouts/          # Componentes de layout
│   ├── styles/           # Estilos base e utilitários
│   │   ├── tokens/       # Design tokens (cores, espaçamento, etc.)
│   │   ├── themes/       # Temas (claro, escuro, etc.)
│   │   └── global/       # Estilos globais
│   └── utils/            # Utilitários de UI
├── assets/               # Assets estáticos (logos, imagens)
├── stories/              # Histórias do Storybook
├── types/                # Definições de tipos TypeScript
└── themes/               # Configurações de tema
```

## 🎨 Design Tokens

O sistema de design é baseado em tokens, permitindo personalização e consistência:

```jsx
// Exemplo de tokens de cor
export const colors = {
  primary: {
    50: '#F0F9FF',
    100: '#E0F2FE',
    500: '#0EA5E9',
    700: '#0369A1',
    900: '#0C4A6E',
  },
  neutral: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    500: '#64748B',
    700: '#334155',
    900: '#0F172A',
  },
  // ... outros tokens
};
```

## 🧩 Componentes Principais

O ExzosOnlook inclui dezenas de componentes, incluindo:

### Interface Básica
- Button, Link, Icon
- Input, Select, Checkbox, Radio
- Form, FormField, Label

### Layout
- Box, Flex, Grid
- Container, Section
- Divider, Spacer

### Navegação
- Navbar, Sidebar
- Menu, Dropdown
- Tabs, Breadcrumb

### Feedback
- Alert, Toast
- Modal, Drawer
- Progress, Spinner

### Visualização de Dados
- Table, DataGrid
- Card, List
- Badge, Tag

### Mídia
- Avatar, Image
- MediaPlayer, Carousel
- FileUpload

## 📝 Guias de Estilo

### Tipografia

```jsx
<Typography variant="h1">Título Principal</Typography>
<Typography variant="body1">Texto de parágrafo padrão</Typography>
```

### Cores

```jsx
<Box bg="primary.500" color="white">Conteúdo com cor de fundo primária</Box>
```

### Espaçamento

```jsx
<Stack spacing="md">
  <Box>Item 1</Box>
  <Box>Item 2</Box>
</Stack>
```

## 🚀 Desenvolvimento

Para desenvolver e estender o ExzosOnlook:

```bash
# Clonar o repositório
git clone https://github.com/exzosdigital/ExzosSpace.git
cd ExzosSpace/apps/exzosonlook

# Instalar dependências
npm install

# Iniciar Storybook
npm run storybook

# Executar testes
npm test

# Build do pacote
npm run build
```

## 📚 Documentação

A documentação completa está disponível através do Storybook:

```bash
npm run storybook
```

O Storybook inclui:
- Exemplos interativos de cada componente
- Documentação de props e API
- Guias de uso e melhores práticas
- Temas e variações

## 🔄 Integração com Figma

O design system é mantido em sincronia com arquivos Figma:

- [Biblioteca de Design Exzos (Figma)](https://figma.com/exzos-design-system)
- [Utilitário de Exportação Figma → Código](./tools/figma-export)

## 👥 Contribuição

Para contribuir com o ExzosOnlook:

1. Familiarize-se com os [padrões de design](./docs/design-guidelines.md)
2. Verifique as [issues abertas](https://github.com/exzosdigital/ExzosSpace/issues?q=is:issue+is:open+label:exzosonlook)
3. Siga o [guia de contribuição](./CONTRIBUTING.md)

## 📱 Suporte a Plataformas

- **Web**: Suporte completo
- **React Native**: Componentes equivalentes em `@exzos/onlook-native`
- **Responsividade**: Todos os componentes são responsivos por padrão
- **Acessibilidade**: Conformidade com WCAG 2.1 AA

## 🔄 Versionamento

Usamos versionamento semântico (SemVer):
- **Major (1.0.0)**: Mudanças incompatíveis com versões anteriores
- **Minor (0.1.0)**: Novas funcionalidades de forma compatível
- **Patch (0.0.1)**: Correções de bugs de forma compatível