# Teste de Acessibilidade

## Objetivo

Validar critérios de acessibilidade da plataforma, incluindo nota Lighthouse, contraste, legibilidade, navegação por teclado e uso com leitor de tela.

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

## AX-003 - Validação com leitor de tela NVDA na tela de login

Viewport:
Mobile responsivo - 397 x 777

Ferramenta:
NVDA no Windows, com Chrome em modo responsivo mobile.

Status:
Aprovado

O que foi feito:
Foi realizada navegação manual pela tela de login utilizando o leitor de tela NVDA e navegação por teclado.

Resultado obtido:
O leitor de tela anunciou corretamente os principais elementos interativos da tela de login, incluindo campo de e-mail, campo de senha, botão "Entrar", botão "Criar conta" e link "Esqueci minha senha".

Resultado esperado:
A pessoa usuária deve conseguir identificar e navegar pelos campos, botões e links principais utilizando leitor de tela.

Evidência:
AX-003-leitor-tela-nvda-login-mobile.png

Observação:
A validação foi realizada em ambiente Windows com Chrome em viewport mobile simulada pelo DevTools.

## Observação

Apesar da nota 100 no Lighthouse e da aprovação na navegação por teclado/NVDA, foi identificado manualmente o BUG-001, em que o widget VLibras sobrepõe conteúdos importantes em viewport mobile.