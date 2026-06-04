# Lacrei SaÃºde - Desafio TÃ©cnico de QA

Este repositÃ³rio organiza os entregÃ¡veis do desafio tÃ©cnico de Quality Assurance da Lacrei SaÃºde: casos de teste em Gherkin, execuÃ§Ã£o manual, testes automatizados com Cypress + Cucumber, documentaÃ§Ã£o para Notion/GitHub, checklist de acessibilidade, responsividade, desempenho, seguranÃ§a, gestÃ£o de bugs e pipeline CI/CD.

> Ambiente de staging informado: `https://paciente-staging.lacreisaude.com.br/login/`. Os scripts usam `CYPRESS_BASE_URL` e rotas configurÃ¡veis para cobrir login, cadastro, busca de profissionais e redefiniÃ§Ã£o de senha.

## Escopo

- Cadastro da pessoa usuÃ¡ria: cadastro -> pÃ³s-cadastro -> buscar profissional.
- Busca de profissional de saÃºde: buscar profissional -> contatar profissional.
- Recuperação de senha: solicitação do link no fluxo de "esqueci minha senha", com limitação documentada para a etapa final de criação de nova senha.
- Testes mobile, responsividade desktop, acessibilidade, desempenho e automaÃ§Ã£o.
- Registro de bugs e melhorias em formato compatÃ­vel com GitHub Issues e Notion.

## PrÃ©-requisitos

- Node.js 20 ou superior.
- npm 10 ou superior.
- Git.
- Acesso ao ambiente de testes da Lacrei SaÃºde.
- Navegador Chrome/Chromium para execuÃ§Ã£o E2E e Lighthouse.

## ConfiguraÃ§Ã£o

1. Instale as dependÃªncias:

```bash
npm install
```

2. Copie o arquivo de exemplo e preencha as variÃ¡veis do ambiente:

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
TEST_USER_EMAIL=qa.lacrei+teste@example.com
TEST_USER_PASSWORD=SenhaForte!2026
```

As rotas especÃ­ficas podem ser ajustadas por `CYPRESS_REGISTER_PATH`, `CYPRESS_SEARCH_PATH` e `CYPRESS_FORGOT_PASSWORD_PATH`.

Rotas identificadas no staging:

- Cadastro: `/saude/paciente/cadastrar/`
- Busca de profissionais: `/saude/paciente/profissionais/buscar`
- RecuperaÃ§Ã£o de senha: `/saude/paciente/redefinir-senha/`

## Como Executar Testes Manuais

1. Abra o ambiente em viewport mobile de atÃ© `600px`.
2. Use os cenÃ¡rios descritos em [docs/testes-funcionais/execucao-manual-mobile.md](docs/testes-funcionais/execucao-manual-mobile.md).
3. Registre status, evidÃªncias, dados usados e bugs no arquivo [docs/bugs/bugs-e-melhorias.md](docs/bugs/bugs-e-melhorias.md).
4. Transcreva o resumo final para [NOTION.md](NOTION.md) antes de publicar no Notion.

## Como Executar Testes Automatizados

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

No GitHub Actions, esses arquivos sÃ£o publicados como artifact a cada commit e pull request.

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
|-- reports/
|-- scripts/
|-- NOTION.md
|-- README.md
|-- cypress.config.js
|-- lighthouserc.cjs
`-- package.json
```

## Checklist de SeguranÃ§a Aplicado

- NÃ£o usar dados reais de pessoas usuÃ¡rias.
- NÃ£o commitar `.env`, tokens, credenciais, prints com dados sensÃ­veis ou vÃ­deos com informaÃ§Ãµes pessoais.
- Executar testes destrutivos apenas em staging.
- Usar massa de teste identificÃ¡vel, descartÃ¡vel e com e-mail alias.
- Validar LGPD: minimizaÃ§Ã£o de dados, finalidade clara e descarte apÃ³s execuÃ§Ã£o.
- Remover evidÃªncias sensÃ­veis antes de publicar no Notion ou GitHub.
- Evitar automaÃ§Ã£o que envie mensagens reais para profissionais sem autorizaÃ§Ã£o.
- Manter dependÃªncias revisadas e atualizadas antes da entrega pÃºblica.

## Rollback dos Testes Automatizados

1. Reverter o commit que introduziu o teste ou alteraÃ§Ã£o problemÃ¡tica.
2. Desabilitar temporariamente o workflow em `.github/workflows/qa.yml`, se a falha bloquear PRs.
3. Remover ou isolar massa de teste criada durante a execuÃ§Ã£o.
4. Restaurar variÃ¡veis de ambiente anteriores no GitHub Actions.
5. Reexecutar `npm run test:e2e:mobile` e anexar evidÃªncia do retorno ao estado saudÃ¡vel.

## CritÃ©rios de Aceite Mapeados

| CritÃ©rio | EvidÃªncia no repositÃ³rio |
| --- | --- |
| Casos de Teste em Gherkin | `cypress/e2e/*.feature` |
| DocumentaÃ§Ã£o GitHub | `README.md` e `docs/` |
| DocumentaÃ§Ã£o Notion | `NOTION.md` |
| Acessibilidade | `docs/acessibilidade/acessibilidade.md` e Lighthouse |
| Desempenho | `docs/desempenho/performance.md` e `scripts/performance-smoke.js` |
| Responsividade | `docs/responsividade/responsividade.md` |
| AutomaÃ§Ã£o + CI/CD | `cypress/`, `package.json`, `.github/workflows/qa.yml` |
| Bugs e melhorias | `docs/bugs/` e `.github/ISSUE_TEMPLATE/` |

## Status da Execução

O ambiente de staging foi validado em viewport mobile e desktop. A execução manual foi documentada em `docs/testes-funcionais/execucao-manual-mobile.md`, os bugs e melhorias em `docs/bugs/bugs-e-melhorias.md`, os resultados de desempenho em `docs/desempenho/performance.md`, acessibilidade em `docs/acessibilidade/acessibilidade.md` e responsividade em `docs/responsividade/responsividade.md`.

