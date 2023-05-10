import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import pagePage from '../../pages/PagePage';
  import loginPage from '../../pages/LoginPage';
  
  Given("Que el usuario se encuentre autenticado en la plataforma de ghost", () => {
    loginPage.defaultLogin()
  });
  
  When("va a la página de creación de página", () => {
    pagePage.navigate()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_draft_page`)
    pagePage.goToCreatePage();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_draft_page`)
  });
  
  When("ingresa titulo {string} y contenido {string} en formulario, espera 2 segundos", (title, content) => {
    cy.fixture('Pages').then( page => {
      pagePage.enterPageTitle(page[title])
      pagePage.enterPageContent(page[content])
      cy.wait(2000)
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_draft_page`)
    });
  });
  
  When("regresa al lsitado de páginas de Ghost", () => {
    pagePage.goToPageList()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_draft_page`)
  });
  
  Then("la página con titulo {string} se encuentra visible en el listado con el status draft", (title) => {
    cy.fixture('Pages').then( page => {
      pagePage.assertDraftTitle(page[title]);
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_draft_page`)
    });
  });