# Lacrei SaÃºde - Desafio TÃ©cnico de QA

Este repositÃ³rio organiza os entregÃ¡veis do desafio tÃ©cnico de Quality Assurance da Lacrei SaÃºde: casos de teste em Gherkin, execuÃ§Ã£o manual, evidÃªncias, testes automatizados com Cypress + Cucumber, documentaÃ§Ã£o para Notion/GitHub, acessibilidade, responsividade, desempenho, registro de bugs e pipeline CI/CD.

> Ambiente de staging utilizado: `https://paciente-staging.lacreisaude.com.br`.

## Escopo

- Cadastro da pessoa usuÃ¡ria: cadastro, pÃ³s-cadastro e busca de profissional.
- Busca de profissional de saÃºde: buscar profissional e contatar/agendar profissional.
- RecuperaÃ§Ã£o de senha: solicitaÃ§Ã£o do link no fluxo de "esqueci minha senha", com limitaÃ§Ã£o documentada para a etapa final de criaÃ§Ã£o de nova senha.
- Testes funcionais em versÃ£o mobile.
- Testes de acessibilidade, desempenho e responsividade mobile/desktop.
- Registro de bugs e melhorias em formato compatÃ­vel com GitHub Issues e Notion.
- AutomaÃ§Ã£o com Cypress + Cucumber e pipeline GitHub Actions.

## PrÃ©-requisitos

- Node.js 20 ou superior.
- npm 10 ou superior.
- Git.
- Navegador Chrome/Chromium para execuÃ§Ã£o E2E e Lighthouse.
- Acesso ao ambiente de staging da Lacrei SaÃºde.

## ConfiguraÃ§Ã£o local

1. Instale as dependÃªncias:

```bash
npm install
```

2. Copie o arquivo de exemplo e preencha as variÃ¡veis com dados descartÃ¡veis de teste:

```bash
cp .env.example .env
```

No PowerShell:

```powershell
Copy-Item .env.example .env
```

3. Configure pelo menos:

```bash
CYPRESS_BASE_URL=https://paciente-staging.lacreisaude.com.br
TEST_USER_EMAIL=<email_de_teste>
TEST_USER_PASSWORD=<senha_de_teste>
```

Rotas identificadas no staging:

- Cadastro: `/saude/paciente/cadastrar/`
- Busca de profissionais: `/saude/paciente/profissionais/buscar`
- RecuperaÃ§Ã£o de senha: `/saude/paciente/redefinir-senha/`

## Como executar testes manuais

1. Abra o ambiente em viewport mobile de atÃ© `600px`.
2. Use os cenÃ¡rios descritos em [docs/testes-funcionais/execucao-manual-mobile.md](docs/testes-funcionais/execucao-manual-mobile.md).
3. Registre status, evidÃªncias, dados usados e bugs no arquivo [docs/bugs/bugs-e-melhorias.md](docs/bugs/bugs-e-melhorias.md).
4. Consolide o resumo final em [NOTION.md](NOTION.md).

## Como executar testes automatizados

Abrir o Cypress em modo interativo:

```bash
npm run cypress:open
```

Executar todos os cenÃ¡rios E2E em modo headless:

```bash
npm run test:e2e
```

Executar com viewport mobile:

```bash
npm run test:e2e:mobile
```

Executar a suÃ­te mobile estÃ¡vel usada no CI:

```bash
npm run test:e2e:mobile:ci
```

Executar performance smoke com 30 usuÃ¡rios simultÃ¢neos:

```bash
npm run test:perf
```

Executar Lighthouse CI:

```bash
npm run lighthouse
```

Executar a suÃ­te principal:

```bash
npm run test:all
```

## RelatÃ³rios

Os relatÃ³rios sÃ£o salvos em:

- `reports/junit`: resultados JUnit do Cypress.
- `reports/cucumber`: JSON Cucumber.
- `reports/screenshots`: screenshots de falhas.
- `reports/videos`: vÃ­deos do Cypress.
- `reports/performance`: relatÃ³rio do smoke de desempenho.
- `reports/lighthouse`: relatÃ³rios do Lighthouse CI.

No GitHub Actions, os relatÃ³rios sÃ£o publicados como artifacts. O CI executa a suÃ­te mobile de validaÃ§Ã£o de cadastro marcada com `@validacao`; performance e Lighthouse tambÃ©m rodam como etapas diagnÃ³sticas, pois podem apontar status de atenÃ§Ã£o sem necessariamente bloquear a entrega.

## OrganizaÃ§Ã£o

```text
.
|-- .github/
|   |-- ISSUE_TEMPLATE/
|   `-- workflows/
|-- cypress/
|   |-- e2e/
|   |-- fixtures/
|   `-- support/
|-- docs/
|   |-- acessibilidade/
|   |-- bugs/
|   |-- desempenho/
|   |-- responsividade/
|   |-- seguranca/
|   `-- testes-funcionais/
|-- evidencias/
|-- reports/
|-- scripts/
|-- NOTION.md
|-- README.md
|-- cypress.config.js
|-- lighthouserc.cjs
`-- package.json
```

## EvidÃªncias e documentaÃ§Ã£o

| Item | Local |
| --- | --- |
| Casos de teste em Gherkin | `cypress/e2e/*.feature` |
| ExecuÃ§Ã£o manual mobile | `docs/testes-funcionais/execucao-manual-mobile.md` |
| Bugs e melhorias | `docs/bugs/bugs-e-melhorias.md` |
| EvidÃªncias visuais | `evidencias/` |
| Acessibilidade | `docs/acessibilidade/acessibilidade.md` |
| Desempenho | `docs/desempenho/performance.md` |
| Responsividade | `docs/responsividade/responsividade.md` |
| Resumo para Notion | `NOTION.md` |
| Pipeline CI/CD | `.github/workflows/qa.yml` |

## Checklist de seguranÃ§a aplicado

- NÃ£o usar dados reais de pessoas usuÃ¡rias.
- NÃ£o commitar `.env`, tokens, credenciais ou dados sensÃ­veis.
- Executar testes destrutivos apenas em staging.
- Usar massa de teste identificÃ¡vel, descartÃ¡vel e sem dados reais.
- Remover evidÃªncias sensÃ­veis antes de publicar no Notion ou GitHub.
- Evitar automaÃ§Ã£o que envie mensagens reais para profissionais sem autorizaÃ§Ã£o.

## Status da execuÃ§Ã£o

A execuÃ§Ã£o manual foi realizada em ambiente de staging nos principais fluxos mobile. TambÃ©m foram documentados testes de desempenho, acessibilidade, responsividade mobile/desktop, bugs e melhorias.

O GitHub Actions foi configurado e executado com sucesso apÃ³s a publicaÃ§Ã£o do repositÃ³rio.
