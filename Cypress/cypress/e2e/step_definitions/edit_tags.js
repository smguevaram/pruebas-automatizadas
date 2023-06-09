import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import tagPage from '../../pages/TagPage';
  import loginPage from '../../pages/LoginPage';

  let credentials;

  Given("Que el usuario se encuentra autenticado y está en la página de listado de etiquetas no vacía", () => {
    loginPage.defaultLogin();
    tagPage.goListTags();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/edit_tag`)
  });
  
  When("Hace clic en una etiqueta", () => {
    tagPage.goTagDetail()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/edit_tag`)
  });

  When("Edita el nombre con el dato {string} y hace clic en el botón Save", (editedName) => {
    cy.fixture('Tags').then( tag => {
      tagPage.enterName(tag[editedName])
      tagPage.save()
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/edit_tag`)
    });
  })

  When("hace click en la opción tags del menú lateral principal", () => {
    tagPage.goListTags()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/edit_tag`)
  })
  
  Then("debería ver la etiqueta con el nuevo nombre {string} en el listado de etiquetas", (editedName) => {
    cy.fixture('Tags').then( tag => {
      tagPage.createAssert(tag[editedName]);
      cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/edit_tag`)
    });
  });