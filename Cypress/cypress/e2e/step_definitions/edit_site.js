import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import sitePage from '../../pages/SitePage';
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario se encuentra autenticado y en la página de configuraciones generales", () => {
    loginPage.defaultLogin();
    sitePage.navigate();
  });
  
  When("cambia el titulo del sitio a {string}", (newTitle) => {
    cy.wait(1000)
    cy.fixture('Site').then( site => {
        sitePage.enterTitle(site[newTitle])
    });
    
  });

  When("hace click en el botón Save settings", () => {
    sitePage.save()
  })
  
  Then("el nombre del sitio cambia a {string}", (newTitle) => {
    cy.fixture('Site').then( site => {
        sitePage.editTitleAssert(site.newTitle);
    });
  });