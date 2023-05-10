import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import navigationPage from '../../pages/NavigationPage';
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario se encuentra autenticado, está en la página de ajustes de navegación y hay botones creados", () => {
    loginPage.defaultLogin()
    navigationPage.navigate()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
    cy.fixture('Navigation').then( navigation => {
        navigationPage.enterLabel(navigation.newDeleteButtonLabel)
        navigationPage.enterUrl(navigation.newDeleteButtonUrl)
        navigationPage.save();
        cy.wait(1000)
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
    });
  });

  When("elimina un botón de la navegación principal y va al blog", () => {
    navigationPage.deleteButton();
    navigationPage.save()
    cy.wait(1000)
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
    cy.visit("/")
    cy.wait(1000)
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
  });
  
  Then("el botón eliminado ya no existe en la nevagación principal", () => {
    cy.fixture('Navigation').then( navigation => {
      cy.contains(navigation.newDeleteButtonLabel).should('not.exist')
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/navigation/create_button_navigation`)
    });
  });