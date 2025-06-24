# 🏗️ Infraestrutura

Este diretório contém todas as configurações de infraestrutura para as aplicações SaaS da Exzos, incluindo CI/CD, containers, ambientes de deploy e configurações de serviços em nuvem.

## 📋 Componentes de Infraestrutura

### GitHub Actions
Workflows de CI/CD para automação de testes, build e deploy.
- **Diretório**: [/github-actions](./github-actions)
- **Principais Workflows**:
  - `ci.yml` - Testes contínuos para PRs
  - `deploy-preview.yml` - Deploy de ambientes de preview
  - `deploy-production.yml` - Deploy de produção
  - `database-migration.yml` - Migrações de banco de dados

### Docker
Configurações Docker para desenvolvimento local e ambientes de produção.
- **Diretório**: [/docker](./docker)
- **Principais Configurações**:
  - `docker-compose.dev.yml` - Ambiente de desenvolvimento
  - `docker-compose.prod.yml` - Ambiente de produção
  - `Dockerfile.app` - Container para aplicações
  - `Dockerfile.api` - Container para APIs

### Vercel
Configurações para deploy na plataforma Vercel.
- **Diretório**: [/vercel](./vercel)
- **Principais Arquivos**:
  - `vercel.json` - Configuração base para projetos Vercel
  - `vercel-env-sync.js` - Script para sincronizar variáveis de ambiente
  - `vercel-deploy.js` - Script para automação de deploy

### Terraform
Infraestrutura como código para provisionamento em nuvem.
- **Diretório**: [/terraform](./terraform)
- **Principais Módulos**:
  - `aws/` - Recursos AWS (S3, CloudFront, etc.)
  - `gcp/` - Recursos Google Cloud
  - `azure/` - Recursos Azure
  - `supabase/` - Configuração de recursos Supabase

### Kubernetes
Configurações para orquestração de containers em Kubernetes.
- **Diretório**: [/kubernetes](./kubernetes)
- **Principais Configurações**:
  - `deployments/` - Definições de deployments
  - `services/` - Definições de serviços
  - `ingress/` - Regras de ingress
  - `monitoring/` - Configurações de monitoramento

## 🚀 Como Usar

### GitHub Actions

Os workflows são automaticamente executados com base em eventos do GitHub. Para usar localmente:

```bash
# Testar workflow localmente com act
act -j build
```

### Docker

Para ambientes de desenvolvimento local:

```bash
# Iniciar todos os serviços
docker-compose -f infrastructure/docker/docker-compose.dev.yml up

# Iniciar serviço específico
docker-compose -f infrastructure/docker/docker-compose.dev.yml up database
```

### Terraform

Para provisionar infraestrutura:

```bash
# Inicializar
cd infrastructure/terraform/aws
terraform init

# Planejar mudanças
terraform plan

# Aplicar mudanças
terraform apply
```

## 🔐 Segredos e Variáveis de Ambiente

Os segredos são gerenciados de forma segura:

- Segredos de produção: GitHub Secrets
- Variáveis de ambiente de desenvolvimento: `.env.local`
- Configurações de infraestrutura: Encrypted com SOPS

## 📋 Estrutura de Ambientes

Mantemos múltiplos ambientes para cada aplicação:

- **Desenvolvimento**: Ambiente local para desenvolvimento
- **Preview**: Deploy automático para cada PR (isolado)
- **Staging**: Ambiente de teste integrado
- **Produção**: Ambiente de produção para usuários finais

## 🔄 CI/CD Pipeline

Nosso pipeline de CI/CD segue este fluxo:

1. **Testes** - Execução de testes automatizados
2. **Build** - Construção das aplicações
3. **Deploy Preview** - Para PRs, deploy em ambiente isolado
4. **Deploy Staging** - Para merge em `staging`
5. **Deploy Produção** - Para merge em `main` (após aprovação)

## 📊 Monitoramento

Utilizamos as seguintes ferramentas para monitoramento:

- **Sentry**: Rastreamento de erros
- **Datadog**: Métricas de infraestrutura
- **Grafana**: Dashboards de visualização
- **Prometheus**: Coleta de métricas

## 🔒 Segurança

Nossa infraestrutura segue as melhores práticas de segurança:

- **Scanning de Vulnerabilidades**: Dependabot, Snyk
- **Análise Estática**: SonarQube, ESLint
- **Secrets Management**: AWS KMS, GitHub Secrets
- **Network Security**: VPCs, Security Groups, WAF