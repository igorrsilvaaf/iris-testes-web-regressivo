/// <reference types= "cypress">

import loginPage from "../support/login/loginPage";
import homePage from "../support/home/homePage";
import users from "../fixtures/users.json";

let userName = users.email;
let userPassword = users.password;
let userName2 = users.email2;
let userPassword2 = users.password2;

describe("Login Tests", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Validation login in the home page", () => {
    it("Login - Usuário e senha correto", () => {
      loginPage.validatePageLogin();
      loginPage.authenticateUser();
      loginPage.validateCorrectLogin();
    });

    it("Login - Usuário incorreto", () => {
      loginPage.clickInButtonHome();
      loginPage.authenticateWithUsernameInvalid(userName, userPassword2);
      loginPage.validateErrorLogin();
    });

    it("Login - Usuário correto e senha incorreta", () => {
      loginPage.clickInButtonHome();
      loginPage.authenticateWithPasswordInvalid(userName2, userPassword);
      loginPage.validateErrorLogin();
    });

    it.only("Login - Logout", () => {
      loginPage.authenticateUser();
      loginPage.changeLogValidation();
      loginPage.clickInButtonLogout();
      loginPage.validateCorrectLogin();
      loginPage.clickInButtonLogout();
      homePage.validateHome();
    });
  });
});
