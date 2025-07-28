/// <reference types="cypress">

import { elements } from "./homeElements";

class HomePage {
  verifyHomePage() {
    cy.get(elements.title).should("be.visible");
    cy.url().should("eq", Cypress.config("baseUrl"));
  }

  validateHome() {
    cy.get(elements.title).should("be.visible");
    cy.get(elements.subtitulo).should("be.visible");
    cy.get(elements.loginButton).should("be.visible");
    cy.get(elements.registerButton).should("be.visible");
    cy.get(elements.featuresTitulo).should("be.visible");
    cy.get(elements.landingFeaturePomodoro).should("be.visible");
    cy.get(elements.landingFeatureTask).should("be.visible");
  }
}

export default new HomePage();
