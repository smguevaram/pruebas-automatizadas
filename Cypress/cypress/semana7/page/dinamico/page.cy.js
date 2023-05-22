import   loginPage   from '../../../pages/LoginPage';
import utils from '../../../pages/Utils';


describe('Crear Page Con titulo, contenido, titulo de metadata de 200 caracteres y descripción de metadata', () => {
  it('passes', () => {
    loginPage.defaultLogin();
    cy.visit('/ghost/#/pages');
    cy.contains('New page').click();

    const randomNumber = Math.floor(Math.random() * 10) ;

    cy.request('GET', 'http://my.api.mockaroo.com/semi_automaticos.json?key=9fa1b0a0')
    .its('body') // Accede a los datos de respuesta
    .then((data) => {
      // Utiliza los datos para llenar el formulario
      utils.enterPostTitle(data[randomNumber].titulo); 
      utils.enterPostContent(data[randomNumber].contenido);      
      utils.click_settings();
      cy.contains('Meta data').click();
      utils.enterMetaTitle(data[randomNumber].titulo_metadata_200);
      utils.enterMetaDescription(data[randomNumber].descripcion_metadata);
      utils.enterMetaUrl(data[randomNumber].url_valida);
      cy.get('.content-cover.ember-view').click();
      utils.publish()

    });


  })
})



describe('Crear Pagina Con titulo, contenido, titulo de metadata y descripción de metadata de mas de 500 caracteres', () => {
  it('passes', () => {
    loginPage.defaultLogin();
    cy.visit('/ghost/#/pages');
    cy.contains('New page').click();

    const randomNumber = Math.floor(Math.random() * 10) ;

    cy.request('GET', 'http://my.api.mockaroo.com/semi_automaticos.json?key=9fa1b0a0')
    .its('body') // Accede a los datos de respuesta
    .then((data) => {
      // Utiliza los datos para llenar el formulario
      utils.enterPostTitle(data[randomNumber].titulo); 
      utils.enterPostContent(data[randomNumber].contenido);      
      utils.click_settings();
      cy.contains('Meta data').click();
      utils.enterMetaTitle(data[randomNumber].titulo);
      utils.enterMetaDescription(data[randomNumber].descripcion_metadata_400.toString());
      utils.enterMetaUrl(data[randomNumber].url_valida);
      cy.get('.content-cover.ember-view').click();
      utils.publish()
      cy.get('article.gh-alert-red')
      .should('contain', 'Saving failed: Meta Description cannot be longer than 500 characters.')
      .find('button.gh-alert-close')
      .should('exist');


    });

  })
})


describe('crear pagina Con titulo, contenido, titulo de metadata, descripción de metadata y URL no válida', () => {
  it('passes', () => {
    loginPage.defaultLogin();
    cy.visit('/ghost/#/pages');
    cy.contains('New page').click();

    const randomNumber = Math.floor(Math.random() * 10) ;

    cy.request('GET', 'http://my.api.mockaroo.com/semi_automaticos.json?key=9fa1b0a0')
    .its('body') // Accede a los datos de respuesta
    .then((data) => {
      // Utiliza los datos para llenar el formulario
      utils.enterPostTitle(data[randomNumber].titulo); 
      utils.enterPostContent(data[randomNumber].contenido);      
      utils.click_settings();
      cy.contains('Meta data').click();
      utils.enterMetaTitle(data[randomNumber].titulo);
      utils.enterMetaDescription(data[randomNumber].descripcion_metadata);
      utils.enterMetaUrl(data[randomNumber].url_novalida);
      cy.get('.content-cover.ember-view').click();
      utils.publish()

      // ...
    });

  })
})

describe('Crear page Con titulo, contenido, titulo de metadata, descripción de metadata y URL válida', () => {
  it('passes', () => {
    loginPage.defaultLogin();
    cy.visit('/ghost/#/pages');
    cy.contains('New page').click();

    const randomNumber = Math.floor(Math.random() * 10) ;

    cy.request('GET', 'http://my.api.mockaroo.com/semi_automaticos.json?key=9fa1b0a0')
    .its('body') // Accede a los datos de respuesta
    .then((data) => {
      // Utiliza los datos para llenar el formulario
      utils.enterPostTitle(data[randomNumber].titulo); 
      utils.enterPostContent(data[randomNumber].contenido);      
      utils.click_settings();
      cy.contains('Meta data').click();
      utils.enterMetaTitle(data[randomNumber].titulo);
      utils.enterMetaDescription(data[randomNumber].descripcion_metadata);
      utils.enterMetaUrl(data[randomNumber].url_valida);
      cy.get('.content-cover.ember-view').click();
      utils.publish()

    });

  })
})




describe('crear pagina Con título, contenido y título de twitter y descripción de 0 caracteres', () => {
  it('passes', () => {
    loginPage.defaultLogin();
    cy.visit('/ghost/#/pages');
    cy.contains('New page').click();

    const randomNumber = Math.floor(Math.random() * 10) ;

    cy.request('GET', 'http://my.api.mockaroo.com/semi_automaticos.json?key=9fa1b0a0')
    .its('body') // Accede a los datos de respuesta
    .then((data) => {
      // Utiliza los datos para llenar el formulario
      utils.enterPostTitle(data[randomNumber].titulo); 
      utils.enterPostContent(data[randomNumber].contenido);      
      utils.click_settings();
      cy.contains('Twitter card').click();
      utils.enterTwitterTitle(data[randomNumber].titulo);
      cy.get('.content-cover.ember-view').click();
      utils.publish()
    });


  })
})


describe('crear pagina Con título, contenido y título de twitter de 200 caracteres', () => {
  it('passes', () => {
    loginPage.defaultLogin();
    cy.visit('/ghost/#/pages');
    cy.contains('New page').click();

    const randomNumber = Math.floor(Math.random() * 10) ;

    cy.request('GET', 'http://my.api.mockaroo.com/semi_automaticos.json?key=9fa1b0a0')
    .its('body') // Accede a los datos de respuesta
    .then((data) => {
      // Utiliza los datos para llenar el formulario
      utils.enterPostTitle(data[randomNumber].titulo); 
      utils.enterPostContent(data[randomNumber].contenido);      
      utils.click_settings();
      cy.contains('Twitter card').click();
      utils.enterTwitterTitle(data[randomNumber].titulo_twitter_200);
      cy.get('.content-cover.ember-view').click();
      utils.publish()

    });

  })
})

