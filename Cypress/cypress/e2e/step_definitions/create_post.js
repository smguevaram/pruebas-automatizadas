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
});

When("crea un post con titulo {string} y con el contenido {string}", (title, content) => {
  cy.fixture('Posts').then( post => {
    postPage.enterPostTitle(post[title])
    postPage.enterPostContent(post[content])
    postPage.publish()
  });
});

When("regresa al lsitado de posts de Ghost", () => {
  postPage.navigate()
});

Then("el post con titulo {string} se encuentra visible en el listado", (title) => {
  cy.fixture('Posts').then( post => {
    postPage.assertTitle(post[title]);
  });
});