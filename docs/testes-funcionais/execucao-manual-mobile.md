# 5. Execução Manual dos Testes - Versão Mobile

## CT-001 - Cadastro de Pessoa Usuária

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 642  
Data da execução: 03/06/2026  
Status: Parcialmente aprovado

O que foi feito:  
Realizei o cadastro de uma pessoa usuária paciente em viewport mobile.

Resultado obtido:  
Após finalizar o cadastro, o sistema redirecionou para a tela "Estamos quase lá...", informando que foi enviado um link de verificação para o e-mail cadastrado.

Resultado esperado:  
O sistema deve confirmar o cadastro e orientar a pessoa usuária sobre a verificação de e-mail.

Evidência:  
CT-001-cadastro-verificacao-email-mobile.png

Observação:  
A continuação do fluxo depende da confirmação do e-mail cadastrado.

## CT-002 - Voltar ao Login Após Cadastro

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 642  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Após concluir o cadastro e chegar a  tela de verificação de e-mail, cliquei no botão "Voltar ao login".

Resultado obtido:  
O sistema redirecionou corretamente para a tela de login da pessoa paciente.

Resultado esperado:  
Ao clicar em "Voltar ao login", a pessoa usuária deve retornar para a página de login sem erro.

Evidência:  
CT-002-voltar-ao-login-mobile.png

Observação:  
Fluxo simples e compreensí­vel para retornar ao acesso da plataforma.

## CT-003 - Recuperação de Senha com E-mail Não Verificado ou Inexistente

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Acessei o fluxo de recuperção de senha, informei um e-mail não confirmado ou possivelmente inexistente e solicitei o envio do link de redefinição.

Resultado obtido:  
O sistema exibiu a mensagem: "Caso o e-mail fornecido exista, será enviado um link para redefinição de senha."

Resultado esperado:  
Por segurança, o sistema deve exibir uma mensagem genérica, sem revelar se o e-mail existe, não existe ou ainda não foi verificado.

Evidência:  
CT-003-recuperacao-senha-email-nao-verificado-mobile.png

Observação:  
O comportamento está adequado do ponto de vista de privacidade, pois evita enumeração de contas.

## CT-004 - Voltar Para a Tela Inicial Após Recuperação de Senha

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Após solicitar a recuperação de senha e visualizar a tela de verificação de e-mail, cliquei no botão "Voltar para a tela inicial".

Resultado obtido:  
O sistema redirecionou corretamente para a tela inicial/login da Lacrei Saúde.

Resultado esperado:  
Ao clicar em "Voltar para a tela inicial", a pessoa usuária deve retornar para a tela de login sem erro.

Evidência:  
CT-004-voltar-tela-inicial-login-mobile.png

Observação:  
O fluxo de retorno funcionou corretamente em viewport mobile.

## CT-005 - Login com Campos Vazios

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de login, deixei os campos de e-mail e senha vazios e cliquei no botão "Entrar".

Resultado obtido:  
O sistema destacou os campos de e-mail e senha em vermelho e exibiu a mensagem "Este campo é obrigatório." para ambos.

Resultado esperado:  
O sistema deve impedir o envio do formulário de login quando os campos obrigatários não forem preenchidos e deve exibir mensagens claras próximas aos campos correspondentes.

Evidência:  
CT-005-login-campos-vazios-mobile.png

Observação:  
As mensagens de validação são claras, aparecem próximas aos campos correspondentes e orientam corretamente a pessoa usuária sobre o preenchimento obrigatório.

## CT-006 - Login com E-mail Inválido

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 642  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de login, preenchi o campo de e-mail com o valor "email-invalido", preenchi o campo de senha e cliquei em "Entrar".

Resultado obtido:  
O sistema destacou o campo de e-mail em vermelho e exibiu a mensagem: "Por favor, utilize um formato de e-mail válido. Por exemplo: email@dominio.com.br."

Resultado esperado:  
O sistema deve impedir o login quando o e-mail estiver em formato inválido e exibir uma mensagem clara de validação.

Evidência:  
CT-006-login-email-invalido-mobile.png

Observação:  
A validação é compreensível e apresenta exemplo de formato correto.

## CT-007 - Login com Credenciais Inválidas

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de login, preenchi um e-mail em formato válido e uma senha inválida, e cliquei em "Entrar".

Resultado obtido:  
O sistema impediu o login e exibiu a mensagem: "E-mail ou senha incorretos. Esqueceu a sua senha? Clique em 'Esqueci minha senha' para recuperá-la."

Resultado esperado:  
O sistema deve impedir o login com credenciais inválidas e exibir uma mensagem clara sem permitir acesso a plataforma.

Evidência:  
CT-007-login-credenciais-invalidas-mobile.png

Observação:  
A mensagem é compreensÃível e orienta a pessoa usuária para o fluxo de recuperação de senha.

## CT-008 - Acessar Cadastro Pela Tela de Login

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de login, cliquei no botão "Criar conta".

Resultado obtido:  
O sistema redirecionou para a tela de cadastro da pessoa paciente, exibindo os campos necessários para criação de conta.

Resultado esperado:  
Ao clicar em "Criar conta", a pessoa usuária deve ser direcionada corretamente para o formulário de cadastro.

Evidência:  
CT-008-acessar-cadastro-pelo-login-mobile.png

Observação:  
O acesso ao cadastro funcionou corretamente a partir da tela de login.

## CT-009 - Cadastro com Campos ObrigatÃ³rios Vazios

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de cadastro, deixei os campos obrigatatórios vazios e tentei enviar o formulário.

