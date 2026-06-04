# language: pt
Funcionalidade: Cadastro da pessoa usuária
  Como pessoa usuária da Lacrei Saúde
  Quero criar meu cadastro e concluir o pós-cadastro
  Para buscar profissionais de saúde de forma segura e acolhedora

  Contexto:
    Dado que acesso a plataforma como pessoa usuária em viewport mobile

  @mobile @cadastro @smoke
  Cenário: Cadastro completo com busca de profissional no pós-cadastro
    Quando inicio o cadastro de pessoa usuária
    E preencho os dados obrigatórios da pessoa usuária de teste
    E aceito os termos obrigatórios
    E envio o cadastro
    Então devo visualizar a etapa de pós-cadastro ou confirmação
    Quando concluo as preferências iniciais, se existirem
    E busco uma pessoa profissional pela especialidade configurada
    Então devo visualizar resultados de profissionais de saúde

  @mobile @cadastro @validacao
  Cenário: Impedir cadastro com e-mail inválido
    Quando inicio o cadastro de pessoa usuária
    E preencho o e-mail "email-invalido"
    E tento avançar no cadastro
    Então devo visualizar uma mensagem de validação para e-mail inválido

  @mobile @cadastro @validacao
  Cenário: Impedir cadastro sem aceite de termos obrigatórios
    Quando inicio o cadastro de pessoa usuária
    E preencho os dados obrigatórios da pessoa usuária de teste
    E envio o cadastro sem aceitar os termos
    Então devo visualizar uma mensagem de obrigatoriedade dos termos

  @mobile @cadastro @validacao
  Cenário: Impedir cadastro com senha fraca
    Quando inicio o cadastro de pessoa usuária
    E preencho a senha "123456"
    E tento avançar no cadastro
    Então devo visualizar uma mensagem de validação para senha fraca
