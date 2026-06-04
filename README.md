# Lacrei Saúde - Desafio Técnico de QA

Este repositório organiza os entregáveis do desafio técnico de Quality Assurance da Lacrei Saúde: casos de teste em Gherkin, execução manual, evidências, testes automatizados com Cypress + Cucumber, documentação para Notion/GitHub, acessibilidade, responsividade, desempenho, registro de bugs e pipeline CI/CD.

> Ambiente de staging utilizado: `https://paciente-staging.lacreisaude.com.br`.

## Escopo

- Cadastro da pessoa usuária: cadastro, pós-cadastro e busca de profissional.
- Busca de profissional de saúde: buscar profissional e contatar/agendar profissional.
- Recuperação de senha: fluxo completo de "esqueci minha senha", incluindo solicitação do link, redefinição de senha e login com a nova senha.
- Testes funcionais em versão mobile.
- Testes de acessibilidade com Lighthouse, navegação por teclado e leitor de tela NVDA.
- Testes de desempenho e responsividade mobile/desktop.
- Registro de bugs e melhorias em formato compatível com GitHub Issues e Notion.
- Automação com Cypress + Cucumber e pipeline GitHub Actions.

## Pré-requisitos

- Node.js 20 ou superior.
- npm 10 ou superior.
- Git.
- Navegador Chrome/Chromium para execução E2E e Lighthouse.
- Acesso ao ambiente de staging da Lacrei Saúde.

## Configuração local

1. Instale as dependências:

```bash
npm install
```

2. Copie o arquivo de exemplo e preencha as variáveis com dados descartáveis de teste:

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
- Recuperação de senha: `/saude/paciente/redefinir-senha/`

## Como executar testes manuais

1. Abra o ambiente em viewport mobile de até `600px`.
2. Use os cenários descritos em [docs/testes-funcionais/execucao-manual-mobile.md](docs/testes-funcionais/execucao-manual-mobile.md).
3. Registre status, evidências, dados usados e bugs no arquivo [docs/bugs/bugs-e-melhorias.md](docs/bugs/bugs-e-melhorias.md).
4. Consolide o resumo final em [NOTION.md](NOTION.md).

## Como executar testes automatizados

Abrir o Cypress em modo interativo:

```bash
npm run cypress:open
```

Executar todos os cenários E2E em modo headless:

```bash
npm run test:e2e
```

Executar com viewport mobile:

```bash
npm run test:e2e:mobile
```

Executar a suíte mobile estável usada no CI:

```bash
npm run test:e2e:mobile:ci
```

Executar performance smoke com 30 usuários simultâneos:

```bash
npm run test:perf
```

Executar Lighthouse CI:

```bash
npm run lighthouse
```

Executar a suíte principal:

```bash
npm run test:all
```

## Relatórios

Os relatórios são salvos em:

- `reports/junit`: resultados JUnit do Cypress.
- `reports/cucumber`: JSON Cucumber.
- `reports/screenshots`: screenshots de falhas.
- `reports/videos`: vídeos do Cypress.
- `reports/performance`: relatório do smoke de desempenho.
- `reports/lighthouse`: relatórios do Lighthouse CI.

No GitHub Actions, os relatórios são publicados como artefatos. O CI executa a suíte mobile de validação de cadastro marcada com `@validacao`; performance e Lighthouse também rodam como etapas diagnósticas, pois podem apontar status de atenção sem necessariamente bloquear a entrega.

## Organização

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

## Evidências e documentação

| Item | Local |
| --- | --- |
| Casos de teste em Gherkin | `cypress/e2e/*.feature` |
| Execução manual mobile | `docs/testes-funcionais/execucao-manual-mobile.md` |
| Bugs e melhorias | `docs/bugs/bugs-e-melhorias.md` |
| Evidências visuais | `evidencias/` |
| Acessibilidade | `docs/acessibilidade/acessibilidade.md` |
| Desempenho | `docs/desempenho/performance.md` |
| Responsividade | `docs/responsividade/responsividade.md` |
| Resumo para Notion | `NOTION.md` |
| Pipeline CI/CD | `.github/workflows/qa.yml` |

## Checklist de segurança aplicado

- Não usar dados reais de pessoas usuárias.
- Não commitar `.env`, tokens, credenciais ou dados sensíveis.
- Executar testes destrutivos apenas em staging.
- Usar massa de teste identificável, descartável e sem dados reais.
- Remover evidências sensíveis antes de publicar no Notion ou GitHub.
- Evitar automação que envie mensagens reais para profissionais sem autorização.

## Status da execução

A execução manual foi realizada em ambiente de staging nos principais fluxos mobile, incluindo cadastro, login, pós-cadastro, busca/agendamento de profissional e recuperação completa de senha. Também foram documentados testes de desempenho, acessibilidade com Lighthouse, navegação por teclado e NVDA, responsividade mobile/desktop, bugs e melhorias.

O GitHub Actions foi configurado e executado com sucesso após a publicação do repositório.

O resultado geral é aprovado com ressalvas, devido aos pontos de atenção identificados em performance e posicionamento do widget VLibras em mobile.