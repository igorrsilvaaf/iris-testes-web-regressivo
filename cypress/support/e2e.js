// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import "./commands";
//import "./commandsSession";
import "./requests";
import "cypress-real-events/support"; // simulacão de eventos reais

const os = Cypress.env("layout");

require("@cypress/grep")();

beforeEach(() => {
  cy.intercept({ resourceType: /xhr|fetch/ }, { log: false });
});

Cypress.SelectorPlayground.defaults({
  selectorPriority: [
    "data-test",
    "data-testid",
    "id",
    "class",
    "attributes",
    "tag",
    "nth-child",
  ],
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
