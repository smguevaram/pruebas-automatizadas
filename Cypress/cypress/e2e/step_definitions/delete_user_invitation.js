import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import userPage from '../../pages/UserPage';
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario se encuentra autenticado, está en la página de listado de usuarios y con al menos una invitación pendiente", () => {
    loginPage.defaultLogin();
    userPage.goListUsers();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/delete_user_invitation`)
    cy.fixture('Users').then( user => {
        userPage.sendInvitation(user.newUserEmail);
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/delete_user_invitation`)
    });
    cy.wait(1000)
    cy.reload();
    cy.wait(2000)
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/delete_user_invitation`)
  });
  
  When("hace clic en el enlace Revoke de una de las invitaciones", () => {
    userPage.deleteInvitation();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/delete_user_invitation`)
  });
  
  Then("ya no visualiza la invitación en el listado", () => {
    userPage.invitationAssert();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/user/delete_user_invitation`)
  });