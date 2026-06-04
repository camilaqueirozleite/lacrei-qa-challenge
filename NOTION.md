# Desafio Técnico QA - Lacrei Saúde

Este arquivo resume a documentação registrada no Notion para o desafio técnico de QA da Lacrei Saúde.

## Status geral

Aprovado com ressalvas.

Os principais requisitos do desafio foram contemplados: testes funcionais mobile em Gherkin, execução manual com evidências, registro de bugs e melhorias, testes de desempenho, acessibilidade, responsividade e documentação da automação com CI/CD.

## Ambiente

- Plataforma: Lacrei Saúde - Paciente
- Ambiente: Staging
- URL base: https://paciente-staging.lacreisaude.com.br
- Data da execução: 03/06/2026
- Viewports mobile utilizados: 397 x 642 e 397 x 777
- Viewport desktop utilizado: 1366 x 768
- Ferramentas: Chrome DevTools, Lighthouse, Notion, GitHub, Cypress + Cucumber

## Fluxos avaliados

- Cadastro da pessoa usuária: cadastro, pós-cadastro e busca de profissional.
- Busca de profissional de saúde: buscar profissional e contatar/agendar profissional.
- Recuperação de senha: solicitação do link no fluxo de "esqueci minha senha", com limitação documentada para a etapa final de criação de nova senha.
- Acessibilidade: Lighthouse, contraste e validações manuais.
- Desempenho: simulação de 30 usuários simultâneos nas rotas principais.
- Responsividade: validação em viewport mobile e desktop.

## Evidências principais

- Execução manual mobile: `docs/testes-funcionais/execucao-manual-mobile.md`
- Bugs e melhorias: `docs/bugs/bugs-e-melhorias.md`
- Desempenho: `docs/desempenho/performance.md`
- Acessibilidade: `docs/acessibilidade/acessibilidade.md`
- Responsividade: `docs/responsividade/responsividade.md`
- Prints: `evidencias/`
- Relatórios: `reports/`

## Bugs e melhorias registrados

- BUG-001: Widget VLibras sobrepõe conteúdos importantes em viewport mobile.
- MEL-001: Mensagem de e-mails divergentes aparece antes do preenchimento da confirmação.

## Limitações

- A etapa final de criação de nova senha depende do recebimento e abertura do link enviado por e-mail.
- A validação com leitor de tela NVDA ou VoiceOver ainda não foi executada.
- A execução final do pipeline depende da publicação do repositório no GitHub.

## Próximos passos

- Publicar o repositório no GitHub.
- Configurar variáveis e secrets no GitHub Actions.
- Executar o workflow e anexar os resultados finais gerados.
- Criar issues no GitHub para BUG-001 e MEL-001.
