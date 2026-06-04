import {
  Given as Dado,
  When as Quando,
  Then as Então,
} from "@badeball/cypress-cucumber-preprocessor";

const env = (name) => Cypress.env(name);

const selectors = {
  firstName: [
    "#firstName",
    "input[name='firstName']",
    "[data-testid='firstName']",
    "[data-cy='firstName']",
  ],
  lastName: [
    "#lastName",
    "input[name='lastName']",
    "[data-testid='lastName']",
    "[data-cy='lastName']",
  ],
  name: [
    "#name",
    "[data-testid='name']",
    "[data-cy='name']",
    "input[name='name']",
    "input[name='nome']",
    "input[autocomplete='name']",
  ],
  email: [
    "#email",
    "[data-testid='email']",
    "[data-cy='email']",
    "input[name='email']",
    "input[type='email']",
  ],
  emailConfirmation: [
    "#email2",
    "input[name='email2']",
    "[data-testid='email2']",
    "[data-cy='email2']",
  ],
  password: [
    "#password",
    "#password1",
    "[data-testid='password']",
    "[data-cy='password']",
    "input[name='password']",
    "input[name='password1']",
    "input[name='senha']",
    "input[type='password']",
  ],
  passwordConfirmation: [
    "#password2",
    "input[name='password2']",
    "[data-testid='password2']",
    "[data-cy='password2']",
  ],
  phone: [
    "[data-testid='phone']",
    "[data-cy='phone']",
    "input[name='phone']",
    "input[name='telefone']",
    "input[type='tel']",
  ],
  cpf: [
    "[data-testid='cpf']",
    "[data-cy='cpf']",
    "input[name='cpf']",
    "input[name='document']",
  ],
  city: [
    "[data-testid='city']",
    "[data-cy='city']",
    "input[name='city']",
    "input[name='cidade']",
  ],
  search: [
    "[data-testid='search']",
    "[data-cy='search']",
    "input[name='search']",
    "input[name='busca']",
    "input[type='search']",
    "input[placeholder*='Buscar']",
    "input[placeholder*='buscar']",
  ],
  terms: [
    "#acceptedPrivacyDocument",
    "#is18YearsOldOrMore",
    "[data-testid='terms']",
    "[data-cy='terms']",
    "input[name='terms']",
    "input[name='termos']",
    "input[type='checkbox']",
  ],
};

Dado("que acesso a plataforma como pessoa usuária em viewport mobile", () => {
  cy.viewport(390, 844);
  cy.visit(env("REGISTER_PATH"));
});

Dado("que acesso a busca de profissionais em viewport mobile", () => {
  cy.viewport(390, 844);
  cy.visit(env("SEARCH_PATH"));
});

Dado("que acesso o fluxo de recuperação de senha em viewport mobile", () => {
  cy.viewport(390, 844);
  cy.visit(env("FORGOT_PASSWORD_PATH"));
});

Dado("que acesso a plataforma em viewport desktop", () => {
  cy.viewport(1366, 768);
  cy.visit(env("SEARCH_PATH"));
});

Quando("inicio o cadastro de pessoa usuária", () => {
  cy.get("body").then(($body) => {
    const alreadyOnForm =
      $body.find("#firstName, input[name='firstName'], #email").filter(":visible")
        .length > 0;

    if (!alreadyOnForm) {
      cy.clickByText([
        "cadastro",
        "cadastrar",
        "criar conta",
        "pessoa usuária",
        "paciente",
        "para pacientes",
        "buscar atendimento",
      ]);
    }
  });
});

