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
  });

  When("edita el label del primer botón por el texto {string} visible en la lista", (editedButtonLabel) => {
    cy.fixture('Navigation').then( navigation => {
        navigationPage.editLabel(navigation[editedButtonLabel])
    });
  });

  When("hace clic en el botón Save y va al blog de Ghost", () => {
    navigationPage.save();
    cy.wait(1000)
    cy.visit("/")
  });
  
  Then("debería existir un botón con el label {string}", (editedButtonLabel) => {
    cy.fixture('Navigation').then( navigation => {
      cy.contains(navigation[editedButtonLabel]).should('be.visible');
    });
  });