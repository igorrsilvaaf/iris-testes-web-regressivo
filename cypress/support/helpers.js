/* Ele configura uma "escuta" para qualquer requisição de rede que contenha o term especificado em sua URL e,
   em seguida, pausa a execução do seu teste até que essa requisição de rede tenha sido completada.
*/
export function awaitPageLoad(term) {
  cy.intercept(`**${term}**`).as("load");
  cy.wait("@load");
}
