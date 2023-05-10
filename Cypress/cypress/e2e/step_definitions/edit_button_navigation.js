import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import navigationPage from '../../pages/NavigationPage';
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario se encuentra autenticado y está en la página de ajustes de navegación de Ghost", () => {
    loginPage.defaultLogin()
    navigationPage.navigate()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/edit_button_navigation`)
  });

  When("edita el label del primer botón por el texto {string} visible en la lista", (editedButtonLabel) => {
    cy.fixture('Navigation').then( navigation => {
        navigationPage.editLabel(navigation[editedButtonLabel])
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/edit_button_navigation`)
    });
  });

  When("hace clic en el botón Save y va al blog de Ghost", () => {
    navigationPage.save();
    cy.wait(1000)
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/edit_button_navigation`)
    cy.visit("/")
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/edit_button_navigation`)
  });
  
  Then("debería existir un botón con el label {string}", (editedButtonLabel) => {
    cy.fixture('Navigation').then( navigation => {
      cy.contains(navigation[editedButtonLabel]).should('be.visible');
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/edit_button_navigation`)
    });
  });