import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import tagPage from '../../pages/TagPage';
  import loginPage from '../../pages/LoginPage';

  let credentials;

  Given("Que el usuario se encuentra autenticado y está página de administración de Ghost", () => {
    loginPage.defaultLogin()
  });
  
  When("Hace clic en la opción Tags del menú lateral y clic en el botón New tag", () => {
    tagPage.navigate()
  });

  When("Ingresa nombre {string}, {string} y {string}", (name, slug, description) => {
    cy.fixture('Tags').then( tag => {
        tagPage.enterName(tag[name])
        tagPage.enterSlug(tag[slug])
        tagPage.enterDescription(tag[description])
    });
  });

  When("hace clic en el botón Save", () => {
    tagPage.save();
  });

  When("hace click en la opción tags del menú lateral de Ghost", () => {
    tagPage.goListTags()
  })
  
  Then("debería ver la nueva etiqueta con el slug {string} en el listado de etiquetas", (slug) => {
    cy.fixture('Tags').then( tag => {
      tagPage.createAssert(tag[slug]);
    });
  });