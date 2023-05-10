import {
    Given,
    When,
    Then,
    And,
  } from "@badeball/cypress-cucumber-preprocessor";
  import tagPage from '../../pages/TagPage';
  import loginPage from '../../pages/LoginPage';

  Given("Que el usuario se encuentra autenticado y está en la página de listado de etiquetas", () => {
    loginPage.defaultLogin();
    tagPage.navigate();
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/delete_tags`)
  });
  
  When("Crea una etiqueta con {string}, {string} y {string}", (toDeleteName, toDeleteSlug, toDeleteDescription) => {
    cy.fixture('Tags').then( tag => {
        tagPage.enterName(tag[toDeleteName])
        tagPage.enterSlug(tag[toDeleteSlug])
        tagPage.enterDescription(tag[toDeleteDescription])
        tagPage.save()
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/delete_tags`)
    });
  });

  When("hace click en la opción tags del menú lateral principal de Ghost", () => {
    cy.wait(1000)
    tagPage.goListTags()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/delete_tags`)
  })
  
  When("Hace clic en la etiqueta creada con el nombre {string}", (toDeleteName) => {
    cy.fixture('Tags').then( tag => {
        cy.contains(tag[toDeleteName]).click()
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/delete_tags`)
    });
  });

  When("Hace clic en el botón Delete", () => {
    tagPage.deleteTag()
    cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/delete_tags`)
  })

  Then("no debería ver la etiqueta con el nombre {string}", (toDeleteName) => {
    cy.fixture('Tags').then( tag => {
        cy.contains(tag[toDeleteName]).should('not.exist')
        cy.screenshot(`../../${Cypress.env('ghostVersion')}/tag/delete_tags`)
    });
  })