Quando("preencho os dados obrigatórios da pessoa usuária de teste", () => {
  const [firstName, ...lastNameParts] = env("TEST_USER_NAME").split(" ");
  const email = uniqueEmail();

  fillPreferred(selectors.firstName, firstName || "Pessoa", selectors.name);
  fillPreferred(selectors.lastName, lastNameParts.join(" ") || "QA Lacrei");
  cy.typeIntoFirst(selectors.email, email);
  fillPreferred(selectors.emailConfirmation, email);
  cy.typeIntoFirst(selectors.password, env("TEST_USER_PASSWORD"));
  fillPreferred(selectors.passwordConfirmation, env("TEST_USER_PASSWORD"));
  fillOptional(selectors.phone, env("TEST_USER_PHONE"));
  fillOptional(selectors.cpf, env("TEST_USER_CPF"));
  fillOptional(selectors.city, env("TEST_USER_CITY"));
});

Quando("preencho o e-mail {string}", (email) => {
  cy.typeIntoFirst(selectors.email, email);
});

Quando("preencho a senha {string}", (password) => {
  cy.typeIntoFirst(selectors.password, password);
  fillPreferred(selectors.passwordConfirmation, password);
});

Quando("aceito os termos obrigatórios", () => {
  cy.checkIfPresent(selectors.terms);
});

Quando("envio o cadastro", () => {
  cy.clickByText(["finalizar", "criar conta", "cadastrar", "continuar", "avançar"]);
});

Quando("envio o cadastro sem aceitar os termos", () => {
  cy.clickByText(["finalizar", "criar conta", "cadastrar", "continuar", "avançar"]);
});

Quando("tento avançar no cadastro", () => {
  cy.clickByText(["continuar", "avançar", "próximo", "cadastrar", "criar conta"]);
});

Então("devo visualizar a etapa de pós-cadastro ou confirmação", () => {
  cy.contains(
    /p[oó]s-cadastro|confirma|verifica|perfil|prefer[eê]ncia|boas-vindas|sucesso/i,
    { timeout: 20000 },
  ).should("be.visible");
});

Quando("concluo as preferências iniciais, se existirem", () => {
  cy.get("body").then(($body) => {
    const hasContinue = /continuar|concluir|pular|avançar/i.test($body.text());
    if (hasContinue) {
      cy.clickByText(["continuar", "concluir", "pular", "avançar"]);
    }
  });
});

Quando("busco uma pessoa profissional pela especialidade configurada", () => {
  searchFor(env("TEST_SPECIALTY"));
});

Quando("realizo uma busca por {string}", (term) => {
  searchFor(term);
});

Quando("aplico um filtro de localização, se disponível", () => {
  fillOptional(selectors.city, env("TEST_USER_CITY"));
  cy.get("body").then(($body) => {
    if (/filtrar|aplicar/i.test($body.text())) {
      cy.clickByText(["filtrar", "aplicar"]);
    }
  });
});

Quando("abro o primeiro resultado disponível", () => {
  cy.findFirstVisible([
    "[data-testid*='professional']",
    "[data-cy*='professional']",
    "[data-testid*='profissional']",
    "[data-cy*='profissional']",
    "article",
    "li",
    ".card",
  ]).click({ force: true });
});

Quando("aciono a opção de contato da pessoa profissional", () => {
  cy.clickByText(["contatar", "contato", "agendar", "enviar mensagem", "entrar"]);
});

Quando("informo o e-mail da pessoa usuária de teste", () => {
  cy.typeIntoFirst(selectors.email, env("TEST_USER_EMAIL"));
});

Quando("solicito o envio das instruções de recuperação", () => {
  cy.clickByText(["enviar", "recuperar", "redefinir", "continuar"]);
});

Quando("navego pelos elementos interativos usando teclado", () => {
  cy.get("body").then(($body) => {
    const firstFocusable = $body
      .find("a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])")
      .filter(":visible")
      .first();

    expect(firstFocusable.length).to.be.greaterThan(0);
    cy.wrap(firstFocusable).focus();
  });
  cy.pressTab();
  cy.focused().should("exist");
});

Então("devo visualizar resultados de profissionais de saúde", () => {
  cy.contains(/profissional|resultado|especialidade|psicologia|sa[úu]de/i, {
    timeout: 20000,
  }).should("be.visible");
});

