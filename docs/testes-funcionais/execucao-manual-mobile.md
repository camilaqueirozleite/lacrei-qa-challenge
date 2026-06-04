# 5. ExecuÃ§Ã£o Manual dos Testes - VersÃ£o Mobile

## CT-001 - Cadastro de Pessoa UsuÃ¡ria

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 642  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Parcialmente aprovado

O que foi feito:  
Realizei o cadastro de uma pessoa usuÃ¡ria paciente em viewport mobile.

Resultado obtido:  
ApÃ³s finalizar o cadastro, o sistema redirecionou para a tela "Estamos quase lÃ¡...", informando que foi enviado um link de verificaÃ§Ã£o para o e-mail cadastrado.

Resultado esperado:  
O sistema deve confirmar o cadastro e orientar a pessoa usuÃ¡ria sobre a verificaÃ§Ã£o de e-mail.

EvidÃªncia:  
CT-001-cadastro-verificacao-email-mobile.png

ObservaÃ§Ã£o:  
A continuaÃ§Ã£o do fluxo depende da confirmaÃ§Ã£o do e-mail cadastrado.

## CT-002 - Voltar ao Login ApÃ³s Cadastro

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 642  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
ApÃ³s concluir o cadastro e chegar Ã  tela de verificaÃ§Ã£o de e-mail, cliquei no botÃ£o "Voltar ao login".

Resultado obtido:  
O sistema redirecionou corretamente para a tela de login da pessoa paciente.

Resultado esperado:  
Ao clicar em "Voltar ao login", a pessoa usuÃ¡ria deve retornar para a pÃ¡gina de login sem erro.

EvidÃªncia:  
CT-002-voltar-ao-login-mobile.png

ObservaÃ§Ã£o:  
Fluxo simples e compreensÃ­vel para retornar ao acesso da plataforma.

## CT-003 - RecuperaÃ§Ã£o de Senha com E-mail NÃ£o Verificado ou Inexistente

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Acessei o fluxo de recuperaÃ§Ã£o de senha, informei um e-mail nÃ£o confirmado ou possivelmente inexistente e solicitei o envio do link de redefiniÃ§Ã£o.

Resultado obtido:  
O sistema exibiu a mensagem: "Caso o e-mail fornecido exista, serÃ¡ enviado um link para redefiniÃ§Ã£o de senha."

Resultado esperado:  
Por seguranÃ§a, o sistema deve exibir uma mensagem genÃ©rica, sem revelar se o e-mail existe, nÃ£o existe ou ainda nÃ£o foi verificado.

EvidÃªncia:  
CT-003-recuperacao-senha-email-nao-verificado-mobile.png

ObservaÃ§Ã£o:  
O comportamento estÃ¡ adequado do ponto de vista de privacidade, pois evita enumeraÃ§Ã£o de contas.

## CT-004 - Voltar Para a Tela Inicial ApÃ³s RecuperaÃ§Ã£o de Senha

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
ApÃ³s solicitar a recuperaÃ§Ã£o de senha e visualizar a tela de verificaÃ§Ã£o de e-mail, cliquei no botÃ£o "Voltar para a tela inicial".

Resultado obtido:  
O sistema redirecionou corretamente para a tela inicial/login da Lacrei SaÃºde.

Resultado esperado:  
Ao clicar em "Voltar para a tela inicial", a pessoa usuÃ¡ria deve retornar para a tela de login sem erro.

EvidÃªncia:  
CT-004-voltar-tela-inicial-login-mobile.png

ObservaÃ§Ã£o:  
O fluxo de retorno funcionou corretamente em viewport mobile.

## CT-005 - Login com Campos Vazios

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de login, deixei os campos de e-mail e senha vazios e cliquei no botÃ£o "Entrar".

Resultado obtido:  
O sistema destacou os campos de e-mail e senha em vermelho e exibiu a mensagem "Este campo Ã© obrigatÃ³rio." para ambos.

Resultado esperado:  
O sistema deve impedir o envio do formulÃ¡rio de login quando os campos obrigatÃ³rios nÃ£o forem preenchidos e deve exibir mensagens claras prÃ³ximas aos campos correspondentes.

EvidÃªncia:  
CT-005-login-campos-vazios-mobile.png

ObservaÃ§Ã£o:  
As mensagens de validaÃ§Ã£o sÃ£o claras, aparecem prÃ³ximas aos campos correspondentes e orientam corretamente a pessoa usuÃ¡ria sobre o preenchimento obrigatÃ³rio.

## CT-006 - Login com E-mail InvÃ¡lido

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 642  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de login, preenchi o campo de e-mail com o valor "email-invalido", preenchi o campo de senha e cliquei em "Entrar".

