export class Commonpage {
  scrollToBottom() {
    cy.scrollTo("bottom");
  }

  scrollToTop() {
    cy.scrollTo("top");
  }

  scrollToElement(selector) {
    cy.get(selector).scrollIntoView();
  }

  checkElementExist(element) {
    return cy.get("body").then((container) => {
      if (container.find(element).length) {
        cy.log(`Existe o elemento - ${element}`);
        return cy.wrap(true);
      } else {
        cy.log(`Não existe o elemento ${element}`);
        return cy.wrap(false);
      }
    })
  }

  checkElementAndlick(selector) {
    cy.get('body').then(($body) => {
      if ($body.find(selector).length) {
        cy.get(selector).click();
      }
    })
  }
  
}

export const commonPage = new Commonpage();