Resultado obtido:  
O sistema impediu o envio do cadastro e exibiu mensagens de obrigatoriedade para os campos visí­veis do formulário, incluindo nome, sobrenome, e-mail, confirmação de e-mail, senha, confirmação de senha, aceite dos termos e confirmação de idade.

Resultado esperado:  
O sistema deve impedir o envio do cadastro quando campos obrigatórios não forem preenchidos e deve exibir mensagens claras próximas aos campos correspondentes.

Evidências:  
- CT-009-cadastro-campos-obrigatorios-vazios-mobile-parte-1.png  
- CT-009-cadastro-campos-obrigatorios-vazios-mobile-parte-2.png  
- CT-009-cadastro-campos-obrigatorios-vazios-mobile-parte-3.png

Observação:  
A validação dos campos obrigatórios funcionou corretamente em viewport mobile.

## CT-010 - Cadastro com E-mails Diferentes

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de cadastro, preenchi os campos obrigatórios com dados válidos, mas informei e-mails diferentes nos campos "E-mail" e "Confirme seu e-mail".

Resultado obtido:  
O sistema exibiu a mensagem "Os e-mails não correspondem, digite novamente." nos campos de e-mail e impediu a continuidade do cadastro.

Resultado esperado:  
O sistema deve impedir o cadastro quando o e-mail e a confirmação de e-mail forem diferentes.

Evidência:  
CT-010-cadastro-emails-diferentes-mobile.png

Observação:  
A validação de confirmação de e-mail funcionou corretamente. Tambémm foi observada uma oportunidade de melhoria: a mensagem "Os e-mails não correspondem" aparece antes do preenchimento do campo "Confirme seu e-mail", o que pode gerar dúvida para a pessoa usuária. Essa melhoria foi registrada como MEL-001.

## CT-011 - Cadastro com Senhas Diferentes

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de cadastro, preenchi os campos obrigatórios com dados válidos, mas informei valores diferentes nos campos "Senha" e "Confirme sua senha".

Resultado obtido:  
O sistema exibiu a mensagem "Senhas incompatí­veis, tente novamente." e manteve o botão "Cadastrar" desabilitado, impedindo a criação do cadastro.

Resultado esperado:  
O sistema deve impedir o cadastro quando a senha e a confirmação de senha forem diferentes.

Evidência:  
CT-011-cadastro-senhas-diferentes-mobile.png

Observação:  
A validação de confirmação de senha funcionou corretamente.

## CT-012 - Acessar Busca de Profissionais Sem Login

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 642  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Tentei acessar diretamente a rota de busca de profissionais sem estar autenticada.

Resultado obtido:  
O sistema redirecionou para a tela de login, mantendo na URL o parâmetro de redirecionamento para a busca de profissionais.

Resultado esperado:  
Caso a busca seja uma área restrita, o sistema deve redirecionar a pessoa usuária não autenticada para o login antes de permitir o acesso.

Evidência:  
CT-012-acessar-busca-profissionais-sem-login-mobile.png

Observação:  
A URL exibiu o parÃ¢metro de redirect para `/saude/paciente/profissionais/buscar`, indicando que o sistema pode retornar a busca após autenticação.

## CT-013 - Login com Conta Válida Redireciona Para pós-Cadastro

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Realizei login com uma conta paciente válida.

Resultado obtido:  
O sistema autenticou a conta e redirecionou para a tela de pós-cadastro, exibindo a mensagem "Boas-vindas a  Lacrei Saúde, continue o seu cadastro" e o botão "Continuar cadastro".

Resultado esperado:  
Após o primeiro login, a pessoa usuária deve ser direcionada para concluir o pós-cadastro antes de acessar as demais funcionalidades.

Evidência:  
CT-013-login-redireciona-pos-cadastro-mobile.png

Observação:  
A busca de profissionais depende da conclusão do pós-cadastro.

## CT-014 - Acessar Busca de Profissionais Após Pós-Cadastro

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Após realizar login com conta válida e avançar no pós-cadastro, acessei a área de busca de profissionais.

Resultado obtido:  
O sistema exibiu a tela de busca com o tÃítulo "Boas-vindas a  Lacrei Saúde!" e campo de pesquisa para buscar por profissão, especialidade, localidade, sexualidade ou identidade de gênero.

Resultado esperado:  
Após concluir ou avançar no pós-cadastro, a pessoa usuária deve conseguir acessar a busca de profissionais.

Evidência:  
CT-014-busca-profissionais-apos-pos-cadastro-mobile.png

Observação:  
A tela orienta a pessoa usuária a clicar na lupa para exibir a lista de profissionais disponí­veis.

## CT-015 - Buscar Profissional por Especialidade

Ambiente: https://paciente-staging.lacreisaude.com.br  
Viewport: Mobile responsivo - 397 x 777  
Data da execução: 03/06/2026  
Status: Aprovado

O que foi feito:  
Na tela de busca de profissionais, digitei "psicologia" no campo de busca e cliquei na lupa.

Resultado obtido:  
O sistema exibiu 1 resultado para a busca "psicologia", mostrando um card de profissional com nome, profissão, registro profissional, características de atendimento e botão "Agendar consulta".

Resultado esperado:  
Ao pesquisar por uma especialidade existente, o sistema deve exibir profissionais compatí­veis com o termo buscado.

Evidência:  
CT-015-buscar-profissional-psicologia-mobile.png

Observação:  
A busca retornou resultado e apresentou informações relevantes da pessoa profissional.

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
