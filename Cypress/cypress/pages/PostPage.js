class PostPage {
    navigate() {
        cy.clearCookies()
        cy.get('li [href="#/posts/"]').click()
        
    }

    newPost() {
        cy.contains('New post').click()
        cy.wait(1000)
    }
    
    enterPost(title) {
        cy.get('.gh-editor-title.ember-text-area[tabindex="1"]')
            .type(title);
        
    }

    publish(){
    cy.contains('Publish').click();
    this.publishNow()
    }
    
    publishNow(){
        cy.get('button.gh-publishmenu-button').click();
    }

    returnPost(){
        cy.contains('Posts').click();
        cy.wait(1000);
    }

    returnPostDrafts(){
      cy.contains('Drafts').click();
      cy.wait(1000);
  }


    createAssert(title){
        cy.contains(title);
    }


    getPostByTitle(title) {
        console.log('entre por aca maldicion')
        console.log(title)
        cy.contains('.gh-content-entry-title', title).click();
      }
    
      updateTitle(title) {
        cy.get('.gh-editor-title.ember-text-area[tabindex="1"]').clear().type(title);
      }
    
      updateContent(content) {
        cy.get('[data-kg="editor"]').clear().type(content);
      }
    
      savePost() {
        cy.contains('button', 'Save').click({ force: true });
      }
    
      assertSaveSuccess() {
        cy.get('.gh-notification-content').should('have.text', 'Post saved as draft.');
      }




}


export default postPage = new PostPage();

