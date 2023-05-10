import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import pagePage from '../../pages/PagePage';
  import loginPage from '../../pages/LoginPage';
  
  Given("Que el usuario se encuentre autenticado en la plataforma de Ghost", () => {
    loginPage.defaultLogin()
  });
  
  When("Ingresa a la sección de páginas", () => {
    pagePage.goToPageList()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/edit_page`)
  });

  When("ingresa al detalle de una página, edita el titulo por {string} y hace clic en el botón de guardar cambios", (newTitle) => {
    cy.get('li a.gh-list-data').first().click();
    cy.fixture('Pages').then( page => {
        pagePage.enterPageTitle(page[newTitle])
        pagePage.publish()
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/edit_page`)
      });
  });
  
  When("regresa al listado de páginas de ghost", () => {
    pagePage.goToPageList()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/edit_page`)
  });
  
  Then("la página con titulo {string} se encuentra visible", (newTitle) => {
    cy.fixture('Pages').then( page => {
      pagePage.assertTitle(page[newTitle]);
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/edit_page`)
    });
  });