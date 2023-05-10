import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import userPage from '../../pages/UserPage';
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario se encuentra autenticado y está en la página de listado de usuarios", () => {
    loginPage.defaultLogin();
    userPage.goListUsers();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/edit_user`)
  });
  
  When("Hace clic en un usuario", () => {
    userPage.goUserDetail();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/edit_user`)
  });

  When("Edita el nombre con el dato {string} y hace clic en el botón Save de la página", (editedName) => {
    cy.fixture('Users').then( user => {
      userPage.enterName(user[editedName])
      userPage.save()
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/edit_user`)
    });
  })

  When("hace click en la opción Staff del menú lateral principal", () => {
    userPage.goListUsers()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/edit_user`)
  })
  
  Then("debería ver el usuario con el nuevo nombre {string} en el listado de usuarios", (editedName) => {
    cy.fixture('Users').then( user => {
        userPage.editAssert(user[editedName]);
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/edit_user`)
    });
  });