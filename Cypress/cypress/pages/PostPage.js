

class PostPage {
    

    navigate() {
       cy.visit('/ghost/#/posts');
       cy.wait(1000);
    }

    goToCreatePost() {
        cy.get('[href="#/editor/post/"]').first().click()
    }
    
    enterPostTitle(title) {
        cy.get('.gh-editor-title')
        .clear()
        .type(title);
    }

    enterPostContent(content) {
        cy.get('.koenig-editor__editor')
            .type(content);
    }

    publish() {
        cy.contains('Publish').click();
        cy.wait(1000)
        cy.contains('Continue, final review').click();
        cy.wait(1000);
        cy.contains('Publish post, right now').click();
        cy.wait(1000);
    }

    goToPostList() {
        cy.visit('/ghost/#/posts');
        cy.wait(1000)
    }

    deletePost() {
        cy.get(".post-settings").click()
        cy.wait(1000)
        cy.get('.settings-menu-delete-button').click()
        cy.wait(1000)
        cy.get('.modal-footer button').last().click()
        cy.wait(2000)
    }

    assertDraftTitle(title) {
        cy.contains(title);
    }

    assertDelete(title){
        cy.contains(title).should('not.exist');
    }

    assertTitle(title){
        cy.contains(title);
    }
}

export default postPage = new PostPage();

