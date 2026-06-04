# Teste de Desempenho

## Objetivo

Validar o tempo de resposta e a estabilidade das principais rotas da plataforma Lacrei Saúde em ambiente de staging, considerando operações críticas como login, cadastro e busca de profissionais.

## Ferramentas utilizadas

- Script de performance com 30 usuários simultâneos
- Lighthouse para métricas de carregamento e interatividade

## Cenário executado

Foi executado um cenário de carga leve simulando 30 usuários simultâneos nas principais rotas da aplicação.

Rotas avaliadas:

- Login
- Cadastro
- Busca de profissionais

Critério utilizado:

- Tempo de resposta p95 menor que 500ms para operações críticas
- Ausência de falhas nas requisições

## Resultado do teste com 30 usuários simultâneos

| Rota | Requests | Falhas | Mediana | p95 | Máximo | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Login | 30 | 0 | 360ms | 707ms | 872ms | Atenção |
| Cadastro | 30 | 0 | 110ms | 222ms | 262ms | Aprovado |
| Busca de profissionais | 30 | 0 | 138ms | 163ms | 357ms | Aprovado |

## Análise

As rotas de cadastro e busca de profissionais ficaram dentro da meta definida, com p95 menor que 500ms.

A rota de login não apresentou falhas, porém teve p95 de 707ms, acima da meta definida para operações críticas. Por esse motivo, a rota recebeu status "Atenção".

## Métricas Lighthouse relacionadas à performance

O Lighthouse foi executado com sucesso e os relatórios foram gerados em `reports/lighthouse`.

| Métrica | Resultado | Status |
| --- | --- | --- |
| Performance | 69 | Atenção |
| First Contentful Paint | 1.3s | Aprovado |
| Largest Contentful Paint | 4.0s | Atenção |
| Total Blocking Time | 470ms | Atenção |
| Cumulative Layout Shift | 0.025 | Aprovado |
| Speed Index | 6.5s | Atenção |
| Time to Interactive | 6049ms | Atenção |

## Sugestões de melhoria

- Investigar otimização do carregamento inicial da página de login.
- Reduzir scripts bloqueantes.
- Otimizar recursos visuais.
- Avaliar carregamento assíncrono de recursos não críticos.
- Monitorar novamente a rota de login após ajustes de performance.

## Status geral

Aprovado com ressalva.

As rotas de cadastro e busca foram aprovadas no critério de desempenho. A rota de login e as métricas Lighthouse de performance apresentaram pontos de atenção e devem ser acompanhadas em futuras otimizações.
