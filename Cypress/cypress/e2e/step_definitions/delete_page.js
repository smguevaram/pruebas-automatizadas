import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import pagePage from '../../pages/PagePage';
  import loginPage from '../../pages/LoginPage';
  
  Given("Que el usuario se encuentre autenticado en la plataforma, ingresa la sección de páginas y la lista no está vacía", () => {
    loginPage.defaultLogin()
    pagePage.goToPageList();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/delete_page`)
    pagePage.goToCreatePage();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/delete_page`)
    cy.fixture('Pages').then( page => {
        pagePage.enterPageTitle(page.toDeleteTitle)
        pagePage.enterPageContent(page.toDeleteTitle)
        pagePage.publish();
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/delete_page`)
        pagePage.goToPageList()
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/delete_page`)
    });
  });

  When("ingresa al detalle de una página", () => {
    cy.get('li a.gh-list-data').first().click();
  });
  
  When("elimina la página", () => {
    pagePage.deletePage();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/delete_page`)
  });

  When("regresa al listado de páginas de Ghost", () => {
    pagePage.goToPageList();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/delete_page`)
  });
  
  Then("la página ya no se encuentra en el listado", () => {
    cy.fixture('Pages').then( page => {
      pagePage.assertDelete(page.toDeleteTitle);
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/delete_page`)
    });
  });