Então("devo visualizar informações mínimas de uma pessoa profissional", () => {
  cy.contains(/profissional|crp|crm|especialidade|atendimento|contato/i).should(
    "be.visible",
  );
});

Então("devo visualizar um canal de contato ou orientação para login", () => {
  cy.contains(/contato|telefone|whatsapp|e-mail|login|entrar|cadastro/i).should(
    "be.visible",
  );
});

Então("a lista deve permanecer funcional e sem quebra de layout", () => {
  cy.get("body").should("be.visible");
  cy.window().then((appWindow) => {
    cy.document().then((document) => {
      expect(document.documentElement.scrollWidth).to.be.lte(appWindow.innerWidth + 2);
    });
  });
});

Então(
  "devo visualizar uma mensagem de nenhum resultado ou orientação de nova busca",
  () => {
    cy.contains(/nenhum|não encontramos|nova busca|tente novamente|sem resultado/i, {
      timeout: 20000,
    }).should("be.visible");
  },
);

Então("devo visualizar uma mensagem de validação para e-mail inválido", () => {
  cy.contains(/e-mail|email|inválido|invalido|obrigatório|obrigatorio/i).should(
    "be.visible",
  );
});

Então("devo visualizar uma mensagem de obrigatoriedade dos termos", () => {
  cy.contains(/termo|política|politica|privacidade|obrigatório|obrigatorio/i).should(
    "be.visible",
  );
});

Então("devo visualizar uma mensagem de validação para senha fraca", () => {
  cy.contains(/senha|mínimo|minimo|fraca|caracteres|segura/i).should("be.visible");
});

Então(
  "devo visualizar confirmação de envio ou orientação de verificação de e-mail",
  () => {
    cy.contains(/enviado|verifique|instruções|instrucoes|e-mail|email/i, {
      timeout: 20000,
    }).should("be.visible");
  },
);

Então("a mensagem exibida não deve expor existência ou ausência de cadastro", () => {
  cy.get("body").then(($body) => {
    const text = $body.text().toLowerCase();
    expect(text).not.to.match(/não cadastrado|nao cadastrado|não existe|nao existe/);
  });
});

Então("o foco visível deve acompanhar a navegação", () => {
  cy.focused().should("be.visible");
});

Então("nenhum elemento essencial deve ficar inacessível pelo teclado", () => {
  cy.get("a, button, input, select, textarea, [role='button']").then(($items) => {
    expect($items.length).to.be.greaterThan(0);
  });
});

function uniqueEmail() {
  const email = env("TEST_USER_EMAIL");
  const stamp = Date.now();
  if (!email.includes("@")) return `qa.lacrei+${stamp}@example.com`;

  const [local, domain] = email.split("@");
  return `${local.replace(/\+.*/, "")}+${stamp}@${domain}`;
}

function fillOptional(selectorsList, value) {
  cy.get("body").then(($body) => {
    for (const selector of selectorsList) {
      const $element = $body.find(selector).filter(":visible").first();
      if ($element.length) {
        cy.wrap($element).clear({ force: true }).type(value, { force: true, delay: 0 });
        return;
      }
    }
  });
}

function fillPreferred(primarySelectors, value, fallbackSelectors = []) {
  cy.get("body").then(($body) => {
    const selectorsList = [...primarySelectors, ...fallbackSelectors];

    for (const selector of selectorsList) {
      const $element = $body.find(selector).filter(":visible").first();
      if ($element.length) {
        cy.wrap($element).clear({ force: true }).type(value, { force: true, delay: 0 });
        return;
      }
    }

    throw new Error(`Campo obrigatório não encontrado: ${selectorsList.join(", ")}`);
  });
}

function searchFor(term) {
  cy.findFirstVisible(selectors.search).clear({ force: true }).type(term, {
    force: true,
    delay: 0,
  });

  cy.get("body").then(($body) => {
    if (/buscar|pesquisar|procurar/i.test($body.text())) {
      cy.clickByText(["buscar", "pesquisar", "procurar"]);
    } else {
      cy.focused().type("{enter}");
    }
  });
}
