# Guia de UI/UX & Design System — ExzosVerse (base: @midday-ai/midday)

## Objetivo

Definir regras, padrões e instruções para manter a consistência visual, experiência do usuário e o uso correto do design system ao migrar e evoluir a interface do ExzosVerse (ExzosMidday) — incluindo guidelines para agentes de desenvolvimento no ExzosHorizon.

---

## 1. Princípios Gerais do Design System

- **Consistência Visual:**  
  Todos os componentes da interface devem seguir o mesmo padrão de espaçamento, cores, bordas e tipografia definidos no design system.
- **Atomic Design:**  
  Priorize componentes atômicos e reutilizáveis (Button, Card, Modal, Input) compondo elementos maiores (Form, Table, Navbar).
- **Responsividade:**  
  O layout deve ser fluido, funcionar em desktop, tablet e mobile, e os componentes devem se adaptar sem perder legibilidade ou funcionalidade.
- **Acessibilidade (a11y):**  
  Siga as diretrizes WCAG: contraste adequado, navegação por teclado, labels claros, ARIA roles, foco visual evidente.
- **Clareza e Simplicidade:**  
  Prefira interfaces limpas, sem excesso de informações, com ações e estados claros.

---

## 2. Biblioteca de Componentes — Base Midday

### Componentes Fundamentais a Manter/adaptar:

- **Inputs:**  
  TextField, Select, TextArea, Checkbox, Radio, Switch — sempre com labels, validação e feedback visual.
- **Buttons:**  
  Primário (cor de destaque), secundário (neutro), desabilitado, loading, ícones opcionais.
- **Cards & Containers:**  
  Padding consistente, sombras suaves, cantos levemente arredondados.
- **Modals/Drawers:**  
  Overlay escuro, animações suaves, botão de fechar acessível.
- **Navbar/Sidebar:**  
  Navegação clara, logo sempre visível, item ativo destacado.
- **Tables/Lists:**  
  Colunas com títulos, ordenação visual, hover e seleção, ações contextuais.
- **Avatares e Badges:**  
  Imagens, iniciais, cores de status.
- **Toasts e Feedback:**  
  Feedback rápido para ações (erro, sucesso, aviso, info).

#### Observações do @midday-ai/midday:

- Usa fortemente **TailwindCSS** para utilidades, espaçamento e temas.
- Componentização com **React** e tipagem **TypeScript**.
- Presença de componentes compostos (ex: DocumentUploader, InvoiceCard, Timeline).
- Utilização de **MDX** para documentação e exemplos de uso de componentes.
- Uso de **Shadcn** para alguns elementos visuais.
- Paleta de cores moderna: cinza-escuro, azul, branco, acentos suaves.
- Ícones minimalistas, preferência a SVG inline.

---

## 3. Padrões Visuais e Temas

- **Cores:**
  - Primária: Azul (#0284C7)
  - Secundária: Cinza-escuro (#0F172A)
  - Fundo: Branco (#FFF) ou Cinza-claro (#F1F5F9)
  - Erro: Vermelho (#EF4444)
  - Sucesso: Verde (#22C55E)
  - Aviso: Amarelo (#FACC15)
  - Info: Azul-claro (#38BDF8)
- **Tipografia:**
  - Fonte base: Inter, sans-serif
  - Tamanho padrão: 16px
  - Títulos: Bold, espaçamento menor, sem serifa
- **Espaçamento:**
  - Usar escala 4px (ex: 8, 16, 24, 32, 48)
  - Padding mínimo em cards e modals: 16px
- **Raios de borda:**
  - Padrão: 8px
  - Botões e inputs: 6px

---

## 4. Regras para Novos Componentes

- Todo novo componente deve ser proposto e revisado por UI/UX antes de entrar na lib.
- Devem ser documentados em MDX, com exemplos e propriedades.
- Nomeação clara, descritiva e em inglês.
- Não duplicar componentes já existentes — extenda-os se necessário.
- Estados visuais: default, hover, focus, active, disabled, loading.
- Teste de acessibilidade obrigatório.
- Prop `className` sempre disponível para customização via Tailwind.

---

## 5. Para Agentes de Desenvolvimento (ExzosHorizon)

- Sempre utilize a biblioteca de componentes ExzosHorizon, nunca crie componentes ad-hoc sem aprovação.
- Se precisar de algo custom, proponha um novo componente seguindo o padrão atual.
- Use utilitários de tema/contexto para trocar entre light/dark mode.
- Siga os exemplos de documentação em MDX para exposição dos componentes.
- Para integração com APIs/AI, use componentes de feedback visual.
- Para flows de onboarding, utilize modais guiados, breadcrumbs e tooltips.
- Ao adicionar novas features, pense em extensibilidade futura (props, slots, overrides).
- Para páginas de configuração (ex: /ai-providers), use cards, toggles e modals do design system.
- Prefira animações suaves, sem excessos; use Tailwind transitions/utilities.
- Garanta navegação clara e ações principais destacadas.
- Documente toda integração visual em `/docs` e mantenha exemplos vivos.

---

## 6. Integrações a Aprimorar

Após análise dos repositórios:

- **Integração AI/Assistente**:  
  Unificar UI de chat, prompts e análise em componente único, com histórico, sugestões e markdown render.
- **Upload de Documentos**:  
  Melhorar feedback visual, drag-and-drop com preview, suporte a múltiplos formatos.
- **Painel de Provedores AI**:  
  Cards com status, configs rápidas, tooltips detalhados.
- **Onboarding/Setup**:  
  Wizard guiado, com etapas claras e progress bar.
- **Notificações**:  
  Central de notificações embutida na navbar, com badge de não lidas.
- **Dashboard Widgets**:  
  Tornar widgets plugáveis — arrastar, remover, redimensionar.
- **Tabela Dinâmica**:  
  Adicionar filtros, busca, exportação com design consistente.
- **Aprimorar integração com Supabase**:  
  Formulários reativos, feedback de loading e erro em tempo real.
- **Aprimorar responsividade**:  
  Testar layouts em todos os breakpoints; evitar scroll lateral.

---

## 7. Checklist Visual para PRs/Review

- [ ] Todos os componentes usados estão no design system?
- [ ] Seguiu paleta, tipografia, espaçamento e bordas padrão?
- [ ] Tem documentação em MDX com exemplo de uso?
- [ ] É acessível por teclado e screen readers?
- [ ] Tem estados visuais completos?
- [ ] Funções e props são extensíveis?
- [ ] Responsivo e testado em breakpoints principais?
- [ ] Fluxos de onboarding/configuração usam componentes guiados?
- [ ] Integrações com AI e Supabase têm feedback visual claro?
- [ ] Não há duplicação de componentes ou estilos?

---

## 8. Evolução do Design System

- Documentar todas as decisões de UI/UX.
- Periodicamente revisar e refatorar componentes antigos.
- Incentivar uso de tokens de design e temas customizáveis.
- Manter exemplos e storybook sempre atualizados.
- Fomentar cultura de design-first entre devs e agentes AI.

---

## Notas Finais

Este guia deve ser seguido por todos os desenvolvedores e agentes automáticos no ExzosVerse/ExzosHorizon para garantir consistência, qualidade e evolução contínua da experiência visual da plataforma.  
Quaisquer dúvidas sobre UI ou novos componentes devem ser discutidas nos canais de design antes da implementação.
