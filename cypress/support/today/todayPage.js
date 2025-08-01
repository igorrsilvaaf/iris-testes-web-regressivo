/// <reference types="cypress">

import elements from "./todayElements";

class TodayPage {
  verifyTodayPage() {
    cy.get(elements.getValidateTitleToday()).should("be.visible");
    cy.get(elements.getValidateSidebar()).should("be.visible");
    cy.get(elements.getValidatePomodoroToday()).should("be.visible");
    cy.get(elements.getValidateTitlePomodoro()).should("be.visible");
    cy.get(elements.getAddTaskButton()).should("be.visible");
    cy.get(elements.getClickInButtonCalendar()).should("be.visible");
  }

  addTaskToday() {
    
  }
}

export default new TodayPage();
