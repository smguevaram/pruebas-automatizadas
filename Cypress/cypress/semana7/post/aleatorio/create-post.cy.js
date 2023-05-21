import {faker} from '@faker-js/faker';

import postPage from '../../../pages/PostPage';
import loginPage from '../../../pages/LoginPage';

describe('Crear un post', () => {
  beforeEach('Navega hasta la página de creación de de páginas', () => {
    loginPage.defaultLogin()
    cy.visit('/ghost/#/posts/')
    postPage.goToCreatePost()
  });

  it('Crea un post con titulo y contenido', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();
    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    postPage.publish()

    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    postPage.assertTitle(title);
  }) 

  it('No es posible crear un post con titulo de 5000 caracteres y contenido', () => {
    const title = faker.string.alpha({ length: 500 });
    const content = faker.lorem.words();
    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.gh-publishmenu-trigger').should('not.exist');
  }) 

 it('Crea un post con titulo (Untitled) y contenido', () => {
    const content = faker.lorem.words();
    postPage.enterPostContent(content)
    postPage.publish()

    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    postPage.assertTitle('(Untitled)');
  }) 

   it('Crea un post con titulo y contenido de 0 caracteres', () => {
    const title = faker.lorem.words();
    const content = '{backspace}';
    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    postPage.publish()

    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    postPage.assertTitle(title);
  })

  it('Crea un post con titulo y contenido de 1000 caracteres en una sola palabra', () => {
    const content = faker.string.alpha({ length: 1000 });
    const title = faker.lorem.words();
    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    postPage.publish()
    
    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    postPage.assertTitle(title);
  }) 

  it('Crea un post con título, contenido y título de twitter y descripción de 0 caracteres', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();
    const twitterTitle = faker.lorem.words();
    const twitterDescription = '{backspace}';
    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.post-settings').click()
    cy.wait(1000)
    cy.get('.nav-list-item:nth-child(2)').click()
    cy.wait(1000)
    cy.get('.post-setting-twitter-title').clear().type(twitterTitle)
    cy.get('.post-setting-twitter-description').clear().type(twitterDescription)
    cy.get('.back.settings-menu-header-action').click()
    cy.get('.close.settings-menu-header-action').click()


    postPage.publish()

    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    postPage.assertTitle(title);
  })

  it('No es posible crear un post con título, contenido y título de twitter de 200 caracteres y contenido de 0 caracteres', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();
    const twitterTitle = faker.string.alpha({ length: 500 });
    const twitterDescription = '{backspace}';
    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.post-settings').click()
    cy.wait(1000)
    cy.get('.nav-list-item:nth-child(2)').click()
    cy.wait(1000)
    cy.get('.post-setting-twitter-title').clear().type(twitterTitle)
    cy.get('.post-setting-twitter-description').clear().type(twitterDescription)
    cy.get('.form-group.error.ember-view').should('be.visible');
  })

  it('Crea un post con título, contenido y path de URL compuesto por palabras separadas', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();

    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.post-settings').click()
    cy.wait(1000)
    cy.get('.post-setting-slug.ember-text-field.gh-input.ember-view').clear().type(title)

    cy.get('.close.settings-menu-header-action').click()


    postPage.publish()

    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    postPage.assertTitle(title);
  })

  it('Crea un post con título, contenido y path de 500 caracteres', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();
    const path = faker.string.alpha({ length: 400 });

    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.post-settings').click()
    cy.wait(1000)
    cy.get('.post-setting-slug.ember-text-field.gh-input.ember-view').clear().type(path)

    cy.get('.close.settings-menu-header-action').click()

    postPage.publish()

    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    cy.get('.gh-main').scrollTo('bottom');
    cy.wait(2000)
    postPage.assertTitle(title);
  }) 

  it('Crea un post con título, contenido y título de facebook y descripción de 0 caracteres', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();
    const facebookTitle = faker.lorem.words();
    const facebookDescription = '{backspace}';
    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.post-settings').click()
    cy.wait(1000)
    cy.get('.nav-list-item:nth-child(3)').click()
    cy.wait(1000)
    cy.get('.post-setting-og-title').clear().type(facebookTitle)
    cy.get('.post-setting-og-description').clear().type(facebookDescription)
    cy.get('.back.settings-menu-header-action').click()
    cy.get('.close.settings-menu-header-action').click()


    postPage.publish()

    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    cy.get('.gh-main').scrollTo('bottom');
    postPage.assertTitle(title);
  }) 

  it('Crea un post con título, contenido y resumen de 100 caracteres', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();
    const excerpt = faker.string.alpha({ length: 100 });

    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.post-settings').click()
    cy.wait(1000)
    cy.get('.post-setting-custom-excerpt').as('input').clear().type(excerpt)
    cy.get('.close.settings-menu-header-action').click()

    postPage.publish()

    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    cy.get('.gh-main').scrollTo('bottom');
    postPage.assertTitle(title);
  })

  it('No es posible crear un post con título, contenido y resumen de 400 caracteres', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();
    const excerpt = faker.string.alpha({ length: 400 });

    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.post-settings').click()
    cy.wait(1000)
    cy.get('.post-setting-custom-excerpt').as('input').clear().type(excerpt)
    cy.get('@input').blur()
    cy.get('#custom-excerpt + .response').should('be.visible');
  })

  it('No es posible crear un post con título, contenido y título de facebook de 400 caracteres y contenido de 0 caracteres', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();
    const facebookTitle = faker.string.alpha({ length: 400 });
    const facebookDescription = '{backspace}';
    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.post-settings').click()
    cy.wait(1000)
    cy.get('.nav-list-item:nth-child(3)').click()
    cy.wait(1000)
    cy.get('.post-setting-og-title').clear().type(facebookTitle)
    cy.get('.post-setting-og-description').clear().type(facebookDescription)
    cy.get('.form-group.error.ember-view').should('be.visible');
  })

  it('Crear un post con titulo, contenido, titulo de metadata y descripción de metadata', () => {
    const title = faker.lorem.words();
    const content = faker.lorem.words();
    const metadataTitle = faker.lorem.words();
    const metadataDescription = faker.lorem.words();
    postPage.enterPostTitle(title)
    postPage.enterPostContent(content)
    cy.get('.post-settings').click()
    cy.wait(1000)
    cy.get('.nav-list-item:nth-child(1)').click()
    cy.wait(1000)
    cy.get('#meta-title').clear().type(metadataTitle)
    cy.get('#meta-description').clear().type(metadataDescription)
    cy.get('.back.settings-menu-header-action').click()
    cy.get('.close.settings-menu-header-action').click()

    postPage.publish()

    // Regresa al listado de páginas y verifica
    postPage.goToPostList()
    cy.get('.gh-main').scrollTo('bottom');
    postPage.assertTitle(title); 
  })
})
  