# Teste de Acessibilidade

## Objetivo

Validar critérios de acessibilidade da plataforma, incluindo nota Lighthouse, contraste, legibilidade e navegação por teclado.

## Resultado Lighthouse - Acessibilidade

| Categoria | Nota | Status |
| --- | --- | --- |
| Accessibility | 100 | Aprovado |
| Best Practices | 100 | Aprovado |
| SEO | 100 | Aprovado |

## Análise de acessibilidade

A nota de acessibilidade foi 100, superando o critério mínimo de 90 definido no desafio. Best Practices e SEO também obtiveram nota máxima.

## AX-001 - Navegação por teclado na tela de login

Status: Aprovado

Resultado obtido:
A navegação por teclado funcionou corretamente. O foco percorreu os campos de e-mail e senha, os botões "Entrar" e "Criar conta", e o link "Esqueci minha senha".

Resultado esperado:
A pessoa usuária deve conseguir navegar pelos campos, botões e links usando teclado, com indicação visual clara de foco.

Evidência:
AX-001-navegacao-teclado-login-mobile.png

## AX-002 - Contraste e legibilidade

Status: Aprovado

Resultado obtido:
A validação pelo Lighthouse indicou nota 100 em acessibilidade. Não foram identificados problemas críticos de contraste nas validações realizadas.

Resultado esperado:
Textos, botões, campos e mensagens devem apresentar contraste suficiente para leitura e uso da interface.

Evidência:
Relatório Lighthouse gerado em `reports/lighthouse`.

## Observação

Apesar da nota 100 no Lighthouse, foi identificado manualmente o BUG-001, em que o widget VLibras sobrepõe conteúdos importantes em viewport mobile.

## Limitação

A validação com leitor de tela NVDA ou VoiceOver ainda não foi executada. Este teste depende de ambiente com leitor de tela configurado.
