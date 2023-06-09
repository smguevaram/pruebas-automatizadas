import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import postPage from '../../pages/PostPage';
  import loginPage from '../../pages/LoginPage';
  
  Given("Que el usuario se encuentre autenticado en la plataforma", () => {
    loginPage.defaultLogin()
  });
  
  When("Ingresa a la sección de posts", () => {
    postPage.goToPostList();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/edit_post`)
  });

  When("ingresa al detalle de un post, edita el titulo por {string} y hace clic e nel botón de guardar cambios", (newTitle) => {
    cy.get('li a.gh-list-data').first().click();
    cy.fixture('Posts').then( post => {
        postPage.enterPostTitle(post[newTitle])
        postPage.publish()
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/edit_post`)
      });
  });
  
  When("regresa al listado de posts", () => {
    postPage.goToPostList();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/edit_post`)
  });
  
  Then("el post con titulo {string} se encuentra visible", (newTitle) => {
    cy.fixture('Posts').then( post => {
      postPage.assertTitle(post[newTitle]);
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/edit_post`)
    });
  });