Resultado obtido:  
O sistema destacou o campo de e-mail em vermelho e exibiu a mensagem: "Por favor, utilize um formato de e-mail vÃ¡lido. Por exemplo: email@dominio.com.br."

Resultado esperado:  
O sistema deve impedir o login quando o e-mail estiver em formato invÃ¡lido e exibir uma mensagem clara de validaÃ§Ã£o.

EvidÃªncia:  
CT-006-login-email-invalido-mobile.png

ObservaÃ§Ã£o:  
A validaÃ§Ã£o Ã© compreensÃ­vel e apresenta exemplo de formato correto.

## CT-007 - Login com Credenciais InvÃ¡lidas

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de login, preenchi um e-mail em formato vÃ¡lido e uma senha invÃ¡lida, e cliquei em "Entrar".

Resultado obtido:  
O sistema impediu o login e exibiu a mensagem: "E-mail ou senha incorretos. Esqueceu a sua senha? Clique em 'Esqueci minha senha' para recuperÃ¡-la."

Resultado esperado:  
O sistema deve impedir o login com credenciais invÃ¡lidas e exibir uma mensagem clara sem permitir acesso Ã  plataforma.

EvidÃªncia:  
CT-007-login-credenciais-invalidas-mobile.png

ObservaÃ§Ã£o:  
A mensagem Ã© compreensÃ­vel e orienta a pessoa usuÃ¡ria para o fluxo de recuperaÃ§Ã£o de senha.

## CT-008 - Acessar Cadastro Pela Tela de Login

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de login, cliquei no botÃ£o "Criar conta".

Resultado obtido:  
O sistema redirecionou para a tela de cadastro da pessoa paciente, exibindo os campos necessÃ¡rios para criaÃ§Ã£o de conta.

Resultado esperado:  
Ao clicar em "Criar conta", a pessoa usuÃ¡ria deve ser direcionada corretamente para o formulÃ¡rio de cadastro.

EvidÃªncia:  
CT-008-acessar-cadastro-pelo-login-mobile.png

ObservaÃ§Ã£o:  
O acesso ao cadastro funcionou corretamente a partir da tela de login.

## CT-009 - Cadastro com Campos ObrigatÃ³rios Vazios

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de cadastro, deixei os campos obrigatÃ³rios vazios e tentei enviar o formulÃ¡rio.

Resultado obtido:  
O sistema impediu o envio do cadastro e exibiu mensagens de obrigatoriedade para os campos visÃ­veis do formulÃ¡rio, incluindo nome, sobrenome, e-mail, confirmaÃ§Ã£o de e-mail, senha, confirmaÃ§Ã£o de senha, aceite dos termos e confirmaÃ§Ã£o de idade.

Resultado esperado:  
O sistema deve impedir o envio do cadastro quando campos obrigatÃ³rios nÃ£o forem preenchidos e deve exibir mensagens claras prÃ³ximas aos campos correspondentes.

EvidÃªncias:  
- CT-009-cadastro-campos-obrigatorios-vazios-mobile-parte-1.png  
- CT-009-cadastro-campos-obrigatorios-vazios-mobile-parte-2.png  
- CT-009-cadastro-campos-obrigatorios-vazios-mobile-parte-3.png

ObservaÃ§Ã£o:  
A validaÃ§Ã£o dos campos obrigatÃ³rios funcionou corretamente em viewport mobile.

## CT-010 - Cadastro com E-mails Diferentes

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de cadastro, preenchi os campos obrigatÃ³rios com dados vÃ¡lidos, mas informei e-mails diferentes nos campos "E-mail" e "Confirme seu e-mail".

Resultado obtido:  
O sistema exibiu a mensagem "Os e-mails nÃ£o correspondem, digite novamente." nos campos de e-mail e impediu a continuidade do cadastro.

Resultado esperado:  
O sistema deve impedir o cadastro quando o e-mail e a confirmaÃ§Ã£o de e-mail forem diferentes.

EvidÃªncia:  
CT-010-cadastro-emails-diferentes-mobile.png

ObservaÃ§Ã£o:  
A validaÃ§Ã£o de confirmaÃ§Ã£o de e-mail funcionou corretamente. TambÃ©m foi observada uma oportunidade de melhoria: a mensagem "Os e-mails nÃ£o correspondem" aparece antes do preenchimento do campo "Confirme seu e-mail", o que pode gerar dÃºvida para a pessoa usuÃ¡ria. Essa melhoria foi registrada como MEL-001.

## CT-011 - Cadastro com Senhas Diferentes

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de cadastro, preenchi os campos obrigatÃ³rios com dados vÃ¡lidos, mas informei valores diferentes nos campos "Senha" e "Confirme sua senha".

