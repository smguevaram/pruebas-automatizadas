import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario accede al sitio web", () => {
    cy.visit("/ghost")
    cy.fixture('Users').then( credentialsReceived => {
      this.credentials = credentialsReceived;
    })
    console.log(this.credentials)
  });
  
  When("Ingresa con el username {string} y la contraseña {string} y hace clic en el botón login", (username, password) => {
    loginPage.enterUser(this.credentials[username])
    loginPage.enterPassword(this.credentials[password])
    loginPage.submit()
  });

  Then("El usuario ingresa a la sección de administración", () => {
    loginPage.loginAssert()
  });
  
  Then("The error message {string} is displayed", (errorMessage) => {
    loginPage.elements.errorMessage().should("have.text", errorMessage);
  });