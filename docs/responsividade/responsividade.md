# Teste de Responsividade

## Objetivo

Validar se os principais fluxos da plataforma funcionam corretamente em viewport mobile e desktop, conforme solicitado no desafio, considerando layout, funcionalidade e usabilidade.

## Viewports avaliados

Mobile:

- Mobile responsivo - 397 x 642
- Mobile responsivo - 397 x 777

Desktop:

- Desktop responsivo - 1366 x 768

Critério:

- Mobile: até 600px de largura.
- Desktop: acima de 1024px de largura.

## Validação mobile

Fluxos validados em mobile:

- Cadastro de pessoa usuária
- Login
- Recuperação de senha
- Pós-cadastro
- Busca de profissional
- Acesso ao perfil/agendamento de profissional

Resultado obtido:
Os principais fluxos funcionaram corretamente em viewport mobile. Foi possível realizar cadastro, validar campos obrigatórios, acessar login, recuperar senha, concluir pós-cadastro, buscar profissional por especialidade e acessar o fluxo de agendamento.

Ponto de atenção:
Foi identificado que o widget VLibras sobrepõe campos, mensagens e botões importantes em algumas telas mobile. Esse comportamento foi registrado como BUG-001 na seção "Registro de Bugs e Melhorias".

Evidências mobile:

- CT-001-cadastro-verificacao-email-mobile.png
- CT-003-recuperacao-senha-email-nao-verificado-mobile.png
- CT-007-login-credenciais-invalidas-mobile.png
- CT-015-buscar-profissional-psicologia-mobile.png
- CT-016-agendar-consulta-profissional-mobile.png

Status mobile:
Aprovado com ressalva.

## Validação desktop

### RSP-001 - Login em desktop

Viewport: 1366 x 768

Status: Aprovado

Resultado obtido:
A tela de login foi exibida corretamente em viewport desktop, com campos, botões, link de recuperação de senha e ilustração lateral visíveis, sem quebra crítica de layout.

Evidência:
RSP-001-login-desktop.png

### RSP-002 - Cadastro em desktop

Viewport: 1366 x 768

Status: Aprovado

Resultado obtido:
A tela de cadastro foi exibida corretamente em viewport desktop, com formulário, campos obrigatórios e botões visíveis e organizados, sem quebra crítica de layout.

Evidência:
RSP-002-cadastro-desktop.png

### RSP-003 - Busca de profissional em desktop

Viewport: 1366 x 768

Status: Aprovado

Resultado obtido:
A tela de busca de profissionais foi exibida corretamente em viewport desktop. A busca por "psicologia" retornou 1 resultado e o card do profissional foi apresentado com informações principais e botão "Agendar consulta", sem quebra crítica de layout.

Evidência:
RSP-003-busca-profissional-desktop.png

### RSP-004 - Agendamento profissional em desktop

Viewport: 1366 x 768

Status: Aprovado

Resultado obtido:
A tela de perfil/agendamento do profissional foi exibida corretamente em viewport desktop. A aba "Agendamentos", as informações de teleconsulta e o botão "Agendar atendimento" ficaram visíveis e utilizáveis, sem quebra crítica de layout.

Evidência:
RSP-004-agendamento-profissional-desktop.png

## Status geral

Aprovado com ressalva.

Os principais fluxos foram validados em mobile e desktop. Em mobile, foi identificado ponto de melhoria relacionado ao posicionamento do widget VLibras, registrado como BUG-001. Em desktop, os fluxos avaliados foram exibidos sem quebras críticas de layout.
