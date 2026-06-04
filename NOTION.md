# Desafio Técnico QA - Lacrei Saúde

Este arquivo resume a documentação registrada no Notion para o desafio técnico de QA da Lacrei Saúde.

## Status geral

Aprovado com ressalvas.

Os principais requisitos do desafio foram atendidos: testes funcionais mobile em Gherkin, execução manual com evidências, registro de bugs e melhorias, testes de desempenho, acessibilidade, responsividade, automação e CI/CD.

As ressalvas estão relacionadas aos pontos de atenção identificados em performance e ao posicionamento do widget VLibras em viewport mobile.

## Ambiente

- Plataforma: Lacrei Saúde - Paciente
- Ambiente: Staging
- URL base: https://paciente-staging.lacreisaude.com.br
- Data da execução: 03/06/2026
- Viewports mobile utilizados: 397 x 642 e 397 x 777
- Viewport desktop utilizado: 1366 x 768
- Ferramentas: Chrome DevTools, Lighthouse, Notion, GitHub, Cypress + Cucumber e NVDA

## Fluxos avaliados

- Cadastro da pessoa usuária: cadastro, pós-cadastro e busca de profissional.
- Busca de profissional de saúde: buscar profissional e contatar/agendar profissional.
- Recuperação de senha: fluxo completo de "esqueci minha senha", incluindo solicitação do link, redefinição de senha e login com a nova senha.
- Acessibilidade: Lighthouse, contraste, navegação por teclado e validação com leitor de tela NVDA.
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

## Pontos de atenção

Após a execução dos testes, não ficaram pendências funcionais impeditivas nos fluxos principais avaliados.

Foram identificados pontos de atenção relacionados à performance da rota de login e ao posicionamento do widget VLibras em viewport mobile.

## Próximos passos sugeridos

- Investigar otimizações no carregamento inicial da página de login.
- Avaliar redução de scripts bloqueantes e melhoria dos recursos visuais.
- Ajustar o posicionamento responsivo do widget VLibras para evitar sobreposição em elementos importantes da interface mobile.
- Manter uso de dados descartáveis e revisar variáveis de ambiente antes de novas execuções automatizadas em staging.