import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import userPage from '../../pages/UserPage';
  import loginPage from '../../pages/LoginPage';

  let credentials;

  Given("Que el usuario se encuentra autenticado, está en la página de listado de usuarios no vacía y listado de usuarios suspendidos vacía", () => {
    loginPage.defaultLogin();
    userPage.goListUsers();
  });
  
  When("hace clic en un usuario activo no owner", () => {
    userPage.goUserNotOwnerDetail();
  });

  When("Suspende el usuario", (editedName) => {
    userPage.suspendUser()
  })
  
  Then("debería visualizar el estado suspendido al lado del nombre del usuario", (editedName) => {
    userPage.assertSuspendUser()
  });