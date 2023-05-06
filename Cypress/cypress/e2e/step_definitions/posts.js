import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import postPage from '../../pages/PostPage';
  import loginPage from '../../pages/LoginPage';

  let credentials;

  Given("Que el usuario se encuentra autenticado y está página de administración de Ghost", () => {
    loginPage.defaultLogin()
  });
  
  When("Hace clic en la opción Tags del menú lateral y clic en el botón New tag", () => {
    postPage.navigate()
  });

  When("Ingresa nombre {string}, {string} y {string}", (name, slug, description) => {
    cy.fixture('Posts').then( post => {
        postPage.enterName(post[name])
        postPage.enterSlug(post[slug])
        postPage.enterDescription(post[description])
    });
  });

  When("hace clic en el botón Save", () => {
    postPage.save();
  });

  When("hace click en la opción tags del menú lateral", () => {
    postPage.goListPost()
  })
  
  Then("debería ver la nueva etiqueta con el slug {string} en el listado de etiquetas", (slug) => {
    cy.fixture('Posts').then( post => {
        postPage.createAssert(post[slug]);
    });
  });