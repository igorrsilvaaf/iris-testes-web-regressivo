/// <reference types="cypress" />

import elements from "./loginElements";
import elementsHome from "../home/homeElements";
import userData from "../../fixtures/users.json";
import { commonPage } from "../common/commonPage";

class LoginPage {
  authenticateUser(username = userData.email2, password = userData.password2) {
    this.getClickInButtonLoginHome();
    this.fillFieldUsername(username);
    this.getFillFieldPassword(password);
    this.clickInButtonLogin();
    cy.wait(4000);
  }

  /**
   * Preenche o email a partir do user.json.
   */
  fillFieldUsername(user) {
    cy.get(elements.getFillFieldUsername())
      .should("have.length", 1)
      .and("be.visible");
    cy.get(elements.getFillFieldUsername()).type(user, { log: false });
  }

  /*
    Clica no botão de login na home
  */
  getClickInButtonLoginHome() {
    cy.get(elements.getClickInButtonLoginHome()).should("be.visible");
    cy.get(elements.getClickInButtonLoginHome()).click({ force: true });
  }

  /**
   * Preenche a senha a partir do user.json.
   */
  getFillFieldPassword(password) {
    cy.get(elements.getFillFieldPassword())
      .should("have.length", 1)
      .and("be.visible");
    cy.get(elements.getFillFieldPassword()).type(password, { log: false });
  }

  /**
   * Clica no botão "Entrar" depois de preencher o email e senha.
   */
  clickInButtonLogin() {
    cy.get(elements.getClickInButtonLogin()).click({ force: true });
  }

  /*
    Clica no botão de login pela home
  */
  clickInButtonHome() {
    cy.get(elements.getClickInButtonLoginHome()).click({ force: true });
  }

  /**
   * Valida se o login foi feito
   */
  validateCorrectLogin() {
    cy.get(elements.getValidationSuccessLogin()).should("be.visible");
    cy.get(elements.getValidateField()).should("be.visible");
    cy.wait(2000);
  }

  validateErrorLogin() {
    cy.get(elements.getValidationErrorLogin()).should("be.visible");
  }

  /**
   * Valida se está na página para iniciar o login.
   */
  validatePageLogin() {
    cy.get(elements.getValidateTitleLogin()).should("be.visible");
    cy.get(elements.getValidateSubTitleLogin()).should("be.visible");
  }

  /*
    Tentar fazer login com email incorreto
  */
  authenticateWithUsernameInvalid(username, password) {
    this.fillFieldUsername(username);
    this.getFillFieldPassword(password);
    this.clickInButtonLogin();
  }

  /**
   * Tentar fazer login com senha incorreto
   */
  authenticateWithPasswordInvalid(username, password) {
    this.fillFieldUsername(username);
    this.getFillFieldPassword(password);
    this.clickInButtonLogin();
  }

  /** 
   * Faz logout pelo menu
   */
  clickInButtonLogout() {
    cy.get(elements.getClickInButtonMenu()).should("be.visible").click();
    cy.get(elements.getClickInButtonLogout()).should("be.visible").click();
  }

  /** 
   * Validade se a mensagem de changelog esta na tela
   */
  changeLogValidation() {
    cy.wait(1000);
    cy.get("body").then(($body) => {
      if ($body.find(elements.getValidateChangeLog()).length) {
        cy.get(elements.getClickInButtonCloseChangelog()).click({
          force: true,
        });
      }
    });
  }
}

export default new LoginPage();
