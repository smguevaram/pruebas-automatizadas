import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import navigationPage from '../../pages/NavigationPage';
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario se encuentra autenticado en Ghost y está en la página de ajustes de navegación", () => {
    loginPage.defaultLogin()
    navigationPage.navigate()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_secondary_navigation`)
  });

  When("ingresa el label {string} e ingresa la url {string} en formulario", (newButtonLabel, newButtonUrl) => {
    cy.fixture('Navigation').then( navigation => {
        navigationPage.enterSecNavLabel(navigation[newButtonLabel])
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_secondary_navigation`)
    });
  });

  When("hace clic en el botón Save y va al blog de ghost", () => {
    navigationPage.save();
    cy.wait(1000)
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_secondary_navigation`)
    cy.visit("/")
    cy.wait(1000)
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_secondary_navigation`)
  });
  
  Then("debería existir un nuevo botón con el label {string} en la navegación secundaria", (newButtonLabel) => {
    cy.fixture('Navigation').then( navigation => {
      cy.contains(navigation[newButtonLabel]).should('be.visible');
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_secondary_navigation`)
    });
  });