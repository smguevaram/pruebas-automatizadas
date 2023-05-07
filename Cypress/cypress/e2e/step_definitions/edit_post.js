import {
    Given,
    When,
    Then,
  } from "@cypress/cucumber-preprocessor";
  import postPage from '../../pages/PostPage';
  import loginPage from '../../pages/LoginPage';
  
  
  Given("Que el usuario se encuentre autenticado", () => {
    
    loginPage.defaultLogin()
  });
  
  When("Hace clic en la opción Posts del menú lateral", () => {
    postPage.navigate()
    
  });
  
  When("hace clic en el primer post en la lista", () => {
    cy.fixture('Posts').then( post => {
      postPage.getPostByTitle(post['title']);
  
      
  });
    
  });
  
  When("cambia el titulo a {string}", (title) => {
    postPage.updateTitle(title);
  });
  
  When("cambia el contenido a {string}", (content) => {
    postPage.updateContent(content);
  });
  
  When("hace clic en el botón de guardar", () => {
    postPage.savePost();
  });
  
  Then("se debe mostrar el mensaje de éxito de guardado", () => {
    postPage.assertSaveSuccess();
  });