Resultado obtido:  
O sistema exibiu a mensagem "Senhas incompatÃ­veis, tente novamente." e manteve o botÃ£o "Cadastrar" desabilitado, impedindo a criaÃ§Ã£o do cadastro.

Resultado esperado:  
O sistema deve impedir o cadastro quando a senha e a confirmaÃ§Ã£o de senha forem diferentes.

EvidÃªncia:  
CT-011-cadastro-senhas-diferentes-mobile.png

ObservaÃ§Ã£o:  
A validaÃ§Ã£o de confirmaÃ§Ã£o de senha funcionou corretamente.

## CT-012 - Acessar Busca de Profissionais Sem Login

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 642  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Tentei acessar diretamente a rota de busca de profissionais sem estar autenticada.

Resultado obtido:  
O sistema redirecionou para a tela de login, mantendo na URL o parÃ¢metro de redirecionamento para a busca de profissionais.

Resultado esperado:  
Caso a busca seja uma Ã¡rea restrita, o sistema deve redirecionar a pessoa usuÃ¡ria nÃ£o autenticada para o login antes de permitir o acesso.

EvidÃªncia:  
CT-012-acessar-busca-profissionais-sem-login-mobile.png

ObservaÃ§Ã£o:  
A URL exibiu o parÃ¢metro de redirect para `/saude/paciente/profissionais/buscar`, indicando que o sistema pode retornar Ã  busca apÃ³s autenticaÃ§Ã£o.

## CT-013 - Login com Conta VÃ¡lida Redireciona Para PÃ³s-Cadastro

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Realizei login com uma conta paciente vÃ¡lida.

Resultado obtido:  
O sistema autenticou a conta e redirecionou para a tela de pÃ³s-cadastro, exibindo a mensagem "Boas-vindas Ã  Lacrei SaÃºde, continue o seu cadastro" e o botÃ£o "Continuar cadastro".

Resultado esperado:  
ApÃ³s o primeiro login, a pessoa usuÃ¡ria deve ser direcionada para concluir o pÃ³s-cadastro antes de acessar as demais funcionalidades.

EvidÃªncia:  
CT-013-login-redireciona-pos-cadastro-mobile.png

ObservaÃ§Ã£o:  
A busca de profissionais depende da conclusÃ£o do pÃ³s-cadastro.

## CT-014 - Acessar Busca de Profissionais ApÃ³s PÃ³s-Cadastro

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
ApÃ³s realizar login com conta vÃ¡lida e avanÃ§ar no pÃ³s-cadastro, acessei a Ã¡rea de busca de profissionais.

Resultado obtido:  
O sistema exibiu a tela de busca com o tÃ­tulo "Boas-vindas Ã  Lacrei SaÃºde!" e campo de pesquisa para buscar por profissÃ£o, especialidade, localidade, sexualidade ou identidade de gÃªnero.

Resultado esperado:  
ApÃ³s concluir ou avanÃ§ar no pÃ³s-cadastro, a pessoa usuÃ¡ria deve conseguir acessar a busca de profissionais.

EvidÃªncia:  
CT-014-busca-profissionais-apos-pos-cadastro-mobile.png

ObservaÃ§Ã£o:  
A tela orienta a pessoa usuÃ¡ria a clicar na lupa para exibir a lista de profissionais disponÃ­veis.

## CT-015 - Buscar Profissional por Especialidade

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execuÃ§Ã£o: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de busca de profissionais, digitei "psicologia" no campo de busca e cliquei na lupa.

Resultado obtido:  
O sistema exibiu 1 resultado para a busca "psicologia", mostrando um card de profissional com nome, profissÃ£o, registro profissional, caracterÃ­sticas de atendimento e botÃ£o "Agendar consulta".

Resultado esperado:  
Ao pesquisar por uma especialidade existente, o sistema deve exibir profissionais compatÃ­veis com o termo buscado.

EvidÃªncia:  
CT-015-buscar-profissional-psicologia-mobile.png

ObservaÃ§Ã£o:  
A busca retornou resultado e apresentou informaÃ§Ãµes relevantes da pessoa profissional.

## CT-016 - Contatar ou Agendar Profissional

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 642  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na lista de resultados da busca de profissionais, cliquei no botão "Agendar consulta" no card do profissional retornado pela busca por "psicologia".

Resultado obtido:  
O sistema direcionou para o perfil do profissional, exibindo a aba "Agendamentos", informações de teleconsulta e o botão "Agendar atendimento".

Resultado esperado:  
O sistema deve direcionar a pessoa usuária para o fluxo de contato ou agendamento profissional.

Evidência:  
CT-016-agendar-consulta-profissional-mobile.png

Observação:  
O fluxo "buscar profissional -> contatar/agendar profissional" foi validado com sucesso em viewport mobile.
