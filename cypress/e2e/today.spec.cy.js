/// <reference types= "cypress">

import todayPage from "../support/today/todayPage";
import todayElements from "../support/today/todayElements";
import loginPage from "../support/login/loginPage";
import { commonPage } from "../support/common/commonPage";

describe("Today Tests", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.clearCookies();
    cy.clearLocalStorage();
  });

  context("Validation today page", () => {
    it("Today - Validate page", () => {
      loginPage.authenticateUser();
      commonPage.checkElementAndlick(todayElements.getClickInButtonCloseChangelog());
      todayPage.verifyTodayPage();
    });
  });
});
