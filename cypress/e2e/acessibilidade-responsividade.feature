# language: pt
Funcionalidade: Acessibilidade e responsividade
  Como pessoa usuária da plataforma
  Quero navegar com teclado, leitor de tela e diferentes viewports
  Para ter uma experiência inclusiva e sem bloqueios de uso

  @a11y @mobile
  Cenário: Navegação por teclado no fluxo principal mobile
    Dado que acesso a plataforma como pessoa usuária em viewport mobile
    Quando navego pelos elementos interativos usando teclado
    Então o foco visível deve acompanhar a navegação
    E nenhum elemento essencial deve ficar inacessível pelo teclado

  @responsivo @desktop
  Cenário: Layout principal em desktop
    Dado que acesso a plataforma em viewport desktop
    Quando busco uma pessoa profissional pela especialidade configurada
    Então a lista deve permanecer funcional e sem quebra de layout

  @responsivo @mobile
  Cenário: Layout principal em mobile até 600px
    Dado que acesso a busca de profissionais em viewport mobile
    Quando busco uma pessoa profissional pela especialidade configurada
    Então a lista deve permanecer funcional e sem quebra de layout
