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
  });

  When("ingresa el label {string} e ingresa la url {string} en formulario", (newButtonLabel, newButtonUrl) => {
    cy.fixture('Navigation').then( navigation => {
        navigationPage.enterSecNavLabel(navigation[newButtonLabel])
    });
  });

  When("hace clic en el botón Save y va al blog de ghost", () => {
    navigationPage.save();
    cy.wait(1000)
    cy.visit("/")
  });
  
  Then("debería existir un nuevo botón con el label {string} en la navegación secundaria", (newButtonLabel) => {
    cy.fixture('Navigation').then( navigation => {
      cy.contains(navigation[newButtonLabel]).should('be.visible');
    });
  });