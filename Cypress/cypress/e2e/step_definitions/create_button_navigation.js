import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import navigationPage from '../../pages/NavigationPage';
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario se encuentra autenticado y está en la página de ajustes de navegación", () => {
    loginPage.defaultLogin()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
    navigationPage.navigate()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
  });

  When("ingresa el label {string} e ingresa la url {string}", (newButtonLabel, newButtonUrl) => {
    cy.fixture('Navigation').then( navigation => {
        navigationPage.enterLabel(navigation[newButtonLabel])
        navigationPage.enterUrl(navigation[newButtonUrl])
    });
  });

  When("hace clic en el botón Save y va al blog", () => {
    navigationPage.save();
    cy.wait(1000)
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
    cy.visit("/")
    cy.wait(1000)
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
  });
  
  Then("debería existir un nuevo botón con el label {string}", (newButtonLabel) => {
    cy.fixture('Navigation').then( navigation => {
      cy.contains(navigation[newButtonLabel]).should('be.visible');
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
    });
  });