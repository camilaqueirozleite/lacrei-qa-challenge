Cypress.Commands.add("findFirstVisible", (selectors) => {
  const list = Array.isArray(selectors) ? selectors : [selectors];

  return cy.get("body").then(($body) => {
    for (const selector of list) {
      const $element = $body.find(selector).filter(":visible").first();
      if ($element.length) return cy.wrap($element);
    }

    throw new Error(`Nenhum seletor visível encontrado: ${list.join(", ")}`);
  });
});

Cypress.Commands.add("clickByText", (labels) => {
  const text = Array.isArray(labels) ? labels.join("|") : labels;
  cy.contains("button, a, [role='button']", new RegExp(text, "i")).click({
    force: true,
  });
});

Cypress.Commands.add("typeIntoFirst", (selectors, value) => {
  cy.findFirstVisible(selectors).clear({ force: true }).type(value, {
    force: true,
    delay: 0,
  });
});

Cypress.Commands.add("checkIfPresent", (selectors) => {
  const list = Array.isArray(selectors) ? selectors : [selectors];

  cy.get("body").then(($body) => {
    const elements = [];

    for (const selector of list) {
      $body
        .find(selector)
        .filter(":visible")
        .each((_, element) => {
          if (!elements.includes(element)) elements.push(element);
        });
    }

    if (elements.length) {
      cy.wrap(Cypress.$(elements)).check({ force: true });
    }
  });
});

Cypress.Commands.add("pressTab", () => {
  cy.focused().then(($focused) => {
    const focusables = Cypress.$(
      "a[href], button, input, select, textarea, [tabindex]:not([tabindex='-1'])",
    )
      .filter(":visible")
      .filter((_, element) => !element.disabled);

    const currentIndex = focusables.index($focused[0]);
    const nextIndex = currentIndex + 1 >= focusables.length ? 0 : currentIndex + 1;
    const next = focusables.get(nextIndex);

    if (next) {
      cy.wrap(next).focus();
    }
  });
});
