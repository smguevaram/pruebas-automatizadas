import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import loginPage from '../../pages/LoginPage';


  Given("Que el usuario se encuentre autenticado", () => {
    loginPage.defaultLogin()
  });
  
  When("que busque no manches", () => {
    console.log("no manches")
  });

  
  Then("valida que funcione no manches", () => {
    console.log("valida que funcione no manches")
  });