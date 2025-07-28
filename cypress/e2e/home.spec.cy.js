/// <reference types= "cypress">

import homePage from "../support/home/homePage";
import loginPage from "../support/login/loginPage";

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Validation of Home Page Elements", () => {
    it("Home - Validate home", () => {
      homePage.verifyHomePage();
      homePage.validateHome();
    });

    it("Home - Login in home", () => {
      loginPage.authenticateUser();
    });
  });
});
