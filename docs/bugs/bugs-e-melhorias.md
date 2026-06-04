# Registro de Bugs e Melhorias

Esta seção reúne os bugs e oportunidades de melhoria identificados durante a execução manual dos testes em viewport mobile.

## BUG-001 - Widget VLibras sobrepõe conteúdos importantes em viewport mobile

Tipo: Bug

Impacto: Médio

Prioridade sugerida: Média

Ambiente: https://paciente-staging.lacreisaude.com.br

Viewport: Mobile responsivo - 397 x 642 e 397 x 777

Telas afetadas:

- Tela de verificação de e-mail após cadastro
- Tela de recuperação de senha
- Tela de login
- Tela de resultados da busca de profissionais

Passos para reprodução:

1. Acessar a plataforma em viewport mobile.
2. Navegar pelos fluxos de cadastro, recuperação de senha, login ou busca de profissionais.
3. Observar o widget flutuante do VLibras no lado direito da tela.

Resultado atual:
O widget flutuante do VLibras aparece sobreposto a campos, botões ou mensagens importantes da interface. Em alguns casos, cobre parte da mensagem de erro, fica sobre o campo de senha ou se posiciona sobre o botão "Agendar consulta".

Resultado esperado:
O widget deve permanecer acessível sem cobrir textos, campos, botões, mensagens de erro ou ações principais da tela.

Evidências:

- CT-003-recuperacao-senha-email-nao-verificado-mobile.png
- CT-004-voltar-tela-inicial-login-mobile.png
- CT-007-login-credenciais-invalidas-mobile.png
- CT-015-buscar-profissional-psicologia-mobile.png

Sugestão de melhoria:
Ajustar o posicionamento responsivo do widget em mobile, reservar espaço fixo para ele ou permitir recolhimento sem bloquear ações importantes.

Status: Aberto

## MEL-001 - Mensagem de e-mails divergentes aparece antes do preenchimento da confirmação

Tipo: Melhoria

Impacto: Baixo

Prioridade sugerida: Baixa

Ambiente: https://paciente-staging.lacreisaude.com.br

Viewport: Mobile responsivo - 397 x 642

Tela afetada: Cadastro de pessoa paciente

Passos para reprodução:

1. Acessar a tela de cadastro.
2. Preencher o campo "Nome civil ou social".
3. Preencher o campo "Sobrenome".
4. Preencher apenas o campo "E-mail".
5. Não preencher ainda o campo "Confirme seu e-mail".
6. Observar a mensagem exibida abaixo do campo de e-mail.

Resultado atual:
O sistema exibe a mensagem "Os e-mails não correspondem, digite novamente." antes de a pessoa usuária preencher o campo "Confirme seu e-mail".

Resultado esperado:
A mensagem de divergência entre e-mails deveria aparecer somente após o preenchimento do campo "Confirme seu e-mail" ou após a tentativa de envio do formulário.

Evidência:
CT-010-cadastro-emails-diferentes-mobile.png

Sugestão de melhoria:
Ajustar a validação para ser exibida somente após interação com o campo de confirmação de e-mail ou após submissão do formulário.

Status: Aberto
