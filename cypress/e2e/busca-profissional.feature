# language: pt
Funcionalidade: Busca e contato com profissional de saúde
  Como pessoa usuária
  Quero buscar profissionais por especialidade
  Para entrar em contato com uma pessoa profissional adequada às minhas necessidades

  Contexto:
    Dado que acesso a busca de profissionais em viewport mobile

  @mobile @busca @smoke
  Cenário: Buscar pessoa profissional por especialidade
    Quando busco uma pessoa profissional pela especialidade configurada
    Então devo visualizar resultados de profissionais de saúde
    E devo visualizar informações mínimas de uma pessoa profissional

  @mobile @busca @contato
  Cenário: Contatar pessoa profissional a partir do resultado de busca
    Quando busco uma pessoa profissional pela especialidade configurada
    E abro o primeiro resultado disponível
    E aciono a opção de contato da pessoa profissional
    Então devo visualizar um canal de contato ou orientação para login

  @mobile @busca @filtros
  Cenário: Validar filtros essenciais da busca
    Quando busco uma pessoa profissional pela especialidade configurada
    E aplico um filtro de localização, se disponível
    Então a lista deve permanecer funcional e sem quebra de layout

  @mobile @busca @vazio
  Cenário: Exibir estado vazio compreensível
    Quando realizo uma busca por "EspecialidadeInexistenteQA"
    Então devo visualizar uma mensagem de nenhum resultado ou orientação de nova busca
