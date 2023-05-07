import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import navigationPage from '../../pages/NavigationPage';
  import loginPage from '../../pages/LoginPage';

  let credentials;

  Given("Que el usuario se encuentra autenticado y está en la página de ajustes de navegación", () => {
    loginPage.defaultLogin()
    navigationPage.navigate()
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
    cy.visit("/")
  });
  
  Then("debería existir un nuevo botón con el label {string}", (newButtonLabel) => {
    cy.fixture('Navigation').then( navigation => {
      cy.contains(navigation[newButtonLabel]).should('be.visible');
    });
  });