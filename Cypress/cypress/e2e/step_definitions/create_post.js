import {
  Given,
  When,
  Then,
} from "@badeball/cypress-cucumber-preprocessor";
import postPage from '../../pages/PostPage';
import loginPage from '../../pages/LoginPage';



Given("Que el usuario se encuentre autenticado", () => {
  loginPage.defaultLogin()
});

When("Hace clic en la opción Post del menú lateral y clic en el botón Drafts", () => {
  postPage.navigate()
});

When("despues ingresa el Post Title {string}", (title) => {
     cy.get('.gh-editor-title.ember-text-area[tabindex="1"]').type('Mi Título de Post');

  });

  When("Ingresar el texto del post {string}", (detail) => {

    cy.get('[data-kg="editor"]').type('Aqui el texto del horror');

  });

  When("click en publicar y publicar ahora", () => {

    postPage.publish();
   
  });
  When("despues click en post del costado izquierdo", () => {

    postPage.returnPost();
   
  });

  Then("validar la publicacion del post",(title) =>{
    postPage.createAssert('Mi Título de Post')
  });