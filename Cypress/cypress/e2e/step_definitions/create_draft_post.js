import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import postPage from '../../pages/PostPage';
  import loginPage from '../../pages/LoginPage';
  
  Given("Que el usuario se encuentre autenticado en Ghost", () => {
    loginPage.defaultLogin()
  });
  
  When("Hace clic en el botón de creación asociado a la opción post del menú lateral", () => {
    postPage.goToCreatePost();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/create_draft_post`)
  });
  
  When("ingresa titulo {string} y contenido {string}, espera 2 segundos", (title, content) => {
    cy.fixture('Posts').then( post => {
      postPage.enterPostTitle(post[title])
      postPage.enterPostContent(post[content])
      cy.wait(2000)
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/create_draft_post`)
    });
  });
  
  When("regresa al lsitado de posts de Ghost", () => {
    postPage.navigate()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/create_draft_post`)
  });
  
  Then("el post con titulo {string} se encuentra visible en el listado con el status draft", (title) => {
    cy.fixture('Posts').then( post => {
      postPage.assertDraftTitle(post[title]);
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/create_draft_post`)
    });
  });