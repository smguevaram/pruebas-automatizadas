import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import userPage from '../../pages/UserPage';
  import loginPage from '../../pages/LoginPage';

  let credentials;

  Given("Que el usuario se encuentra autenticado y está en la página de listado de usuarios", () => {
    loginPage.defaultLogin();
    userPage.goListUsers();
  });
  
  When("Hace clic en un usuario", () => {
    userPage.goUserDetail();
  });

  When("Edita el nombre con el dato {string} y hace clic en el botón Save de la página", (editedName) => {
    cy.fixture('Users').then( user => {
      userPage.enterName(user[editedName])
      userPage.save()
    });
  })

  When("hace click en la opción Staff del menú lateral principal", () => {
    userPage.goListUsers()
  })
  
  Then("debería ver el usuario con el nuevo nombre {string} en el listado de usuarios", (editedName) => {
    cy.fixture('Users').then( user => {
        userPage.editAssert(user[editedName]);
    });
  });