# language: pt
Funcionalidade: Recuperação de senha
  Como pessoa usuária cadastrada
  Quero recuperar minha senha
  Para voltar a acessar a plataforma com segurança

  Contexto:
    Dado que acesso o fluxo de recuperação de senha em viewport mobile

  @mobile @senha @smoke
  Cenário: Solicitar recuperação de senha com e-mail cadastrado
    Quando informo o e-mail da pessoa usuária de teste
    E solicito o envio das instruções de recuperação
    Então devo visualizar confirmação de envio ou orientação de verificação de e-mail

  @mobile @senha @validacao
  Cenário: Impedir recuperação com e-mail inválido
    Quando informo o e-mail "email-invalido"
    E solicito o envio das instruções de recuperação
    Então devo visualizar uma mensagem de validação para e-mail inválido

  @mobile @senha @seguranca
  Cenário: Não revelar se um e-mail está cadastrado
    Quando informo o e-mail "nao-cadastrado-qa@example.com"
    E solicito o envio das instruções de recuperação
    Então a mensagem exibida não deve expor existência ou ausência de cadastro
