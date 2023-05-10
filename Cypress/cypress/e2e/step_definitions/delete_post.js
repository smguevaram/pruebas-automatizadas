import {
    Given,
    When,
    Then,
  } from "@badeball/cypress-cucumber-preprocessor";
  import postPage from '../../pages/PostPage';
  import loginPage from '../../pages/LoginPage';
  
  Given("Que el usuario se encuentre autenticado en la plataforma, ingresa la sección de post y la lista no está vacía", () => {
    loginPage.defaultLogin()
    postPage.goToPostList();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/delete_post`)
    postPage.goToCreatePost();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/delete_post`)
    cy.fixture('Posts').then( post => {
        postPage.enterPostTitle(post.toDeleteTitle)
        postPage.enterPostContent(post.toDeleteTitle)
        postPage.publish();
        postPage.goToPostList()
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/delete_post`)
    });
  });

  When("ingresa al detalle de un post", () => {
    cy.get('li a.gh-list-data').first().click();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/delete_post`)
  });
  
  When("elimina el post", () => {
    postPage.deletePost();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/delete_post`)
  });

  When("regresa al listado de posts de Ghost", () => {
    postPage.goToPostList();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/delete_post`)
  });
  
  Then("el post ya no se encuentra en el listado", () => {
    cy.fixture('Posts').then( post => {
      postPage.assertDelete(post.toDeleteTitle);
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/post/delete_post`)
    });
  });