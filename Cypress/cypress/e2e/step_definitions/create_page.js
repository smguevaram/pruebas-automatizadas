import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import pagePage from '../../pages/PagePage';
import loginPage from '../../pages/LoginPage';

Given("Que el usuario se encuentre autenticado en ghost", () => {
  loginPage.defaultLogin()
});

When("Hace clic en la opción pages del menú y va a la página de creación", () => {
  pagePage.navigate()
  cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_page`)
  pagePage.goToCreatePage()
  cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_page`)
});

When("crea una página con titulo {string} y con el contenido {string}", (title, content) => {
  cy.fixture('Pages').then( page => {
    pagePage.enterPageTitle(page[title])
    pagePage.enterPageContent(page[content])
    pagePage.publish()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_page`)
  });
});

When("regresa al listado de páginas", () => {
  pagePage.goToPageList()
  cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_page`)
});

Then("la página con titulo {string} se encuentra visible en el listado", (title) => {
  cy.fixture('Pages').then( page => {
    pagePage.assertTitle(page[title]);
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/page/create_page`)
  });
});