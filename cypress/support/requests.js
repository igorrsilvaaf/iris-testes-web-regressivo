/// <reference types="cypress" />

/*
  Esse código serve para os testes de API, ao invés de passar os metodos no teste eu só chamo os comandos
  por exemplo se eu quiser realizar um get eu só chamo o requestGet
*/
const apiPath = Cypress.env("baseApi");

Cypress.Commands.add("requestGet", (route, queryParams) => {
  const options = {
    method: "GET",
    url: `${apiPath}${route}${queryParams}`,
    failOnStatusCode: false,
  };
  cy.api(options).then(($response) => {
    return $response;
  });
});

Cypress.Commands.add("requestGetCodeError", (route, queryParams) => {
  const options = {
    method: "GET",
    url: `${apiPath}${route}${queryParams}`,
    failOnStatusCode: false,
  };

  cy.api(options).then(($response) => {
    return $response;
  });
});

Cypress.Commands.add("requestPost", (route, body) => {
  const options = {
    method: "POST",
    url: `${apiPath}${route}`,
    body: body,
  };

  cy.api(options).then(($response) => {
    return $response;
  });
});

Cypress.Commands.add("requestPostCodeError", (route, body) => {
  const options = {
    method: "POST",
    url: `${apiPath}${route}`,
    failOnStatusCode: false,
    body: body,
  };

  cy.api(options).then(($response) => {
    return $response;
  });
});
