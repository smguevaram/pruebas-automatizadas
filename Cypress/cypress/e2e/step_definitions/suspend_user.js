import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import userPage from '../../pages/UserPage';
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario se encuentra autenticado, está en la página de listado de usuarios no vacía y listado de usuarios suspendidos vacía", () => {
    loginPage.defaultLogin();
    userPage.goListUsers();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/suspend_user`)
  });
  
  When("hace clic en un usuario activo no owner", () => {
    userPage.goUserNotOwnerDetail();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/suspend_user`)
  });

  When("Suspende el usuario", (editedName) => {
    userPage.suspendUser()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/suspend_user`)
  })
  
  Then("debería visualizar el estado suspendido al lado del nombre del usuario", (editedName) => {
    userPage.assertSuspendUser()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/suspend_user`)
  });